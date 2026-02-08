export const BUTTON_LABELS = {
  GO_BACK: '🏠︎',
  SUBMIT: 'SUBMIT',
};

export const SUITS = {
  CLUBS: '♣️',
  DIAMONDS: '♦️',
  HEARTS: '♥️',
  SPADES: '♠️',
}

export const WELCOME_PAGE = {
  ICON: Object.values(SUITS).join(''),
  JA_TITLE: 'ウィンチー・イン・バレンタインズ',
  EN_TITLE: 'Winchi in Valentines',
  JA_MESSAGE: 'すべてのゲームをクリアしてスーツを手に入れよう。すべてのスーツを手に入れて勝利しよう。',
  EN_MESSAGE: 'Finish all the games to get suits. Get all the suits to win.',
};

export const CLUBS_PAGE = {
  SUIT_NAME: 'clubs',
  ICON: SUITS.CLUBS,
  JA_TITLE: 'バランスゲーム',
  EN_TITLE: 'BALANCE GAME',
  JA_MESSAGE: 'バランスこそがすべての鍵です。',
  EN_MESSAGE: 'Balance is the key to everything.',
}

export const DIAMONDS_PAGE = {
  SUIT_NAME: 'diamonds',
  ICON: SUITS.DIAMONDS,
  JA_TITLE: '謎',
  EN_TITLE: 'RIDDLE',
  JA_MESSAGE: 'すべての謎は単なる答え以上のものを明らかにします。',
  EN_MESSAGE: 'Every riddle reveals more than just an answer.',
  RIDDLE: `
  You are driving a bus on a cloudy Tuesday morning, wearing your favorite jacket and thinking about what to eat for lunch later. The bus is painted blue and white, has slightly squeaky brakes, and the radio is quietly playing an old song you half recognize.

At the very first stop, which is next to a bakery that smells like fresh bread, 1 person gets on the bus. You check your mirrors, adjust your seat, and continue driving at exactly the speed limit.

At the next stop, located near a park where two dogs are chasing a ball, 10 people get on the bus and 4 people get off. Someone drops a coin, another person asks what time it is, and the traffic light ahead turns yellow just as you pass through it.

After a few more minutes of driving, the bus continues down the road, passing several shops and trees swaying in the wind.
  `,
  QUESTION_1: 'How old is the bus driver?',
  ANSWER_1: '22',
  QUESTION_2: "What is the bus driver's shoe size (US)?",
  ANSWER_2: '8',
  QUESTION_3: "What is the bus driver's favorite color?",
  ANSWER_3: 'black',
} as const

export const HEARTS_PAGE = {
  SUIT_NAME: 'hearts',
  ICON: SUITS.HEARTS,
  JA_TITLE: '私を信じてください',
  EN_TITLE: 'PLEASE TRUST ME',
  JA_MESSAGE: '誰かを信頼できるかどうかを知る最良の方法は、その人を信頼することです。',
  EN_MESSAGE: 'The best way to find out if you can trust somebody is to trust them.',
}


export const SPADES_PAGE = {
  SUIT_NAME: 'spades',
  ICON: SUITS.SPADES,
  JA_TITLE: 'タグ',
  EN_TITLE: 'TAG',
  JA_MESSAGE: '',
  EN_MESSAGE: '',
}

export const MODAL_MESSAGES = {
  JA_MESSAGE: 'ゲームクリア',
  EN_MESSAGE: 'GAME CLEAR',
}

export const WINNER_PAGE = {
  ICON: '😎',
  JA_TITLE: '勝ったね。あなたは私のバレンタインよ.',
  EN_TITLE: 'You win. You are now my Valentine.',
}