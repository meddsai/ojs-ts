/**
 * Core PHP type definitions for OJS
 * These types represent the PHP backend interfaces that will be used in the TypeScript frontend
 */

declare namespace PKP {
  // Basic types
  type ID = number | string;
  type ISO8601DateString = string;
  type LocaleKey = string;
  type UrlString = string;

  // Enums
  enum SubmissionStatus {
    STATUS_QUEUED = 1,
    STATUS_PUBLISHED = 3,
    STATUS_DECLINED = 4,
    STATUS_ARCHIVED = 5,
  }

  // Interfaces
  interface Context {
    id: ID;
    url: UrlString;
    name: Record<LocaleKey, string>;
    description?: Record<LocaleKey, string>;
    primaryLocale: string;
    supportedLocales: string[];
    enabled: boolean;
  }

  interface User {
    id: ID;
    username: string;
    email: string;
    givenName: Record<LocaleKey, string>;
    familyName: Record<LocaleKey, string>;
    preferredPublicName?: Record<LocaleKey, string>;
    roles: UserRole[];
    disabled: boolean;
    dateRegistered: ISO8601DateString;
    dateLastLogin?: ISO8601DateString;
    mustChangePassword: boolean;
  }

  interface UserRole {
    id: ID;
    name: string;
    nameLocalized: Record<LocaleKey, string>;
    abbreviation: string;
    roleId: number;
    isDisplayedToPublish: boolean;
    permitSelfRegistration: boolean;
    permitMetadataEdit: boolean;
    isManager: boolean;
  }

  interface Submission {
    id: ID;
    contextId: ID;
    currentPublication?: Publication;
    dateLastActivity: ISO8601DateString;
    dateSubmitted?: ISO8601DateString;
    lastModified: ISO8601DateString;
    locale: string;
    stageId: number;
    status: SubmissionStatus;
    submissions: Submission[];
    urlWorkflow?: string;
    urlPublished?: string;
  }

  interface Publication {
    id: ID;
    title: Record<LocaleKey, string>;
    abstract?: Record<LocaleKey, string>;
    authors: Author[];
    copyrightHolder?: Record<LocaleKey, string>;
    copyrightYear?: number;
    datePublished?: ISO8601DateString;
    lastModified: ISO8601DateString;
    primaryContactId?: ID;
    publishedUrl?: UrlString;
    status: number;
    version: number;
  }

  interface Author {
    id: ID;
    email: string;
    familyName: Record<LocaleKey, string>;
    givenName: Record<LocaleKey, string>;
    affiliation?: Record<LocaleKey, string>;
    biography?: Record<LocaleKey, string>;
    includeInBrowse: boolean;
    orcid?: string;
    publicationId: ID;
    seq: number;
    userGroupId: ID;
  }

  // API Response Types
  interface ApiResponse<T> {
    data: T;
    meta?: Record<string, any>;
    errors?: ApiError[];
  }

  interface ApiError {
    id: string;
    status: string;
    title: string;
    detail?: string;
    meta?: Record<string, any>;
  }

  // Global PKP registry
  interface Registry {
    user: User | null;
    context: Context | null;
    currentLocale: string;
    apiBaseUrl: string;
    csrfToken: string;
  }
}

// Global variables
declare const pkp: {
  registry: PKP.Registry;
  // Add other global variables as needed
};

// Extend Window interface to include global variables
declare interface Window {
  pkp: typeof pkp;
  $: JQueryStatic;
  jQuery: JQueryStatic;
  // Add other global variables as needed
}
