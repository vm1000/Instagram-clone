import React, { Component } from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput } from 'react-native'
import { SafeAreaView } from 'react-navigation';


export default class InstaHome extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    return (
      <SafeAreaView style={{ flex: 1, width: "100%", height: "100%" }}>
        <View >
          <TextInput
            style={{
              backgroundColor: "silver",
              opacity: 0.8,
              color: "black",
              height: 40,
              borderRadius: 10,
              overflow: "hidden",
              marginTop: 10,
              marginRight: 10,
              marginLeft: 10,
              padding: 10
            }}
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="🔍 Search"
            placeholderTextColor="grey"
            onChangeText={text => this.setState({ query: text })}
            //onChangeText={this.handleChangeText}
            value={this.state.query} />
        </View>


        <View>


          <View style={{ marginTop: 10, flexDirection: "row", alignContent: "center", alignItems: "center" }}>
            <Image style={{ height: 120, width: 120, margin: 2 }} source={{
              uri:
                "https://images.unsplash.com/photo-1535498730771-e735b998cd64?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"
            }} />
            <Image style={{ height: 120, width: 120, margin: 3 }} source={{
              uri:
                "https://images.unsplash.com/photo-1535498730771-e735b998cd64?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"
            }} />
            <Image style={{ height: 120, width: 120, margin: 2 }} source={{
              uri:
                "https://images.unsplash.com/photo-1535498730771-e735b998cd64?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"
            }} />

          </View>
          <View style={{ marginTop: 0, flexDirection: "row", alignContent: "center", alignItems: "center" }}>
            <Image style={{ height: 120, width: 120, margin: 2 }} source={{
              uri:
                "http://pinet.org.uk/assets/images/desktop-background.png"
            }} />
            <Image style={{ height: 120, width: 120, margin: 3 }} source={{
              uri:
                "http://pinet.org.uk/assets/images/desktop-background.png"
            }} />
            <Image style={{ height: 120, width: 120, margin: 2 }} source={{
              uri:
                "http://pinet.org.uk/assets/images/desktop-background.png"
            }} />

          </View>

          <View style={{ marginTop: 0, flexDirection: "row", alignContent: "center", alignItems: "center" }}>
            <Image style={{ height: 120, width: 120, margin: 2 }} source={{
              uri:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSv6abO_KAzlQT-e7562eYvTuIWyKcW20-GBNYq5bMcyrfLLb-W"
            }} />
            <Image style={{ height: 120, width: 120, margin: 3 }} source={{
              uri:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSv6abO_KAzlQT-e7562eYvTuIWyKcW20-GBNYq5bMcyrfLLb-W"
            }} />
            <Image style={{ height: 120, width: 120, margin: 2 }} source={{
              uri:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSv6abO_KAzlQT-e7562eYvTuIWyKcW20-GBNYq5bMcyrfLLb-W"
            }} />

          </View>

          <View style={{ marginTop: 0, flexDirection: "row", alignContent: "center", alignItems: "center" }}>
            <Image style={{ height: 120, width: 120, margin: 2 }} source={{
              uri:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThLrguYqvw26BRCjh9NQikU7xd4ZoH9fzYf8aJT1NW-saaCO2U"
            }} />
            <Image style={{ height: 120, width: 120, margin: 3 }} source={{
              uri:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThLrguYqvw26BRCjh9NQikU7xd4ZoH9fzYf8aJT1NW-saaCO2U"
            }} />
            <Image style={{ height: 120, width: 120, margin: 2 }} source={{
              uri:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThLrguYqvw26BRCjh9NQikU7xd4ZoH9fzYf8aJT1NW-saaCO2U"
            }} />

          </View>


          {/* <View style={{ marginTop: 0, flexDirection: "row", alignContent: "flex-start", alignItems: "flex-start" }}>
            <Image style={{ height: 244, width: 244, margin: 2 }} source={{
              uri:
                "https://images.unsplash.com/photo-1535498730771-e735b998cd64?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"
            }} />
            <Image style={{ height: 120, width: 120, margin: 3 }} source={{
              uri:
                "https://images.unsplash.com/photo-1535498730771-e735b998cd64?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"
            }} />
            <Image style={{ height: 120, width: 120, margin: 3 }} source={{
              uri:
                "https://images.unsplash.com/photo-1535498730771-e735b998cd64?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"
            }} />
          </View> */}

        </View>
        {/* )
      }
    } */}



        {/* <View style={styles.footerNavigation}>
          <TouchableOpacity>
            <Image style={{ height: 30, width: 30, marginLeft: 20 }} source={{ uri: "https://image.flaticon.com/icons/png/512/1947/1947273.png" }} />
          </TouchableOpacity> */}
        {/* <TouchableOpacity>
            <Image style={{ height: 30, width: 30 }} source={config.images.searchIcon} />
          </TouchableOpacity> */}
        {/* <TouchableOpacity>
            <Image style={{ height: 30, width: 30 }} source={{ uri: "https://image.flaticon.com/icons/png/512/1947/1947279.png" }} />
          </TouchableOpacity> */}
        {/* <TouchableOpacity>
            <Image style={{ height: 30, width: 30 }} source={config.images.heartIcon} />
          </TouchableOpacity> */}
        {/* <TouchableOpacity>
            <Image style={{ height: 30, width: 30, borderRadius: 15, overflow: "hidden", marginRight: 20 }} source={{ uri: "https://media.licdn.com/dms/image/C5603AQGgC6Rg0o1x2w/profile-displayphoto-shrink_200_200/0?e=1569456000&v=beta&t=VVMiFlu-endytob8rgMXW9UJkyYxozjOAaQm4Uv9ruU" }} />
          </TouchableOpacity>
        </View> */}

      </SafeAreaView>
    );
  }
}


const styles = StyleSheet.create({
  headerNavigation: {
    width: '100%',
    height: 50,
    marginTop: 30,
    backgroundColor: "rgb(250,250,250)",
    borderBottomColor: "grey",
    borderBottomWidth: 0.2,
    justifyContent: "center",
    alignItems: "center"
  },
  footerNavigation: {
    width: '100%',
    height: 70,
    //marginTop: 30,
    backgroundColor: "rgb(250,250,250)",
    borderTopColor: "grey",
    borderTopWidth: 0.2,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row"
  },

})
