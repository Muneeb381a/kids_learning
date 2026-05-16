/* Maths Mountain — all 10 levels */

const MATHS_DATA = {
  subject: 'maths',
  name: 'Maths',
  world: 'Maths Mountain',
  icon: '⛰️',
  color: '#5C6BC0',
  levels: [
    {
      id: 1,
      title: 'Numbers 1–10',
      icon: '🔢',
      questions: [
        { type: 'mcq', q: 'Count the apples! 🍎🍎🍎', choices: ['2', '3', '4', '5'], answer: 1 },
        { type: 'mcq', q: 'What number is this? 7 🎯', choices: ['Five', 'Seven', 'Eight', 'Four'], answer: 1 },
        { type: 'mcq', q: 'Count the stars! ⭐⭐⭐⭐⭐', choices: ['3', '4', '5', '6'], answer: 2 },
        { type: 'mcq', q: '1, 2, 3, __, 5 — what is the missing number? 🕵️', choices: ['4', '6', '7', '8'], answer: 0 },
        { type: 'mcq', q: 'Which number is ten? 🔟', choices: ['8', '9', '10', '11'], answer: 2 }
      ]
    },
    {
      id: 2,
      title: 'Numbers 11–20',
      icon: '🔟',
      questions: [
        { type: 'mcq', q: 'Which number comes right after 10? 👉', choices: ['10', '11', '12', '13'], answer: 1 },
        { type: 'mcq', q: '15, 16, 17, __, 19 — find the missing number! 🕵️', choices: ['16', '18', '20', '14'], answer: 1 },
        { type: 'mcq', q: 'How do you write twenty? 🎉', choices: ['02', '12', '20', '21'], answer: 2 },
        { type: 'mcq', q: 'Count the flowers! 🌸🌸🌸🌸🌸🌸🌸🌸🌸🌸🌸🌸🌸', choices: ['11', '12', '13', '14'], answer: 2 },
        { type: 'mcq', q: 'What number comes after 17? ➡️', choices: ['15', '18', '19', '20'], answer: 1 }
      ]
    },
    {
      id: 3,
      title: 'Numbers 21–100',
      icon: '💯',
      questions: [
        { type: 'mcq', q: 'Which number is twenty-five? 🎯', choices: ['52', '25', '15', '55'], answer: 1 },
        { type: 'mcq', q: 'How do we say 50 in English? 🤔', choices: ['Five', 'Fifteen', 'Fifty', 'Five hundred'], answer: 2 },
        { type: 'mcq', q: '30, 40, 50, __, 70 — what is the missing number? 🕵️', choices: ['55', '65', '60', '80'], answer: 2 },
        { type: 'mcq', q: 'How many zeros are in the number 100? 💯', choices: ['0', '1', '2', '3'], answer: 2 },
        { type: 'mcq', q: 'Which number is bigger than 99? 🏆', choices: ['98', '97', '100', '90'], answer: 2 }
      ]
    },
    {
      id: 4,
      title: 'Shapes',
      icon: '🔷',
      questions: [
        { type: 'mcq', q: 'What shape is a clock? 🕐', choices: ['Square', 'Triangle', 'Circle', 'Rectangle'], answer: 2 },
        { type: 'mcq', q: 'How many corners does a triangle have? 🔺', choices: ['2', '3', '4', '5'], answer: 1 },
        { type: 'mcq', q: 'How many sides does a square have? ⬜', choices: ['3', '4', '5', '6'], answer: 1 },
        { type: 'mcq', q: 'What shape is a door? 🚪', choices: ['Circle', 'Triangle', 'Rectangle', 'Star'], answer: 2 },
        { type: 'mcq', q: 'Which shape has NO corners at all? 🤔', choices: ['Square', 'Triangle', 'Circle', 'Rectangle'], answer: 2 }
      ]
    },
    {
      id: 5,
      title: 'Colors & Counting',
      icon: '🌈',
      questions: [
        { type: 'mcq', q: 'How many colours are in a rainbow? 🌈', choices: ['5', '6', '7', '8'], answer: 2 },
        { type: 'mcq', q: '3 red 🔴 + 2 blue 🔵 = how many in total?', choices: ['4', '5', '6', '7'], answer: 1 },
        { type: 'mcq', q: 'What colour is the sky on a sunny day? ☀️', choices: ['Red', 'Yellow', 'Blue', 'Green'], answer: 2 },
        { type: 'mcq', q: '4 green 🟢 + 4 yellow 🟡 = how many in total?', choices: ['6', '7', '8', '9'], answer: 2 },
        { type: 'mcq', q: 'What colour is grass? 🌿', choices: ['Red', 'Green', 'Blue', 'Black'], answer: 1 }
      ]
    },
    {
      id: 6,
      title: 'Addition (+)',
      icon: '➕',
      questions: [
        { type: 'mcq', q: '2 + 3 = ? 🍭🍭 + 🍭🍭🍭', choices: ['4', '5', '6', '7'], answer: 1 },
        { type: 'mcq', q: '5 + 5 = ? 🌟 Double five!', choices: ['8', '9', '10', '11'], answer: 2 },
        { type: 'mcq', q: '7 + 3 = ? Can you beat the calculator? ⚡', choices: ['9', '10', '11', '12'], answer: 1 },
        { type: 'mcq', q: '🍎🍎 + 🍎🍎🍎 = how many apples?', choices: ['3', '4', '5', '6'], answer: 2 },
        { type: 'mcq', q: '4 + 6 = ? 🎯', choices: ['8', '9', '10', '11'], answer: 2 }
      ]
    },
    {
      id: 7,
      title: 'Subtraction (−)',
      icon: '➖',
      questions: [
        { type: 'mcq', q: '10 − 3 = ? 🎈🎈🎈🎈🎈🎈🎈 — three flew away!', choices: ['6', '7', '8', '9'], answer: 1 },
        { type: 'mcq', q: '8 − 5 = ? 🍕', choices: ['2', '3', '4', '5'], answer: 1 },
        { type: 'mcq', q: '9 − 9 = ? 🤔 Tricky one!', choices: ['0', '1', '2', '9'], answer: 0 },
        { type: 'mcq', q: '7 − 4 = ? 🌟', choices: ['1', '2', '3', '4'], answer: 2 },
        { type: 'mcq', q: '5 − 2 = ? 🍬 You ate 2 sweets!', choices: ['2', '3', '4', '5'], answer: 1 }
      ]
    },
    {
      id: 8,
      title: 'Big / Small / Equal',
      icon: '⚖️',
      questions: [
        { type: 'mcq', q: '9 ___ 5 — which sign is correct? 🤔', choices: ['<', '>', '=', '+'], answer: 1 },
        { type: 'mcq', q: '3 ___ 3 — which sign is correct? 🤔', choices: ['<', '>', '=', '−'], answer: 2 },
        { type: 'mcq', q: '2 ___ 8 — which sign is correct? 🤔', choices: ['<', '>', '=', '+'], answer: 0 },
        { type: 'mcq', q: 'Which is bigger: 15 or 51? 🏆', choices: ['15', '51', 'They are equal', 'Cannot tell'], answer: 1 },
        { type: 'mcq', q: '100 ___ 99 — which sign is correct? 💯', choices: ['<', '>', '=', '≠'], answer: 1 }
      ]
    },
    {
      id: 9,
      title: 'Patterns',
      icon: '🔁',
      questions: [
        { type: 'mcq', q: '🔴🔵🔴🔵🔴___ — what comes next?', choices: ['🔴', '🔵', '🟢', '🟡'], answer: 1 },
        { type: 'mcq', q: '1, 2, 3, 1, 2, 3, ___ — what comes next?', choices: ['1', '2', '3', '4'], answer: 0 },
        { type: 'mcq', q: '🐱🐶🐱🐶___ — what comes next?', choices: ['🐰', '🐱', '🐶', '🐟'], answer: 1 },
        { type: 'mcq', q: '2, 4, 6, 8, ___ — what comes next? (count by 2s!)', choices: ['9', '10', '11', '12'], answer: 1 },
        { type: 'mcq', q: '5, 10, 15, 20, ___ — what comes next? (count by 5s!)', choices: ['22', '24', '25', '30'], answer: 2 }
      ]
    },
    {
      id: 10,
      title: '🏆 Boss Level — Mixed Quiz',
      icon: '🏆',
      isBoss: true,
      questions: [
        { type: 'mcq', q: '6 + 4 = ? 🚀 Final Boss!', choices: ['8', '9', '10', '11'], answer: 2 },
        { type: 'mcq', q: 'How many corners does a triangle have? 🔺', choices: ['2', '3', '4', '5'], answer: 1 },
        { type: 'mcq', q: '15 − 7 = ? ⚡', choices: ['6', '7', '8', '9'], answer: 2 },
        { type: 'mcq', q: 'Which is bigger: 45 or 54? 🏆', choices: ['45', '54', 'They are equal', 'Cannot tell'], answer: 1 },
        { type: 'mcq', q: '🔴🔵🔴🔵___ — what comes next?', choices: ['🔴', '🔵', '🟢', '🟡'], answer: 0 }
      ]
    }
  ]
};
