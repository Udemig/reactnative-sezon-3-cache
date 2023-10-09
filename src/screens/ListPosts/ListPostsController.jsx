import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import ListPostsView from './ListPostsView';
import axios from 'axios';

const ListPostsController = () => {
  const [postData, setPostData] = useState([]);
  useEffect(() => {
    axios
      .get('http://localhost:3000/posts')
      .then(res => setPostData(res.data))
      .catch(error => console.log(error));
  }, []);
  return <ListPostsView postData={postData} />;
};

export default ListPostsController;

const styles = StyleSheet.create({});
