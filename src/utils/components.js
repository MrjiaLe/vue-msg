import mySearch from '@/components/mySearch'
import myTable from '@/components/myTable'
import MyPagination from '@/components/MyPagination'
import MyForm from '@/components/MyForm'
import MyDialog from '@/components/MyDialog'

export const install = (Vue) => {
  ;[mySearch, myTable, MyPagination, MyForm, MyDialog].forEach((item) =>
    Vue.component(item.name, item)
  )
}
