/// <reference types="vitest" />
import { defineConfig } from 'vite';
import { configDefaults } from 'vitest/config';

import react from '@vitejs/plugin-react';
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), vanillaExtractPlugin()],
  test: {
    coverage: {
      all: true,
      include: ['src/**/*.ts', 'src/**/*.tsx'],
      exclude: [
        ...configDefaults.exclude,
        'src/mocks',
        'src/main.tsx',
        'src/testUtils.tsx',
        'src/types.ts',
        'src/*.d.ts',
        'src/**/*.stories.ts',
        'src/**/*.stories.tsx',
      ],
      provider: 'v8',
      reporter: ['html', 'text'],
      thresholds: {
        '100': true,
      },
    },
    include: ['src/**/*.spec.ts?(x)'],
    environment: 'jsdom',
    globals: true,
    setupFiles: ['./vitest-setup.ts'],
  },
});
