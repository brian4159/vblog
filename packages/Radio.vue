<template>
    <label   class="ww-radio" :class="{'is-checked' :model == label}" >
        <span class="ww-radio_input">
            <span class="ww-radio_inner"></span>
        <input
        class="ww-radio_original" 
        type="radio"
        :value="label"
        :name="name"
        v-model="model"
        >
        </span>
        <span class="ww-radio_label">
        <slot></slot>
        <template v-if="$slots.default">
        {{label}}
        </template>
        </span>
    </label>
</template>

<script>
export default {
    name :"WwRadio",
    inject:{
      RadioGroup:{
        default:'',
      }
    },
    computed:{
      model:{
        get(){
          return this.isGroup ? this.RadioGroup.value : this.value
        },
        set(value){
          
          this.isGroup ? this.RadioGroup.$emit('input',value) : this.$emit('input',value)
        }
      },
      isGroup(){
        return !!this.RadioGroup
      }
    },
    props:{
        label:{
            type:[String,Number,Boolean],
            default:''
        },
        value:null,
        name:{
            type:String,
            default:''
        }
    }
}
</script>

<style lang="scss" scoped>
  .ww-radio{
    color: #606266;
    font-weight: 500;
    line-height: 1;
    position: relative;
    cursor: pointer;
    display: inline-block;
    white-space: nowrap;
    outline: nww;
    font-size: 14px;
    margin-right: 30px;
    -moz-user-select: nww;
    -webkit-user-select: nww;
    -moz-user-select: nww;
    .ww-radio_input{
      white-space: nowrap;
      cursor: pointer;
      outline: nww;
      display: inline-block;
      line-height: 1;
      position: relative;
      vertical-align: middle;
      .ww-radio_inner{
        border: 1px solid #dcdfe6;
        border-radius: 100%;
        width: 14px;
        height: 14px;
        background-color: #fff;
        position: relative;
        cursor: pointer;
        display: inline-block;
        box-sizing: border-box;
        &:after{
          width: 4px;
          height: 4px;
          border-radius: 100%;
          background-color: #fff;
          content: "";
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%,-50%) scale(0);
          transition: transform .15s ease-in;
        }
      }
      .ww-radio_original{
        opacity: 0;
        outline: nww;
        position: absolute;
        z-index: -1;
        top: 0;
        left: 0px;
        right: 0;
        bottom: 0;
        margin: 0;
      }
    }
    .ww-radio_label{
      font-size: 14px;
      padding-left: 10px;;
    }
  }
  // 选中的样式
  .ww-radio.is-checked{
    .ww-radio_input{
      .ww-radio_inner{
        border-color: #409eff;
        background-color: #409eff;
        &:after{
          transform: translate(-50%,-50%) scale(1);
        }
      }
    }
    .ww-radio_label{
      color:#409eff;
    }
  }
</style>
