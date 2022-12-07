import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    semestre: 1,
}


export const Semestre = createSlice({
    name: 'semestre',
    initialState,
    reducers:{
        setSemestre : (state = initialState,action) => {
            state.semestre = action.payload.semestre      
            },   
}})

export const {setSemestre} = Semestre.actions;
export const selectSemestre = (state) => state.SemestreState.semestre
export default Semestre.reducer;