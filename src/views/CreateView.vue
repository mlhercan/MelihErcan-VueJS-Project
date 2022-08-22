<template>
  <div id="Create">
    <form>
      <div class="well">
        <h4> Add User </h4>
        <div class="form-group">
          <label class="pull-left"> First Name </label>
          <input type="text" class="form-control" v-model="nRegister.first_name"></div>
        <div class="form-group">
          <label class="pull-left"> Last Name </label>
          <input type="text" class="form-control" v-model="nRegister.last_name"></div>
          
        
      </div>
      <button id="btn" type="submit" class="btn btn-large btn-block btn-primary full-width" @click="addToAPI">Submit</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: "CreateView",
  data(){
    return {
      nRegister:{
        first_name:"",
        last_name:"",
      }
      
    }
  },
  methods: {
    addToAPI(){
      let register={
        first_name:this.nRegister.first_name,
        last_name:this.nRegister.last_name,
      }
      axios.post('http://localhost:3000/create', register)
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