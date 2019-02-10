// @flow
import React from "react";
import { TouchableOpacity, View, Text, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  buttonContainer: {
    height: 64,
    borderRadius: 32,
    alignItems: "center",
    justifyContent: "center"
  },
  buttonPrimaryContainer: {
    borderWidth: 4
  },
  textContainer: {
    position: "relative"
  },
  textRegular: {
    fontSize: 18
  },
  textPrimary: {
    fontSize: 24
  },
  textShadow: {
    fontFamily: "GothamPro-Black",
    color: "rgba(0, 0, 0, 0.1)",
    textAlign: "center",
    position: "absolute",
    top: 4,
    letterSpacing: 1.3
  },
  text: {
    fontFamily: "GothamPro-Black",
    textAlign: "center",
    letterSpacing: 1.3
  }
});

type Props = {
  color: string,
  onPress: Function,
  children: React.ReactNode,
  primary: boolean,
  style: StyleSheet.Styles,
  disabled: boolean
};

const Button = ({
  color,
  onPress,
  children,
  primary,
  style,
  disabled
}: Props) => (
  <TouchableOpacity onPress={onPress} style={style} disabled={disabled}>
    <View
      style={[
        styles.buttonContainer,
        primary ? styles.buttonPrimaryContainer : null,
        { borderColor: color }
      ]}
    >
      <View style={styles.textContainer}>
        {primary && (
          <Text style={[styles.textShadow, styles.textPrimary]}>
            {children}
          </Text>
        )}
        <Text
          style={[
            styles.text,
            primary ? styles.textPrimary : styles.textRegular,
            { color }
          ]}
        >
          {children}
        </Text>
      </View>
    </View>
  </TouchableOpacity>
);

export default Button;
