import {View, Text} from 'react-native';
import React from 'react';
import styles from './LogoStyle';

interface Props {
  size: string;
}

const Logo: React.FC<Props> = ({size}) => {
  let headerLogoStyle, logoIconStyle, logoTextStyle;
  if (size === 'Medium') {
    headerLogoStyle = styles.headerLogoMedium;
    logoIconStyle = styles.logoIconMedium;
    logoTextStyle = styles.logoTextMedium;
  } else {
    headerLogoStyle = styles.headerLogoSmall;
    logoIconStyle = styles.logoIconSmall;
    logoTextStyle = styles.logoTextSmall;
  }
  return (
    <View style={headerLogoStyle}>
      <View style={logoIconStyle} />
      <View>
        <Text style={logoTextStyle}>MY</Text>
        <Text style={logoTextStyle}>WORKOUT</Text>
      </View>
    </View>

    // <View style={styles.headerLogo}>
    // <View style={styles.logoIcon} />
    // <View>
    //   <Text style={styles.logoText}>MY</Text>
    //   <Text style={styles.logoText}>WORKOUT</Text>
    // </View>
    // </View>
  );
};

export default Logo;
