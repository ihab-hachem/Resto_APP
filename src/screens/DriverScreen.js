import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import Header from '../components/Header'
import DriverCard from '../components/DriverCard'
import { driver, driverInfo, user } from '../global/data'

const DriverScreen = ({navigation}) => {
  return (
    <View>
      <Header 
          iconName='arrow-left'
          navigation={navigation}
          title='Driver'
      />
      <ScrollView style={{height:'90%',marginBottom:10,marginTop:5}}>
        {
            driver.map(item => 
            
                <TouchableOpacity  key={driver.indexOf(item)}
                onPress={()=>{
                    var id=item.id
                    navigation.navigate("DriverOrdersScreen",{id})
                }}
                >
                {item.driverId===driverInfo[0].id &&
                  <DriverCard
                custName={item.customer}
                ordNb={item.orderNb}
                pn={item.phone}
                tot={item.total}    
                />
                }
                {
                    user.desc==='admin'&&
                    <DriverCard
                custName={item.customer}
                ordNb={item.orderNb}
                pn={item.phone}
                tot={item.total}    
                />
                }
                </TouchableOpacity>
                
            )
        }
          
      </ScrollView>
    </View>
  )
}

export default DriverScreen