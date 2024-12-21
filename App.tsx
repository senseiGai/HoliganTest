import React from 'react'
import RootNavigator from "./src/app/navigation/RootNavigator";
import { SafeAreaView } from 'react-native';

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
      <RootNavigator />
    </SafeAreaView>
  )
}

export default App