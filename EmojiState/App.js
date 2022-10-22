import { Image,Text, StyleSheet, View, TouchableOpacity } from 'react-native'
import React, { Component } from 'react'

export default class App extends Component {
  state = {
    //Cho bien Selected:
    selected: require('../EmojiState/assets/emoji/haha.png'),
  }
  datas = [
    require('../EmojiState/assets/emoji/angry.png'),
    require('../EmojiState/assets/emoji/care.png'),
    require('../EmojiState/assets/emoji/haha.png'),
    require('../EmojiState/assets/emoji/like.png'),
    require('../EmojiState/assets/emoji/love.png'),
    require('../EmojiState/assets/emoji/sad.png'),
  ]

  onPressEmoji= (data)=>{
    this.setState({
      selected: data
    })
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>How do you feeling now ?</Text>
        {/* Hinh lớn */}
        <Image source={this.state.selected}/>
        {/* Các icon */}
        <View style={styles.container__emoji}>
          {this.datas.map((data, index) =>(
            <TouchableOpacity
              //Lắng nghe sự kiện click:
              onPress={() => this.onPressEmoji(data)}
            >
              {/* Từng icon sẽ có sự kiện click */}
              <Image style={styles.icon} source={data}/>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  icon:{
    width:24,
    height:24,
  },
  container:{
    flex:1,
    //Trục chính (Dọc):
    justifyContent:'center',
    //Trục phụ (Ngang):
    alignItems:'center',
  },
  container__emoji:{
    flexDirection:'row',
    width: '100%',
    justifyContent:'space-around',
  }
})