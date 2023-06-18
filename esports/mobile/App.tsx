import { StatusBar } from 'react-native';
import { Backgound } from './src/components/Backgound';
import { Home } from './src/screens/Home';
import { useFonts, Inter_400Regular, Inter_600SemiBold, Inter_700Bold, Inter_900Black } from '@expo-google-fonts/inter'
import { Loading } from './src/components/Loading';

export default function App() {

  const [fontsLoaded] = useFonts({ Inter_400Regular, Inter_600SemiBold, Inter_700Bold, Inter_900Black });

  return (
    <Backgound>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      {fontsLoaded ? <Home /> : <Loading />}
    </Backgound>
  );
}

