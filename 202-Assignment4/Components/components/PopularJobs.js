import { View, Text, SafeAreaView, Image } from "react-native";

const jobs = [
  { key: 4, name: "Programming", company: "Amazon", price: "80,000.00", city: "Seattle", color: "#FF9900" },
  { key: 2, name: "Mobile App Dev", company: "Google", price: "65,000.00", city: "San Francisco", color: "#0266C8" },
  { key: 7, name: "Python", company: "Tesla", price: "85,000.00", city: "Palo Alto", color: "#E31937" },
  { key: 8, name: "MySQL", company: "Cisco", price: "75,000.00", city: "San Jose", color: "#00BCEB" },
  { key: 6, name: "Java", company: "IBM", price: "70,000.00", city: "New York", color: "#006699" },
  { key: 5, name: "JavaScript", company: "Apple", price: "90,000.00", city: "Cupertino", color: "#919191" },
  { key: 3, name: "Data Analyst", company: "Microsoft", price: "75,000.00", city: "Seattle", color: "#F25022" },
  { key: 1, name: "Software Engineer", company: "Facebook", price: "180,000.00", city: "Accra, Ghana", color: "#1877F2" },
];


const getImage = (itemName) => {
  switch (itemName.toLowerCase()){
      case "facebook":
          return require('../../assets/facebookOne.png');
      case "google":
          return require('../../assets/google.png');
      case "microsoft":
          return require('../../assets/microsoft.png');
      case "amazon":
          return require('../../assets/amazon.png');
      case "apple":
          return require('../../assets/apple.png');
      case "ibm":
          return require('../../assets/ibm.png');
      case "tesla":
          return require('../../assets/tesla.png');
      case "cisco":
          return require('../../assets/cisco.png');
      default:
          return require('../../assets/facebook.png');
  }
}
  


export default function PopularJobs() {
  return (
    <View>
            <View style={{display:"flex", flexDirection:"row", marginVertical:20, justifyContent:"space-between", alignItems:"center"}}>
              <Text style={{fontSize:19, fontWeight:"bold"}}>Popular Jobs</Text>
              <Text style={{color:"#95969D"}}>See all</Text>
            </View>        
            {jobs.map((task) => {
             return (
                <View key={task.key}  style={{
                        display:"flex",
                        justifyContent:"space-between",
                        alignItems:"center",
                        flexDirection:"row",
                        marginBottom:20,
                        padding:10,
                        borderRadius:20,
                        backgroundColor:"white",
                        borderWidth:2,
                        borderColor:task.color
                    }}>
                      <View>
                        <Image source={getImage(task.company)} style={{width:30, height:30}}/>
                      </View>
                      <View>
                        <Text style={{fontWeight:"bold"}}>{task.name}</Text>
                        <Text style={{opacity:0.5}}>{task.company}</Text>
                      </View>
                      <View>
                        <Text style={{fontWeight:700}}>${task.price}/y</Text>
                        <Text style={{opacity:0.5}}>{task.city}</Text>
                      </View>
                </View>
            );
        })}
    </View>
  );
}
