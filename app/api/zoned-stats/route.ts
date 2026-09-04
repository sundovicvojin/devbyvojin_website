import { NextResponse } from 'next/server';

const APARTMENTS_URL = 'https://app.zonedpanonka.rs/data/apartments.json';

type Apartment = {
  id?: string;
  status?: string;
  lamela?: string;
  sobe?: string;
  kvadratura?: number;
  sqm?: number;
};

function normalizeStatus(status: string | undefined) {
  return status?.trim().toLowerCase() || 'unknown';
}

function summarizeApartments(apartments: Apartment[]) {
  const statusCounts = apartments.reduce(
    (counts, apartment) => {
      const status = normalizeStatus(apartment.status);

      if (status === 'slobodan') counts.available += 1;
      else if (status === 'rezervisan') counts.reserved += 1;
      else if (status === 'prodat' || status === 'prodato') counts.sold += 1;
      else counts.unknown += 1;

      return counts;
    },
    { available: 0, reserved: 0, sold: 0, unknown: 0 },
  );

  const byLamela = apartments.reduce<Record<string, number>>((counts, apartment) => {
    const lamela = apartment.lamela || 'unknown';
    counts[lamela] = (counts[lamela] || 0) + 1;
    return counts;
  }, {});

  const byStructure = apartments.reduce<Record<string, number>>((counts, apartment) => {
    const structure = apartment.sobe || 'unknown';
    counts[structure] = (counts[structure] || 0) + 1;
    return counts;
  }, {});

  const totalArea = apartments.reduce((sum, apartment) => {
    const area = Number(apartment.kvadratura ?? apartment.sqm ?? 0);
    return Number.isFinite(area) ? sum + area : sum;
  }, 0);

  return {
    totalUnits: apartments.length,
    availableUnits: statusCounts.available,
    reservedUnits: statusCounts.reserved,
    soldUnits: statusCounts.sold,
    unknownStatusUnits: statusCounts.unknown,
    byLamela,
    byStructure,
    totalArea: Number(totalArea.toFixed(2)),
    source: APARTMENTS_URL,
    updatedAt: new Date().toISOString(),
  };
}

export async function GET() {
  const response = await fetch(APARTMENTS_URL, {
    next: { revalidate: 600 },
    headers: {
      accept: 'application/json',
    },
  });

  if (!response.ok) {
    return NextResponse.json(
      { error: `Zoned apartments request failed with status ${response.status}` },
      { status: 502 },
    );
  }

  const apartments = (await response.json()) as Apartment[];

  if (!Array.isArray(apartments)) {
    return NextResponse.json(
      { error: 'Zoned apartments response is not a JSON array' },
      { status: 502 },
    );
  }

  return NextResponse.json(summarizeApartments(apartments));
}
