# Popup

### 弹窗组件
#### 安装组件库


```bash
npm i ui-demo-popup
```
#### 引用组件库

> 在 main.js 中引入组件库

```javascript
// 全部引入
import 'ui-demo-popup/dist/css/index.css'
import UI from 'ui-demo-popup'
Vue.use(UI);

// 按需引入
import 'ui-demo-popup/dist/css/popup.css'
import Popup from 'ui-demo-popup'
Vue.use(Popup);
```
### 示例
```javascript
<m-popup title="add message" :btn="1" :showModule="showModule" submitBtn="submit" cancelBtn="cancel" @cancel="showModule = false" @submit="submit" themeColor="#ff6600">

  <template v-slot:body>

    <div>......</div>

  </template>

</m-popup>
```

### 代码
```javascript
import Popup from '@/components/module/popup.vue'

export default {

  name: 'xxx',

  components: {

    Popup,

  },

  data() {

    return {

      showModule: false,

    }

  },

  method: {

    submit() {

      // event...

    },

  },

}
```


### Attributes
| 参数 | 说明 | 类型 | 可选值| 默认值 |
| --- | --- | ---  |   ---   |  ---  |
| size | 弹框预设大小选择 | string | small / middle / large / form | form |
| title | 弹框顶部标题| string | - | warning |
| btn | 底部按钮类型 | number | 1 确定 / 2 取消 / 3 确定&取消 | 3 |
| submitBtn | 确定按钮文本 | string | - | submit |
| cancelBtn | 取消按钮文本 | string | - | cancel |
| mask | 是否显示遮罩层 | boolean | true / false | truel |
| transition | 选择弹框显示/隐藏的动画效果 | string | top 从上方渐入渐出 / fade 淡入淡出 | top |
| themeColor | 设置主题色（头部、底部按钮背景色） | string | - | #cc6699 |
| showModule | 设置弹框显示隐藏的变量 | boolean| - | - |

### Events
| 事件 | 说明 | 
| --- | --- | 
| submit | 点击确认按钮触发的事件 | 
| cancel | 点击取消按钮 / 右上角 “x” 触发的事件 | 


