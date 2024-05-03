import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={{ flex: 1, backgroundColor: '#212121',}}>
      <StatusBar style='light' />
      <Image source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5gtCUB0oXJFrIUiul5_7DgIGYYnKFHsNXjH5FbUaswg&s'}}
      style={{ width: 425, height: 225,}}
      />

      <View style={{marginTop: 60, flexDirection: 'row'}}>
      <View style={{ backgroundColor: '212121', flex: 1, justifyContent: 'center', alignItems: 'center', paddingVertical: 20, marginRight: 10,marginLeft: 20, borderRadius: 10,}}>
        <Text>Login</Text>
      </View>

      <View style={{ backgroundColor: '#ffffff', flex: 1, justifyContent: 'center', alignItems: 'center', paddingVertical: 20, marginLeft: 10, marginRight: 20, borderRadius: 10,}}>
        <Text>register</Text>
      </View>

    </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
