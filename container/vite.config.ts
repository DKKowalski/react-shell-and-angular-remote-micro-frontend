import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "container",
      remotes: {
        marketing: "http://localhost:4200/remoteEntry.js",
      },
      shared: ["react", "react-dom"],
    }),
  ],
});
