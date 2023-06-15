import type { AppRouteModule } from '/@/router/types';

import { LABOR } from '/@/router/constant';
import { t } from '/@/hooks/web/useI18n';

const labor: AppRouteModule = {
  path: '/labor',
  name: 'Labor',
  component: LABOR,
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
      path: 'depart',
      name: 'depart',
      component: () => import('/@/views/labor/department.vue'),
      meta: {
        // affix: true,
        title: t('routes.labor.guideAbout'),
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

export default labor;
