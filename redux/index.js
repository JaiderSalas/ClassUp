import { configureStore } from "@reduxjs/toolkit";
import AlarmSlice from "../slices/AlarmSlice";
import ClassSlice from "../slices/ClassSlice";
import NotSlice from "../slices/NotSlice";
import Semestre from "../slices/Semestre";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import thunk from "redux-thunk";
import notasfinales from "../slices/notasfinales";

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    whitelist: ['AlarmState','ClassState','NotState','SemestreState','NotasFinalesState']
}

const rootReducer = combineReducers({
    AlarmState: AlarmSlice,
    ClassState: ClassSlice,
    NotState: NotSlice,
    SemestreState:Semestre,
    NotasFinalesState: notasfinales
})

const persistedReducer = persistReducer(persistConfig,rootReducer)

export const store = configureStore({
    reducer: persistedReducer,
    middleware: [thunk]
})