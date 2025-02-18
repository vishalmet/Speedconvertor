import React, {useState, useEffect} from 'react';
import {  Text,TouchableOpacity, Button, TextInput, View } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import { useNavigation } from '@react-navigation/native';
import { styled } from 'nativewind';
import bg from "../assets/bg1.jpg";
import { ImageBackground } from 'react-native';



const  StyledView = styled(View);
const StyledText = styled(Text);
const StyledTextInput = styled(TextInput);

const weightUnitOptions = [
    { label: 'Kilogram (Kg)', value: 'kg' },
    { label: 'Pounds (lbs)', value: 'lbs' },
    
  ];

const Selectw = () => {

    const [selectedWeightUnitf, setSelectedWeightUnitf] = useState(null);
    const [selectedWeightUnitt, setSelectedWeightUnitt] = useState(null);
    const [WeightValue, setWeightValue] = useState('');
    const [resultw, setResultw] = useState('');
  
    const navigation = useNavigation();

    useEffect(() => {
      calculateWeight();
  }, [WeightValue, selectedWeightUnitf, selectedWeightUnitt]);

  function calculateWeight() {
    if (selectedWeightUnitf === selectedWeightUnitt) {
      // Display the same value if both weight units are the same
      setResultw(WeightValue + ' ' + selectedWeightUnitf);
    } else if (selectedWeightUnitf === 'kg' && selectedWeightUnitt === 'lbs') {
      // Convert kilograms to pounds
      const weightInPounds = (WeightValue * 2.20462).toFixed(5) + ' lbs';
      setResultw(weightInPounds);
    } else if (selectedWeightUnitf === 'lbs' && selectedWeightUnitt === 'kg') {
      // Convert pounds to kilograms
      const weightInKilograms = (WeightValue / 2.20462).toFixed(5) + ' kg';
      setResultw(weightInKilograms);
    } else {
      // Default case when units are not matched
      setResultw('Invalid conversion');
    }
  }

  const navigateToResultScreen = () => {
    // Navigate to 'ResultScreen' and pass the 'result' as a parameter
    navigation.navigate('finalw', { resultw  });
  };
 
  

    return ( 

      <ImageBackground source={bg} style={{width: '100%', height: '100%'}}>

        {/* <StyledView className='p-2 h-screen flex justify-center pb-32'>
        <StyledText className='text-center text-2xl pb-16'>Choose your option</StyledText>
        <StyledText className=' '>Convert from: </StyledText>
        <StyledView className=" flex flex-row  p-2" >
            <StyledView className='flex-1'>
                <RNPickerSelect className=" "
                    placeholder={{ label: 'Select weight unit', value: null }}
                    items={}
                    onValueChange={(value) => setSelectedWeightUnitf(value)}
                    
                />
            </StyledView>
            <StyledView className=''>
                <StyledTextInput className='flex-3 border-2  border-black rounded-md p-2 '
                  keyboardType="numeric"
                  placeholder='Enter value' 
                  onChangeText={(value) => (value)}>
               </StyledTextInput>
            </StyledView>
        </StyledView>


        <StyledText>Convert to: </StyledText>
        <StyledView className="p-2" >
            <StyledView className=''>
                <RNPickerSelect
                    placeholder={{ label: 'Select weight unit', value: null }}
                    items={weightUnitOptions}
                    onValueChange={(value) => setSelectedWeightUnitt(value)}
                    value={selectedWeightUnitt}
                />
            </StyledView>
        </StyledView>

        
        <TouchableOpacity
        style={{ backgroundColor: 'rgb(96, 187, 34)', borderWidth: 1, borderColor: '#ffffff', elevation:10, borderRadius: 10, padding: 8, alignItems: 'center', marginHorizontal: 96, marginTop: 20 }} onPress={navigateToResultScreen}>
        <StyledText style={{ color: 'white', fontSize: 18 }}>Next</StyledText>
        </TouchableOpacity>            
        
    </StyledView> */}

<StyledView className=' h-screen p-2 flex justify-center pb-32'>
          <StyledView className=' bg-white p-2   rounded-lg pt-6 pb-6' style={{elevation: 10}}>
            <StyledText className='text-center font-medium text-3xl pb-16'>Choose your option</StyledText>
            <StyledText className=' pl-2 text-xl '>Convert from: </StyledText>
            <StyledView className=" flex gap-4 flex-row p-2" >
                <StyledView className='flex-1 border-2  border-black rounded-lg'>
                    <RNPickerSelect className="  "
                        placeholder={{ label: 'Select weight unit', color:"red", value: null }}
                        items={weightUnitOptions}
                        onValueChange={(value) => setSelectedWeightUnitf(value)}
                        
                    />
                </StyledView>
                <StyledView className=''>
                    <StyledTextInput className='flex-3 border-2  border-black rounded-lg p-4 '
                      keyboardType="numeric"
                      placeholder='Enter value' 
                      onChangeText={(value) => setWeightValue(value)}>
                   </StyledTextInput>
                </StyledView>
            </StyledView>


            <StyledText className=' pl-2 text-xl'>Convert to: </StyledText>
            <StyledView className="p-2" >
                <StyledView className=' border-2  border-black rounded-lg'>
                    <RNPickerSelect
                        placeholder={{ label: 'Select weight unit', color:"red", value: null }}
                        items={weightUnitOptions}
                        onValueChange={(value) => setSelectedWeightUnitt(value)}
                        value={selectedWeightUnitt}
                    />
                </StyledView>
            </StyledView>

            
          <TouchableOpacity
            style={{ backgroundColor: '#F99595', borderRadius: 10, padding: 8, alignItems: 'center', elevation: 10, marginHorizontal: 96, marginTop: 20 }} onPress={navigateToResultScreen}>
            <StyledText style={{ fontSize: 18 }}>Next</StyledText>
          </TouchableOpacity>           
          </StyledView>  
        </StyledView>
    </ImageBackground>
     );
}
 
export default Selectw;