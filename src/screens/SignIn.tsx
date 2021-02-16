import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  Dimensions,
  TextInput
} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import Button from '../components/Button';
import SignScaffold from '../components/SignScaffold';
import SignUp from './SignUp';
import Home from './Home';
const {width: widthScreen, height: heightScreen} = Dimensions.get('window');
const logo = require('../assets/Images/logo.png');

interface SignInProps {
  navigation: any;
}

const Signin = ({navigation}: SignInProps) => {
  const behavior = Platform.OS === 'ios' ? 'padding' : undefined;

  const goToSignUp = () => {
    navigation.navigate(SignUp.name);
  };

  const goToHome = () => {
    navigation.navigate(Home.name);
  };

  return (
    <SignScaffold>
     <Image style={styles.logo} source={logo} resizeMode='center' />
    
      <View style={styles.form}>
        <View>
          <Text style={styles.headerTitle}>Sign in</Text>
        
        </View>
        <KeyboardAvoidingView behavior={behavior}>
        <Text style={
                    {
                      color: '#146A7F',
                      fontSize: 16,
                      fontFamily: 'Mulish-SemiBold',
                    }}>
                    Email
        </Text>
          <TextInput
              style={styles.input}
              placeholder='Email'
              placeholderTextColor="#aaaaaa"
              //onChangeText={(text) => this.setState({email: text})}
              //value={this.state.email}
              underlineColorAndroid="transparent"
              autoCapitalize="none"
            />
             <Text style={
                    {
                      color: '#146A7F',
                      fontSize: 16,
                      fontFamily: 'Mulish-SemiBold',
                    }}>
                    Password
        </Text>
          <TextInput
              style={styles.input}
              placeholder='Password'
              placeholderTextColor="#aaaaaa"
              //onChangeText={(text) => this.setState({email: text})}
              //value={this.state.email}
              underlineColorAndroid="transparent"
              autoCapitalize="none"
            />
        </KeyboardAvoidingView>

        <TouchableOpacity style={styles.forgotButtonBox}>
          <Text style={styles.infoText}>Forgot your password?</Text>
        </TouchableOpacity>
        <Button
          onPress={goToHome}
          bgColour="#146A7F"
          txtColour="#FFF"
          text="Sign in"
        />
        <View style={styles.footer}>
          <Text style={styles.infoText}>Don’t have an account?</Text>
          <TouchableOpacity onPress={goToSignUp}>
            <Text style={[styles.infoText, styles.greenInfoText]}>Sign up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SignScaffold>
  );
};

const styles = EStyleSheet.create({
  logo: {
    alignSelf:'center',
    height:heightScreen * 0.35,
    width: widthScreen * 0.3
  },
  form: {
    paddingHorizontal: widthScreen * 0.06,
  },
  input: {
    width: widthScreen * 0.9,
    height: 45,
    borderRadius: 5,
    overflow: 'hidden',
    backgroundColor: '#eee',
    marginTop: 10,
    marginBottom: 10,
    alignSelf:'center'
  },
  headerTitle: {
    fontSize: '1.625rem',
    lineHeight: '1.625rem',
    height: '1.625rem',
    fontFamily: 'Mulish-SemiBold',
    marginBottom: heightScreen * 0.05,
    color: '$blackColour',
    textAlign:'center'
  },
  headerSubtitle: {
    fontSize: '1rem',
    lineHeight: '1rem',
    height: '1rem',
    fontFamily: 'Mulish-Regular',
    marginBottom: heightScreen * 0.045,
    color: '#7C7C7C',
  },
  forgotButtonBox: {
    alignItems: 'flex-end',
    marginBottom: heightScreen * 0.033,
  },
  infoText: {
    fontFamily: 'Mulish-Medium',
    fontSize: '0.875rem',
    color: '$blackColour',
    letterSpacing: '0.05rem',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: heightScreen * 0.028,
  },
  greenInfoText: {
    color: '#146A7F',
    marginLeft: 5.0,
  },
});

export default {component: Signin, name: 'Signin'};
