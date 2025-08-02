/**
 * API Utilities for OJS
 * 
 * This file provides type-safe API utilities for interacting with the OJS backend.
 */

/**
 * Fetches data from the OJS API with proper TypeScript types
 * @param endpoint The API endpoint (e.g., 'submissions', 'users')
 * @param options Fetch options (headers, method, etc.)
 * @returns A promise with the typed API response
 */
export async function fetchFromApi<T = any>(
  endpoint: string,
  options: RequestInit = {}
): Promise<PKP.ApiResponse<T>> {
  const baseUrl = pkp?.registry?.apiBaseUrl || '/api';
  const url = `${baseUrl}/${endpoint.replace(/^\/+/, '')}`;
  
  // Set default headers
  const headers = new Headers(options.headers);
  if (!headers.has('Content-Type')) {
    headers.set('Content-Type', 'application/json');
  }
  
  // Add CSRF token if available
  if (pkp?.registry?.csrfToken) {
    headers.set('X-Csrf-Token', pkp.registry.csrfToken);
  }

  try {
    const response = await fetch(url, {
      ...options,
      headers,
      credentials: 'include', // Include cookies for session handling
    });

    if (!response.ok) {
      const error = await response.json().catch(() => ({}));
      throw new Error(
        error.message || `API request failed with status ${response.status}`
      );
    }

    return await response.json();
  } catch (error) {
    console.error('API request failed:', error);
    throw error;
  }
}

/**
 * Example function to fetch a submission by ID
 * @param submissionId The ID of the submission to fetch
 * @returns The submission data with proper TypeScript types
 */
export async function fetchSubmission(submissionId: PKP.ID): Promise<PKP.Submission> {
  const response = await fetchFromApi<PKP.Submission>(`submissions/${submissionId}`);
  return response.data;
}

/**
 * Example function to fetch the current user
 * @returns The current user data with proper TypeScript types
 */
export async function fetchCurrentUser(): Promise<PKP.User | null> {
  try {
    const response = await fetchFromApi<PKP.User>('users/me');
    return response.data;
  } catch (error) {
    console.error('Failed to fetch current user:', error);
    return null;
  }
}

/**
 * Helper function to get a localized string with fallbacks
 * @param localizedString Object with locale keys and their corresponding strings
 * @param preferredLocale The preferred locale (defaults to current locale)
 * @param fallbackLocale Fallback locale if preferred is not available (defaults to primary locale)
 * @returns The localized string or an empty string if not found
 */
export function getLocalizedString(
  localizedString: Record<PKP.LocaleKey, string> | undefined,
  preferredLocale: string = pkp?.registry?.currentLocale || 'en',
  fallbackLocale: string = 'en'
): string {
  if (!localizedString) return '';
  
  // Try preferred locale first
  if (localizedString[preferredLocale]) {
    return localizedString[preferredLocale];
  }
  
  // Try fallback locale
  if (localizedString[fallbackLocale]) {
    return localizedString[fallbackLocale];
  }
  
  // Return the first available translation
  const firstTranslation = Object.values(localizedString)[0];
  return firstTranslation || '';
}
