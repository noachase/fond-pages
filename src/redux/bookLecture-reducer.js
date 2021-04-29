const SET_BOOKLECTURE = 'SET_BOOKLECTURE';
const initialState = {
  partOfState: {
    id: 'BookLecture',
    name: 'Замовити лекцію',
    t1: 'Лектори Фонду проводять лекції і бесіди на такі теми:',
    p1: 'Лекція «Правда про наркотики» (для дітей від 11 років і дорослих).\n - ключова інформаці про те, що таке наркотики, який шкідливий вплив на організм та особистість вони чинять, чому виникає залежність.',
    t2: ' ',
    p2: 'Лекція «Правда про алкоголь і сигарети» (для учнів 2-5 класів) - у простій доступній формі розповідається про шкідливий вплив наркотиків (на прикладі алкоголю і сигарет) на організм і особистість, інтерактивний елемент – тренування «Як відмовитись від сигарети, якщо пропонують».',
    t3: ' ',
    p3: 'Казка «Солодка пастка» (1-3 клас) – повчальна історія, де у казковій формі слухачі повторюють основні правила безпеки для дітей (не брати нічого у незнайомих людей, не розмовляти з підозрілими людьми тощо).',
    t4: ' ',
    p4: '«Основи моралі: чому вигідно бути чесним» (учні 5-11 класів, студенти)\n- навіщо в суспільстві існують правила, як вони виникають і що буває, коли людина їх не дотримується; що таке правда і брехня і чому чесним бути набагато вигідніше і приємніше, ніж навпаки.',
    t5: ' ',
    p5: 'Казка «Про дружбу» (для дітей молодшого шкільного віку) – повчальна історія про справжню дружбу, чому в ній іноді виникають неприємності і що із цим робити.',
    t6: ' ',
    p6: 'Лекція «Ознаки вживання наркотиків» (для батьків і вчителів) - основні ознаки, за якими на ранніх етапах можна запідозрити, що дитина почала вживати наркотики. Як діяти в подібній ситуації.',
    t7: 'ВСІ ЛЕКЦІЇ БЕЗКОШТОВНІ',
    p7: 'Для того, щоб замовити проведення лекції, зателефонуйте нам (057)714-31-77 або напишіть за адресою fondnn.ukr@gmail.com',

  }
}

const bookLectureReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_BOOKLECTURE: {
      return { visibility: true, partOfState: initialState[action.id] };


    }
    default:
      return { ...state };
  }
};

export const setBookAC = id => ({ type: SET_BOOKLECTURE, id });

export default bookLectureReducer;