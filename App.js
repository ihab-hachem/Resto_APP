
import React, { useEffect } from 'react'

import { View, Text, StyleSheet, StatusBar } from 'react-native'
import HomeHeader from './src/components/HomeHeader'

import { colors } from './src/global/style'
import RootNavigator from './src/navigation/RootNavigator'
import { HomeScreen } from './src/screens/HomeScreen'
import SplashScreen from 'react-native-splash-screen';




export default function App()  {
 /* useEffect(()=>{
    SplashScreen.hide()
  },[])*/
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle='light-content'
        backgroundColor={colors.blue1}
      />
     <RootNavigator />
    </View>

  )
}

const styles = StyleSheet.create({
  container: { flex: 1 }
})

