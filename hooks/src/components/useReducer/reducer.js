import { data } from '../../data'
import { CLEAR_ITEM, REMOVE_ITEM, RESET_ITEM } from './actions'

const reducer = (state, action) => {
  // console.log(action)
  if (action.type === CLEAR_ITEM) {
    return { ...state, people: [] };
  }
  if (action.type === RESET_ITEM) {
    return { ...state, people: data };
  }
  if (action.type === REMOVE_ITEM) {
    // console.log(action);
    let newPeople = state.people.filter((person) => person.id != action.payload.id);
    return { ...state, people: newPeople };
  }
  // return state
  throw new Error(`No matching "${action.type}" - action type`);
}

export default reducer;