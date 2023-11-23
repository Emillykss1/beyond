import Vue from 'vue';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import VueRouter from 'vue-router';
import ChatList from './pages/ChatList.vue';
import MessageList from './pages/MessageList.vue';
import UserPrefile from './pages/UserPrefile.vue';
import ChatPeople from './pages/ChatPeople.vue';
import UserLogin from './pages/UserLogin.vue';
import UserRegister from './pages/UserRegister.vue';
import Vuex from 'vuex';
import users from './store/users'; 

Vue.component('UserPrefile', UserPrefile);
Vue.config.productionTip = false;
Vue.use(VueRouter);
Vue.use(Vuex);

const routes = [
  {
    path: '/',
    component: MessageList,
  },
  {
    path: '/chat',
    component: ChatList,
  },
  {
    path: '/pags/:id',
    name: 'user-profile',
    component: UserPrefile,
  },
  {
    path: '/chats/:id', 
    name: 'chat-people',
    component: ChatPeople,
  },
  {
    path: '/login',
    component: UserLogin,
  },
  {
    path: '/cadastro',
    component: UserRegister,
  },
];

const store = new Vuex.Store({
  modules: {
    users // Adicione o módulo users ao Vuex
  }
});

const router = new VueRouter({
  routes,
  mode: 'history'
});

new Vue({
  vuetify,
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
