import { Pressable } from "react-native";
import LogOutIcon from "../assets/icons/LogOutIcon";

const LogOut = () => {
  return (
    <Pressable
      onPress={() => {
        console.log("log out");
      }}
    >
      <LogOutIcon />
    </Pressable>
  );
};

export default LogOut;
