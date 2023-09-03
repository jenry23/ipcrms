<template>
  <li class="nav-item dropdown">
    {{ timestamp }}
  </li>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import moment from 'moment';

export default {
  data() {
    return {
      timestamp: ''
    }
  },
  computed: {
    ...mapGetters('I18NStore', ['locale', 'languages']),

  },

  mounted: function () {
    setInterval(function () {
      this.runningTime()
    }.bind(this), 1000)
  },

  methods: {
    ...mapActions('I18NStore', ['setLocale']),
    runningTime () {
      const date = new Date()
      this.timestamp = moment(String(date)).format('MMMM DD, Y hh:mm:ss')
    }
  }
}
</script>

<style scoped>
.fixed-width {
  width: 1.3em;
  text-align: center;
  display: inline-block;
}
</style>
