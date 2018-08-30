export const onEdited = function ({ commit }) {
  commit('onEdit')
}
export const endEdited = ({ commit }) => {
  commit('endEdit')
}
