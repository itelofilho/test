import React from "react";
import { Text } from "react-native";
import styled from "styled-components";
import { theme, typographys } from "./theme";
// import { useShake } from "./useShake";

type LabelProps = {
  hasError?: boolean;
  children: React.ReactNode;
}

export const Label = (props: LabelProps) => {
  // const [Shake, action] = useShake('X');

  // React.useEffect(() => {
  //     if (props.hasError) {
  //       action.shake().start();
  //     } else {
  //       action.clear();
  //     }
  //   }, [props.hasError]);

  return (
    // <Shake>
      <LabelStyled hasError={props.hasError}>{props.children}</LabelStyled>
    // </Shake>
  )
}

const LabelStyled = styled(Text)<LabelProps>`
  ${typographys.small}
  text-transform: uppercase;
  font-weight: 600;
  margin-bottom: 4px;
  margin-right: 8px;
  color: ${({ hasError }) =>
    !!hasError ? theme.pallette.light.danger : theme.pallette.light.grey};
`;

Label.defaultProps = {
  hasError: false
};
