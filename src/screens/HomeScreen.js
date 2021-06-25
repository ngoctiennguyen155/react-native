import React, { useCallback } from "react";
import {
  Alert,
  Text,
  Button,
  Linking,
  StyleSheet,
  View,
  Image,
} from "react-native";

const t = ["tien", "pro"];

const HomeScreen = (props) => {
  const supportedURL = "https://google.com";
  const OpenURLButton = ({ url, children }) => {
    const handlePress = useCallback(async () => {
      // Checking if the link is supported for links with custom URL scheme.
      const supported = await Linking.canOpenURL(url);

      if (supported) {
        // Opening the link with some app, if the URL scheme is "http" the web link should be opened
        // by some browser in the mobile
        await Linking.openURL(url);
      } else {
        Alert.alert(`Don't know how to open this URL: ${url}`);
      }
    }, [url]);

    return <Button title={children} onPress={handlePress} />;
  };
  return (
    <View style={{ alignItems: "center" }}>
      <View>
        <Image
          source={{ uri: "https://reactnative.dev/docs/assets/p_cat1.png" }}
          style={{ width: 200, height: 200 }}
        />
      </View>
      <View>
        <Text style={styles.text}>Xin chào, Mình là Nguyễn Ngọc Tiễn</Text>
      </View>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: 40,
        }}
      >
        <OpenURLButton url={"https://github.com/ngoctiennguyen155"}>
          Github
        </OpenURLButton>
        <OpenURLButton url={"https://fb.com/7iennguyen"}>
          Facebook
        </OpenURLButton>
        <Button
          title={"Gmail"}
          onPress={() => {
            Alert.alert("Gmail của mình là:", "ngoctiennguyen155@gmail.com", [
              {
                text: "Cancel",
                onPress: () => console.log("Cancel Pressed"),
                style: "cancel",
              },
              { text: "OK", onPress: () => console.log("OK Pressed") },
            ]);
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    color: "red",
    textAlign: "center",
  },
});

export default HomeScreen;
