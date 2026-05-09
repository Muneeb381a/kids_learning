/* Urdu Universe — all 10 levels */

const URDU_DATA = {
  subject: 'urdu',
  name: 'Urdu',
  world: 'Urdu Universe',
  icon: '🌙',
  color: '#AB47BC',
  levels: [
    {
      id: 1,
      title: 'Haroof ا – ر',
      icon: '✍️',
      questions: [
        { type: 'mcq', q: 'اردو حروف تہجی کا پہلا حرف کون سا ہے؟', choices: ['ب', 'ا', 'پ', 'ت'], answer: 1 },
        { type: 'mcq', q: '"الف" کے بعد کون سا حرف آتا ہے؟', choices: ['ت', 'ب', 'ج', 'پ'], answer: 1 },
        { type: 'mcq', q: '"ر" کس لفظ میں آتا ہے؟', choices: ['پتا', 'رنگ', 'کتاب', 'گھر'], answer: 1 },
        { type: 'mcq', q: '"ب" سے کون سا لفظ شروع ہوتا ہے؟', choices: ['آم', 'بلی', 'گھر', 'دودھ'], answer: 1 },
        { type: 'mcq', q: 'یہ حرف کون سا ہے؟  پ', choices: ['ب', 'ت', 'پ', 'ٹ'], answer: 2 }
      ]
    },
    {
      id: 2,
      title: 'Haroof ز – ی',
      icon: '✏️',
      questions: [
        { type: 'mcq', q: '"زبان" میں پہلا حرف کون سا ہے؟', choices: ['ر', 'ز', 'س', 'ش'], answer: 1 },
        { type: 'mcq', q: '"یار" کا پہلا حرف؟', choices: ['و', 'ہ', 'ی', 'ع'], answer: 2 },
        { type: 'mcq', q: '"گ" سے کون سا لفظ شروع ہوتا ہے؟', choices: ['کتاب', 'گلاب', 'فول', 'ہاتھ'], answer: 1 },
        { type: 'mcq', q: 'یہ حرف کون سا ہے؟  م', choices: ['ل', 'ن', 'م', 'و'], answer: 2 },
        { type: 'mcq', q: '"نام" میں کتنے حروف ہیں؟', choices: ['2', '3', '4', '5'], answer: 1 }
      ]
    },
    {
      id: 3,
      title: 'Awaazein (آ، اِ، اُ)',
      icon: '🔈',
      questions: [
        { type: 'mcq', q: '"آم" میں کون سی آواز ہے؟', choices: ['اِ', 'اُ', 'آ', 'اے'], answer: 2 },
        { type: 'mcq', q: '"اِلم" کا مطلب کیا ہے؟', choices: ['پانی', 'علم / سیکھنا', 'گھر', 'کھانا'], answer: 1 },
        { type: 'mcq', q: '"اُٹھو" میں کون سی آواز ہے؟', choices: ['آ', 'اِ', 'اُ', 'اے'], answer: 2 },
        { type: 'mcq', q: 'لمبی آواز والا حرف کون سا ہے؟', choices: ['اِ', 'اُ', 'آ', 'ا'], answer: 2 },
        { type: 'mcq', q: '"اِک" یعنی کتنا؟', choices: ['دو', 'ایک', 'تین', 'چار'], answer: 1 }
      ]
    },
    {
      id: 4,
      title: '2-Harf wale Alfaaz',
      icon: '📖',
      questions: [
        { type: 'mcq', q: '"گھر" میں کتنے حروف ہیں؟', choices: ['1', '2', '3', '4'], answer: 2 },
        { type: 'mcq', q: '"ماں" کا مطلب؟', choices: ['باپ', 'دادی', 'ماں / امی', 'بہن'], answer: 2 },
        { type: 'mcq', q: '"آب" کا مطلب؟', choices: ['آگ', 'پانی', 'مٹی', 'ہوا'], answer: 1 },
        { type: 'mcq', q: 'دو حرفی لفظ کون سا ہے؟', choices: ['کتاب', 'بل', 'پرندہ', 'درخت'], answer: 1 },
        { type: 'mcq', q: '"دم" کا مطلب؟', choices: ['پانی', 'سانس', 'گھر', 'کھانا'], answer: 1 }
      ]
    },
    {
      id: 5,
      title: 'Rang (Colors)',
      icon: '🌈',
      questions: [
        { type: 'mcq', q: 'آسمان کا رنگ؟', choices: ['لال', 'سبز', 'نیلا', 'پیلا'], answer: 2 },
        { type: 'mcq', q: '"سبز" کا مطلب؟', choices: ['Red', 'Blue', 'Green', 'Yellow'], answer: 2 },
        { type: 'mcq', q: 'سورج کا رنگ؟', choices: ['نیلا', 'سرخ', 'پیلا', 'سفید'], answer: 2 },
        { type: 'mcq', q: '"لال" کا مطلب?', choices: ['Blue', 'Red', 'Green', 'White'], answer: 1 },
        { type: 'mcq', q: 'گھاس کا رنگ؟', choices: ['پیلا', 'سبز', 'لال', 'نارنجی'], answer: 1 }
      ]
    },
    {
      id: 6,
      title: 'Ginti 1–10',
      icon: '🔢',
      questions: [
        { type: 'mcq', q: '"پانچ" کو ہندسے میں لکھیں؟', choices: ['3', '4', '5', '6'], answer: 2 },
        { type: 'mcq', q: '"8" کو اردو میں کیا کہتے ہیں؟', choices: ['سات', 'آٹھ', 'نو', 'دس'], answer: 1 },
        { type: 'mcq', q: '"دس" کے بعد کون سا نمبر آتا ہے؟', choices: ['آٹھ', 'نو', 'گیارہ', 'بارہ'], answer: 2 },
        { type: 'mcq', q: '"تین" کا ہندسہ؟', choices: ['1', '2', '3', '4'], answer: 2 },
        { type: 'mcq', q: '"ایک، دو، تین، ___" — اگلا؟', choices: ['پانچ', 'چھ', 'چار', 'سات'], answer: 2 }
      ]
    },
    {
      id: 7,
      title: 'Ghar k Afraad (Family)',
      icon: '👨‍👩‍👧',
      questions: [
        { type: 'mcq', q: '"ابو" کا مطلب؟', choices: ['Mother', 'Father', 'Brother', 'Uncle'], answer: 1 },
        { type: 'mcq', q: '"دادی" کون ہوتی ہیں؟', choices: ['Mother', 'Aunt', 'Grandmother', 'Sister'], answer: 2 },
        { type: 'mcq', q: '"بھائی" کا مطلب؟', choices: ['Sister', 'Brother', 'Uncle', 'Cousin'], answer: 1 },
        { type: 'mcq', q: '"نانا" کون ہوتے ہیں؟', choices: ['Father', 'Uncle', 'Grandfather (maternal)', 'Brother'], answer: 2 },
        { type: 'mcq', q: '"امی" کو انگریزی میں کیا کہتے ہیں؟', choices: ['Father', 'Mother', 'Sister', 'Aunt'], answer: 1 }
      ]
    },
    {
      id: 8,
      title: 'Hafte k Din',
      icon: '📅',
      questions: [
        { type: 'mcq', q: 'ہفتے کا پہلا دن؟', choices: ['منگل', 'پیر', 'اتوار', 'جمعہ'], answer: 2 },
        { type: 'mcq', q: '"جمعہ" کو English میں؟', choices: ['Thursday', 'Friday', 'Saturday', 'Sunday'], answer: 1 },
        { type: 'mcq', q: 'ہفتے میں کتنے دن ہوتے ہیں؟', choices: ['5', '6', '7', '8'], answer: 2 },
        { type: 'mcq', q: 'پیر کے بعد کون سا دن آتا ہے؟', choices: ['اتوار', 'بدھ', 'منگل', 'جمعہ'], answer: 2 },
        { type: 'mcq', q: '"اتوار" کو انگریزی میں؟', choices: ['Monday', 'Saturday', 'Sunday', 'Friday'], answer: 2 }
      ]
    },
    {
      id: 9,
      title: 'Mahine',
      icon: '🗓️',
      questions: [
        { type: 'mcq', q: 'سال کا پہلا مہینہ؟', choices: ['فروری', 'مارچ', 'جنوری', 'دسمبر'], answer: 2 },
        { type: 'mcq', q: 'سال میں کتنے مہینے ہوتے ہیں؟', choices: ['10', '11', '12', '13'], answer: 2 },
        { type: 'mcq', q: '"January" کو اردو میں؟', choices: ['فروری', 'جنوری', 'مارچ', 'اپریل'], answer: 1 },
        { type: 'mcq', q: 'سال کا آخری مہینہ؟', choices: ['نومبر', 'دسمبر', 'اکتوبر', 'ستمبر'], answer: 1 },
        { type: 'mcq', q: '"رمضان" کے بعد کون سی عید آتی ہے؟', choices: ['عید الاضحی', 'عید الفطر', 'میلاد النبی', 'شب برات'], answer: 1 }
      ]
    },
    {
      id: 10,
      title: '🏆 Boss Level — Chhoti Kahani',
      icon: '🏆',
      isBoss: true,
      questions: [
        { type: 'mcq', q: 'مکمل جملہ کون سا ہے؟', choices: ['علی گیا', 'گیا علی اسکول', 'علی اسکول گیا', 'اسکول گیا'], answer: 2 },
        { type: 'mcq', q: '"بلی نے ___ کھایا" — خالی جگہ؟', choices: ['اُڑنا', 'دودھ', 'کتاب', 'پہاڑ'], answer: 1 },
        { type: 'mcq', q: 'کہانی میں "خوشی" سے کیا مراد ہے؟', choices: ['دکھ', 'خوف', 'مسرت', 'غصہ'], answer: 2 },
        { type: 'mcq', q: '"سارہ نے کتاب ___" — سہی لفظ؟', choices: ['کھائی', 'پڑھی', 'پی', 'اُڑائی'], answer: 1 },
        { type: 'mcq', q: '"آج موسم ___ ہے" — سہی لفظ؟', choices: ['لال', 'اچھا', 'لمبا', 'چھوٹا'], answer: 1 }
      ]
    }
  ]
};
