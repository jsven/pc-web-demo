/* eslint-disable standard/object-curly-even-spacing */
import routerView from '@/views/layout/routerView.vue'
import Character from '@/views/system/userManage/Character'
import Authority from '@/views/system/userManage/Authority'
import userManagement from '@/views/system/userManage/userManagement'
import postSetting from '@/views/system/userManage/postSetting'
import resourceMag from '@/views/system/userManage/resourceMag'
import RegionalMag from '@/views/system/userManage/RegionalMag'
import organizationMag from '@/views/system/userManage/organizationMag'
let system = [
  { path: 'userManage',
    name: '用户管理',
    component: routerView,
    children: [
      { path: 'character', component: Character, name: '角色管理'},
      { path: 'authority', icon: 'mobankuangjia', component: Authority, name: '权限配置', hidden: true},
      { path: 'userManagement', component: userManagement, name: '用户管理'},
      { path: 'postSetting', component: postSetting, name: '岗位管理'},
      // { path: 'employeeManagement', icon: 'mobankuangjia', component: employeeManagement, name: '员工管理'},
      { path: 'resourceMag', component: resourceMag, name: '资源管理'},
      { path: 'regionalMag', component: RegionalMag, name: '地区管理'},
      { path: 'organizationMag', component: organizationMag, name: '组织管理'}
    ]}
]
export default system
