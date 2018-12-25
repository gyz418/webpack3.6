import './css/index.css'  // 引入css
import './css/a.less'
// import './css/b.scss'
import 'bootstrap/dist/css/bootstrap.min.css'  // js 引入 node_modules 可省略这一层目录  bootstrap要用v3的
import $ from 'jquery'

$(function () {
  $('.a').css('marginTop', '30px')
})

class Teacher{
  // static name = 'xioaming'   // 不能使用name ，可能是关键字
  static info = {name:'df'}
  static age = 12
}

document.write(Teacher.age)

import Vue from 'vue' // 实际加载的是  node_modules/vue/package.json 里面的 main 属性
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import foo from './main/foo.vue'
import bar from './main/bar.vue'
import a from './main/a.vue'
import b from './main/b.vue'
const routes = [
  { path: '/foo', component: foo,
  children:[ // 子组件 path没有/
    { path: 'a', component: a },
    { path: 'b', component: b }
  ]},
  { path: '/bar', component: bar }
]
const router = new VueRouter({
  routes // (缩写) 相当于 routes: routes
})
/*
*
* webpack 中引入的vue 功能不全
*
* 方法一 直接从node_module中引入完整的vue  import Vue from 'vue/dist/vue.js'
* 方法二 修改默认vue的引用路径
*  webpack.config.js
   resolve: {
    alias: {
      'vue$': 'vue/dist/vue.js'  // 修改vue被导入时候的包的正确路径，默认 webpack引入的路径文件不完整
    }
  }

* */
//
//
import login from './login.vue'
var vm = new Vue({
  el:'#app',
  data:{
    msg:123
  },
 /* render:function (createElements) {  // 使用render后，可以直接使用 import Vue from 'vue'这个不完整的文件了，不用做任何配置了。。
    return createElements(login)
  }*/
 render:c=> c(login),   // render 会把 el指定的容器内容清空
  router
})
// login.vue是通过vm的render渲染出来的，显示在el:#app
// foo.vue 是通过vue-router 监听匹配的，显示在 <router-view>

/*
* test.js
* export default {
   name:'kang'
  }
   export var age = 100   // export 导出时，要用import {age} 引入
*
* */


import abc,{age,sex as isBoy} from './test.js'  //  export default 导出时，可用任意变量名引入

console.log(abc,age,isBoy)  // sex as isBoy 起别名