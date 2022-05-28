import React from 'react';
import {View, FlatList} from 'react-native';
import {styles} from '../theme/appTheme';
import FlatListMenuItem from '../components/FlatListMenuItem';
import {menuItems} from '../data/menuItems';
import HeaderTitle from '../components/HeaderTitle';

const HomeScreen = () => {
  const ItemSeparator = () => {
    return (
      <View style={{borderBottomWidth: 1, opacity: 0.4, marginVertical: 5}} />
    );
  };

  return (
    <View style={{flex: 1, ...styles.globalMargin}}>
      <FlatList
        data={menuItems}
        renderItem={({item}) => <FlatListMenuItem menuItem={item} />}
        keyExtractor={item => item.name}
        ListHeaderComponent={<HeaderTitle title="Menu Options" />}
        ItemSeparatorComponent={ItemSeparator}
      />
    </View>
  );
};

export default HomeScreen;
