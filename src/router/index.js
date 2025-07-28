import { createRouter, createWebHistory } from 'vue-router'

const Dashboard = () => import("../views/Dashboard.vue");
const AddRecord = () => import("../views/AddRecord.vue");

const routes = [
  { path: '/', name: 'Dashboard', component: Dashboard },
  { path: '/add-record', name: 'Add Record', component: AddRecord }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
