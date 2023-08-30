import { useEffect, useRef } from "react";
import { Animated } from "react-native";
import { Logo } from "./styles";
export function LoadingIn() {
  const opacity = useRef(new Animated.Value(0.5));
  const scale = useRef(new Animated.Value(1));

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(opacity.current, {
          toValue: 1,
          useNativeDriver: true,
          duration: 500,
        }),
        Animated.timing(scale.current, {
          toValue: 1.2,
          useNativeDriver: true,
          duration: 500,
        }),
        Animated.timing(opacity.current, {
          toValue: 0.5,
          useNativeDriver: true,
          duration: 500,
        }),
        Animated.timing(scale.current, {
          toValue: 1,
          useNativeDriver: true,
          duration: 500,
        }),
      ])
    ).start();
  }, [opacity]);
  return (
    <Animated.View
      style={{
        opacity: opacity.current,
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: [{ translateX: -100 }, { translateY: -50 }],
        backgroundColor: " red",
      }}
    >
      <Logo source={require("../../../../assets/Global/Logo2.png")} />
    </Animated.View>
  );
}
