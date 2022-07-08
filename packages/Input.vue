<template>
    <div class="ww-input" :class="{'ww-input_suffix':showSuffix}">
        <input 
        class="ww-input_inner  "
        :class="{'is-disabled':disabled}"
        :placeholder="placeholder"
        :type ="showPassword ? (passwordVisible ? 'text' : 'password') : type"
        :name="name"
        :disabled="disabled"
        :value="value"
        @input="handleInput"
        >
        <span class="ww-input_suffix ">
          <i class="ww-input_icon ww-icon-cancel" v-if="clearable && value" @click="clear"></i>
          <i class="ww-input_icon ww-icon-visible" v-if="showPassword "  @click="handlePassword" :class="{ 'ww-icon-visible-active':passwordVisible}"></i>
        </span>
    </div>
</template>

<script>
export default {
    name:'WwInput',
    data(){
        return{
          passwordVisible:false
        }
    },
    props:{
      placeholder:{
        type:String,
          default:''
    },
    type:{
      type:String,
      default:'text'
    },
    name:{
      type:String,
      default:''
    },
    disabled:{
      type:Boolean,
      default:false
    },
    value:{
      type:String,
      default:''  
    },
     clearable:{
      type:Boolean,
      default:false
    },
     showPassword:{
      type:Boolean,
      default:false
    }
},  
  methods:{
    handleInput(e){
      this.$emit('input',e.target.value);
    },
    clear () {
      this.$emit('input', '')
    },
    handlePassword () {
      this.passwordVisible = !this.passwordVisible
    }
  },
  computed: {
    showSuffix () {
      return this.clearable || this.showPassword
    }
  }
}
</script>

<style lang="scss" >
  .ww-input{
    width: 180px;
    position: relative;
    font-size: 14px;
    display: inline-block;
    .ww-input_inner{
      -webkit-appearance: nww;
      background-color: #fff;
      background-image: nww;
      border: 1px solid #dcdfe6;
      border-radius: 4px;
      box-sizing: border-box;
      color: #606266;
      display: inline-block;
      font-size: inherit;
      height: 40px;
      line-height: 40px;
      outline: nww;
      padding: 0 15px;
      transition: border-color .2s cubic-bezier(.645,045,.355,1);
      width: 100%;

      &:focus{
        outline: nww;
        border-color: #409eff;
      }
      // input禁用样式
      &.is-disabled{
        background-color: #f5f7fa;
        border-color: #e4e7ed;
        color: #c0c4cc;
        cursor:not-allowed;
      }
    }
  }
  // 后面加suffix的意思是后面如果有后缀的话，触发该样式
  .ww-input_suffix{
    .ww-input_inner{
      padding-right: 30px;
    }
    .ww-input_suffix{
      position: absolute;
      right: 10px;
      height: 100%;
      top: 0;
      line-height: 40px;
      text-align: center;
      color: #c0c4cc;
      transition: all .3s;
      z-index: 900;
      i{
        color: #c0c4cc;
        font-size: 14px;
        cursor: pointer;
        transition: color .2s cubic-bezier(.645,.045,.355,1);
      }
      .ww-icon-visible-active{
        color:blue;
      }
    }
  }
</style>
