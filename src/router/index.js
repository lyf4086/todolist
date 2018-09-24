import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

import All from '../components/list/all'
import Active from '../components/list/active'
import Computed from '../components/list/computed'

let router=new Router({
  mode:'history',
  linkActiveClass:'selected',
  routes:[
    {
      path:'/all',
      name:'All',
      component:All
    },
    {
      path:'/active',
      name:'Active',
      component:Active
    },
    {
      path:'/computed',
      name:'Computed',
      component:Computed
    },
    {
      path:'',
      redirect:'all'
    },
    {
      path:'*',
      redirect:'all'
    }
  ]
})
export default router
