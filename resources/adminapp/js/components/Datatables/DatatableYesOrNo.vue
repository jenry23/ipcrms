<template>
    <div>
      {{ row[field] ? 'Yes' : 'No' }}
    </div>
  </template>

  <script>
  export default {
    props: ['field', 'row']
  }
  </script>
