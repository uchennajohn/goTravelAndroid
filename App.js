import { StatusBar } from 'expo-status-bar';
import { Text, SafeAreaView, View } from 'react-native';

export default function App() {
  return (
    <SafeAreaView className="flex-1 items-center justify-center bg-red">
      <Text className="text-red-600">Uchenna John</Text>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}


