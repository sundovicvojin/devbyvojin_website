export type AnalyticsEventParameters = Record<
  string,
  string | number | boolean | undefined
>;

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

export function trackEvent(
  eventName: string,
  parameters: AnalyticsEventParameters = {},
): void {
  if (typeof window === 'undefined') {
    return;
  }

  if (typeof window.gtag !== 'function') {
    return;
  }

  const normalizedParameters = Object.fromEntries(
    Object.entries(parameters).filter(([, value]) => value !== undefined),
  ) as AnalyticsEventParameters;

  window.gtag('event', eventName, normalizedParameters);
}
