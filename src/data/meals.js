import { v4 as uuidv4 } from "uuid";

const meals = [
  {
    id: uuidv4(),
    name: "Shrimp Quesadilla",
    description:
      "Quick and simple enough for any weekday, these shrimp quesadillas boast a refreshing flavor special enough for guests. Serve with salsa on the side and a frosty smoothie, if you like. —Tiffany Bryson-San Antonio, Texas",
    picture: "/images/ShrimpQuesadilla.jpg",
    price: 34.6,
  },
  {
    id: uuidv4(),
    name: "Chicken and Gravy",
    description:
      "Here’s a lightened-up take on the classic southern comfort-food dish: chicken and gravy. This recipe has been a hit at our house since the first time we tried it! —Ruth Helmuth, Abbeville, South Carolina",
    picture: "/images/ChickenandGravy.jpg",
    price: 22,
  },
  {
    id: uuidv4(),
    name: "Salmon Chowder",
    description:
      "I’ve lived on a farm in the Yakima Valley all my life. I have a big garden, and by the end of fall, my cellar shelves are full of canned fruits and vegetables. This salmon chowder recipe uses some of the root vegetables I grow…along with the delicious salmon that is so plentiful here. —Josephine Parton, Granger, Washington",
    picture: "/images/SalmonChowder.jpg",
    price: 46,
  },
  {
    id: uuidv4(),
    name: "Turkey Shepherd’s Pie",
    description:
      "We live way out in the county, and the nearest grocery store is 25 miles away. So I’ve become quite skilled at turning leftovers into second-time-around successes like this turkey shepherd’s pie. —Linda Howe, Jackman, Maine",
    picture: "/images/TurkeyShepherd’sPie.jpg",
    price: 28.66,
  },
  {
    id: uuidv4(),
    name: "Ground Turkey Vegetable Soup",
    description:
      "Low-sodium ingredients don’t diminish the full flavor of this brothy ground turkey vegetable soup. The turkey lends a heartiness that everyone will welcome on a cold blustery evening. —Bonnie LeBarron, Forestville, New York",
    picture: "/images/Ground Turkey Vegetable Soup.jpg",
    price: 32.15,
  },
  {
    id: uuidv4(),
    name: "Steak and Shrimp Kabobs",
    description:
      "These steak and shrimp kabobs make any get-together special. Cubes of marinated steak are skewered with shrimp and veggies, then grilled. For picnics, I assemble the kabobs at home and carry them in a large container. —Karen Mergener, St. Croix, Minnesota",
    picture: "/images/Steak and Shrimp Kabobs.jpg",
    price: 44,
  },
];

export default meals;
