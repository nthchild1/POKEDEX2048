import React from 'react';
import {ScrollView, View} from 'react-native';
import styled from 'styled-components/native';
import ItemCard from '../../../src/uikit/ItemCard/ItemCard';
import {createStackNavigator} from '@react-navigation/stack';
import ResourceList from './ResourceList/ResourceList';

const HomeContainer = styled.View`
  background-color: #353535;
`;

const Title = styled.Text`
  color: white;
  font-size: 25px;
  font-weight: bold;
  margin: 5%;
`;

const {Navigator, Screen} = createStackNavigator();

const CategoriesScreen = ({navigation}) => {
  return (
    <HomeContainer>
      <ScrollView>
        <Title>Categories</Title>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignContent: 'center',
          }}>
          <View>
            <ItemCard
              size={150}
              title={'Regions'}
              imageBackgroundSource={
                'https://static.wikia.nocookie.net/ssb/images/8/81/Kanto.jpg/revision/latest?cb=20071231212224'
              }
              footerColor={'#3770ec'}
              onPress={() => {
                navigation.navigate('ResourceList', {
                  resourceType: 'regions',
                });
              }}
            />
            <ItemCard
              title={'Generations'}
              size={150}
              footerColor={'#d60d0d'}
              imageBackgroundSource={
                'https://sm.ign.com/ign_latam/screenshot/default/pokemonanime-1_tx78.jpg'
              }
              onPress={() => {
                navigation.navigate('ResourceList', {
                  resourceType: 'generations',
                });
              }}
            />
            <ItemCard
              title={'Abilities'}
              size={150}
              footerColor={'#ffd600'}
              imageBackgroundSource={
                'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/87643976-7fc1-4f59-98db-0177bf5f32d3/dawt9v6-277b36f8-308a-43b5-b8a2-4d5753c8eda4.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzg3NjQzOTc2LTdmYzEtNGY1OS05OGRiLTAxNzdiZjVmMzJkM1wvZGF3dDl2Ni0yNzdiMzZmOC0zMDhhLTQzYjUtYjhhMi00ZDU3NTNjOGVkYTQucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.xkW4HKEgMSr_Nnw84FXfYRJedINQt892FT-3W7HqJ0A'
              }
              onPress={() => {
                navigation.navigate('ResourceList', 'abilities');
              }}
            />
          </View>
          <View>
            <ItemCard
              size={150}
              title={'Types'}
              footerColor={'#8a20ff'}
              imageBackgroundSource={
                'https://res.cloudinary.com/lmn/image/upload/c_limit,h_360,w_640/e_sharpen:100/f_auto,fl_lossy,q_auto/v1/gameskinnyc/p/o/k/pokemon-types-image-drewlinne-deviant-art-ac4b2.jpg'
              }
              onPress={() => {
                navigation.navigate('ResourceList', {resourceType: 'types'});
              }}
            />
            <ItemCard
              title={'Versions'}
              size={150}
              footerColor={'#20a212'}
              imageBackgroundSource={
                'https://cdn.shopify.com/s/files/1/1050/5072/products/il_fullxfull.1061776301_frky_large.jpg'
              }
              onPress={() => {
                navigation.navigate('ResourceList', {resourceType: 'version'});
              }}
            />
          </View>
        </View>
      </ScrollView>
    </HomeContainer>
  );
};

function Categories({navigation}): JSX.Element {
  return (
    <Navigator initialRouteName="CategoriesScreen" headerMode="none">
      <Screen name="ResourceList" component={ResourceList} />
      <Screen
        name="CategoriesScreen"
        component={CategoriesScreen}
        {...{navigation}}
      />
    </Navigator>
  );
}

export default Categories;
