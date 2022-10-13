import { StyleSheet, Text, View, ScrollView, TextInput, TouchableOpacity } from 'react-native'
import React,{useState} from 'react'
import {colors} from "../global/style"
import { Icon, Button } from 'react-native-elements'
import * as Animatable from 'react-native-animatable'
import Header from '../components/Header'

const EditAcc = ({navigation}) => {
  const [passwordFocussed,setPasswordFocussed]=useState(false)
  const [passwordBlured,setPasswordBlured]=useState(false)
  return (
    <View style={styles.container}>
    <Header title='Edit account' iconName='arrow-left' navigation={navigation}/>
      <ScrollView keyboardShouldPersistTaps='always'>
        <View style={styles.view1}>
            <Text style={styles.text1}>
                Edit Account
            </Text>
        </View>
        
        <View style={styles.view2}>
            
            
                <View style={styles.view6}>
                    <TextInput
                        placeholder='Mobile Number'
                        style={styles.input1}
                        keyboardType='number-pad'
                        autoFocus={true}
                    />
                </View>

                <View style={styles.view6}>
                    <TextInput
                        placeholder='First Name'
                        style={styles.input1}
                        autoFocus={false}
                    />
                </View>

                <View style={styles.view6}>
                    <TextInput
                        placeholder='Last Name'
                        style={styles.input1}
                        autoFocus={false}
                    />
                </View>

               <View style={styles.view10}>
                   <View>
                      <Icon
                        name='email'
                        style={styles.email}
                        color={colors.grey3}
                        type='material'
                      />
                   </View>
                   <View style={styles.view11}>
                    <TextInput
                        placeholder='Email'
                        style={styles.input4}
                        autoFocus={false}
                    />
                </View>
               </View>

               <View style={styles.view14}>
                  <Animatable.View animation={passwordFocussed ? 'fadeInRight' : 'fadeInLeft'} duration={400}>
                    <Icon
                      name='lock'
                      color={colors.grey3}
                      type='material'
                     
                    />
                  </Animatable.View>
                  <TextInput
                        placeholder='Password'
                        style={{flex:1}}
                        autoFocus={false}
                        onFocus={()=>{
                          setPasswordFocussed(true)
                          setPasswordBlured(true)
                          }}
                        onBlur={()=>{
                          setPasswordFocussed(false)
                          setPasswordBlured(false)
                          }}
                    />
                    <Animatable.View animation={passwordBlured ? 'fadeInLeft':'fadeInRight' } duration={400}>
                    <Icon
                      name='visibility-off'
                      color={colors.grey3}
                      type='material'
                      style={{marginRight:10}}
                    />
                  </Animatable.View>
               </View>

               <View style={styles.view22}>
                 <TouchableOpacity 
                 style={styles.addLoc}
                // onPress={()=>{navigation.navigate("RestaurantMapScreen")}}
                 >
                   <Icon
                     name='map-marker'
                     type='material-community'
                     color={colors.grey3}
                     size={30}
                   />
                   <Text style={{color:colors.grey2,fontSize:18,fontWeight:'bold'}}>Add your Location</Text>
                 </TouchableOpacity>
               </View>
                
                <View style={styles.view15}>
                      <Text style={styles.text3}>
                        By creating or logging into an account you are
                      </Text>
                      <View style={styles.view16}>
                            <Text style={styles.text3}>
                                agreeing with our 
                            </Text>
                            <Text style={styles.text4}>
                              Terms & Conditions
                            </Text>
                            <Text style={styles.text3}>
                               and
                            </Text>
                            
                      </View>
                      <Text style={styles.text4}>
                              Privacy Statement
                            </Text>
                </View>
                <View style={styles.view17}>
                          <Button
                            title='Edit Account'
                            buttonStyle={styles.button1}
                            titleStyle={styles.title1}
                          />
                </View>
        
        </View>
        
        
      </ScrollView>
    </View>
  )
}

export default EditAcc

const styles = StyleSheet.create({
    container:{flex:1,
        backgroundColor:'white'
      },

      view1:{justifyContent:'center',
             alignItems:'flex-start',
             marginTop:10,
             marginBottom:10,
             paddingHorizontal:15
            },

      text1:{fontSize:22,
        color:colors.blue1,
        fontWeight:'bold'
      },

      view2:{justifyContent:'flex-start',
             backgroundColor:'white',
             paddingHorizontal:15
            },

      view3:{marginTop:5,
            marginBottom:10
          },

      text2:{fontSize:15,
            color:colors.grey2
          },

      view4:{flexDirection:'row',
              borderWidth:1,
              borderColor: colors.grey4,
              borderRadius:12,
              paddingLeft:5
          
            },

      view5:{ marginLeft:30,
              marginTop:20      
               },

      input1:{fontSize:16, },

      view6:{flexDirection:'row',
              borderWidth:1,
              borderColor: colors.grey4,
              borderRadius:12,
              paddingLeft:5,
              marginTop:20,
              height:48
          },

       view7:   {marginLeft:0,
                 maxWidth:"65%",         
               },

      input2:{fontSize:16,
              marginLeft: 0,
              marginBottom:0
                  },         

      view8:{flexDirection:'row',
            borderWidth:1,
            borderColor: colors.grey4,
            borderRadius:12,
            paddingLeft:5,
            marginTop:20,
            height:48
          },

      view9:{marginLeft:0,
             maxWidth:"65%",    
           },

      input3:{fontSize:16,
        marginLeft: 0,
        marginBottom:0
       },

      view10: {flexDirection:'row',
              borderWidth:1,
              borderColor:colors.grey4,
              borderRadius:12,
              paddingLeft:5,
              marginTop:20,
              height:48
       },

       email:{fontSize:24,
              padding:0,
              marginBottom:0 ,
              marginTop:11,
              marginLeft:2
              },

       view11 : { marginLeft:30,
                  maxWidth:"65%",    
                },

       input4:{fontSize:16,
              marginLeft: -20,
              marginBottom:-10
              },      

     view13:  {flexDirection:"row",
              height:40,
            } ,

    view14:{
        borderWidth:1,
        borderRadius:12,
        borderColor:colors.grey4,
        flexDirection:"row",
        justifyContent:"space-between",
        alignContent:"center",
        alignItems:"center",
        paddingLeft:5,
        marginTop:20,
    },       
      
    view15:{alignItems:'center',
            justifyContent:'center',
            marginTop:10
          },

    text3: {fontSize:13
              },
              
      view16:{flexDirection:'row'},

      text4:{textDecorationLine:'underline',
            color:'green',
            fontSize:13,
            marginLeft:3,
            marginRight:3
            },

      button1: {backgroundColor:colors.blue2,
        alignContent:"center",
        justifyContent:"center",
        borderRadius:12,
        borderWidth:1, 
        borderColor:colors.blue2,
        height:50,
        paddingHorizontal:20,
        width:'100%'
                          
      },
      
      title1:{color:"white",
      fontSize:20,  
      fontWeight:"bold" ,
      alignItems:"center",
      justifyContent:"center"  ,
      marginTop:-3
                            
    },

    view17:{marginVertical:10,
            marginTop:30
          },

    view18:{flex:1,
            justifyContent:'flex-start',
            alignItems:'center',
            paddingTop:15,
          },

    text5:   {fontSize:15,
              fontWeight:'bold',
              },
              
      view19:{ backgroundColor:'white',
              paddingHorizontal:15,
              
              },

      view20:{marginTop:5
            },
      
      view21:{marginTop:5,
        marginBottom:5
        
      },

      button2:{
        backgroundColor:'white',
        borderRadius:12,
        borderWidth:1, 
        borderColor:colors.blue2,
       
                          
      },

      title2:{color:colors.blue1,
        fontSize:25,  
        fontWeight:"bold" ,
        alignItems:"center",
        justifyContent:"center"  ,
        marginTop:-3
                        
    },
    addLoc:{
      flexDirection:'row',
      alignItems:'center',
      borderWidth:1,
      borderColor:colors.grey2,
      borderRadius:12,
      backgroundColor:colors.grey5,
      justifyContent:'center',
      padding:5
    },
    view22:{
      marginVertical:20
    }
})