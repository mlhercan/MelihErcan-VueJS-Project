<template>
  <div class="Update">
    <form>
      <div class="well">
        <h4> Update User </h4>
        <div class="form-group">
          <label class="pull-left"> User ID </label>
          <input type="text" class="form-control" v-model="nUpdate.nId"></div>
        <div class="form-group">
          <label class="pull-left"> First Name </label>
          <input type="text" class="form-control" v-model="nUpdate.first_name"></div>
        <div class="form-group">
          <label class="pull-left"> Last Name </label>
          <input type="text" class="form-control" v-model="nUpdate.last_name"></div>
          
        
      </div>
      <button id="btn" type="submit" class="btn btn-large btn-block btn-primary full-width" @click="updateToAPI">Update</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: "UpdateView",
  data(){
    return {
      nUpdate:{
        nId:"",
        first_name:"",
        last_name:"",
      }
      
    }
  },
  methods: {
    updateToAPI(){
      let LastUpdated={
        first_name:this.nUpdate.first_name,
        last_name:this.nUpdate.last_name,
      }
      axios.put('http://localhost:3000/update/'+ this.nUpdate.nId ,LastUpdated)
        .then((response)=>{
          console.log(response);
          })
        .catch((err)=>{
          console.log(err);
        });
    }
  }, 
}
</script>
<style>
.form-group{
  padding-top: 5px;
  padding-bottom: 15px;
  text-align: center;
}
#btn { 
    padding-left: 5px;
}


</style>