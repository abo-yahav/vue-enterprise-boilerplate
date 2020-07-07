<script>
import Layout from '@layouts/main.vue'
import axios from 'axios'

export default {
  name: 'Playground',
  components: { Layout },
  props: {
    user: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      users: [],
    }
  },
  mounted: async function() {
    const config = {
      headers: {
        Accept: 'application/json',
      },
    }
    const req = await axios.get('https://reqres.in/api/users?page=2', config)
    const x = req.data
    const res = req.data.data
    console.log(x)
    this.users = res
  },
}
</script>

<template>
  <Layout>
    <h1>
      <BaseIcon name="user" />
      {{ user.name }}
      Playground
    </h1>
    <div>
      <md-table class="table">
        <md-table-row class="table-head">
          <md-table-head>First Name</md-table-head>
          <md-table-head>Last name</md-table-head>
          <md-table-head>Email</md-table-head>
          <md-table-head>Pic</md-table-head>
        </md-table-row>
        <md-table-row v-for="pgUser of users" :key="pgUser.id" class="table-row">
          <md-table-cell>{{ pgUser.first_name }}</md-table-cell>
          <md-table-cell>{{ pgUser.last_name }}</md-table-cell>
          <md-table-cell>{{ pgUser.email }}</md-table-cell>
          <md-table-cell>
            <md-avatar>
              <img :src="pgUser.avatar" alt />
            </md-avatar>
          </md-table-cell>
        </md-table-row>
      </md-table>
    </div>
  </Layout>
</template>

<style>
.table {
  border-radius: 10px;
}

.table-head {
  background-color: rgba(199, 194, 194, 0.438);
}

.table-row {
  background-color: rgba(216, 210, 210, 0.349);
}
</style>