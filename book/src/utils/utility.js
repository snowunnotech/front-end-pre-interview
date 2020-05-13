import moment from 'moment'

function dateFormat (date, format) {
  return moment(date).format(format)
}

export {
  dateFormat
}
