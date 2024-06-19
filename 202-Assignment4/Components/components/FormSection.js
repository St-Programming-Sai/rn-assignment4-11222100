import { useState } from "react";
import {View, Text, TextInput, Button, Alert, } from "react-native";
import { useNavigation } from '@react-navigation/native';


export default function FormSection() {
    const [userName, setUserName] = useState("")
    const [email, setEmail] = useState("")

    const navigation = useNavigation();

    function handleUserInput(){
        if (userName && email){
            navigation.push('Home Screen', {name:userName, email:email});
        }else{
            Alert.alert('Error', 'Please provide both username and email.');
        }
    }
    return (
        <View style={{            
            display:"flex",
            marginVertical:15,
            gap:20
            
            }}>
            <TextInput placeholder="Name" value={userName} onChangeText={setUserName} style={{borderWidth:1, borderRadius:10, height:60, paddingHorizontal:10}}/>
            <TextInput placeholder="Email" value={email} onChangeText={setEmail}  keyboardType="email-address" style={{borderWidth:1, borderRadius:10, height:60, paddingHorizontal:10}}/>
            <Button title="Log in" onPress={handleUserInput}/>
        </View>
  );
}
