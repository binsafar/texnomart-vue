import {createRouter, createWebHistory} from 'vue-router'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'test-tasks',
            component: () => import('../views/TestTasks.vue')
        },
        {
            path: '/validation',
            name: 'validation',
            component: () => import("../views/ValidationForm.vue")
        },
        {
            path: '/list-of-students',
            name: 'students',
            component: () => import("../views/StudentsList.vue")
        },
        {
            path: '/auth',
            name: 'auth',
            component: () => import("../views/AuthForm.vue")
        }
    ]
})

export default router
