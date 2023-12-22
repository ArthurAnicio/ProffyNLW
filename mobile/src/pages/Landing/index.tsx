import React, { useState, useEffect } from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { RectButton } from 'react-native-gesture-handler'

import styles from './styles';

import landingImg from '../../assets/images/landing.png';
import studyImg from '../../assets/images/icons/study.png';
import giveClassesImg from '../../assets/images/icons/give-classes.png';
import heartImg from '../../assets/images/icons/heart.png';
import api from '../../services/api';

function Landing() {
  const { navigate } = useNavigation();
  const [ totalConnections, setTotalConnections ] = useState(0);

  useEffect(() => {
    try {
      api.get('connections').then(response => {            
          const { total } = response.data;
          console.log(total)
          setTotalConnections(total);
      });
    }
    catch(err){
      console.log(err)
    }
  }, [])

  function handleNavigateToGiveClassesPage() {
    navigate('GiveClasses')
  }

  function handleNavigateToStudyPages() {
    navigate('Study')
  }

  return (
    <View style={styles.container}>
      <Image source={landingImg} style={styles.banner} />

      <Text style={styles.title}>
        Seja bem vindo, {'\n'}
        <Text style={styles.titleBold}>O que deseja fazer?</Text>
      </Text>

      <View style={styles.buttonsContainer}>
        <RectButton 
          style={[styles.button, styles.buttonPrimary]}
          onPress={handleNavigateToStudyPages}
        >
          <Image source={studyImg} />
          <Text style={styles.buttonText}>Estudar</Text>
        </RectButton>
        <RectButton 
          style={[styles.button, styles.buttonSecundary]} 
          onPress={handleNavigateToGiveClassesPage}
        >
          <Image source={giveClassesImg} />
          <Text style={styles.buttonText}>Dar aulas</Text>
        </RectButton>
      </View>

      <Text 
        style={styles.totalConnections}
      >
        Total de {totalConnections} conexões já realizadas {' '}
        <Image source={heartImg} />
      </Text>
    </View>
  )
}

export default Landing;