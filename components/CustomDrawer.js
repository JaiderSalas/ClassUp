import 'react-native-gesture-handler';
import { ImageBackground, Image , Text, View,StyleSheet} from 'react-native';
import { VStack } from 'react-native-flex-layout';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { useSelector,useDispatch} from 'react-redux';
import { selectSemestre, setSemestre} from '../slices/Semestre';
import { IconButton,Colors } from 'react-native-paper';

const CustomDrawer = props => {
    const semestre = useSelector(selectSemestre)
    const dispatch = useDispatch()
    const aumentar=() => {
        dispatch(
            setSemestre({semestre: semestre+1})
        )
    }
    const disminuir=() => {
        if(semestre>=2){
            dispatch(
                setSemestre({semestre: semestre-1})
            )
        } 
    }
    return(
        <View style={{flex: 1}} >
            <DrawerContentScrollView {...props}  >
                <ImageBackground source={require('../elementos/imagenfondo.jpeg')} style={{padding: 1, width:wp('70%')}} >
                    <VStack style={{}} >
                        <Image source={require('../elementos/Profile.png')} style={{height:78,width:78,borderRadius: 40,marginTop:30,borderWidth: 1, borderColor: 'gray',marginLeft: wp('22%')}} />
                        <Text style={{marginTop:12,marginBottom:30,marginLeft: wp('25%')}} ></Text>
                    </VStack>
                </ImageBackground>
                <DrawerItemList {...props} />
                <Text style={{marginTop: hp('30%'), marginStart: hp('20%')}} >Semestre Actual: {semestre}</Text>
                <View style={styles.botones}>
                <IconButton
                icon='plus'
                color={Colors.blue500}
                size={20}
                onPress={()=> {aumentar()}}
                />
                <IconButton
                icon='minus'
                color={Colors.blue500}
                size={20}
                onPress={() => {disminuir()}}
                />
                </View>
            </DrawerContentScrollView>
        </View>

    )
}


export default CustomDrawer
const styles = StyleSheet.create({
    botones:{
    display:'flex',
    alignItems:'baseline',
    justifyContent:'space-around',
    flexDirection:'row'
  }
})