import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
  TextInput
} from "react-native";
import config from "../../config/index";

export default class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      liked: false,
      comment: false,
      post: false,
      text: "",
      screenWidth: Dimensions.get("window").width
    };
  }

  likedToggled() {
    this.setState({
      liked: !this.state.liked
    });
  }

  commentToggled() {
    this.setState({
      comment: !this.state.comment
    });
  }

  commentPostToggled() {
    this.setState({
      post: !this.state.post
    });
  }

  render() {
    const heartIconColor = this.state.liked ? "red" : null;
    const picUri = [
      "https://images.unsplash.com/photo-1535498730771-e735b998cd64?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80",
      // "https://images.unsplash.com/photo-1455459182396-ae46100617cb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1789&q=80",
      // "https://images.unsplash.com/photo-1484249326436-4e8628de5c54?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80"
    ];

    return picUri.map(uri => (
      <View style={{ flex: 1, width: "100%" }}>

        <View style={styles.homeUserBar}>
          <View style={{ flexDirection: "column", alignItems: "center" }}>
            <Image
              style={{
                height: 60,
                width: 60,
                borderRadius: 30,
              }}
              source={{
                uri:
                  "https://media.licdn.com/dms/image/C5603AQGgC6Rg0o1x2w/profile-displayphoto-shrink_200_200/0?e=1569456000&v=beta&t=VVMiFlu-endytob8rgMXW9UJkyYxozjOAaQm4Uv9ruU"
              }}
            />
            <Text style={{ marginLeft: 10, fontWeight: "400", fontSize: 13 }}>
              Your story
          </Text>
          </View>

          <View style={{ flexDirection: "column", alignItems: "center" }}>
            <Image
              style={styles.homeUserProfilePic}
              source={{
                uri:
                  "https://images.pexels.com/photos/1758144/pexels-photo-1758144.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
              }}
            />
            <Text style={{ marginLeft: 10, fontWeight: "400", fontSize: 13 }}>
              katerinaver
          </Text>
          </View>

          <View style={{ flexDirection: "column", alignItems: "center" }}>
            <Image
              style={styles.homeUserProfilePic}
              source={{
                uri:
                  "https://66.media.tumblr.com/7710830d03fb794e0097c18c546dab5f/tumblr_p0cs6bbe0L1ujygkoo4_250.png"
              }}
            />
            <Text style={{ marginLeft: 10, fontWeight: "400", fontSize: 13 }}>
              vitmandoo
          </Text>
          </View>

          <View style={{ flexDirection: "column", alignItems: "center" }}>
            <Image
              style={styles.homeUserProfilePic}
              source={{
                uri:
                  "https://66.media.tumblr.com/b8d6d73fb986ed337644d2db9c3eb9de/tumblr_pdxj8ebaj41vydp0uo7_250.png"
              }}
            />
            <Text style={{ marginLeft: 10, fontWeight: "400", fontSize: 13 }}>
              kotse
          </Text>
          </View>

          <View style={{ flexDirection: "column", alignItems: "center" }}>
            <Image
              style={styles.homeUserProfilePic}
              source={{
                uri:
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3ntePqgtdzvP9NMNm-h4fYxi1mZHwNpNwvTIAY_3r1RWH3cZ3eg"
              }}
            />
            <Text style={{ marginLeft: 10, fontWeight: "400", fontSize: 13 }}>
              davidb
          </Text>
          </View>
          <View>
            <Text style={{ fontSize: 20, fontWeight: "bold" }}></Text>
          </View>
        </View>


        <View style={styles.userBar}>
          <View style={{ flexDirection: "column", alignItems: "center" }}>
            <Image
              style={styles.userProfilePic}
              source={{
                uri:
                  "https://images.pexels.com/photos/1758144/pexels-photo-1758144.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
              }}
            />
            <Text style={{ marginLeft: 5, fontWeight: "200", fontSize: 12 }}>
              katerinaver
          </Text>
          </View>
          <View>
            <Text style={{ fontSize: 20, fontWeight: "bold" }}>...</Text>
          </View>
        </View>
        <TouchableOpacity
          onPress={() => {
            this.likedToggled();
          }}
          activeOpacity={0.6}
        >
          <Image
            style={{ width: this.state.screenWidth, height: 400 }}
            source={{
              uri
            }}
          />
        </TouchableOpacity>
        <View style={styles.iconBar}>
          <TouchableOpacity
            onPress={() => {
              this.likedToggled();
            }}
            activeOpacity={0.6}
          >
            <Image
              style={[
                styles.iconBar,
                {
                  height: 30,
                  width: 30,
                  tintColor: heartIconColor,
                  overlayColor: "hidden"
                }
              ]}
              source={config.images.heartIcon}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              this.commentToggled();
            }}
          >
            <Image
              style={[styles.iconBar, { height: 25, width: 25 }]}
              source={config.images.bubbleIcon}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              style={[styles.iconBar, { height: 25, width: 25 }]}
              source={config.images.directIcon}
            />
          </TouchableOpacity>
        </View>
        <View
          style={[
            this.state.liked === true ? {} : { display: "none" },
            { marginHorizontal: 10, paddingBottom: 10, flexDirection: "row" }
          ]}
        >
          <Text style={{ fontWeight: "600", paddingRight: 5 }}>You</Text>
          <Text>liked this</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            paddingHorizontal: 10,
            marginBottom: 20
          }}
        >
          <Text style={{ fontWeight: "600", paddingRight: 5 }}>katerinaver</Text>
          <Text>#some heading</Text>
        </View>
        <View
          style={[
            this.state.post === true ? {} : { display: "none" },
            {
              marginHorizontal: 10,
              paddingBottom: 10,
              flexDirection: "row",
              alignContent: "center",
              alignItems: "center"
            }
          ]}
        >
          <Text>Your comment is added</Text>
        </View>
        <View
          style={[
            this.state.comment === true ? {} : { display: "none" },
            {
              marginHorizontal: 10,
              paddingBottom: 10,
              flexDirection: "row",
              alignContent: "center",
              alignItems: "center"
            }
          ]}
        >
          <TextInput
            style={{
              borderWidth: 0.3,
              borderColor: "back",
              borderRadius: 20,
              height: 40,
              width: 250,
              paddingLeft: 10,
              fontSize: 15
            }}
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="Add a comment..."
            placeholderTextColor="grey"
          //onChangeText={this.handleChangeText}
          //value={this.state.text}
          />
          <TouchableOpacity
            onPress={() => {
              this.commentPostToggled();
            }}
          >
            <Text style={{ color: "blue", fontSize: 20, marginHorizontal: 10 }}>
              Post
          </Text>
          </TouchableOpacity>
        </View>
      </View>
    ));
  }
}



const styles = StyleSheet.create({
  tempNav: {
    width: "100%",
    height: 50,
    marginTop: 20,
    backgroundColor: "rgb(250,250,250)",
    borderBottomColor: "#EAEAEA",
    borderBottomWidth: 0.2,
    justifyContent: "center",
    alignItems: "center"
  },

  userBar: {
    width: "100%",
    height: config.styleConstants.rowHeight,
    borderBottomColor: "rgb(233,233,233)",
    flexDirection: "row",
    //paddingHorizontal: 10,
    marginTop: 20,
    marginBottom: 10,
    justifyContent: "space-between"
  },

  homeUserBar: {
    width: "100%",
    height: config.styleConstants.rowHeight * 1.6,
    borderBottomColor: "rgb(233,233,233)",
    flexDirection: "row",
    paddingHorizontal: 10,
    marginTop: 20,
    justifyContent: "space-between",
    borderBottomWidth: 1,
  },

  userProfilePic: {
    height: 40,
    width: 40,
    borderRadius: 20
  },

  homeUserProfilePic: {
    height: 60,
    width: 60,
    borderRadius: 30,
    borderColor: "red",
    borderWidth: 3
  },

  iconBar: {
    height: config.styleConstants.rowHeight,
    width: "100%",
    borderColor: "rgb(233,233,233)",
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 7
  },
  icon: {
    paddingHorizontal: 5,
    marginLeft: 5
  }
});
