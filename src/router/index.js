import Vue from 'vue'
import Router from 'vue-router'
import home from '@/views/home'
import base from '@/views/base'
import work from '@/views/work'
import project from '@/views/project'
import education from '@/views/education'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/base',
      name: 'base',
      component: base
    },
    {
      path: '/work',
      name: 'work',
      component: work
    },
    {
      path: '/project',
      name: 'project',
      component: project
    },
    {
      path: '/education',
      name: 'education',
      component: education
    }
  ]
})
