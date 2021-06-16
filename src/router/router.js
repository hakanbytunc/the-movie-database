import { createWebHistory } from 'vue-router';
import { createRouter } from 'vue-router';
import Home from '@/views/Home.vue';
import Details from '@/views/Details.vue'
import NotFoundComponent from '@/components/NotFoundComponent.vue'

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
        },
        { 
            path: '/:catchAll(.*)', 
            component: NotFoundComponent,
            name: 'NotFound'
          }  
    ]
});

export default router;
