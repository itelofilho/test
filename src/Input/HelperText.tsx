import * as React from 'react';
import { Text, Animated, ViewStyle } from "react-native";
import styled from "styled-components";
import { theme, typographys } from "./theme";
import { useFade } from "./useFade";

type HelperTextProps = {
  children: React.ReactNode;
  isShowing?: boolean;
  style?: ViewStyle;
  className?: string;
}
 
export const HelperText: React.FC<HelperTextProps> = (props) => {
  const [_, {opacity, ...fadeAction}] = useFade();

  React.useEffect(() => {
    if (props.isShowing) {
      fadeAction.fade().start();
    } else {
      fadeAction.clearFade().start();
    }
  }, [props.isShowing]);

  return (
    <AnimatedTextContainer
      className={props.className}
      style={{
        opacity,
        ...props.style
      }}
    >
      <TextStyled>{props.children}</TextStyled>
    </AnimatedTextContainer>   
  );
}

export const TextStyled = styled(Text)`
  ${typographys.caption};
  color: ${theme.pallette.light.grey};
`;

const AnimatedTextContainer = styled(Animated.View)`
  position: absolute;
  top: 0;
  left: 0;
`
