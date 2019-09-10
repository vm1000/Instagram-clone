import React, { Component } from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import { PostFeed } from './components/container'
import config from "./config/index";

export default class InstaClone extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render = () => {
    const { navigation } = this.props;
    return (
      <View style={{ flex: 1, width: "100%", height: "100%" }}>
        <View style={styles.headerNavigation}>
          <Text style={{ fontSize: 20, fontWeight: "600" }}>Activity</Text>
        </View>
        <View style={{ borderBottomColor: "grey", borderBottomWidth: 0.2, margin: 10 }}>
          <Text style={{ fontWeight: "600", marginVertical: 10 }}>
            Yesterday
          </Text>
          <Text style={{ marginVertical: 10 }}>
            katembo started following you
          </Text>
        </View>

        <View style={{ borderBottomColor: "grey", borderBottomWidth: 0.2, margin: 10 }}>
          <Text style={{ fontWeight: "600", marginVertical: 10 }}>
            This month
          </Text>
          <Text style={{ marginVertical: 10 }}>
            katembo started following you
          </Text>
        </View>

        <View style={{ borderBottomColor: "grey", borderBottomWidth: 0.2, margin: 10 }}>
          <Text style={{ fontWeight: "600", marginVertical: 10 }}>
            Earlier
          </Text>
          <Text style={{ marginVertical: 10 }}>
            katembo started following you
          </Text>
        </View>
      </View>
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
    backgroundColor: "rgb(250,250,250)",
    borderTopColor: "grey",
    borderTopWidth: 0.2,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row"
  },

})
