import { defineConfig } from 'vite';
import { visualizer } from 'rollup-plugin-visualizer';
import clear from 'rollup-plugin-clear';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [visualizer(), clear({ targets: ['lib'], watch: true })],
  build: {
    outDir: 'lib',
    sourcemap: true,
    lib: {
      entry: 'src/index.ts',
      name: '@fe/utils',
      formats: ['es', 'umd']
    }
  }
});
