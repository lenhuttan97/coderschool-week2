import React from 'react';
import { StyleSheet, Text, View, Image,TouchableOpacity,ScrollView,StatusBar,Alert } from 'react-native';
import { Ionicons, MaterialIcons,AntDesign,SimpleLineIcons } from '@expo/vector-icons';

const POLO_BLUE_COLOR = 'rgb(51,60,87)';
const FOLLOW_COLOR = 'rgb(71,113,246)';
const SEND_MESSAGE_COLOR = 'rgb(120,213,250)';

const alertflow = () => {
  {
    Alert.alert(
      'followed you'
    )
  }
}

const alertSend = () => {
  {
    Alert.alert(
      'message sended you'
    )
  }
}


export default function App() {
  return (
   <View style={styles.container}>
     <StatusBar barStyle = "dark-content" hidden = {false} backgroundColor = "black"/>
     <View style={styles.barHeader}>
        <AntDesign name="arrowleft" size={22} color='black'/>
        <SimpleLineIcons name="options" size={22} color='black' />
      </View> 
      <View style={styles.header}>
        <View style={styles.avatarWapper}>
          <Image 
            source={require('./assets/avatar.png')} 
            style={[styles.avatar]}
            />
        </View>
        <View style={styles.userInfo}>
          <Text style={styles.countText}>Tân Lê</Text>
          <Text style={styles.countLableTextText}>Developer</Text>
          <View style={styles.btnWapper}>
            <TouchableOpacity  onPress={alertflow}>
              <View style={styles.followBtn}>
                  <Text style={styles.btnLabel}>Follow</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity  onPress={alertSend}>
              <View style={styles.sendBtn}>
                <MaterialIcons name="send" size={18} color='white'/>
              </View>
            </TouchableOpacity>
          </View>
        </View>  
      </View>
      <View style={styles.countArea}>
        <View>
          <Text style={styles.countText}>120</Text>
          <Text style={styles.countLableTextText}>Photos</Text>
        </View>
        <View >
          <Text style={styles.countText}>15k</Text>
          <Text style={styles.countLableTextText}>Followers</Text>
        </View>
        <View>
          <Text style={styles.countText}>605</Text>
          <Text style={styles.countLableTextText}>Following</Text>
        </View>
      </View>
      <View style={styles.imageArea}>
        <ScrollView contentContainerStyle={styles.imgContent}>
          <View style={{flexDirection:'column'}}>
            {imgData.slice(0, centerImgData).map(item => {
              return <Image source={item.imgSource} style={styles.image}/>
            })}
          </View>
          <View style={{flexDirection: 'column'}}>
            {imgData.slice(centerImgData).map(item => {
              return <Image source={item.imgSource} style={styles.image}/>
            })}
          </View>
        </ScrollView>
      </View>
   </View>
  );


}

const styles = StyleSheet.create({
  container: {
    flex:1,
    marginTop:20
    
  },
  barHeader: {
      flex: 0.05,
      paddingLeft: 20,
      paddingRight: 20,
      flexDirection: 'row',
      justifyContent: 'space-between'
  },
  header: {
    flex: 0.25,
    flexDirection: 'row',
    borderWidth: 0.5,
    borderColor: '#d6d7da',
   
  },
  countArea: {
    flex: 0.15,
    flexDirection: 'row', 
    justifyContent: 'space-around',
    alignItems: 'center',
    borderWidth: 0.5,
    borderColor: '#d6d7da',
  },
  imageArea: {
    flex: 0.55,
    justifyContent: 'center'
  },
  avatarWapper: {
    flex: 0.4,
    justifyContent:'center',
    alignItems: 'center'
  },
  avatar: {
    width: 110,
    height:110,
    borderRadius: 55
  },
  btnWapper:{
    flexDirection: 'row',
    marginTop: 10
  },
  followBtn: {
    width: 120,
    height: 30,
    backgroundColor: FOLLOW_COLOR,
    borderRadius: 15,
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnLabel:{
    color: 'white'
  },
  sendBtn: {
    width: 50,
    height: 30,
    backgroundColor: SEND_MESSAGE_COLOR,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center'
  },

  userInfo: {
    flex: 0.6,
    justifyContent: 'center',
  },
  countText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  countLableText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  imgContent: {
  flexDirection: 'row',
  alignItems:'center',
  justifyContent: 'space-around',
  marginBottom: 20
  },
  image: {
      width: 170,
      height: 170,
      borderRadius: 5,
      marginTop: 20,
  }
});

const imgData = [
  { id: 1, imgSource: require('./assets/1.png') },
  { id: 2, imgSource: require('./assets/2.png') },
  { id: 3, imgSource: require('./assets/3.png') },
  { id: 4, imgSource: require('./assets/4.png') },
  { id: 5, imgSource: require('./assets/5.png') },
  { id: 6, imgSource: require('./assets/6.png') },
  { id: 7, imgSource: require('./assets/7.png') },
  { id: 8, imgSource: require('./assets/8.png') },
];
const centerImgData = Math.floor(imgData.length / 2);