import { View, Image, TextInput, TouchableOpacity} from "react-native";

export default function Search() {
  return (
    <View>
        <View 
          style={{
              width:"354px",
              height:"52px",
              borderColor: 'black', 
              display:"flex",
              justifyContent:"space-between",
              flexDirection:"row", 
              marginTop:20}}>
                <View 
                    style={{
                        display:"flex",
                        justifyContent:"space-between",
                        alignItems:"center",
                        flexDirection:"row",
                        gap:15
                    }}>
                        <View style={{
                            backgroundColor:"#F2F2F3",
                            borderRadius:15,
                            width:"78%",
                            display:"flex",
                            alignItems:"center",
                            flexDirection:"row"
                         }}>
                            <Image source={require('../../assets/search.1 1.png')} style={{marginLeft:20}}/>
                            <TextInput placeholder="Search a job or position" placeholderTextColor="#95969D" style={{
                                padding:12,
                                width:"100%"
                            }}/>
                        </View>
                        <View>
                            <TouchableOpacity style={{backgroundColor:"#F2F2F3", padding:15, borderRadius:15}}>
                                <Image source={require("../../assets/filter.5.png")}/>
                            </TouchableOpacity>
                        </View>
                </View>
              </View>
    </View>
  );
}
