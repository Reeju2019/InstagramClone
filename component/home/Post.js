import React from "react";
import { useNavigation } from "@react-navigation/core";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { Divider } from "react-native-elements";
import {
  Entypo,
  Fontisto,
  Feather,
  AntDesign,
  Ionicons,
} from "react-native-vector-icons";

const postFooterIcons = [
  {
    name: "Like",
    url: "https://img.icons8.com/material-outlined/24/ffffff/filled-like.png",
    likedUrl: "https://img.icons8.com/material/24/ffffff/filled-like--v1.png",
  },
  {
    name: "comment",
    url: "https://img.icons8.com/material-outlined/24/ffffff/filled-topic.png",
  },
  {
    name: "share",
    url: "https://img.icons8.com/material-outlined/24/ffffff/filled-sent.png",
  },
  {
    name: "bookmark",
    url: "https://img.icons8.com/material-outlined/24/ffffff/bookmark-ribbon.png",
  },
];

const Post = ({ post }) => {
  return (
    <View style={{ marginBottom: 30 }}>
      <Divider style={{ backgroundColor: "white" }} />
      <PostHeader post={post} />
      <PostImage post={post} />
      <View style={{ marginHorizontal: 15, marginTop: 10 }}>
        <PostFooter post={post} />
        <Likes post={post} />
        <Caption post={post} />
        <CommentsSection post={post} />
        <Comments post={post} />
      </View>
    </View>
  );
};
// const PostHeader = ({ post, postOwnerData, formModal, setModalVisible }) => {

//     const navigation = useNavigation()
//     return (
//         <View style={styles.postHeaderContainer}>
//             <View style={styles.goBackButtonContainer}>

//                 {formModal && <TouchableOpacity onPress={() => setModalVisible(false)}>
//                     <Ionicons name="chevron-back" size={30} color="white" style={styles.goBackButton} />
//                 </TouchableOpacity>}
//                 <TouchableOpacity onPress={() => navigation.navigate("ProfileScreen", {
//                     otherUserUid:
//                     {
//                         uid: post.owner_uid,
//                     },
//                     userEmail: post.owner_email
//                 }
//                 )} style={styles.PostHeaderUserContainer}>
//                     <Image style={styles.profilePicture} source={{ uri: postOwnerData.profilePicture }} />
//                     <Text style={styles.userName}>{postOwnerData.username}</Text>
//                 </TouchableOpacity>
//             </View>
//             <Entypo name="dots-three-vertical" color="gray" size={20} />
//         </View>
//     )
// }

const PostHeader = ({ post, postOwnerData, formModal, setModalVisible }) => {
  const navigation = useNavigation();
  return (
    <View style={styles.postHeaderContainer}>
      <View style={styles.goBackButtonContainer}>
        {formModal && (
          <TouchableOpacity onPress={() => setModalVisible(false)}>
            <Ionicons
              name="chevron-back"
              size={30}
              color="white"
              style={styles.goBackButton}
            />
          </TouchableOpacity>
        )}
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("ProfileScreen", {
              otherUserUid: {
                uid: post.owner_uid,
              },
              userEmail: post.owner_email,
            })
          }
          style={styles.PostHeaderUserContainer}
        >
          <Image
            style={styles.profilePicture}
            source={{ uri: post.profile_picture }}
          />
          <Text style={styles.userName}>{post.user}</Text>
        </TouchableOpacity>
      </View>
      <Entypo name="dots-three-vertical" color="gray" size={20} />
    </View>
  );
};
const PostImage = ({ post }) => (
  <View style={{ width: "100%", height: 450 }}>
    <Image source={{ uri: post.imageUrl }} style={styles.postImage} />
  </View>
);

// const PostFooter = ({ icon }) => {
//   return (
//     <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
//       {PostFooterIcons.map((icon) => (
//         <PostFooterIcons key={icon.name} icon={icon} />
//       ))}
//     </View>
//   );
// };

// const Icon = ({ name, imageUrl, linkedImageUrl }) => (
//   <View style={{ flexDirection: "row", alignItems: "center" }}>
//     <Image source={{ uri: imageUrl }} style={styles.icon} />
//     <Text style={{ color: "white", marginLeft: 5 }}>{name}</Text>
//   </View>
// );

const PostFooter = ({ post }) => (
  <View
    style={{
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
    }}
  >
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        width: "32%",
        justifyContent: "space-between",
      }}
    >
      <Icon imgStyle={styles.footerIcon} imgUrl={postFooterIcons[0].url} />
      <Icon imgStyle={styles.footerIcon} imgUrl={postFooterIcons[1].url} />
      <Icon imgStyle={styles.footerIcon} imgUrl={postFooterIcons[2].url} />
    </View>
    <View style={{ flexDirection: "row", alignItems: "center" }}>
      <Icon imgStyle={styles.footerIcon} imgUrl={postFooterIcons[3].url} />
    </View>
  </View>
);

const Icon = ({ imgStyle, imgUrl }) => (
  <TouchableOpacity>
    <Image style={imgStyle} source={{ uri: imgUrl }} />
  </TouchableOpacity>
);

const Likes = ({ post }) => (
  <View style={{ flexDirection: "row", marginTop: 4 }}>
    {/* <Text style={{ color: "white", fontWeight: 600 }}>
      {/* {post.likes.toLocaleString("en")} likes
    </Text> */}
  </View>
);

const Caption = ({ post }) => (
  <View style={{ marginTop: 10 }}>
    <Text style={{ color: "white" }}>
      <Text style={{ fontWeight: "600" }}>{post.user}</Text>
      <Text style={{ fontWeight: "100" }}> {post.caption}</Text>
    </Text>
  </View>
);
const CommentsSection = ({ post }) => {
  return (
    <View style={{ marginTop: 5 }}>
      {!!post.comments.length && (
        <Text style={{ color: "gray" }}>
          {post.comments.length > 1
            ? `View all ${post?.comments?.length} comments`
            : `View a comment`}
        </Text>
      )}
    </View>
  );
};

const Comments = ({ post }) => (
  <>
    {post.comments.map((comment, index) => (
      <View key={index}>
        <Text style={{ color: "white" }}>
          <Text style={{ fontWeight: "600" }}>{comment.user}</Text>
          <Text> {comment.comment}</Text>
        </Text>
      </View>
    ))}
  </>
);

const styles = StyleSheet.create({
  postHeaderContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 8,
    alignItems: "center",
  },
  PostHeaderUserContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  profilePicture: {
    height: 35,
    width: 35,
    borderRadius: 25,
    borderColor: "#ff8501",
    borderWidth: 1.7,
  },
  userName: {
    color: "white",
    marginLeft: 5,
    fontWeight: "700",
  },
  postImage: {
    height: "100%",
  },
  iconsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  leftFooterIconsContainer: {
    flexDirection: "row",
    width: 120,
    justifyContent: "space-between",
  },
  likestext: {
    color: "white",
    fontWeight: "700",
    marginTop: 6,
  },
  caption: {
    color: "white",
  },
  goBackButtonContainer: {
    flexDirection: "row",
  },
  goBackButton: {
    marginRight: 20,
  },
  footerIcon: {
    height: 30,
    width: 30,
  },
});

export default Post;
