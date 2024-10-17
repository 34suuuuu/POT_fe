import SalaryManagement from '@/views/user/salary-managment.vue';
import SalaryDetails from '@/views/user/salary-detail.vue';

export const positionRouter = [

  {
    path: '/salary-management',
    name: 'SalaryManagement',
    component: SalaryManagement,
  },
  {
    path: '/salary/detail/:userNum',
    name: 'SalaryDetails',
    component: SalaryDetails,
    props: true, 
  },
];
