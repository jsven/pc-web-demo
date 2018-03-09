<template>
    <!-- 左侧菜单 -->
    <div class="bar-menu">
        <template v-for="item in routes" >
            <div v-if="'/'+$route.path.split('/')[1]=='/'+item.path.split('/')[1]">
                <!-- 循环子路由 -->
                <template v-for="child in item.children">
                    <router-link v-if="!child.hidden&&child.noDropdown" :to="item.path+'/'+child.path">
                        <el-menu-item :index="item.path+'/'+child.path" @click="handleNodeClick(child,item.path+'/'+child.path)" :id="child.path">
                            <span slot="title">{{child.name}}</span>
                        </el-menu-item>
                    </router-link>
                    <!-- 循环子路由的子路由 -->
                    <el-submenu :index="child.name" v-if="!child.noDropdown&&!child.hidden" :id="child.path">
                        <template slot="title">
                           <span class="childName">{{child.name}}</span>
                        </template>
                        <template v-for="childList in child.children" v-if="!childList.hidden">
                           <!-- {{childList}}-->
                            <sidebar-item class='nest-menu' v-if='childList.children' :routes='[child]' @click="handleNodeClick(child)"> </sidebar-item>
                            <router-link v-else :to="item.path+'/'+child.path+'/'+childList.path" :key="childList.name">
                                <el-menu-item :to="item.path+'/'+child.path+'/'+childList.path" :index="item.path+'/'+child.path+'/'+childList.path" @click="handleNodeClick(childList,item.path+'/'+child.path+'/'+childList.path)" :id="childList.path">
                                    <!--<icon-svg v-if='child.icon' :icon-class="child.icon"></icon-svg>--><span>{{childList.name}}</span>
                                </el-menu-item>
                            </router-link>
                        </template>
                    </el-submenu>
                </template>
            </div>
        </template>
    </div>
</template>

<script>
import Navbar from './Navbar.vue'
import NavBox from './nav.vue'
import Columns from './Columns.vue'
// import Vue from 'vue';
export default {
  name: 'SidebarItem',
  components: {
    Navbar,
    NavBox,
    Columns
  },
  props: {
    routes: {
      type: Array
    }
  },
  data () {
    return {
      activeIndex: '1',
      activeIndex2: '3'
    }
  },
  methods: {
    handleNodeClick (data, path) {
      // let pathData = { routesPath: path}
      // let routesData = Object.assign(data, pathData)
      this.$root.hubBus.$emit('menuClick', data)
    }
  },
  computed: {
    key () {
      return this.$route.name !== undefined ? this.$route.name + +new Date() : this.$route + +new Date()
    }
  },
  mounted () {

  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
    .bar-menu{
       width: 200px;
        height: 100%;
        display: inline-block;
    }
    .menu-expanded{
        width: 100%;
    }
   /* .is-active.is-opened .childName{
        color:red;
    }*/
    .el-menu-item.is-active{
        background:#f4f6f7;
       border-left:3px solid #39b2b6;
    }
</style>
