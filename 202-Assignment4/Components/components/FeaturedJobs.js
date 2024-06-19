import { View, Text, Image, FlatList } from "react-native";


const categories = [
    { key: 1, name: "Software Engineer", company: "Facebook", price: "180,000.00", city: "Accra, Ghana", color:"#1877F2" },
    { key: 2, name: "Mobile App Dev", company: "Google", price: "65,000.00", city: "San Francisco", color:"#0266C8"  },
    { key: 3, name: "Data Structures & Algorithm", company: "Microsoft", price: "75,000.00", city: "Seattle", color:"#F25022"  },
    { key: 4, name: "Programming", company: "Amazon", price: "80,000.00", city: "Seattle", color:"#FF9900"  },
    { key: 5, name: "JavaScript", company: "Apple", price: "90,000.00", city: "Cupertino", color:"#919191"  },
    { key: 6, name: "Java", company: "IBM", price: "70,000.00", city: "New York", color:"#006699"  },
    { key: 7, name: "Python", company: "Tesla", price: "85,000.00", city: "Palo Alto", color:"#E31937"  },
    { key: 8, name: "MySQL", company: "Cisco", price: "75,000.00", city: "San Jose", color:"#00BCEB"  },
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
    

  const renderCategory = ({ item }) => {
    return (
        <View style={{padding:15, display:"flex", justifyContent:"space-between", marginRight:20, borderRadius:20, width:265, backgroundColor:item.color}}>
            <View style={{display:"flex", flexDirection:"row", justifyContent:"space-between", alignItems:"center"}}>
            <View style={{padding:10, backgroundColor:"white", borderRadius:10}}>
                <Image source={getImage(item.company)} style={{width:20, height:20}}/>
            </View>
            <View>
                <Text style={{color:"white", fontSize:18, fontWeight:"bold", }}>{item.name}</Text>
                <Text style={{color:"white", fontSize:15}}>{item.company}</Text>
            </View>
            </View>
            <View style={{display:"flex", flexDirection:"row", justifyContent:"space-between", alignItems:"center"}}>
                <Text style={{color:"white", fontSize:15}}>${item.price}</Text>
                <Text style={{color:"white", fontSize:15}}>{item.city}</Text>
            </View>
        </View>
    );
};

export default function FeaturedJobs() {
  return (
    <View>
        <View style={{display:"flex", flexDirection:"row", marginVertical:10, justifyContent:"space-between", alignItems:"center"}}>
            <Text style={{fontSize:19, fontWeight:"bold"}}>Featured Jobs</Text>
            <Text style={{color:"#95969D"}}>See all</Text>
        </View>
        <View style={{
            height:170,
            marginTop:5,
        }}>
            <FlatList 
                bounces={true}
                horizontal={true} 
                data={categories} 
                renderItem={renderCategory}
                keyExtractor={(item) => item.key}
                showsHorizontalScrollIndicator={false}/>
        </View>
    </View>
  );
}
