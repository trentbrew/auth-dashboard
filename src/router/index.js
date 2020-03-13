import Vue from 'vue'
import Router from 'vue-router'

//import firebase from 'firebase'

import Home from '@/views/Home'
import About from '@/views/About'
import Feed from '@/views/Feed'
import Login from '@/views/Login'
import Register from '@/views/Register'
import Admin from '@/views/Admin'
import Driver from '@/views/Driver'
import Customer from '@/views/Customer'

Vue.use(Router)

let router = new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: {
        guest: true
      }
    },
    {
      path: '/about',
      name: 'about',
      component: About,
      meta: {
        guest: true
      }
    },
    {
      path: '/feed',
      name: 'feed',
      component: Feed,
      meta: {
        auth: true
      }
    },
    {
      path: '/register',
      name: 'register',
      component: Register,
      meta: {
        guest: true
      }
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
      meta: {
        guest: true
      }
    },

    {
      path: '/admin',
      name: 'admin',
      component: Admin,
      meta: {
        auth: true
      }
    },
    {
      path: '/driver',
      name: 'driver',
      component: Driver,
      meta: {
        auth: true
      }
    },
    {
      path: '/customer',
      name: 'customer',
      component: Customer,
      meta: {
        auth: true
      }
    },
  ],
})

//----------routing guards----------

router.beforeEach((to, from, next) => {

  /*firebase.auth().onAuthStateChanged(userAuth => {

    if (userAuth) {
      firebase.auth().currentUser.getIdTokenResult().then(function ({claims}) {
          if (claims.customer) {
            if ((to.path !== '/') || (to.path !== '/about')) {
              return next({
                path: '/customer',
              })
            }
          } 
          else if (claims.admin) {
            if ((to.path !== '/') || (to.path !== '/about')) {
              return next({
                path: '/admin',
              })
            }
          } 
          else if (claims.driver) {
            if ((to.path !== '/') || (to.path !== '/about')) {
              return next({
                path: '/driver',
              })
            }
          }
        })
    } 
    else {
      if (to.matched.some(record => record.meta.auth)) {
        next({
          path: '/login',
          query: {
            redirect: to.fullPath
          }
        })
      } else {
        next()
      }
    }

  })*/

  next()

})


export default router
