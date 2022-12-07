import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Registrarclase from '../screens/RegistrarClase'
import VistaClase from '../screens/VistaClase'
import RegistrarAlarma from '../screens/RegistrarAlarma'
import RegistrarNota from '../screens/RegistrarNota'
import Horario from '../screens/Horario'
import ListarAlarmas from '../screens/ListarAlarmas'




const Mystack = () => {
    const Stack = createNativeStackNavigator()
    return (
       
                <Stack.Navigator
                screenOptions = {{ 
                    headerShown: false,
                 }}
                >
               <Stack.Screen
                    name = 'Horario'
                    component={Horario}
                />
                <Stack.Screen
                    name = 'RegistrarClase'
                    component={Registrarclase}
                />
                <Stack.Screen
                    name = 'RegistrarAlarma'
                    component={RegistrarAlarma}
                />
                <Stack.Screen
                    name = 'ListarAlarmas'
                    component={ListarAlarmas}
                />
                <Stack.Screen
                    name = 'RegistrarNota'
                    component={RegistrarNota}
                />
                <Stack.Screen
                    name = 'VistaClase'
                    component={VistaClase}
                /> 
            </Stack.Navigator>
        
    )

}


export default Mystack