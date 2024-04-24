import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const View = { template: '<router-view></router-view>' }

const routes = [
  {
    path: '/',
    component: () => import('@pages/Layout/DashboardLayout.vue'),
    redirect: 'dashboard',
    children: [
      {
        path: 'dashboard',
        name: 'dashboard',
        component: () => import('@pages/Dashboard.vue'),
        meta: { title: 'global.dashboard' }
      },
      {
        path: 'user-management',
        name: 'user_management',
        component: View,
        redirect: { name: 'permissions.index' },
        children: [
          {
            path: 'permissions',
            name: 'permissions.index',
            component: () => import('@cruds/Permissions/Index.vue'),
            meta: { title: 'cruds.permission.title' }
          },
          {
            path: 'permissions/create',
            name: 'permissions.create',
            component: () => import('@cruds/Permissions/Create.vue'),
            meta: { title: 'cruds.permission.title' }
          },
          {
            path: 'permissions/:id',
            name: 'permissions.show',
            component: () => import('@cruds/Permissions/Show.vue'),
            meta: { title: 'cruds.permission.title' }
          },
          {
            path: 'permissions/:id/edit',
            name: 'permissions.edit',
            component: () => import('@cruds/Permissions/Edit.vue'),
            meta: { title: 'cruds.permission.title' }
          },
          {
            path: 'roles',
            name: 'roles.index',
            component: () => import('@cruds/Roles/Index.vue'),
            meta: { title: 'cruds.role.title' }
          },
          {
            path: 'roles/create',
            name: 'roles.create',
            component: () => import('@cruds/Roles/Create.vue'),
            meta: { title: 'cruds.role.title' }
          },
          {
            path: 'roles/:id',
            name: 'roles.show',
            component: () => import('@cruds/Roles/Show.vue'),
            meta: { title: 'cruds.role.title' }
          },
          {
            path: 'roles/:id/edit',
            name: 'roles.edit',
            component: () => import('@cruds/Roles/Edit.vue'),
            meta: { title: 'cruds.role.title' }
          },
          {
            path: 'users',
            name: 'users.index',
            component: () => import('@cruds/Users/Index.vue'),
            meta: { title: 'cruds.user.title' }
          },
          {
            path: 'users/create',
            name: 'users.create',
            component: () => import('@cruds/Users/Create.vue'),
            meta: { title: 'cruds.user.title' }
          },
          {
            path: 'users/:id',
            name: 'users.show',
            component: () => import('@cruds/Users/Show.vue'),
            meta: { title: 'cruds.user.title' }
          },
          {
            path: 'users/:id/edit',
            name: 'users.edit',
            component: () => import('@cruds/Users/Edit.vue'),
            meta: { title: 'cruds.user.title' }
          }
        ]
      },
      {
        path: 'ipcr',
        name: 'ipcr',
        component: () => import('@cruds/IPCR/index.vue'),
        meta: { title: 'IPCR'}
      },
      {
        path: 'upload-files',
        name: 'upload-files',
        component: () => import('@cruds/UploadFiles/index.vue'),
        meta: { title: 'Upload Files' }
      },
      {
        path: 'upload-files/create',
        name: 'upload-files.create',
        component: () => import('@cruds/UploadFiles/Create.vue'),
        meta: { title: 'Upload FIles' }
      },
      {
        path: 'announcement/create',
        name: 'announcement.create',
        component: () => import('@cruds/Announcement/Create.vue'),
        meta: { title: 'Announcement' }
      },
      {
        path: 'faculty',
        name: 'faculty',
        component: () => import('@cruds/Faculty/index.vue'),
        meta: { title: 'Faculty' }
      },
      {
        path: 'department',
        name: 'department',
        component: () => import('@cruds/Department/index.vue'),
        meta: { title: 'Department' }
      },
      {
        path: 'department/:id',
        name: 'department.show',
        component: () => import('@cruds/Department/Show.vue'),
        meta: { title: 'Department' }
      },
    ]
  }
]

export default new VueRouter({
  mode: 'history',
  base: '/admin',
  routes
})
