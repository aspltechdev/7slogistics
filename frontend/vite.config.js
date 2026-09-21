// import react from '@vitejs/plugin-react'
// import { defineConfig } from 'vite'

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })


import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],

  server: {
    port: 5174,

    proxy: {
      "/tracking-api": {
        target: "http://www.7slogistics.in",
        changeOrigin: true,
        secure: false,

        rewrite: (path) =>
          path.replace(
            /^\/tracking-api/,
            ""
          ),
      },
    },
  },
});