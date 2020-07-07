<template>
  <div id="app">
    <ejs-grid :data-source="users"> </ejs-grid>
  </div>
</template>

<script>
import Vue from 'vue'
import { GridPlugin } from '@syncfusion/ej2-vue-grids'

Vue.use(GridPlugin)
export default {
  props: {
    users: {
      type: Array,
      required: true,
    },
  },
}
</script>

<style>
@import '/node_moudules/@syncfusion/ej2-vue-grids/styles/material.scss';
</style>
