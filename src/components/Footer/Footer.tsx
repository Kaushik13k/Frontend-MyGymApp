import {View, Text} from 'react-native';
import React from 'react';
import styles from './FooterStyles';

const MainScreenFooter = ({imageUrl, buttonOpacity}: Props) => {
  return (
    <View style={styles.footer}>
      <View style={styles.footerContent}>
        <Text style={styles.footerHeading}>More Information</Text>
        <Text style={styles.footerSummary}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
          voluptatem iusto mollitia necessitatibus ab autem beatae enim illum
          sint consequatur!
        </Text>
      </View>
      <View style={styles.footerRightIcon} />
    </View>
  );
};

export default MainScreenFooter;
