import { lazy } from 'react';

// project import
import Loadable from 'components/Loadable';
import MainLayout from 'layout/MainLayout';
import { element } from 'prop-types';
import { Support } from '../../node_modules/@mui/icons-material/index';



// sidebar - pages
const DashboardDefault = Loadable(lazy(() => import('pages/dashboard')));

const Reporting = Loadable(lazy(() => import('pages/reporting/Reporting')));
const Statistiques = Loadable(lazy(() => import('pages/Statistiques/Statistiques')));

const Control       =  Loadable(lazy(() => import('pages/Control/Control')));
const Optimisation  =  Loadable(lazy(() => import('pages/Optimisation/Optimisation')));
const Predicition  =  Loadable(lazy(() => import('pages/Prediction/Predicition')));

const SamplePage = Loadable(lazy(() => import('pages/extra-pages/SamplePage')));
const Configuration = Loadable(lazy(() => import('pages/configuration/Configuration')));

const Profiel = Loadable(lazy(() => import('pages/Profile/Profile')));

const Notifications = Loadable(lazy(() => import('pages/Notifications/Notifications')));

const Supporte = Loadable(lazy(() => import('pages/Support/Support')));


// render - utilities
const Typography = Loadable(lazy(() => import('pages/components-overview/Typography')));
const Color = Loadable(lazy(() => import('pages/components-overview/Color')));
const Shadow = Loadable(lazy(() => import('pages/components-overview/Shadow')));
const AntIcons = Loadable(lazy(() => import('pages/components-overview/AntIcons')));

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
    path: '/',
    element: <MainLayout />,
    children: [
        {
            path: '/',
            element: <DashboardDefault />
        },
        {
            path: 'color',
            element: <Color />
        },
        {
            path: 'dashboard',
            children: [
                {
                    path: 'default',
                    element: <DashboardDefault />
                }
            ]
        },
        {
            path: 'sample-page',
            element: <SamplePage />
        },
        {
            path: 'configuration',
            element: <Configuration />,
            breadcrumbs: true
        },
        {
            path :'optimisation',
            element : <Optimisation />,
            breadcrumbs : true
        },
        {
            path :'predicition',
            element : <Predicition />,
            breadcrumbs : true
        },
        {
            path :'control',
            element : <Control />,
            breadcrumbs : true
        },
        {
            path: 'reporting',
            element: <Reporting />,
            breadcrumbs: true
        },
        {
            path : 'statistiques',
            element: <Statistiques />,
            breadcrumbs : true
        },
        {
            path : 'profiel',
            element : <Profiel />,
            breadcrumbs : true

        },
        {
            path : 'notifications',
            element : <Notifications />,
            breadcrumbs : true

        },
        {
            path : 'support',
            element : <Supporte/>,
            breadcrumbs : true

        },
        {
            path: 'shadow',
            element: <Shadow />
        },
        {
            path: 'typography',
            element: <Typography />
        },
        {
            path: 'icons/ant',
            element: <AntIcons />
        }
    ]
};

export default MainRoutes;
