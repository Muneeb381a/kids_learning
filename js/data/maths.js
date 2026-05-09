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
        {
          type: 'mcq',
          q: 'Kitne seb hain? 🍎🍎🍎',
          choices: ['2', '3', '4', '5'],
          answer: 1
        },
        {
          type: 'mcq',
          q: 'Is number ko pehchano: 7',
          choices: ['Panj (5)', 'Saat (7)', 'Aath (8)', 'Chaar (4)'],
          answer: 1
        },
        {
          type: 'mcq',
          q: 'Kitne sitare hain? ⭐⭐⭐⭐⭐',
          choices: ['3', '4', '5', '6'],
          answer: 2
        },
        {
          type: 'mcq',
          q: '1, 2, 3, __, 5 — Kaunsa number missing hai?',
          choices: ['4', '6', '7', '8'],
          answer: 0
        },
        {
          type: 'mcq',
          q: 'Dus (10) ka number kaunsa hai?',
          choices: ['8', '9', '10', '11'],
          answer: 2
        }
      ]
    },
    {
      id: 2,
      title: 'Numbers 11–20',
      icon: '🔟',
      questions: [
        {
          type: 'mcq',
          q: 'Gyarah (11) ka number kaunsa hai?',
          choices: ['10', '11', '12', '13'],
          answer: 1
        },
        {
          type: 'mcq',
          q: '15, 16, 17, __, 19 — Missing number kaunsa hai?',
          choices: ['16', '18', '20', '14'],
          answer: 1
        },
        {
          type: 'mcq',
          q: 'Bees (20) likhne ka sahi tarika kaunsa hai?',
          choices: ['02', '12', '20', '21'],
          answer: 2
        },
        {
          type: 'mcq',
          q: 'Kitne phool hain? 🌸🌸🌸🌸🌸🌸🌸🌸🌸🌸🌸🌸🌸',
          choices: ['11', '12', '13', '14'],
          answer: 2
        },
        {
          type: 'mcq',
          q: 'Solah (16) aur Satara (17) — dono ke baad kaunsa aata hai?',
          choices: ['15', '18', '19', '20'],
          answer: 1
        }
      ]
    },
    {
      id: 3,
      title: 'Numbers 21–100',
      icon: '💯',
      questions: [
        {
          type: 'mcq',
          q: 'Pachees (25) ka number kaunsa hai?',
          choices: ['52', '25', '15', '55'],
          answer: 1
        },
        {
          type: 'mcq',
          q: '50 ko Urdu mein kya kehte hain?',
          choices: ['Paanch', 'Pachaas', 'Pandraa', 'Pachees'],
          answer: 1
        },
        {
          type: 'mcq',
          q: '30, 40, 50, __, 70 — missing number?',
          choices: ['55', '65', '60', '80'],
          answer: 2
        },
        {
          type: 'mcq',
          q: 'Sau (100) mein kitne zero hain?',
          choices: ['0', '1', '2', '3'],
          answer: 2
        },
        {
          type: 'mcq',
          q: 'Kaunsa number 99 se bada hai?',
          choices: ['98', '97', '100', '90'],
          answer: 2
        }
      ]
    },
    {
      id: 4,
      title: 'Shapes',
      icon: '🔷',
      questions: [
        {
          type: 'mcq',
          q: 'Ghadi (clock) kis shape ki hoti hai?',
          choices: ['Square', 'Triangle', 'Circle', 'Rectangle'],
          answer: 2
        },
        {
          type: 'mcq',
          q: 'Triangle mein kitne corners hote hain?',
          choices: ['2', '3', '4', '5'],
          answer: 1
        },
        {
          type: 'mcq',
          q: 'Square mein kitni sides hoti hain?',
          choices: ['3', '4', '5', '6'],
          answer: 1
        },
        {
          type: 'mcq',
          q: 'Pakistan ka jhanda kis shape mein hai?',
          choices: ['Circle', 'Triangle', 'Rectangle', 'Star'],
          answer: 2
        },
        {
          type: 'mcq',
          q: 'Kaunsi shape ke koye corner nahi hote?',
          choices: ['Square', 'Triangle', 'Circle', 'Rectangle'],
          answer: 2
        }
      ]
    },
    {
      id: 5,
      title: 'Colors & Counting',
      icon: '🌈',
      questions: [
        {
          type: 'mcq',
          q: 'Rainbow mein kitne rang hote hain?',
          choices: ['5', '6', '7', '8'],
          answer: 2
        },
        {
          type: 'mcq',
          q: '3 lal 🔴 aur 2 neelay 🔵 — kul kitne?',
          choices: ['4', '5', '6', '7'],
          answer: 1
        },
        {
          type: 'mcq',
          q: 'Aasman ka rang kya hai?',
          choices: ['Laal', 'Peela', 'Neela', 'Hara'],
          answer: 2
        },
        {
          type: 'mcq',
          q: '4 hare 🟢 aur 4 peele 🟡 — kul kitne?',
          choices: ['6', '7', '8', '9'],
          answer: 2
        },
        {
          type: 'mcq',
          q: 'Grass ka rang kya hota hai?',
          choices: ['Laal', 'Hara', 'Neela', 'Kala'],
          answer: 1
        }
      ]
    },
    {
      id: 6,
      title: 'Addition (+)',
      icon: '➕',
      questions: [
        { type: 'mcq', q: '2 + 3 = ?', choices: ['4', '5', '6', '7'], answer: 1 },
        { type: 'mcq', q: '5 + 5 = ?', choices: ['8', '9', '10', '11'], answer: 2 },
        { type: 'mcq', q: '7 + 3 = ?', choices: ['9', '10', '11', '12'], answer: 1 },
        { type: 'mcq', q: '🍎🍎 + 🍎🍎🍎 = ?', choices: ['3', '4', '5', '6'], answer: 2 },
        { type: 'mcq', q: '4 + 6 = ?', choices: ['8', '9', '10', '11'], answer: 2 }
      ]
    },
    {
      id: 7,
      title: 'Subtraction (−)',
      icon: '➖',
      questions: [
        { type: 'mcq', q: '10 − 3 = ?', choices: ['6', '7', '8', '9'], answer: 1 },
        { type: 'mcq', q: '8 − 5 = ?', choices: ['2', '3', '4', '5'], answer: 1 },
        { type: 'mcq', q: '9 − 9 = ?', choices: ['0', '1', '2', '9'], answer: 0 },
        { type: 'mcq', q: '7 − 4 = ?', choices: ['1', '2', '3', '4'], answer: 2 },
        { type: 'mcq', q: '5 − 2 = ?', choices: ['2', '3', '4', '5'], answer: 1 }
      ]
    },
    {
      id: 8,
      title: 'Big / Small / Equal',
      icon: '⚖️',
      questions: [
        { type: 'mcq', q: '9 ___ 5 — kaunsa sign sahi hai?', choices: ['<', '>', '=', '+'], answer: 1 },
        { type: 'mcq', q: '3 ___ 3 — kaunsa sign sahi hai?', choices: ['<', '>', '=', '-'], answer: 2 },
        { type: 'mcq', q: '2 ___ 8 — kaunsa sign sahi hai?', choices: ['<', '>', '=', '+'], answer: 0 },
        { type: 'mcq', q: 'Kaunsa bara hai: 15 ya 51?', choices: ['15', '51', 'Dono equal', 'Pata nahi'], answer: 1 },
        { type: 'mcq', q: '100 ___ 99 — kaunsa sign sahi hai?', choices: ['<', '>', '=', '≠'], answer: 1 }
      ]
    },
    {
      id: 9,
      title: 'Patterns',
      icon: '🔁',
      questions: [
        { type: 'mcq', q: '🔴🔵🔴🔵🔴___ — agla kya aayega?', choices: ['🔴', '🔵', '🟢', '🟡'], answer: 1 },
        { type: 'mcq', q: '1, 2, 3, 1, 2, 3, ___ — agla kya?', choices: ['1', '2', '3', '4'], answer: 0 },
        { type: 'mcq', q: '🐱🐶🐱🐶___ — agla kya?', choices: ['🐰', '🐱', '🐶', '🐟'], answer: 1 },
        { type: 'mcq', q: '2, 4, 6, 8, ___ — agla kya?', choices: ['9', '10', '11', '12'], answer: 1 },
        { type: 'mcq', q: '5, 10, 15, 20, ___ — agla kya?', choices: ['22', '24', '25', '30'], answer: 2 }
      ]
    },
    {
      id: 10,
      title: '🏆 Boss Level — Mixed Quiz',
      icon: '🏆',
      isBoss: true,
      questions: [
        { type: 'mcq', q: '6 + 4 = ?', choices: ['8', '9', '10', '11'], answer: 2 },
        { type: 'mcq', q: 'Triangle mein kitne corners?', choices: ['2', '3', '4', '5'], answer: 1 },
        { type: 'mcq', q: '15 − 7 = ?', choices: ['6', '7', '8', '9'], answer: 2 },
        { type: 'mcq', q: 'Kaunsa bara hai: 45 ya 54?', choices: ['45', '54', 'Equal', 'Pata nahi'], answer: 1 },
        { type: 'mcq', q: '🔴🔵🔴🔵___ — agla?', choices: ['🔴', '🔵', '🟢', '🟡'], answer: 0 }
      ]
    }
  ]
};
