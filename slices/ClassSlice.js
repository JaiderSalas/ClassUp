import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    clases:[],
}

export const ClassSlice = createSlice({
    name: 'classSlice',
    initialState,
    reducers:{
        addClass : (state = initialState,action) => {
            
            const clase = {
                id:action.payload.id,
                nameClass:action.payload.nameClass,
                profesor:action.payload.profesor,
                LHoraI:action.payload.LHoraI,
                LHoraF:action.payload.LHoraF,
                MHoraI:action.payload.MHoraI,
                MHoraF:action.payload.MHoraF,
                MIHoraI:action.payload.MIHoraI,
                MIoraF:action.payload.MIoraF,
                JHoraI:action.payload.JHoraI,
                JHoraF:action.payload.JHoraF,
                VHoraI:action.payload.VHoraI,
                VHoraF:action.payload.VHoraF,
                SHoraI:action.payload.SHoraI,
                SHoraF:action.payload.SHoraF,
                semestre:action.payload.semestre
            }
            return{
                ...state,
                clases: state.clases.concat(clase)
            }
        },
        deleteClass : (state,action) =>{
            const nombre = action.payload
            state.clases = state.clases.filter((clase) => clase.nameClass !== nombre)
        },
        editClass : (state,action) => {   
            
            state.clases.map(clase => {
                if(clase.id == action.payload.id){
                    clase.nameClass=action.payload.nameClass
                    clase.profesor=action.payload.profesor
                    clase.LHoraI=action.payload.LHoraI
                    clase.LHoraF=action.payload.LHoraF
                    clase.MHoraI=action.payload.MHoraI
                    clase.MHoraF=action.payload.MHoraF
                    clase.MIHoraI=action.payload.MIHoraI
                    clase.MIoraF=action.payload.MIoraF
                    clase.JHoraI=action.payload.JHoraI
                    clase.JHoraF=action.payload.JHoraF
                    clase.VHoraI=action.payload.VHoraI
                    clase.VHoraF=action.payload.VHoraF
                    clase.SHoraI=action.payload.SHoraI
                    clase.SHoraF=action.payload.SHoraF
                    clase.semestre=action.payload.semestre
                }
            })
        },
        
}})

export const {addClass,deleteClass,editClass} = ClassSlice.actions;
export default ClassSlice.reducer;