import React from "react";
import { Animated } from "react-native";

type FadeProps = {
  children: React.ReactNode;
}

type ReturnTypeOfUseFade = [
  (props: FadeProps) => JSX.Element, 
  { opacity: Animated.AnimatedInterpolation, clearFade: () => any; fade: () => any; }
];

export const useFade = (fadeOut = true): ReturnTypeOfUseFade => {
  const initialOpacity = fadeOut ? 0 : 1;
  const finalOpacity = fadeOut ? 1 : 0;

  const animatedValueForFade = React.useRef(new Animated.Value(initialOpacity));

  const opacity = animatedValueForFade.current.interpolate({
    inputRange: [0, 8],
    outputRange: [initialOpacity, finalOpacity]
  });

  const fade = () =>
    Animated.timing(animatedValueForFade.current, {
      toValue: 8
    });

  const clearFade = () => Animated.timing(animatedValueForFade.current, {
    toValue: 0
  });

  const Fade = (props: FadeProps) => (
    <Animated.View
      style={{
        opacity
      }}
    >
      {props.children}
    </Animated.View>
  );

  return [
    Fade,
    {
      opacity,
      clearFade,
      fade
    }
  ]
};
