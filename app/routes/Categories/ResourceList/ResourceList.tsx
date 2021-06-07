import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  FlatList,
  ScrollView,
  Text,
  View,
} from 'react-native';
import {useStorage} from '../../../reducers/storage/useStorage';
import {useDispatch} from 'react-redux';
import axios from 'axios';
import ResourceCard from '../../../../src/components/ResourceCard/ResourceCard';
import {normalizePx} from '../../../../src/utils/utilFunctions';

function ResourceList({route}) {
  const Storage = useStorage();
  const dispatch = useDispatch();

  const {resourceType} = route.params;

  const resources = Storage.getFromStorage(
    (state) => state.storage[resourceType],
  );

  const mappedResources = resources?.map((resource) => ({
    title: resource.name,
    ...resource,
  }));

  const RenderItem = ({item}) => {
    const [content, setContent] = useState(undefined);

    useEffect(() => {
      axios.get(item.url).then(({data}) => {
        console.log(data);
        setContent(
          Object.keys(data).map((dataItem) => {
            return (
              <View>
                {typeof data[dataItem] === 'string' && (
                  <View>
                    <Text>{dataItem + ' : ' + data[dataItem]}</Text>
                  </View>
                )}
              </View>
            );
          }),
        );
      });
    }, []);

    return (
      <View>
        <ResourceCard item={item}>
          <View
            style={{
              backgroundColor: '#dd4e4e',
              flex: 1,
              marginRight: normalizePx(20),
              marginTop: normalizePx(35),
              marginBottom: normalizePx(35),
              padding: 15,
              borderRadius: 15,
              justifyContent: 'center',
              alignItems: 'flex-start',
            }}>
            {content}
          </View>
        </ResourceCard>
      </View>
    );
  };

  return (
    <View>
      <FlatList
        data={mappedResources}
        style={{backgroundColor: '#353535'}}
        renderItem={(args) => (
          <RenderItem {...args} resourceType={resourceType} />
        )}
      />
    </View>
  );
}

export default ResourceList;
