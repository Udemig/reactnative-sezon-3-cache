import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Title from '../../components/Title/Title';
import {titleTypes} from '../../components/Title/TitleTypes';

const ListPostsView = ({postData}) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={postData}
        renderItem={({item}) => (
          <View style={styles.post}>
            <View style={styles.info}>
              <Title
                titleType={titleTypes.TITLE_WHITE_20_800}
                title={item.title}
              />
              <Title
                title={item.user}
                titleType={titleTypes.TITLE_GOLD_15_800}
              />
            </View>
            <Text style={styles.text}>{item.text}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default ListPostsView;

const styles = StyleSheet.create({
  post: {
    backgroundColor: 'black',
    gap: 20,
    margin: 5,
    padding: 20,
    borderRadius: 8,
  },
  info: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  text: {
    color: 'gray',
    fontSize: 15,
    fontWeight: '500',
  },
});
