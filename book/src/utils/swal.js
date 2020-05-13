import swal from 'sweetalert2'

const withOneButton = swal.mixin({
  showCancelButton: false,
  confirmButtonColor: '#4a4a4a',
  confirmButtonText: '好，我知道了！'
})

const withTwoButtons = swal.mixin({
  type: 'question',
  showCancelButton: true,
  confirmButtonColor: '#dd3333',
  cancelButtonColor: '#4a4a4a',
  confirmButtonText: '是',
  cancelButtonText: '否'
})

const withWrongStyle = swal.mixin({
  type: 'error',
  title: '錯誤',
  showCancelButton: false,
  confirmButtonColor: '#dd3333',
  confirmButtonText: '是'
})

const withSuccessStyle = swal.mixin({
  type: 'success',
  title: '成功',
  showCancelButton: false,
  confirmButtonColor: '#5cbb7a',
  confirmButtonText: '是'
})

export default {
  withOneButton,
  withTwoButtons,
  withWrongStyle,
  withSuccessStyle
}
