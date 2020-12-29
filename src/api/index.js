import axios from '@/axios'
export function getPost(data) {
  return axios({
    url: '/dataController/getPost',
    method: 'post',
    data: data
  })
}
export function getDocLst(params) {
  return axios({
    url: '/Doc/getDocLst',
    method: 'get',
    params: params
  })
}
