<template>
  <div class="main-box" clz-type="table">
    <!-- 权限设置 -->
    <div class="table-box">
      <div class="tree">
        <el-tree
          :data="data"
          show-checkbox
          node-key="id"
          ref="tree"
          :default-expanded-keys="[2, 3]"
          :default-checked-keys="resourceIds"
          :props="defaultProps">
        </el-tree>
        <div class="treeBtn">
          <el-button type="primary"  size="small" @click="save" id="save" class="btn-active">保存</el-button>
          <el-button type="primary"  size="small" @click="cancel" id="cancel" >取消</el-button>
        </div>
      </div>
      <div class="treeContent">
        <el-form ref="form" :model="formData" label-width="17%">
          <el-form-item label="角色名称" >
            <el-input v-model="formData.name"></el-input>
          </el-form-item>
          <el-form-item label="状态">
            <el-select v-model="formData.status" placeholder="请选择状态">
              <el-option v-for="item in formSelect.status" :key="item.value" :label="item.label" :value="item.value"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="备注">
            <el-input
              type="textarea"
              :rows="5"
              placeholder="请输入备注"
              v-model="formData.description">
            </el-input>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
import { getCharInfo, saveCharOrUpdate } from '@/api/system/userManage'
export default {
  data () {
    return {
      Selected: [], // 列表选中列
      formData: {
        name: '',
        status: '',
        description: '',
        id: ''
      },
      formSelect: {
        status: [{
          value: false,
          label: '启用'
        }, {
          value: true,
          label: '停用'
        }]
      },
      data: [
        //                    {
        //                    id: 1,
        //                    name: '一级 1',
        //                    children: [{
        //                        id: 4,
        //                        name: '二级 1-1',
        //                        children: [{
        //                            id: 9,
        //                            name: '三级 1-1-1'
        //                        }, {
        //                            id: 10,
        //                            name: '三级 1-1-2'
        //                        }]
        //                    }]
        //                }
      ],
      resourceIds: [],
      defaultProps: {
        children: 'children',
        label: 'name'
      }
    }
  },
  methods: {
    selsChange (sels) {
      this.Selected = sels
    },
    save () {
      let _this = this
      let data = {
        'description': this.formData.description,
        'id': this.formData.id,
        'name': this.formData.name,
        'status': this.formData.status,
        'resourceIds': this.$refs.tree.getCheckedKeys()
      }
      saveCharOrUpdate(data).then(res => {
        _this.editDisabled = true
        if (res.data.status) {
          _this.getList()
          _this.$message({
            message: res.data.message,
            type: 'success'
          })
          this.$store.dispatch('GetInfo')
          let a = setInterval(function () {
            location.reload()
            clearInterval(a)
          }, 2000)
        }
      })
    },
    cancel () {

    },
    getCheckedKeys (data) {
      console.log(data)
    },
    handleNodeClick (data) {
      console.log(data)
    },
    getList () { // 获取数据
      let _this = this
      let authorityId = this.$store.state.columns.authority.id
      getCharInfo(authorityId).then(res => {
        _this.formData = res.data.data
        _this.data = res.data.data.resources
        _this.resourceIds = res.data.data.resourceIds
      })
    }
  },
  created () {
    this.getList() // 初始化数据
  }
}
</script>

<style scoped>
  .table-box{display: flex;}
  .el-tree{min-height: 600px;}
  .tree{display: inline-block;float: left;margin-right: 20px;min-width:388px;width:25%;}
  .treeBtn{padding:20px 0;}
  .treeContent{ width: 40%;height: 600px;float: left;border: 1px solid rgb(209, 227, 229);text-align: center;box-sizing: border-box;padding: 20px;min-width:520px;}
  .treeContent .el-form{width: 85%;display: inline-block;}
  .el-form-item{margin-bottom: 15px;}
  .el-select{width: 100%;}
</style>
