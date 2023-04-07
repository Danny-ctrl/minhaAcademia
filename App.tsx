import { StatusBar } from 'react-native';
import { NativeBaseProvider } from 'native-base';

import { THEME } from './src/theme';
import { Routes } from './src/routes';

import { Loading } from '@components/Loading';
import { AuthContext } from '@contexts/AuthContext';
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular, Roboto_700Bold
  });

  return (
    <NativeBaseProvider theme={THEME}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <AuthContext.Provider value={{
        id: '1',
        name: 'Daniele',
        email: 'dani@emails.com',
        avatar: 'dani.png'
      }}>
        {fontsLoaded ? <Routes /> : <Loading />}
      </AuthContext.Provider>

    </NativeBaseProvider>
  );
}


