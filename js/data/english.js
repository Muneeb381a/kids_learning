/* English Empire — all 10 levels */

const ENGLISH_DATA = {
  subject: 'english',
  name: 'English',
  world: 'English Empire',
  icon: '🏰',
  color: '#EF5350',
  levels: [
    {
      id: 1,
      title: 'Alphabets A–M',
      icon: '🔤',
      questions: [
        { type: 'mcq', q: 'Which letter comes after B? 🔤', choices: ['A', 'C', 'D', 'E'], answer: 1 },
        { type: 'mcq', q: '"Apple" starts with which letter? 🍎', choices: ['B', 'E', 'A', 'O'], answer: 2 },
        { type: 'mcq', q: 'Which letter comes between D and F? 🕵️', choices: ['C', 'E', 'G', 'B'], answer: 1 },
        { type: 'mcq', q: '"Mango" starts with which letter? 🥭', choices: ['N', 'L', 'M', 'K'], answer: 2 },
        { type: 'mcq', q: 'How many letters are there from A to M? 🔢', choices: ['11', '12', '13', '14'], answer: 2 }
      ]
    },
    {
      id: 2,
      title: 'Alphabets N–Z',
      icon: '🔠',
      questions: [
        { type: 'mcq', q: 'Which letter comes after P? 👉', choices: ['O', 'Q', 'R', 'S'], answer: 1 },
        { type: 'mcq', q: '"Zebra" starts with which letter? 🦓', choices: ['X', 'Y', 'Z', 'W'], answer: 2 },
        { type: 'mcq', q: 'What is the very last letter of the English alphabet? 🏁', choices: ['X', 'Y', 'Z', 'W'], answer: 2 },
        { type: 'mcq', q: '"Sun" starts with which letter? ☀️', choices: ['P', 'S', 'T', 'U'], answer: 1 },
        { type: 'mcq', q: 'How many letters are in the English alphabet? 🔢', choices: ['24', '25', '26', '27'], answer: 2 }
      ]
    },
    {
      id: 3,
      title: 'Phonics Sounds',
      icon: '🔊',
      questions: [
        { type: 'mcq', q: 'Which word starts with the "C" sound? 🔊', choices: ['Apple', 'Ball', 'Cat', 'Dog'], answer: 2 },
        { type: 'mcq', q: 'Which word has the "B" sound at the start? 🔊', choices: ['Ant', 'Bat', 'Cup', 'Dog'], answer: 1 },
        { type: 'mcq', q: 'Which word starts with the "S" sound? ☀️', choices: ['Ball', 'Cat', 'Sun', 'Dog'], answer: 2 },
        { type: 'mcq', q: 'Which word ENDS with the "T" sound? 🔊', choices: ['Sun', 'Cat', 'Dog', 'Cup'], answer: 1 },
        { type: 'mcq', q: 'Which word starts with the "F" sound? 🐟', choices: ['Ball', 'Fish', 'Cat', 'Sun'], answer: 1 }
      ]
    },
    {
      id: 4,
      title: '3-Letter Words',
      icon: '📝',
      questions: [
        { type: 'mcq', q: 'C _ T — what is the missing letter? 🐱', choices: ['a', 'o', 'u', 'e'], answer: 0 },
        { type: 'mcq', q: 'D _ G — what is the missing letter? 🐕', choices: ['a', 'e', 'o', 'u'], answer: 2 },
        { type: 'mcq', q: 'S _ N — what is the missing letter? ☀️', choices: ['a', 'u', 'o', 'e'], answer: 1 },
        { type: 'mcq', q: 'Which of these is a 3-letter word? ✏️', choices: ['Elephant', 'Cat', 'Cricket', 'Apple'], answer: 1 },
        { type: 'mcq', q: 'B _ T — what is the missing letter? 🏏', choices: ['a', 'e', 'o', 'u'], answer: 0 }
      ]
    },
    {
      id: 5,
      title: 'Colors in English',
      icon: '🎨',
      questions: [
        { type: 'mcq', q: 'What colour is the sky on a clear day? ☁️', choices: ['Red', 'Green', 'Blue', 'Yellow'], answer: 2 },
        { type: 'mcq', q: 'What colour is fresh grass? 🌿', choices: ['Blue', 'Green', 'Red', 'Orange'], answer: 1 },
        { type: 'mcq', q: 'What colour is the Sun? ☀️', choices: ['Purple', 'Pink', 'Yellow', 'Brown'], answer: 2 },
        { type: 'mcq', q: 'Which colour means STOP on a traffic light? 🚦', choices: ['Blue', 'Red', 'Green', 'Black'], answer: 1 },
        { type: 'mcq', q: 'What colour is snow? ❄️', choices: ['Black', 'Grey', 'White', 'Brown'], answer: 2 }
      ]
    },
    {
      id: 6,
      title: 'Greetings',
      icon: '👋',
      questions: [
        { type: 'mcq', q: 'What do we say when we meet someone in the morning? 🌅', choices: ['Good night', 'Good morning', 'Good evening', 'Goodbye'], answer: 1 },
        { type: 'mcq', q: 'What do we say when someone helps us? 😊', choices: ['Sorry', 'Please', 'Thank you', 'Hello'], answer: 2 },
        { type: 'mcq', q: 'What do we say when we make a mistake? 😔', choices: ['Thank you', 'Hello', 'Goodbye', 'Sorry'], answer: 3 },
        { type: 'mcq', q: 'What do we say when we leave someone? 👋', choices: ['Hello', 'Goodbye', 'Please', 'Thank you'], answer: 1 },
        { type: 'mcq', q: 'What word do we use to ask for something nicely? 🙏', choices: ['Sorry', 'Please', 'Hello', 'Thanks'], answer: 1 }
      ]
    },
    {
      id: 7,
      title: 'Family Members',
      icon: '👨‍👩‍👧',
      questions: [
        { type: 'mcq', q: 'What do we call the woman who is our parent? 💝', choices: ['Father', 'Mother', 'Sister', 'Brother'], answer: 1 },
        { type: 'mcq', q: 'What do we call the man who is our parent? 👨', choices: ['Mother', 'Uncle', 'Father', 'Grandfather'], answer: 2 },
        { type: 'mcq', q: "What do we call our father's or mother's father? 👴", choices: ['Uncle', 'Grandfather', 'Father', 'Brother'], answer: 1 },
        { type: 'mcq', q: 'What do we call a boy who has the same parents as us? 👦', choices: ['Sister', 'Cousin', 'Brother', 'Uncle'], answer: 2 },
        { type: 'mcq', q: 'What do we call a girl who has the same parents as us? 👧', choices: ['Mother', 'Sister', 'Aunt', 'Cousin'], answer: 1 }
      ]
    },
    {
      id: 8,
      title: 'Days of the Week',
      icon: '📅',
      questions: [
        { type: 'mcq', q: 'Which is the first day of the week? 📅', choices: ['Tuesday', 'Monday', 'Sunday', 'Saturday'], answer: 2 },
        { type: 'mcq', q: 'Which is the last day of the week? 🏁', choices: ['Friday', 'Saturday', 'Sunday', 'Monday'], answer: 2 },
        { type: 'mcq', q: 'Which day comes right after Monday? 👉', choices: ['Sunday', 'Wednesday', 'Tuesday', 'Thursday'], answer: 2 },
        { type: 'mcq', q: 'How many days are in one week? 🗓️', choices: ['5', '6', '7', '8'], answer: 2 },
        { type: 'mcq', q: 'Which day comes before Saturday? 🤔', choices: ['Thursday', 'Friday', 'Sunday', 'Monday'], answer: 1 }
      ]
    },
    {
      id: 9,
      title: 'Months of the Year',
      icon: '🗓️',
      questions: [
        { type: 'mcq', q: 'Which month is the very FIRST month of the year? 🎉', choices: ['February', 'December', 'January', 'March'], answer: 2 },
        { type: 'mcq', q: 'Which month is the very LAST month of the year? 🎄', choices: ['November', 'December', 'October', 'September'], answer: 1 },
        { type: 'mcq', q: 'How many months are in one year? 🗓️', choices: ['10', '11', '12', '13'], answer: 2 },
        { type: 'mcq', q: 'How many days does February usually have? 📅', choices: ['28 or 29', '30', '31', '27'], answer: 0 },
        { type: 'mcq', q: 'Which month comes right after January? 👉', choices: ['March', 'December', 'February', 'April'], answer: 2 }
      ]
    },
    {
      id: 10,
      title: '🏆 Boss Level — Simple Sentences',
      icon: '🏆',
      isBoss: true,
      questions: [
        { type: 'mcq', q: '"I ___ a student" — which word fits? 📝', choices: ['is', 'am', 'are', 'be'], answer: 1 },
        { type: 'mcq', q: 'Which sentence is correct? ✅', choices: ['She am happy', 'He are sad', 'I am fine', 'They is here'], answer: 2 },
        { type: 'mcq', q: '"The cat ___ on the mat" — which word fits? 🐱', choices: ['are', 'am', 'is', 'be'], answer: 2 },
        { type: 'mcq', q: 'Which sentence is in the right order? 📝', choices: ['Dog the runs', 'The dog runs', 'Runs dog the', 'Dog runs the'], answer: 1 },
        { type: 'mcq', q: '"My name ___ Ali" — which word fits? 🤔', choices: ['are', 'am', 'is', 'be'], answer: 2 }
      ]
    }
  ]
};
