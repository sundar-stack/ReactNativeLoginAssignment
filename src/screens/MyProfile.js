import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { BG_COLOR, FONT_COLOR } from '../constants'
import { globalStyles } from '../styles/globalStyles'

const MyProfile = () => {
    return (
        <View style={styles.container}>
             <Text style={[globalStyles.mainTitle,{fontSize:40,textAlign:"center"}]}>My Profile</Text>
        </View>
    )
}

export default MyProfile

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:BG_COLOR,
        color:FONT_COLOR,
        justifyContent:"center"
    }
})
