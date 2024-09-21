const routes = [
    {
        path: '/',
        element: <div>HOME PAGE</div>,
        errorElement: <div>404</div>
    },
    {
        path: '/recipes/:id',
        element: <div>RECIPE PAGE</div>
    }
];

export default routes;