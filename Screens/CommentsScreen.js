import React, { useState } from "react";
import { FlatList, Image, StyleSheet, TextInput, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { selectPosts } from "../redux/Posts/selectorsPosts";
import { selectCurrentUserFirebase } from "../redux/Auth/selectorsAuth";
import { selectComments } from "../redux/Comments/selectorsComments";
import { useNavigation } from "@react-navigation/native";
import { addCommentsThunk } from "../redux/Comments/operations";

const CommentsScreen = (props) => {
  const dispatch = useDispatch();
  const { postId } = props.route.params;
  const navigation = useNavigation();

  const [textInput, setTextInput] = useState(null);

  const posts = useSelector(selectPosts);
  const currentUser = useSelector(selectCurrentUserFirebase);

  const comments = useSelector(selectComments);

  const currentCommentsPost = comments.filter(
    (comment) => comment.postId === postId
  );

  const currentPost = posts.find((post) => post.id === postId);

  const onSubmit = () => {
    if (textInput) {
      const comment = {
        comment: textInput,
        user: currentUser.uid,
        postId,
      };

      dispatch(addCommentsThunk(comment));
      setTextInput(null);
      navigation.navigate("Posts");
    }
  };

  return (
    <View style={styles.comments}>
      <View style={styles.photo}>
        <Image
          style={{ width: "100%", height: 240 }}
          source={{ uri: currentPost.pathUri }}
        />
      </View>

      <FlatList
        data={currentCommentsPost}
        contentContainerStyle={{
          gap: 24,
        }}
        renderItem={({ item }) => (
          <Comment post={item} guest={item.user === currentUser.uid} />
        )}
      />
      <View
        style={{
          position: "relative",
        }}
      >
        <View style={styles.sendSvg}>
          <SendCommentSvg onPress={onSubmit} />
        </View>
        <TextInput
          style={styles.textComment}
          multiline={true}
          numberOfLines={10}
          placeholderTextColor="#bdbdbd"
          placeholder="Комметувати ..."
          onChangeText={setTextInput}
          value={textInput}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  comments: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 32,
    paddingLeft: 16,
    paddingRight: 16,
    paddingBottom: 16,
    borderTopEndRadius: 8,
    overflow: "hidden",
    justifyContent: "space-between",
  },
  photo: {
    borderTopStartRadius: 8,
    borderTopEndRadius: 8,
    borderBottomStartRadius: 8,
    borderBottomEndRadius: 8,
    overflow: "hidden",
    marginBottom: 32,
  },
  textComment: {
    height: 50,
    backgroundColor: "rgba(246,246,246,1)",
    borderRadius: 100,
    padding: 16,
    fontSize: 16,
  },
  sendSvg: {
    position: "absolute",
    alignSelf: "flex-end",
    right: 8,
    top: 8,
    zIndex: 1,
  },
});

export default CommentsScreen;
