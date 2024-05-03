import { View, Text, Platform } from 'react-native';
import { beranda, live, notifikasi, saya, setting } from './screens';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


const Tab =createBottomTabNavigator()

export default function App() {
  return (  
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="beranda" component={beranda}/>
        <Tab.Screen name="live" component={live}/>
        <Tab.Screen name="notifikasi" component={notifikasi}/>
        <Tab.Screen name="saya" component={saya}/>
        <Tab.Screen name="setting" component={setting}/>
      </Tab.Navigator>
    </NavigationContainer>
  )
}