/**
* @flow
*/
'use strict';

var MarvelInfoView = require('MarvelInfoView');
var React = require('react');
var View = require('View');
var {Text} = require('F8Text');
var F8Touchable = require('F8Touchable');
var StyleSheet = require('StyleSheet');
var ToolbarAndroid = require('ToolbarAndroid');
var Image = require('Image');
var {windowWidth} = require('constant');
var Linking = require('Linking');

import Hyperlink from 'react-native-hyperlink';


const shield = require('../img/shieldcolor.png');

class AboutContentView extends React.Component {

  constructor(props) {
    super(props);
    this.handleIconClicked = this.handleIconClicked.bind(this);
  }

  handleIconClicked() {
    this.context.openDrawer();
  }

  render() {
    return (
      <View style={{flex:1, flexDirection:'column',}}>
        <View style={{backgroundColor:'rgb(168, 31, 26)', height: 24}}
        />
        <ToolbarAndroid
          navIcon={shield}
          title='About'
          titleColor='white'
          onIconClicked= {this.handleIconClicked}
          style={styles.toolbar}
        />
        <Image
          source={require('../img/about_marvel_logo.png')}
          style={{width:windowWidth, height:200}}
        />
        <Text style={styles.description}>
          This is a React Native App based on coolest Marvel API. You can search the Marvel Heros here.
        </Text>
        <F8Touchable style={styles.item}>
          <View style={{flexDirection:'row'}}>
            <Hyperlink linkStyle={{color:'#2980b9'}} onPress={(url) => Linking.openURL(url)}>
              <Text style={styles.itemtext}>
                  Github: https://github.com/Shuijwan/marvel
              </Text>
            </Hyperlink>
          </View>
        </F8Touchable>
        <F8Touchable style={styles.item}>
          <View style={{flexDirection:'row'}}>
            <Hyperlink linkStyle={{color:'#2980b9'}} onPress={(url) => Linking.openURL(url)}>
              <Text style={styles.itemtext}>
                  Marvel: http://developer.marvel.com/
              </Text>
            </Hyperlink>
          </View>
        </F8Touchable>
        <View style={{flex:1}}/>
        <MarvelInfoView />
      </View>
    );
  }

}

AboutContentView.contextTypes = {
openDrawer: React.PropTypes.func,
};

var styles = StyleSheet.create({

  item: {
    height: 80,
    width: undefined,
  },

  description: {
    marginTop: 10,
    marginBottom: 40,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign:'center'
  },

  itemtext: {
    fontSize: 16,
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 10,
    paddingLeft: 20
  },

  toolbar: {
    height: 56,
    backgroundColor: 'rgb(168, 31, 26)',//red
    elevation: 2,
    borderRightWidth: 1,
    marginRight: -1,
    borderRightColor: 'transparent',
  },
});

module.exports = AboutContentView;
