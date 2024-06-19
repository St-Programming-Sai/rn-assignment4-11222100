import { SafeAreaView, View, Text, } from "react-native";
import WelcomeSection from "./components/WelcomeSection";
import FormSection from "./components/FormSection";
import EndFrame from "./components/EndFrame";


export default function LoginPage({ navigatgion }) {
  return (
        <SafeAreaView style={{ backgroundColor:"#FAFAFD",  height:"100%", padding:20}}>
           <WelcomeSection/>
           <FormSection/> 
           <EndFrame />
        </SafeAreaView>
   
  );
}
