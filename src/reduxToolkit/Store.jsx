
import storage from 'redux-persist/lib/storage' // Default storage (localStorage)
import { persistReducer, persistStore } from 'redux-persist'
import { combineReducers } from 'redux'
import { configureStore } from '@reduxjs/toolkit'
import FormDataReducer from './FormDataSlice.jsx'
import { ExperienceDataReducer } from './FormDataSlice.jsx'
import { EducationDataReducer } from './FormDataSlice.jsx'
const rootReducer = combineReducers({
  user: FormDataReducer,
  experience: ExperienceDataReducer,
  education: EducationDataReducer,
})
const persistConfig = {
  key: 'root',
  version: 1,
  storage,
}
const persistedReducer = persistReducer(persistConfig, rootReducer)


const store = configureStore({
  reducer: persistedReducer,
})

const persistor = persistStore(store)
export  { store, persistor }
