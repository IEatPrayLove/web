import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import dotenv from "dotenv"
dotenv.config()
export default defineConfig({
    plugins: [react()],
    base: "./",
    build: {
        sourcemap: true,
        target: ["es2015"],
    },
    server: {
        hmr: true,
        open: true,
        host: "0.0.0.0",
        proxy: {
            "web3": {
                target: process.env.DEV_SERVER_URL,
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/web3/, ""),
            }
        }
    },
})