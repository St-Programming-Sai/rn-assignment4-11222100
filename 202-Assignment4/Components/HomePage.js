import { SafeAreaView, ScrollView} from "react-native";
import FrameOne  from "./components/FrameOne";
import Search  from "./components/Search";
import FeaturedJobs  from "./components/FeaturedJobs";
import PopularJobs  from "./components/PopularJobs";

export default function HomePage({  route, navigatgion }) {
  const {name, email} = route.params;
  return (
    <ScrollView>
        <SafeAreaView
          style={{
            backgroundColor:"#FAFAFD", 
            height:"100%",
            padding:20
          }}> 
              <FrameOne name={name} email={email}/>
              <Search/>
              <FeaturedJobs/>
              <PopularJobs/>
        </SafeAreaView>
    </ScrollView>

   
  );
}
