import { createApp } from 'vue'
import App2 from './App.vue'
import VueRouter from 'vue-router'
import componente1 from './components/componente1.vue';

Vue.use(VuuRouter);

const router = new VueRouter({
    routes: [
        {
            path: '/App',
            component: componente1
        }
    ]
})

Vue.config.Vue.config.productionTip = false

new Vue({
    router,
    render: h =>(App),

}).$mount('#App')
