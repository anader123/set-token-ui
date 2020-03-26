const initialState = {
  walletConnected: false,
  userAddress: ''
}

// Action Types
const SET_USER_ADDRESS = 'SET_USER_ADDRESS';
const TOGGLE_WALLET_CONNECTED = 'TOGGLE_WALLET_CONNECTED';

// Reducer
export default function reducer(state = initialState, action) {
  switch(action.type) {
    case SET_USER_ADDRESS:
      return {...state, userAddress: action.payload};
    case TOGGLE_WALLET_CONNECTED:
      return {...state, walletConnected: action.payload};
    default:
      return state;
  }
}