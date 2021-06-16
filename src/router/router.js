import { createWebHistory } from 'vue-router';
import { createRouter } from 'vue-router';
import Home from '@/views/Home.vue';
import Details from '@/views/Details.vue'

const history = createWebHistory();
const router = createRouter({
    history,
    routes:[
        {
            path: '/',
            component: Home
        },
        {
            path: '/details',
            component: Details
        }    
    ]
});

export default router;
