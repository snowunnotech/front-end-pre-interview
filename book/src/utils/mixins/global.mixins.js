import moment from 'moment'

export function dateFormat (date, format) {
  return moment(date).format(format)
}

const mixins = {
  methods: {
    dateFormat
  }
}

export default mixins
