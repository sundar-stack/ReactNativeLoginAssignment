import {Link} from '@react-navigation/native';
import React from 'react';
import {useForm, Controller} from 'react-hook-form';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {BG_COLOR, FONT_COLOR} from '../constants';
import {globalStyles} from '../styles/globalStyles';

const Login = ({navigation}) => {
  // console.log(navigation);
  const {
    handleSubmit,
    formState: {errors},
    control,
  } = useForm();

  const onSubmit =(data)=>{
//    console.log(data);
   if(errors.length === undefined || 0){
       navigation.navigate('Home')
   }
  }
//   console.log("errors",errors.length);

  return (
    <View style={styles.container}>
      <Text style={[globalStyles.mainTitle, {marginHorizontal: 40}]}>
        Login
      </Text>

      <View style={globalStyles.formWrapper}>
        <View style={globalStyles.inputWrapper}>
          <Text style={globalStyles.label}>Username</Text>
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
            name="username"
            rules={{required: "Username Required"}}
            defaultValue=""
          />
          {errors.username && (
            <Text style={globalStyles.errorText}>
              {errors.username?.message}
            </Text>
          )}
        </View>
      </View>

      <View style={globalStyles.formWrapper}>
        <View style={globalStyles.inputWrapper}>
          <Text style={globalStyles.label}>Password</Text>
          <Controller
            control={control}
            render={({field: {onChange, onBlur, value}}) => (
              <TextInput
                secureTextEntry={true}
                style={globalStyles.mainInput}
                onBlur={onBlur}
                onChangeText={value => onChange(value)}
                value={value}
              />
            )}
            name="password"
            rules={{required: "Password Required",maxLength:{value:12,message:"Password should not be more than 12 characters"},
            minLength:{value:8,message:"Password should be more than 8 characters"}}}
            defaultValue=""
          />
          {errors.password && (
            <Text style={globalStyles.errorText}>
              {errors.password?.message}
            </Text>
          )}
        </View>

        <TouchableOpacity style={globalStyles.primaryButton} onPress={handleSubmit(onSubmit)}>
          <Text style={[globalStyles.mediumTitle,{color:"#fff"}]}>Login</Text>
      </TouchableOpacity>
      <Text style={[globalStyles.mediumTitle,{fontSize:14}]}><Link to="/ResetPassword" style={globalStyles.links}>Forgot Password ?</Link></Text>

      <Text style={[globalStyles.mediumTitle,{fontSize:14}]}>Dont have an account ? <Link to="/Register" style={globalStyles.links}>Register Here</Link></Text>
      </View>

      
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BG_COLOR,
    justifyContent: 'center'
  },
});
