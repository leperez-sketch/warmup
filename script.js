// script.js - Cinchada Académica (Tug of War)

// 1. CARGA DE IMÁGENES PNG
const imgAzul = new Image();
imgAzul.src = 'jugador_azul.png';

const imgRojo = new Image();
imgRojo.src = 'jugador_rojo(1).png';

// 2. BANCO DE 250 PREGUNTAS (50 POR NIVEL)
const questionBank = {
  A1: [
    { q: "What is the English word for 'Perro'?", options: ["Cat", "Dog", "Fish", "Bird"], answer: 1 },
    { q: "Choose the correct verb: 'She ___ my friend.'", options: ["are", "am", "is", "be"], answer: 2 },
    { q: "Select the correct plural: 'One book, two ___.'", options: ["books", "bookes", "book", "bookies"], answer: 0 },
    { q: "Opposite of 'Hot':", options: ["Warm", "Cold", "Dry", "Sun"], answer: 1 },
    { q: "Which day comes after Monday?", options: ["Sunday", "Wednesday", "Tuesday", "Friday"], answer: 2 },
    { q: "Fill in: '___ name is Carlos.'", options: ["My", "I", "Me", "Mine"], answer: 0 },
    { q: "Which number is 'Fifteen'?", options: ["50", "15", "5", "500"], answer: 1 },
    { q: "Choose the correct sentence:", options: ["I have a red car", "I have a car red", "I red car have", "Red car I have"], answer: 0 },
    { q: "What color do you get mixing Blue and Yellow?", options: ["Red", "Green", "Purple", "Orange"], answer: 1 },
    { q: "Fill in: 'They ___ playing football.'", options: ["is", "am", "are", "be"], answer: 2 },
    { q: "What is the opposite of 'Big'?", options: ["Large", "Small", "Tall", "High"], answer: 1 },
    { q: "Where do you sleep?", options: ["Kitchen", "Bathroom", "Bedroom", "Garden"], answer: 2 },
    { q: "Choose the correct pronoun: '___ is raining.'", options: ["He", "She", "It", "They"], answer: 2 },
    { q: "Select the correct article: '___ apple a day.'", options: ["A", "An", "The", "No article"], answer: 1 },
    { q: "What do you use to write?", options: ["Pen", "Chair", "Shoe", "Apple"], answer: 0 },
    { q: "Fill in: 'We ___ to school every day.'", options: ["goes", "go", "going", "gone"], answer: 1 },
    { q: "What time of day do you eat breakfast?", options: ["Night", "Morning", "Afternoon", "Evening"], answer: 1 },
    { q: "Choose the correct word: 'I have two ___.'", options: ["foot", "foots", "feet", "feets"], answer: 2 },
    { q: "What is 'Hermano' in English?", options: ["Sister", "Brother", "Father", "Mother"], answer: 1 },
    { q: "Fill in: 'Can you ___ me?'", options: ["help", "helps", "helping", "helped"], answer: 0 },
    { q: "Select the fruit:", options: ["Carrot", "Banana", "Chicken", "Bread"], answer: 1 },
    { q: "Opposite of 'Happy':", options: ["Sad", "Glad", "Fun", "Fast"], answer: 0 },
    { q: "Fill in: 'There ___ a book on the table.'", options: ["are", "is", "be", "am"], answer: 1 },
    { q: "What do you drink when you are thirsty?", options: ["Bread", "Water", "Rice", "Paper"], answer: 1 },
    { q: "Choose the correct spelling:", options: ["Scol", "School", "Shool", "Schoal"], answer: 1 },
    { q: "How many months are in a year?", options: ["10", "12", "7", "30"], answer: 1 },
    { q: "Fill in: 'She ___ like apples.'", options: ["don't", "doesn't", "not", "isn't"], answer: 1 },
    { q: "What is 'Agua' in English?", options: ["Water", "Milk", "Juice", "Tea"], answer: 0 },
    { q: "Where do you buy bread?", options: ["Hospital", "Bakery", "Library", "Airport"], answer: 1 },
    { q: "Select the correct subject: '___ live in Colombia.'", options: ["He", "She", "I", "It"], answer: 2 },
    { q: "What animal says 'Mew'?", options: ["Dog", "Cat", "Cow", "Duck"], answer: 1 },
    { q: "Fill in: 'Look at ___!'", options: ["he", "him", "his", "himself"], answer: 1 },
    { q: "Opposite of 'Fast':", options: ["Slow", "Quick", "Early", "Late"], answer: 0 },
    { q: "What do you wear on your feet?", options: ["Hat", "Shirt", "Shoes", "Gloves"], answer: 2 },
    { q: "Choose the question word for places:", options: ["When", "Where", "Who", "Why"], answer: 1 },
    { q: "Fill in: '___ old are you?'", options: ["How", "What", "Who", "Where"], answer: 0 },
    { q: "Select the verb: 'The bird can ___.'", options: ["fly", "blue", "sky", "happy"], answer: 0 },
    { q: "What is 'Manzana' in English?", options: ["Orange", "Banana", "Apple", "Grape"], answer: 2 },
    { q: "Fill in: 'This is ___ house.'", options: ["our", "we", "us", "ourselves"], answer: 0 },
    { q: "Which month comes first in the year?", options: ["December", "January", "July", "March"], answer: 1 },
    { q: "Choose the correct form: 'He ___ TV.'", options: ["watch", "watches", "watching", "watched"], answer: 1 },
    { q: "What is the opposite of 'Open'?", options: ["Close", "Shut", "Closed", "Lock"], answer: 2 },
    { q: "Fill in: 'I am ___ than you.'", options: ["tall", "taller", "tallest", "more tall"], answer: 1 },
    { q: "Select the vegetable:", options: ["Potato", "Apple", "Milk", "Fish"], answer: 0 },
    { q: "What do you use to open a lock?", options: ["Key", "Door", "Window", "Wall"], answer: 0 },
    { q: "Fill in: 'Listen ___ the teacher.'", options: ["at", "to", "for", "on"], answer: 1 },
    { q: "Which is a day of the weekend?", options: ["Monday", "Thursday", "Saturday", "Wednesday"], answer: 2 },
    { q: "What is 'Sol' in English?", options: ["Moon", "Sun", "Star", "Cloud"], answer: 1 },
    { q: "Fill in: 'I don't have ___ money.'", options: ["some", "any", "a", "an"], answer: 1 },
    { q: "Select the correct sentence:", options: ["She is reading", "She reading", "She are reading", "She am reading"], answer: 0 }
  ],
  A2: [
    { q: "Yesterday, I ___ to the cinema.", options: ["go", "went", "gone", "going"], answer: 1 },
    { q: "She is ___ than her sister.", options: ["more intelligent", "intelligenter", "most intelligent", "intelligent"], answer: 0 },
    { q: "There ___ many people at the party last night.", options: ["was", "were", "are", "been"], answer: 1 },
    { q: "Choose the correct past simple: 'Buy -> ___'", options: ["Buyed", "Bought", "Brought", "Buying"], answer: 1 },
    { q: "We ___ visit our grandparents next weekend.", options: ["are going to", "went", "goes", "have"], answer: 0 },
    { q: "Which word is an adverb of frequency?", options: ["Always", "Quickly", "Beautiful", "Yesterday"], answer: 0 },
    { q: "Fill in: 'He drove ___ through the city.'", options: ["careful", "carefully", "care", "caring"], answer: 1 },
    { q: "Select the uncountable noun:", options: ["Chair", "Water", "Apple", "Coin"], answer: 1 },
    { q: "Fill in: 'How ___ milk do we need?'", options: ["many", "much", "few", "long"], answer: 1 },
    { q: "Choose the correct preposition: 'Arrive ___ the airport.'", options: ["at", "on", "to", "in"], answer: 0 },
    { q: "He was sleeping when the phone ___.", options: ["rang", "ring", "rings", "was ringing"], answer: 0 },
    { q: "You ___ wear a helmet when riding a motorbike.", options: ["must", "might", "would", "could"], answer: 0 },
    { q: "Fill in: 'I haven't seen him ___ last Monday.'", options: ["for", "since", "from", "in"], answer: 1 },
    { q: "Which comparative is correct?", options: ["Gooder", "Better", "Best", "More good"], answer: 1 },
    { q: "Choose the superlative form: 'Bad -> ___'", options: ["Worse", "Worst", "The worst", "Baddest"], answer: 2 },
    { q: "Fill in: 'They are interested ___ art.'", options: ["on", "at", "in", "about"], answer: 2 },
    { q: "What is the past form of 'Teach'?", options: ["Teached", "Taught", "Thought", "Teach"], answer: 1 },
    { q: "Fill in: 'She can play the piano, ___ she?'", options: ["can't", "doesn't", "isn't", "won't"], answer: 0 },
    { q: "Choose the correct phrase: 'Look ___!' (Be careful)", options: ["out", "at", "for", "after"], answer: 0 },
    { q: "There isn't ___ cheese left in the fridge.", options: ["some", "any", "no", "many"], answer: 1 },
    { q: "Fill in: 'This book is ___. It belongs to me.'", options: ["my", "mine", "me", "myself"], answer: 1 },
    { q: "He usually ___ coffee in the morning.", options: ["drink", "drinks", "is drinking", "drank"], answer: 1 },
    { q: "Choose the right connector: 'I was tired, ___ I went to bed early.'", options: ["because", "so", "but", "although"], answer: 1 },
    { q: "Fill in: 'They have lived here ___ 5 years.'", options: ["since", "for", "during", "from"], answer: 1 },
    { q: "What is the past simple of 'Write'?", options: ["Writed", "Wrote", "Written", "Writing"], answer: 1 },
    { q: "Fill in: 'Would you like ___ tea?'", options: ["some", "any", "a", "an"], answer: 0 },
    { q: "Which sentence is correct?", options: ["He don't like pizza", "He doesn't likes pizza", "He doesn't like pizza", "He not like pizza"], answer: 2 },
    { q: "Fill in: 'We are leaving ___ 8 o'clock.'", options: ["in", "on", "at", "by"], answer: 2 },
    { q: "Choose the correct possessive: 'The ___ car is red.'", options: ["doctor", "doctor's", "doctors'", "doctors"], answer: 1 },
    { q: "What is the opposite of 'Cheap'?", options: ["Expensive", "Costly", "Rich", "High"], answer: 0 },
    { q: "Fill in: 'I was watching TV when she ___.'", options: ["arrived", "arrives", "was arriving", "arrive"], answer: 0 },
    { q: "Select the option with correct spelling:", options: ["Beautifull", "Beautiful", "Beautifil", "Beautful"], answer: 1 },
    { q: "Fill in: 'She is good ___ dancing.'", options: ["in", "at", "on", "for"], answer: 1 },
    { q: "Which sentence expresses a future plan?", options: ["I visit my doctor yesterday", "I'm meeting Sarah tomorrow", "I meet Sarah every day", "I met Sarah"], answer: 1 },
    { q: "Choose the past form of 'Catch':", options: ["Catched", "Caught", "Cott", "Catches"], answer: 1 },
    { q: "Fill in: 'You ___ smoke in the hospital.'", options: ["mustn't", "don't have to", "can", "should"], answer: 0 },
    { q: "What is the plural of 'Mouse'?", options: ["Mouses", "Mice", "Mices", "Mouse"], answer: 1 },
    { q: "Fill in: 'He is as tall ___ his father.'", options: ["than", "like", "as", "so"], answer: 2 },
    { q: "Which pronoun completes: 'Give ___ the ball.'", options: ["he", "him", "his", "himself"], answer: 1 },
    { q: "Fill in: 'I prefer tea ___ coffee.'", options: ["to", "than", "over", "from"], answer: 0 },
    { q: "What is the past simple of 'Fly'?", options: ["Flied", "Flew", "Flown", "Flying"], answer: 1 },
    { q: "Choose the correct frequency adverb place:", options: ["He speaks always English", "He always speaks English", "Always he speaks English", "He speaks English always"], answer: 1 },
    { q: "Fill in: 'How ___ books did you read?'", options: ["much", "many", "long", "often"], answer: 1 },
    { q: "Choose the correct preposition: 'The picture is ___ the wall.'", options: ["in", "at", "on", "under"], answer: 2 },
    { q: "Fill in: 'She didn't ___ anything.'", options: ["say", "said", "says", "saying"], answer: 0 },
    { q: "What is the opposite of 'Quiet'?", options: ["Loud", "Silent", "Calm", "Soft"], answer: 0 },
    { q: "Fill in: 'If it rains, I ___ stay inside.'", options: ["will", "would", "did", "was"], answer: 0 },
    { q: "Select the correct sentence:", options: ["Where you go yesterday?", "Where did you go yesterday?", "Where you went yesterday?", "Where do you went yesterday?"], answer: 1 },
    { q: "Fill in: 'He is afraid ___ spiders.'", options: ["about", "of", "from", "at"], answer: 1 },
    { q: "What is the past participle of 'See'?", options: ["Saw", "Seen", "See", "Seeing"], answer: 1 }
  ],
  B1: [
    { q: "If I ___ rich, I would travel the world.", options: ["am", "was", "were", "been"], answer: 2 },
    { q: "The car ___ by the mechanic yesterday.", options: ["repaired", "was repaired", "is repaired", "was repairing"], answer: 1 },
    { q: "I've been learning English ___ three years.", options: ["since", "for", "during", "from"], answer: 1 },
    { q: "She asked me where I ___.", options: ["live", "lived", "was live", "living"], answer: 1 },
    { q: "By the time we arrived, the train ___.", options: ["left", "has left", "had left", "was leaving"], answer: 2 },
    { q: "You ___ pay attention in class if you want to pass.", options: ["should", "would", "could", "might"], answer: 0 },
    { q: "Choose the correct phrasal verb: 'Please ___ the lights before leaving.'", options: ["turn off", "turn up", "take off", "get off"], answer: 0 },
    { q: "I enjoy ___ books in my free time.", options: ["to read", "reading", "read", "reads"], answer: 1 },
    { q: "He promised ___ me as soon as he arrived.", options: ["calling", "to call", "call", "called"], answer: 1 },
    { q: "This is the house ___ I grew up.", options: ["which", "where", "that", "whose"], answer: 1 },
    { q: "Although it was raining, we ___ for a walk.", options: ["went", "go", "had gone", "were going"], answer: 0 },
    { q: "If you heat ice, it ___.", options: ["melts", "melted", "would melt", "will melt"], answer: 0 },
    { q: "He speaks English fluently, ___?", options: ["doesn't he", "isn't he", "don't he", "won't he"], answer: 0 },
    { q: "She works as a manager, ___ she?", options: ["doesn't", "isn't", "hasn't", "won't"], answer: 0 },
    { q: "I'm looking forward to ___ you next week.", options: ["see", "seeing", "seen", "saw"], answer: 1 },
    { q: "The movie was so ___ that I fell asleep.", options: ["boring", "bored", "boredom", "boringly"], answer: 0 },
    { q: "Neither John ___ Mary was present at the event.", options: ["or", "nor", "and", "but"], answer: 1 },
    { q: "He isn't old ___ to drive a car.", options: ["enough", "too", "so", "very"], answer: 0 },
    { q: "The cake smells ___.", options: ["delicious", "deliciously", "delight", "delighted"], answer: 0 },
    { q: "They have decided ___ to Spain this summer.", options: ["go", "to go", "going", "gone"], answer: 1 },
    { q: "If I ___ you, I would accept the job offer.", options: ["am", "were", "had been", "will be"], answer: 1 },
    { q: "The bridge was built ___ the 19th century.", options: ["in", "on", "at", "by"], answer: 0 },
    { q: "He succeeded ___ passing all his exams.", options: ["in", "on", "at", "for"], answer: 0 },
    { q: "Phrasal verb: 'Don't give ___! You can do it!'", options: ["up", "in", "out", "away"], answer: 0 },
    { q: "I can't afford ___ a new car right now.", options: ["buy", "to buy", "buying", "bought"], answer: 1 },
    { q: "She asked him: 'What time is it?' -> She asked him what time ___.", options: ["it is", "it was", "is it", "was it"], answer: 1 },
    { q: "We had better ___ now before it gets dark.", options: ["leave", "to leave", "leaving", "left"], answer: 0 },
    { q: "The police ___ investigating the incident.", options: ["is", "are", "was", "has"], answer: 1 },
    { q: "He stopped ___ a few years ago due to health issues.", options: ["smoke", "to smoke", "smoking", "smoked"], answer: 2 },
    { q: "Fill in: 'I used to ___ football every weekend.'", options: ["play", "playing", "played", "plays"], answer: 0 },
    { q: "The news ___ shocking to everyone.", options: ["was", "were", "are", "have been"], answer: 0 },
    { q: "She apologized ___ breaking the vase.", options: ["for", "about", "to", "of"], answer: 0 },
    { q: "Unless you study, you ___ pass the test.", options: ["won't", "will", "don't", "would"], answer: 0 },
    { q: "Which modal verb expresses past regret? 'I ___ have studied more.'", options: ["should", "must", "can", "will"], answer: 0 },
    { q: "I found a key while I ___ in the park.", options: ["walked", "was walking", "had walked", "am walking"], answer: 1 },
    { q: "The museum is famous ___ its collection of modern art.", options: ["for", "about", "with", "by"], answer: 0 },
    { q: "He told me he ___ finish the report by Friday.", options: ["will", "would", "can", "shall"], answer: 1 },
    { q: "Phrasal verb: 'We need to look ___ a new apartment.'", options: ["for", "after", "into", "at"], answer: 0 },
    { q: "I wish I ___ more time to read.", options: ["have", "had", "would have", "have had"], answer: 1 },
    { q: "She isn't used to ___ up so early.", options: ["get", "getting", "got", "gets"], answer: 1 },
    { q: "Either you come with us ___ you stay here.", options: ["or", "nor", "and", "but"], answer: 0 },
    { q: "The homework must be ___ by tomorrow morning.", options: ["finish", "finishing", "finished", "to finish"], answer: 2 },
    { q: "Who was that letter written ___?", options: ["by", "with", "from", "for"], answer: 0 },
    { q: "I'd rather ___ at home tonight.", options: ["stay", "to stay", "staying", "stayed"], answer: 0 },
    { q: "Phrasal verb: 'I ran ___ an old friend yesterday.'", options: ["into", "over", "out", "after"], answer: 0 },
    { q: "He didn't pass the exam despite ___ hard.", options: ["study", "studying", "he studied", "to study"], answer: 1 },
    { q: "She turned down the job offer. 'Turn down' means:", options: ["Reject", "Accept", "Delay", "Lower"], answer: 0 },
    { q: "Fill in: 'They made us ___ for two hours.'", options: ["wait", "to wait", "waiting", "waited"], answer: 0 },
    { q: "You don't need to bring food; it is completely ___.", options: ["unnecessary", "necessary", "compulsory", "obligation"], answer: 0 },
    { q: "This time next week, I ___ on a beach in Hawaii.", options: ["will lie", "will be lying", "lie", "am lying"], answer: 1 }
  ],
  B2: [
    { q: "Had I known about the traffic, I ___ earlier.", options: ["would leave", "would have left", "will leave", "had left"], answer: 1 },
    { q: "She insisted that he ___ present at the meeting.", options: ["is", "be", "was", "were"], answer: 1 },
    { q: "Not only ___ late, but he also forgot his passport.", options: ["he arrived", "did he arrive", "he did arrive", "arrived he"], answer: 1 },
    { q: "The manager put ___ the meeting until next week.", options: ["off", "out", "away", "down"], answer: 0 },
    { q: "He is believed ___ the country yesterday.", options: ["to leave", "to have left", "leaving", "having left"], answer: 1 },
    { q: "Seldom ___ such a breathtaking performance.", options: ["have I seen", "I have seen", "saw I", "I saw"], answer: 0 },
    { q: "I would rather you ___ touch those documents.", options: ["don't", "didn't", "not", "won't"], answer: 1 },
    { q: "The project was completed ahead of schedule owing ___ team dedication.", options: ["to", "of", "for", "with"], answer: 0 },
    { q: "He speaks as if he ___ an expert in quantum physics.", options: ["is", "were", "has been", "would be"], answer: 1 },
    { q: "She came up ___ a brilliant solution to the problem.", options: ["with", "to", "against", "for"], answer: 0 },
    { q: "By the end of this decade, scientists ___ a cure for the disease.", options: ["will discover", "will have discovered", "discover", "are discovering"], answer: 1 },
    { q: "Little ___ how much his life was about to change.", options: ["he knew", "did he know", "knew he", "he did know"], answer: 1 },
    { q: "I regret ___ you that your application was unsuccessful.", options: ["informing", "to inform", "inform", "informed"], answer: 1 },
    { q: "He eventually managed to ___ over his fear of public speaking.", options: ["get", "take", "run", "turn"], answer: 0 },
    { q: "Supposing you lost your job, what ___ you do?", options: ["will", "would", "can", "may"], answer: 1 },
    { q: "It's high time you ___ taking your studies seriously.", options: ["start", "started", "have started", "will start"], answer: 1 },
    { q: "The contract is subject ___ approval by the board.", options: ["to", "for", "with", "of"], answer: 0 },
    { q: "No sooner had he entered the room ___ the lights went out.", options: ["when", "than", "then", "that"], answer: 1 },
    { q: "She accused him ___ leaking confidential information.", options: ["for", "of", "with", "about"], answer: 1 },
    { q: "The company was forced to cut ___ on expenses.", options: ["back", "off", "out", "downward"], answer: 0 },
    { q: "Were it not for your help, I ___ in severe trouble.", options: ["will be", "would be", "am", "have been"], answer: 1 },
    { q: "He has a reputation ___ being meticulous and punctual.", options: ["for", "of", "about", "in"], answer: 0 },
    { q: "I can't get used to ___ on the left side of the road.", options: ["drive", "driving", "drove", "driven"], answer: 1 },
    { q: "The deal fell ___ due to disagreements over pricing.", options: ["through", "out", "off", "down"], answer: 0 },
    { q: "She had her laptop ___ yesterday after it crashed.", options: ["repair", "repaired", "repairing", "to repair"], answer: 1 },
    { q: "Hardly had the announcement been made ___ chaos broke out.", options: ["than", "when", "then", "after"], answer: 1 },
    { q: "He turned ___ to be an undercover detective.", options: ["out", "up", "in", "over"], answer: 0 },
    { q: "I'd appreciate it if you ___ keep this matter private.", options: ["would", "will", "can", "should"], answer: 0 },
    { q: "The candidate was disqualified on the ___ of plagiarism.", options: ["grounds", "reasons", "causes", "motive"], answer: 0 },
    { q: "She stands a good chance ___ winning the scholarship.", options: ["of", "to", "for", "in"], answer: 0 },
    { q: "In spite of ___ a small budget, they produced a masterpiece.", options: ["have", "having", "they had", "had"], answer: 1 },
    { q: "He was caught off ___ by the sudden question.", options: ["guard", "mind", "hand", "balance"], answer: 0 },
    { q: "You should take an umbrella in case it ___.", options: ["rains", "will rain", "rained", "would rain"], answer: 0 },
    { q: "The government pledged to bring ___ reform in education.", options: ["about", "up", "out", "on"], answer: 0 },
    { q: "I would rather you ___ not smoke in here.", options: ["did", "do", "would", "had"], answer: 0 },
    { q: "She is capable ___ handling complex data analysis.", options: ["of", "to", "for", "with"], answer: 0 },
    { q: "The noise was so loud that it was hard to ___ out what he said.", options: ["make", "take", "find", "get"], answer: 0 },
    { q: "Whatever happens, we must carry ___ with our plan.", options: ["on", "out", "over", "through"], answer: 0 },
    { q: "The crime rate has dropped significantly, ___ is good news.", options: ["which", "that", "what", "where"], answer: 0 },
    { q: "It goes without ___ that practice makes perfect.", options: ["saying", "speaking", "telling", "mentioning"], answer: 0 },
    { q: "He made ___ a story to explain his absence.", options: ["up", "out", "off", "over"], answer: 0 },
    { q: "Provided that you ___ hard, you will succeed.", options: ["work", "will work", "worked", "would work"], answer: 0 },
    { q: "I caught a glimpse ___ the celebrity before she left.", options: ["of", "at", "on", "to"], answer: 0 },
    { q: "He was praised for his outstanding ___ to the community.", options: ["contribution", "attribute", "distribution", "retribution"], answer: 0 },
    { q: "You must comply ___ safety regulations at all times.", options: ["with", "to", "by", "for"], answer: 0 },
    { q: "The lecture was so dense that I struggled to ___ it all in.", options: ["take", "get", "bring", "put"], answer: 0 },
    { q: "He took ___ running to improve his stamina.", options: ["up", "on", "in", "over"], answer: 0 },
    { q: "She apologized for taking up so ___ of your time.", options: ["much", "many", "few", "lot"], answer: 0 },
    { q: "He is on the verge ___ resigning from his post.", options: ["of", "to", "for", "about"], answer: 0 },
    { q: "Under no circumstances ___ leave the building unattended.", options: ["should you", "you should", "you must", "must you to"], answer: 0 }
  ],
  C1: [
    { q: "So engrossed ___ his work was he that he lost track of time.", options: ["in", "with", "at", "on"], answer: 0 },
    { q: "Not until the late evening ___ the final results disclosed.", options: ["were", "did", "was", "had"], answer: 0 },
    { q: "The CEO's speech served to ___ concerns regarding layoffs.", options: ["allay", "ally", "alloy", "allege"], answer: 0 },
    { q: "Be that as it ___, we must adhere to the deadline.", options: ["may", "can", "would", "is"], answer: 0 },
    { q: "He has an uncanny knack ___ identifying market trends early.", options: ["for", "of", "to", "in"], answer: 0 },
    { q: "Had it not been for his prompt action, the damage ___ catastrophic.", options: ["would have been", "was", "had been", "will be"], answer: 0 },
    { q: "The proposal was rejected out of ___ by the committee.", options: ["hand", "mind", "turn", "order"], answer: 0 },
    { q: "She was completely taken ___ by his sudden outburst.", options: ["aback", "away", "off", "over"], answer: 0 },
    { q: "The new legislation is aimed at curbing ___ financial practices.", options: ["scrupulous", "nefarious", "benevolent", "judicious"], answer: 1 },
    { q: "Much ___ I admire his talents, I cannot overlook his arrogance.", options: ["as", "how", "like", "than"], answer: 0 },
    { q: "The company's expansion plans were put on the back ___.", options: ["burner", "shelf", "seat", "track"], answer: 0 },
    { q: "The witness gave a ___ account of the events.", options: ["meticulous", "meticulously", "meticulousness", "meticulosity"], answer: 0 },
    { q: "He is notoriously reluctant to delegation, preferring to keep a tight ___.", options: ["rein", "grip", "hold", "leash"], answer: 0 },
    { q: "On no account ___ confidential data be shared externally.", options: ["must", "should", "may", "can"], answer: 0 },
    { q: "The negotiator managed to strike a ___ balance between both demands.", options: ["delicate", "fragile", "thin", "narrow"], answer: 0 },
    { q: "His argument, while persuasive on the surface, is fundamentally ___.", options: ["flawed", "flawless", "unblemished", "impeccable"], answer: 0 },
    { q: "She has been working around the ___ to meet the deadline.", options: ["clock", "time", "hour", "watch"], answer: 0 },
    { q: "The research findings are contingent ___ further testing.", options: ["upon", "with", "in", "about"], answer: 0 },
    { q: "It is imperative that every employee ___ the security guidelines.", options: ["follow", "follows", "followed", "following"], answer: 0 },
    { q: "He plays fast and ___ with company rules.", options: ["loose", "free", "easy", "wild"], answer: 0 },
    { q: "The economic downturn precipitated a sharp decline in housing. 'Precipitated' means:", options: ["Triggered", "Delayed", "Prevented", "Softened"], answer: 0 },
    { q: "Scarcely ___ the stage when the crowd erupted into applause.", options: ["had she stepped onto", "she had stepped onto", "did she step onto", "she stepped onto"], answer: 0 },
    { q: "His explanation was so convoluted that it served only to ___ the issue.", options: ["obfuscate", "illuminate", "clarify", "explicate"], answer: 0 },
    { q: "The terms of the contract are non-negotiable; you must take it or ___ it.", options: ["leave", "refuse", "reject", "drop"], answer: 0 },
    { q: "She has an inherent propensity ___ overthinking simple decisions.", options: ["for", "to", "towards", "with"], answer: 0 },
    { q: "The project collapsed under the weight of its own administrative ___.", options: ["inertia", "velocity", "efficiency", "vigor"], answer: 0 },
    { q: "He was exonerated ___ all charges after new evidence emerged.", options: ["from", "of", "with", "against"], answer: 0 },
    { q: "In the light of recent revelations, his position has become ___.", options: ["untenable", "impregnable", "indisputable", "plausible"], answer: 0 },
    { q: "She glossed ___ the details during her presentation.", options: ["over", "through", "under", "away"], answer: 0 },
    { q: "The agreement was reached after marathon negotiations. 'Marathon' implies:", options: ["Extremely long", "Fast-paced", "Athletic", "Brief"], answer: 0 },
    { q: "Try as he ___, he could not solve the riddle.", options: ["might", "would", "could", "should"], answer: 0 },
    { q: "His remarks were met with widespread ___ from the public.", options: ["condemnation", "commendation", "solicitation", "applause"], answer: 0 },
    { q: "The company was accused of turning a blind ___ to environmental violations.", options: ["eye", "ear", "mind", "face"], answer: 0 },
    { q: "Far ___ it from me to criticize your choices, but consider the risks.", options: ["be", "is", "were", "been"], answer: 0 },
    { q: "The team worked in tandem with international consultants. 'In tandem' means:", options: ["Together", "In opposition", "Alternately", "Separately"], answer: 0 },
    { q: "He bears a striking ___ to his grandfather.", options: ["resemblance", "similarity", "likeness", "affinity"], answer: 0 },
    { q: "The decision was taken in the interest of public ___.", options: ["welfare", "wealth", "fare", "wellbeingness"], answer: 0 },
    { q: "The evidence presented in court was wholly ___ to the case.", options: ["irrelevant", "unrelevant", "disrelevant", "nonrelevant"], answer: 0 },
    { q: "She managed to weather the ___ and emerge stronger.", options: ["storm", "rain", "flood", "wind"], answer: 0 },
    { q: "The policy change is designed to foster a culture of ___.", options: ["innovation", "involution", "instigation", "indentation"], answer: 0 },
    { q: "He was caught red-___ stealing confidential files.", options: ["handed", "faced", "footed", "fingered"], answer: 0 },
    { q: "The government tried to dampen expectations. 'Dampen' means:", options: ["Reduce", "Increase", "Eliminate", "Ignore"], answer: 0 },
    { q: "Were the manager to resign, who ___ take her place?", options: ["would", "will", "can", "shall"], answer: 0 },
    { q: "The artist's work seamlessly bridges the gap ___ traditional and modern art.", options: ["between", "among", "with", "from"], answer: 0 },
    { q: "Her remarks laid ___ the deep divisions within the committee.", options: ["bare", "open", "out", "flat"], answer: 0 },
    { q: "He operates on the assumption that everyone has a price. 'Assumption' means:", options: ["Presumption/Belief", "Certainty", "Fact", "Proof"], answer: 0 },
    { q: "The initiative paid ___ after months of hard work.", options: ["off", "out", "back", "down"], answer: 0 },
    { q: "She handled the delicate diplomatic situation with utmost ___.", options: ["tact", "tactics", "tactility", "tacticness"], answer: 0 },
    { q: "The contract contains several ambiguous clauses. 'Ambiguous' means:", options: ["Unclear/Vague", "Strict", "Illegal", "Binding"], answer: 0 },
    { q: "No matter how stringent the security measures ___, breaches can still occur.", options: ["are", "be", "were", "will be"], answer: 0 }
  ]
};

// 3. ESTADO DEL JUEGO
let selectedLevel = 'ALL';
let currentBlueIndex = 0;
let currentRedIndex = 0;
let scoreBlue = 0;
let scoreRed = 0;
let activeBluePool = [];
let activeRedPool = [];

let ropeOffset = 0;
let targetRopeOffset = 0;
let animationFrame = 0;
let gameTimer = 120;
let timerInterval = null;

// CANVAS SETUP
const canvas = document.getElementById('tugCanvas');
const ctx = canvas ? canvas.getContext('2d') : null;

// REPRODUCTOR DE MÚSICA CON ARCHIVO EXTERNO
const bgMusic = new Audio('music.mp3');
bgMusic.loop = true;
bgMusic.volume = 0.7;

// EFECTOS SINTETIZADOS PARA RESPUESTAS
const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
function playSynthNote(freq, type, duration, vol) {
  try {
    if (audioCtx.state === 'suspended') {
      audioCtx.resume();
    }
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.type = type;
    osc.frequency.setValueAtTime(freq, audioCtx.currentTime);
    gain.gain.setValueAtTime(vol, audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + duration);
    osc.connect(gain);
    gain.connect(audioCtx.destination);
    osc.start();
    osc.stop(audioCtx.currentTime + duration);
  } catch (e) {
    console.warn("Error en el contexto de audio:", e);
  }
}

function toggleAudio() {
  const btn = document.getElementById('musicToggleBtn');
  if (bgMusic.paused) {
    bgMusic.play().then(() => {
      btn.innerText = "🎵 Música: ON";
      btn.style.background = "#10b981";
    }).catch(err => {
      console.warn("Autoplay bloqueado hasta interactuar:", err);
    });
  } else {
    bgMusic.pause();
    btn.innerText = "🎵 Música: OFF";
    btn.style.background = "#475569";
  }
}

// NAVEGACIÓN Y SELECCIÓN DE NIVEL
function selectLevel(lvl, btnElement) {
  selectedLevel = lvl;
  document.querySelectorAll('.level-btn').forEach(b => b.classList.remove('active'));
  btnElement.classList.add('active');
}

function showHomeScreen() {
  clearInterval(timerInterval);
  const homeScreen = document.getElementById('home-screen');
  const gameScreen = document.getElementById('game-screen');
  const winnerModal = document.getElementById('winner-modal');

  homeScreen.classList.add('active');
  homeScreen.classList.remove('hidden');
  
  gameScreen.classList.remove('active');
  gameScreen.classList.add('hidden');
  
  winnerModal.classList.add('hidden');
}

function startGame() {
  const homeScreen = document.getElementById('home-screen');
  const gameScreen = document.getElementById('game-screen');
  const winnerModal = document.getElementById('winner-modal');

  homeScreen.classList.remove('active');
  homeScreen.classList.add('hidden');

  gameScreen.classList.add('active');
  gameScreen.classList.remove('hidden');

  winnerModal.classList.add('hidden');

  document.getElementById('level-indicator').innerText = `Nivel: ${selectedLevel}`;

  if (selectedLevel === 'ALL') {
    const allQuestions = [
      ...questionBank.A1,
      ...questionBank.A2,
      ...questionBank.B1,
      ...questionBank.B2,
      ...questionBank.C1
    ];
    activeBluePool = [...allQuestions].sort(() => Math.random() - 0.5);
    activeRedPool = [...allQuestions].sort(() => Math.random() - 0.5);
  } else {
    activeBluePool = [...questionBank[selectedLevel]].sort(() => Math.random() - 0.5);
    activeRedPool = [...questionBank[selectedLevel]].sort(() => Math.random() - 0.5);
  }

  currentBlueIndex = 0;
  currentRedIndex = 0;
  scoreBlue = 0;
  scoreRed = 0;
  ropeOffset = 0;
  targetRopeOffset = 0;

  updateScoresUI();
  loadQuestion('blue');
  loadQuestion('red');

  gameTimer = 120;
  clearInterval(timerInterval);
  timerInterval = setInterval(() => {
    gameTimer--;
    const m = String(Math.floor(gameTimer / 60)).padStart(2, '0');
    const s = String(gameTimer % 60).padStart(2, '0');
    document.getElementById('timer').innerText = `${m}:${s}`;

    if (gameTimer <= 0) {
      endGame();
    }
  }, 1000);
}

function updateScoresUI() {
  document.getElementById('score-blue').innerText = scoreBlue;
  document.getElementById('score-red').innerText = scoreRed;
  document.getElementById('summary-blue').innerText = scoreBlue;
  document.getElementById('summary-red').innerText = scoreRed;
}

// CARGA DE PREGUNTAS
function loadQuestion(team) {
  const isBlue = team === 'blue';
  const pool = isBlue ? activeBluePool : activeRedPool;
  const index = isBlue ? currentBlueIndex : currentRedIndex;

  if (index >= pool.length) {
    if (isBlue) currentBlueIndex = 0; else currentRedIndex = 0;
  }

  const qData = pool[isBlue ? currentBlueIndex : currentRedIndex];
  const prefix = isBlue ? 'blue' : 'red';
  
  document.getElementById(`${prefix}-q-text`).innerText = qData.q;
  document.getElementById(`${prefix}-q-count`).innerText = `Pregunta ${(isBlue ? currentBlueIndex : currentRedIndex) + 1}`;

  const optionsContainer = document.getElementById(`options-${prefix}`);
  optionsContainer.innerHTML = '';

  qData.options.forEach((optText, optIdx) => {
    const btn = document.createElement('button');
    btn.className = 'opt-btn';
    btn.innerText = `${String.fromCharCode(65 + optIdx)}. ${optText}`;
    btn.onclick = () => handleAnswer(team, optIdx, qData.answer, btn);
    optionsContainer.appendChild(btn);
  });
}

function handleAnswer(team, selectedIdx, correctIdx, btn) {
  const isCorrect = selectedIdx === correctIdx;
  const isBlue = team === 'blue';
  const prefix = isBlue ? 'blue' : 'red';

  const buttons = document.querySelectorAll(`#options-${prefix} .opt-btn`);
  buttons.forEach(b => b.style.pointerEvents = 'none');

  if (isCorrect) {
    btn.classList.add('correct');
    playSynthNote(587.33, 'sine', 0.3, 0.2);

    if (isBlue) {
      scoreBlue++;
      targetRopeOffset -= 35;
      document.getElementById('feedback-banner').innerText = "¡Blue Knights tiró con fuerza! 💪";
    } else {
      scoreRed++;
      targetRopeOffset += 35;
      document.getElementById('feedback-banner').innerText = "¡Red Dragons tiró con fuerza! 🔥";
    }

    updateScoresUI();

    setTimeout(() => {
      if (isBlue) currentBlueIndex++; else currentRedIndex++;
      loadQuestion(team);
    }, 800);

  } else {
    btn.classList.add('incorrect');
    playSynthNote(180, 'sawtooth', 0.25, 0.15);
    document.getElementById('feedback-banner').innerText = "¡Respuesta incorrecta! Intenta la siguiente...";

    setTimeout(() => {
      if (isBlue) currentBlueIndex++; else currentRedIndex++;
      loadQuestion(team);
    }, 1000);
  }
}

// 4. RENDERIZADO DEL ESCENARIO
function drawBackground() {
  // Cielo en degradado
  const skyGrad = ctx.createLinearGradient(0, 0, 0, 160);
  skyGrad.addColorStop(0, '#0f172a');
  skyGrad.addColorStop(1, '#1e293b');
  ctx.fillStyle = skyGrad;
  ctx.fillRect(0, 0, canvas.width, 160);

  // Luces de estadio
  ctx.fillStyle = 'rgba(56, 189, 248, 0.08)';
  ctx.beginPath();
  ctx.arc(canvas.width * 0.15, 0, 140, 0, Math.PI * 2);
  ctx.arc(canvas.width * 0.85, 0, 140, 0, Math.PI * 2);
  ctx.fill();

  // Graderías de espectadores (Siluetas)
  ctx.fillStyle = '#0f172a';
  ctx.fillRect(0, 130, canvas.width, 35);
  ctx.fillStyle = '#334155';
  for (let i = 15; i < canvas.width; i += 22) {
    ctx.beginPath();
    ctx.arc(i, 145, 5, 0, Math.PI * 2);
    ctx.fill();
  }

  // Borde de la pista
  ctx.fillStyle = '#475569';
  ctx.fillRect(0, 165, canvas.width, 8);

  // Césped deportivo con textura
  const grassGrad = ctx.createLinearGradient(0, 173, 0, canvas.height);
  grassGrad.addColorStop(0, '#15803d');
  grassGrad.addColorStop(1, '#166534');
  ctx.fillStyle = grassGrad;
  ctx.fillRect(0, 173, canvas.width, canvas.height - 173);

  // Línea central de la cancha
  ctx.strokeStyle = 'rgba(255, 255, 255, 0.4)';
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.moveTo(0, 245);
  ctx.lineTo(canvas.width, 245);
  ctx.stroke();

  // Zona central de peligro (roja)
  ctx.fillStyle = 'rgba(239, 68, 68, 0.25)';
  ctx.fillRect(canvas.width / 2 - 30, 173, 60, canvas.height - 173);
  ctx.strokeStyle = '#ef4444';
  ctx.lineWidth = 2;
  ctx.strokeRect(canvas.width / 2 - 30, 173, 60, canvas.height - 173);
}

// DIBUJO DE LA CUERDA Y PAÑUELO FLAMEANTE
function drawRopeAndFlag(centerX) {
  const ropeY = 202;

  // Sombra de la cuerda
  ctx.strokeStyle = 'rgba(0, 0, 0, 0.25)';
  ctx.lineWidth = 8;
  ctx.beginPath();
  ctx.moveTo(centerX - 320, 245);
  ctx.lineTo(centerX + 320, 245);
  ctx.stroke();

  // Cuerda principal (Cuerpo trenzado)
  ctx.strokeStyle = '#854d0e';
  ctx.lineWidth = 12;
  ctx.lineCap = 'round';
  ctx.beginPath();
  ctx.moveTo(centerX - 320, ropeY);
  ctx.lineTo(centerX + 320, ropeY);
  ctx.stroke();

  // Detalle de trenzado de soga
  ctx.strokeStyle = '#eab308';
  ctx.lineWidth = 3;
  ctx.setLineDash([8, 6]);
  ctx.beginPath();
  ctx.moveTo(centerX - 320, ropeY - 2);
  ctx.lineTo(centerX + 320, ropeY - 2);
  ctx.stroke();
  ctx.setLineDash([]);

  // Banderín / Pañuelo central
  const wind = Math.sin(animationFrame * 0.18) * 6;
  ctx.fillStyle = '#dc2626';
  ctx.beginPath();
  ctx.arc(centerX, ropeY, 7, 0, Math.PI * 2);
  ctx.fill();

  ctx.beginPath();
  ctx.moveTo(centerX, ropeY);
  ctx.quadraticCurveTo(centerX + wind, ropeY + 20, centerX + 10 + wind, ropeY + 38);
  ctx.lineTo(centerX - 4 + wind, ropeY + 38);
  ctx.quadraticCurveTo(centerX - 4 + wind, ropeY + 20, centerX, ropeY);
  ctx.fill();
}

// 5. DIBUJO DE EQUIPOS CON IMÁGENES PNG
function drawTeamPNG(img, offsets, centerX, isBlue) {
  if (!ctx || !img.complete) return;

  const groundY = 245; // Base de los pies sobre el césped
  const pullCycle = Math.sin(animationFrame * 0.14 + (isBlue ? 0 : Math.PI));
  const animX = pullCycle * 6; // Balanceo de movimiento al halar

  offsets.forEach(xOffset => {
    const posX = centerX + xOffset + animX;

    ctx.save();
    // Dibujar sombra ovalada en el suelo
    ctx.fillStyle = 'rgba(0, 0, 0, 0.3)';
    ctx.beginPath();
    ctx.ellipse(posX, groundY - 2, 25, 7, 0, 0, Math.PI * 2);
    ctx.fill();

    ctx.translate(posX, groundY);

    const width = 120;
    const height = 120;

    // Dibujar imagen centrada horizontalmente y apoyada en el suelo
    ctx.drawImage(img, -width / 2, -height, width, height);
    ctx.restore();
  });
}

// BUCLE PRINCIPAL DE ANIMACIÓN
function animateStage() {
  if (!ctx) return;
  animationFrame++;
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  ropeOffset += (targetRopeOffset - ropeOffset) * 0.08;
  const centerX = canvas.width / 2 + ropeOffset;

  drawBackground();
  drawRopeAndFlag(centerX);

  // Posiciones dinámicas de cada integrante respecto al centro
  const blueOffsets = [-230, -150, -70];
  const redOffsets = [70, 150, 230];

  drawTeamPNG(imgAzul, blueOffsets, centerX, true);
  drawTeamPNG(imgRojo, redOffsets, centerX, false);

  requestAnimationFrame(animateStage);
}

function endGame() {
  clearInterval(timerInterval);
  const modal = document.getElementById('winner-modal');
  const title = document.getElementById('winner-title');
  const details = document.getElementById('winner-details');

  modal.classList.remove('hidden');

  if (scoreBlue > scoreRed) {
    title.innerText = "🏆 ¡VICTORIA DE BLUE KNIGHTS!";
    title.style.color = "#60a5fa";
  } else if (scoreRed > scoreBlue) {
    title.innerText = "🏆 ¡VICTORIA DE RED DRAGONS!";
    title.style.color = "#f87171";
  } else {
    title.innerText = "🤝 ¡EMPATE EXTRAORDINARIO!";
    title.style.color = "#f59e0b";
  }

  details.innerText = `Puntaje Final: Blue Knights ${scoreBlue} - ${scoreRed} Red Dragons`;
}

if (ctx) {
  animateStage();
}