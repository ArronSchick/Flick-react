import {createContext, useContext} from 'react'

// allows global access of states
export const StateContext = createContext()

export const useGlobalState = () => useContext(StateContext)
