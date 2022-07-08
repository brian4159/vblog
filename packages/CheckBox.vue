<template>
    <label class="ww-checkbox" :class="{'is-checked':isChecked}">
        <span class="ww-checkbox_input">
            <span class="ww-checkbox_inner"></span>
            <input type="checkbox" class="ww-checkbox_original"
            :name="name"
            v-model=" model"
            :value="label"
            >
        </span>
        <span class="ww-checkbox_label">
            <slot></slot>
            <template v-if="!$slots.default">{{label}}</template>
        </span>
    </label>
</template>

<script>

export default {

    name :'WwCheckbox', 
    inject:{
        CheckboxGroup:{
            default:''
        }
    },
    computed:{
        model:{
            get(){
                return this.isGroup ? this.CheckboxGroup.value : this.value
            },
            set(value){
                this.isGroup ? this.CheckboxGroup.$emit('input',value) : this.$emit('input',value)
            }
        },
        isGroup(){
            return !!this.CheckboxGroup
        },
        isChecked(){
           return this.isGroup ? this.model.includes(this.label) :this.model
        }
    },
    props:{
        label:{
            type:String,
            default:''
        },
        name:{
            type:String,
            default:''
        },
        value:{
            type:Boolean,
            default:false
        }
    }
}
</script>

<style lang="scss" scoped>
  .ww-checkbox{
    color: #606266;
    font-weight: 500;
    font-size: 14px;
    position: relative;
    cursor: pointer;
    display: inline-block;
    white-space: nowrap;
    user-select: nww;
    margin-right: 30px;
    .ww-checkbox_input{
      white-space: nowrap;
      cursor: pointer;
      outline: nww;
      display: inline-block;
      line-height: 1;
      position: relative;
      vertical-align: middle;
      .ww-checkbox_inner{
        display: inline-block;
        position: relative;
        border: 1px solid #dcdfe6;
        border-radius: 2px;
        box-sizing: border-box;
        width: 14px;
        height: 14px;
        background-color: #fff;
        z-index: 1;
        transition: border-color .25s cubic-bezier(.71,-.46,.29,1.46),background-color .25s,cubic-bezier(.71,-.46,.29,1.46);
        &:after{
          box-sizing: content-box;
          content: '';
          border: 1px solid #ffffff;
          border-left: 0;
          border-top: 0;
          height: 7px;
          left: 4px;
          position: absolute;
          top: 1px;
          transform: rotate(45deg) scaleY(0);
          width: 3px;
          transition: transform .15s ease-in .05s;
          transform-origin: center;
        }
      }
      .ww-checkbox_original{
        opacity: 0;
        outline: nww;
        position: absolute;
        left: 10px;
        margin: 0;
        width: 0;
        height: 0;
        z-index: -1;
      }
    }
    .ww-checkbox_label{
      display: inline-block;
      padding-left: 10px;
      line-height: 19px;
      font-size: 14px;
    }
  }
  // 选中的样式
  .ww-checkbox.is-checked{
    .ww-checkbox_input{
      .ww-checkbox_inner{
        background-color: #409eff;
        border-color: #409eff;
      }
      &:after{
        transform: rotate(45deg) scaleY(1);
      }
    }
    .ww-checkbox_label{
      color: #409eff;
    }
  }
</style>
