/**
 * 提示
 */

import { Notification } from 'element-ui'

export const notifyTips = (title, message, type) => {
  Notification({
    title,
    message,
    type,
    duration: 1000
  })
}
