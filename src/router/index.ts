import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";
import StergeView from "@/views/StergeView.vue";
import AdaugaView from "@/views/AdaugaView.vue";
import ModificaView from "@/views/ModificaView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/sterge",
    name: "sterge",
    component: StergeView,
  },
  {
    path: "/adauga",
    name: "adauga",
    component: AdaugaView,
  },
  {
    path: "/modifica",
    name: "modifica",
    component: ModificaView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
