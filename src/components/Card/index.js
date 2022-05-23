import React from 'react';
import {Text, View} from 'react-native';
import style from './style';

const card = ({title, children}) => {
  return (
    <>
      <View style={style.cardContainer}>
        <View style={style.card}>
          <Text style={style.cardTextTitle}>{title}</Text>
          <View style={style.cardContent}>
            {children}
          </View>
        </View>
      </View>
    </>
  );
};
export default card;
