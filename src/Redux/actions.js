// Action Types
const SET_USER_ADDRESS = 'SET_USER_ADDRESS';
const TOGGLE_WALLET_CONNECTED = 'TOGGLE_WALLET_CONNECTED';


export const setUserAddress = (address) => {
  return {
    type: SET_USER_ADDRESS, 
    payload: address
  }
}

export const toggleWalletConnected = (bool) => {
  return {
    type: TOGGLE_WALLET_CONNECTED, 
    payload: bool
  }
}