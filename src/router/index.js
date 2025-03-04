import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue';
import RegisterView from '@/views/RegisterView.vue';
import ConfirmEmailView from '@/views/ConfirmEmailView.vue';
import UserNotConfirmedView from '@/views/UserNotConfirmedView.vue';
import LoginView from '@/views/LoginView.vue';
import ForgotPasswordView from '@/views/ForgotPasswordView.vue';
import FilesView from '@/views/FilesView.vue';
import ProfileView from '@/views/ProfileView.vue';
import JobsView from '@/views/JobsView.vue';
import JobCreationView from '@/views/JobCreationView.vue';
import store from '@/store';


const routes = [
  {
    path: '/',
    name: "Home",
    component: HomeView,
  },
  {
    path: '/register',
    name: 'Register',
    component: RegisterView,
  },
  {
    path: '/confirm-email/:username',
    name: 'ConfirmEmail',
    component: ConfirmEmailView,
  },
  {
    path: '/user-not-confirmed',
    name: 'UserNotConfirmed',
    component: UserNotConfirmedView,
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginView,
  },
  {
    path: '/forgot-password',
    name: 'ForgotPassword',
    component: ForgotPasswordView,
  },
  {
    path: '/files',
    name: 'Files',
    component: FilesView,
    meta: { requiresAuth: true },
  },
  {
    path: '/profile',
    name: 'Profile',
    component: ProfileView,
    meta: { requiresAuth: true },
  },
  {
    path: '/jobs',
    name: 'Jobs',
    component: JobsView,
    meta: { requiresAuth: true },
  }
  ,
  {
    path: '/jobs/new',
    name: 'JobCreation',
    component: JobCreationView,
    meta: { requiresAuth: true },
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach((to, _, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (store.getters.isAuthenticated) {
      next();
      return;
    }
    next('/login');
  } else {
    next();
  }
});

export default router
