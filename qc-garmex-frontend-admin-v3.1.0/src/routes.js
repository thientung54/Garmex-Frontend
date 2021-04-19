import React from 'react';

//Dashboard
const Dashboard = React.lazy(() => import('./features/dashboard/pages/dashboard'));
const Charts = React.lazy(() => import('./features/chart/pages/Charts'));
const Widgets = React.lazy(() => import('./common/components/widgets/Widgets'));
//Role
const ListOfRoles = React.lazy(() => import('./features/role/pages'));
const AddEditRolePage = React.lazy(() => import('./features/role/pages/addEditRole'));
//Grant permission
const GrantPermission = React.lazy(() => import('./features/role/pages/grantPermission'));
//User
const Users = React.lazy(() => import('./features/user/pages/Index'));
const UpdateUser = React.lazy(() => import('./features/user/pages/Update'));
//global config
const GlobalsConfig = React.lazy(() => import('./features/globalConfig/pages/Index'));
const GlobalsConfigUpdate = React.lazy(() => import('./features/globalConfig/pages/Update'));
//File
const ListOfFiles = React.lazy(() => import('./features/file/pages'));

const routes = [
  { path: '/', exact: true, name: 'Home' },
  //Dashboard
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/charts', name: 'Charts', component: Charts },
  { path: '/widgets', name: 'Widgets', component: Widgets },
  //Roles
  { path: '/roles', exact: true,  name: 'Roles', component: ListOfRoles },
  { path: '/role/new', exact: true, name: 'New role', component: AddEditRolePage },
  { path: '/role/:id', exact: true, name: 'Update role', component: AddEditRolePage },
  //Grant permission
  { path: '/grant-permission', exact: true,  name: 'Grant permission', component: GrantPermission },
  //Users
  { path: '/users', exact: true,  name: 'Users', component: Users },
  { path: '/user/:id', exact: true, name: 'Update user', component: UpdateUser },
  //Globals config
  { path: '/globalsconfig', exact: true,  name: 'Globals config', component: GlobalsConfig },
  { path: '/globalsconfig/:id', exact: true, name: 'Update Globals config', component: GlobalsConfigUpdate },
  //Files
  { path: '/files', exact: true, name: 'Files', component: ListOfFiles },

];

export default routes;
