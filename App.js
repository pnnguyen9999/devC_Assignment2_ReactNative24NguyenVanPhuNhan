import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, FlatList } from 'react-native';
import { Feather, AntDesign, MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';
import Constants from 'expo-constants';
//import { Platform, TouchableHighlight, TouchableOpacity, TouchableNativeFeedback, TouchableWithoutFeedback} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.container1}>
        <TouchableOpacity onPress={this._onPressButton}>
          <AntDesign style={{ margin: 5 }} name='arrowleft' onPress={() => alert("back")} size={35} />
        </TouchableOpacity>
        <TouchableOpacity onPress={this._onPressButton}>
          <AntDesign style={{ margin: 5, right: 0 }} name='appstore-o' size={35} />
        </TouchableOpacity>
      </View>
      <View style={styles.container2}>
        <View style={{ margin: 10 }}>
          <Image style={{ height: 120, width: 120, borderRadius: 120 / 2, }} source={require('./assets/avatar.jpg')} />
        </View>
        <View style={{ margin: 10, paddingLeft: 5 }}>
          <Text style={{ fontWeight: 'bold', fontSize: 27 }}>Floyd Hayes</Text>
          <Text style={styles.minText}>Photographer</Text>
          <View style={{ flexDirection: 'row', paddingTop: 25 }}>
            <TouchableOpacity onPress={this._onPressButton} style={styles.button1}>
              <Text style={{ color: '#ffffff' }}>Follow</Text>
            </TouchableOpacity>
            <Text> </Text>
            <TouchableOpacity onPress={this._onPressButton} style={styles.button2}>
              <MaterialCommunityIcons name='send' size={20} color="white" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={styles.container3}>
        <View style={styles.infoCol}>
          <Text style={{ fontWeight: 'bold', fontSize: 22 }}>210</Text>
          <Text style={styles.minText}>Photos</Text>
        </View>
        <View style={styles.infoCol}>
          <Text style={{ fontWeight: 'bold', fontSize: 22 }}>15k</Text>
          <Text style={styles.minText}>Followers</Text>
        </View>
        <View style={styles.infoCol}>
          <Text style={{ fontWeight: 'bold', fontSize: 22 }}>605</Text>
          <Text style={styles.minText}>Following</Text>
        </View>
      </View>
      <View style={styles.container4}>
        <ScrollView contentContainerStyle={styles.containerX}>
          <Image style={styles.list} source={require('./assets/1.jpg')} />
          <Image style={styles.list} source={require('./assets/7.jpg')} />
          <Image style={styles.list} source={require('./assets/3.jpg')} />
          <Image style={styles.list} source={require('./assets/4.jpg')} />
          <Image style={styles.list} source={require('./assets/5.jpg')} />
          <Image style={styles.list} source={require('./assets/6.jpg')} />
          <Image style={styles.list} source={require('./assets/2.jpg')} />
        </ScrollView>
      </View>
      <View style={styles.footer}>
        <TouchableOpacity>
          <MaterialCommunityIcons name='webhook' size={35} color="black" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicons name='md-add-circle-outline' size={35} color="black" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Feather name='user' size={35} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
    backgroundColor: '#fff',
    paddingTop: Constants.statusBarHeight,
    justifyContent: 'center',
  },
  container1: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    //backgroundColor: '#00ff00',
  },
  container2: {
    flex: 3,
    //backgroundColor: '#00ffff',
    flexDirection: 'row',
  },
  container3: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    margin: 10,
    //backgroundColor: '#034545',
  },
  container4: {
    flex: 7,
    //backgroundColor: '#154fff',
  },
  button1: {
    height: 30,
    width: 80,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2962FF',
  },
  button2: {
    height: 30,
    width: 45,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00B8D4',
  },
  infoCol: {
    flexDirection: 'column', 
    justifyContent: 'space-evenly', 
    alignItems: 'center',
  },
  minText:{
    fontSize: 15, 
    color: '#757575', 
    paddingTop: 5,
  },
  footer: {
    flex: 1,
    margin:5,
    marginBottom:0,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderRadius: 10
  },
  wrapper: {
    flex: 1
  },
  containerX: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start'
    
  },
  list: {
    height: 200, 
    width: '50%', 
    borderRadius: 120 / 5, 
    borderColor: '#ffffff',
    borderWidth: 10,
  },
});
