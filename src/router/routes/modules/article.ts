import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';
import { t } from '/@/hooks/web/useI18n';

const article: AppRouteModule = {
  path: '/article',
  name: 'Article',
  component: LAYOUT,
  redirect: '/article/detail',
  meta: {
    orderNo: 10,
    icon: 'ion:grid-outline',
    title: t('文章管理'),
  },
  children: [
    //文章详情页面路由
    {
      path: 'detail',
      name: 'DetailPage',
      component: () => import('/@/views/article/detail/index.vue'),
      meta: {
        // affix: true,
        title: t('文章详情'),
        icon: 'simple-icons:about-dot-me',
      },
    },
    {
      path: 'lable',
      name: 'LabelPage',
      component: () => import('/@/views/article/label/index.vue'),
      meta: {
        // affix: true,
        title: t('标签'),
        icon: 'simple-icons:about-dot-me',
      },
    },
    {
      path: 'classification',
      name: 'ClassificationPage',
      component: () => import('/@/views/article/classification/index.vue'),
      meta: {
        // affix: true,
        title: t('分类'),
        icon: 'simple-icons:about-dot-me',
      },
    },
  ],
};

export default article;