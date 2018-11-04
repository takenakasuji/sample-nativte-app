import React from 'react';
import { Container, Header, Content, List, ListItem, Left, Body, Right, Thumbnail, Text, Title, Tab, Tabs } from 'native-base';
import { WebBrowser } from 'expo';

import { MonoText } from '../components/StyledText';

export default class MessageScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <Container>
        <Header>
          <Body>
            <Title>メッセージ</Title>
          </Body>
        </Header>
        <Tabs>
          <Tab heading="未読">
            <Content>
              <List>
                <ListItem thumbnail>
                  <Left>
                    <Thumbnail source={{ uri: 'https://alleofficial.com/wp-content/uploads/2018/02/2eee5dd2d731e8442693047b166c8d45-e1517445061528.jpg' }} />
                  </Left>
                  <Body>
                    <Text style={{ lineHeight: 30 }}>
                      A.N
                    </Text>
                    <Text note>内田さんっていうんですね！素敵なお名前ですね！</Text>
                  </Body>
                  <Right>
                    <Text note>3:43 pm</Text>
                  </Right>
                </ListItem>
                <ListItem thumbnail>
                  <Left>
                    <Thumbnail source={{ uri: 'https://www.pairs.lv/wp-content/uploads/2015/08/shokaibun04.jpg' }} />
                  </Left>
                  <Body>
                    <Text>あゆみ</Text>
                    <Text note>太もも綺麗ですね！</Text>
                  </Body>
                  <Right>
                    <Text note>3:41 pm</Text>
                  </Right>
                </ListItem>
                <ListItem thumbnail>
                  <Left>
                    <Thumbnail source={{ uri: 'https://alleofficial.com/wp-content/uploads/2018/02/2eee5dd2d731e8442693047b166c8d45-e1517445061528.jpg' }} />
                  </Left>
                  <Body>
                    <Text>A.N</Text>
                    <Text note>内田さんっていうんですね！素敵なお名前ですね！</Text>
                  </Body>
                  <Right>
                    <Text note>3:43 pm</Text>
                  </Right>
                </ListItem>
                <ListItem thumbnail>
                  <Left>
                    <Thumbnail source={{ uri: 'https://www.pairs.lv/wp-content/uploads/2015/08/shokaibun04.jpg' }} />
                  </Left>
                  <Body>
                    <Text>あゆみ</Text>
                    <Text note>太もも綺麗ですね！</Text>
                  </Body>
                  <Right>
                    <Text note>3:41 pm</Text>
                  </Right>
                </ListItem>
              </List>
            </Content>
          </Tab>
          <Tab heading="既読">
            <Content>
              <List>
                <ListItem thumbnail>
                  <Left>
                    <Thumbnail source={{ uri: 'https://alleofficial.com/wp-content/uploads/2018/02/2eee5dd2d731e8442693047b166c8d45-e1517445061528.jpg' }} />
                  </Left>
                  <Body>
                    <Text style={{ lineHeight: 30 }}>
                      A.N
                    </Text>
                    <Text note>内田さんっていうんですね！素敵なお名前ですね！</Text>
                  </Body>
                  <Right>
                    <Text note>3:43 pm</Text>
                  </Right>
                </ListItem>
                <ListItem thumbnail>
                  <Left>
                    <Thumbnail source={{ uri: 'https://www.pairs.lv/wp-content/uploads/2015/08/shokaibun04.jpg' }} />
                  </Left>
                  <Body>
                    <Text>あゆみ</Text>
                    <Text note>太もも綺麗ですね！</Text>
                  </Body>
                  <Right>
                    <Text note>3:41 pm</Text>
                  </Right>
                </ListItem>
                <ListItem thumbnail>
                  <Left>
                    <Thumbnail source={{ uri: 'https://alleofficial.com/wp-content/uploads/2018/02/2eee5dd2d731e8442693047b166c8d45-e1517445061528.jpg' }} />
                  </Left>
                  <Body>
                    <Text>A.N</Text>
                    <Text note>内田さんっていうんですね！素敵なお名前ですね！</Text>
                  </Body>
                  <Right>
                    <Text note>3:43 pm</Text>
                  </Right>
                </ListItem>
                <ListItem thumbnail>
                  <Left>
                    <Thumbnail source={{ uri: 'https://www.pairs.lv/wp-content/uploads/2015/08/shokaibun04.jpg' }} />
                  </Left>
                  <Body>
                    <Text>あゆみ</Text>
                    <Text note>太もも綺麗ですね！</Text>
                  </Body>
                  <Right>
                    <Text note>3:41 pm</Text>
                  </Right>
                </ListItem>
              </List>
            </Content>
          </Tab>
        </Tabs>
      </Container>
    );
  }

  _maybeRenderDevelopmentModeWarning() {
    if (__DEV__) {
      const learnMoreButton = (
        <Text onPress={this._handleLearnMorePress} style={styles.helpLinkText}>
          Learn more
        </Text>
      );

      return (
        <Text style={styles.developmentModeText}>
          Development mode is enabled, your app will be slower but you can use useful development
          tools. {learnMoreButton}
        </Text>
      );
    } else {
      return (
        <Text style={styles.developmentModeText}>
          You are not in development mode, your app will run at full speed.
        </Text>
      );
    }
  }

  _handleLearnMorePress = () => {
    WebBrowser.openBrowserAsync('https://docs.expo.io/versions/latest/guides/development-mode');
  };

  _handleHelpPress = () => {
    WebBrowser.openBrowserAsync(
      'https://docs.expo.io/versions/latest/guides/up-and-running.html#can-t-see-your-changes'
    );
  };
}
