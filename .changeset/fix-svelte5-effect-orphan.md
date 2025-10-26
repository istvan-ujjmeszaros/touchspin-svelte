---
'@touchspin/svelte': patch
---

fix: prevent Svelte 5 effect_orphan error by guarding effects with mount state

Fixed runtime error "effect_orphan" that occurred when $effect runes ran before component was properly mounted.

Changes:
- Add isMounted state flag to track component mount status
- Guard all $effect calls with !isMounted check
- Set isMounted=true at end of onMount lifecycle
- Prevents effects from running before instance is initialized

This ensures all reactive effects only run after the component and TouchSpin instance are fully initialized, fixing the "Uncaught Error: https://svelte.dev/e/effect_orphan" error.
