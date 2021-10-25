import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {View, ScrollView, FlatList} from 'react-native';
import FastImage from 'react-native-fast-image';
import SearchBar from 'react-native-dynamic-search-bar';
import Typography from '../../components/Typography';
import {RectButton} from 'react-native-gesture-handler';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const SongStack = createBottomTabNavigator();

const Home = () => {
  const [data, setData] = useState([]);

  const loadDate = async () => {
    try {
      const res = await axios.get(
        'https://jsonplaceholder.typicode.com/photos?_page=1&_limit=10',
      );
      setData(res.data);
    } catch (error) {}
  };

  useEffect(() => {
    loadDate();
  }, []);

  const renderItem = ({item}) => {
    return (
      <RectButton
        key={item.id}
        style={{
          height: 200,
          aspectRatio: 3 / 2,
          borderRadius: 10,
        }}>
        <FastImage
          source={{
            uri: `${item.url}.png`,
          }}
          style={{
            flex: 1,
            borderRadius: 10,
          }}
          resizeMode="cover"
        />
        <View
          style={{
            position: 'absolute',
            alignSelf: 'flex-end',
            bottom: 0,
            left: 0,
            flex: 1,
            height: 70,
            width: 300,
            backgroundColor: '#3d3d3d',
            opacity: 0.6,
            borderBottomEndRadius: 10,
            borderBottomStartRadius: 10,
          }}>
          <Typography variant="body1" style={{padding: 8, color: '#fff'}}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          </Typography>
        </View>
      </RectButton>
    );
  };

  const keyExtractor = item => `${item.id}`;

  return (
    <ScrollView>
      <View>
        <View>
          <SearchBar
            placeholder="Search here"
            style={{marginVertical: 20}}
            onPress={() => alert('onPress')}
            onChangeText={() => {}}
          />
        </View>

        <View>
          <ScrollView style={{flex: 1}}>
            <FlatList
              horizontal
              showsHorizontalScrollIndicator={false}
              data={data}
              renderItem={renderItem}
              keyExtractor={keyExtractor}
              ItemSeparatorComponent={() => <View style={{width: 20}} />}
              contentContainerStyle={{padding: 20}}
              pagingEnabled
              snapToAlignment="center"
              decelerationRate="fast"
              snapToInterval={330}
            />
          </ScrollView>
        </View>
      
      </View>
    </ScrollView>
  );
};

export default Home;