import {lazy} from 'react';

// project imports
import MainLayout from 'layout/MainLayout';
import Loadable from 'ui-component/Loadable';
import ProtectedRoute from "../utils/protectedRoute";

// dashboard routing
const DashboardDefault = Loadable(
    lazy(() => import('views/dashboard/Default'))
);

// App routing
const TestApiPage = Loadable(lazy(() => import('views/test-api-page')));
const Profil = Loadable(lazy(() => import('views/user')));

const EditUser = Loadable(
    lazy(() => import('views/edit-user'))
);

const DetailTreatmentPage = Loadable(
    lazy(() => import('views/treatment-detail'))
);

// utilities routing
const UtilsTypography = Loadable(
    lazy(() => import('views/utilities/Typography'))
);
const UtilsColor = Loadable(lazy(() => import('views/utilities/Color')));
const UtilsShadow = Loadable(lazy(() => import('views/utilities/Shadow')));
const UtilsMaterialIcons = Loadable(
    lazy(() => import('views/utilities/MaterialIcons'))
);
const UtilsTablerIcons = Loadable(
    lazy(() => import('views/utilities/TablerIcons'))
);
const id = localStorage.getItem("user-id");
const email = localStorage.getItem("user-email");


// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
    path: '/',
    element: (<ProtectedRoute>
        <MainLayout/>
    </ProtectedRoute>),
    children: [
        {
            path: '/',
            element: <DashboardDefault/>,
        },
        {
            path: '/accueil',
            element: <DashboardDefault/>,
        },
        {
            path: '/treatment/detail/:id',
            element: <DetailTreatmentPage/>,
        },
        {
            path: '/test-api',
            element: <TestApiPage/>,
        },
        {
            path: `/profil/${id}`,
            element: <Profil/>,
        },
        {
            path: `/email/${email}`,
            element: <EditUser/>
        },
        {
            path: '/utils/util-typography',
            element: <UtilsTypography/>,
        },
        {
            path: '/utils/util-color',
            element: <UtilsColor/>,
        },
        {
            path: '/utils/util-shadow',
            element: <UtilsShadow/>,
        },
        {
            path: '/icons/tabler-icons',
            element: <UtilsTablerIcons/>,
        },
        {
            path: '/icons/material-icons',
            element: <UtilsMaterialIcons/>,
        },
    ],
};

export default MainRoutes;
