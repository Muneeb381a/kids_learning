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
        { type: 'mcq', q: 'Which letter comes after B?', choices: ['A', 'C', 'D', 'E'], answer: 1 },
        { type: 'mcq', q: '"Apple" starts with which letter?', choices: ['B', 'E', 'A', 'O'], answer: 2 },
        { type: 'mcq', q: 'Which letter comes between D and F?', choices: ['C', 'E', 'G', 'B'], answer: 1 },
        { type: 'mcq', q: '"Mango" starts with which letter?', choices: ['N', 'L', 'M', 'K'], answer: 2 },
        { type: 'mcq', q: 'How many letters from A to M?', choices: ['11', '12', '13', '14'], answer: 2 }
      ]
    },
    {
      id: 2,
      title: 'Alphabets N–Z',
      icon: '🔠',
      questions: [
        { type: 'mcq', q: 'Which letter comes after P?', choices: ['O', 'Q', 'R', 'S'], answer: 1 },
        { type: 'mcq', q: '"Zebra" starts with which letter?', choices: ['X', 'Y', 'Z', 'W'], answer: 2 },
        { type: 'mcq', q: 'Which is the last letter of English?', choices: ['X', 'Y', 'Z', 'W'], answer: 2 },
        { type: 'mcq', q: '"Sun" starts with which letter?', choices: ['P', 'S', 'T', 'U'], answer: 1 },
        { type: 'mcq', q: 'How many letters are in the English alphabet?', choices: ['24', '25', '26', '27'], answer: 2 }
      ]
    },
    {
      id: 3,
      title: 'Phonics Sounds',
      icon: '🔊',
      questions: [
        { type: 'mcq', q: 'Which word starts with the "C" sound?', choices: ['Apple', 'Ball', 'Cat', 'Dog'], answer: 2 },
        { type: 'mcq', q: '"B" sound — which word?', choices: ['Ant', 'Bat', 'Cup', 'Dog'], answer: 1 },
        { type: 'mcq', q: '"S" sound — which word?', choices: ['Ball', 'Cat', 'Sun', 'Dog'], answer: 2 },
        { type: 'mcq', q: 'Which word ends with the "T" sound?', choices: ['Sun', 'Cat', 'Dog', 'Cup'], answer: 1 },
        { type: 'mcq', q: '"F" sound — which word?', choices: ['Ball', 'Fish', 'Cat', 'Sun'], answer: 1 }
      ]
    },
    {
      id: 4,
      title: '3-Letter Words',
      icon: '📝',
      questions: [
        { type: 'mcq', q: 'C _ T — missing letter?', choices: ['a', 'o', 'u', 'e'], answer: 0 },
        { type: 'mcq', q: 'D _ G — missing letter?', choices: ['a', 'e', 'o', 'u'], answer: 2 },
        { type: 'mcq', q: 'S _ N — missing letter?', choices: ['a', 'u', 'o', 'e'], answer: 1 },
        { type: 'mcq', q: 'Which is a 3-letter word?', choices: ['Elephant', 'Cat', 'Cricket', 'Apple'], answer: 1 },
        { type: 'mcq', q: 'B _ T — missing letter?', choices: ['a', 'e', 'o', 'u'], answer: 0 }
      ]
    },
    {
      id: 5,
      title: 'Colors in English',
      icon: '🎨',
      questions: [
        { type: 'mcq', q: 'Sky ka rang English mein?', choices: ['Red', 'Green', 'Blue', 'Yellow'], answer: 2 },
        { type: 'mcq', q: 'Ghaas ka rang English mein?', choices: ['Blue', 'Green', 'Red', 'Orange'], answer: 1 },
        { type: 'mcq', q: 'Suraj ka rang English mein?', choices: ['Purple', 'Pink', 'Yellow', 'Brown'], answer: 2 },
        { type: 'mcq', q: '"Laal" ka English mein?', choices: ['Blue', 'Red', 'Green', 'Black'], answer: 1 },
        { type: 'mcq', q: '"Safaid" ka English mein?', choices: ['Black', 'Grey', 'White', 'Brown'], answer: 2 }
      ]
    },
    {
      id: 6,
      title: 'Greetings',
      icon: '👋',
      questions: [
        { type: 'mcq', q: 'Subah milne par kya kehte hain?', choices: ['Good night', 'Good morning', 'Good evening', 'Goodbye'], answer: 1 },
        { type: 'mcq', q: '"Shukriya" ka English mein?', choices: ['Sorry', 'Please', 'Thank you', 'Hello'], answer: 2 },
        { type: 'mcq', q: '"Maafi chahta/chahti hun" ka English?', choices: ['Thank you', 'Hello', 'Goodbye', 'Sorry'], answer: 3 },
        { type: 'mcq', q: 'Jate waqt kya kehte hain?', choices: ['Hello', 'Goodbye', 'Please', 'Thank you'], answer: 1 },
        { type: 'mcq', q: '"Kripya" ya "Meharbani" ka English?', choices: ['Sorry', 'Please', 'Hello', 'Thanks'], answer: 1 }
      ]
    },
    {
      id: 7,
      title: 'Family Members',
      icon: '👨‍👩‍👧',
      questions: [
        { type: 'mcq', q: '"Ammi" ka English mein?', choices: ['Father', 'Mother', 'Sister', 'Brother'], answer: 1 },
        { type: 'mcq', q: '"Abu" ka English mein?', choices: ['Mother', 'Uncle', 'Father', 'Grandfather'], answer: 2 },
        { type: 'mcq', q: '"Dada" ka English mein?', choices: ['Uncle', 'Grandfather', 'Father', 'Brother'], answer: 1 },
        { type: 'mcq', q: '"Bhai" ka English mein?', choices: ['Sister', 'Cousin', 'Brother', 'Uncle'], answer: 2 },
        { type: 'mcq', q: '"Behan" ka English mein?', choices: ['Mother', 'Sister', 'Aunt', 'Cousin'], answer: 1 }
      ]
    },
    {
      id: 8,
      title: 'Days of the Week',
      icon: '📅',
      questions: [
        { type: 'mcq', q: 'Hafte ka pehla din?', choices: ['Tuesday', 'Monday', 'Sunday', 'Saturday'], answer: 2 },
        { type: 'mcq', q: 'Hafte ka aakhri din?', choices: ['Friday', 'Saturday', 'Sunday', 'Monday'], answer: 2 },
        { type: 'mcq', q: 'Monday ke baad kaunsa din?', choices: ['Sunday', 'Wednesday', 'Tuesday', 'Thursday'], answer: 2 },
        { type: 'mcq', q: 'Haftey mein kitne din hote hain?', choices: ['5', '6', '7', '8'], answer: 2 },
        { type: 'mcq', q: '"Jumma" ka English mein?', choices: ['Thursday', 'Friday', 'Saturday', 'Sunday'], answer: 1 }
      ]
    },
    {
      id: 9,
      title: 'Months of the Year',
      icon: '🗓️',
      questions: [
        { type: 'mcq', q: 'Saal ka pehla maheena?', choices: ['February', 'December', 'January', 'March'], answer: 2 },
        { type: 'mcq', q: 'Saal ka aakhri maheena?', choices: ['November', 'December', 'October', 'September'], answer: 1 },
        { type: 'mcq', q: 'Saal mein kitne maheene hote hain?', choices: ['10', '11', '12', '13'], answer: 2 },
        { type: 'mcq', q: 'February mein kitne din hote hain?', choices: ['28 ya 29', '30', '31', '27'], answer: 0 },
        { type: 'mcq', q: 'January ke baad kaunsa maheena?', choices: ['March', 'December', 'February', 'April'], answer: 2 }
      ]
    },
    {
      id: 10,
      title: '🏆 Boss Level — Simple Sentences',
      icon: '🏆',
      isBoss: true,
      questions: [
        { type: 'mcq', q: '"I ___ a student" — sahi word?', choices: ['is', 'am', 'are', 'be'], answer: 1 },
        { type: 'mcq', q: 'Sahi sentence kaunsa hai?', choices: ['She am happy', 'He are sad', 'I am fine', 'They is here'], answer: 2 },
        { type: 'mcq', q: '"The cat ___ on the mat" — sahi word?', choices: ['are', 'am', 'is', 'be'], answer: 2 },
        { type: 'mcq', q: 'Sahi sentence kaunsa hai?', choices: ['Dog the runs', 'The dog runs', 'Runs dog the', 'Dog runs the'], answer: 1 },
        { type: 'mcq', q: '"My name ___ Ali" — sahi word?', choices: ['are', 'am', 'is', 'be'], answer: 2 }
      ]
    }
  ]
};
