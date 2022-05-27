import React from 'react';
import {View, FlatList, Text} from 'react-native';
import {styles} from '../theme/appTheme';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import FlatListMenuItem from '../components/FlatListMenuItem';
import {menuItems} from '../data/menuItems';

const HomeScreen = () => {
  const {top} = useSafeAreaInsets();

  const renderListHeader = () => {
    return (
      <View style={{marginTop: top + 20, marginBottom: 20}}>
        <Text style={styles.title}>Menu Options</Text>
      </View>
    );
  };

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
        ListHeaderComponent={renderListHeader}
        ItemSeparatorComponent={ItemSeparator}
      />
    </View>
  );
};

export default HomeScreen;
