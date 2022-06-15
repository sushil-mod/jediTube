import { v4 as uuid } from "uuid";




/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "Movies",
    icon:"fas fa-video",
    image:"https://res.cloudinary.com/sushil-mod/image/upload/v1654541751/jediTube/movies.webp",
    
  },
  {
    _id: uuid(),
    categoryName: "Animated",
    icon:"fas fa-radiation",
    image:"https://res.cloudinary.com/sushil-mod/image/upload/v1654541739/jediTube/animation.jpg",
   
  },
  {
    _id: uuid(),
    categoryName: "Lego",
    icon:"fas fa-robot",
    image:"https://res.cloudinary.com/sushil-mod/image/upload/v1654542195/jediTube/lego.jpg",
    
  },
  {
    _id: uuid(),
    categoryName: "Games",
    icon:"fas fa-gamepad",
    image:"https://res.cloudinary.com/sushil-mod/image/upload/v1654541729/jediTube/games.jpg",
    
  },
];
