import React from 'react';
import {
  View,
  Text,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  Dimensions,
} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { ProgressSteps, ProgressStep } from 'react-native-progress-steps';
import SignScaffold from '../components/SignScaffold';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Steptwo from './Steptwo';
import Home from './Home';
const { width: widthScreen, height: heightScreen } = Dimensions.get('window');
interface SignUpProps {
  navigation: any;
}

const SignUp = ({ navigation }: SignUpProps) => {
  const behavior = Platform.OS === 'ios' ? 'padding' : undefined;
  const [mobileno, setmobileno] = React.useState('')
  const [fullname, setfullname] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [cardno, setcardno] = React.useState('');
  const [datedayval, setdatedayval] = React.useState('');
  const [datemonthval, setdatemonthval] = React.useState('');
  const [dateyearval, setdateyearval] = React.useState('');
  const [addresshouseno, setaddresshouseno] = React.useState('');
  const [addresscity, setaddresscity] = React.useState('');
  const [addressstate, setaddressstate] = React.useState('');
  const [addresspincode, setaddresspincode] = React.useState('');




  const storeData = async (a) => {
    try {
      await AsyncStorage.setItem('PersonalInfo', JSON.stringify(a));
      navigation.navigate(Steptwo);
    } catch (error) {
      // Error saving data
    }
  }


  const onSubmit = () => {
    var array = [];
    array.push({
      Mobile: mobileno,
      Fullname: fullname,
      Email: email,
      Votercardno: cardno,
      DOB: datedayval + ' ' + datemonthval + ' ' + dateyearval,
      Address: addresshouseno + ' ' + addresscity + ' ' + addressstate + ' ' + addresspincode

    });
    
    storeData(array)
  
  }

  return (
    <SignScaffold>
      <View style={{ flex: 1, alignSelf: 'center', marginTop: heightScreen * 0.1 }}>
       
        <Text style={styles.headerTitle}>Personal Info</Text>
        <Text style={styles.headerSubtitle}>Enter your details</Text>
      </View><View style={{ flex: 1 }}>
        <ProgressSteps>
          <ProgressStep label="Mobile no" nextBtnTextStyle={styles.previousBtnTextStyles} nextBtnStyle={styles.nextBtnStyles}>
            <View style={styles.form}>
              <View>


              </View>
              <KeyboardAvoidingView behavior={behavior}>
                <Text style={
                  {
                    color: '#146A7F',
                    fontSize: 16,
                    fontFamily: 'Mulish-SemiBold',
                  }}>
                  Mobile no
        </Text>
                <TextInput
                  style={styles.input}
                  placeholder='Mobile no'
                  placeholderTextColor="#aaaaaa"
                  onChangeText={(text) => setmobileno(text)}
                  value={mobileno}
                  underlineColorAndroid="transparent"
                  autoCapitalize="none"
                  maxLength={10}
                  keyboardType={'number-pad'}
                />
                <View style={{ marginTop: heightScreen * 0.011 }} />

              </KeyboardAvoidingView>

              <View style={styles.termsBox}>
                <Text style={styles.infoText}>
                  By continuing you agree to our{' '}
                  <Text style={[styles.infoText, styles.greenInfoText]}>
                    Terms of Service
            </Text>{' '}
            and{' '}
                  <Text style={[styles.infoText, styles.greenInfoText]}>
                    Privacy Policy
            </Text>
            .
          </Text>
              </View>

            </View>
          </ProgressStep>
          <ProgressStep label="Info" previousBtnDisabled={true} nextBtnTextStyle={styles.previousBtnTextStyles} nextBtnStyle={styles.nextBtnStyles}>
            <View style={styles.form}>

              <KeyboardAvoidingView behavior={behavior}>
                <Text style={
                  {
                    color: '#146A7F',
                    fontSize: 16,
                    fontFamily: 'Mulish-SemiBold',
                  }}>
                  Full name
        </Text>
                <TextInput
                  style={styles.input}
                  placeholder='Full name'
                  placeholderTextColor="#aaaaaa"
                  onChangeText={(text) => setfullname(text)}
                  value={fullname}
                  underlineColorAndroid="transparent"
                  autoCapitalize="none"
                />
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
                  onChangeText={(text) => setEmail(text)}
                  value={email}
                  keyboardType={'email-address'}
                  underlineColorAndroid="transparent"
                  autoCapitalize="none"
                />
                <Text style={
                  {
                    color: '#146A7F',
                    fontSize: 16,
                    fontFamily: 'Mulish-SemiBold',
                  }}>
                  Aadhar/Voter Card no
        </Text>
                <TextInput
                  style={styles.input}
                  placeholder='Aadhar/Voter Card no'
                  placeholderTextColor="#aaaaaa"
                  onChangeText={(text) => setcardno(text)}
                  value={cardno}

                  maxLength={16}
                  keyboardType={'number-pad'}
                  underlineColorAndroid="transparent"
                  autoCapitalize="none"
                />
              </KeyboardAvoidingView>



            </View>
          </ProgressStep>
          <ProgressStep label="DOB" previousBtnTextStyle={styles.previousBtnTextStyles} nextBtnTextStyle={styles.previousBtnTextStyles} nextBtnStyle={styles.nextBtnStyles}>
            <View style={styles.form}><KeyboardAvoidingView behavior={behavior}>
              <Text style={
                {
                  color: '#146A7F',
                  fontSize: 16,
                  fontFamily: 'Mulish-SemiBold',
                }}>
                Date of Birth
        </Text>
              <View style={{ width: widthScreen * 0.90, flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center' }}>
                <TextInput
                  style={styles.yearstyle}
                  placeholder='Day'
                  placeholderTextColor="#aaaaaa"
                  onChangeText={(text) => setdatedayval(text)}
                  value={datedayval}
                  maxLength={2}
                  keyboardType={'number-pad'}
                  underlineColorAndroid="transparent"
                  autoCapitalize="none"
                />
                <Text style={
                  {
                    color: '#146A7F',
                    fontSize: 35,
                    fontFamily: 'Mulish-SemiBold',
                  }}>
                  /
        </Text><TextInput
                  style={styles.monthstyle}
                  placeholder='Month'
                  placeholderTextColor="#aaaaaa"
                  onChangeText={(text) => setdatemonthval(text)}
                  value={datemonthval}
                  maxLength={2}
                  keyboardType={'number-pad'}
                  underlineColorAndroid="transparent"
                  autoCapitalize="none"
                />
                <Text style={
                  {
                    color: '#146A7F',
                    fontSize: 35,
                    fontFamily: 'Mulish-SemiBold',
                  }}>
                  /
        </Text><TextInput
                  style={styles.daystyle}
                  placeholder='Year'

                  maxLength={4}
                  keyboardType={'number-pad'}
                  placeholderTextColor="#aaaaaa"
                  onChangeText={(text) => setdateyearval(text)}
                  value={dateyearval}
                  underlineColorAndroid="transparent"
                  autoCapitalize="none"
                />

              </View>


            </KeyboardAvoidingView></View>
          </ProgressStep>
          <ProgressStep label="Address" onSubmit={() => { onSubmit() }} previousBtnTextStyle={styles.previousBtnTextStyles} nextBtnTextStyle={styles.previousBtnTextStyles} nextBtnStyle={styles.nextBtnStyles}>
            <View style={styles.form}><KeyboardAvoidingView behavior={behavior}>
              <Text style={
                {
                  color: '#146A7F',
                  fontSize: 18,
                  fontFamily: 'Mulish-SemiBold',
                }}>
                Address
        </Text>
              <View style={{ width: widthScreen * 0.91, flexDirection: 'row', justifyContent: 'space-evenly', }}>
                <TextInput
                  style={styles.halfinput}
                  placeholder='House no'
                  placeholderTextColor="#aaaaaa"
                  onChangeText={(text) => setaddresshouseno(text)}
                  value={addresshouseno}
                  maxLength={5}
                  keyboardType={'number-pad'}
                  underlineColorAndroid="transparent"
                  autoCapitalize="none"
                />

                <TextInput
                  style={styles.halfinput}
                  placeholder='City'
                  placeholderTextColor="#aaaaaa"
                  onChangeText={(text) => setaddresscity(text)}
                  value={addresscity}
                  underlineColorAndroid="transparent"
                  autoCapitalize="none"
                />


              </View>
              <View style={{ width: widthScreen * 0.91, flexDirection: 'row', justifyContent: 'space-evenly', }}>
                <TextInput
                  style={styles.halfinput}
                  placeholder='State'
                  placeholderTextColor="#aaaaaa"
                  onChangeText={(text) => setaddressstate(text)}
                  value={addressstate}
                  underlineColorAndroid="transparent"
                  autoCapitalize="none"
                />

                <TextInput
                  style={styles.halfinput}
                  placeholder='Pin Code'
                  placeholderTextColor="#aaaaaa"
                  onChangeText={(text) => setaddresspincode(text)}
                  value={addresspincode}
                  maxLength={6}
                  keyboardType={'number-pad'}
                  underlineColorAndroid="transparent"
                  autoCapitalize="none"
                />


              </View>

            </KeyboardAvoidingView></View>
          </ProgressStep>
        </ProgressSteps>
      </View>

    </SignScaffold>
  );
};

const styles = EStyleSheet.create({
  previousBtnTextStyles: {
    color: '#fff',
    fontSize: 18,
    fontFamily: 'Mulish-SemiBold',
  },
  halfinput: {
    width: widthScreen * 0.43,
    height: 45,
    borderRadius: 5,
    overflow: 'hidden',
    backgroundColor: '#eee',
    marginTop: 10,
    marginBottom: 10,
  },
  monthstyle: {
    width: widthScreen * 0.15,
    height: 45,
    borderRadius: 5,
    overflow: 'hidden',
    backgroundColor: '#eee',
    marginTop: 10,
    marginBottom: 10,
    textAlign: 'center',
  },
  yearstyle: {
    width: widthScreen * 0.15,
    height: 45,
    borderRadius: 5,
    overflow: 'hidden',
    backgroundColor: '#eee',
    marginTop: 10,
    marginBottom: 10,
    textAlign: 'center'
  },
  daystyle: {
    width: widthScreen * 0.25,
    height: 45,
    borderRadius: 5,
    overflow: 'hidden',
    backgroundColor: '#eee',
    marginTop: 10,
    marginBottom: 10,
    textAlign: 'center'
  },
  nextBtnStyles: {
    backgroundColor: '#146A7F', paddingHorizontal: 20, borderRadius: 10
  },
  form: {
    paddingHorizontal: widthScreen * 0.06,
  },
  form1: {
    paddingVertical: heightScreen * 0.2,
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
  headerTitle: {
    fontSize: '1.625rem',
    lineHeight: '1.625rem',
    height: '1.625rem',
    fontFamily: 'Mulish-SemiBold',
    marginBottom: heightScreen * 0.017,
    color: '$blackColour',
    textAlign: 'center'
  },
  headerSubtitle: {
    fontSize: '1rem',
    lineHeight: '1rem',
    height: '1rem',
    fontFamily: 'Mulish-Regular',
    marginBottom: heightScreen * 0.045,
    color: '#7C7C7C',
    textAlign: 'center'
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
  greenInfoText: {
    color: '#146A7F',
    marginLeft: 5.0,
  },
});

export default { component: SignUp, name: 'SignUp' };
