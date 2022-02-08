const AdminRoutes = [
    {
        path     : '/dashboard',
        name     : 'AdminDashboard',
        component: () => import('./pages/Dashboard'),
        meta     : {
            title: 'Admin Dashboard'
        }
    },
    // ===========Transition Section===============
    {
        path     : 'transition/create',
        name     : 'TransitionCreate',
        component: () => import('./pages/transition/Create'),
        meta     : {
            title: 'Transition Create'
        }
    },
    {
        path     : 'transition/list',
        name     : 'TransitionList',
        component: () => import('./pages/transition/Index'),
        meta     : {
            title: 'Transition List'
        }
    }, {
        path     : 'transition/edit/:id',
        name     : 'TransitionEdit',
        component: () => import('./pages/transition/Create'),
        meta     : {
            title: 'Transition Edit'
        }
    },
];

export default AdminRoutes;
