const ADD_COUNTER = 'add';
const DELETE_COUNTER = 'delete';

const initState = {
  counter: 0
}

const counter = (state=initState, action) => {
  const { type, payload } = action;
  const { counter } = state;
  switch (type) {
    case ADD_COUNTER:
      return { counter: counter + 1 };
    case DELETE_COUNTER:
      return { counter: counter - 1 };
    default:
      return state;
  }
}

const addCounter = () => ({type: ADD_COUNTER});
const deleteCounter = () => ({type: DELETE_COUNTER});
const asyncAddCounter = () => dispatch => {
  setTimeout(() => {
    dispatch({type: ADD_COUNTER});
  }, 1000);
}
const addDoubleCounter = () => [{type: ADD_COUNTER}, {type: ADD_COUNTER}];

export {
  counter,
  addCounter,
  deleteCounter,
  asyncAddCounter,
  addDoubleCounter
}

