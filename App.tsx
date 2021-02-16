import 'react-native-gesture-handler';
import React from 'react';
import {StatusBar} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import Onboarding from './src/screens/Onboarding';
import SignIn from './src/screens/SignIn';
import SignUp from './src/screens/SignUp';
import Home from './src/screens/Home';
import Stepone from './src/screens/Stepone';

import Steptwo from './src/screens/Steptwo';
import Stepthree from './src/screens/Stepthree';
import Stepfive from './src/screens/Stepfive';
import Stepfour from './src/screens/Stepfour';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const {Navigator, Screen} = createStackNavigator();

const App = () => {

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <NavigationContainer>
        <Navigator
          screenOptions={{
            headerShown: false,
          }}>
          
         
          <Screen name={Onboarding.name} component={Onboarding.component} />
          <Screen name={SignIn.name} component={SignIn.component} />
          <Screen name={SignUp.name} component={SignUp.component} />
        <Screen name={Stepone.name} component={Stepone.component} />
         <Screen name={Steptwo.name} component={Steptwo.component} />
         <Screen name={Stepthree.name} component={Stepthree.component} />
       
         <Screen name={Stepfour.name} component={Stepfour.component} />
         < Screen name={Stepfive.name} component={Stepfive.component} />
         <Screen name={Home.name} component={Home.component} />
        </Navigator>
      </NavigationContainer>
    </>
  );
};

EStyleSheet.build({
  $colorofapp: '#146A7F',
  $blackColour: '#181725',
});

export default App;
