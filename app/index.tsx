import {useEffect} from "react";
import { View, Dimensions, TouchableOpacity, Pressable, Button, StyleSheet } from 'react-native';
import {Canvas, Circle, Group} from "@shopify/react-native-skia";
import Animated, { useAnimatedStyle, useSharedValue, withTiming, withSpring } from "react-native-reanimated";
 

const { width, height } = Dimensions.get('window');

export default function Index() {
  
  const transX = useSharedValue(0);

  const onPress = () => { 
    transX.value = transX.value > 50 ? transX.value - 50 : transX.value + 50;
    console.log(transX.value);
  }

  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [{translateX: withSpring(transX.value)}]
    }
  });

  return (
    <View style={styles.container}>
    <Animated.View
    style={[styles.box, animatedStyles]  }
     />
     <Button onPress={onPress} title="Action"/>
     </View>

    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
    backgroundColor: 'blue',
  },    
})