<template>
  <nav
  :class="['navbar', 'navbar-expand-lg', 'ipcrms-navbar-color', { 'ipcrms-width-navbar': currentRouteName === 'ipcr' && role_title !== null && role_title !== '' }]"
  >
    <div class="container-fluid">
      <div class="navbar-wrapper">
        <div class="navbar-brand">
          {{ $t($route.meta.title) }}
        </div>
      </div>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        aria-controls="navigation-index"
        aria-expanded="false"
        aria-label="Toggle navigation"
        @click="toggleSidebar"
        :class="{ toggled: $sidebar.showSidebar }"
      >
        <span class="sr-only">Toggle navigation</span>
        <span class="navbar-toggler-icon icon-bar">Notification</span>
        <span class="navbar-toggler-icon icon-bar"></span>
        <span class="navbar-toggler-icon icon-bar"></span>
      </button>
      <!-- Collapsable -->
      <div class="collapse navbar-collapse justify-content-end">
        <ul class="navbar-nav">
          <top-navbar-languages />
        </ul>
      </div>
    </div>
  </nav>
</template>
<style scoped>
.ipcrms-navbar-color{
    background-color: #228B22 !important;
    color: white;
}
.ipcrms-width-navbar {
  width: 100vw;
}
</style>
<script>
export default {
  data() {
      return {
        notification: false,
        role_title: document.querySelector("meta[name='role_title']").getAttribute('content')
      };
  },

  computed: {
    currentRouteName () {
        return this.$route.name;
    }
  },

  methods: {
    toggleSidebar() {
      this.$sidebar.displaySidebar(!this.$sidebar.showSidebar)
    },
  }
}
</script>
