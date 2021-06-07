import React from 'react';
import {TouchableOpacity} from 'react-native';
import styled from 'styled-components/native';
import {normalizePx} from '../../utils/utilFunctions';

interface CardProps {
  children: JSX.Element;
  size: number;
  onPress: Function;
  backgroundColor: string;
}

const CardContainer = styled(TouchableOpacity)`
  background-color: ${({backgroundColor}) => backgroundColor ?? '#8d8d8d'};
  width: ${({size}) => {
    return 1.0 * size;
  }}px;
  height: ${({size}) => {
    return 1.6 * size;
  }}px;
  justify-content: center;
  align-items: center;
  border-radius: ${() => normalizePx(10)}px;
  overflow: hidden;
  margin-top: 10%;
  margin-bottom: 10%;
`;

function Card({
  children,
  size,
  style,
  onPress,
  backgroundColor,
}: CardProps): JSX.Element {
  return (
    <CardContainer
      style={{
        ...style,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 4,
        },
        shadowOpacity: 0.3,
        shadowRadius: 4.65,
        elevation: 8,
      }}
      {...{size, onPress, backgroundColor}}>
      {children}
    </CardContainer>
  );
}

Card.defaultProps = {
  size: 25,
};

export default Card;
