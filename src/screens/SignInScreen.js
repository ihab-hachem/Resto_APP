import React,{useState, useRef} from 'react';

import {View, Text, StyleSheet, Dimensions, TextInput, ScrollView} from 'react-native';
import {Icon, Button, SocialIcon} from 'react-native-elements'
import {colors, parameters} from '../global/style';

import * as Animatable from 'react-native-animatable'
import Header from '../components/Header';


export function SignInScreen({navigation}){
    const [textInput2Focused, setTextInput2Focused]=useState(false);
    const textInput1=useRef(1);
    const textInput2=useRef(2);
    return(
    <View style={styles.container}>
        <Header iconName='arrow-left' title='Sign-In' navigation={navigation}/>
        <ScrollView>
        <View style={{marginLeft:15,marginTop:10}}>
            <Text style={styles.text1}>
                SIGN - IN
            </Text>
        </View>
        <View style={{alignItems:'center',marginTop:10}}>
            <Text style={styles.text2}>
                Please enter the email and password
            </Text>
            <Text style={styles.text2}>
                registered with your account
            </Text>
        </View>

        <View style={{marginTop:20}}>
            <View>
               <TextInput
                   style={styles.textInput1}
                   placeholder='Email'
                   ref={textInput1}
               />
            </View>
            <View style={styles.textInput2}>
            <Animatable.View
            animation={textInput2Focused?"":"fadeInLeft"}
            duration={400}>
               <Icon
                   name='lock'
                   type='material'
                   iconStyle={{color:colors.grey3}}
               />
            </Animatable.View>

            <TextInput
                   style={{width:'80%'}}
                   placeholder='Password'
                   ref={textInput2}
                   onFocus={()=>{
                       setTextInput2Focused(false)
                   }}
                   onBlur={()=>{
                       setTextInput2Focused(true)
                   }}
               />

            <Animatable.View 
            animation={textInput2Focused?"":"fadeInLeft"}
            duration={400}
            >
            <Icon
                   name='visibility-off'
                   type='material'
                   iconStyle={{color:colors.grey3}}
                   style={{marginRight:12}}
               />
               
            </Animatable.View>
            </View>
            
        </View>
        <View style={{marginHorizontal:22,marginTop:20}}>
            <Button
                title='SIGN IN'
                buttonStyle={styles.styledButton}
                titleStyle={styles.buttonTitle}
                onPress={()=>{
                   navigation.goBack()
                }}
            />
        </View>
        <View style={{alignItems:'center',marginTop:15}}>
            <Text style={{...styles.text2,textDecorationLine:'underline'}}>
                Forgot Password ?
            </Text>
        </View>
        <View style={{alignItems:'center',marginTop:10}}>
            <Text style={styles.orT}>
                OR
            </Text>
        </View>
        <View style={{marginHorizontal:20,marginTop:10}}>
            <SocialIcon
                title='Sign In With Facebook'
                button
                type='facebook'
                style={styles.socialIc}
                onPress={()=>{}}
            />
        </View>
        <View style={{marginHorizontal:20,marginTop:10}}>
            <SocialIcon
                title='Sign In With Google'
                button
                type='google'
                style={styles.socialIc}
                onPress={()=>{}}
            />
        </View>
        <View style={{marginTop:10, marginLeft:20}}>
            <Text style={styles.text2}>
                New in our Retstaurant ?
            </Text>
        </View>
        <View style={{marginHorizontal:22,marginTop:5,marginBottom:10}}>
            <Button
                title='Create Account'
                buttonStyle={styles.createAcc}
                titleStyle={styles.createAccTitle}
                onPress={()=>{navigation.navigate("SignUpScreen")}}
            />
        </View>
        </ScrollView>
    </View>
    )
}

const styles=StyleSheet.create({
    container:{
        flex:1
    },
    text1:{
        color:colors.blue1,
        fontSize:20,
        fontWeight:'bold',
    },
    text2:{
        color:colors.grey2,
        fontSize:16,
        fontWeight:'bold'
    },
    textInput1:{
        borderWidth:1,
        borderColor:'#86939e',
        marginHorizontal:20,
        borderRadius:12,
        marginBottom:20,
        paddingLeft:15
    },
    textInput2:{
        borderWidth:1,
        borderRadius:12,
        marginHorizontal:20,
        borderColor:'#86939e',
        flexDirection:'row',
        justifyContent:'space-between',
        alignContent:'center',
        alignItems:'center',
        paddingLeft:15
    },
    orT:{
        fontSize:25,
        fontWeight:'bold',
        color:colors.grey1
    },socialIc:{
        borderRadius:12,
        height:50
    },
    createAcc:{
        backgroundColor:'white',
        borderColor:colors.blue2,
        borderRadius:12,
        borderWidth:1
    },
    createAccTitle:{
        color:colors.blue1,
        fontSize:20,
        fontWeight:'bold'
    },
    styledButton:{
        backgroundColor:colors.blue2,
        alignContent:"center",
        justifyContent:"center",
        borderRadius:12,
        borderWidth:1, 
        borderColor:colors.blue1,
        height:50,
        paddingHorizontal:20,
        width:'100%'
    },

    buttonTitle:{
        color:"white",
        fontSize:20,  
        fontWeight:"bold" ,
        alignItems:"center",
        justifyContent:"center"  ,
        marginTop:-3 
    }
})