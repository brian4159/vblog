<template>
  <div class="ww-radio-group">
        <slot></slot>
  </div>
</template>

<script>
export default {
    name :'WwRadioGroup',
   provide(){
       return{ RadioGroup:this
       }
   },
    props: {
        value:null
    }
}
</script>

