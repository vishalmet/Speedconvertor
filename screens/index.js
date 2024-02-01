import React from 'react';
import {  Text,TouchableOpacity, Image, Button, TextInput, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styled } from 'nativewind';
import { ImageBackground } from 'react-native';
import bg from "../assets/bg.jpg";



const  StyledView = styled(View);
const StyledText = styled(Text);





const Main = () => {

    const navigation = useNavigation();

    const navigateToweight = () => {
        navigation.navigate('Weight calculator');
  
    }

    const navigateTospeed = () => {
        navigation.navigate('Speed calculator');
  
    }

    return (
        <ImageBackground source={bg} style={{width: '100%', height: '100%'}}>
        
        <StyledView className=' h-screen flex justify-center pb-36'  >
            <StyledText className='text-center text-white  text-3xl p-8'>What do you want to convert?</StyledText>
              <TouchableOpacity
            style={{ backgroundColor: '#FFFFFF', borderRadius: 10, padding: 8, alignItems: 'center', elevation: 10, marginHorizontal: 72, marginTop: 20 }} onPress={navigateToweight}>
            <StyledText className=' text-2xl '>Weight ⚖️</StyledText>
            </TouchableOpacity>     
            <TouchableOpacity
            style={{ backgroundColor: '#FFFFFF', borderRadius: 10,  borderWidth: 1, borderColor: '#ffffff', padding: 8, alignItems: 'center', elevation: 10, marginHorizontal: 72, marginTop: 20 }} onPress={navigateTospeed}>
            <StyledText className=' text-2xl'>Speed ⌛</StyledText>
            </TouchableOpacity>
            

        </StyledView>

      </ImageBackground>
     );
}
 
export default Main;