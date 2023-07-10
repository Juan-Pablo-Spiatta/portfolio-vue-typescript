// Plugins
import { loadFonts } from "./webfontloader";
import vuetify from "./vuetify";
import pinia from "@/infraestructure/store";
import router from "@/infraestructure/router";

// Types
import type { App } from "vue";

export function registerPlugins(app: App) {
  loadFonts();
  app.use(vuetify).use(router).use(pinia);
}
