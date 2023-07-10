import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import viteTsconfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      styles: require("path").resolve(__dirname, "src", "styles"),
    },
  },
  plugins: [react(), viteTsconfigPaths()],
});
