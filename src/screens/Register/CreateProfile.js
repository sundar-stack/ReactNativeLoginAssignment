import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
  ScrollView
} from 'react-native';
import {BG_COLOR, FONT_COLOR} from '../../constants';
import {Link} from '@react-navigation/native';
import {useForm, Controller} from 'react-hook-form';
import {globalStyles} from '../../styles/globalStyles';

const CreateProfile = ({ navigation}) => {
  const {
    handleSubmit,
    formState: {errors},
    control,
  } = useForm();

  const onSubmit = data => {
    //    console.log(data);
    if (errors.length === undefined || 0) {
      navigation.navigate('PersonalDetails');
    }
  };

  return (
    <View style={styles.container}>
      {/* <Text style={[globalStyles.mainTitle, {marginHorizontal: 40}]}>
          Create Profile
        </Text> */}
      <ScrollView style={styles.scrollView} fadingEdgeLength={200}>
        <View style={globalStyles.formWrapper}>
          
          <View style={globalStyles.inputWrapper}>
            <Text style={globalStyles.label}>First Name</Text>
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
              name="firstname"
              rules={{required: 'firstname Required'}}
              defaultValue=""
            />
            {errors.firstname && (
              <Text style={globalStyles.errorText}>
                {errors.firstname?.message}
              </Text>
            )}
          </View>

          <View style={globalStyles.inputWrapper}>
            <Text style={globalStyles.label}>Last Name</Text>
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
              name="lastname"
              rules={{required: 'lastname Required'}}
              defaultValue=""
            />
            {errors.lastname && (
              <Text style={globalStyles.errorText}>
                {errors.lastname?.message}
              </Text>
            )}
          </View>

          <View style={globalStyles.inputWrapper}>
            <Text style={globalStyles.label}>Email</Text>
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
              name="email"
              rules={{
                required: 'Email Required',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'invalid email address',
                },
              }}
              defaultValue=""
            />
            {errors.email && (
              <Text style={globalStyles.errorText}>
                {errors.email?.message}
              </Text>
            )}
          </View>

          <View style={globalStyles.inputWrapper}>
            <Text style={globalStyles.label}>Mobile No</Text>
            <Controller
              control={control}
              render={({field: {onChange, onBlur, value}}) => (
                <TextInput
                  type="number"
                  style={globalStyles.mainInput}
                  onBlur={onBlur}
                  onChangeText={value => onChange(value)}
                  value={value}
                />
              )}
              name="mobileno"
              rules={{
                required: 'Mobile No Required',
                maxLength: {
                  value: 10,
                  message: 'Mobile NO should not be more than 10 Digits',
                },
                minLength: {
                  value: 10,
                  message: 'Mobile NO should be equal to 10 Digits',
                },
              }}
              defaultValue=""
            />
            {errors.mobileno && (
              <Text style={globalStyles.errorText}>
                {errors.mobileno?.message}
              </Text>
            )}
          </View>

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
              rules={{
                required: 'Password Required',
                maxLength: {
                  value: 12,
                  message: 'Password should not be more than 12 characters',
                },
                minLength: {
                  value: 8,
                  message: 'Password should be more than 8 characters',
                },
              }}
              defaultValue=""
            />
            {errors.password && (
              <Text style={globalStyles.errorText}>
                {errors.password?.message}
              </Text>
            )}
          </View>

          <Text style={[globalStyles.mediumTitle, {fontSize: 14}]}>
            By signing up, you agree to our
            <Link to="/TNC" style={globalStyles.links}>
              Terms and Conditions
            </Link>
          </Text>
          <Text style={[globalStyles.mediumTitle, {fontSize: 14}]}>
            Already have an account ?
            <Link to="/Login" style={globalStyles.links}>
              Login
            </Link>
          </Text>
          <TouchableOpacity
            style={globalStyles.primaryButton}
            onPress={handleSubmit(onSubmit)}>
            <Text style={[globalStyles.mediumTitle, {color: '#fff'}]}>
              Create Profile
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default CreateProfile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BG_COLOR,
    color: FONT_COLOR,
  },
  text: {
    color: FONT_COLOR,
    fontSize: 22,
    marginVertical: 10,
  },
  scrollView: {
    width: '100%',
    padding: 15,
    marginBottom: 15,
  },
});
