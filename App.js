import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView} from 'react-native';
import Cesta from './src/screens/cesta';

export default function App() {
  return (
    <SafeAreaView>

        <Cesta titulo={"Fazendinha"}/>

        <StatusBar style="auto" />
        
    </SafeAreaView>
    
  );
}


