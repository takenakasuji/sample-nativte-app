import React from 'react';
import { WebBrowser } from 'expo';
import { StyleSheet, ScrollView, Image, View } from 'react-native';
import { Container, Header, Body, Title, Text, Badge, Icon } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import GridView from 'react-native-super-grid';
import { MonoText } from '../components/StyledText';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    const items = [
      { age: 24, prefecture: '東京都', url: 'https://alleofficial.com/wp-content/uploads/2018/02/2eee5dd2d731e8442693047b166c8d45-e1517445061528.jpg'},
      { age: 22, prefecture: '神奈川県', url: 'https://www.pairs.lv/wp-content/uploads/2015/08/shokaibun04.jpg'},
      { age: 21, prefecture: '千葉県', url: 'http://cdn-ak.f.st-hatena.com/images/fotolife/g/gucchi22/20160130/20160130203045.jpg'},
      { age: 26, prefecture: '埼玉県', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmSTR_FvZIZXiewOrY_adB2D-srD8gfEic75Iu1RNilVbJJszi'},
      { age: 25, prefecture: '東京都', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqzQQWQn3C8lIzOM5j07qDNYja0AqtPxgti5C5LazDdsLA-CBD4Q'},
      { age: 30, prefecture: '北海道', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsKX70Z2ocHHKGa1TWIpyn60G1n_Vx3fZ17XMdcSEEo24wZ1HI7Q'},
      { age: 29, prefecture: '東京都', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWNbfG_SzB0ybQg-NAYpbYAbmP2IuRpFYuwTjHmmPkOkQ6XTiB'},
      { age: 27, prefecture: '京都府', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzmCEN7H9mPQ7atTAjA6mNYFtuRfDYvaMTfpCnPzJaXA-ulDne'},
      { age: 18, prefecture: '千葉県', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnExv9pWyCnLLFV-o8E8ZqEDAW8Wt3dY-v2caqdn6MBWp-15ws'},
    ];
    return (
      <Container style={{backgroundColor: '#F6F6F6'}}>
        <Header>
          <Body>
            <Title>ゆめ活</Title>
          </Body>
        </Header>
        <GridView
          itemDimension={130}
          items={items}
          style={styles.gridView}
          renderItem={item => (
            <View style={styles.itemContainer}>
              <Image
                style={{ height: 240 }}
                source={{ uri: item.url }} 
              >
              </Image>
              <View style={{ paddingTop: 4 }}>
                <Text style={styles.item}><Icon style={{fontSize: 15, color: '#15A773'}} name='ios-checkmark-circle' /> {item.age}才  {item.prefecture}</Text>
              </View>
            </View>
          )}
        />
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  gridView: {
    paddingTop: 1,
    flex: 1,
  },
  itemContainer: {
    justifyContent: 'flex-end',
    borderRadius: 2,
    // padding: 5,
    height: 270,
  },
  item: {
    fontSize: 14,
    color: '#333333',
    fontWeight: '500',
  },
});