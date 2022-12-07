import React, { Component, useState } from 'react';
import 'react-native-gesture-handler';
import { StyleSheet, Text, View, TextInput, SafeAreaView, Alert, Button, TouchableOpacity, FlatList} from 'react-native';
import { Stack, FAB, HStack, VStack, Box} from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { DataTable, IconButton,Colors } from 'react-native-paper';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

import { useSelector,useDispatch } from 'react-redux';
import Swiper from 'react-native-swiper';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import { selectSemestre,setSemestre } from '../slices/Semestre';


            

const Horario = ({ navigation }) => {
    const dispatch = useDispatch()
    const disminuir = () => {
        if (semestre>=2){
            dispatch(
                setSemestre({semestre: semestre-1})
            )
        }
        
    }
    const aumentar = () => {
        dispatch(
            setSemestre({semestre: semestre+1})
        )
    }
    
    const [Lunes,setLunes] = useState(1)
    const [Martes,setMartes] = useState(1)
    const [Miercoles,setMiercoles] = useState(1)
    const [Jueves,setJueves] = useState(1)
    const [Viernes,setViernes] = useState(1)
    const [Sabado,setSabado] = useState(1)
    const {clases} = useSelector(state => state.ClassState)
    const claseslunes = []
    const clasesmartes = []
    const clasesmiercoles = []
    const clasesjueves = []
    const clasesviernes = []
    const clasessabado = []
    const [primera,setprimera] = useState(true)
    const BuscarClases = () =>{
        
    }

const [Horario,setHorario] = useState({
    lunes: [],
    martes: [],
    miercoles: [],
    jueves: [],
    viernes: [],
    sabado: [],
})








    const [Class,setClass] = useState([
       {

       }
    ])
    const HandleAddClass = (nameClass,LHoraI,LHoraF) => {
        const Classs = {
            nameClass,
            LHoraI,
            LHoraF
        }
        Class.push(Classs)
    }
    const [ClassM,setClassM] = useState([
        {
             
        }
     ])
     const HandleAddClassM = (nameClass,LHoraI,LHoraF) => {
        const Classs = {
            nameClass,
            LHoraI,
            LHoraF
        }
        ClassM.push(Classs)
    }
     const [ClassMI,setClassMI] = useState([
        {
             
        }
     ])
     const HandleAddClassMI = (nameClass,LHoraI,LHoraF) => {
        const Classs = {
            nameClass,
            LHoraI,
            LHoraF
        }
        Class.push(Classs)
    }
     const [ClassJ,setClassJ] = useState([
        {
             
        }
     ])
     const HandleAddClassJ = (nameClass,LHoraI,LHoraF) => {
        const Classs = {
            nameClass,
            LHoraI,
            LHoraF
        }
        Class.push(Classs)
    }
     const [ClassV,setClassV] = useState([
        {
             
        }
     ])
     const HandleAddClassV = (nameClass,LHoraI,LHoraF) => {
        const Classs = {
            nameClass,
            LHoraI,
            LHoraF
        }
        Class.push(Classs)
    }
     const [ClassS,setClassS] = useState([
        {
             
        }
     ])
     const HandleAddClassS = (nameClass,LHoraI,LHoraF) => {
        const Classs = {
            nameClass,
            LHoraI,
            LHoraF
        }
        Class.push(Classs)
    }
    






   
    /*if (hola == 1 && Lunes == 1) {
        const [primero,setprimero] = useState([]) ;
        const [segundo,setsegundo] = useState([]) ;
    const [tercero,settercero] = useState([]) ;
    
        
    const q = query(collection(db, "Users","JhoyLuis","Semestre 1"), where("LHoraI", "!=", ""),orderBy("LHoraI", "desc"));

    const querySnapshot = await getDocs(q);
    querySnapshot.forEach(async (doc) =>  {
    // doc.data() is never undefined for query doc snapshots
     primero.push(doc.data().nameClass)
    
    segundo.push(doc.data().LHoraI)
    
    tercero.push(doc.data().LHoraF)
    setLunes(0)
    
    
   
   
    
    });
    for (let index = 0; index < (tercero.length); index++) {
        HandleAddClass(primero[index],segundo[index],tercero[index])
        
    }
    } */ 


      
  
    var tamaño = 0
    const semestre = useSelector(selectSemestre)
    const CrearHorario = () => {
        
        
        const RecuperarHorario = async() => {
            
             
                
                switch (hola) {
                    case 1:
                        clases.map((clase) => {
                            console.log(clase)
                            if(clase.LHoraI != "" && semestre == (clase.semestre)){
                        
                                const pruebalunes = {
                                    id:clase.id,
                                    nameClass:clase.nameClass,
                                    LHoraI:clase.LHoraI,
                                    LHoraF:clase.LHoraF
                                }
                               claseslunes.push(pruebalunes)
                               console.log(claseslunes)
                            }
                        })
                        
                        break;
                    case 2:
                        clases.map((clase) => {
                            if(clase.MHoraI != "" && semestre == parseInt(clase.semestre)){
                                const pruebalunes = {
                                    id:clase.id,
                                    nameClass:clase.nameClass,
                                    MHoraI:clase.MHoraI,
                                    MHoraF:clase.MHoraF
                                }
                               clasesmartes.push(pruebalunes)
                               console.log(clasesmartes)
            
                            }
                        })
                        
                         break;
                    case 3:
                        clases.map((clase) => {
                            if(clase.MIHoraI != "" && semestre == parseInt(clase.semestre)){
                                const pruebalunes = {
                                    id:clase.id,
                                    nameClass:clase.nameClass,
                                    MIHoraI:clase.MIHoraI,
                                    MIHoraF:clase.MIHoraF
                                }
                               clasesmiercoles.push(pruebalunes)
                               console.log(clasesmiercoles)
            
                            }
                        })
                        
                        break;
                    case 4:
                        clases.map((clase) => {
                            if(clase.JHoraI != "" && semestre == parseInt(clase.semestre)){
                                const pruebalunes = {
                                    id:clase.id,
                                    nameClass:clase.nameClass,
                                    JHoraI:clase.JHoraI,
                                    JHoraF:clase.JHoraF
                                }
                               clasesjueves.push(pruebalunes)
                               console.log(clasesjueves)
            
                            }
                        })
                        
                        break;
                    case 5:
                        clases.map((clase) => {
                            if(clase.VHoraI != "" && semestre == parseInt(clase.semestre)){
                                const pruebalunes = {
                                    id:clase.id,
                                    nameClass:clase.nameClass,
                                    VHoraI:clase.VHoraI,
                                    VHoraF:clase.VHoraF
                                }
                               clasesviernes.push(pruebalunes)
                               console.log(clasesviernes)
            
                            }
                        })
                        
                        break;
                    case 6:
                        clases.map((clase) => {
                            if(clase.SHoraI != "" && semestre == parseInt(clase.semestre)){
                                const pruebalunes = {
                                    id:clase.id,
                                    nameClass:clase.nameClass,
                                    SHoraI:clase.SHoraI,
                                    SHoraF:clase.SHoraF
                                }
                               clasessabado.push(pruebalunes)
                               console.log(clasessabado)
             
                            }
                        })
                        
                        break;
                
                    default:
                        break;
                }
                
                
               
               
            
        }
    
    
    
    
        
            const xmas95 = new Date();
            const weekday = xmas95.getDay();
            var hola = weekday;
            const Contador = () => {
                hola++;
                console.log(hola)
            }
            const NContador = () => {
                console.log(hola)
                hola = 1;
                console.log(hola)
            }
                
            const Organizar = () => {
                    if (hola == 1 ) {
                        
                       
                        {RecuperarHorario()}
                        {Contador()}
                        
                        return <View>
                            <Box style={styles.box}>
                            <Text style={styles.sTitulo} >Lunes</Text>
                            <DataTable>
                                <DataTable.Header>
                                    <DataTable.Title>Clase</DataTable.Title>
                                    <DataTable.Title>Hora</DataTable.Title>
                                </DataTable.Header>
                                <SafeAreaView style={{ height:hp('50%'), borderBottomLeftRadius: 30, borderBottomRightRadius: 30}} >
                            <FlatList
                                data={claseslunes}
                                keyExtractor={(item) => item.nameClass}
                                renderItem={({item}) => 
                                
                                <Pressable onPress={() => navigation.navigate('VistaClase',{id:item.id})}>
                                <DataTable.Row>
                                <DataTable.Cell > {item.nameClass} </DataTable.Cell>
                                <DataTable.Cell>{item.LHoraI} - {item.LHoraF}</DataTable.Cell>
                                </DataTable.Row>
                                </Pressable>
                                
                                }
                            />
                            </SafeAreaView>
                            </DataTable>
                            </Box>
                            
                            
                        </View>
                    }
    
                    if (hola == 2) {
                        {RecuperarHorario()}
                        {Contador()}
                        return <View >
                            <Box style={styles.box}>
                            <Text style={styles.sTitulo} >Martes</Text>
                            <DataTable>
                                <DataTable.Header>
                                    <DataTable.Title>Clase</DataTable.Title>
                                    <DataTable.Title>Hora</DataTable.Title>
                                </DataTable.Header>
                                <SafeAreaView style={{ height:hp('50%'), borderBottomLeftRadius: 30, borderBottomRightRadius: 30}} > 
                            <FlatList
                                data={clasesmartes}
                                keyExtractor={(item) => item.nameClass}
                                renderItem={({item}) => 
                                
                                
                                <Pressable onPress={() => navigation.navigate('VistaClase',{id:item.id})}>
                                    <DataTable.Row>
                                   <DataTable.Cell > {item.nameClass} </DataTable.Cell>
                                    <DataTable.Cell>{item.MHoraI} - {item.MHoraF}</DataTable.Cell>
                                </DataTable.Row>
                                </Pressable>
                                
                                }
                            />
                            </SafeAreaView>
                            </DataTable>
                            </Box>
                            
                        </View>
                    }
    
                    if (hola == 3) {
                        {RecuperarHorario()}
                        {Contador()}
                        
                        return <View>
                            <Box style={styles.box}>
                            <Text style={styles.sTitulo} >Miercoles</Text>
                            <DataTable>
                                <DataTable.Header>
                                    <DataTable.Title>Clase</DataTable.Title>
                                    <DataTable.Title>Hora</DataTable.Title>
                                </DataTable.Header>
                                <SafeAreaView style={{ height:hp('50%'), borderBottomLeftRadius: 30, borderBottomRightRadius: 30}} >
                            <FlatList
                                data={clasesmiercoles}
                                keyExtractor={(item) => item.nameClass}
                                renderItem={({item}) => 
                                
                                <Pressable onPress={() => navigation.navigate('VistaClase',{id:item.id})}>
                                    <DataTable.Row>
                                   <DataTable.Cell > {item.nameClass} </DataTable.Cell>
                                    <DataTable.Cell>{item.MIHoraI} - {item.MIHoraF}</DataTable.Cell>
                                </DataTable.Row>
                                </Pressable>
                                    
                                
                                }
                            />
                            </SafeAreaView>
                            </DataTable>
                            </Box>
                            
                        </View>
                    }
    
                    if (hola == 4) {
                        {RecuperarHorario()}
                        {Contador()}
                        return <View>
                            <Box style={styles.box}>
                            <Text style={styles.sTitulo} >Jueves</Text>
                            
                            <DataTable>
                                <DataTable.Header>
                                    <DataTable.Title>Clase</DataTable.Title>
                                    <DataTable.Title>Hora</DataTable.Title>
                                </DataTable.Header>
                                <SafeAreaView style={{ height:hp('50%'), borderBottomLeftRadius: 30, borderBottomRightRadius: 30}} > 
                            <FlatList
                                data={clasesjueves}
                                keyExtractor={(item) => item.nameClass}
                                renderItem={({item}) => 
                                
                                <Pressable onPress={() => navigation.navigate('VistaClase',{id:item.id})}>
                                    <DataTable.Row>
                                   <DataTable.Cell > {item.nameClass} </DataTable.Cell>
                                    <DataTable.Cell>{item.JHoraI} - {item.JHoraF}</DataTable.Cell>
                                </DataTable.Row>
                                </Pressable>
                                    
                                
                                }
                            />
                            </SafeAreaView>
                            </DataTable>
                            </Box>
                        </View>
                    }
    
                    if (hola == 5) {
                        {RecuperarHorario()}
                        
                        {Contador()}
                        return <View>
                            <Box style={styles.box}>
                            <Text style={styles.sTitulo} >Viernes</Text>
                            
                            <DataTable>
                                <DataTable.Header>
                                    <DataTable.Title>Clase</DataTable.Title>
                                    <DataTable.Title>Hora</DataTable.Title>
                                </DataTable.Header>
                                <SafeAreaView style={{ height:hp('50%'), borderBottomLeftRadius: 30, borderBottomRightRadius: 30}} > 
                            <FlatList
                                data={clasesviernes}
                                keyExtractor={(item) => item.nameClass}
                                renderItem={({item}) => 
                                
                                <Pressable onPress={() => navigation.navigate('VistaClase',{id:item.id})}>
                                    <DataTable.Row>
                                   <DataTable.Cell > {item.nameClass} </DataTable.Cell>
                                    <DataTable.Cell>{item.VHoraI} - {item.VHoraF}</DataTable.Cell>
                                </DataTable.Row>
                                </Pressable>
                                    
                                
                                }
                            />
                            </SafeAreaView>
                            </DataTable>
                            </Box>
                            
                        </View>
                    }
    
                    if (hola == 6) {
                        {RecuperarHorario()}
                        {NContador()}
    
                        return <View>
                            <Box style={styles.box}>
                            <Text style={styles.sTitulo} >Sabado</Text>
                            
                            <DataTable>
                                <DataTable.Header>
                                    <DataTable.Title>Clase</DataTable.Title>
                                    <DataTable.Title>Hora</DataTable.Title>
                                </DataTable.Header>
                                <SafeAreaView style={{ height:hp('50%'), borderBottomLeftRadius: 30, borderBottomRightRadius: 30}} >
                            <FlatList
                                data={clasessabado}
                                keyExtractor={(item) => item.nameClass}
                                renderItem={({item}) => 
                                
                                <Pressable onPress={() => navigation.navigate('VistaClase',{id:item.id})}>
                                    <DataTable.Row>
                                   <DataTable.Cell > {item.nameClass} </DataTable.Cell>
                                    <DataTable.Cell>{item.SHoraI} - {item.SHoraF}</DataTable.Cell>
                                </DataTable.Row>
                                </Pressable>
                                    
                                
                                }
                            />
                            </SafeAreaView>
                            </DataTable>
                            
                            </Box>
                        </View>
                    }

                    if (hola == 0) {
                        {NContador()}
                        {RecuperarHorario()}
                        {Contador()}
                        
                        return <View>
                            <Box style={styles.box}>
                            <Text style={styles.sTitulo} >Lunes</Text>
                            <DataTable>
                                <DataTable.Header>
                                    <DataTable.Title>Clase</DataTable.Title>
                                    <DataTable.Title>Hora</DataTable.Title>
                                </DataTable.Header>
                                <SafeAreaView style={{ height:hp('50%'), borderBottomLeftRadius: 30, borderBottomRightRadius: 30}} >    
                            <FlatList
                                data={claseslunes}
                                keyExtractor={(item) => item.nameClass}
                                renderItem={({item}) => 
                                
                                <Pressable onPress={() => navigation.navigate('VistaClase',{id:item.id})}>
                                <DataTable.Row>
                                <DataTable.Cell > {item.nameClass} </DataTable.Cell>
                                <DataTable.Cell>{item.LHoraI} - {item.LHoraF}</DataTable.Cell>
                                </DataTable.Row>
                                </Pressable>
                                
                                }
                            />
                            </SafeAreaView>
                            </DataTable>
                            </Box>
                            
                            
                        </View>
                        
                    }
    
                    
                    
        
                    
                
            }
            return(
                <Swiper showsPagination={false} loop={false}>

                    <Organizar />
                    <Organizar />
                    <Organizar />
                    <Organizar />
                    <Organizar />
                    <Organizar />

                </Swiper>
            )
    }
    
        
   return(
    
    <><View>
           
           <Text style = {styles.Tiitulo}>Horario</Text>
           
           <View style={styles.botones}>
           <IconButton
            icon='plus'
            color={Colors.blue500}
            size={20}
            onPress={()=> {aumentar()}}
            />
            <Text>Semestre Actual {semestre}</Text>
            <IconButton
            icon='minus'
            color={Colors.blue500}
            size={20}
            onPress={() => {disminuir()}}
            />
           </View>
       </View><CrearHorario /><View>
            <HStack  style = {styles.Butonf} center spacing={4}>
                                <FAB 
                                color='#4a90e2'
                                onPress={() => 
                                navigation.navigate('RegistrarClase')}
                                icon={props => <Icon name="plus" {...props} color = 'white'  />} />
                                <View style={{ backgroundColor: "blue", flex: 0.3 }} />
                                <FAB
                                color='#4a90e2'
                                onPress={() => navigation.navigate('ListarAlarmas')}
                                icon={props => <Icon name="bell" {...props} color = 'white'  />} 
                                />
                            
                        </HStack>
       </View></>
        
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
        textAlign: 'center',
        fontSize: hp('5.6%'),
        marginTop: hp('5%'),
        marginBottom: hp('6.5%'),
        alignContent: 'center',
        justifyContent: 'center',

      },
    Butonf:{
        
        marginBottom: hp('4%'),
        height: hp('10%'),
         color: "#2196F3",
         tintColor: "#2196F3",
        
    },
    sTitulo:{
        fontSize: hp('4%'),
        textAlign: 'center',
        color: 'white',
        backgroundColor: '#2196F3',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        
    },
    box:{
        borderWidth: 1,
        borderTopColor: '#abb1ae',
        borderEndColor: '#abb1ae',
        borderStartColor: '#abb1ae',
        borderBottomColor: '#abb1ae',
        height: hp('61.5%'),
        width: wp('90%'),
        borderRadius: 30,
        alignSelf: 'center',
      },
      botones:{
      display:'flex',
      alignItems:'baseline',
      justifyContent:'space-around',
      flexDirection:'row'
    }
  });

  export default Horario