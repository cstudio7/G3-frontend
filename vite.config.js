/*import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
})*/
import dotenv from 'dotenv';
dotenv.config();

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react({
      jsxRuntime: 'classic' // Add this line
    }
  )],
  build: {
    manifest: true,
    rollupOptions: {
      input: "./src/main.jsx",
    },
  },
});
