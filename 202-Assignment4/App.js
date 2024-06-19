import { SafeAreaView, ScrollView} from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomePage from "./Components/HomePage";
import LoginPage from "./Components/LoginPage";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
              <Stack.Navigator initialRouteName="Login Screen">
                <Stack.Screen name="Login Screen" component={LoginPage}  options={{ headerShown: false }}/>
                <Stack.Screen name="Home Screen" component={HomePage}  options={{ headerShown: false }}/>
              </Stack.Navigator>
    </NavigationContainer>

   
  );
}
