import React from 'react'
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import { BG_COLOR, FONT_COLOR } from '../constants'
import { globalStyles } from '../styles/globalStyles'

const Home = ({ route,navigation }) => {
    
    const  from  = route?.params?.from
    console.log("route",from);
    const param =()=>{
        if(from !== undefined && from === "fromPersonalDetails"){
            return (
                <TouchableOpacity onPress={()=> navigation.openDrawer()}>
                <Text style={[globalStyles.mainTitle,{fontSize:40,borderWidth:0}]}>=</Text>
                </TouchableOpacity>
            )
        }else{
            return <></>;
        }
    }
    return (
        <View style={styles.container}>
             {param()}
            <View style={styles.container2}>
            <Text style={[globalStyles.mainTitle,{fontSize:40,textAlign:"center"}]}>HOME</Text>
            </View>
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:BG_COLOR,
    },
    container2:{
        flex:1,
        justifyContent:'center',
    }
})
