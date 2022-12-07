import { StyleSheet, Text, ScrollView,View, Alert} from 'react-native'
import React from 'react'
import { IconButton, Colors } from 'react-native-paper';
import { useSelector,useDispatch } from "react-redux";
import { ListItem } from 'react-native-elements';
import { deleteAlarm } from '../slices/AlarmSlice'; 
import ReactNativeAN from 'react-native-alarm-notification';
import  Moment  from 'moment';
import { useEffect } from 'react';

const ListarAlarmas = ({navigation}) => {
  const dispatch = useDispatch()
  
  const {alarmas} = useSelector(state => state.AlarmState)

  const deleteValue  = async (nombre,id) =>  {
    const alarmassinborrar = await ReactNativeAN.getScheduledAlarms();
    Alert.alert("Eliminar Alarma",
    "¿desea eliminar la alarma?",
    [{text: "confirmar",onPress: ()=>{
      
      ReactNativeAN.removeAllFiredNotifications();
      alarmassinborrar.map((alarmaparaborrar) => {
        if(alarmaparaborrar.title===nombre){
            ReactNativeAN.deleteAlarm(alarmaparaborrar.id)
        }
      })
      ReactNativeAN.deleteAlarm(parseInt(id));
      ReactNativeAN.stopAlarmSound();
      dispatch(deleteAlarm(nombre))}},{text:"cancelar"}])
    }
    useEffect(() => {
      ReactNativeAN.removeAllFiredNotifications()
    })
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Alarmas</Text>
      {
        alarmas.map((alarma,i) => (
        <ListItem
          key={i}>
          <ListItem.Content>
            <ListItem.Title>{alarma.nombre}</ListItem.Title>
            <ListItem.Subtitle>{alarma.id}</ListItem.Subtitle>
            <ListItem.Subtitle>{Moment(alarma.date).format('D/M/YY')}</ListItem.Subtitle>
            <ListItem.Subtitle>{Moment(alarma.time).format('hh:mm A')}</ListItem.Subtitle>
          </ListItem.Content>
          <View style={styles.botones}>
            <IconButton
            icon='pencil'
            color={Colors.blue500}
            size={20}
            onPress={()=> navigation.navigate('RegistrarAlarma',{id:alarma.id})}
            />
            <IconButton
            icon='delete'
            color={Colors.blue500}
            size={20}
            onPress={() => {deleteValue(alarma.nombre,alarma.id)}}
            />
            </View>
          </ListItem>
        ))  
      }
      <IconButton
        style={styles.IconButton}
        icon='plus'
        color={Colors.blue500}
        size={50}
        onPress={()=> navigation.navigate('RegistrarAlarma')}
        />
        
    </ScrollView>
  )
}

export default ListarAlarmas

const styles = StyleSheet.create({
    container:{
        alignContent:'center',
    },
    title:{
        alignSelf:'center',
        fontSize: 50,
        fontWeight: 'bold'
    },
    IconButton:{
        alignSelf:'flex-end',
        alignSelf:'center',
        marginTop:100
    },
    botones:{
    display:'flex',
    alignItems:'baseline',
    justifyContent:'space-around',
    flexDirection:'row'
  }
})