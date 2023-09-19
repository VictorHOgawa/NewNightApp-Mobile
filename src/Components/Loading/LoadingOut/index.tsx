import { useEffect, useRef } from "react";
import { Animated, View } from "react-native";
import Theme from "../../../styles/themes";
import { Logo } from "./styles";
export function LoadingOut() {
  const opacity = useRef(new Animated.Value(1));
  const zIndex = useRef(new Animated.Value(2));
  useEffect(() => {
    Animated.timing(opacity.current, {
      toValue: 0,
      useNativeDriver: true,
      duration: 350,
    }).start();
    Animated.timing(zIndex.current, {
      toValue: 0,
      useNativeDriver: true,
      duration: 350,
    }).start();
  }, [opacity]);
  return (
    <Animated.View
      style={{
        position: "absolute",
        width: "100%",
        height: "100%",
        zIndex: zIndex.current,
        opacity: opacity.current,
        backgroundColor: Theme.color.background,
      }}
    >
      <View
        style={{
          top: "50%",
          left: "50%",
          transform: [{ translateX: -100 }, { translateY: -50 }],
        }}
      >
        <Logo source={require("../../../../assets/Global/Logo2.png")} />
      </View>
    </Animated.View>
  );
}
