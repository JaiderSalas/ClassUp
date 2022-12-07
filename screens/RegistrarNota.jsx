import React,{useState,useEffect} from 'react';
import { Button, View ,StyleSheet,Alert,Text} from 'react-native';
import StyleTextImput from '../components/StyledTextInput';
import {useDispatch,useSelector} from 'react-redux';
import { addANot,editNot } from '../slices/NotSlice';
import { CommonActions } from '@react-navigation/native';


const RegistrarNota = ({route,navigation}) => {
  const {idclase,item} = route.params
  const dispatch = useDispatch()
  const {clases} = useSelector(state => state.ClassState)
  const [nombreclase, setnombreclase] = useState("")
  const [nombre,setNombre] = useState()
  const [nota,setNota] = useState()
  const [corte,setCorte] = useState()
  const [porcentaje,setPorcentaje] = useState()
  const {notas} = useSelector(state => state.NotState)

  const valoresiniciales = {
    id: makeid(),
    nombre:nombre,
    nota:nota,
    clase:idclase,
    porcentaje:porcentaje,
    corte:corte  
  }

  function makeid(){
    if(item){
      return (item.id)
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

  const updateValue = () => {
    total = 0
      notas.map((nota => {
        if(nota.corte == corte){
          total = total + parseInt(nota.porcentaje)
        }
        
      }))
    if (item){
      if(!nombre){
        Alert.alert('Por favor ingrese un nombre para la nota')
        return
      }else if(!corte){
        Alert.alert('Por favor ingrese un corte para la nota')
        return
      }else if(!porcentaje){
        Alert.alert('Por favor ingrese un porcentaje para la nota')
        return
      }else if(!nota){
        Alert.alert('Por favor ingrese una nota')
        return
      }else if(corte!== "1" && corte!== "2" && corte !== "3"){
        Alert.alert('Por favor ingrese un numero de corte valido (1-3)')
        return
      }else if(nota>5 || nota<0){
        Alert.alert('Por favor ingrese una nota valida (0-5)')
        return
      }else if(porcentaje>100 || porcentaje<0){
        Alert.alert('Por favor ingrese un porcentaje valido (0-100)')
        return
      } else if(parseInt(total)+parseInt(porcentaje) > 100){
        Alert.alert('El porcentaje ingresado sobrepaso el 100% de las notas')
        return
      } else if(isNaN(parseInt(corte))===true){
        Alert.alert('Por favor ingrese un valor numerico para corte')
        return
      }
      else if(isNaN(parseInt(porcentaje))===true){
        Alert.alert('Por favor ingrese un valor numerico para porcentaje')
        return
      }
      else if(isNaN(parseInt(nota))===true){
        Alert.alert('Por favor ingrese un valor numerico para nota')
        return
      }
      else {
        dispatch(
          editNot(valoresiniciales)
        )
        Alert.alert("Nota Registrada con exito","",[{text: "Aceptar",onPress:() => navigation.dispatch(CommonActions.goBack())}])
      }
    }
    else {

      total = 0
      notas.map((nota => {
        if(nota.corte == corte){
          total = total + parseInt(nota.porcentaje)
        }
        
      }))
      
      if(!nombre){
        Alert.alert('Por favor ingrese un nombre para la nota')
        return
      }else if(!corte){
        Alert.alert('Por favor ingrese un corte para la nota')
        return
      }else if(!porcentaje){
        Alert.alert('Por favor ingrese un porcentaje para la nota')
        return
      }else if(!nota){
        Alert.alert('Por favor ingrese una nota')
        return
      }else if(corte!== "1" && corte!== "2" && corte !== "3"){
        Alert.alert('Por favor ingrese un numero de corte valido (1-3)')
        return
      }else if(nota>5 || nota<0){
        Alert.alert('Por favor ingrese una nota valida (0-5)')
        return
      }else if(porcentaje>100 || porcentaje<0){
        Alert.alert('Por favor ingrese un porcentaje valido (0-100)')
        return
      } else if(parseInt(total)+parseInt(porcentaje) > 100){
        Alert.alert('El porcentaje ingresado sobrepaso el 100% de las notas')
        return
      } else if(isNaN(parseInt(corte))===true){
        Alert.alert('Por favor ingrese un valor numerico para corte')
        return
      }
      else if(isNaN(parseInt(porcentaje))===true){
        Alert.alert('Por favor ingrese un valor numerico para porcentaje')
        return
      }
      else if(isNaN(parseInt(nota))===true){
        Alert.alert('Por favor ingrese un valor numerico para nota')
        return
      }
      else {
        dispatch(
          addANot(valoresiniciales)
        )
        Alert.alert("Nota Registrada con exito","",[{text: "Aceptar",onPress:() => navigation.dispatch(CommonActions.goBack())}])
      }
    }
}
useEffect(() => {
  clases.map((clase) => {
    if(idclase.id == clase.id){  
      setnombreclase(clase.nameClass)  
    }
  }) 
  if(item){
    setNombre(item.nombre)
    setPorcentaje(item.porcentaje)
    setCorte(item.corte)
    setNota(item.nota)
  }
   
},[])
  return(
   <View style={styles.form}>
        <Text style={styles.title}>{nombreclase}</Text>
        <StyleTextImput 
        placeholder='Nombre'
        onChangeText={(text) => setNombre(text)}
        value={nombre}
        ></StyleTextImput>
        <StyleTextImput placeholder='Nota'
        onChangeText={(text) => setNota(text)}
        value={nota}
        ></StyleTextImput>
        <StyleTextImput placeholder='Corte'
        onChangeText={(text) => setCorte(text)}
        value={corte}
        ></StyleTextImput>
        <StyleTextImput  placeholder='Porcentaje'
        onChangeText={(text) => setPorcentaje(text)}
        value={porcentaje}
        ></StyleTextImput>
        <Button onPress={() => {updateValue()}} title="Agregar Nota" />
      </View>
    )
}

export default RegistrarNota

const styles = StyleSheet.create({
  form: {
    margin: 12
  },
  title:{
    alignSelf:'center',
    fontSize: 50,
    fontWeight: 'bold'
},
})