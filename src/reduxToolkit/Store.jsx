import { configureStore } from '@reduxjs/toolkit'
import FormDataReducer from './FormDataSlice.jsx'
import { ExperienceDataReducer } from './FormDataSlice.jsx'
import { EducationDataReducer } from './FormDataSlice.jsx'

const store = configureStore({
  reducer: {
    user: FormDataReducer,
    experience: ExperienceDataReducer,
    education: EducationDataReducer,
  },
})
export default store
