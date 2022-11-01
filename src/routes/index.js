import Home from '@/page/Home';
import Library from '@/page/Library';

const publicRoutes = [
    { path: '/', component: Home },
    { path: '/library', component: Library },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
