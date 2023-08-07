import { createContext, useEffect, useState, useReducer } from 'react'
import {  ResponseFetchUsers } from '../services/Services'
import React from 'react'


interface Props {
  children: React.ReactNode
}

const reducer = (state: any, { type, payload }: any) => {
  switch (type) {
    case 'setList':
      return (state = { ...state, lists: payload })
    case 'addons':
      return (state = { ...state, addons: payload })
      case 'isYearly':
        return (state = { ...state, isYearly: payload })
    default:
      return state
  }
}

const initialState = {
  lists: [],
  addons: [],
  isYearly: false
}

interface StateProp{
  lists: ResponseFetchUsers
  // addons: AddInfoList[]
  isYearly: boolean
}

export const PageContext = createContext<{
  state: StateProp|undefined
  dispatch: React.Dispatch<any>
}>({ state: undefined, dispatch: () => null })

export default ({ children }: Props) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <PageContext.Provider value={{ state, dispatch }}>
      {children}
    </PageContext.Provider>
  )
}
