// assets
import { IconDashboard, IconAdjustments } from '@tabler/icons';

// constant
const icons = { IconDashboard, IconAdjustments };

// ==============================|| DASHBOARD MENU ITEMS ||============================== //

const dashboard = {
    id: 'dashboard',
    title: 'Dashboard',
    type: 'group',
    children: [
        {
            id: 'default',
            title: 'Dashboard',
            type: 'item',
            url: '/dashboard/default',
            icon: icons.IconDashboard,
            breadcrumbs: false
        },
        {
            id: 'test-api',
            title: 'Test-api',
            type: 'item',
            url: '/test-api',
            icon: icons.IconAdjustments,
            breadcrumbs: false
        }
    ]
};

export default dashboard;
