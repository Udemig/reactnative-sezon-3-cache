import {Text} from 'react-native';
import React from 'react';
import {styles} from './Title.style';

const Title = ({title, titleType}) => {
  return <Text style={styles[titleType]}>{title}</Text>;
};

export default Title;
