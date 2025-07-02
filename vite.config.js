import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite'
import usePHP from 'vite-plugin-php';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
	plugins: [
        usePHP(),
        vue(),
        tailwindcss({
            config: {
                content: [],
                theme: {
                    extend: {},
                },
                plugins: [],
            },
        }),
    ],
});