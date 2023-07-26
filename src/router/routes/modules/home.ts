import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';
import { t } from '/@/hooks/web/useI18n';

const home: AppRouteModule = {
  path: '/home',
  name: 'Home',
  component: LAYOUT,
  redirect: '/home/index',
  meta: {
    orderNo: 9,
    icon: 'ion:grid-outline',
    title: t('首页'),
  },
  children: [
    {
      path: 'index',
      name: 'HomePage',
      component: () => import('/@/views/home/index.vue'),
      meta: {
        // affix: true,
        title: t('首页'),
        icon: 'simple-icons:about-dot-me',
        hideMenu: true,
      },
    },
  ],
};

export default home;
