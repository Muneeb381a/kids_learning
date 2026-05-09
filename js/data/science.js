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
        { type: 'mcq', q: 'Hum dekhne ke liye kya use karte hain?', choices: ['Naak', 'Aankh', 'Kaan', 'Muh'], answer: 1 },
        { type: 'mcq', q: 'Hum sunne ke liye kya use karte hain?', choices: ['Aankh', 'Haath', 'Kaan', 'Pair'], answer: 2 },
        { type: 'mcq', q: 'Hum chalne ke liye kya use karte hain?', choices: ['Haath', 'Naak', 'Pair', 'Muh'], answer: 2 },
        { type: 'mcq', q: 'Hum khane ke liye kya use karte hain?', choices: ['Kaan', 'Muh', 'Aankh', 'Naak'], answer: 1 },
        { type: 'mcq', q: 'Hum sounchne ke liye kya use karte hain?', choices: ['Pair', 'Dil', 'Dimagh', 'Haath'], answer: 2 }
      ]
    },
    {
      id: 2,
      title: 'Animals — Farm, Wild, Pet',
      icon: '🐄',
      questions: [
        { type: 'mcq', q: 'Kaunsa janwar ghar mein pala jata hai?', choices: ['Sher', 'Billi', 'Hathi', 'Magar'], answer: 1 },
        { type: 'mcq', q: 'Kaunsa janwar jungle mein rehta hai?', choices: ['Murgi', 'Gaay', 'Sher', 'Billi'], answer: 2 },
        { type: 'mcq', q: 'Gaay kya deti hai?', choices: ['Andey', 'Doodh', 'Unn', 'Maans'], answer: 1 },
        { type: 'mcq', q: 'Kaunsa janwar farm mein hota hai?', choices: ['Sher', 'Murgi', 'Hathi', 'Zebrafish'], answer: 1 },
        { type: 'mcq', q: 'Kutta kis cheez ke liye mashoor hai?', choices: ['Wafadari', 'Doodh dena', 'Udna', 'Ande dena'], answer: 0 }
      ]
    },
    {
      id: 3,
      title: 'Birds',
      icon: '🐦',
      questions: [
        { type: 'mcq', q: 'Kaun sa parinda bol sakta hai?', choices: ['Chirya', 'Tota', 'Kabootar', 'Baaz'], answer: 1 },
        { type: 'mcq', q: 'Kaun sa parinda nahi ur sakta?', choices: ['Kabootar', 'Tota', 'Penguin', 'Chirya'], answer: 2 },
        { type: 'mcq', q: 'Chidiya kahan rehti hai?', choices: ['Pani mein', 'Ghar mein', 'Ped par', 'Zameen par'], answer: 2 },
        { type: 'mcq', q: 'Murgh subah kya karta hai?', choices: ['Sota hai', 'Baang deta hai', 'Urtaa hai', 'Tairta hai'], answer: 1 },
        { type: 'mcq', q: 'Parindey ande kahan dete hain?', choices: ['Pani mein', 'Ghonsle mein', 'Zameen par', 'Ped ke andar'], answer: 1 }
      ]
    },
    {
      id: 4,
      title: 'Fruits',
      icon: '🍎',
      questions: [
        { type: 'mcq', q: 'Aam kis season mein aata hai?', choices: ['Sardi', 'Garmi', 'Barish', 'Khushki'], answer: 1 },
        { type: 'mcq', q: 'Kela kaunse rang ka hota hai?', choices: ['Laal', 'Neela', 'Peela', 'Hara'], answer: 2 },
        { type: 'mcq', q: 'Kaunsa phal khatte (sour) hote hain?', choices: ['Kela', 'Nimbu', 'Aam', 'Angoor'], answer: 1 },
        { type: 'mcq', q: 'Seb (apple) kis rang ka hota hai?', choices: ['Neela', 'Laal ya Hara', 'Peela', 'Kala'], answer: 1 },
        { type: 'mcq', q: 'Kaunse phal mein vitamin C zyada hoti hai?', choices: ['Kela', 'Santra', 'Aam', 'Guava'], answer: 1 }
      ]
    },
    {
      id: 5,
      title: 'Vegetables',
      icon: '🥕',
      questions: [
        { type: 'mcq', q: 'Gajar kaunse rang ki hoti hai?', choices: ['Neeli', 'Narnji', 'Peeli', 'Laal'], answer: 1 },
        { type: 'mcq', q: 'Aloo zameen ke andar ugta hai ya upar?', choices: ['Upar', 'Andar', 'Pani mein', 'Ped par'], answer: 1 },
        { type: 'mcq', q: 'Palak khane se kya milta hai?', choices: ['Protein', 'Iron aur Calcium', 'Sugar', 'Fat'], answer: 1 },
        { type: 'mcq', q: 'Kaun sa sabzi gol hoti hai?', choices: ['Gajar', 'Pyaz', 'Arbi', 'Sab hi gol hain'], answer: 1 },
        { type: 'mcq', q: 'Tamatar — sabzi hai ya phal?', choices: ['Sirf sabzi', 'Sirf phal', 'Botanically phal, khane mein sabzi', 'Na sabzi na phal'], answer: 2 }
      ]
    },
    {
      id: 6,
      title: 'Plants & Trees',
      icon: '🌱',
      questions: [
        { type: 'mcq', q: 'Podey barhne ke liye kya chahiye?', choices: ['Sirf pani', 'Sirf dhoop', 'Pani, mitti, dhoop', 'Kuch nahi'], answer: 2 },
        { type: 'mcq', q: 'Podey oxygen kab banate hain?', choices: ['Raat ko', 'Din mein', 'Hamesha', 'Kabhi nahi'], answer: 1 },
        { type: 'mcq', q: 'Beej se kya nikalta hai?', choices: ['Phal', 'Patta', 'Poda', 'Phool'], answer: 2 },
        { type: 'mcq', q: 'Sabse uncha ped kaunsa hai?', choices: ['Aam', 'Neem', 'Sequoia', 'Banana'], answer: 2 },
        { type: 'mcq', q: 'Phool ka kaam kya hai?', choices: ['Photosynthesis', 'Reproduction / beej banana', 'Pani lena', 'Oxygen lena'], answer: 1 }
      ]
    },
    {
      id: 7,
      title: 'Weather',
      icon: '⛅',
      questions: [
        { type: 'mcq', q: 'Barish mein hum kya pehnte hain?', choices: ['Sunglasses', 'Raincoat ya Chatri', 'Muffler', 'Nothing'], answer: 1 },
        { type: 'mcq', q: 'Sardi mein hawa kesi hoti hai?', choices: ['Garam', 'Thandi', 'Normal', 'Nami wali'], answer: 1 },
        { type: 'mcq', q: 'Bijli kab chamakti hai?', choices: ['Dhoop mein', 'Toofan mein', 'Subah', 'Eid par'], answer: 1 },
        { type: 'mcq', q: 'Rainbow kab aata hai?', choices: ['Sardi mein', 'Barish ke baad', 'Garmi mein', 'Raat ko'], answer: 1 },
        { type: 'mcq', q: 'Fog (kohre) mein hum kya mushkil se dekh sakte hain?', choices: ['Rang', 'Dur ki cheezein', 'Paas ki cheezein', 'Kuch bhi nahi'], answer: 1 }
      ]
    },
    {
      id: 8,
      title: 'Day & Night',
      icon: '🌙',
      questions: [
        { type: 'mcq', q: 'Raat ko aasman mein kya chamakta hai?', choices: ['Suraj', 'Chaand aur Taare', 'Dhoop', 'Rainbow'], answer: 1 },
        { type: 'mcq', q: 'Din mein roshni kahan se aati hai?', choices: ['Chaand se', 'Suraj se', 'Sitaron se', 'Bijli se'], answer: 1 },
        { type: 'mcq', q: 'Suraj kis taraf se ugta hai?', choices: ['Paschim (West)', 'Mashrik (East)', 'Upar se', 'Neeche se'], answer: 1 },
        { type: 'mcq', q: 'Ek din mein kitne ghante hote hain?', choices: ['12', '24', '36', '48'], answer: 1 },
        { type: 'mcq', q: 'Raat aur din mein kya farq hai?', choices: ['Koi farq nahi', 'Din mein roshni, raat mein andhera', 'Raat mein roshni', 'Din mein andhera'], answer: 1 }
      ]
    },
    {
      id: 9,
      title: 'Planets & Solar System',
      icon: '🪐',
      questions: [
        { type: 'mcq', q: 'Hamare solar system mein kitne planet hain?', choices: ['7', '8', '9', '10'], answer: 1 },
        { type: 'mcq', q: 'Suraj ke sabse qareeb kaun sa planet hai?', choices: ['Venus', 'Mercury', 'Earth', 'Mars'], answer: 1 },
        { type: 'mcq', q: 'Hum kaunse planet par rehte hain?', choices: ['Mars', 'Venus', 'Earth', 'Jupiter'], answer: 2 },
        { type: 'mcq', q: 'Sabse bara planet kaunsa hai?', choices: ['Saturn', 'Mars', 'Jupiter', 'Neptune'], answer: 2 },
        { type: 'mcq', q: 'Chaand kya hai?', choices: ['Ek planet', 'Ek sitara', 'Earth ka moon', 'Ek asteroid'], answer: 2 }
      ]
    },
    {
      id: 10,
      title: '🏆 Boss Level — 5 Senses',
      icon: '🏆',
      isBoss: true,
      questions: [
        { type: 'mcq', q: 'Hum khushbu kisse sounchte hain?', choices: ['Kaan', 'Aankh', 'Naak', 'Zabaan'], answer: 2 },
        { type: 'mcq', q: 'Hum mitha kisse mehsoos karte hain?', choices: ['Naak', 'Zabaan', 'Haath', 'Aankh'], answer: 1 },
        { type: 'mcq', q: 'Hum aawaaz kisse sunteyn hain?', choices: ['Aankh', 'Kaan', 'Naak', 'Haath'], answer: 1 },
        { type: 'mcq', q: 'Hum cheez ko touch se kya mehsoos karte hain?', choices: ['Khushbu', 'Awaaz', 'Texture aur Temperature', 'Rang'], answer: 2 },
        { type: 'mcq', q: 'Kitne senses hote hain insaan ko?', choices: ['3', '4', '5', '6'], answer: 2 }
      ]
    }
  ]
};
