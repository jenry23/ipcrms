<template>
  <div class="wrapper" :class="{ 'nav-open': $sidebar.showSidebar }">
    <event-hub></event-hub>
    <side-bar :sidebarLinks="sidebarLinks">
      <mobile-menu slot="content"></mobile-menu>
    </side-bar>

    <div class="main-panel">
      <top-navbar></top-navbar>
      <div class="content">
        <dashboard-content></dashboard-content>
      </div>
    </div>
  </div>
</template>

<script>
import DashboardContent from './Content.vue'
import TopNavbar from './TopNavbar.vue'
import MobileMenu from './MobileMenu.vue'

export default {
  components: {
    DashboardContent,
    TopNavbar,
    MobileMenu
  },
  data() {
    return {
      sidebarLinks: [
      {
						title: 'Home',
						icon: 'dashboard',
						path: { name: 'dashboard' },
        },
        {
						title: 'IPCR',
						icon: 'assessment',
						path: { name: 'ipcr' },
						gate: 'ipcr_access',
        },
        {
						title: 'Upload Files',
						icon: 'folder',
						path: { name: 'upload-files' },
						gate: 'upload_files_access',
        },
        {
						title: 'Department',
						icon: 'folder',
						path: { name: 'department' },
						gate: 'department_access',
        },
        {
						title: 'Faculty',
						icon: 'content_paste',
						path: { name: 'faculty' },
						gate: 'faculty_access',
        },
        {
          title: 'cruds.userManagement.title',
          icon: 'person',
          path: { name: 'user_management' },
          gate: 'user_management_access',
          children: [
            {
              title: 'cruds.permission.title',
              icon: 'perm_data_setting',
              path: { name: 'permissions.index' },
              gate: 'permission_access'
            },
            {
              title: 'cruds.role.title',
              icon: 'group',
              path: { name: 'roles.index' },
              gate: 'role_access'
            },
            {
              title: 'cruds.user.title',
              icon: 'person',
              path: { name: 'users.index' },
              gate: 'user_access'
            }
          ]
        },
      ]
    }
  }
}
</script>
