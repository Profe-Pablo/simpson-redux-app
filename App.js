import { ActivityIndicator} from 'react-native';
import { useFonts } from 'expo-font';
import Taberna from "./src/screens/Taberna";

export default function App() {

  const [fontsLoaded] = useFonts({
    'simpson-font': require('./assets/fonts/Simpsonfont.ttf'),
  });


  if (!fontsLoaded) {
    return <ActivityIndicator />;
  }
  return (
    <Taberna />
  );
}


