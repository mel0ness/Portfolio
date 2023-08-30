import { configureStore, combineReducers } from "@reduxjs/toolkit"
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import StickyReducer from "./StickyReducer"
import modaleIDReducer from "./modaleIDReducer"




const persistConfig = {
    timeout: 1000,
    key: 'root',
    storage,
    blacklist: ["modaleID"]
  }



  const reducers = combineReducers({
    Sticky: StickyReducer,
    modaleID: modaleIDReducer
  })
 

  const persistedReducer = persistReducer(persistConfig, reducers)

const store = configureStore({
    reducer: persistedReducer,
    middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),})

export default store;