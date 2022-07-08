<template>
  <div class="ww-checkbox-group">
        <slot></slot>
  </div>
</template>

<script>
export default {
    name:'WwCheckboxGroup',
    provide(){
        return{ CheckboxGroup:this}
    },
    props:{
        value:{
            type:Array
        }
    }
}
</script>

<style>

</style>