import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: 0,
}

export const counterSlice = createSlice({
    name: 'contador',
    initialState: {
        contador: 30
    },
    reducers: {
        increment: (state) => {

            state.contador += 1
        },
        decrement:(state)=>{
            state.contador -= 1
        },
        incrementBy:(state,actions)=>{
            state.contador += actions.payload
            
        }

    },
})

// Action creators are generated for each case reducer function
export const { increment,decrement,incrementBy } = counterSlice.actions

// export default counterSlice.reducer