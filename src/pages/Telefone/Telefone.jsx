import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

export const Telefone = () => {
  return (
    <View style={styles.container}>
      <View style={styles.navbar}>
        <TouchableOpacity onPress={() => {}}>
          <Image source={require("../../../assets/bus.png")} />
        </TouchableOpacity>
        <Text style={styles.textNavbar}>SOS Emergência</Text>
        <Text></Text>
      </View>

      <View style={styles.serviceContainer}>
        <View style={styles.service}>
          <View style={styles.dataService}>
            <View style={styles.containerImage}>
              <Image
                source={require("../../../assets/bus.png")}
                style={styles.icon}
              />
            </View>
            <View style={styles.textService}>
              <Text style={styles.titleService}>Bombeiros</Text>
              <Text style={styles.span}>193</Text>
            </View>
          </View>
          <TouchableOpacity onPress={() => {}}>
            <View style={styles.containerImage}>
              <Image
                source={require("../../../assets/bus.png")}
                style={styles.icon}
              />
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.service}>
          <View style={styles.dataService}>
            <View style={styles.containerImage}>
              <Image
                source={require("../../../assets/bus.png")}
                style={styles.icon}
              />
            </View>
            <View style={styles.textService}>
              <Text style={styles.titleService}>Polícia</Text>
              <Text style={styles.span}>190</Text>
            </View>
          </View>
          <TouchableOpacity onPress={() => {}}>
            <View style={styles.containerImage}>
              <Image
                source={require("../../../assets/bus.png")}
                style={styles.icon}
              />
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.service}>
          <View style={styles.dataService}>
            <View style={styles.containerImage}>
              <Image
                source={require("../../../assets/bus.png")}
                style={styles.icon}
              />
            </View>
            <View style={styles.textService}>
              <Text style={styles.titleService}>Polícia Rodoviária</Text>
              <Text style={styles.span}>191</Text>
            </View>
          </View>
          <TouchableOpacity onPress={() => {}}>
            <View style={styles.containerImage}>
              <Image
                source={require("../../../assets/bus.png")}
                style={styles.icon}
              />
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.service}>
          <View style={styles.dataService}>
            <View style={styles.containerImage}>
              <Image
                source={require("../../../assets/bus.png")}
                style={styles.icon}
              />
            </View>
            <View style={styles.textService}>
              <Text style={styles.titleService}>SAMU</Text>
              <Text style={styles.span}>192</Text>
            </View>
          </View>
          <TouchableOpacity onPress={() => {}}>
            <View style={styles.containerImage}>
              <Image
                source={require("../../../assets/bus.png")}
                style={styles.icon}
              />
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity style={styles.button} onPress={() => {}}>
        <Image source={require("../../../assets/bus.png")} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",
  },
  navbar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop: 40,
    paddingHorizontal: 20,
    marginBottom: 10,
    height: 120,
    borderBottomWidth: 1,
    borderColor: "#f0f0f0",
  },
  textNavbar: {
    fontWeight: "bold",
    fontSize: 18,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  serviceContainer: {
    flexDirection: "column",
  },
  service: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 20,
    paddingHorizontal: 10,
    backgroundColor: "#ddd",
    marginBottom: 10,
    height: 100,
  },
  containerImage: {
    width: 50,
    height: 50,
  },
  icon: {
    width: "100%",
    height: "100%",
  },
  dataService: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 20,
  },
  textService: {
    flexDirection: "column",
  },
  titleService: {
    fontWeight: "bold",
  },
  span: {
    color: "gray",
    fontWeight: "500",
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    bottom: 50,
    width: "100%",
  },
});
