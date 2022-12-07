import { StyleSheet, SafeAreaView} from 'react-native';
import { Provider } from 'react-redux';
import { store } from './redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';
import { NavigationContainer } from '@react-navigation/native';
const persistor = persistStore(store)
import React from 'react'
import Mystack from './components/Mystack';

export default function App() {
  
  return (
    <PersistGate persistor={persistor}>
    <Provider store={store}>
    <SafeAreaView style = {{flex: 1}}>

          <NavigationContainer>
          <Mystack/>
          </NavigationContainer>

    </SafeAreaView>
    </Provider>
    </PersistGate>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
 

});


