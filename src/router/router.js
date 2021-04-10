import welcome from '../components/Welcome.vue';
import catalog from '../components/Catalog.vue';

export default [{
    path: '/',
    name: 'welcome',
    component: welcome,
  },
  {
    path: '/catalog',
    name: 'catalog',
    component: catalog,
  }
];