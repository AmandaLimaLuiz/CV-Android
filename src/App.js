import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Card from './components/Card';

import {
  Text,
  SafeAreaView,
  Pressable,
  Linking,
  StyleSheet,
  Image,
  View,
} from 'react-native';

import photo from './assets/img/photo.jpg';
const urlToMyGithub = "https://github.com/AmandaLimaLuiz";
const urlToMyLinkedin = "https://www.linkedin.com/in/amanda-luiz-968a61157/";
const urlToMywhats = "https://api.whatsapp.com/send?phone=5512997518064";

const App = () => {
  const handlePressGoToGithub = async () => {
    const res = await Linking.canOpenURL(urlToMyGithub);
    if (res) {
      await Linking.openURL(urlToMyGithub);
    }
  };

  const handlePressGoToLinkedin = async () => {
    const res = await Linking.canOpenURL(urlToMyLinkedin);
    if (res) {
      await Linking.openURL(urlToMyLinkedin);
    }
  };

  const handlePressGoToWhats = async () => {
    const res = await Linking.canOpenURL(urlToMywhats);
    if (res) {
      await Linking.openURL(urlToMywhats);
    }
  };

  return (
    <>
      <SafeAreaView style={style.container}>
        <View style={style.containerTop}>
          <Image source={photo} style={style.photo} />
          <Text style={style.name}>Amanda Luiz</Text>
          <Text style={style.title}>Web and Mobile Developer</Text>
          <View style={style.socialMedia}>
            <Pressable onPress={handlePressGoToGithub}>
              <Icon name="github" size={30} />
            </Pressable>

            <Pressable onPress={handlePressGoToLinkedin}>
              <Icon name="linkedin" size={30} />
            </Pressable>

            <Pressable onPress={handlePressGoToWhats}>
              <FontAwesome name="whatsapp" size={30} />
            </Pressable>
          </View>
            <Card title='Professional Experience:'>
            <Text style={style.cardText}>IBM - Software Developer Intern</Text>
            <Text style={style.cardText}>OUTBACK - team trainer and Head waitress</Text>
            </Card> 
            <Card title='Academic formation:'>
            <Text style={style.cardText}>Unicesumar - Bachelor Software Engineer  </Text>
            </Card> 
        </View>
      </SafeAreaView>
    </>
  );
};

const style = StyleSheet.create({
  container: {
    backgroundColor: '#282a36',
    flex: 1,
    alignItems: 'center',
    alignContent: 'center',
  },
  containerTop: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 25,
    alignContent: 'center',
  },
  photo: {
    height: 200,
    width: 200,
    borderRadius: 125,
  },
  name: {
    marginTop: 10,
    fontSize: 26,
    fontWeight: 'bold',
  },
  title: {
    marginTop: 5,
    fontSize: 16,
    color: '#939393',
  },
  socialMedia: {
    flexDirection: 'row',
    marginTop: 15,
    width: '60%',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginLeft: 35,
  },
  cardText: {
    marginBottom: 10,
  },
});

export default App;
