import React from 'react';

const Dashboard = React.lazy(() => import('./modules/Dashboard/List'));
const route = [
    { path: '/', exact: true, name: 'Home', component: Dashboard },
];

export default route;
