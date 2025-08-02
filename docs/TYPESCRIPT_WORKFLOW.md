# TypeScript Integration Workflow

This document outlines the workflow for working with TypeScript in the OJS project, which uses a mixed PHP and TypeScript codebase.

## Project Structure

```
/
├── frontend/          # Next.js frontend application
│   ├── src/          # Frontend source files
│   ├── public/       # Static assets
│   ├── package.json  # Frontend dependencies
│   └── ...
├── src/              # Shared TypeScript source files
│   ├── types/        # TypeScript type definitions
│   └── utils/        # Shared utility functions
├── lib/              # PHP libraries
├── docs/             # Documentation
└── package.json      # Root dependencies and scripts
```

## TypeScript Setup

### Type Definitions

- **PHP Integration**: Type definitions for PHP classes and globals are in `src/types/php/`
- **Global Types**: Global type declarations are in `src/types/global.d.ts`
- **Frontend Types**: Frontend-specific types are in the `frontend` directory

### Configuration

- **Root `tsconfig.json`**: Base TypeScript configuration
- **Frontend `tsconfig.json`**: Extends root config with Next.js specific settings

## Development Workflow

### Adding New TypeScript Files

1. Place shared TypeScript files in the `src/` directory
2. Place frontend-specific TypeScript files in `frontend/src/`
3. Add type definitions in the appropriate `types/` directory

### Type Checking

To run type checking:

```bash
# Check all TypeScript files
npx tsc --noEmit

# Check a specific file
npx tsc --noEmit src/path/to/file.ts
```

### Building

```bash
# Build the frontend
cd frontend
npm run build
```

### Development Server

```bash
# Start the Next.js development server
cd frontend
npm run dev
```

## PHP and TypeScript Integration

### Accessing PHP Data in TypeScript

1. **Global Variables**:
   ```typescript
   declare const pkp: {
     registry: {
       user?: {
         username: string;
         roles: string[];
       };
     };
   };
   
   // Usage
   const username = pkp.registry.user?.username;
   ```

2. **API Endpoints**:
   - Use `ofetch` for API requests
   - Define response types for type safety

### Type Safety with PHP Objects

1. Create type definitions for PHP classes in `src/types/php/`
2. Use type guards to validate data from PHP:
   ```typescript
   interface User {
     id: number;
     username: string;
     email: string;
   }
   
   function isUser(data: unknown): data is User {
     return (
       typeof data === 'object' &&
       data !== null &&
       'id' in data &&
       'username' in data &&
       'email' in data
     );
   }
   ```

## Best Practices

1. **Type Everything**: Avoid using `any`; use proper types or `unknown` with type guards
2. **Document Complex Types**: Use JSDoc for complex type definitions
3. **Keep Types Close**: Place type definitions near their usage
4. **Validate Data**: Always validate data from external sources (APIs, PHP)
5. **Use Enums**: For fixed sets of values, use TypeScript enums or union types

## Troubleshooting

### Type Errors
- Ensure type definitions are up to date with PHP classes
- Check for missing or incorrect type imports
- Use type assertions (`as`) sparingly and only when necessary

### Build Issues
- Clear the TypeScript build cache: `rm -rf frontend/.next/cache`
- Ensure all dependencies are installed: `npm install`

## Next Steps

1. Gradually migrate existing JavaScript files to TypeScript
2. Add more comprehensive type definitions for PHP classes
3. Set up automated type checking in CI/CD pipeline
