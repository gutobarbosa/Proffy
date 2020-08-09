import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Landing from './src/pages/Landing';
import { AppLoading } from 'expo'; 
// App loading fica mostrando a logo do site até carregar as coisas demoradas como fontes


import {Archivo_400Regular, Archivo_700Bold} from '@expo-google-fonts/archivo';
import {Poppins_400Regular,Poppins_600SemiBold, useFonts} from '@expo-google-fonts/poppins';
import AppStack from './src/routes/AppStack';

export default function App() {
 let [fontsLoaded] = useFonts({
  Archivo_400Regular,
  Archivo_700Bold,
  Poppins_400Regular,
  Poppins_600SemiBold
 });
 if(!fontsLoaded){
   return <AppLoading />
 }else{

  return (
      <>
        <AppStack />
        <StatusBar style="light" />
      </>
    );
  }
}