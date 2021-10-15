import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { Divider } from "react-native-elements";

const PostFooterIcons = [
  {
    name: "Like",
    imageUrl:
      "https://img.icons8.com/fluency-systems-regular/60/ffffff/like--v1.png",
    likedImageUrl: "https://img.icons8.com/ios-glyphs/30/000000/like--v1.png",
  },
  {
    name: "Comment",
    imageUrl: "https://img.icons8.com/ios/50/ffffff/topic.png",
  },
  {
    name: "Share",
    imageUrl:
      "https://cdn131.picsart.com/328472298029211.png?type=webp&amp;to=min&amp;r=640",
  },
  {
    name: "Save",
    imageUrl:
      "https://cdn141.picsart.com/328472001021211.png?type=webp&to=min&r=640",
  },
];

const Post = ({ post }) => {
  return (
    <View style={{ marginBottom: 30 }}>
      <Divider width={1} orientation="vertical" />
      <PostHeader post={post} />
      <PostImage post={post} />
      <View style={{ marginHorizontal: 15, marginTop: 10 }}>
        <PostFooter />
        <Likes post={post} />
        <Caption post={post} />
        <CommentsSection post={post} />
        <Comments post={post} />
      </View>
    </View>
  );
};

const PostHeader = ({ post }) => (
  <View
    style={{
      flexDirection: "row",
      justifyContent: "space-between",
      margin: 5,
      alignItems: "center",
    }}
  >
    <View style={{ flexDirection: "row", alignItems: "center" }}>
      <Image source={{ uri: post.profile_picture }} style={styles.story} />
      <Text style={{ color: "white", marginLeft: 5, fontWeight: 700 }}>
        {post.user}
      </Text>
    </View>
    <Text style={{ color: "white", fontWeight: "900" }}>...</Text>
  </View>
);

const PostImage = ({ post }) => {
  return (
    <View style={{ width: "100%", height: 450 }}>
      <Image
        source={{ uri: post.imageUrl }}
        style={{ height: "100%", resizeMode: "cover" }}
      />
    </View>
  );
};

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

const PostFooter = () => (
  <View style={{ flexDirection: "row" }}>
    <View style={styles.leftFooterIconContainer}>
      <Icon imgStyle={styles.footerIcon} imgUrl={PostFooterIcons[0].imageUrl} />
      <Icon imgStyle={styles.footerIcon} imgUrl={PostFooterIcons[1].imageUrl} />
      <Icon
        imgStyle={(styles.footerIcon, styles.shareIcon)}
        imgUrl={PostFooterIcons[2].imageUrl}
      />
    </View>
    <View style={{ flex: 1, alignItems: "flex-end" }}>
      <Icon
        imgStyle={(styles.footerIcon, styles.saveIcon)}
        imgUrl={PostFooterIcons[3].imageUrl}
      />
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
    <Text style={{ color: "white", fontWeight: 600 }}>
      {post.likes.toLocaleString("en")} likes
    </Text>
  </View>
);

const Caption = ({ post }) => (
  <View style={{ marginTop: 5 }}>
    <Text style={{ color: "white" }}>
      <Text style={{ fontWeight: "600", marginRight: 5 }}>{post.user}</Text>
      <Text> {post.caption}</Text>
    </Text>
  </View>
);

const CommentsSection = ({ post }) => (
  <View style={{ marginTop: 5 }}>
    {post.comments.length && (
      <Text style={{ color: "gray" }}>
        View{post.comments.length > 1 ? " all" : ""} {post.comments.length}{" "}
        {post.comments.length > 1 ? "comments" : "comment"}
      </Text>
    )}
  </View>
);

const Comments = ({ post }) => (
  <>
    {post.comments.map((comment, index) => (
      <View key={index} style={{ flexDirection: "row", marginTop: 5 }}>
        <Text style={{ color: "white" }}>
          <Text style={{ fontWeight: 600 }}>{comment.user}</Text>{" "}
          {comment.comment}
        </Text>
      </View>
    ))}
  </>
);

const styles = StyleSheet.create({
  story: {
    width: 35,
    height: 35,
    borderRadius: 50,
    marginLeft: 10,
    borderWidth: 1.6,
    borderColor: "#ff8501",
  },
  footerIcon: {
    width: 33,
    height: 33,
  },
  shareIcon: {
    width: 28,
    height: 28,
    transform: [{ rotate: "-20deg" }],
    marginTop: 5,
  },
  saveIcon: {
    marginTop: 5,
    width: 25,
    height: 25,
  },
  leftFooterIconContainer: {
    flexDirection: "row",
    width: "32%",
    justifyContent: "space-between",
  },
});

export default Post;
