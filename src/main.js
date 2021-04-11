import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';

import navModal from './pages/navModal.vue'
import navTable from './pages/navTable.vue'
import navBreadcrumb from './pages/navBreadcrumb';
import navProgress from './pages/navProgress';
import navSkeleton from './pages/navSkeleton';
import navTabs from './pages/navTabs';
import navDropdown from './pages/navDropdown';


Vue.config.productionTip = false
Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes:[
    {
      path:'/navModal',
      name:'navModal',
      component: navModal
    },
    {
      path:'/navTable',
      name:'navTable',
      component:navTable
    },
    {
      path:'/navTabs',
      name:'navTabs',
      component:navTabs
    },
    {
      path:'/navProgress',
      name:'navProgress',
      component:navProgress
    },
    {
      path:'/navBreadcrumb',
      name:'navBreadcrumb',
      component:navBreadcrumb
    },
    {
      path:'/navSkeleton',
      name:'navSkeleton',
      component:navSkeleton
    },    
    {
      path:'/navDropdown',
      name:'navDropdown',
      component:navDropdown
    },
]
})

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
