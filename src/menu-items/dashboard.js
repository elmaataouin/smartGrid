// assets
import {
        DashboardOutlined,
        LoginOutlined,
        ProfileOutlined,
        BarChartOutlined,
        FileTextOutlined
 } from '@ant-design/icons';

import DesktopMacIcon from '@mui/icons-material/DesktopMac';
import SettingsRemoteIcon from '@mui/icons-material/SettingsRemote';
import EnergySavingsLeafIcon from '@mui/icons-material/EnergySavingsLeaf';
import OnlinePredictionIcon from '@mui/icons-material/OnlinePrediction';
 // icons
const icons = {
    DashboardOutlined,
    LoginOutlined,
    ProfileOutlined,
    BarChartOutlined,
    FileTextOutlined,
    DesktopMacIcon,
    SettingsRemoteIcon,
    EnergySavingsLeafIcon,
    OnlinePredictionIcon
};

// ==============================|| MENU ITEMS - DASHBOARD ||============================== //

const dashboard = {
    id: 'group-dashboard',
    type: 'group',
    children: [
        {
            id: 'dashboard',
            title: 'Dashboard',
            type: 'item',
            url: '/dashboard/default',
            icon: icons.DashboardOutlined,
            breadcrumbs: true
        },
        {
            id: 'supervision',
            title: 'Supervision',
            type: 'item',
            url: '/login',
            icon: icons.DesktopMacIcon,
            breadcrumbs: true


        },
        {
            id: 'reporting',
            title: 'Reporting',
            type: 'item',
            url: '/reporting',
            icon: icons.FileTextOutlined,
            target: true,
            breadcrumbs: true

        },
        {
            id: 'Statistiques',
            title: 'statistique',
            type: 'item',
            url: '/register',
            icon: icons.BarChartOutlined,
            target: true
        },
        {
            id: 'control',
            title: 'Control',
            type: 'item',
            url: '/register',
            icon: icons.SettingsRemoteIcon,
            target: true
        },
        {
            id: 'optimisation',
            title: 'Optimisation',
            type: 'item',
            url: '/register',
            icon: icons.EnergySavingsLeafIcon,
            target: true
        },
        {
            id: 'prediction',
            title: 'Prédiction',
            type: 'item',
            url: '/register',
            icon: icons.OnlinePredictionIcon,
            target: true
        }
    ]
};

export default dashboard;
