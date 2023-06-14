import type { AppRouteModule } from '/@/router/types';

import { PAGE } from '/@/router/constant';
import { t } from '/@/hooks/web/useI18n';

const dashboard: AppRouteModule = {
  path: '/labor',
  name: 'Labor',
  component: PAGE,
  redirect: '/labor/main',
  meta: {
    orderNo: 10,
    icon: 'ion:grid-outline',
    title: t('routes.labor.labor'),
  },
  children: [
    {
      path: 'main',
      name: 'main',
      component: () => import('/@/views/labor/index.vue'),
      meta: {
        // affix: true,
        title: t('routes.labor.labor'),
      },
    },
    {
      path: 'analysis',
      name: 'Analysis',
      component: () => import('/@/views/dashboard/analysis/index.vue'),
      meta: {
        // affix: true,
        title: t('routes.dashboard.analysis'),
      },
    },
    {
      path: 'workbench',
      name: 'Workbench',
      component: () => import('/@/views/dashboard/workbench/index.vue'),
      meta: {
        title: t('routes.dashboard.workbench'),
      },
    },
  ],
};

export default dashboard;
