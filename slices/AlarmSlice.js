import { createSlice } from "@reduxjs/toolkit";
import Moment from 'moment';
import { useState } from "react";

const initialState = {
    alarmas:[],
}

export const AlarmSlice = createSlice({
    name: 'alarmSlice',
    initialState,
    reducers:{
        addAlarm : (state = initialState,action) => {
            const alarma={
               id:action.payload.id,
               nombre:action.payload.nombre,
               date: action.payload.date,
               time:action.payload.time,
            }       
            return{
                ...state,
                alarmas: state.alarmas.concat(alarma)
            }},
        deleteAlarm : (state,action) =>{
            const nombre = action.payload
            state.alarmas = state.alarmas.filter((alarma) => alarma.nombre !== nombre)
        },
        editAlarm : (state,action) => {   
            state.alarmas.map(alarma => {
                if(alarma.id == action.payload.id){
                    alarma.nombre = action.payload.nombre
                    alarma.date = action.payload.date
                    alarma.time = action.payload.time
                }
            })
        }
}})

export const {addAlarm,deleteAlarm,editAlarm} = AlarmSlice.actions;
export default AlarmSlice.reducer;