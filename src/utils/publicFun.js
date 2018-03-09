/* eslint-disable one-var,no-undef,no-redeclare */
import refreshIcon from '@/components/refreshIcon/index.vue'
import clzPopover from '@/components/Popover'
export default{
  install: function (Vue, options) {
    Vue.component('refresh-icon', refreshIcon)
    Vue.component('clz-popover', clzPopover)
    // 导出处理方法
    Vue.prototype.exportFile = function (obj) {
      let formData = []
      for (let i in obj) {
        if (obj[i] !== '') {
          formData.push(i + '=' + obj[i])
        }
      }
      let str = ''
      let s = 0
      formData.forEach(function (item) {
        s++
        if (s === 1) {
          str = '?' + str + item
        } else {
          str = str + '&' + item
        }
      })
      return str
    }

    Vue.prototype.localStorage = require('storejs')
    // 解析obj 只包含KEY 和VALUE
    Vue.prototype.parseObj = function (localStorageData) {
      let obj = []
      for (let item in localStorageData) {
        let data = {value: item, label: localStorageData[item]}
        obj.push(data)
      }
      return obj
    }
    // 解析List 包含所有列表子项
    Vue.prototype.parseList = function (localStorageData) {
      let obj = []
      for (let item in localStorageData) {
        obj.push(localStorageData[item])
      }
      return obj
    }

    /**
         * 表格合并
         */
    Vue.prototype.tableMerge = function (tabId, max) { // 表格合并
      let tab = document.getElementById(tabId)
      let maxCol = max, val, count, start
      for (var col = maxCol - 1; col >= 0; col--) {
        count = 1
        val = ''
        for (var i = 0; i < tab.rows.length; i++) {
          if (val === tab.rows[i].cells[col].innerHTML) {
            count++
          } else {
            if (count > 1) { // 合并
              start = i - count
              tab.rows[start].cells[col].rowSpan = count
              for (var j = start + 1; j < i; j++) {
                tab.rows[j].cells[col].style.display = 'none'
              }
              count = 1
            }
            val = tab.rows[i].cells[col].innerHTML
          }
        }
        if (val === '') {
          count++
        } else {
          if (count > 1) { // 合并，最后几行相同的情况下
            start = i - count
            tab.rows[start].cells[col].rowSpan = count
            for (var j = start + 1; j < i; j++) {
              tab.rows[j].cells[col].style.display = 'none'
            }
          }
        }
      }
    }
    /**
         * 导出文件
         * @param options
         */
    Vue.prototype.DownLoadFile = function (options) {
      let data = Object.assign({}, options.data)
      const reg = /[GMT]+/g
      for (let item in data) {
        if (data[item]) {
          if (reg.test(data[item])) {
            data[item] = GMTToStr(data[item])
          }
        } else {
          data[item] = ''
        }
      }
      /**
             * @return {string}
             */
      function GMTToStr (time) {
        let date = new Date(time)
        let Str = date.getFullYear() + '-' +
                    (date.getMonth() + 1) + '-' +
                    date.getDate() + ' ' +
                    date.getHours() + ':' +
                    date.getMinutes() + ':' +
                    date.getSeconds()
        return Str
      }
      options.data = data
      var config = $.extend(false, {method: 'post'}, options)
      var $iframe = $('<iframe id="down-file-iframe" />')
      var $form = $('<form target="down-file-iframe" method="' + config.method + '" />')
      $form.attr('action', config.url)
      for (var key in config.data) {
        $form.append('<input type="hidden" name="' + key + '" value="' + config.data[key] + '" />')
      }
      $iframe.append($form)
      $(document.body).append($iframe)
      $form[0].submit()
      $iframe.remove()
    }

    /**
         * 清空obj
         * @param obj
         */
    Vue.prototype.deleteObj = function (obj) {
      for (let i in obj) {
        obj[i] = ''
      }
      return obj
    }

    /**
         * 停用启用
         * @param Selected  选中值
         * @param dis  启用停用 true false
         * @param functions 请求
         */
    Vue.prototype.enabledDisabled = function (Selected, dis, functions) {
      if (Selected.length <= 0) {
        this.$message({
          message: '请勾选选项',
          type: 'warning'
        })
        return false
      }
      let postData = {ids: [], disable: dis}
      for (let item in Selected) {
        if (postData.disable) {
          if (!Selected[item].disable) { // 状态为 true 停用状态的才允许启用
            postData.ids.push(Selected[item].id)
          }
        } else {
          if (Selected[item].disable) { // 状态为 true 停用状态的才允许启用
            postData.ids.push(Selected[item].id)
          }
        }
      }
      if (postData.ids.length <= 0) {
        if (postData.disable) {
          this.$message({
            message: '状态已停用',
            type: 'warning'
          })
        } else {
          this.$message({
            message: '状态已启用',
            type: 'warning'
          })
        }
        return false
      }
      functions(postData).then(res => {
        if (res.data.status) {
          this.$message({
            message: res.data.message,
            type: 'success'
          })
          this.getList()
        }
      })
    }

    /**
         * 权限obj
         * @param levelArray 多层数组
         */
    Vue.prototype.Jurisdiction = function (levelArray) {
      let hrefs = this.localStorage('userResMap').hrefs
      let thisPath = '#' + this.$route.path
      //  console.log(hrefs)
      if (hrefs.length > 0) {
        hrefs.forEach(res => {
          if (res === thisPath) {
            if (levelArray) {
              if (levelArray.length === 1) {
                this.tableShow = this.localStorage('userResMap').userResMap[levelArray[0]]['field'] // 显示字段
                this.userButtonCodes = this.localStorage('userResMap').userResMap[levelArray[0]]['button'] // 权限按钮
              } else if (levelArray.length === 2) {
                this.tableShow = this.localStorage('userResMap').userResMap[levelArray[0]][levelArray[1]]['field'] // 显示字段
                this.userButtonCodes = this.localStorage('userResMap').userResMap[levelArray[0]][levelArray[1]]['button'] // 权限按钮
              } else if (levelArray.length === 3) {
                //  console.log(this.localStorage("userResMap"))
                this.tableShow = this.localStorage('userResMap').userResMap[levelArray[0]][levelArray[1]][levelArray[2]]['field'] // 显示字段
                this.userButtonCodes = this.localStorage('userResMap').userResMap[levelArray[0]][levelArray[1]][levelArray[2]]['button'] // 权限按钮
              } else if (levelArray.length === 4) {
                this.tableShow = this.localStorage('userResMap').userResMap[levelArray[0]][levelArray[1]][levelArray[2]][levelArray[3]]['field'] // 显示字段
                this.userButtonCodes = this.localStorage('userResMap').userResMap[levelArray[0]][levelArray[1]][levelArray[2]][levelArray[3]]['button'] // 权限按钮
              }
            }
          }
        })
      }
    }
  }
}
