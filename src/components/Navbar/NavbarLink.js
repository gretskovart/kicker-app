// @flow

import React, { Component } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "./Navbar.styles";

type Props = {
  title: string,
  active: boolean
};

class NavbarLink extends Component<Props> {
  render() {
    const { title, active, ...props } = this.props;
    return (
      <TouchableOpacity style={styles.link} {...props}>
        <View>
          <Text style={[styles.linkText, active ? styles.linkActive : null]}>
            {title}
          </Text>
        </View>
      </TouchableOpacity>
    );
  }
}

export default NavbarLink;
