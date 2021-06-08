import React from 'react';
import Card from '../../components/Card/Card';
import {Image, ImageBackground, Text} from 'react-native';
import styled from 'styled-components/native';
import {normalizePx} from '../../utils/utilFunctions';

interface ItemCardProps {
  title: string;
  size: number;
  onPress: Function;
  imageForeground: string;
  imageBackground: string;
  extract?: string;
  imageBackgroundSource: string;
  footerColor: string;
}

const StyledImageBackground = styled(ImageBackground)`
  width: 100%;
  height: 100%;
  flex: 1;
  justify-content: flex-end;
  align-items: center;
  padding: ${() => normalizePx(20)}px;
`;

const Title = styled.Text`
  font-weight: bold;
  font-size: ${normalizePx(21)};
  color: white;
`;

function ItemCard({
  title,
  size,
  extract,
  onPress,
  imageBackgroundSource,
  footerColor,
  itemImageSource,
}: ItemCardProps): JSX.Element {
  return (
    <Card {...{onPress, size, backgroundColor: footerColor}}>
      <StyledImageBackground
        source={{
          uri: imageBackgroundSource,
        }}
        {...{size}}>
        <Image
          source={{uri: itemImageSource}}
          style={{width: size, height: size}}
        />
        <Text>{extract}</Text>
      </StyledImageBackground>
      <Title>{title}</Title>
    </Card>
  );
}

ItemCard.defaultProps = {
  title: '',
  size: 25,
};

export default ItemCard;
