# @touchspin/svelte

## 5.0.4

### Patch Changes

- fix: align runtime interop with Svelte 5

  - prevent bundling a private copy of the Svelte client runtime so `$effect` hooks share the app's context
  - regenerate the generated typings to use the `Component` return type so `bind:this` exposes the imperative handle

## 5.0.3

### Patch Changes

- 2e41cde: fix: prevent Svelte 5 effect_orphan error by guarding effects with mount state

  Fixed runtime error "effect_orphan" that occurred when $effect runes ran before component was properly mounted.

  Changes:

  - Add isMounted state flag to track component mount status
  - Guard all $effect calls with !isMounted check
  - Set isMounted=true at end of onMount lifecycle
  - Prevents effects from running before instance is initialized

  This ensures all reactive effects only run after the component and TouchSpin instance are fully initialized, fixing the "Uncaught Error: https://svelte.dev/e/effect_orphan" error.

## 5.0.2

### Patch Changes

- fix(ci): use npm script instead of shell command chain in workflow

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
