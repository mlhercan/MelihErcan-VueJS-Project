<template>
  <div class="Delete">
    <form>
      <div class="well">
        <h4> Delete User </h4>
        <div class="form-group">
          <label class="pull-left"> User ID </label>
          <input type="text" class="form-control" v-model="nDelete.nId"></div>
        
          
        
      </div>
      <button id="btn" type="submit" class="btn btn-large btn-block btn-primary full-width" @click="DeleteToAPI">Delete</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: "DeleteView",
  data(){
    return {
      nDelete:{
        nId:"",
      }
      
    }
  },
  methods: {
    DeleteToAPI(){
      axios.delete('http://localhost:3000/delete/'+ this.nDelete.nId)
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