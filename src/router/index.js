import {createRouter, createWebHashHistory} from 'vue-router'

const Home = () => import('../views/Home.vue')
const Work = () => import('../views/Work.vue')
const Cv = () => import('../views/Cv.vue')
const Blog = () => import('../views/BlogList.vue')
const FourOhFour = () => import('../views/FourOhFour.vue')
const PostWrapper = () => import('../views/posts/PostWrapper.vue')

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/work',
        name: 'Work',
        component: Work,
    },
    {
        path: '/blog/:urlname',
        name: 'Post',
        component: PostWrapper,
    },
    {
        path: '/blog',
        name: 'Blog',
        component: Blog,
    },
    {
        path: '/cv',
        name: 'Cv',
        component: Cv,
    },
    {
        path: '/:catchAll(.*)',
        name: 'FourOhFour',
        component: FourOhFour,
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router
