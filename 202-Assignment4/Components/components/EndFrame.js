import {View, Text, Image, Button, } from "react-native";


export default function EndFrame() {
  return (
       <View style={{marginTop:40, display:"flex", justifyContent:"space-between", alignItems:"center"}}>
            <View style={{width:"100%"}}>
                <View style={{borderWidth:0.5, textAlign:"center", borderColor:"#AFB0B6"}}></View>
                <Text style={{color:"#AFB0B6", textAlign:"center", transform: [{ translateY: -12 }], backgroundColor:"white", alignSelf:"center", paddingHorizontal:20}}>Or continue with</Text>
            </View>
            <View style = {{display:"flex", flexDirection:"row", marginVertical:10, gap:20}}>
                <View style={{padding:20, backgroundColor:"white", borderRadius:50}}>
                    <Image source={require("../../assets/appleOne.png")} style={{width:30, height:30}}/>
                </View>
                <View style={{padding:20, backgroundColor:"white", borderRadius:50}}>
                    <Image source={require("../../assets/facebookOne.png")} style={{width:30, height:30}}/>
                </View>
                <View style={{padding:20, backgroundColor:"white", borderRadius:50}}>
                    <Image source={require("../../assets/google.png")} style={{width:30, height:30}}/>
                </View>
            </View>
            <Text style={{color:"#AFB0B6"}}>Haven't an account? <Text style={{color:"#1877F2"}}>Register</Text></Text>
       </View>
  );
}
