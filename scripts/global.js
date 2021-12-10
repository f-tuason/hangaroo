const ROWS = 4;
const COLS = 14;

let checkLetter;
let winLose;
let items;
let question;
let lost;
let numberOfWins;

let questions = [
  {
    group: "100 tallest building",
    category: "100 tallest building",
    answer: "one atlantic center",
  },
  {
    group: "baseball hall of famers",
    category: "baseball hall of famers",
    answer: "wilbert robinson",
  },
  {
    group: "Computer Terms",
    category: "Computer Terms",
    answer: "plug and play",
  },
  {
    group: "Medical condition",
    category: "Medical condition",
    answer: "hemorrhoids",
  },
  {
    group: "Comedy Shows",
    category: "Comedy Shows",
    answer: "taxi",
  },
  {
    group: "Cop and Lawyer Shows",
    category: "Cop and Lawyer Shows",
    answer: "the practice",
  },
  {
    group: "Common Phrases and Slogans",
    category: "Common Phrases and Slogans",
    answer: "sow wild oats",
  },
  {
    group: "Baseball Hall of Famers",
    category: "Baseball Hall of Famers",
    answer: "Harry Wright",
  },
  {
    group: "Popular TV Actors",
    category: "Popular TV Actors",
    answer: "kirstie alley",
  },
  {
    group: "Holidays around the world",
    category: "Holidays around the world",
    answer: "baisakhi",
  },
  {
    group: "Guess These Animal Collectives",
    category: "Guess These Animal Collectives",
    answer: "bale of turtles",
  },
  {
    group: "Have Some Fun With Puns",
    category: "Have Some Fun With Puns",
    answer: "the military head is seeking more arms",
  },
  {
    group: "British Fare",
    category: "British Fare",
    answer: "cornish charter pie",
  },
  {
    group: "Guess these Animal Collectives",
    category: "Guess these Animal Collectives",
    answer: "murder of crows",
  },
  {
    group: "American Vice Presidents",
    category: "American Vice Presidents",
    answer: "john adams",
  },
  {
    group: "Computer Terms",
    category: "Computer Terms",
    answer: "wysiwig",
  },
  {
    group: "Car Makes and Models",
    category: "Car Makes and Models",
    answer: "mitsubishi galant",
  },
  {
    group: "Star Trek Characters",
    category: "Star Trek Characters",
    answer: "harry kim",
  },
  {
    group: "Health Diseases and Conditions",
    category: "Health Diseases and Conditions",
    answer: "anaphylactic shock",
  },
  {
    group: "Dramatic Shows",
    category: "Dramatic Shows",
    answer: "providence",
  },
  {
    group: "Desserts and Tasty Treats",
    category: "Desserts and Tasty Treats",
    answer: "bread and butter pudding",
  },
  {
    group: "Adventure Films",
    category: "Adventure Films",
    answer: "the flight of the phoenix",
  },
  {
    group: "Popular places and Landmarks",
    category: "Popular places and Landmarks",
    answer: "the roman forum",
  },
];
