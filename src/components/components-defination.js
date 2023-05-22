import Vue from 'vue'
import erpInput from './forms/input'
import erpSelect from './forms/select'
import erpTableSearch from './table-search'
import erpTree from './tree'
import erpSwitch from './forms/switch'
import mainPage from './main-page'
import erpImgPicker from './forms/erp-img-picker'
import erpDatePicker from './forms/date-picker'
import erpCheckbox from './forms/checkbox'
import toolbar from './toolbar'
import erpRadio from './forms/radios'
import erpTextarea from './forms/textarea'
Vue.component(erpTextarea.name, erpTextarea)
Vue.component(toolbar.name, toolbar)
Vue.component(erpRadio.name, erpRadio)
Vue.component(erpDatePicker.name, erpDatePicker)
Vue.component(erpCheckbox.name, erpCheckbox)
Vue.component(erpTableSearch.name, erpTableSearch)
Vue.component(erpInput.name, erpInput)
Vue.component(erpSwitch.name, erpSwitch)
Vue.component(mainPage.name, mainPage)
Vue.component(erpSelect.name, erpSelect)
Vue.component(erpImgPicker.name, erpImgPicker)

Vue.component(erpTree.name, erpTree)

import svuHeader from './svu-header'
Vue.component(svuHeader.name, svuHeader)
import svuLogo from './svu-logo'
Vue.component(svuLogo.name, svuLogo)
import svuNav from './svu-nav'
Vue.component(svuNav.name, svuNav)
import svuCourse from './svu-course'
Vue.component(svuCourse.name, svuCourse)
import svuCourseV2 from './svu-course-v2'
Vue.component(svuCourseV2.name, svuCourseV2)
import svuArticle from './svu-article' 
Vue.component(svuArticle.name, svuArticle)
import svuLoginContainer from './svu-login-container' 
Vue.component(svuLoginContainer.name, svuLoginContainer)
import svuInput from './svu-forms/svu-input' 
Vue.component(svuInput.name, svuInput)
import svuAdminNavigation from './svu-admin-navigation' 
Vue.component(svuAdminNavigation.name, svuAdminNavigation)