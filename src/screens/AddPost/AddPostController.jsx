import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import AddPostView from './AddPostView';
import AddPostModel from './AddPostModel';
import axios from 'axios';
import {useNavigation} from '@react-navigation/native';

const AddPostController = () => {
  const navigation = useNavigation();
  const formModel = new AddPostModel();
  const [form, setForm] = useState(formModel.state);
  //onsole.log(form)

  console.log(form);

  const onInputChange = (key, value) => {
    setForm({...form, [key]: value});
  };

  const handleSubmit = () => {
    if (!form.user || !form.title || !form.text) {
      console.log('dolurun');
      return;
    }

    axios
      .post('http://localhost:3000/posts', form)
      .then(() => {
        setForm({
          title: '',
          text: '',
          user: '',
        });
        navigation.navigate('ListPost');
      })
      .catch(error => console.log(error));
  };
  return (
    <AddPostView
      onInputChange={onInputChange}
      handleSubmit={handleSubmit}
      form={form}
    />
  );
};

export default AddPostController;

const styles = StyleSheet.create({});
