import React from 'react';
import {
  View,
  Text,
  TextInput,
  StatusBar,
  KeyboardAvoidingView,
  Platform,
  Dimensions,
  Alert,
} from 'react-native';

import Button from '../components/Button';
import EStyleSheet from 'react-native-extended-stylesheet';
import SignScaffold from '../components/SignScaffold';
import Home from './Home';
const {width: widthScreen, height: heightScreen} = Dimensions.get('window');
const textStyle = { textAlign: 'center', color: '#696969', fontWeight: 'bold' };


interface  StepfiveProps {
  navigation: any;
}

const  Stepfive = ({navigation}:  StepfiveProps) => {
  const behavior = Platform.OS === 'ios' ? 'padding' : undefined;

  const goToHome = () => {
    navigation.navigate(Home);
  };

  return (
    <SignScaffold><StatusBar hidden = {true} />
      <View style={styles.form}>
        <View>
          <Text style={styles.headerTitle}>Enter Documents Details</Text>
          
        </View>
      
      <KeyboardAvoidingView behavior={behavior}>
      <Text style={
                  {
                    color: '#146A7F',
                    fontSize: 16,
                    fontFamily: 'Mulish-SemiBold',
                  }}>
                  Licence no
        </Text>
      <TextInput
                  style={styles.input}
                  placeholder='Licence no'
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
                  Vehical no
        </Text>
      <TextInput
                  style={styles.input}
                  placeholder=' Vehical no'
                  placeholderTextColor="#aaaaaa"
                  //onChangeText={(text) => this.setState({email: text})}
                  //value={this.state.email}
                  underlineColorAndroid="transparent"
                  autoCapitalize="none"
                />
      </KeyboardAvoidingView>

    
      <Button
        onPress={goToHome}
        bgColour="#146A7F"
        txtColour="#FFF"
        text="Next"
      />
        
      </View>
    </SignScaffold>
  );
};

const styles = EStyleSheet.create({
  logo: {
    alignSelf:'center',
    height:heightScreen * 0.28,
    width: widthScreen * 0.3
  },
  form: {
    paddingHorizontal: widthScreen * 0.06,
    paddingVertical: heightScreen * 0.35
  },
  headerTitle: {
    fontSize: '1.625rem',
    lineHeight: '1.625rem',
    height: '1.625rem',
    fontFamily: 'Mulish-SemiBold',
    marginBottom: heightScreen * 0.017,
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
  termsBox: {
    justifyContent: 'center',
    alignItems: 'flex-start',
    marginBottom: heightScreen * 0.033,
  },
  infoText: {
    justifyContent: 'center',
    alignItems: 'center',
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
  input: {
    width: widthScreen * 0.9,
    height: 45,
    borderRadius: 5,
    overflow: 'hidden',
    backgroundColor: '#eee',
    marginTop: 10,
    marginBottom: 10,
    alignSelf: 'center'
  },
  greenInfoText: {
    color: '#146A7F',
    marginLeft: 5.0,
  },
});

export default {component:  Stepfive, name: ' Stepfive'};
