import {createContext, useContext} from 'react'

export const FriendContext = createContext()

export const useFriendState = () => useContext(FriendContext)
