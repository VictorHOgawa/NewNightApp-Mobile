import { useEffect, useRef } from "react";
import { Animated } from "react-native";
import Theme from "../../../styles/themes";
import { Logo } from "./styles";
export function LoadingFull() {
  const mainOpacity = useRef(new Animated.Value(1));
  const logoOpacity = useRef(new Animated.Value(0.5));
  const scale = useRef(new Animated.Value(1.2));
  const zIndex = useRef(new Animated.Value(2));

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(logoOpacity.current, {
          toValue: 1,
          useNativeDriver: true,
          duration: 500,
        }),
        Animated.timing(scale.current, {
          toValue: 1.2,
          useNativeDriver: true,
          duration: 500,
        }),
        Animated.timing(logoOpacity.current, {
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
  }, [logoOpacity]);

  useEffect(() => {
    Animated.timing(mainOpacity.current, {
      toValue: 0,
      useNativeDriver: true,
      duration: 1000,
      delay: 3000,
    }).start();
    Animated.timing(zIndex.current, {
      toValue: 0,
      useNativeDriver: true,
      duration: 1000,
      delay: 3000,
    }).start();
  }, [mainOpacity]);

  return (
    <Animated.View
      style={{
        position: "absolute",
        width: "100%",
        height: "100%",
        zIndex: zIndex.current,
        opacity: mainOpacity.current,
        backgroundColor: Theme.color.background,
      }}
    >
      <Animated.View
        style={{
          top: "50%",
          left: "50%",
          opacity: logoOpacity.current,
          transform: [{ translateX: -100 }, { translateY: -50 }],
        }}
      >
        <Logo source={require("../../../../assets/Global/Logo2.png")} />
      </Animated.View>
    </Animated.View>
  );
}
