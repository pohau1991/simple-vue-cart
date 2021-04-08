import hello from '../components/HelloWorld.vue';
import catalog from '../components/Catalog.vue';

export default [{
    path: '/',
    name: 'hello',
    component: hello,
  },
  {
    path: '/catalog',
    name: 'catalog',
    component: catalog,
  }
];