import { StyleSheet, Text, View,Alert} from 'react-native'
import React,{useEffect, useState} from 'react'
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import { useDispatch,useSelector } from "react-redux";
import { addAlarm,editAlarm } from '../slices/AlarmSlice'; 
import { IconButton,Button } from 'react-native-paper';
import StyleTextImput from '../components/StyledTextInput'; 
import  Moment  from 'moment';
import ReactNativeAN from 'react-native-alarm-notification';

const RegistrarAlarma = ({route,navigation}) => {
  const currentTime = new Date()
  const idalarmavieja = route.params
  const {alarmas} = useSelector(state => state.AlarmState)
  const [id,setid] = useState()
  const [firedate,setFiredate] = useState()
  const [tiempo,setTiempo] = useState()
  const [fecha,setFecha] = useState()
  const dispatch = useDispatch()
  const [nombre,setnombre] = useState()
  const [mode,setMode] = useState()
  const [date,setDate] = useState()
  const [time,setTime] = useState()
  const [mostrarfecha,setmostrarfecha] = useState()
  const [mostrarhora,setmostrarhora] = useState()
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const showDatePicker = (mode) => {
    if (mode=='date'){
      setMode('date')
      setDatePickerVisibility(true);
    } else if (mode=='time'){
      setMode('time')
      setDatePickerVisibility(true);
    }
  };

  const hideDatePicker = () => {
        setDatePickerVisibility(false);
  };

  const handleConfirm = (datetime) => {

        if (mode==='date'){
          setFecha(new Date(datetime))
          setmostrarfecha(Moment(datetime).format('D/M/YY'))
          setDate(datetime)
        } else if (mode==='time'){
          setTiempo(new Date(datetime))
          setTime(datetime)
          setmostrarhora( Moment(datetime).format('hh:mm A'))
        }  
        hideDatePicker();      
  };
  const makeid = () => {
    if(idalarmavieja){
      return parseInt(idalarmavieja.id)
    } else {
      var length = 5;
      var result = '';
      var characters = '0123456789';
      var charactersLength = characters.length;
      for (var i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      }
      return result;
      }
    
  };
  const alarma = {
      id:makeid(),
      nombre: nombre,
      date: date,
      time:time
  }
   const updateValue  = () =>  { 
    if (idalarmavieja){
      if(!nombre){
        Alert.alert('Por favor ingrese un nombre para la alarma')
        return
      }else if(!date){
        Alert.alert('Por favor ingrese una fecha para la alarma')
        return
      }else if(!time){
        Alert.alert('Por favor ingrese una hora para la alarma')
        return
      }
      setFiredate(new Date(fecha.setHours(tiempo.getHours(),tiempo.getMinutes())))
      const fireDate = ReactNativeAN.parseDate(new Date(firedate));
      const alarmNotifData = {
        title: nombre,
        message: "Recordatorio",
        channel: "my_channel_id",
        small_icon: "ic_launcher",
      };
      ReactNativeAN.removeAllFiredNotifications();
      ReactNativeAN.scheduleAlarm({ ...alarmNotifData, fire_date: fireDate });
      dispatch(
        editAlarm(alarma)
      )
      Alert.alert("Alarma Editada con exito","",[{text: "Aceptar",onPress:() => navigation.navigate('ListarAlarmas')}])
    } else {
      if(!nombre){
        Alert.alert('Por favor ingrese un nombre para la alarma')
        return
      }else if(!date){
        Alert.alert('Por favor ingrese una fecha para la alarma')
        return
      }else if(!time){
        Alert.alert('Por favor ingrese una hora para la alarma')
        return
      }
      setFiredate(new Date(fecha.setHours(tiempo.getHours(),tiempo.getMinutes())))
      const fireDate = ReactNativeAN.parseDate(new Date(firedate));

      const alarmNotifData = {
        title: nombre,
        message: "Recordatorio",
        channel: "my_channel_id",
        small_icon: "ic_launcher",
      };
      ReactNativeAN.removeAllFiredNotifications();
      ReactNativeAN.scheduleAlarm({ ...alarmNotifData, fire_date: fireDate });
      dispatch(
        addAlarm(alarma)
      )
      Alert.alert("Alarma Registrada con exito","",[{text: "Aceptar",onPress:() => navigation.navigate('ListarAlarmas')}])
    }   
    }
    useEffect(()=>{
      if(idalarmavieja){
        const alarmavieja = alarmas.find(alarma => alarma.id === idalarmavieja.id)
        setmostrarfecha(Moment(alarmavieja.date).format('D/M/YY'))
        setmostrarhora(Moment(alarmavieja.time).format('hh:mm A'))
        setnombre(alarmavieja.nombre)
        setDate(alarma.date)
        setTime(alarma.time)
      }
    },[])
  
  return (
    <View style={styles.container}>
      <StyleTextImput 
      style={styles.textinput} 
      placeholder='Nombre de la Alarma'
      onChangeText={(text) => setnombre(text)}
      value={nombre}
      />
      <View style={styles.botones}>
      <IconButton icon={'calendar'} onPress={()=>{showDatePicker('date')}} />
      <Text>{mostrarfecha}</Text>
      <IconButton icon={'clock'} onPress={()=>{showDatePicker('time')}} />
      <Text>{mostrarhora}</Text>
      </View >
      <DateTimePickerModal
          minimumDate={currentTime}
          isVisible={isDatePickerVisible}
          mode={mode}
          onConfirm={handleConfirm}
          onCancel={hideDatePicker}
        />
      <Button style={styles.button} mode='contained' onPress={updateValue} color='#1A9DF8' uppercase={false}>
        Agregar Alarma
      </Button>
    </View>
  )
}

export default RegistrarAlarma

const styles = StyleSheet.create({
  container:{
    display:'flex',
    alignContent:'center',
    justifyContent:'center',
    alignItems:'center',
  },
  textinput:{
    marginTop:50,
    borderRadius:20,
    fontSize:20,
    margin:50
  },
  button:{
    fontWeight:'bold',
    fontSize:20,
    alignItems:'flex-end',
    borderRadius:20,
    marginTop:60
  },
  botones:{
    display:'flex',
    alignItems:'baseline',
    justifyContent:'space-around',
    flexDirection:'row'
  }
})