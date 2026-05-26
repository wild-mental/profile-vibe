import { defineConfig, type PluginOption } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Strips macOS/editor cruft (e.g. .DS_Store) that `publicDir` copies verbatim
// into the production build output.
function stripCruftFromDist(): PluginOption {
  const cruftNames = new Set([".DS_Store", "Thumbs.db"]);
  return {
    name: "strip-cruft-from-dist",
    apply: "build",
    closeBundle() {
      const outDir = path.resolve(__dirname, "dist");
      if (!fs.existsSync(outDir)) return;
      const walk = (dir: string) => {
        for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
          const full = path.join(dir, entry.name);
          if (entry.isDirectory()) walk(full);
          else if (cruftNames.has(entry.name)) fs.rmSync(full, { force: true });
        }
      };
      walk(outDir);
    },
  };
}

export default defineConfig({
  plugins: [react(), tailwindcss(), stripCruftFromDist()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  server: {
    fs: {
      allow: [path.resolve(__dirname, ".."), path.resolve(__dirname)],
    },
  },
});
