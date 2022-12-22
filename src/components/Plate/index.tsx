import React from 'react';
import { Image } from 'react-native';

import { MotiImage } from 'moti';

import { styles } from './styles';
import plateImg from '../../assets/plate.png';

export function Plate() {
  return (
    <MotiImage
      style={styles.plate}
      source={plateImg}
      resizeMode="contain"
      from={{
        rotate: '0deg',
        opacity: 0
      }}
      animate={{
        rotate: '100deg',
        opacity: 1
      }}
      transition={{
        type: 'timing',
        duration: 2000,
        // repeat: 3,
        // loop: true
        // repeatReverse: false
      }}
    />
  );
}