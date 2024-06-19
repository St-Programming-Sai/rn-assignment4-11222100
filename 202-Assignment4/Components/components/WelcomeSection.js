import {View, Text, } from "react-native";


export default function WelcomeSection() {
  return (
            <View style={{marginVertical:20}}>
              <Text style={{color:"#356899", fontWeight:"800", fontSize:22, marginVertical:5}}>Jobizz</Text>
              <Text style={{fontSize:25, fontWeight:"bold"}}>Welcome Back 👋</Text>
              <Text style={{opacity:0.5, marginVertical:5}}>Let's login, Apply to jobs</Text>
            </View>   
  );
}
