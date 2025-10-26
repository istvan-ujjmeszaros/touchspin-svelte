# @touchspin/svelte

## 5.0.1

### Patch Changes

- af0941f: fix: generate TypeScript declarations for published package

  The v5.0.0 package was published without TypeScript declaration files (.d.ts), causing module resolution errors in consuming applications.

  Changes:

  - Add custom Vite plugin to generate TypeScript declarations
  - Generate vanilla.d.ts with proper Svelte component type definitions
  - Generate types.d.ts from types.ts source file
  - Remove unused vite-plugin-dts dependency

  This ensures the package exports match the declared types in package.json and consumers can properly import `@touchspin/svelte/vanilla`.

## 5.0.0

### Patch Changes

- 44af334: ### Feat: Initial release of Svelte adapter

  Added the initial Svelte adapter for TouchSpin with full API compatibility to the Vue adapter. Features include:

  - Svelte 5 Runes support with `$state`, `$effect`, `$props`, and `$bindable`
  - Two-way data binding with `bind:value`
  - Event callbacks for all TouchSpin events
  - Imperative handle API for programmatic control
  - Full TypeScript support
  - Comprehensive test suite with Vitest
  - CI/CD pipelines with GitHub Actions
  - Changeset-based release management
