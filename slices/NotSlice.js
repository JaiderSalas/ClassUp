import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    notas:[],
}

export const NotSlice = createSlice({
    name: 'notslice',
    initialState,
    reducers:{
        addANot : (state = initialState,action) => {
            const nota={
               id:action.payload.id,
               nombre:action.payload.nombre,
               clase:action.payload.clase,
               nota: action.payload.nota,
               porcentaje:action.payload.porcentaje,
               corte: action.payload.corte
            }       
            return{
                ...state,
                notas: state.notas.concat(nota)
            }},
        deleteNot : (state,action) =>{
            const nombre = action.payload
            state.notas = state.notas.filter((nota) => nota.nombre !== nombre)
        },
        editNot : (state,action) => {   
            console.log(action.payload)
            state.notas.map(nota => {
                if(nota.id == action.payload.id){
                    nota.clase = action.payload.clase
                    nota.nombre = action.payload.nombre
                    nota.nota = action.payload.nota
                    nota.porcentaje = action.payload.porcentaje
                    nota.corte = action.payload.corte
                }
            })
        }
}})

export const {addANot,deleteNot,editNot} = NotSlice.actions;
export default NotSlice.reducer;