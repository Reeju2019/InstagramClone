import { USERS } from "./users";
export const POSTS = [
  {
    imageUrl: "https://i.ibb.co/182bP1y/4k.png",
    user: USERS[0].user,
    likes: 7870,
    caption:
      "Building the Netflix clone with React JS🚀. This is going to be a fun build. #reactjs #firebase #dev",
    profile_picture: USERS[0].image,
    comments: [
      {
        user: "theqazman",
        comment: "Wow! THis build looks fire, Super excited about this.",
      },
      {
        user: "amaanath.dev",
        comment: "Once I wake up, I'll finally be ready to code this up",
      },
    ],
  },
  {
    imageUrl: "https://i.ibb.co/02vj5cw/Post-Copy.png",
    user: USERS[1].user,
    likes: 7351,
    caption: "Train Ride to Baker's Street....",
    profile_picture: USERS[1].image,
    comments: [
      {
        user: "cleverqazi",
        comment: "yo",
      },
      {
        user: "amaanath.dev",
        comment: "I'm Sleeping.....",
      },
      {
        user: "reeju",
        comment: "Great job",
      },
    ],
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1633655331363-c34828bcfa76?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDEzfHFQWXNEenZKT1ljfHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60",
    user: USERS[3].user,
    likes: 34685,
    caption:
      "Que lindo poder disfrutar de estos momentos que estamos viviendo! Gran triunfo!!! Gracias nuevamente por lo que me hacen sentir. Feliz es poco! Que no se corte :flag_ar::flag_ar: Nos vemos el jueves :muscle::muscle:",
    profile_picture: USERS[3].image,
    comments: [
      { user: "rinzhin_net", comment: "WOW" },
      { user: "murad_abdul_rahoof", comment: "meow" },
    ],
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1633655331294-687588ddc8d4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80",
    user: USERS[4].user,
    likes: 34685,
    caption:
      "Photo by @gabrielegalimbertiphoto / A fishing boat sails among icebergs in Ilulissat Icefjord, on the west coast of Greenland.",
    profile_picture: USERS[4].image,
    comments: [
      { user: "rinzhin_net", comment: "WOW , This is an amazing picture man" },
      {
        user: "murad_abdul_rahoof",
        comment: "Great, I like to visit there.where is this place .",
      },
    ],
  },
];
