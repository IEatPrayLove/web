import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import dotenv from "dotenv"
import path from "path";

dotenv.config()
console.info(process.env.DEV_SERVER, 789)
export default defineConfig({
    plugins: [react()],
    base: "./",
    build: {
        sourcemap: true,
        target: ["es2015"],
    },
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "src"),
        },
    },
    server: {
        hmr: true,
        open: true,
        host: "0.0.0.0",
        proxy: {
            "web3": {
                // target: process.env.DEV_SERVER,
                target: "http://172.19.240.1:3000",
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/web3/, ""),
            }
        }
    },
})