import * as $ from './actionTypes'

export const actionChangeValue = value => ({
  type: $.CHANGE_VALUE, value
})

export const actionChangeList = () => ({
  type: $.CHANGE_LIST
})

export const actionDeleteItem = item => ({
  type: $.DELETE_ITEM, item
})
