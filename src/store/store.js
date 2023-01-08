import { configureStore } from '@reduxjs/toolkit'
import { counterSlice } from './slices/counter'
import { pokemonSlice } from './slices/pokemon'
 

export const store = configureStore({
  reducer: {
    //podemos poner cualquier nombre
    contador: counterSlice.reducer,
    pokemones: pokemonSlice.reducer
  },
})
