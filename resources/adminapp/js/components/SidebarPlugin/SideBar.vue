<template>
  <div
    class="sidebar"
    :data-background-color="backgroundColor"
    :data-image="backgroundImage"
    :data-color="itemColor"
  >
    <div class="logo">
			<a href="/" class="logo-normal">
				<div class="d-flex justify-content-center">
					<img class="img-fluid" src='/md/img/lspu-logo.png' style="margin-top: 5px;height:193px;"/>
        </div>
			</a>
      <div class="mt-2" style="margin-left: 35%;">
      <h4><b>IPCRMS</b></h4>
      </div>
		</div>
    <div class="sidebar-wrapper">
      <slot name="content"></slot>
      <ul class="nav">
        <slot>
          <template v-for="(item, i) in sidebarLinks">
            <sidebar-item-group
              v-if="item.children && $can(item.gate)"
              :key="`group-${i}`"
              :item="item"
            >
            </sidebar-item-group>

            <sidebar-link v-else :key="`item-${i}`" :item="item"></sidebar-link>
          </template>
        </slot>
      </ul>

      <ul class="nav">
        <li class="nav-item">
          <a href="#" class="nav-link" @click.prevent="logout">
            <i class="material-icons">power_settings_new</i>
            <p>{{ $t('global.logout') }}</p>
          </a>
        </li>
      </ul>
    </div>
    <div class="sidebar-background" :style="sidebarStyle"></div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: 'panel.site_title'
    },
    backgroundImage: {
      type: String,
      default: ''
    },
    imgLogo: {
      type: String,
      default: ''
    },
    backgroundColor: {
      type: String,
      default: 'white',
      validator: value => {
        let acceptedValues = ['', 'white', 'black']
        return acceptedValues.indexOf(value) !== -1
      }
    },
    itemColor: {
      type: String,
      default: 'green',
      validator: value => {
        let acceptedValues = [
          '',
          'purple',
          'azure',
          'green',
          'orange',
          'rose',
          'danger'
        ]
        return acceptedValues.indexOf(value) !== -1
      }
    },
    sidebarLinks: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {}
  },
  computed: {
    sidebarStyle() {
      return {
        backgroundImage: `url(${this.backgroundImage})`
      }
    }
  },
  methods: {
    logout() {
      axios
        .request({ baseURL: '/', url: 'logout', method: 'post' })
        .then(() => location.assign('/'))
    }
  }
}
</script>

<style>
@media screen and (min-width: 991px) {
  .nav-mobile-menu {
    display: none;
  }
}
</style>
