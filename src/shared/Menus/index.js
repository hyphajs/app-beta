import {
    cogs,
    newsPaper,
    receipt,
    signOut,
    store,
    userCog
} from 'config/icons/fa'

export const userDashboardMenu = [
    {
        url: '/dashboard',
        icon: userCog,
        title: 'Settings'
    },
    {
        url: '/dashboard/orders',
        icon: receipt,
        title: 'Orders'
    },
    {
        dispatchAction: 'user/signOut',
        icon: signOut,
        title: 'Sign Out'
    }
]

export const adminDashboardMenu = [
    {
        url: '/admin/posts',
        icon: newsPaper,
        title: 'Manage Posts'
    },
    {
        url: '/admin/shop',
        icon: store,
        title: 'Manage Shop'
    },
    {
        url: '/admin/orders',
        icon: receipt,
        title: 'Manage Orders'
    },
    {
        url: '/admin/taxonomy',
        icon: cogs,
        title: 'Manage Taxonomy'
    },
    {
        dispatchAction: 'user/signOut',
        icon: signOut,
        title: 'Sign Out'
    }
]