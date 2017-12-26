<<<<<<< HEAD

import LoginView from '../components/login.vue'
import ConterView from '../components/Contr.vue'

export default[
{
	path:"/Login",
	component:LoginView
},
{
	path:"/Conter",
	component:ConterView
},
{
	path:"*",
	redirect:"/Conter"
}
]


// import Vue from 'vue'
// import Router from 'vue-router'
// Vue.use(Router)

// export default new Router({
 
//   routes: [
//     // {
//     //   path: '/',
//     //   name: 'HelloWorld',
//     //   component: HelloWorld
//     // }
//   ]
// })
=======
import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})
>>>>>>> origin/master
