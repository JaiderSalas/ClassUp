import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    notasfinales: [],
}


export const NotasFinales = createSlice({
    name: 'notasfinales',
    initialState,
    reducers:{
        notafinal:(state = initialState,action) => {
            const calculo={
                idclase:action.payload.idclase,
                notafinal:action.payload.notafinal,
            }
            return{
                ...state,
                notasfinales: state.notasfinales.concat(calculo)
            }
        },
        deletenotas: (state,action) =>{
            const idclase = action.payload
            state.notasfinales = state.notasfinales.filter((nota) => nota.idclase !== idclase)
        },
        editNotasFinales : (state,action) => {   
            state.notasfinales.map(nota => {
                if(nota.idclase == action.payload.idclase){
                    nota.notafinal = action.payload.notafinal
                }
            })
        }
}})

export const {notafinal,deletenotas,editNotasFinales} = NotasFinales.actions;
export default NotasFinales.reducer;