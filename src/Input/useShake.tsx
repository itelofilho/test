import React from "react";
import { Animated } from "react-native";

type Axis = "X" | "Y";

type ShakeProps = {
  children: React.ReactNode;
}

type ReturnTypeOfShake = [(props: ShakeProps) => JSX.Element, { clear: () => any; shake: () => any; }];

export const useShake = (axis: Axis, max?: number, min?: number): ReturnTypeOfShake => {
  const animatedValueForPositions = React.useRef(new Animated.Value(0));

  const translateAxis = animatedValueForPositions.current.interpolate({
    inputRange: [0, 1, 2, 3, 4, 5, 6, 7, 8],
    outputRange: [0, -6, 0, 6, 0, -6, 0, 6, 0]
  });

  const shake = () =>
    Animated.timing(animatedValueForPositions.current, {
      toValue: 8
    });

  const clear = () => animatedValueForPositions.current.setValue(0);

  const Shake = (props: ShakeProps) => (
    <Animated.View
      style={{
        transform: [{ [`translate${axis}`]: translateAxis }]
      }}
    >
      {props.children}
    </Animated.View>
  );

  return [
    Shake,
    {
      clear,
      shake
    }
  ]
};
