import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { cloudflare } from "@cloudflare/vite-plugin";
import { mochaPlugins } from "@getmocha/vite-plugins";

export default defineConfig(({ mode }) => {
  const plugins = [
    ...mochaPlugins(process.env as any),
    react(),
  ];

  // Only add Cloudflare plugin in development mode
  if (mode === 'development') {
    plugins.push(
      cloudflare({
        auxiliaryWorkers: [{ configPath: "/mocha/emails-service/wrangler.json" }],
      })
    );
  }

  return {
    plugins,
	  server: {
	    allowedHosts: true,
	  },
  build: {
    chunkSizeWarningLimit: 5000,
  },
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
  };
});
