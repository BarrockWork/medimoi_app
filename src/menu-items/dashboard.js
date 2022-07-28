// assets
import {IconDashboard, IconAdjustments, IconUser, IconEdit} from '@tabler/icons';

// constant
const icons = { IconDashboard, IconAdjustments, IconUser };

// ==============================|| DASHBOARD MENU ITEMS ||============================== //
const storage = JSON.parse(window.localStorage.getItem('app_user'));
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
      type: 'collapse',
      icon: icons.IconUser,
      children: [
        {
          id: 'show-user',
          title: 'Accéder à mon profil',
          type: 'item',
          url: `/profil/${storage.id}`,
          breadcrumbs: true
        },
        {
          id: 'edit-user',
          title: 'Modifier mon profil',
          type: 'item',
          url: `/email/${storage.email}`,
          breadcrumbs: true
        }
      ]
    },
  ],
};

export default dashboard;
