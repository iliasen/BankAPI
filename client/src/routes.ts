import {
    LOGIN_ROUTE,
    REGISTRATION_ROUTE,
    MAIN_ROUTE,
    PROFILE_ROUTE,
    ABOUT_ROUTE,
} from './utils/consts'


import Auth from './pages/Auth'
import Application from './pages/Application'
import Profile from './pages/Profile'
import About from "./pages/About";

export const authRoutes = [
    {
        path: MAIN_ROUTE,
        Component: Application,
    },
    {
        path: PROFILE_ROUTE,
        Component: Profile,
    },
]

export const publicRoutes = [
    {
        path: LOGIN_ROUTE,
        Component: Auth,
    },
    {
        path: REGISTRATION_ROUTE,
        Component: Auth,
    },
    {
        path: ABOUT_ROUTE,
        Component: About
    }
]
