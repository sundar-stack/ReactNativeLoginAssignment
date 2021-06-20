import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
  ScrollView,
  Picker
} from 'react-native';

import {BG_COLOR, FONT_COLOR} from '../../constants';
import {Link} from '@react-navigation/native';
import {useForm, Controller} from 'react-hook-form';
import {globalStyles} from '../../styles/globalStyles';

const PersonalDetails = ({navigation}) => {
    const {
        handleSubmit,
        formState: {errors},
        control,
      } = useForm();
    
      const onSubmit = data => {
        //    console.log(data);
        if (errors.length === undefined || 0) {
          navigation.navigate('Home',{from:"fromPersonalDetails"})
        }
      };

    return (
        <View style={styles.container}>
      <ScrollView style={styles.scrollView} fadingEdgeLength={200}>
        <View style={globalStyles.formWrapper}>
          
          <View style={globalStyles.inputWrapper}>
            <Text style={globalStyles.label}>Native Place</Text>
            <Controller
              control={control}
              render={({field: {onChange, onBlur, value}}) => (
                <TextInput
                  type="text"
                  style={globalStyles.mainInput}
                  onBlur={onBlur}
                  onChangeText={value => onChange(value)}
                  value={value}
                />
              )}
              name="nativePlace"
              rules={{required: 'Native Place Required'}}
              defaultValue=""
            />
            {errors.nativePlace && (
              <Text style={globalStyles.errorText}>
                {errors.nativePlace?.message}
              </Text>
            )}
          </View>

          <TouchableOpacity
            style={globalStyles.primaryButton}
            onPress={handleSubmit(onSubmit)}>
            <Text style={[globalStyles.mediumTitle, {color: '#fff'}]}>
              SUBMIT
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
    )
}

export default PersonalDetails;

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:BG_COLOR,
        color:FONT_COLOR
    },
    text:{
        color:FONT_COLOR,
        fontSize:22,
        marginVertical:10
    }
})
