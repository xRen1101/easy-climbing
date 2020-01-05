import React from 'react';
import { ExpoConfigView } from '@expo/samples';
import { Layout } from '@ui-kitten/components';

export default function SettingsScreen() {
  /**
   * Go ahead and delete ExpoConfigView and replace it with your content;
   * we just wanted to give you a quick view of your config.
   */
  return (
    <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'flex-start', marginTop: 20 }}>
      <ExpoConfigView />
    </Layout>
  );
}

SettingsScreen.navigationOptions = {
  title: 'app.json'
};
