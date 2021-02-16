import React from 'react';
import {
  View,
  Text,
  StatusBar,
  Dimensions,
} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import SignScaffold from '../components/SignScaffold';
import Stepfour from './Stepfour';
import ReactNativeItemSelect from 'react-native-item-select';
const { width: widthScreen, height: heightScreen } = Dimensions.get('window');
const data = [
  { displayName: 'Tata', },
  { displayName: 'Tesla', },
  { displayName: 'Audi', },
  { displayName: 'BMW', },
  { displayName: 'Ford', },
  { displayName: 'Toyota', },
  { displayName: 'Maruti', },
  { displayName: 'Honda', },

];
interface StepthreeProps {
  navigation: any;
}

const Stepthree = ({ navigation }: StepthreeProps) => {



  const goToHome = () => {
    navigation.navigate(Home);
  };

  return (
    <SignScaffold>
      <StatusBar hidden={true} />
      <View style={styles.form}>
        <View>
          <Text style={styles.headerTitle}>Select your Vechical make</Text>

        </View>
        <ReactNativeItemSelect
          data={data}
          countPerRow={2}
          itemComponent={
            item => (
              <View>

                <Text style={{ fontFamily: 'Mulish-SemiBold', }}>{item.displayName}</Text>
              </View>
            )
          }
          onSubmit={item => navigation.navigate(Stepfour)}
        // onSubmit={item => navigate('Result')}
        />


      </View>
    </SignScaffold>
  );
};

const styles = EStyleSheet.create({
  logo: {
    alignSelf: 'center',
    height: heightScreen * 0.28,
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
    textAlign: 'center'
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
  greenInfoText: {
    color: '#146A7F',
    marginLeft: 5.0,
  },
});

export default { component: Stepthree, name: ' Stepthree' };
