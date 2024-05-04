import { View, Text, Platform } from 'react-native';
import { beranda, live, notifikasi, saya, setting } from './screens';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { createStackNavigator } from '@react-navigation/stack';



const Tab =createBottomTabNavigator()
const screenOptions = {
  tabBarShowLabel:false,
  headerShow:false,
  tabBarStyle:{
    position: "absolut",
    bottom: 0,
    right: 0,
    left: 0,
    elevation: 0,
    height: 60,
    background: "#fff"
  }
  
}
export default function App() {
  return (  
    <NavigationContainer>
      <Tab.Navigator screenOptions={screenOptions}>
        <Tab.Screen
        
         name="beranda" 
         component={beranda}
         options={{
          tabBarIcon: ({focused})=>{
            return (
              <View style={{alignItems: "center", justifyContent: "center"}}>
              <FontAwesome5 name="home" size={24} color={focused ? "#16247d": "#111"}/>
              <Text style={{fontSize: 12, color: "16247d"}}>BERANDA</Text>


            </View>
            )
          }
         }}
         />
        <Tab.Screen name="SIARAN"
         component={live}options={{
          tabBarIcon: ({focused})=>{
            return (
              <View style={{alignItems: "center", justifyContent: "center"}}>
              <FontAwesome5 name="tv" size={24} color={focused ? "#16247d": "#111"}/>
              <Text style={{fontSize: 12, color: "16247d"}}>SIARAN</Text>


            </View>
            )
          }
         }}/>
        <Tab.Screen name="notifikasi" component={notifikasi}options={{
          tabBarIcon: ({focused})=>{
            return (
              <View style={{alignItems: "center", justifyContent: "center"}}>
              <FontAwesome5 name="bell" size={24} color={focused ? "#16247d": "#111"}/>
              <Text style={{fontSize: 12, color: "16247d"}}>NOTIFIKASI</Text>


            </View>
            )
          }
         }}/>
        <Tab.Screen name="saya" component={saya}options={{
          tabBarIcon: ({focused})=>{
            return (
              <View style={{alignItems: "center", justifyContent: "center"}}>
              <FontAwesome5 name="users" size={24} color={focused ? "#16247d": "#111"}/>
              <Text style={{fontSize: 12, color: "16247d"}}>SAYA</Text>


            </View>
            )
          }
         }}/>
        <Tab.Screen name="setting" component={setting}options={{
          tabBarIcon: ({focused})=>{
            return (
              <View style={{alignItems: "center", justifyContent: "center"}}>
              <FontAwesome5 name="snowflake" size={24} color={focused ? "#16247d": "#111"}/>
              <Text style={{fontSize: 12, color: "16247d"}}>PENGATURAN</Text>


            </View>
            )
          }
         }}/>
      </Tab.Navigator>
    </NavigationContainer>
  )
}