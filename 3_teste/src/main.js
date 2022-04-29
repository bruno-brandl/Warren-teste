import { createApp } from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import componente1 from './components/componente1.vue';


Vue.use(VueRouter);

const router = new VueRouter({
    routes: [
        {
            path: '/App',
            component: componente1
        }
    ]
})

Vue.config.productionTip = true

new Vue({
    router,
    render: h =>(App),


    
}).$mount('#App')
