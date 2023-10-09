import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import CustomButton from '../../components/CustomButton/CustomButton';
import {buttonTypes} from '../../components/CustomButton/ButtonTypes';

const AddPostView = ({onInputChange,handleSubmit,form}) => {
  return (
    <View style={styles.form}>
      <Text style={styles.formTitle}>Yeni Gönder Ekle</Text>
      <View style={styles.inputGrup}>
        <Text style={styles.label}>Kullanıcı Adı</Text>
        <TextInput
        value={form.user}
        onChangeText={(text)=>onInputChange('user',text)}
          style={styles.input}
          placeholder="kullanıcı adı giriniz"
          placeholderTextColor={'gray'}
        />
      </View>

      <View style={styles.inputGrup}>
        <Text style={styles.label}>Başlık</Text>
        <TextInput
        value={form.title}
          onChangeText={(text)=>onInputChange('title',text)}
          style={styles.input}
          placeholder="başlık giriniz"
          placeholderTextColor={'gray'}
        />
      </View>
      <View style={styles.inputGrup}>
        <Text style={styles.label}>Açıklama</Text>
        <TextInput
        value={form.text}
          onChangeText={(text)=>onInputChange('text',text)}
          style={styles.input}
          placeholder="açıklama giriniz"
          placeholderTextColor={'gray'}
        />
      </View>

      <CustomButton
      onPress={()=>handleSubmit()}
        buttonTitle={'Gönder'}
        buttonType={buttonTypes.PRIMARY_SMALL}
      />
    </View>
  );
};

export default AddPostView;

const styles = StyleSheet.create({
  form: {
    backgroundColor: 'black',
    gap: 40,
    marginVertical: 50,
    marginHorizontal: 10,
    paddingHorizontal: 20,
    paddingVertical: 50,
    borderRadius: 10,
  },

  formTitle: {
    color: '#FFFFFF',
    textAlign: 'center',
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: '800',
  },

  inputGrup: {
    gap: 10,
  },

  label: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '700',
  },

  input: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: 'gold',
    borderRadius: 10,
    fontSize: 20,
  },
});
