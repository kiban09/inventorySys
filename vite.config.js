import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react'
import { defineConfig, loadEnv } from 'vite';

export default ({ mode }) => {
    process.env = { ...process.env, ...loadEnv(mode, process.cwd())};

    return defineConfig({
        server:{
            host:true,
            hmr: {
                host: process.env.VITE_DEV_URL,
            },

            // watch:{
            //     usePolling: true,
            //     interval: 1000,
            // },
        },
        plugins:[
            laravel(['resources/js/bootstrap.js']),
            react(),
        ],
    });
}