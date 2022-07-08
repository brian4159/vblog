// 整个包的入口
// 统一导出
// 导出颜色选择器组件
import Button from './Button'
import Dialog from './Dialog'
import Input from './Input'
import Checkbox from './CheckBox'
import Radio from './Radio'
import RadioGroup from './RadioGroup'
import Switch from './Switch'
import CheckboxGroup from './CheckboxGroup'
import Form from './Form'
import FormItem from './Form-item'
import './fonts/iconfont.css'

const components = [
  Button,
  Dialog,
  Input,
  Checkbox,
  Radio,
  RadioGroup,
  Switch,
  CheckboxGroup,
  Form,
  FormItem
]
// 定义install方法
const install = function (Vue) {
  // 注册所有的组件
  components.forEach(component => {
    Vue.component(component.name, component)
  })
}
// 判断是否直接引入文件，如果是，就不用调用Vue.use()
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}
// 导出install方法
export default {
  install
}