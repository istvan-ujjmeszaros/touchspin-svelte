import { defineConfig, Plugin } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import { resolve } from 'path';
import { writeFileSync } from 'fs';
import { execSync } from 'child_process';

// Plugin to generate TypeScript declarations manually
function generateDts(): Plugin {
  return {
    name: 'generate-dts',
    closeBundle() {
      // Generate vanilla.d.ts with proper type exports
      const vanillaDts = `import type { SvelteComponent } from 'svelte';
import type { TouchSpinProps, TouchSpinEvents, TouchSpinHandle, TouchSpinChangeMeta } from './types';

export type { TouchSpinProps, TouchSpinEvents, TouchSpinHandle, TouchSpinChangeMeta };

export default class TouchSpin extends SvelteComponent<TouchSpinProps, TouchSpinEvents> {}
`;
      writeFileSync(resolve(__dirname, 'dist/vanilla.d.ts'), vanillaDts);

      // Copy types.d.ts from types.ts (we'll use tsc for this)
      execSync('tsc src/types.ts --declaration --emitDeclarationOnly --outDir dist --skipLibCheck', {
        cwd: __dirname,
      });
    },
  };
}

export default defineConfig({
  plugins: [
    svelte(),
    generateDts(),
  ],
  build: {
    lib: {
      entry: {
        vanilla: resolve(__dirname, 'src/vanilla.ts'),
      },
      formats: ['es'],
      fileName: (format, entryName) => `${entryName}.js`,
    },
    rollupOptions: {
      external: ['svelte', '@touchspin/core', '@touchspin/renderer-vanilla'],
    },
  },
});
