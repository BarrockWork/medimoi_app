import { lazy } from 'react';

// project imports
import MainLayout from 'layout/MainLayout';
import Loadable from 'ui-component/Loadable';
import ProtectedRoute from '../utils/protectedRoute';

// dashboard routing
const DashboardDefault = Loadable(
  lazy(() => import('views/dashboard/Default'))
);

// App routing
const TestApiPage = Loadable(lazy(() => import('views/test-api-page')));

const DetailTreatmentPage = Loadable(
  lazy(() => import('views/treatment-detail'))
);

const AddTreatmentPage = Loadable(
  lazy(() => import('views/forms/treatments/addTreatment'))
);
const EditTreatmentPage = Loadable(
  lazy(() => import('views/forms/treatments/editTreatment'))
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

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
  path: '/',
  element: (
    <ProtectedRoute>
      <MainLayout />
    </ProtectedRoute>
  ),
  children: [
    {
      path: '/',
      element: <DashboardDefault />,
    },
    {
      path: '/accueil',
      element: <DashboardDefault />,
    },
    {
      path: '/treatment/detail/:id',
      element: <DetailTreatmentPage />,
    },
    {
      path: '/add-treatments',
      element: <AddTreatmentPage />,
    },
    {
      path: '/edit-treatments/:id',
      element: <EditTreatmentPage />,
    },
    {
      path: '/test-api',
      element: <TestApiPage />,
    },
    {
      path: '/utils/util-typography',
      element: <UtilsTypography />,
    },
    {
      path: '/utils/util-color',
      element: <UtilsColor />,
    },
    {
      path: '/utils/util-shadow',
      element: <UtilsShadow />,
    },
    {
      path: '/icons/tabler-icons',
      element: <UtilsTablerIcons />,
    },
    {
      path: '/icons/material-icons',
      element: <UtilsMaterialIcons />,
    },
  ],
};

export default MainRoutes;
