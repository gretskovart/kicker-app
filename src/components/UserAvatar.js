import React from "react";
import { View, Image, Text } from "react-native";
import { TEAM_BLUE } from "../constants";

const UserAvatar = ({ user, size, team, ...rest }) => (
  <View style={{ borderRadius: size / 2, overflow: "hidden" }}>
    {user.photoUrl ? (
      <Image
        source={{ uri: user.photoUrl }}
        style={{ width: size, height: size }}
        {...rest}
      />
    ) : (
      <View
        style={{
          width: size,
          height: size,
          backgroundColor: team === TEAM_BLUE ? "#235cff" : "#ff234a",
          alignItems: "center",
          justifyContent: "center"
        }}
        {...rest}
      >
        <Text style={{ color: "white", fontSize: size / 2 }}>
          {user.name
            .split(" ")
            .map(word => word[0])
            .slice(0, 2)
            .join("")}
        </Text>
      </View>
    )}
  </View>
);

export default UserAvatar;
