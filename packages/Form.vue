<template>
  <div class="ww-form">
    <slot></slot>
  </div>
 
</template>

<script>

export default {
    name:'WwForm',
    props:{
      model:{
        type:Object,
        required:true,
      },
      labelWidth:{
        type:String,
        default:'80px'
      }
    },
    provide (){
      return{
        Form:this
      }
    }
}   
</script>

<style>

</style>