import {createApp} from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from '../App.vue'
import routes from "./routers";

// createApp(App).use(Router)

// const RouterConfig = {
//     mode: 'history',
//     routes: routes,
//     linkActiveClass: 'active-link',
//     linkExactActiveClass: 'exact-active-link',
//     scrollBehavior(to, from, savedPosition) {
//         if (to.hash) {
//             // 先判断目标路由有没有hash值
//             return {selector: to.hash};
//         }
//         if (savedPosition) {
//             return savedPosition;
//         } else {
//             return {x: 0, y: 0};
//         }
//     }
// };


const router = createRouter({
    // 指定路由的模式
    history: createWebHistory(),
    routes
})
export default router