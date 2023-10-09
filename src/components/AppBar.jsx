import {
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import CustomButton from './CustomButton/CustomButton';
import {buttonTypes} from './CustomButton/ButtonTypes';
import {useNavigation} from '@react-navigation/native';

const AppBar = ({activePage, setActivePage}) => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.appBarHeader}>Form Listesi</Text>

      {activePage === 'Gönderiler' ? (
        <CustomButton
          onPress={() => {
            setActivePage('Gönderi Ekle');
            navigation.navigate('AddPost');
          }}
          buttonTitle={'Gönderi Ekle'}
          buttonType={buttonTypes.PRIMARY_SMALL}
        />
      ) : (
        <CustomButton
          onPress={() => {
            setActivePage('Gönderiler');
            navigation.navigate('ListPost');
          }}
          buttonTitle={'Gönderiler'}
          buttonType={buttonTypes.PRIMARY_SMALL}
        />
      )}
    </View>
  );
};

export default AppBar;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
    alignItems: 'center',
  },
  appBarHeader: {
    color: '#FFFFFF',
    fontSize: 30,
    fontWeight: '800',
  },
});
