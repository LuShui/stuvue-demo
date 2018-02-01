import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: function (resolve) {
        require.ensure([], function (require) {
          resolve(require('@/components/HelloWorld.vue'))
        })
      },
      children: [{
        path: '/',
        name: 'Nav',
        component: function (resolve) {
          require.ensure([], function (require) {
            resolve(require('@/components/Nav.vue'))
          })
        }
      },
      {
        path: '/Home',
        name: 'Home',
        component: function (resolve) {
          require.ensure([], function (require) {
            resolve(require('@/components/Home.vue'))
          })
        }
      },
      {
        path: '/Store',
        name: 'Store',
        component: function (resolve) {
          require.ensure([], function (require) {
            resolve(require('@/components/Store/Store.vue'))
          })
        }
      },
      {
        path: '/First/:name',
        name: 'First',
        component: function (resolve) {
          require.ensure([], function (require) {
            resolve(require('@/components/First.vue'))
          })
        }
      }]
    },
    {
      path: '/Views',
      name: 'Views',
      component: function (resolve) {
        require.ensure([], function (require) {
          resolve(require('@/components/Views.vue'))
        })
      },
      children: [{
        path: '/Views',
        name: 'Views',
        component: function (resolve) {
          require.ensure([], function (require) {
            resolve(require('@/components/Views/Left.vue'))
          })
        }
      }]
    }
  ]
})
