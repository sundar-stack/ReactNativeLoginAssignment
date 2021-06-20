import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { BG_COLOR, FONT_COLOR } from '../constants'
import { globalStyles } from '../styles/globalStyles'

const ResetPassword = () => {
    return (
        <View style={styles.container}>
        <Text style={[globalStyles.mainTitle,{fontSize:40,textAlign:"center"}]}>Reset Password</Text>
        </View>
    )
}

export default ResetPassword;

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:BG_COLOR,
        color:FONT_COLOR,
        justifyContent:"center"
    }
})
