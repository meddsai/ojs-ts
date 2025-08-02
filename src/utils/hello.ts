/**
 * A simple utility function that demonstrates TypeScript integration
 * @param name The name to greet
 * @returns A greeting message
 */
export function sayHello(name: string = 'World'): string {
  return `Hello, ${name}!`;
}

/**
 * Safely accesses nested object properties
 * @param obj The object to access
 * @param path The path to the property (e.g., 'user.profile.name')
 * @param defaultValue The default value if the path doesn't exist
 * @returns The value at the specified path or the default value
 */
export function getNested<T>(
  obj: Record<string, any> | null | undefined,
  path: string,
  defaultValue: T
): T {
  if (!obj) return defaultValue;
  
  const value = path
    .split('.')
    .reduce((acc, key) => (acc && acc[key] !== undefined ? acc[key] : undefined), obj);
  
  return value !== undefined ? value : defaultValue;
}

// Example usage with PKP global types
declare const pkp: {
  registry: {
    user?: {
      username: string;
      roles: string[];
    };
  };
};

// This is a type-safe way to access user data
export function getCurrentUsername(): string | null {
  return pkp?.registry?.user?.username ?? null;
}

// Type guard for checking if a value is an object
export function isObject(value: unknown): value is Record<string, unknown> {
  return value !== null && typeof value === 'object' && !Array.isArray(value);
}

// Type guard for checking if a value is a string
export function isString(value: unknown): value is string {
  return typeof value === 'string' || value instanceof String;
}
