<script>
import appConfig from '@src/app.config'
import playgroundComp from '@components/playgroundComp.vue'
import Layout from '@layouts/main.vue'

export default {
  page: {
    title: 'Playground',
    meta: [{ name: 'description', content: appConfig.description }],
  },
  components: { Layout, playgroundComp },
  computed: {
    users() {
      return this.$store.state.userList.users
    },
  },
}
</script>

<template>
  <Layout>
    <h1>Playground</h1>
    <playgroundComp :users="users" />
  </Layout>
</template>
