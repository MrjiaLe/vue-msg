export const removeChildren = (data) => {
  data.forEach((item) => {
    if (item.children && item.children.length <= 0) {
      delete item.children
    }
    if (item.children && item.children.length > 0) {
      removeChildren(item.children)
    }
  })
  return data
}

export const filterMenus = (data) => {
  data[1].children.forEach((item) => {
    if (!item.children[0].name && !item.children[0].icon) {
      delete item.children
    }
  })
  data[0].path = '/system'
  return data
}
