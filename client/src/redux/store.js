import { configureStore } from '@reduxjs/toolkit'
import { loadReduser } from './redusers/loadreduser'

const store = configureStore({
  reducer: {
  
    load: loadReduser
  }
})

export default store