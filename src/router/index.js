import News from '@/components/News'
import Books from '@/components/Books'
import Video from '@/components/Video'
import VueRouter from 'vue-router'

const routes = [
    {path: '/news', component: News},
    {path: '/books', component: Books},
    {path: '/video', component: Video}
]

const router = new VueRouter({
    routes
})

export default router;