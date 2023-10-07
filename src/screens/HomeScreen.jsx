import {FlatList, StyleSheet, Text, View} from 'react-native';
import React, {useCallback, useMemo, useState} from 'react';
import PersonCard from '../componenets/PersonCard';
import {data} from '../utils/constansts';

const HomeScreen = () => {
  const [isGreen, setIsGreen] = useState(false);
  const [title, setTitle] = useState('Kişi Listesi');
  const [age, setAge] = useState(0);
  console.log('HomeScreen Render');

  const memoizedCallback = useCallback(name => {
    for (let i = 0; i < 100000000; i++) {}
    setTitle(name);
  }, []);

  const multipleAge = () => {
    console.log('Fonksiyon çalıştı');
    for (let i = 0; i < 100000000; i++) {}
    return age + 10;
  };

  const memoizedAge = useMemo(() => multipleAge(), [age]);

  return (
    <View style={styles.mainContainer}>
      <View style={styles.headerContainer}>
        <Text
          onPress={() => setIsGreen(!isGreen)}
          style={[styles.headerTitle, {color: isGreen ? 'green' : 'white'}]}>
          {title}
        </Text>
        <Text style={styles.headerTitle}>{memoizedAge}</Text>
      </View>

      <FlatList
        data={data}
        renderItem={({item}) => (
          <PersonCard
            setTitle={memoizedCallback}
            personInfo={item}
            setAge={setAge}
          />
        )}
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  mainContainer: {
    height: '100%',
    backgroundColor: '#6b7280',
  },

  headerContainer: {
    backgroundColor: 'black',
    paddingHorizontal: 35,
    paddingVertical: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  headerTitle: {
    color: 'white',
    fontSize: 30,
    fontWeight: '700',
  },
});
