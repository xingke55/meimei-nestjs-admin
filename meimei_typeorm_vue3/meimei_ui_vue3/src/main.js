import { createApp } from 'vue'
import Cookies from 'js-cookie'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// @ts-ignore
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'

import '@/assets/styles/index.scss' // global css
import 'element-plus/theme-chalk/index.css'
// @ts-ignore
import App from './App'
import store from './store'
import router from './router'
import directive from './directive' // directive
// 注册指令
import plugins from './plugins' // plugins
import { download } from '@/utils/request'
// svg图标
import 'virtual:svg-icons-register'
// @ts-ignore
import SvgIcon from '@/components/SvgIcon'
import elementIcons from '@/components/SvgIcon/svgicon'
import './permission' // permission control
import { useDict } from '@/utils/dict'
import { parseTime, resetForm, addDateRange, handleTree, selectDictLabel, selectDictLabels } from '@/utils/mei-mei'

// 分页组件
// @ts-ignore
import Pagination from '@/components/Pagination'
// 自定义表格工具组件
// @ts-ignore
import RightToolbar from '@/components/RightToolbar'
// 富文本组件
// @ts-ignore
import Editor from '@/components/Editor'
// 文件上传组件
// @ts-ignore
import FileUpload from '@/components/FileUpload'
// 图片上传组件
// @ts-ignore
import ImageUpload from '@/components/ImageUpload'
// 图片预览组件
// @ts-ignore
import ImagePreview from '@/components/ImagePreview'
// 自定义树选择组件
// @ts-ignore
import TreeSelect from '@/components/TreeSelect'
// 字典标签组件
// @ts-ignore
import DictTag from '@/components/DictTag'

const app = createApp(App)

// 全局方法挂载
app.config.globalProperties.useDict = useDict
app.config.globalProperties.download = download
app.config.globalProperties.parseTime = parseTime
app.config.globalProperties.resetForm = resetForm
app.config.globalProperties.handleTree = handleTree
app.config.globalProperties.addDateRange = addDateRange
app.config.globalProperties.selectDictLabel = selectDictLabel
app.config.globalProperties.selectDictLabels = selectDictLabels

// 全局组件挂载
app.component('DictTag', DictTag)
app.component('Pagination', Pagination)
app.component('TreeSelect', TreeSelect)
app.component('FileUpload', FileUpload)
app.component('ImageUpload', ImageUpload)
app.component('ImagePreview', ImagePreview)
app.component('RightToolbar', RightToolbar)
app.component('Editor', Editor)

app.use(router)
app.use(store)
app.use(plugins)
app.use(elementIcons)
app.component('svg-icon', SvgIcon)

directive(app)

// 使用element-plus 并且设置全局的大小
// @ts-ignore
app.use(ElementPlus, {
  locale: zhCn,
  // 支持 large、default、small
  size: Cookies.get('size') || 'default',
})

app.mount('#app')
