import Vue from 'vue'
import Router from 'vue-router'
import Commits from '@/components/Commits'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Commits',
      component: Commits
    }
  ]
})
