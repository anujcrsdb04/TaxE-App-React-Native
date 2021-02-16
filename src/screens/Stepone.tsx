import React from 'react';
import {
  View,
  Text,
  Platform,
  Dimensions,
} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { ProgressSteps, ProgressStep } from 'react-native-progress-steps';
import SignScaffold from '../components/SignScaffold';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ReactNativeItemSelect from 'react-native-item-select';
import Stepthree from './Stepthree';
const { width: widthScreen, height: heightScreen } = Dimensions.get('window');
interface SteponeProps {
  navigation: any;
}
const data = [
  { displayName: '2 Wheeler', },
  { displayName: '4 Wheeler',},

];
const Stepone = ({ navigation }: SteponeProps) => {
  const behavior = Platform.OS === 'ios' ? 'padding' : undefined;
  const [mobileno, setmobileno] = React.useState('')

  const goToSignIn = () => {
    navigation.pop();
  };

  const goToHome = () => {
    //alert(mobileno);
    //storeData(mobileno);
    navigation.navigate(Stepone);
  };
  const onChangeTextno = (text) => {

    setmobileno(text);
  };
  const storeData = async (val) => {
    console.log(val)
    try {
      await AsyncStorage.setItem('MOBILE_NO', val)
    } catch (e) {
      // saving error
    }
  }
  const onNextStep = (count) => {
    alert(count);
  }

  const onSubmit = () => {
    navigation.navigate(Stepone);
  }
  const [date, setDate] = React.useState(new Date(1598051730000));
  const [mode, setMode] = React.useState('date');
  const [show, setShow] = React.useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  const showTimepicker = () => {
    showMode('time');
  };
  return (
    <SignScaffold>
      <View style={{ flex: 1, alignSelf: 'center', marginTop: heightScreen * 0.1 }}>
        <Text style={styles.headerTitle}>Personal Info</Text>
        <Text style={styles.headerSubtitle}>Enter your details</Text>
      </View><View style={{ flex: 1 }}>
        <ProgressSteps>
          <ProgressStep label="Vehocal typ" onNext={() => { onNextStep(1) }} nextBtnTextStyle={styles.previousBtnTextStyles} nextBtnStyle={styles.nextBtnStyles}>
            <View style={styles.form}>
            <ReactNativeItemSelect
        data={data}
        itemComponent={
          item => (
            <View>
              
                <Text style={{fontFamily: 'Mulish-SemiBold',}}>{item.displayName}</Text>
            </View>
          )
        }
         onSubmit={item => navigation.navigate(Stepthree)}
      />

            </View>
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
  },
  yearstyle: {
    width: widthScreen * 0.15,
    height: 45,
    borderRadius: 5,
    overflow: 'hidden',
    backgroundColor: '#eee',
    marginTop: 10,
    marginBottom: 10,
  },
  daystyle: {
    width: widthScreen * 0.25,
    height: 45,
    borderRadius: 5,
    overflow: 'hidden',
    backgroundColor: '#eee',
    marginTop: 10,
    marginBottom: 10,
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

export default { component: Stepone, name: 'Stepone' };
