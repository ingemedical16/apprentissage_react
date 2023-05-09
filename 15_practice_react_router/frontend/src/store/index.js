import { configureStore} from '@reduxjs/toolkit'
import eventReducer from './slices/eventsSlice';



const store = configureStore({
    reducer:{
        listEvents:eventReducer,
        
    }
})

export default store;