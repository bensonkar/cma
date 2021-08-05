import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  {
    name: 'DASHBOARD',
    url: '/home/dashboard/dashboard',
    icon: 'fa fa-th-large'
  },
  {
    divider: true,
  },

 
  {
    name: 'Orders',
    url: '/home/cma-management/orders',
    icon: 'fa fa-caret-right'
  },
  {
    name: 'Payments',
    url: '/home/cma-management/payments',
    icon: 'fa fa-caret-right'
  },
  {
    name: 'License',
    url: '/home/cma-management/licenses',
    icon: 'fa fa-caret-right'
  },
  {
    name: 'Risk Profile',
    url: '/home/cma-management/risk-profile',
    icon: 'fa fa-caret-right'
  },
  {
    name: 'Risk Matrix',
    url: '/home/cma-management/riskmatrix',
    icon: 'fa fa-caret-right'
  },
  {
    name: 'Procedures',
    url: '/home/cma-management/procedures',
    icon: 'fa fa-caret-right'
  },
  {
    name: 'Control Attributes',
    url: '/home/cma-management/procedure-execution-attributes',
    icon: 'fa fa-caret-right'
  },
  {
    name: 'Cyber Security Risk',
    url: '/home/cma-management/overalriskdescription',
    icon: 'fa fa-caret-right'
  },
  {
    name: 'Cyber Security Maturity Level',
    url: '/home/cma-management/maturitylevel',
    icon: 'fa fa-caret-right'
  },
  // {
  //   name: 'Linking',
  //   url: '/home/cma-management/authentication-report',
  //   icon: 'fa fa-caret-right'
  // },
  {
    name: 'Likelihood',
    url: '/home/cma-management/likelyhood',
    icon: 'fa fa-caret-right'
  },
  {
    name: 'Impacts',
    url: '/home/cma-management/impacts',
    icon: 'fa fa-caret-right'
  },
  {
    name: 'Domain',
    url: '/home/cma-management/domain',
    icon: 'fa fa-caret-right'
  },
  {
    name: 'Control',
    url: '/home/cma-management/control',
    icon: 'fa fa-caret-right'
  },
  {
    name: 'Assessment',
    url: '/home/cma-management/assessment',
    icon: 'fa fa-caret-right'
  },
  {
    name: 'Users',
    url: '/home/cma-management/users',
    icon: 'fa fa-caret-right'
  },
  {
    name: 'Audit Trails',
    url: '/home/cma-management/audit-trails',
    icon: 'fa fa-caret-right'
  },

  {
    divider: true,
  },
  // {
  //   name: 'USERS',
  //   url: '/home/user-management',
  //   // icon: 'fa fa-users',
  //   children: [
    
  //     {
  //       name: 'Workgroups',
  //       url: '/home/user-management/workgroups',
  //       icon: 'fa fa-caret-right'
  //     },
  //     {
  //       name: 'Change Password',
  //       url: '/home/user-management/user/profile',
  //       // icon: 'fa fa-user'
  //     },
  //     {
  //       name:'User Profile',
  //       url: '/home/user-management/profile'
  //     },
  //   ],
  // },
  // {
  //   name: 'PAYMENTS',
  //   url: '/home/user-management',
  //   // icon: 'fa fa-users',
  //   children: [
  //     {
  //       name: 'Payments',
  //       url: '/home/user-management/user/locked-users',
  //       icon: 'fa fa-caret-right'
  //     },
      
  //   ],
  // },
  // {
  //   name: 'LICENCES',
  //   url: '/home/cma-management',
  //   // icon: 'fa fa-users',
  //   children: [
  //     {
  //       name: 'License',
  //       url: '/home/cma-management/licenses',
  //       icon: 'fa fa-caret-right'
  //     }
      
  //   ],
  // },
  // {
  //   name: 'RISK MATRIX MANAGEMENT',
  //   url: '/home/cma-management',
  //   // icon: 'fa fa-users',
  //   children: [
  //     {
  //       name: 'riskmatrix',
  //       url: '/home/cma-management/riskmatrix',
  //       // icon: 'fa fa-caret-right'
  //     },
      
  //   ],
  // },
  // {
  //   name: 'PROCEDURES MANAGEMENT',
  //   url: '/home/cma-management',
  //   // icon: 'fa fa-users',
  //   children: [
  //     {
  //       name: 'Procedures',
  //       url: '/home/cma-management/procedures',
  //       // icon: 'fa fa-caret-right'
  //     },
      
  //   ],
  // },
  // {
  //   name: 'PROCEDURES EXECUTION ATTRIBUTES',
  //   url: '/home/cma-management',
  //   // icon: 'fa fa-users',
  //   children: [
  //     {
  //       name: 'procedure-execution-attributes',
  //       url: '/home/cma-management/procedure-execution-attributes',
  //       // icon: 'fa fa-caret-right'
  //     },
      
  //   ],
  // },
  // {
  //   name: 'OVERAl-RISK-DESCRIPTION MANAGEMENT',
  //   url: '/home/cma-management',
  //   // icon: 'fa fa-users',
  //   children: [
  //     {
  //       name: 'overal-risk-description',
  //       url: '/home/cma-management/overalriskdescription',
  //       // icon: 'fa fa-caret-right'
  //     },
      
  //   ],
  // },
  // {
  //   name: 'MATURITY LEVEL MANAGEMENT',
  //   url: '/home/cma-management',
  //   // icon: 'fa fa-users',
  //   children: [
  //     {
  //       name: 'Maturity Level',
  //       url: '/home/cma-management/maturitylevel',
  //       icon: 'fa fa-caret-right'
  //     },
      
  //   ],
  // },
  // {
  //   name: 'LINKING ',
  //   url: '/home/cma-management',
  //   // icon: 'fa fa-users',
  //   children: [
  //     {
  //       name: 'Linking',
  //       url: '/home/cma-management/authentication-report',
  //       icon: 'fa fa-caret-right'
  //     },
      
  //   ],
  // },
  // {
  //   name: 'LIKELY HOOD ',
  //   url: '/home/cma-management',
  //   // icon: 'fa fa-users',
  //   children: [
  //     {
  //       name: 'Likely Hood',
  //       url: '/home/cma-management/likelyhood',
  //       icon: 'fa fa-caret-right'
  //     },
      
  //   ],
  // },
  // {
  //   name: 'IMPACTS ',
  //   url: '/home/cma-management',
  //   // icon: 'fa fa-users',
  //   children: [
  //     {
  //       name: 'Impacts',
  //       url: '/home/cma-management/impacts',
  //       icon: 'fa fa-caret-right'
  //     },
      
  //   ],
  // },
  // {
  //   name: 'DOMAIN ',
  //   url: '/home/cma-management',
  //   // icon: 'fa fa-users',
  //   children: [
  //     {
  //       name: 'Domain',
  //       url: '/home/cma-management/domain',
  //       icon: 'fa fa-caret-right'
  //     },
      
  //   ],
  // },
  // {
  //   name: 'CONTROLS ',
  //   url: '/home/cma-management',
  //   // icon: 'fa fa-users',
  //   children: [
  //     {
  //       name: 'Control',
  //       url: '/home/cma-management/control',
  //       icon: 'fa fa-caret-right'
  //     },
      
  //   ],
  // },
  // {
  //   name: ' Assessment',
  //   url: '/home/cma-management',
  //   // icon: 'fa fa-users',
  //   children: [
  //     {
  //       name: 'Assessment',
  //       url: '/home/cma-management/assessment',
  //       icon: 'fa fa-caret-right'
  //     },
      
  //   ],
  // },
  
  
 
];

export const ClientAdmin: INavData[] = [
  {
    name: 'DASHBOARD',
    url: '/home/dashboard/dashboard',
    icon: 'fa fa-th-large'
  },
  {
    divider: true,
  },
  {
    name: 'Risk Profile',
    url: '/home/cma-management/risk-profile',
    icon: 'fa fa-caret-right'
  },
  {
    name: 'Assessment',
    url: '/home/cma-management/assessment',
    icon: 'fa fa-caret-right'
  },
  {
    name: 'Audit Trails',
    url: '/home/cma-management/audit-trails',
    icon: 'fa fa-caret-right'
  },
  {
    name: 'Users',
    url: '/home/cma-management/users',
    icon: 'fa fa-caret-right'
  },
]
export const ClientInputter: INavData[] = [
  {
    name: 'DASHBOARD',
    url: '/home/dashboard/dashboard',
    icon: 'fa fa-th-large'
  },
  {
    divider: true,
  },
  {
    name: 'Risk Profile',
    url: '/home/cma-management/risk-profile',
    icon: 'fa fa-caret-right'
  },
  {
    name: 'Assessment',
    url: '/home/cma-management/assessment',
    icon: 'fa fa-caret-right'
  },
]
export const ClientReviewer: INavData[] = [
  {
    name: 'DASHBOARD',
    url: '/home/dashboard/dashboard',
    icon: 'fa fa-th-large'
  },
  {
    divider: true,
  },
  {
    name: 'Risk Profile',
    url: '/home/cma-management/risk-profile',
    icon: 'fa fa-caret-right'
  },
  {
    name: 'Assessment',
    url: '/home/cma-management/assessment',
    icon: 'fa fa-caret-right'
  },
]
