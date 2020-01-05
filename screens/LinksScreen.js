import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import { Layout } from '@ui-kitten/components';

export default function LinksScreen() {
  return (
    <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'flex-start', marginTop: 20 }}>
      <ScrollView style={styles.container}>
        <ExpoLinksView />
      </ScrollView>
    </Layout>
  );
}

LinksScreen.navigationOptions = {
  title: 'Links'
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff'
  }
});
