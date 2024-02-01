import React from 'react';

import {  Text,TouchableOpacity, TextInput, View, ImageBackground } from 'react-native';
import { styled } from 'nativewind';
import bg from "../assets/bg1.jpg";




const Final = ({ route }) => {

    const {result} = route.params;
    const StyledView = styled(View);
    const StyledText = styled(Text);
    
    return ( 
        <ImageBackground source={bg} style={{width: '100%', height: '100%'}}>

            <StyledView className=' p-2 h-screen flex justify-center items-center pb-32 shadow-lg'  >
                <StyledView className=' bg-white mt-10  rounded-lg p-8 items-center' style={{elevation: 10}}>
                <StyledText className=' font-medium text-3xl'>The result is :</StyledText>
                <StyledText className=' font- font-medium text-2xl pt-6'>{result}</StyledText>
                </StyledView>
            </StyledView>

        </ImageBackground>
     );
}
 
export default Final;