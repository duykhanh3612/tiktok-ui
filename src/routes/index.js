import { HeaderOnly } from '~/components/Layout';
import Home from '~/pages/Home';
import Search from '~/pages/Search';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';
const publicRoutes = [
    { path: '/', component: Home },
    { path: '/profile', component: Profile },
    { path: '/following', component: Following },
    { path: '/upload', component: Upload, layout: HeaderOnly },
    { path: '/search', component: Search, layout: null },
];
const privateRoutes = [];
export { publicRoutes, privateRoutes };
