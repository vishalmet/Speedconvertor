import {  Text,TouchableOpacity, TextInput, View } from 'react-native';
import { styled } from 'nativewind';
import bg from "../assets/bg1.jpg";
import { ImageBackground } from 'react-native';



const Finalw = ({ route }) => {

    const {resultw} = route.params;
    const StyledView = styled(View);
    const StyledText = styled(Text);
    
    return ( 
    //     <StyledView className=' p-2 h-screen flex justify-center items-center pb-32 shadow-lg'  >
    //     <StyledView className=' bg-green-400 border-2  rounded-lg p-8 items-center' style={{elevation: 10}}>
    //     <StyledText className=' font-medium text-3xl'>The result is :</StyledText>
    //     <StyledText className=' font-semibold text-2xl pt-6'>{resultw}</StyledText>
    //     </StyledView>
       
    // </StyledView>

    <ImageBackground source={bg} style={{width: '100%', height: '100%'}}>

        <StyledView className=' p-2 h-screen flex justify-center items-center pb-32 shadow-lg'  >
            <StyledView className=' bg-white mt-10  rounded-lg p-8 items-center' style={{elevation: 10}}>
            <StyledText className=' font-medium text-3xl'>The result is :</StyledText>
            <StyledText className=' font- font-medium text-2xl pt-6'>{resultw}</StyledText>
            </StyledView>
        </StyledView>

    </ImageBackground>
     );
}
 
export default Finalw;