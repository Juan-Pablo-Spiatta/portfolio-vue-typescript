// Composables
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: () =>
      import("@/infraestructure/components/layouts/DefaultLayout.vue"),
    children: [
      {
        path: "",
        name: "Home",
        component: () =>
          import("@/infraestructure/components/views/HomeView.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
