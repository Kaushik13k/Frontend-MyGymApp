import {
  View,
  ImageBackground,
  ImageSourcePropType,
  SafeAreaView,
  //   Animated,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

import styles from './LandingPageStyles';
import Footer from '../../components/Footer/Footer';
import MainScreenButton from '../../components/Button/MainScreenButton';
import Quotes from '../../components/Quotes/Quotes';
import Logo from '../../components/Logo/Logo';
import LanguageLogo from '../../components/Logo/LanguageLogo';
type Props = {
  imageUrl: ImageSourcePropType;
};

const MainScreen = ({imageUrl}: Props) => {
  const navigation = useNavigation();
  return (
    <>
      <ImageBackground
        style={styles.backgroundImage}
        source={imageUrl}
        blurRadius={1}>
        <View style={styles.headerContainer}>
          <Logo size="small" />
          <LanguageLogo />
        </View>
        <Quotes />
        <MainScreenButton navigation={navigation} />
      </ImageBackground>
      <Footer />
    </>
  );
};

export default function LandingPage() {
  return (
    <MainScreen
      imageUrl={require('../../assets/main-page.jpg')}
      // buttonOpacity={buttonOpacity}
    />
  );
}
