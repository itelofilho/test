import * as React from 'react';
import { Text, Animated } from "react-native";
import styled from "styled-components";
import { theme, typographys } from "./theme";
import { useFade } from "./useFade";
import { HelperText, TextStyled } from "./HelperText";

type ErrorTextProps = {
  children: React.ReactNode;
  isShowing?: boolean
}
 
export const ErrorText: React.FC<ErrorTextProps> = (props) => {
  const translateY = React.useRef(new Animated.Value(-8)).current;

  React.useEffect(() => {
    if (props.isShowing) {
      Animated.timing(translateY, {
        toValue: 0
      }).start();
    } else {
      Animated.timing(translateY, {
        toValue: -8
      }).start();
    }
  }, [props.isShowing]);

  return (
    <ErrorTextContainer
      isShowing={props.isShowing}
      style={{
        transform: [{ translateY }]
      }}
    >
      {props.children}
    </ErrorTextContainer>   
  );
}

const ErrorTextContainer = styled(HelperText)`
  ${TextStyled} {
    color: ${theme.pallette.light.danger};
  }
`
