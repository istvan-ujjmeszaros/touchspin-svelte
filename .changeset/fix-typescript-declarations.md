---
'@touchspin/svelte': patch
---

fix: generate TypeScript declarations for published package

The v5.0.0 package was published without TypeScript declaration files (.d.ts), causing module resolution errors in consuming applications.

Changes:
- Add custom Vite plugin to generate TypeScript declarations
- Generate vanilla.d.ts with proper Svelte component type definitions
- Generate types.d.ts from types.ts source file
- Remove unused vite-plugin-dts dependency

This ensures the package exports match the declared types in package.json and consumers can properly import `@touchspin/svelte/vanilla`.
