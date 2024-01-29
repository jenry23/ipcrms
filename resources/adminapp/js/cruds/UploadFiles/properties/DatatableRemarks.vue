<template>
    <div>
        <div v-if="role_title === 'Dean'">
            <textarea v-model="row[field]"></textarea>
        </div>
        <div v-else>
            {{ row[field] }}
        </div>
    </div>
  </template>

  <script>
  export default {
    props: ['field', 'row'],
    data () {
        return {
            role_title: document.querySelector("meta[name='role_title']").getAttribute('content')
        }
    }
  }
  </script>
