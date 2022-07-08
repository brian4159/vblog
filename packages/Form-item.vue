<template>
    <div class="ww-form-item">
        <label class="ww-form-item_label" :style="{width:this.Form.labelWdidth}" >{{label}}</label>
        <div class="ww-form-item_content">
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    name:'WwFormItem',
    props:{
        label:String,
    },
    inject:['Form']
}
</script>

<style lang="scss" scoped>
  .ww-form-item{
    margin-bottom: 25px;
    .ww-form-item_label{
      text-align: right;
      vertical-align: middle;
      float: left;
      font-size: 14px;
      color: #606266;
      line-height: 40px;
      padding: 0 12px 0 0;
      box-sizing: border-box;
    }
    .ww-form-item_content{
      line-height: 40px;
      position: relative;
      font-size: 14px;
      overflow: hidde;
    }
  }
</style>