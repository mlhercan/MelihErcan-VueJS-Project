<template>
  <div id="home">
    <table id="table" class="table table-striped table-borderes">
      <thead>
        <tr>
          <th class="center">ID</th>
          <th class="center">First Name</th>
          <th class="center">Last Name</th>
        </tr>
      </thead>
      <tbody >
        <tr v-for="User_alias in User" :key="User_alias.id">
          <td class="center">{{ User_alias._id }}</td>
          <td class="center">{{ User_alias.first_name }}</td>
          <td class="center">{{ User_alias.last_name }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
/* eslint-disable */
import axios from 'axios';

export default {
  name: 'HomeView',
  data() {
    return {
      User: [],
    }
  },

  mounted() {
    axios.get('http://localhost:3000/all')
      .then((response) => {
        console.log(response.data);
        this.User = response.data;
      })
      .catch((error) => {
        console.log(error);
      })
  }
}
</script>

<style>
#table{
  padding-top: 15px;
  margin-left: 500px;
  text-align: center;
}
td { 
    padding-top: 10px;
    text-align: center;
}
th { 
    padding-left: 35px;
    text-align: center;
}

</style>