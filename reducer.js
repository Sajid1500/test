let lastId = 0;

//export default 
function reducer(state = [], action) {
  switch (action.type) {
    case 'bugAdded':
      return [
            ...state,
        {
          id: ++lastId,
          description: action.payload.description,
          resolved: false
            }
           ];
      break;
    case 'bugRemoved':
      return state.filter(bug => bug.id !== action.payload.id);
      break;
    default:
      return state;
  }
}
