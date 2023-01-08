import { configureStore } from '@reduxjs/toolkit'
import { todosApi } from './apis/todosApi'
import { counterSlice } from './slices/counter'
import { pokemonSlice } from './slices/pokemon'
 

export const store = configureStore({
  reducer: {
    //podemos poner cualquier nombre
    contador: counterSlice.reducer,
    pokemones: pokemonSlice.reducer,

    [todosApi.reducerPath]:todosApi.reducer,
  },
  middleware:(getDefaultMiddleware)=>getDefaultMiddleware()
  .concat(todosApi.middleware)
  
})
