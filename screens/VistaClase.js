
import React, {  useEffect, useState } from 'react';
import 'react-native-gesture-handler';
import { StyleSheet, Text, View, Alert, FlatList, Pressable} from 'react-native';
import { deleteClass } from '../slices/ClassSlice';
import { deletenotas, editNotasFinales, notafinal } from '../slices/notasfinales';
import { useSelector,useDispatch } from "react-redux";
import { DataTable } from 'react-native-paper';
import { Box, HStack } from '@react-native-material/core';
import Swiper from 'react-native-swiper';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { IconButton,Colors } from 'react-native-paper';
import { deleteNot } from '../slices/NotSlice';

const VistaClase = ({route,navigation}) => {
    const dispatch = useDispatch()
    const {clases} = useSelector(state => state.ClassState)
    const idclase = route.params 
    const {notas} = useSelector(state => state.NotState)
    const {notasfinales} = useSelector(state =>state.NotasFinalesState)

    const deleteValue  = async () =>  {
      clases.map((clase) => {
        if (clase.id === idclase.id){
          const nombreparaeliminar = clase.nameClass
          Alert.alert("Eliminar Clase",
          "¿desea eliminar la clase?",
        [{text: "confirmar",onPress: ()=>
        {dispatch(deleteClass(nombreparaeliminar))
        Alert.alert("Clase eliminada","Clase Eliminada con exito",[{text: "Aceptar" 
      , onPress:() => navigation.navigate('Horario')}])}},
        {text:"cancelar"}])
        }
      })
      
      }

      const deleteNota  = async (nombre) =>  {
        Alert.alert("Eliminar Nota",
        "¿desea eliminar la nota?",
        [{text: "confirmar",onPress: ()=>{
          dispatch(deleteNot(nombre))}},{text:"cancelar"}])
        }

      const [nombre, setnombre] = useState("")
      const [nombrepro, setnombrepro] = useState("")

      useEffect(() => {
          clases.map((clase) => {
            if(idclase.id == clase.id){  
              setnombre(clase.nameClass)
              setnombrepro(clase.profesor)      
            }
          }) 
      })
      
      const guardarnotasprimercorte = []
      const guardarnotassegundocorte = []
      const guardarnotastercercorte = []
      
      const Llenarprimer = () => {
        notas.map((nota) => {
          if(nota.corte === "1" && nota.clase.id === idclase.id){
            nostasprimero = {
              id:nota.id,
              nota:nota.nota,
              porcentaje:nota.porcentaje,
              nombre:nota.nombre,
              corte:nota.corte
            }
            guardarnotasprimercorte.push(nostasprimero)
          }
        })
      }
      const Llenarsegundo = () => {
        notas.map((nota) => {
          if(nota.corte === "2" && nota.clase.id === idclase.id){
            notassegundo = {
              id:nota.id,
              nota:nota.nota,
              porcentaje:nota.porcentaje,
              nombre:nota.nombre,
              corte:nota.corte
            }
            guardarnotassegundocorte.push(notassegundo)
          }
        })
      }
      const Llenartercer = () => {
        notas.map((nota) => {
          if(nota.corte === "3" && nota.clase.id === idclase.id){
            notastercer = {
              id:nota.id,
              nota:nota.nota,
              porcentaje:nota.porcentaje,
              nombre:nota.nombre,
              corte:nota.corte
            }
            guardarnotastercercorte.push(notastercer)
          }
        })
      }
      
      const [NotaFinal,setnotafinal] = useState()
      
      const Calcular = () => {
        
        calculonotafinal = 0
        guardarnotasprimercorte.map((nota) =>{
          calculonotafinal = parseFloat(calculonotafinal) + parseFloat(nota.nota)*(parseFloat(nota.porcentaje)/100)*parseFloat(0.3) 
        })
        guardarnotassegundocorte.map((nota) =>{
          calculonotafinal = parseFloat(calculonotafinal) + parseFloat(nota.nota)*(parseFloat(nota.porcentaje)/100)*parseFloat(0.3)
        })
        guardarnotastercercorte.map((nota) =>{
          calculonotafinal = parseFloat(calculonotafinal) + parseFloat(nota.nota)*(parseFloat(nota.porcentaje)/100)*parseFloat(0.3)
        })
        setnotafinal(calculonotafinal)        
      }
      useEffect(()=>{
        notasfinales.map((nota) => {
          deletenotas(nota.idclase)
        })
      })
    return(
      <View style={styles.container}>
      <Llenarprimer/>
      <Llenarsegundo/>
      <Llenartercer/>
      <Text style={styles.Tiitulo}>{nombre}</Text>
     <Text style={styles.sTitulo}>Profesor {nombrepro}</Text>
      <Pressable onPress={() => {Calcular()}}>
      <Text style={styles.Tiitulo}>Nota Final = {NotaFinal}</Text>
      </Pressable>
      <Swiper showsPagination={false} loop={false}>
      <Box style={styles.box}>
      <Text style={styles.corte}>Corte 1</Text>
      <DataTable>
            <DataTable.Header>
            <DataTable.Title>Porcentaje</DataTable.Title>
            <DataTable.Title>Nombre</DataTable.Title>
            <DataTable.Title>Nota</DataTable.Title>
            <DataTable.Title>Opciones</DataTable.Title>
           </DataTable.Header>
           
           
            <FlatList
            data={guardarnotasprimercorte}
            keyExtractor={(item) => item.id}
            renderItem={({item}) => 
            <DataTable.Row>
                  <DataTable.Cell>{item.porcentaje} </DataTable.Cell>
                  <DataTable.Cell>{item.nombre}</DataTable.Cell>
                  <DataTable.Cell>{item.nota}</DataTable.Cell>
                  <DataTable.Cell>
                  <IconButton
                   icon='pencil'
                   color={Colors.blue500}
                   size={20}
                   onPress={()=> navigation.navigate('RegistrarNota',{idclase:idclase,item:item})}
                   />
                   <IconButton
                   icon='delete'
                   color={Colors.blue500}
                   size={20}
                   onPress={() => {deleteNota(item.nombre)}}
                   />
                  </DataTable.Cell>    
                  </DataTable.Row>
            }
            />   
            </DataTable>
                          
      </Box>
      <Box style={styles.box}>
      <Text style={styles.corte}>Corte 2</Text>
      <DataTable>
            <DataTable.Header>
            <DataTable.Title>Porcentaje</DataTable.Title>
            <DataTable.Title>Nombre</DataTable.Title>
            <DataTable.Title>Nota</DataTable.Title>
            <DataTable.Title>Opciones</DataTable.Title>
           </DataTable.Header>
           
           
            <FlatList
            data={guardarnotassegundocorte}
            keyExtractor={(item) => item.id}
            renderItem={({item}) => 
            <DataTable.Row>
                  <DataTable.Cell>{item.porcentaje} </DataTable.Cell>
                  <DataTable.Cell>{item.nombre}</DataTable.Cell>
                  <DataTable.Cell>{item.nota}</DataTable.Cell>
                  <DataTable.Cell>
                  <IconButton
                   icon='pencil'
                   color={Colors.blue500}
                   size={20}
                   onPress={()=> navigation.navigate('RegistrarNota',{idclase:idclase,item:item})}
                   />
                   <IconButton
                   icon='delete'
                   color={Colors.blue500}
                   size={20}
                   onPress={() => {deleteNota(item.nombre)}}
                   />
                  </DataTable.Cell>    
                  </DataTable.Row>
            }
            />   
            </DataTable>
                          
      </Box>
      <Box style={styles.box}>
      <Text style={styles.corte}>Corte 3</Text>
      <DataTable>
            <DataTable.Header>
            <DataTable.Title>Porcentaje</DataTable.Title>
            <DataTable.Title>Nombre</DataTable.Title>
            <DataTable.Title>Nota</DataTable.Title>
            <DataTable.Title>Opciones</DataTable.Title>
           </DataTable.Header>
           
           
            <FlatList
            data={guardarnotastercercorte}
            keyExtractor={(item) => item.id}
            renderItem={({item}) => 
            <DataTable.Row>
                  <DataTable.Cell>{item.porcentaje} </DataTable.Cell>
                  <DataTable.Cell>{item.nombre}</DataTable.Cell>
                  <DataTable.Cell>{item.nota}</DataTable.Cell>
                  <DataTable.Cell>
                  <IconButton
                   icon='pencil'
                   color={Colors.blue500}
                   size={20}
                   onPress={()=> navigation.navigate('RegistrarNota',{idclase:idclase,item:item})}
                   />
                   <IconButton
                   icon='delete'
                   color={Colors.blue500}
                   size={20}
                   onPress={() => {deleteNota(item.nombre)}}
                   />
                  </DataTable.Cell>    
                  </DataTable.Row>
            }
            />   
            </DataTable>
                          
      </Box>
      </Swiper>
      <HStack  style = {styles.Butonf} center spacing={4}>
            <IconButton
            icon='plus'
            style={styles.Butonf1}
            color={Colors.white}
            size={wp('8%')}
            onPress={()=> {navigation.navigate('RegistrarNota',{idclase:idclase})}}
            />
            <View style={{ backgroundColor: "blue", flex: 0.3 }} />
            <IconButton
            icon='pencil'
            style={styles.Butonf1}
            color={Colors.white}
            size={wp('8%')}
            onPress={()=> {navigation.navigate('RegistrarClase',{id:idclase})}}
            />
            <View style={{ backgroundColor: "blue", flex: 0.3 }} />
            <IconButton
            icon='delete'
            style={styles.Butonf1}
            color={Colors.white}
            size={wp('8%')}
            onPress={() => {deleteValue()}}
            />                          
    </HStack>
    </View>

      
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#FFF',
      alignItems: 'center',
      justifyContent: 'center',
      
    },
    Tiitulo:{
      alignItems: 'center',
      marginTop: hp('1%'),
      fontSize: hp('5%'),
      justifyContent: 'center',

      },
      Nota:{
        fontSize: 10,
        marginTop: 300,
        position: 'absolute'
      },
    Butonf:{
      marginTop: hp('4%'),
      marginBottom: hp('5%'),
       color: "#2196F3",
        
        
    },
    sTitulo:{
      fontSize: hp('3%'),
      textAlign: 'center',
      marginBottom: hp('7%')
        
    },
  Butonf1:{
    color: "white",
    backgroundColor: '#2196F3'
    
    
},
    box:{
      borderWidth: 1,
      borderTopColor: '#abb1ae',
      borderEndColor: '#abb1ae',
      borderStartColor: '#abb1ae',
      borderBottomColor: '#abb1ae',
      marginStart: wp('5%'),
      height: hp('60%'),
      width: wp('90%'),
    borderRadius: 30
    },
    botones:{
      display:'flex',
      alignItems:'baseline',
      justifyContent:'space-around',
      flexDirection:'row'
    },
    corte: {
      
      textAlign: 'center',
      fontSize: wp('6%'),
      color: 'white',
        backgroundColor: '#2196F3',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    }
  });

export default VistaClase