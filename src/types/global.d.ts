// Global TypeScript declarations for MOJS

// Basic types for PHP backend integration
declare namespace PKP {
  // Basic request/response types
  interface AjaxResponse {
    status: boolean;
    content: any;
    [key: string]: any;
  }

  // User session data
  interface User {
    id: number;
    username: string;
    roles: string[];
    email: string;
    firstName?: string;
    lastName?: string;
  }

  // Journal/Context data
  interface Context {
    id: number;
    name: string;
    path: string;
    primaryLocale: string;
    supportedLocales: string[];
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

// JQuery extensions for PKP
declare interface JQuery {
  // Add any custom jQuery plugins or extensions here
  // Example:
  // datepicker(options?: any): JQuery;
}

// Type definitions for common libraries
declare module '*.vue' {
  import { DefineComponent } from 'vue';
  const component: DefineComponent<{}, {}, any>;
  export default component;
}

// Allow importing Vue SFCs
declare module '*.vue' {
  import type { DefineComponent } from 'vue';
  const component: DefineComponent<{}, {}, any>;
  export default component;
}

// Allow importing other common file types
declare module '*.json' {
  const value: any;
  export default value;
}

declare module '*.scss' {
  const content: { [className: string]: string };
  export default content;
}
