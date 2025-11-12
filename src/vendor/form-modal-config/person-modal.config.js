/*
 * @Author: lizhihang
 * @Date: 2020-12-24 10:48:41
 * @LastEditors: lizhihang
 * @LastEditTime: 2020-12-28 11:47:49
 * @Description: 选人弹窗配置
 * @FilePath: \x-project-app\src\vendor\form-modal-config\person-modal.config.js
 */
import Vue from 'vue'
import apis from '@/api'

const loadUserData = (page, pageSize, keyWord) => {
  return new Promise((resolve, reject) => {
    const request = {
      ...apis.QUERY_ALL_USERS,
      params: {
        page,
        pageSize,
        keyWord
      }
    }
    Vue.prototype
      .$request(request)
      .asyncThen(
        (resp) => {
          if (resp.code === 'ok') {
            resolve({
              data: resp.data,
              total: resp.total
            })
          }
        },
        (err) => {
          reject(err)
        }
      )
      .asyncErrorCatch((err) => {
        reject(err)
      })
  })
}

const loadDepartmentData = (deptId, keyword) => {
  return new Promise((resolve, reject) => {
    const request = {
      ...apis.QUERY_DEPARTMENT_INFO,
      params: {
        deptId: deptId || '',
        keyword
      }
    }
    Vue.prototype
      .$request(request)
      .asyncThen(
        (resp) => {
          if (resp.code === 'ok') {
            resolve({
              data: resp.data,
              total: resp.total
            })
          }
        },
        (err) => {
          reject(err)
        }
      )
      .asyncErrorCatch((err) => {
        reject(err)
      })
  })
}

const loadDeptUserData = (page, pageSize, deptId) => {
  return new Promise((resolve, reject) => {
    const request = {
      ...apis.QUERY_DEPARTMENT_USERS,
      params: {
        deptId,
        page,
        pageSize
      }
    }
    Vue.prototype
      .$request(request)
      .asyncThen(
        (resp) => {
          if (resp.code === 'ok') {
            resolve({
              data: resp.data,
              total: resp.total
            })
          }
        },
        (err) => {
          reject(err)
        }
      )
      .asyncErrorCatch((err) => {
        reject(err)
      })
  })
}

const loadRoleData = (appId) => {
  return new Promise((resolve, reject) => {
    const request = {
      ...apis.QUERY_ROLE_INFO,
      params: {}
    }
    if (appId) {
      request.params = {
        appId
      }
    }
    Vue.prototype
      .$request(request)
      .asyncThen(
        (resp) => {
          if (resp.code === 'ok') {
            resolve({
              data: resp.data,
              total: resp.total
            })
          }
        },
        (err) => {
          reject(err)
        }
      )
      .asyncErrorCatch((err) => {
        reject(err)
      })
  })
}

const loadRoleUserData = (page, pageSize, roleId) => {
  return new Promise((resolve, reject) => {
    const request = {
      ...apis.QUERY_ROLE_USERS,
      params: {
        page,
        pageSize,
        roleId
      }
    }
    Vue.prototype
      .$request(request)
      .asyncThen(
        (resp) => {
          if (resp.code === 'ok') {
            resolve({
              data: resp.data,
              total: resp.total
            })
          }
        },
        (err) => {
          reject(err)
        }
      )
      .asyncErrorCatch((err) => {
        reject(err)
      })
  })
}

// 数据过滤后的用户
const loadAllUserFilter = (param, formId, uuid, formDetailData) => {
  return new Promise((resolve, reject) => {
    const request = {
      ...apis.QUERY_ALL_USERS_FILTER,
      params: {
        formId,
        componentId: uuid,
        param,
        formData: formDetailData
      }
    }
    Vue.prototype
      .$request(request)
      .asyncThen(
        (resp) => {
          if (resp.code === 'ok') {
            resolve({
              data: resp.data,
              total: resp.total
            })
          }
        },
        (err) => {
          reject(err)
        }
      )
      .asyncErrorCatch((err) => {
        reject(err)
      })
  })
}

export default {
  loadUserData: loadUserData,

  loadDepartmentData: loadDepartmentData,
  loadDeptUserData: loadDeptUserData,

  loadRoleData: loadRoleData,
  loadRoleUserData: loadRoleUserData,
  loadUserFilter: loadAllUserFilter

}
