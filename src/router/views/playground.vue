<script>
import Layout from '@layouts/main.vue'
import axios from "axios"


export default {

  components: { Layout },
  props: {
    user: {
      type: Object,
      required: true,
    },
  },
  data(){
    return{
      users:[],
    }
  },
  mounted: async function () {
    const serverResponse = await axios.get("https://reqres.in/api/users?page=2");
    const serverUsers = serverResponse.data.data
    console.log(serverUsers);
    this.users = serverUsers;
  }
}
</script>

<template>
  <Layout>
   
     <b-table :data="users"
>

            <template slot-scope="props">
                <b-table-column field="avatar" label="Pic" width="50" numeric>
                   <img :src= props.row.avatar  alt="">
                </b-table-column>

                <b-table-column field="first_name" label="First Name">
                    {{ props.row.first_name }}
                </b-table-column>

                <b-table-column field="last_name" label="Last Name">
                    {{ props.row.last_name }}
                </b-table-column>

                <b-table-column field="email" label="Email" centered>
                    <span class="tag is-success">
                        {{ props.row.email }}
                    </span>
                </b-table-column>

                
            </template>

         
        </b-table>


<!-- 
    <table>
      <thead>
        <tr>
          <td>F.name</td>
          <td>L.name</td>
          <td>Email</td>
          <td>Pic</td>
        </tr>
      </thead>
      
      <tbody>
        <tr v-for="user of users" :key="user.id">
          <td>{{user.first_name}}</td>
          <td>{{user.last_name}}</td>
          <td>{{user.email}}</td>
          <td><img :src="user.avatar" alt="" width="50" height="50"></td>
        </tr>

      </tbody>
    </table> -->
  </Layout>
</template>
