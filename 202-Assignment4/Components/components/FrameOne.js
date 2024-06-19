import { View, Text, Image} from "react-native";

export default function FrameOne({name, email}) {
  return ( 
        <View 
          style={{
              width:"354px",
              height:"52px",
              marginTop:20,
              display:"flex",
              justifyContent:"space-between",
              flexDirection:"row",
              }}>
            <View>
              <View>
                <Text style={{fontSize:23, fontWeight:"bold"}}>{name}</Text>
                <Text style={{fontWeight:"light", opacity:0.5}}>{email}</Text>
              </View>
            </View>
            <View>
              <View style={{
                width:50,
                height:52,
                backgroundColor:"white",
                display:"flex",
                justifyContent:"center",
                alignItems:"center",
                borderRadius:50
              }}>
                <Image source={require('../../assets/Ellipse.png')} style={{marginLeft:-10}}/>
                <View style={{backgroundColor:"red",width:20, height:20, borderRadius:50, borderWidth:5, borderColor:"white", position:"absolute", top:0, right:0}}></View>
              </View>
            </View>
        </View>   
  );
}
