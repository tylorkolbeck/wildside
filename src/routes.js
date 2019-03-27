import React from 'react'

// import RecentPosts from './containers/RecentPosts/RecentPosts'
// import Home from './containers/Home/Home'
// import AllPosts from './containers/AllPosts/AllPosts'
// import Work from './containers/Work/Work'
// import ContactForm from './containers/ContactForm/ContactForm'
// import FullPost from './components/FullPost/FullPost'


const Home = () => {
    return (
        <p>Home</p>
    )
}

const About = () => {
    return (
        <p>About</p>
    )
}

const Contact = () => {
    return (
        <p>Contact</p>
    )
}

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
    }

]