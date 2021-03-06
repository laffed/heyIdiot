import 'react-native-gesture-handler';
import React from 'react';
import {enableScreens} from 'react-native-screens';
import {config} from './src/overmind'
import {Provider} from 'overmind-react';
import {createOvermind} from 'overmind'
import {ip} from './src/devAssets/assets';
import {SafeAreaProvider, initialWindowMetrics} from 'react-native-safe-area-context';
import RootNav from './src/navigation';

//TODO add Hermes setup for improved performance 
declare const global: {HermesInternal: null | {}};

//React Navigation optimization
//https://reactnavigation.org/docs/react-native-screens/
enableScreens();

const overmind = createOvermind(config, {
  devtools: ip.home.ios
});

function App() {
  return (
    <Provider value={overmind}>
      <SafeAreaProvider initialMetrics={initialWindowMetrics}>
        <RootNav />
      </SafeAreaProvider>
    </Provider>
  );
};



export default App;
