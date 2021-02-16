import React from 'react';
import {View, Text, Image, Dimensions , StatusBar} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import Button from '../components/Button';
import SignIn from './SignIn';
console.disableYellowBox = true;
const backgroundImage = require('../assets/Images/onboarding-background.jpg');

const {width: screenWidth, height: screenHeight} = Dimensions.get('screen');
interface OnboardingProps {
  navigation: any;
}

const Onboarding = ({navigation}: OnboardingProps) => {
  const nextScreen = () => {
    navigation.navigate(SignIn.name);
  };

  return (
    <>
    <StatusBar barStyle = "light-content" hidden = {true} />
      <Image style={styles.backgroundImage} source={backgroundImage} resizeMode='cover' />
      <View style={styles.topper}>
        <Text style={styles.title}>Welcome</Text>
        <Text style={styles.subtitle}>
          Your are few steps away....
        </Text>
       
      </View>
      <View style={styles.footer}>
        
        <Button
          onPress={() => nextScreen()}
          bgColour="#146A7F"
          txtColour="#FFF"
          text="Continue..."
        />
      </View>
    </>
  );
};

const styles = EStyleSheet.create({
  backgroundImage: {
    width: screenWidth,
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    width: screenWidth,
    alignItems: 'center',
    paddingHorizontal: screenWidth * 0.073,
    paddingBottom: screenHeight * 0.057,
  },
  topper: {
    position: 'absolute',
    top: 100,
    width: screenWidth,
    paddingHorizontal: screenWidth * 0.073,
    paddingBottom: screenHeight * 0.057,
  },
  logoImage: {
    marginBottom: screenHeight * 0.039,
  },
  title: {
    fontFamily: 'Mulish-Bold',
    fontSize: 48,
    color:'#000'
  },
  subtitle: {
    fontFamily: 'Mulish-Bold',
    fontSize: 22,
    color:'#000',
 
  },
});

export default {component: Onboarding, name: 'Onboarding'};
