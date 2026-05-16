/* Science Sea — all 10 levels */

const SCIENCE_DATA = {
  subject: 'science',
  name: 'Science',
  world: 'Science Sea',
  icon: '🌊',
  color: '#26A69A',
  levels: [
    {
      id: 1,
      title: 'Body Parts',
      icon: '🧍',
      specialPage: 'body.html',
      questions: [
        { type: 'mcq', q: 'Which body part do we use to see? 👀', choices: ['Nose', 'Eyes', 'Ears', 'Mouth'], answer: 1 },
        { type: 'mcq', q: 'Which body part do we use to hear sounds? 🎵', choices: ['Eyes', 'Hands', 'Ears', 'Feet'], answer: 2 },
        { type: 'mcq', q: 'Which body part do we use to walk and run? 🏃', choices: ['Hands', 'Nose', 'Legs', 'Mouth'], answer: 2 },
        { type: 'mcq', q: 'Which body part do we use to eat food? 😋', choices: ['Ears', 'Mouth', 'Eyes', 'Nose'], answer: 1 },
        { type: 'mcq', q: 'Which body part do we use to think? 🧠', choices: ['Feet', 'Heart', 'Brain', 'Hands'], answer: 2 }
      ]
    },
    {
      id: 2,
      title: 'Animals — Farm, Wild, Pet',
      icon: '🐄',
      questions: [
        { type: 'mcq', q: 'Which animal is kept as a pet at home? 🏠', choices: ['Lion', 'Cat', 'Elephant', 'Crocodile'], answer: 1 },
        { type: 'mcq', q: 'Which animal lives in the jungle? 🌿', choices: ['Hen', 'Cow', 'Lion', 'Cat'], answer: 2 },
        { type: 'mcq', q: 'What does a cow give us? 🐄', choices: ['Eggs', 'Milk', 'Wool', 'Honey'], answer: 1 },
        { type: 'mcq', q: 'Which animal is found on a farm? 🚜', choices: ['Lion', 'Chicken', 'Elephant', 'Dolphin'], answer: 1 },
        { type: 'mcq', q: 'What is a dog most famous for? 🐕', choices: ['Being loyal and faithful', 'Giving milk', 'Flying', 'Laying eggs'], answer: 0 }
      ]
    },
    {
      id: 3,
      title: 'Birds',
      icon: '🐦',
      questions: [
        { type: 'mcq', q: 'Which bird can copy our voice and talk? 🦜', choices: ['Sparrow', 'Parrot', 'Pigeon', 'Eagle'], answer: 1 },
        { type: 'mcq', q: 'Which bird CANNOT fly? 🐧', choices: ['Pigeon', 'Parrot', 'Penguin', 'Sparrow'], answer: 2 },
        { type: 'mcq', q: 'Where does a sparrow usually live? 🌳', choices: ['In water', 'In a house', 'On a tree', 'Underground'], answer: 2 },
        { type: 'mcq', q: 'What does a rooster do every morning? 🌅', choices: ['Sleeps', 'Crows loudly', 'Flies away', 'Swims'], answer: 1 },
        { type: 'mcq', q: 'Where do birds lay their eggs? 🥚', choices: ['In water', 'In their nest', 'On the ground', 'Inside rocks'], answer: 1 }
      ]
    },
    {
      id: 4,
      title: 'Fruits',
      icon: '🍎',
      questions: [
        { type: 'mcq', q: 'In which season does mango grow? 🥭', choices: ['Winter', 'Summer', 'Rainy', 'Spring'], answer: 1 },
        { type: 'mcq', q: 'What colour is a banana? 🍌', choices: ['Red', 'Blue', 'Yellow', 'Green'], answer: 2 },
        { type: 'mcq', q: 'Which fruit tastes sour? 🍋', choices: ['Banana', 'Lemon', 'Mango', 'Grapes'], answer: 1 },
        { type: 'mcq', q: 'What colour is an apple? 🍎', choices: ['Blue', 'Red or Green', 'Yellow', 'Black'], answer: 1 },
        { type: 'mcq', q: 'Which fruit is packed with Vitamin C? 🍊', choices: ['Banana', 'Orange', 'Mango', 'Grapes'], answer: 1 }
      ]
    },
    {
      id: 5,
      title: 'Vegetables',
      icon: '🥕',
      questions: [
        { type: 'mcq', q: 'What colour is a carrot? 🥕', choices: ['Blue', 'Orange', 'Yellow', 'Red'], answer: 1 },
        { type: 'mcq', q: 'Does a potato grow underground or above ground? 🥔', choices: ['Above ground', 'Underground', 'In water', 'On a tree'], answer: 1 },
        { type: 'mcq', q: 'What does spinach give our body? 💪', choices: ['Protein', 'Iron and Calcium', 'Sugar', 'Fat'], answer: 1 },
        { type: 'mcq', q: 'Which vegetable is round like a ball? 🧅', choices: ['Carrot', 'Onion', 'Broccoli', 'All of them'], answer: 1 },
        { type: 'mcq', q: 'Is a tomato a fruit or a vegetable? 🍅', choices: ['Only a vegetable', 'Only a fruit', 'A fruit by science, used as a vegetable in cooking', 'Neither'], answer: 2 }
      ]
    },
    {
      id: 6,
      title: 'Plants & Trees',
      icon: '🌱',
      questions: [
        { type: 'mcq', q: 'What does a plant need to grow healthy? 🌱', choices: ['Only water', 'Only sunlight', 'Water, soil and sunlight', 'Nothing'], answer: 2 },
        { type: 'mcq', q: 'When do plants make oxygen for us? ☀️', choices: ['At night', 'During the day', 'Always', 'Never'], answer: 1 },
        { type: 'mcq', q: 'What grows from a seed? 🌰', choices: ['A fruit', 'A leaf', 'A plant', 'A flower'], answer: 2 },
        { type: 'mcq', q: 'What is the tallest type of tree in the world? 🌲', choices: ['Mango', 'Neem', 'Sequoia', 'Banana'], answer: 2 },
        { type: 'mcq', q: 'What is the main job of a flower? 🌸', choices: ['Photosynthesis', 'Making seeds (reproduction)', 'Absorbing water', 'Absorbing oxygen'], answer: 1 }
      ]
    },
    {
      id: 7,
      title: 'Weather',
      icon: '⛅',
      questions: [
        { type: 'mcq', q: 'What do we wear or carry in the rain? 🌧️', choices: ['Sunglasses', 'Raincoat or umbrella', 'Scarf', 'Nothing'], answer: 1 },
        { type: 'mcq', q: 'How does the air feel in winter? ❄️', choices: ['Hot', 'Cold', 'Warm', 'Humid'], answer: 1 },
        { type: 'mcq', q: 'When does lightning flash in the sky? ⚡', choices: ['On a sunny day', 'During a thunderstorm', 'In the morning', 'On Eid'], answer: 1 },
        { type: 'mcq', q: 'When does a rainbow usually appear? 🌈', choices: ['In winter', 'After rain', 'In summer', 'At night'], answer: 1 },
        { type: 'mcq', q: 'What is hard to see clearly in thick fog? 🌫️', choices: ['Colours', 'Things far away', 'Things close to you', 'Nothing'], answer: 1 }
      ]
    },
    {
      id: 8,
      title: 'Day & Night',
      icon: '🌙',
      questions: [
        { type: 'mcq', q: 'What shines and glows in the night sky? 🌙', choices: ['The Sun', 'The Moon and Stars', 'Sunlight', 'Rainbow'], answer: 1 },
        { type: 'mcq', q: 'Where does daylight come from? ☀️', choices: ['The Moon', 'The Sun', 'The Stars', 'Electricity'], answer: 1 },
        { type: 'mcq', q: 'From which direction does the Sun rise every morning? 🌅', choices: ['West', 'East', 'Above us', 'Below us'], answer: 1 },
        { type: 'mcq', q: 'How many hours are there in one full day? 🕐', choices: ['12', '24', '36', '48'], answer: 1 },
        { type: 'mcq', q: 'What is the difference between day and night? 🤔', choices: ['No difference', 'Day has sunlight, night has darkness', 'Night has sunlight', 'Day has darkness'], answer: 1 }
      ]
    },
    {
      id: 9,
      title: 'Planets & Solar System',
      icon: '🪐',
      questions: [
        { type: 'mcq', q: 'How many planets are in our Solar System? 🌌', choices: ['7', '8', '9', '10'], answer: 1 },
        { type: 'mcq', q: 'Which planet is closest to the Sun? ☀️', choices: ['Venus', 'Mercury', 'Earth', 'Mars'], answer: 1 },
        { type: 'mcq', q: 'Which planet do we live on? 🌍', choices: ['Mars', 'Venus', 'Earth', 'Jupiter'], answer: 2 },
        { type: 'mcq', q: 'Which is the biggest planet in our Solar System? 🪐', choices: ['Saturn', 'Mars', 'Jupiter', 'Neptune'], answer: 2 },
        { type: 'mcq', q: 'What is the Moon? 🌕', choices: ['A planet', 'A star', "Earth's natural satellite", 'An asteroid'], answer: 2 }
      ]
    },
    {
      id: 10,
      title: '🏆 Boss Level — 5 Senses',
      icon: '🏆',
      isBoss: true,
      questions: [
        { type: 'mcq', q: 'Which body part do we use to smell? 👃', choices: ['Ears', 'Eyes', 'Nose', 'Tongue'], answer: 2 },
        { type: 'mcq', q: 'Which body part helps us taste sweet food? 😋', choices: ['Nose', 'Tongue', 'Hands', 'Eyes'], answer: 1 },
        { type: 'mcq', q: 'Which body part do we use to hear sounds? 👂', choices: ['Eyes', 'Ears', 'Nose', 'Hands'], answer: 1 },
        { type: 'mcq', q: 'What do we feel with our sense of touch? ✋', choices: ['Smell', 'Sound', 'Texture and temperature', 'Colour'], answer: 2 },
        { type: 'mcq', q: 'How many senses does a human being have? 🤔', choices: ['3', '4', '5', '6'], answer: 2 }
      ]
    }
  ]
};
