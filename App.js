import { ActivityIndicator} from 'react-native';
import { useFonts } from 'expo-font';
import Taberna from "./src/screens/Taberna";
import { Provider } from 'react-redux';
import store from './src/store';

export default function App() {

  const [fontsLoaded] = useFonts({
    'simpson-font': require('./assets/fonts/Simpsonfont.ttf'),
  });


  if (!fontsLoaded) {
    return <ActivityIndicator />;
  }
  return (
    <Provider store={store}>
      <Taberna />
    </Provider>
    
  );
}


