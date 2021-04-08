import Vue from 'vue'
import App from './App.vue'



//import axios from 'axios'
//import VueAxios from 'vue-axios'


import Routes from './router/router'
import VueRouter from 'vue-router'

import store from './index'

import './assets/sass/styles.scss'

Vue.config.productionTip = false
Vue.use(VueRouter);
//Vue.use(axios, VueAxios)

const router = new VueRouter({
  routes: Routes,
  //mode: 'history', // mode: "hash"
})
// Creates a `nextMiddleware()` function which not only
// runs the default `next()` callback but also triggers
// the subsequent Middleware function.
/**function nextFactory (context, middleware, index) {
  const subsequentMiddleware = middleware[index]
  // If no subsequent Middleware exists,
  // the default `next()` callback is returned.
  if (!subsequentMiddleware) return context.next

  return (...tempParam) => {
    // Run the default Vue Router `next()` callback first.
    context.next(...tempParam)
    // Then run the subsequent Middleware with a new
    // `nextMiddleware()` callback.
    const nextMiddleware = nextFactory(context, middleware, index + 1)
    subsequentMiddleware({ ...context, next: nextMiddleware })
  }
}

router.beforeEach((to, from, next) => {
  router.from = from;
  if (to.meta.middleware) {
    const middleware = Array.isArray(to.meta.middleware) ? to.meta.middleware : [to.meta.middleware]
    const context = {
      next,
      router,
      from,
      to
    }
    const nextMiddleware = nextFactory(context, middleware, 1)
    return middleware[0]({ ...context, next: nextMiddleware })
  }

  return next()
})
**/

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
});
