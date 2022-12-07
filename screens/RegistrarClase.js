import { StatusBar } from 'expo-status-bar';
import React, { useState, Component , useEffect} from "react";
import 'react-native-gesture-handler';
import { StyleSheet, Text, View, TextInput, SafeAreaView, Alert, Button, TouchableOpacity, Modal, Pressable, stackLayout} from 'react-native';
import { Stack, HStack, VStack } from 'react-native-flex-layout';
import DateTimePickerModal from "react-native-modal-datetime-picker";

import { useDispatch,useSelector } from "react-redux";
import  { addClass,editClass } from '../slices/ClassSlice';
import { selectSemestre } from '../slices/Semestre';



const Registrarclase = ({route, navigation }) => {
  const dispatch = useDispatch()
  const idclasevieja = route.params
  const makeid = () => {
    if(idclasevieja){
      return idclasevieja.id.id
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

  



  const [isShowingText, setIsShowingText] = useState(false);
    const Blink = (props) => {
  
  
   useEffect(() => {
     
  },[isShowingText]);

  if (!isShowingText) {
    return null;
  }



  return <Button style={styles.ButtonDays} title={props.text} onPress={() => setIsShowingText(!isShowingText)  }/>;
}

const LBlinkI = () => {
  

  useEffect(() => {
    
 },[isShowingText]);

 if (!isShowingText) {
  setupdatetext('Inicio')
   return null;
 }
 



 return <Pressable onPress={showDatePicker} ><View pointerEvents="none"><TextInput style={styles.TextImputday}  placeholder={updatetext} /></View></Pressable>;
}



const LBlinkF = () => {
  

  useEffect(() => {
    
 },[isShowingText]);

 if (!isShowingText) {
  setupdatetextF('Final')
   return null;
 }



 return <Pressable onPress={showDatePickerF} ><View pointerEvents="none"><TextInput style={styles.TextImputday}  placeholder={updatetextF} /></View></Pressable>;
}

const [isShowingMartes, setIsShowingMartes] = useState(false);
    const BlinkM = (props) => {
  

   useEffect(() => {
     
  },[isShowingMartes]);

  if (!isShowingMartes) {
    return null;
  }

  return <Button title={props.text} onPress={() => setIsShowingMartes(!isShowingMartes)  }/>;
}

const MBlinkI = () => {
  

  useEffect(() => {
    
 },[isShowingMartes]);

 if (!isShowingMartes) {
    setupdatetextMI('Inicio')
   return null;
 }



 return <Pressable onPress={showDatePickerMI} ><View pointerEvents="none"><TextInput style={styles.TextImputday}  placeholder={updatetextMI} /></View></Pressable>;
}

const MBlinkF = () => {
  

  useEffect(() => {
    
 },[isShowingMartes]);

 if (!isShowingMartes) {
  setupdatetextMF('Final')
   return null;
 }



 return <Pressable onPress={showDatePickerMF} ><View pointerEvents="none"><TextInput style={styles.TextImputday}  placeholder={updatetextMF} /></View></Pressable>;
}

const [isShowingMiercoles, setIsShowingMiercoles] = useState(false);
    const BlinkMI = (props) => {
  

   useEffect(() => {
     
  },[isShowingMiercoles]);

  if (!isShowingMiercoles) {
    return null;
  }

  return <Button title={props.text} onPress={() => setIsShowingMiercoles(!isShowingMiercoles)  }/>;
}

const MIBlinkI = () => {
  

  useEffect(() => {
    
 },[isShowingMiercoles]);

 if (!isShowingMiercoles) {
  setupdatetextMII('Inicio')
   return null;
 }



 return <Pressable onPress={showDatePickerMII} ><View pointerEvents="none"><TextInput style={styles.TextImputday}  placeholder={updatetextMII} /></View></Pressable>;
}

const MIBlinkF = () => {
  

  useEffect(() => {
    
 },[isShowingMiercoles]);

 if (!isShowingMiercoles) {
  setupdatetextMIF('Final')
   return null;
 }



 return <Pressable onPress={showDatePickerMIF} ><View pointerEvents="none"><TextInput style={styles.TextImputday}  placeholder={updatetextMIF} /></View></Pressable>;
}

const [isShowingJueves, setIsShowingJueves] = useState(false);
    const BlinkJ = (props) => {
  

   useEffect(() => {
     
  },[isShowingJueves]);

  if (!isShowingJueves) {
    return null;
  }

  return <Button title={props.text} onPress={() => setIsShowingJueves(!isShowingJueves)  }/>;
}

const JBlinkI = () => {
  

  useEffect(() => {
    
 },[isShowingJueves]);

 if (!isShowingJueves) {
  setupdatetextJI('Inicio')
   return null;
 }



 return <Pressable onPress={showDatePickerJI} ><View pointerEvents="none"><TextInput style={styles.TextImputday}  placeholder={updatetextJI} /></View></Pressable>;
}

const JBlinkF = () => {
  

  useEffect(() => {
    
 },[isShowingJueves]);

 if (!isShowingJueves) {
  setupdatetextJF('Final')
   return null;
 }



 return <Pressable onPress={showDatePickerJF} ><View pointerEvents="none"><TextInput style={styles.TextImputday}  placeholder={updatetextJF} /></View></Pressable>;
}

const [isShowingViernes, setIsShowingViernes] = useState(false);
    const BlinkV = (props) => {
  

   useEffect(() => {
     
  },[isShowingViernes]);

  if (!isShowingViernes) {
    return null;
  }

  return <Button title={props.text} onPress={() => setIsShowingViernes(!isShowingViernes)  }/>;
}

const VBlinkI = () => {
  

  useEffect(() => {
    
 },[isShowingViernes]);

 if (!isShowingViernes) {
  setupdatetextVI('Inicio')
   return null;
 }



 return <Pressable onPress={showDatePickerVI} ><View pointerEvents="none"><TextInput style={styles.TextImputday}  placeholder={updatetextVI} /></View></Pressable>;
}

const VBlinkF = () => {
  

  useEffect(() => {
    
 },[isShowingViernes]);

 if (!isShowingViernes) {
  setupdatetextVF('Final')
   return null;
 }



 return <Pressable onPress={showDatePickerVF} ><View pointerEvents="none"><TextInput style={styles.TextImputday}  placeholder={updatetextVF} /></View></Pressable>;
}

const [isShowingSabado, setIsShowingSabado] = useState(false);
    const BlinkS = (props) => {
  

   useEffect(() => {
     
  },[isShowingSabado]);

  if (!isShowingSabado) {
    return null;
  }

  return <Button title={props.text} onPress={() => setIsShowingSabado(!isShowingSabado)  }/>;
}

const SBlinkI = () => {
  

  useEffect(() => {
    
 },[isShowingSabado]);

 if (!isShowingSabado) {
  setupdatetextSI('Inicio')
   return null;
 }



 return <Pressable onPress={showDatePickerSI} ><View pointerEvents="none"><TextInput style={styles.TextImputday}  placeholder={updatetextSI} /></View></Pressable>;
}

const SBlinkF = () => {
  

  useEffect(() => {
    
 },[isShowingSabado]);

 if (!isShowingSabado) {
  setupdatetextSF('Final')
   return null;
 }



 return <Pressable onPress={showDatePickerSF} ><View pointerEvents="none"><TextInput style={styles.TextImputday}  placeholder={updatetextSF} /></View></Pressable>;
}


const [VLunes, setVLunes] = useState();
const [VLunesF, setVLunesF] = useState();
const [VMartes, setVMartes] = useState();
const [VMartesF, setVMartesF] = useState();
const [VMiercoles, setVMiercoles] = useState();
const [VMiercolesF, setVMiercolesF] = useState();
const [VJueves, setVJueves] = useState();
const [VJuevesF, setVJuevesF] = useState();
const [VViernes, setVViernes] = useState();
const [VViernesF, setVViernesF] = useState();
const [VSabado, setVSabado] = useState();
const [VSabadoF, setVSabadoF] = useState();








const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    let hora = date.getHours() + ':' + date.getMinutes()
    setupdatetext(hora);
      setstate({ ...state, LHoraI: hora});
      setVLunes(new Date(date))
    hideDatePicker();
    
  };

  

  const [isDatePickerVisibleF, setDatePickerVisibilityF] = useState(false);
  const showDatePickerF = () => {
    setDatePickerVisibilityF(true);
  };

  const hideDatePickerF = () => {
    setDatePickerVisibilityF(false);
  };

  const handleConfirmF = (date) => {
    let hora = date.getHours() + ':' + date.getMinutes()
    const fechaminima = VLunes.getTime()
    if (date.getTime()<fechaminima){
      Alert.alert("Ingrese una hora de finalizacion mayor a la de inicio")
     
    }
    else{
      setupdatetextF(hora);
      setstate({ ...state, LHoraF: hora});
    }
    
    hideDatePickerF();
  };


  const [isDatePickerVisibleMI, setDatePickerVisibilityMI] = useState(false);
  const showDatePickerMI = () => {
    setDatePickerVisibilityMI(true);
  };

  const hideDatePickerMI = () => {
    setDatePickerVisibilityMI(false);
  };

  const handleConfirmMI = (date) => {
    let hora = date.getHours() + ':' + date.getMinutes()
    setupdatetextMI(hora);
    setstate({ ...state, MHoraI: hora});
    setVMartes(new Date(date))
    hideDatePickerMI();
  };

  const [isDatePickerVisibleMF, setDatePickerVisibilityMF] = useState(false);
  const showDatePickerMF = () => {
    setDatePickerVisibilityMF(true);
  };

  const hideDatePickerMF = () => {
    setDatePickerVisibilityMF(false);
  };

  const handleConfirmMF = (date) => {
    let hora = date.getHours() + ':' + date.getMinutes()
   
    const fechaminima = VMartes.getTime()
    if (date.getTime()<fechaminima){
      Alert.alert("Ingrese una hora de finalizacion mayor a la de inicio")
     
    }
    else{
      setupdatetextMF(hora);
      setstate({ ...state, MHoraF: hora});
    }
    hideDatePickerMF();
  };

  const [isDatePickerVisibleMII, setDatePickerVisibilityMII] = useState(false);
  const showDatePickerMII = () => {
    setDatePickerVisibilityMII(true);
  };

  const hideDatePickerMII = () => {
    setDatePickerVisibilityMII(false);
  };

  const handleConfirmMII = (date) => {
    let hora = date.getHours() + ':' + date.getMinutes()
    setupdatetextMII(hora);
    setstate({ ...state, MIHoraI: hora});
    setVMiercoles(new Date(date))
    hideDatePickerMII();
  };

  const [isDatePickerVisibleMIF, setDatePickerVisibilityMIF] = useState(false);
  const showDatePickerMIF = () => {
    setDatePickerVisibilityMIF(true);
  };

  const hideDatePickerMIF = () => {
    setDatePickerVisibilityMIF(false);
  };

  const handleConfirmMIF = (date) => {
    let hora = date.getHours() + ':' + date.getMinutes()
    
    const fechaminima = VMiercoles.getTime()
    if (date.getTime()<fechaminima){
      Alert.alert("Ingrese una hora de finalizacion mayor a la de inicio")
     
    }
    else{
      setupdatetextMIF(hora);
      setstate({ ...state, MIHoraF: hora});
    }
    hideDatePickerMIF();
  };

  const [isDatePickerVisibleJI, setDatePickerVisibilityJI] = useState(false);
  const showDatePickerJI = () => {
    setDatePickerVisibilityJI(true);
  };

  const hideDatePickerJI = () => {
    setDatePickerVisibilityJI(false);
  };

  const handleConfirmJI = (date) => {
    let hora = date.getHours() + ':' + date.getMinutes()
    setupdatetextJI(hora);
    setstate({ ...state, JHoraI: hora});
    setVJueves(new Date(date))
    hideDatePickerJI();
  };

  const [isDatePickerVisibleJF, setDatePickerVisibilityJF] = useState(false);
  const showDatePickerJF = () => {
    setDatePickerVisibilityJF(true);
  };

  const hideDatePickerJF = () => {
    setDatePickerVisibilityJF(false);
  };

  const handleConfirmJF = (date) => {
    let hora = date.getHours() + ':' + date.getMinutes()
    
    const fechaminima = VJueves.getTime()
    if (date.getTime()<fechaminima){
      Alert.alert("Ingrese una hora de finalizacion mayor a la de inicio")
     
    }
    else{
      setupdatetextJF(hora);
      setstate({ ...state, JHoraF: hora});
    }
    hideDatePickerJF();
  };

  const [isDatePickerVisibleVI, setDatePickerVisibilityVI] = useState(false);
  const showDatePickerVI = () => {
    setDatePickerVisibilityVI(true);
  };

  const hideDatePickerVI = () => {
    setDatePickerVisibilityVI(false);
  };

  const handleConfirmVI = (date) => {
    let hora = date.getHours() + ':' + date.getMinutes()
    setupdatetextVI(hora);
    setstate({ ...state, VHoraI: hora});
    setVViernes(new Date(date))
    hideDatePickerVI();
  };

  const [isDatePickerVisibleVF, setDatePickerVisibilityVF] = useState(false);
  const showDatePickerVF = () => {
    setDatePickerVisibilityVF(true);
  };

  const hideDatePickerVF = () => {
    setDatePickerVisibilityVF(false);
  };

  const handleConfirmVF = (date) => {
    let hora = date.getHours() + ':' + date.getMinutes()
    
    const fechaminima = VViernes.getTime()
    if (date.getTime()<fechaminima){
      Alert.alert("Ingrese una hora de finalizacion mayor a la de inicio")
     
    }
    else{
      setupdatetextVF(hora);
      setstate({ ...state, VHoraF: hora});
    }
    hideDatePickerVF();
  };

  const [isDatePickerVisibleSI, setDatePickerVisibilitySI] = useState(false);
  const showDatePickerSI = () => {
    setDatePickerVisibilitySI(true);
  };

  const hideDatePickerSI = () => {
    setDatePickerVisibilitySI(false);
  };

  const handleConfirmSI = (date) => {
    let hora = date.getHours() + ':' + date.getMinutes()
    setupdatetextSI(hora);
    setstate({ ...state, SHoraI: hora});
    setVSabado(new Date(date))
    hideDatePickerSI();
  };

  const [isDatePickerVisibleSF, setDatePickerVisibilitySF] = useState(false);
  const showDatePickerSF = () => {
    setDatePickerVisibilitySF(true);
  };

  const hideDatePickerSF = () => {
    setDatePickerVisibilitySF(false);
  };

  const handleConfirmSF = (date) => {
    let hora = date.getHours() + ':' + date.getMinutes()
    
    const fechaminima = VSabado.getTime()
    if (date.getTime()<fechaminima){
      Alert.alert("Ingrese una hora de finalizacion mayor a la de inicio")
     
    }
    else{
      setupdatetextSF(hora);
      setstate({ ...state, SHoraF: hora});
    }
    hideDatePickerSF();
  };
  

  
  
  





    

  const [updatetext, setupdatetext] = useState('Inicio')
  const [updatetextF, setupdatetextF] = useState('Final')
  const [updatetextMI, setupdatetextMI] = useState('Inicio')
  const [updatetextMF, setupdatetextMF] = useState('Final')
  const [updatetextMII, setupdatetextMII] = useState('Inicio')
  const [updatetextMIF, setupdatetextMIF] = useState('Final')
  const [updatetextJI, setupdatetextJI] = useState('Inicio')
  const [updatetextJF, setupdatetextJF] = useState('Final')
  const [updatetextVI, setupdatetextVI] = useState('Inicio')
  const [updatetextVF, setupdatetextVF] = useState('Final')
  const [updatetextSI, setupdatetextSI] = useState('Inicio')
  const [updatetextSF, setupdatetextSF] = useState('Final')



  



   




    const [modalVisible, setModalVisible] = useState(false);
    const semestres = useSelector(selectSemestre)

    const [state, setstate] = useState({
      id:makeid(),
      nameClass:"",
      LHoraI:"",
      LHoraF:"",
      MHoraI:"",
      MHoraF:"",
      MIHoraI:"",
      MIHoraF:"",
      JHoraI:"",
      JHoraF:"",
      VHoraI:"",
      VHoraF:"",
      SHoraI:"",
      SHoraF:"",
      profesor:"",
      semestre:semestres
    });

    const HandleChangeText = (name,value) => {
      setstate({ ...state, [name]: value});    
    };
    

    const updateValue = async()  => {
      if (idclasevieja){
        if(!state.nameClass){
          Alert.alert('Por favor ingrese un nombre para la clase')
          return
        }else if(!state.profesor){
          Alert.alert('Por favor ingrese un nombre para el profesor')
          return
        }else if((isShowingText===true) && (!state.LHoraI || !state.LHoraF)){
          Alert.alert('Por favor ingrese las horas de la clase')
          return
        }else if((isShowingMartes===true) && (!state.MHoraI || !state.MHoraF)){
          Alert.alert('Por favor ingrese las horas de la clase')
          return
        }else if((isShowingMiercoles===true) && (!state.MIHoraI || !state.MIHoraF)){
          Alert.alert('Por favor ingrese las horas de la clase')
          return
        }else if((isShowingJueves===true) && (!state.JHoraI || !state.JHoraF)){
          Alert.alert('Por favor ingrese las horas de la clase')
          return
        }else if((isShowingViernes===true) && (!state.VHoraI || !state.VHoraF)){
          Alert.alert('Por favor ingrese las horas de la clase')
          return
        }else if((isShowingSabado===true) && (!state.SHoraI || !state.SHoraF)){
          Alert.alert('Por favor ingrese las horas de la clase')
          return
        }
        dispatch(
          editClass(state)
        )
      } else{
        if(!state.nameClass){
          Alert.alert('Por favor ingrese un nombre para la clase')
          return
        }else if(!state.profesor){
          Alert.alert('Por favor ingrese un nombre para el profesor')
          return
        }else if((isShowingText===true) && (!state.LHoraI || !state.LHoraF)){
          Alert.alert('Por favor ingrese las horas de la clase')
          return
        }else if((isShowingMartes===true) && (!state.MHoraI || !state.MHoraF)){
          Alert.alert('Por favor ingrese las horas de la clase')
          return
        }else if((isShowingMiercoles===true) && (!state.MIHoraI || !state.MIHoraF)){
          Alert.alert('Por favor ingrese las horas de la clase')
          return
        }else if((isShowingJueves===true) && (!state.JHoraI || !state.JHoraF)){
          Alert.alert('Por favor ingrese las horas de la clase')
          return
        }else if((isShowingViernes===true) && (!state.VHoraI || !state.VHoraF)){
          Alert.alert('Por favor ingrese las horas de la clase')
          return
        }else if((isShowingSabado===true) && (!state.SHoraI || !state.SHoraF)){
          Alert.alert('Por favor ingrese las horas de la clase')
          return
        }
        console.log(state.semestre, semestres)
        dispatch(
          addClass(state)
        )
      } 
    }
    const {clases} = useSelector(state => state.ClassState)

    useEffect(() => {
      if(idclasevieja){
        const clasevieja = clases.find(nota => nota.id === idclasevieja.id.id)
        setstate({ ...state, 
          profesor: clasevieja.profesor, 
          nameClass: clasevieja.nameClass,
          LHoraI:clasevieja.LHoraI,
          LHoraF:clasevieja.LHoraF,
          MHoraI:clasevieja.MHoraI,
          MHoraF:clasevieja.MHoraF,
          MIHoraI:clasevieja.MIHoraI,
          MIHoraF:clasevieja.MIHoraF,
          JHoraI:clasevieja.JHoraI,
          JHoraF:clasevieja.JHoraF,
          VHoraI:clasevieja.VHoraI,
          VHoraF:clasevieja.VHoraF,
          SHoraI:clasevieja.SHoraI,
          SHoraF:clasevieja.SHoraF,
          semestre:clasevieja.semestre})
        if(clasevieja.LHoraI){
          setIsShowingText(true)
        }
        if(clasevieja.MHoraI){
          setIsShowingMartes(true)
        }
        if(clasevieja.MIHoraI){
          setIsShowingMiercoles(true)
        }
        if(clasevieja.JHoraI){
          setIsShowingJueves(true)
        }
        if(clasevieja.VHoraI){
          setIsShowingViernes(true)
        }
        if(clasevieja.SHoraI){
          setIsShowingSabado(true)
        }
        setupdatetext(clasevieja.LHoraI)
        setupdatetextF(clasevieja.LHoraF)
        setupdatetextMI(clasevieja.MHoraI)
        setupdatetextMF(clasevieja.MHoraF)
        setupdatetextMII(clasevieja.MIHoraI)
        setupdatetextMIF(clasevieja.MIHoraF)
        setupdatetextJI(clasevieja.JHoraI)
        setupdatetextJF(clasevieja.JHoraF)
        setupdatetextVI(clasevieja.VHoraI)
        setupdatetextVF(clasevieja.VHoraF)
        setupdatetextSI(clasevieja.SHoraI)
        setupdatetextSF(clasevieja.SHoraF)
      }
      
    },[])
    

    return (
        <View style={styles.container}>
      
      <Text style={styles.Titulo}  >Registrar Clase</Text>
      <TextInput
        style={styles.Imput}
        placeholder="Nombre de la Clase"
        value={state.nameClass}
        onChangeText={(value) => HandleChangeText('nameClass', value) }
      />
      
      
                 
      <Text style={styles.text} >Dias de Clase</Text>
      <Modal
        animationType="none"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
        
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Seleccionar</Text>
            <Pressable style={[styles.button, styles.buttonClose]} onPress={() => setIsShowingText(!isShowingText)  } >
                <Text style={styles.textStyle}>Lunes</Text>
            </Pressable>
            <Pressable style={[styles.button, styles.buttonClose]} onPress={() => setIsShowingMartes(!isShowingMartes)}>
                <Text style={styles.textStyle}>Martes</Text>
            </Pressable>
            <Pressable style={[styles.button, styles.buttonClose]} onPress={() => setIsShowingMiercoles(!isShowingMiercoles)}>
                <Text style={styles.textStyle}>Miercoles</Text>
            </Pressable>
            <Pressable style={[styles.button, styles.buttonClose]} onPress={() => setIsShowingJueves(!isShowingJueves)}>
                <Text style={styles.textStyle}>Jueves</Text>
            </Pressable>
            <Pressable style={[styles.button, styles.buttonClose]} onPress={() => setIsShowingViernes(!isShowingViernes)}>
                <Text style={styles.textStyle}>Viernes</Text>
            </Pressable>
            <Pressable style={[styles.button, styles.buttonClose]} onPress={() => setIsShowingSabado(!isShowingSabado)}>
                <Text style={styles.textStyle}>Sabado</Text>
            </Pressable>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>Salir</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      

<TouchableOpacity style={styles.Buttonsele}>
<Button
      
      title='Seleccionar'
      onPress={() => setModalVisible(true)}
      />
        
      </TouchableOpacity>
      
      
      

      
      <HStack >
      <VStack >
      <Blink text = 'L' />
      <HStack >
      <LBlinkI />
      <LBlinkF/>
      </HStack>
      </VStack>
      <VStack >
      <BlinkM text = 'M' />
      <HStack >
      <MBlinkI />
      <MBlinkF/>
      </HStack>
      </VStack>
      </HStack>
      <HStack >
      <VStack >
      <BlinkMI text = 'MI' />
      <HStack >
      <MIBlinkI />
      <MIBlinkF/>
      </HStack>
      </VStack>
      <VStack >
      <BlinkJ text = 'J' />
      <HStack >
      <JBlinkI />
      <JBlinkF/>
      </HStack>
      </VStack>
      </HStack>
      <HStack >
      <VStack >
      <BlinkV text = 'V' />
      <HStack >
      <VBlinkI />
      <VBlinkF/>
      </HStack>
      </VStack>
      <VStack >
      <BlinkS text = 'S' />
      <HStack >
      <SBlinkI />
      <SBlinkF/>
      </HStack>
      </VStack>
      </HStack>
        
      
      
      
    
      
      
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="time"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
      <DateTimePickerModal
        isVisible={isDatePickerVisibleF}
        mode="time"
        onConfirm={handleConfirmF}
        onCancel={hideDatePickerF}
        minimumDate={VLunes}
      />
      <DateTimePickerModal
        isVisible={isDatePickerVisibleMI}
        mode="time"
        onConfirm={handleConfirmMI}
        onCancel={hideDatePickerMI}
      />
      <DateTimePickerModal
        isVisible={isDatePickerVisibleMF}
        mode="time"
        onConfirm={handleConfirmMF}
        onCancel={hideDatePickerMF}
        minimumDate={VMartes}
      />
      <DateTimePickerModal
        isVisible={isDatePickerVisibleMII}
        mode="time"
        onConfirm={handleConfirmMII}
        onCancel={hideDatePickerMII}
        
      />
      <DateTimePickerModal
        isVisible={isDatePickerVisibleMIF}
        mode="time"
        onConfirm={handleConfirmMIF}
        onCancel={hideDatePickerMIF}
        minimumDate={VMiercoles}
      />
      <DateTimePickerModal
        isVisible={isDatePickerVisibleJI}
        mode="time"
        onConfirm={handleConfirmJI}
        onCancel={hideDatePickerJI}
        
      />
      <DateTimePickerModal
        isVisible={isDatePickerVisibleJF}
        mode="time"
        onConfirm={handleConfirmJF}
        onCancel={hideDatePickerJF}
        minimumDate={VJueves}
      />
      <DateTimePickerModal
        isVisible={isDatePickerVisibleVI}
        mode="time"
        onConfirm={handleConfirmVI}
        onCancel={hideDatePickerVI}
      />
      <DateTimePickerModal
        isVisible={isDatePickerVisibleVF}
        mode="time"
        onConfirm={handleConfirmVF}
        onCancel={hideDatePickerVF}
        minimumDate={VViernes}
      />
      <DateTimePickerModal
        isVisible={isDatePickerVisibleSI}
        mode="time"
        onConfirm={handleConfirmSI}
        onCancel={hideDatePickerSI}
      />
      <DateTimePickerModal
        isVisible={isDatePickerVisibleSF}
        mode="time"
        onConfirm={handleConfirmSF}
        onCancel={hideDatePickerSF}
        minimumDate={VSabado}
      />






      
      <TextInput
        style={styles.Imput}
        placeholder="Nombre del profesor"
        value={state.profesor}
        onChangeText={(value) => HandleChangeText('profesor', value) }
      />
      <TouchableOpacity style = {styles.Button} >
        <Button 
          title="Añadir clase"
          onPress={() => 
            
            Alert.alert(
              "Estado de clase",
              "Clase creada con exito",
              [
                {
                  text: "Listo",
                  onPress: () =>  { navigation.navigate('Horario') , updateValue()},

                  
                },
              ],
              
            )
          }
            
        />
        
      </TouchableOpacity>
      
      
      <StatusBar style="auto" />
    </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#FFF',
      
      alignItems: 'center',
    },
    Titulo:{
      alignItems: 'center',
      marginTop: 40,
      marginBottom: 100,
      fontSize: 35,
      justifyContent: 'center',
      
    },
    Imput:{
      justifyContent: 'center',
      alignItems: 'center',
      borderColor: 'gray',
      borderWidth: 1,
      borderRadius: 20,
      padding: 10,
      fontSize: 20,
      marginTop: 20,
      marginBottom: 20,
      
    },
    Button:{
      marginTop: 50,
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 50,
    },
    text:{
      justifyContent: 'center',
      alignItems: 'center',
      fontSize: 20,
      
    },
    ButtonDays:{
      marginRight: 15,
      marginBottom: 10,
    },
    TextImputday:{
      borderColor: 'gray',
      borderWidth: 1,
      borderBottomWidth: 1,
      padding: 10,
      fontSize: 15,
      height: 40,
      width: 70,
      marginBottom: 10
    },
    



    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
      },
      modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
      },
      button: {
        marginBottom: 2,
        marginTop: 2,
        borderRadius: 20,
        elevation: 2
      },
      buttonOpen: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#2196F3",
        marginBottom: 20
      },
      buttonClose: {
        backgroundColor: "#2196F3",
        padding: 10,
        width: '70%',
        
      },
      textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
      },
      modalText: {
        marginBottom: 15,
        textAlign: "center"
      },
      Buttonsele: {
        marginTop: 10,
        marginBottom: 10,
      }
      
      
    
  
    
  
  });

export default Registrarclase