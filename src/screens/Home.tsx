import React, { Component } from 'react';
import {
  View,
  Text,
  Alert,
  Dimensions,
  TouchableOpacity,
  KeyboardAvoidingView,
  Image,
  SafeAreaView,
  StatusBar,
  ScrollView,
  TextInput,
  Platform
} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

import AsyncStorage from '@react-native-async-storage/async-storage';
import SignIn from './SignIn';
let screenWidth = Dimensions.get('window').width;
let screenHeight = Dimensions.get('window').height;


interface HomeProps {
  navigation: any;
}

const Home = ({ navigation,props }: HomeProps) => {
  const [editable, setaditable] = React.useState(false);
  const [mobileno, setmobileno] = React.useState('7018947047')
  const [fullname, setfullname] = React.useState('Anuj Sharma');
  const [email, setEmail] = React.useState('anujshrki@gmail.com');
  const [cardno, setcardno] = React.useState('1234 4567 1234');
  const [addresshouseno, setaddresshouseno] = React.useState('12');
  const [addresscity, setaddresscity] = React.useState('Mohali');
  const [addressstate, setaddressstate] = React.useState('Punjab');
  const [addresspincode, setaddresspincode] = React.useState('160062');

  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.navigationHeaderContainer}>
        
        <StatusBar backgroundColor='#146A7F' hidden={false}/>
        <TouchableOpacity style={{ position: 'absolute', left: 15, height: 20, width: 20, }}
          onPress={() => { alert('Menu') }}>
          <Image style={{ height: 20, width: 20, tintColor: '#fff' }}
            source={require('../assets/Images/ic_menu.png')} /></TouchableOpacity>
        {editable == true ? null :<TouchableOpacity style={{ position: 'absolute', right: 20, height: 20, }}
          onPress={() => Alert.alert(
            'Logout',
            'Would you like to logout ?',
            [
              {text: 'Cancel', onPress: () => console.log('Cancel Pressed!')},
              {text: 'OK', onPress: () => navigation.navigate(SignIn)},
            ]
          )}><Text  style={{
            color: '#fff',
            fontSize: 16,
            fontFamily: 'Mulish-SemiBold',
          }}>Logout</Text></TouchableOpacity>}
      </View>
      <View style={styles.topContainer}>
        <Image style={styles.userImageContainer}
          source={require('../assets/Images/maxresdefault.jpg')} />
        <Text style={{ marginLeft: 15, marginVertical: 15, color: '#fff', fontFamily: 'Mulish-SemiBold', fontSize: 20 }}>Hello,{"\n"}{fullname== '' ? 'User Name' :fullname}</Text>
      </View>
      {editable == false ? <TouchableOpacity style={{ position: 'absolute', right: 15, justifyContent: 'center', alignItems: 'center', top: screenHeight * 0.17, backgroundColor: '#000', borderRadius: 10, paddingHorizontal: 20, paddingVertical: 5 }}
        onPress={() => { setaditable(true) }}><Text style={
          {
            color: '#fff',
            fontSize: 16,
            fontFamily: 'Mulish-SemiBold',
          }}>
          Edit
            </Text></TouchableOpacity> : <TouchableOpacity style={{ position: 'absolute', right: 15, justifyContent: 'center', alignItems: 'center', top: screenHeight * 0.17, backgroundColor: '#000', borderRadius: 10, paddingHorizontal: 15, paddingVertical: 5 }}
          onPress={() => { setaditable(false) }}><Text style={
            {
              color: '#fff',
              fontSize: 16,
              fontFamily: 'Mulish-SemiBold',
            }}>
            Update
            </Text></TouchableOpacity>}
      {editable == false ?
        <View style={{
          width: screenWidth * 0.95, borderColor: '#eee', borderWidth: 2, padding: 10, borderRadius: 5, marginTop: 10,
          borderBottomRightRadius: 200,
          alignSelf: 'center'
        }}>

          <Text style={
            {
              color: '#146A7F',
              fontSize: 20,
              fontFamily: 'Mulish-SemiBold',
              marginBottom: 10
            }}>
            Personal Information
        </Text>

          <View style={{ flexDirection: 'row', justifyContent: 'center', alignContent: 'center', marginBottom: 10 }}>
            <Image style={{ height: 28, width: 24, backgroundColor: '#FFF', alignSelf: 'center', tintColor: '#146A7F' }}
              source={require('../assets/Images/mobile.png')} resizeMode="contain" />
            <View style={{ flex: 1, paddingHorizontal: 10, }}>
              <Text style={
                {
                  color: '#146A7F',
                  fontSize: 16,
                  fontFamily: 'Mulish-SemiBold',
                }}>
                Mobile no
        </Text>

              <Text style={
                {
                  color: '#000',
                  fontSize: 14,
                  fontFamily: 'Mulish-Medium',
                }}>
                {mobileno}
        </Text>
            </View></View>
          <View style={{ flexDirection: 'row', justifyContent: 'center', alignContent: 'center', marginBottom: 10 }}>
            <Image style={{ height: 28, width: 24, backgroundColor: '#FFF', alignSelf: 'center', tintColor: '#146A7F' }}
              source={require('../assets/Images/email.png')} resizeMode="contain" />
            <View style={{ flex: 1, paddingHorizontal: 10, }}>
              <Text style={
                {
                  color: '#146A7F',
                  fontSize: 16,
                  fontFamily: 'Mulish-SemiBold',
                }}>
                Email
        </Text>

              <Text style={
                {
                  color: '#000',
                  fontSize: 14,
                  fontFamily: 'Mulish-Medium',
                }}>
                {email}
        </Text>
            </View></View>
          <View style={{ flexDirection: 'row', justifyContent: 'center', alignContent: 'center', marginBottom: 10 }}>
            <Image style={{ height: 28, width: 24, backgroundColor: '#FFF', alignSelf: 'center', tintColor: '#146A7F' }}
              source={require('../assets/Images/voter-id.png')} resizeMode="contain" />
            <View style={{ flex: 1, paddingHorizontal: 10, }}>
              <Text style={
                {
                  color: '#146A7F',
                  fontSize: 16,
                  fontFamily: 'Mulish-SemiBold',
                }}>
                Voter/Aadhar Card no
        </Text>

              <Text style={
                {
                  color: '#000',
                  fontSize: 14,
                  fontFamily: 'Mulish-Medium',
                }}>
                {cardno}
        </Text>
            </View></View>
          <View style={{ flexDirection: 'row', justifyContent: 'center', alignContent: 'center', marginBottom: 10 }}>
            <Image style={{ height: 28, width: 24, backgroundColor: '#FFF', alignSelf: 'center', tintColor: '#146A7F' }}
              source={require('../assets/Images/adress.png')} resizeMode="contain" />
            <View style={{ flex: 1, paddingHorizontal: 10, }}>
              <Text style={
                {
                  color: '#146A7F',
                  fontSize: 16,
                  fontFamily: 'Mulish-SemiBold',
                }}>
                Address
        </Text>

              <Text style={
                {
                  color: '#000',
                  fontSize: 14,
                  fontFamily: 'Mulish-Medium',
                }}>
                {addresshouseno + ' ' + addresscity + ' ' + addressstate+ ' ' + addresspincode}
        </Text>
            </View></View>
          <Text style={
            {
              color: '#146A7F',
              fontSize: 20,
              fontFamily: 'Mulish-SemiBold',
              marginBottom: 10
            }}>
            Vehical Information
        </Text>
          <View style={{ flexDirection: 'row', justifyContent: 'center', alignContent: 'center', marginBottom: 10 }}>
            <Image style={{ height: 28, width: 24, backgroundColor: '#FFF', alignSelf: 'center', tintColor: '#146A7F' }}
              source={require('../assets/Images/license.png')} resizeMode="contain" />
            <View style={{ flex: 1, paddingHorizontal: 10, }}>
              <Text style={
                {
                  color: '#146A7F',
                  fontSize: 16,
                  fontFamily: 'Mulish-SemiBold',
                }}>
                Licence no
        </Text>

              <Text style={
                {
                  color: '#000',
                  fontSize: 14,
                  fontFamily: 'Mulish-Medium',
                }}>
                HAPK12321333
        </Text>
            </View></View>
          <View style={{ flexDirection: 'row', justifyContent: 'center', alignContent: 'center', marginBottom: 10, }}>
            <Image style={{ height: 28, width: 24, backgroundColor: '#FFF', alignSelf: 'center', tintColor: '#146A7F' }}
              source={require('../assets/Images/insurance.png')} resizeMode="contain" />
            <View style={{ flex: 1, paddingHorizontal: 10, }}>
              <Text style={
                {
                  color: '#146A7F',
                  fontSize: 16,
                  fontFamily: 'Mulish-SemiBold',
                }}>
                Insurance no
        </Text>

              <Text style={
                {
                  color: '#000',
                  fontSize: 14,
                  fontFamily: 'Mulish-Medium',
                }}>
                1241223444
        </Text>
            </View></View>
          <View style={{ flexDirection: 'row', justifyContent: 'center', alignContent: 'center', marginBottom: 10, }}>
            <Image style={{ height: 28, width: 24, backgroundColor: '#FFF', alignSelf: 'center', tintColor: '#146A7F' }}
              source={require('../assets/Images/rc.png')} resizeMode="contain" />
            <View style={{ flex: 1, paddingHorizontal: 10, }}>
              <Text style={
                {
                  color: '#146A7F',
                  fontSize: 16,
                  fontFamily: 'Mulish-SemiBold',
                }}>
                Vehical Registration no
        </Text>

              <Text style={
                {
                  color: '#000',
                  fontSize: 14,
                  fontFamily: 'Mulish-Medium',
                }}>
                HP74A0838
        </Text>
            </View></View>
        </View> : <KeyboardAvoidingView behavior="padding" >
          <ScrollView style={{
            width: screenWidth * 0.93, paddingTop: 10, marginTop: 10,paddingBottom: 50,
            alignSelf: 'center'
          }} showsVerticalScrollIndicator={false}>
            <Text style={
              {
                color: '#146A7F',
                fontSize: 18,
                fontFamily: 'Mulish-Regular',
                marginBottom: 10
              }}>
              Please fill the Information
        </Text>
            <Text style={
              {
                color: '#146A7F',
                fontSize: 16,
                fontFamily: 'Mulish-SemiBold',
              }}>
              Name
        </Text>
            <TextInput
              style={styles.input}
              placeholder='Full Name'
              placeholderTextColor="#aaaaaa"
              onChangeText={(text) => setfullname(text)}
              value={fullname}
              maxLength={25}
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
              maxLength={20}
              underlineColorAndroid="transparent"
              autoCapitalize="none"
            />
            <Text style={
              {
                color: '#146A7F',
                fontSize: 16,
                fontFamily: 'Mulish-SemiBold',
              }}>
              Aadhar/Voter card no
        </Text>
            <TextInput
              style={styles.input}
              placeholder='Aadhar/Voter card no'
              placeholderTextColor="#aaaaaa"
              onChangeText={(text) => setcardno(text)}
              value={cardno}
              maxLength={16}
              underlineColorAndroid="transparent"
              autoCapitalize="none"
            />
            <View>
              <View style={{ width: screenWidth * 0.93, flexDirection: 'row', justifyContent: 'space-between' }}>
                <View style={{ width: screenWidth * 0.44, }}>
                  <Text style={
                    {
                      color: '#146A7F',
                      fontSize: 16,
                      fontFamily: 'Mulish-SemiBold',
                    }}>
                    House no
        </Text>
                  <TextInput
                    style={styles.halfinput}
                    placeholder='House no'
                    placeholderTextColor="#aaaaaa"
                    onChangeText={(text) => setaddresshouseno(text)}
                    value={addresshouseno}
                    maxLength={4}
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                  /></View>
                <View style={{ width: screenWidth * 0.44, }}>
                  <Text style={
                    {
                      color: '#146A7F',
                      fontSize: 16,
                      fontFamily: 'Mulish-SemiBold',
                    }}>
                    City
        </Text>
                  <TextInput
                    style={styles.halfinput}
                    placeholder='City'
                    placeholderTextColor="#aaaaaa"
                    onChangeText={(text) => setaddresscity(text)}
                    value={addresscity}
                    maxLength={10}
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                  /></View></View>
              <View style={{ width: screenWidth * 0.93, flexDirection: 'row', justifyContent: 'space-between' }}>
                <View style={{ width: screenWidth * 0.44, }}>
                  <Text style={
                    {
                      color: '#146A7F',
                      fontSize: 16,
                      fontFamily: 'Mulish-SemiBold',
                    }}>
                    State
        </Text>
                  <TextInput
                    style={styles.halfinput}
                    placeholder='State'
                    placeholderTextColor="#aaaaaa"
                    onChangeText={(text) => setaddressstate(text)}
                    value={addressstate}
                    maxLength={10}
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                  /></View>
                <View style={{ width: screenWidth * 0.44, }}>
                  <Text style={
                    {
                      color: '#146A7F',
                      fontSize: 16,
                      fontFamily: 'Mulish-SemiBold',
                    }}>
                    Pin Code
        </Text>
                  <TextInput
                    style={styles.halfinput}
                    placeholder='PINCODE'
                    placeholderTextColor="#aaaaaa"
                    value={addresspincode}
                    maxLength={6}
                    onChangeText={(text) => setaddresspincode(text)}
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                  /></View></View>
            </View>
          </ScrollView>
        </KeyboardAvoidingView>

      }

    </SafeAreaView>
  );
};

const styles = EStyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: 'white'
  },
  input: {
    width: screenWidth * 0.93,
    height: 45,
    borderRadius: 5,
    overflow: 'hidden',
    backgroundColor: '#eee',
    marginTop: 10,
    marginBottom: 10,
    paddingLeft: 15
  },
  halfinput: {
    width: screenWidth * 0.45,
    height: 45,
    borderRadius: 5,
    overflow: 'hidden',
    backgroundColor: '#eee',
    marginTop: 10,
    marginBottom: 10,
  },

  topContainer: {
    backgroundColor: '#146A7F',
    flexDirection: 'row',
    paddingVertical: 10,
    borderBottomRightRadius: 200
  },

  navigationHeaderContainer: {
    height:50,
    width: screenWidth,
    color: "blue",
    justifyContent: 'center',
    backgroundColor: '#146A7F'
  },

  navigationHeaderContainerdetailscreen: {
    height: 50,
    width: screenWidth,
    color: "blue",
    justifyContent: 'center',
    backgroundColor: '#146A7F'
  },

  userImageContainer: {
    marginLeft: 15,
    marginVertical: 8,
    height: screenWidth * 0.2,
    width: screenWidth * 0.2,
    backgroundColor: 'lightgrey',
    borderRadius: screenWidth * 0.3,
  },


  topSearchContainer: {
    height: screenWidth * 40 / 375,
    marginLeft: 15,
    marginTop: 15,
    marginBottom: 10,
    width: screenWidth - 30,
    backgroundColor: '#fff',
    flexDirection: 'row',
    borderRadius: 3,
    borderWidth: 2,
    borderColor: '#146A7F'
  },

  bottomContainer: {
    marginHorizontal: 15,
    backgroundColor: 'transparent'
  },


  bottomTabBarContainer: {
    height: 50.0,
    width: screenWidth,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },

  bottomGridContainer: {
    marginLeft: 5,
    width: screenWidth,
    height: screenHeight * 0.26,
    justifyContent: 'center',
    alignContent: 'center'
  },


  bottomGridItemContainer: {
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10,
    marginBottom: 10,
    width: screenWidth * 300 / 375,
    height: screenHeight / 2 - 70,
    flexDirection: 'column',
    justifyContent: 'center',
    borderRadius: 15
  },
  bottomGridItemContainersnd: {
    marginLeft: 5,
    marginRight: 10,
    width: screenWidth * 0.96,
    height: screenHeight * 0.25,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    padding: 0
  },
  bottomGridItemContainersecnd: {
    marginLeft: 5,
    marginRight: 10,
    width: screenWidth * 0.4,
    height: screenHeight * 0.25,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    padding: 0
  },

  detailsHeader: {
    height: 160,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0000FA',
  },

  DetailMainContainer: {
    flex: 1,
  },
  DetailMainContainer1: {
    flex: 1,
    backgroundColor: '#f00'
  },

  detailTopContainer: {
    height: 200,
    width: screenWidth,
    backgroundColor: '#146A7F',
  },

  detailTopBottomSubContainer: {
    width: screenWidth * 0.8,
    backgroundColor: '#146A7F',
    position: 'absolute',
    bottom: 15,
    left: 20,
    right: 15,
  },


  detailListCellContainer: {
    flex: 0,
    width: screenWidth,
    height: screenWidth,
    backgroundColor: 'transparent',
    paddingTop: 10,
    paddingBottom: 10,
  },


  detailListCellContentViewContainer: {
    width: screenWidth - 20,
    height: screenWidth - 10,
    backgroundColor: '#5677f1',
    borderRadius: 10,
    marginRight: 10,
    marginLeft: 10,
  },


  

});

export default { component: Home, name: ' Home' };
