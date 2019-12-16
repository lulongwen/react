import moment from 'moment'
import dayjs from 'dayjs'
import JsonP from 'jsonp'
// import axios from 'axios'
// import { Modal } from 'antd'

export const nowtime2 = () => moment().format('YYYY-MM-DD HH:mm:ss')
export const nowtime = () => dayjs().format('YYYY-MM-DD HH:mm:ss')

// JsonP 跨域
export class JSONP2 {
  static jsonp (option) {
    return new Promise((resolve, reject) => {
      JsonP(option.url, { params: 'callback' }, (err, res) => {
        return (res.status === 'success') ? resolve(res) : reject(res.message)
      })
    })
  }
}

