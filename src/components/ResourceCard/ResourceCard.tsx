import React, {useEffect, useState} from 'react';
import {LayoutAnimation, Platform, UIManager, View} from 'react-native';
import ItemCard from '../../uikit/ItemCard/ItemCard';

interface ResourceCardProps {
  item: {
    title: string;
  };
  children: React.ReactChildren;
}

function ResourceCard({item, children}: ResourceCardProps): JSX.Element {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  useEffect(() => {
    if (Platform.OS === 'android') {
      UIManager.setLayoutAnimationEnabledExperimental(true);
    }
  }, []);

  const expand = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setIsExpanded(!isExpanded);
  };

  return (
    <View
      style={{
        margin: 10,
        paddingLeft: 20,
        flexDirection: 'row',
        borderRadius: 50,
      }}>
      <ItemCard
        size={150}
        title={item.title}
        footerColor={'red'}
        onPress={expand}
      />
      {isExpanded && children}
    </View>
  );
}

export default ResourceCard;
