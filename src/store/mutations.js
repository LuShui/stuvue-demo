/**
 * Created by Administrator on 2018/02/01.
 */
export default {
  addItme (state, item) {
    state.list.push(item)
  },
  removeIndex (state, index) {
    state.list.splice(index, 1)
  },
  removeItem (state, item) {
    let index = state.list.indexOf(item)
    state.list.splice(index, 1)
  }
}
