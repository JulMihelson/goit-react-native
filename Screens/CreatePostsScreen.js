import {
  View,
  Image,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Pressable,
  KeyboardAvoidingView,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { useEffect, useRef, useState } from "react";
import { Camera } from "expo-camera";
import * as MediaLibrary from "expo-media-library";
import { AntDesign } from "@expo/vector-icons";

const CreatePostsScreen = ({ navigation }) => {
  const [hasPermission, setHasPermission] = useState(null);
  const cameraRef = useRef(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [photo, setPhoto] = useState();

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      await MediaLibrary.requestPermissionsAsync();

      setHasPermission(status === "granted");
    })();
  }, []);

  let takeAPicture = async () => {
    let options = {
      quality: 1,
      base64: true,
      exif: false,
    };
    let newPhoto = await cameraRef.current.takePictureAsync(options);
    setPhoto(newPhoto);
  };

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={styles.container}>
      <View style={styles.cameraContainer}>
        {!photo ? (
          <Camera style={styles.camera} type={type} ref={cameraRef}>
            <View style={styles.photoView}>
              <TouchableOpacity
                style={styles.flipContainer}
                onPress={() => {
                  setType(
                    type === Camera.Constants.Type.back
                      ? Camera.Constants.Type.front
                      : Camera.Constants.Type.back
                  );
                }}
              ></TouchableOpacity>
              <TouchableOpacity style={styles.button} onPress={takeAPicture}>
                <View style={styles.makePhoto}>
                  <Feather name="camera" size={24} color="black" />
                </View>
              </TouchableOpacity>
            </View>
          </Camera>
        ) : (
          <Image
            style={{ width: "100%", height: 250, borderRadius: 8 }}
            source={{ uri: "data:image/jpj;base64," + photo.base64 }}
          />
        )}

        <Text
          onPress={() => {
            console.log("працює");
            setPhoto(null);
          }}
          style={styles.textReduct}
        >
          Редагувати фото
        </Text>
      </View>

      <KeyboardAvoidingView
        behavior={Platform.OS == "ios" ? "padding" : "height"}
      >
        <View style={styles.textInputs}>
          <TextInput
            style={styles.inputName}
            keyboardType="default"
            placeholder="Назва..."
          />
          <TextInput style={styles.inputLocation} placeholder="Місцевість..." />
          <Text
            style={styles.mapIcon}
            onPress={() => {
              navigation.navigate("MapScreen");
            }}
          >
            <Feather name="map-pin" size={24} color="black" />
          </Text>
        </View>
      </KeyboardAvoidingView>

      <Pressable
        onPress={console.log("publish")}
        style={({ pressed }) => [
          {
            backgroundColor: pressed ? "#FF6C00" : "#F6F6F6",
          },
          styles.buttonPublish,
        ]}
      >
        <Text style={styles.buttonPrint}>Опублікувати</Text>
      </Pressable>
      <AntDesign
        style={styles.deleteIcon}
        name="delete"
        size={24}
        color="black"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 32,
    backgroundColor: "#fff",
    alignContent: "center",
  },
  cameraContainer: {
    height: 240,
    marginBottom: 8,
    backgroundColor: "#E8E8E8",
    border: 1,
    borderColor: "#E8E8E8",
    borderRadius: 8,
  },

  camera: {
    height: 240,
  },
  photoView: {
    flex: 1,
    backgroundColor: "transparent",
    justifyContent: "center",
  },

  flipContainer: {
    flex: 0.1,
    alignSelf: "flex-end",
  },

  button: { alignSelf: "center" },
  textInputs: {
    marginTop: 48,
  },
  makePhoto: {
    borderWidth: 2,
    backgroundColor: "#FFFFFF4D",
    height: 50,
    width: 50,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
  },

  textReduct: {
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    color: "#BDBDBD",
    marginTop: 16,
    marginBottom: 32,
  },
  buttonPublish: {
    backgroundColor: "#FF6C00",
    borderRadius: 100,
    paddingVertical: 16,
    alignItems: "center",
    width: "100%",
  },
  buttonPrint: {
    color: "#FFF",
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    lineHeight: 19,
  },
  inputName: {
    borderBottomWidth: 1,
    borderBottomColor: "#E8E8E8",
    height: 50,
    marginBottom: 16,
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    width: "100%",
  },
  inputLocation: {
    borderBottomWidth: 1,
    borderBottomColor: "#E8E8E8",
    height: 50,
    marginBottom: 32,
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    width: "100%",
    paddingLeft: 28,
  },
  deleteIcon: {
    marginTop: 110,
    alignSelf: "center",
  },
  mapIcon: {
    position: "absolute",
    top: 79,
  },
});

export default CreatePostsScreen;
