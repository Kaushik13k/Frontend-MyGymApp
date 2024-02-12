import {View, Text} from 'react-native';
import React from 'react';
import styles from './QuotesStyle';

const Quotes = () => {
  return (
    <View style={styles.quoteContainer}>
      <Text style={[styles.quoteSentence, {marginTop: '-1%'}]}>
        <Text style={styles.largeLetter}>S</Text>weat now,
      </Text>
      <Text style={[styles.quoteSentence, {marginTop: -9}]}>Shine later.</Text>
    </View>
  );
};

export default Quotes;
