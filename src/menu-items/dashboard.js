// assets
import {IconDashboard, IconAdjustments, IconUser} from '@tabler/icons';

// constant
const icons = { IconDashboard, IconAdjustments, IconUser };

// ==============================|| DASHBOARD MENU ITEMS ||============================== //
const id = localStorage.getItem("user-id");
const dashboard = {
  id: 'dashboard',
  title: 'Accueil',
  type: 'group',
  children: [
    {
      id: 'default',
      title: 'Accueil',
      type: 'item',
      url: '/accueil',
      icon: icons.IconDashboard,
      breadcrumbs: true,
    },
    {
      id: 'test-api',
      title: 'Test-api',
      type: 'item',
      url: '/test-api',
      icon: icons.IconAdjustments,
      breadcrumbs: true,
    },
    {
      id: 'my-profil',
      title: 'Profil',
      type: 'item',
      url: `/profil/${id}`,
      icon: icons.IconUser,
      breadcrumbs: false,
    },
  ],
};

export default dashboard;
