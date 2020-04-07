import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Share from '../views/Share.vue'
import About from '../views/About.vue'
import Detail from '../views/Detail.vue'

Vue.use(VueRouter)
const routes = [

  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/study',
    name: 'study',
    component: () => import(/* webpackChunkName: "study" */ '../views/Study.vue')
  },
  {
    path: '/share',
    name: 'share',
    component: Share
  },
	{
		path: '/about',
		name: 'about',
		component: About
	},
	{
		path: '/detail',
		name: 'detail',
		component: Detail
	}
]

const router = new VueRouter({
	mode: "history",
  routes
})

export default router
