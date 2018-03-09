<template>
    <div class="main-box" clz-type="table">
        <!-- 权限设置 -->
        <div class="table-box">
            <div class="tree">
                <el-tree
                        :data="data"
                        node-key="id"
                        :default-expanded-keys="[2, 3]"
                        :default-checked-keys="[5]"
                        @node-click="handleNodeClick"
                        :highlight-current="true"
                        :props="defaultProps">
                </el-tree>

            </div>
            <div class="content">
                <div class="treeBtn">
                    <el-button type="primary"  size="small" @click="addParent" id="addParent" >新增国家</el-button>
                    <el-button type="primary"  size="small" @click="addChildren" id="addChildren" >新增下级地区</el-button>
                    <el-button type="primary"  size="small" @click="editResource" id="editResource" >编辑地区</el-button>
                    <el-button type="primary"  size="small" @click="delResource" id="delResource" class="btn-warning">删除地区</el-button>
                </div>
                <div class="treeContent">
                    <el-form ref="formData" :model="formData" label-width="23%">
                        <el-form-item label="名称">
                            <el-input v-model="formData.name" :disabled="editDisabled"></el-input>
                        </el-form-item>
                        <el-form-item label="编码">
                            <el-input v-model="formData.code" :disabled="editDisabled"></el-input>
                        </el-form-item>
                        <el-form-item label="等级">
                            <el-select v-model="formData.level" placeholder="请选择等级" :disabled="editDisabled">
                                <el-option v-for="item in formSelect.level" :key="item.value" :label="item.label" :value="item.value" ></el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item label="排序值">
                            <el-input v-model="formData.sort" :disabled="editDisabled"></el-input>
                        </el-form-item>
                        <el-button type="primary"  size="small" @click="save" id="save" >保存</el-button>
                    </el-form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { saveRegion, delRegionPost, getRegionList } from '@/api/system/userManage'

export default {
  data () {
    return {
      editDisabled: true,
      formData: {
        id: '',
        parentId: '',
        name: '',
        code: '',
        sort: '',
        level: ''
      },
      formSelect: {
        level: [{
          value: 'COUNTRY',
          label: '国家'
        }, {
          value: 'PROVINCE',
          label: '省'
        }, {
          value: 'CITY',
          label: '市'
        }, {
          value: 'AREA',
          label: '区'
        }],
        type: [{
          value: 'page',
          label: '页面'
        }, {
          value: 'button',
          label: '按钮'
        }, {
          value: 'field',
          label: '领域'
        }]
      },
      data: [
        //                    {
        //                    id: 1,
        //                    label: '一级 1',
        //                    children: [{
        //                        id: 4,
        //                        label: '二级 1-1',
        //                        children: [{
        //                            id: 9,
        //                            label: '三级 1-1-1'
        //                        }, {
        //                            id: 10,
        //                            label: '三级 1-1-2'
        //                        }]
        //                    }]
        //                }
      ],
      defaultProps: {
        children: 'children',
        label: 'name'
      }
    }
  },
  methods: {
    handleNodeClick (data) {
      this.formData = data
      this.editDisabled = true
    },
    addParent () {
      this.formData = {
        id: '',
        parentId: '',
        name: '',
        code: '',
        sort: '',
        level: ''
      }
      this.editDisabled = false
    },
    addChildren () {
      let id = this.formData.id
      this.formData = {
        id: '',
        parentId: '',
        name: '',
        code: '',
        sort: '',
        level: ''
      }
      this.formData.parentId = id
      this.editDisabled = false
    },
    editResource () {
      this.editDisabled = false
    },
    delResource () {
      let _this = this
      let del = this.formData.id
      delRegionPost(del).then(res => {
        if (res.data.status) {
          _this.getList()
          _this.$message({
            message: res.data.message,
            type: 'success'
          })
        } else {
          _this.$message.error(res.data.message)
        }
      })

      //                console.log(del)
      //                axios({
      //                    method:"post",
      //                    url:'http://192.168.185.194:10006/sysRegion/delete/'+del,
      //                }).then(function(res){
      //                    _this.getList();
      //                    console.log(res);
      //                    //_this.data = res.data.data
      //                })
    },
    save () {
      let _this = this
      saveRegion(this.formData).then(res => {
        _this.editDisabled = true
        if (res.data.status) {
          _this.getList()
          _this.$message({
            message: res.data.message,
            type: 'success'
          })
        } else {
          _this.$message.error(res.data.message)
        }
      })

      //                axios({
      //                    method:"post",
      //                    url:'http://192.168.185.194:10006/sysRegion/saveOrUpdate',
      //                    data:this.formData
      //                }).then(function(res){
      //                    _this.getList();
      //                    console.log(res);
      //                    //_this.data = res.data.data
      //                })
    },
    getList () { // 获取数据
      let _this = this
      let data = {}
      getRegionList(data).then(res => {
        _this.data = res.data.data
      })

      //                axios({
      //                    method:"post",
      //                    url:'http://192.168.185.194:10006/sysRegion/tree',
      //                }).then(function(res){
      //                    console.log(res);
      //                    _this.data = res.data.data
      //                })
    }
  },
  created () {
    this.getList() // 初始化数据
  }
}
</script>

<style scoped>
    .table-box{display: flex;min-width: 865px;}
    .el-tree{min-height: 600px;height: 1270px;}
    .tree{display: inline-block;flex:none;margin-right: 20px;min-width:388px;width:25%;}
    .treeBtn{padding:20px 0;height: 20px;}
    .treeContent{ width: 40%;height: 600px;border: 1px solid rgb(209, 227, 229);text-align: center;box-sizing: border-box;min-width:400px;padding: 20px;}
    .treeContent .el-form{width: 85%;display: inline-block;}
    .el-form-item{margin-bottom: 15px;}
    .el-select{width: 100%;}
</style>
