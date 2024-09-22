import HomePage from "../pages/home-page";
import RecipePage from "../pages/recipe-page";
import NotFoundPage from "../pages/not-found-page";

const routes = [
    {
        path: '/',
        element: <HomePage/>,
        errorElement: <NotFoundPage />
    },
    {
        path: '/recipes/:id',
        element: <RecipePage/>
    }
];

export default routes;