const initialState = {
  showDirectionsInputs: false,
  origin: "",
  destination: ""
}

export default function(state=initialState, action) {
  switch(action.type) {
    case 'UPDATE_ORIGIN':
      console.log("action: ", action, "payload: ", action.payload, {...state})
      return {
        ...state,
        origin: action.payload
      }
    case 'UPDATE_DESTINATION':
      console.log("action: ", action, "payload: ", action.payload, {...state})
    return {
      ...state,
      destination: action.payload
    }
    case 'TOGGLE_DIRECTIONS_INPUTS':
      console.log("directions input action reducer")
      return {
        origin: "",
        destination: "",
        showDirectionsInputs: action.payload
      }
    default:
      return state
  }
}
