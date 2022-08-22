import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CreateView from '../views/CreateView.vue'
import UpdateView from '../views/UpdateView.vue'
import DeleteView from '../views/DeleteView.vue'
const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/Create',
    name: 'Create',
    component: CreateView
    
  },
  {
    path: '/Update',
    name: 'Update',
    component: UpdateView
    
  },
  {
    path: '/Delete',
    name: 'Delete',
    component: DeleteView
    
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
