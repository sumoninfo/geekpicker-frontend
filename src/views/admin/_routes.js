const AdminRoutes = [
    {
        path     : '/dashboard',
        name     : 'AdminDashboard',
        component: () => import('./pages/Dashboard'),
        meta     : {
            title: 'Admin Dashboard'
        }
    },
    // ===========Transaction Section===============
    {
        path     : 'transaction/create',
        name     : 'TransactionCreate',
        component: () => import('./pages/transaction/Create'),
        meta     : {
            title: 'Transaction Create'
        }
    },
    {
        path     : 'transaction/list',
        name     : 'TransactionList',
        component: () => import('./pages/transaction/Index'),
        meta     : {
            title: 'Transaction List'
        }
    }, {
        path     : 'transaction/edit/:id',
        name     : 'TransactionEdit',
        component: () => import('./pages/transaction/Create'),
        meta     : {
            title: 'Transaction Edit'
        }
    },
];

export default AdminRoutes;
