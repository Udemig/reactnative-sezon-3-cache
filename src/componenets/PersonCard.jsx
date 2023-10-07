import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React,{memo} from 'react';

const PersonCard = ({personInfo,setTitle,setAge}) => {
    console.log('Person Card Render')
  return (
    <TouchableOpacity style={styles.mainContainer} onPress={()=>setAge(personInfo.id)}>
      <View style={styles.leftContainer}>
        <View style={styles.imageContainer}>
          <Image source={{uri: personInfo.photo}} style={styles.image} />
        </View>
        <View>
          <Text style={styles.name} onPress={()=>setTitle(personInfo.first_name)}>
            {personInfo.first_name + '  ' + personInfo.last_name}
          </Text>
          <Text style={styles.job}>{personInfo.email}</Text>
        </View>
      </View>


      <View style={styles.infoContainer}>
<Text style={styles.name}>{personInfo.gender}</Text>
<Text style={styles.job}>{personInfo.id + 10}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default PersonCard

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    backgroundColor: 'black',
    margin: 15,
    paddingHorizontal: 15,
    paddingVertical: 15,
    alignItems:'center',
    gap:10
  },

  leftContainer: {
    flexDirection: 'row',
    gap: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    width: 100,
    height: 100,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
    objectFit: 'cover',
  },

  name: {
    color: 'white',
    fontSize: 18,
    fontWeight: '800',
    marginBottom: 10,
  },
  job: {
    color: '#6b7280',
    fontSize: 13,
    fontWeight: '800',
  },
});
