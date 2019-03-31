import Home from './containers/Home/Home'
import About from './containers/About/About'
import Demos from './containers/Demos/Demos'
import Contact from './containers/Contact/Contact'



export const routes = [
    {
        path: '/',
        component: Home,
        exact: true
    },
    {
        path: '/about',
        component: About,
    },
    {
        path: '/contact',
        component: Contact,
    },
    {
        path: '/demos',
        component: Demos,
    }

]