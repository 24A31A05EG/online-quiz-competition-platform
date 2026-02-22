// questions.js
const questions = [
  {
    category: "General Knowledge",
    question: "What is the capital of India?",
    options: ["Mumbai", "New Delhi", "Kolkata", "Chennai"],
    answer: 1,
    description: "New Delhi is the capital city of India."
  },
  {
    category: "General Knowledge",
    question: "Which is the largest continent in the world?",
    options: ["Africa", "Asia", "Europe", "Australia"],
    answer: 1,
    description: "Asia is the largest continent by both area and population."
  },
  {
    category: "General Knowledge",
    question: "Which is the longest river in the world?",
    options: ["Amazon", "Nile", "Yangtze", "Ganga"],
    answer: 1,
    description: "The Nile River in Africa is traditionally considered the longest river in the world."
  },
  {
    category: "General Knowledge",
    question: "Which planet is known as the Red Planet?",
    options: ["Earth", "Mars", "Jupiter", "Venus"],
    answer: 1,
    description: "Mars is called the Red Planet because of its reddish appearance due to iron oxide on its surface."
  },
  {
    category: "General Knowledge",
    question: "Who is known as the Father of the Nation in India?",
    options: ["Jawaharlal Nehru", "Mahatma Gandhi", "Subhas Chandra Bose", "B. R. Ambedkar"],
    answer: 1,
    description: "Mahatma Gandhi is regarded as the Father of the Nation in India for his role in the independence movement."
  },
  {
    category: "General Knowledge",
    question: "Which gas is most abundant in Earth’s atmosphere?",
    options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"],
    answer: 1,
    description: "Nitrogen makes up about 78% of Earth's atmosphere."
  },
  {
    category: "General Knowledge",
    question: "Which is the smallest prime number?",
    options: ["0", "1", "2", "3"],
    answer: 2,
    description: "2 is the smallest and the only even prime number."
  },
  {
    category: "General Knowledge",
    question: "How many days are there in a leap year?",
    options: ["365", "366", "364", "367"],
    answer: 1,
    description: "A leap year has 366 days, with February having 29 days."
  },
  {
    category: "General Knowledge",
    question: "Which is the largest ocean in the world?",
    options: ["Indian Ocean", "Atlantic Ocean", "Pacific Ocean", "Arctic Ocean"],
    answer: 2,
    description: "The Pacific Ocean is the largest ocean, covering more than 30% of Earth's surface."
  },
  {
    category: "General Knowledge",
    question: "What is the national animal of India?",
    options: ["Lion", "Tiger", "Elephant", "Leopard"],
    answer: 1,
    description: "The Bengal Tiger is the national animal of India."
  },
  {
    category: "General Knowledge",
    question: "Which country is known as the Land of the Rising Sun?",
    options: ["China", "Japan", "Korea", "Thailand"],
    answer: 1,
    description: "Japan is called the Land of the Rising Sun."
  },
  {
    category: "General Knowledge",
    question: "Which organ pumps blood in the human body?",
    options: ["Brain", "Lungs", "Heart", "Liver"],
    answer: 2,
    description: "The heart pumps blood throughout the human body."
  },
  {
    category: "General Knowledge",
    question: "How many players are there in a cricket team?",
    options: ["9", "10", "11", "12"],
    answer: 2,
    description: "A cricket team consists of 11 players."
  },
  {
    category: "General Knowledge",
    question: "Which metal is liquid at room temperature?",
    options: ["Iron", "Mercury", "Gold", "Copper"],
    answer: 1,
    description: "Mercury is the only metal that is liquid at room temperature."
  },
  {
    category: "General Knowledge",
    question: "Which festival is known as the Festival of Lights?",
    options: ["Holi", "Diwali", "Pongal", "Eid"],
    answer: 1,
    description: "Diwali is celebrated as the Festival of Lights in India."
  },
  {
    category: "General Knowledge",
    question: "Which is the tallest mountain in the world?",
    options: ["K2", "Kangchenjunga", "Mount Everest", "Annapurna"],
    answer: 2,
    description: "Mount Everest is the tallest mountain in the world."
  },
  {
    category: "General Knowledge",
    question: "What is the national flower of India?",
    options: ["Rose", "Lotus", "Sunflower", "Lily"],
    answer: 1,
    description: "The Lotus is the national flower of India."
  },
  {
    category: "General Knowledge",
    question: "Which vitamin is produced when skin is exposed to sunlight?",
    options: ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin D"],
    answer: 3,
    description: "Vitamin D is produced when skin is exposed to sunlight."
  },
  {
    category: "General Knowledge",
    question: "Which instrument is used to measure temperature?",
    options: ["Barometer", "Thermometer", "Hygrometer", "Anemometer"],
    answer: 1,
    description: "A thermometer is used to measure temperature."
  },
  {
    category: "General Knowledge",
    question: "Which is the largest mammal in the world?",
    options: ["Elephant", "Blue Whale", "Giraffe", "Hippopotamus"],
    answer: 1,
    description: "The Blue Whale is the largest mammal in the world."
  },
  {
    category: "General Knowledge",
    question: "Which shape has four equal sides?",
    options: ["Rectangle", "Triangle", "Square", "Circle"],
    answer: 2,
    description: "A square has four equal sides."
  },
  {
    category: "General Knowledge",
    question: "What is the boiling point of water at sea level?",
    options: ["90°C", "100°C", "110°C", "120°C"],
    answer: 1,
    description: "Water boils at 100°C at sea level."
  },
  {
    category: "General Knowledge",
    question: "Which country gifted the Statue of Liberty to the USA?",
    options: ["Germany", "France", "Canada", "England"],
    answer: 1,
    description: "France gifted the Statue of Liberty to the USA."
  },
  {
    category: "General Knowledge",
    question: "Which bird is known for its colorful feathers and dancing?",
    options: ["Peacock", "Sparrow", "Crow", "Eagle"],
    answer: 0,
    description: "The peacock is known for its colorful feathers and courtship dance."
  },
  {
    category: "General Knowledge",
    question: "Which is the hardest natural substance?",
    options: ["Gold", "Iron", "Diamond", "Silver"],
    answer: 2,
    description: "Diamond is the hardest natural substance."
  },
  {
    category: "General Knowledge",
    question: "How many bones are there in an adult human body?",
    options: ["200", "206", "210", "215"],
    answer: 1,
    description: "An adult human body has 206 bones."
  },
  {
    category: "General Knowledge",
    question: "Which is the fastest land animal?",
    options: ["Lion", "Tiger", "Leopard", "Cheetah"],
    answer: 3,
    description: "The cheetah is the fastest land animal."
  },
  {
    category: "General Knowledge",
    question: "Which country has the largest population in the world?",
    options: ["India", "USA", "China", "Russia"],
    answer: 2,
    description: "China has the largest population in the world."
  },
  {
    category: "General Knowledge",
    question: "Which language has the most native speakers in the world?",
    options: ["English", "Spanish", "Hindi", "Mandarin Chinese"],
    answer: 3,
    description: "Mandarin Chinese has the most native speakers in the world."
  },
  {
    category: "General Knowledge",
    question: "Which part of the plant makes food?",
    options: ["Root", "Stem", "Leaf", "Flower"],
    answer: 2,
    description: "Leaves make food for the plant through photosynthesis."
  },
  {
    category: "General Knowledge",
    question: "Which planet is closest to the Sun?",
    options: ["Earth", "Venus", "Mercury", "Mars"],
    answer: 2,
    description: "Mercury is the closest planet to the Sun."
  },
 {
    category: "General Knowledge",
    question: "Which is the national bird of India?",
    options: ["Eagle", "Peacock", "Sparrow", "Parrot"],
    answer: 1,
    description: "The peacock is the national bird of India."
  },
  {
    category: "General Knowledge",
    question: "Which ocean lies between Africa and Australia?",
    options: ["Pacific Ocean", "Atlantic Ocean", "Indian Ocean", "Arctic Ocean"],
    answer: 2,
    description: "The Indian Ocean lies between Africa and Australia."
  },
  {
    category: "General Knowledge",
    question: "What is the currency of India?",
    options: ["Dollar", "Pound", "Rupee", "Yen"],
    answer: 2,
    description: "The currency of India is the Indian Rupee."
  },
  {
    category: "General Knowledge",
    question: "Which gas is essential for breathing?",
    options: ["Nitrogen", "Oxygen", "Carbon Dioxide", "Hydrogen"],
    answer: 1,
    description: "Oxygen is essential for human and animal respiration."
  },
  {
    category: "General Knowledge",
    question: "Which day is celebrated as World Environment Day?",
    options: ["June 5", "July 5", "May 5", "April 5"],
    answer: 0,
    description: "World Environment Day is celebrated on June 5 every year."
  },
  {
    category: "General Knowledge",
    question: "Which is the largest desert in the world?",
    options: ["Sahara", "Gobi", "Thar", "Antarctic Desert"],
    answer: 3,
    description: "The Antarctic Desert is the largest desert in the world."
  },
  {
    category: "General Knowledge",
    question: "Which planet is known as Earth’s twin?",
    options: ["Mars", "Venus", "Jupiter", "Saturn"],
    answer: 1,
    description: "Venus is often called Earth's twin because of its similar size and composition."
  },
  {
    category: "General Knowledge",
    question: "How many continents are there in the world?",
    options: ["5", "6", "7", "8"],
    answer: 2,
    description: "There are 7 continents in the world."
  },
  {
    category: "General Knowledge",
    question: "Which blood group is known as the universal donor?",
    options: ["A", "B", "AB", "O"],
    answer: 3,
    description: "Blood group O is known as the universal donor."
  },
  {
    category: "General Knowledge",
    question: "Which country is famous for pyramids?",
    options: ["Mexico", "Egypt", "Peru", "India"],
    answer: 1,
    description: "Egypt is famous for its ancient pyramids."
  },
  {
    category: "General Knowledge",
    question: "What is the main source of energy for Earth?",
    options: ["Moon", "Sun", "Wind", "Water"],
    answer: 1,
    description: "The Sun is the primary source of energy for Earth."
  },
  {
    category: "General Knowledge",
    question: "Which is the largest internal organ of the human body?",
    options: ["Heart", "Brain", "Liver", "Lungs"],
    answer: 2,
    description: "The liver is the largest internal organ in the human body."
  },
  {
    category: "General Knowledge",
    question: "Which month has the least number of days?",
    options: ["January", "February", "March", "April"],
    answer: 1,
    description: "February has the least number of days, 28 or 29 in a leap year."
  },
  {
    category: "General Knowledge",
    question: "Which planet has rings around it?",
    options: ["Mars", "Venus", "Saturn", "Mercury"],
    answer: 2,
    description: "Saturn is known for its prominent ring system."
  },
  {
    category: "General Knowledge",
    question: "Which animal is known as the Ship of the Desert?",
    options: ["Horse", "Camel", "Donkey", "Elephant"],
    answer: 1,
    description: "The camel is called the Ship of the Desert."
  },
  {
    category: "General Knowledge",
    question: "What is the freezing point of water?",
    options: ["0°C", "10°C", "32°C", "100°C"],
    answer: 0,
    description: "Water freezes at 0°C at standard atmospheric pressure."
  },
  {
    category: "General Knowledge",
    question: "Which country is known for the Great Wall?",
    options: ["Japan", "China", "Mongolia", "Korea"],
    answer: 1,
    description: "China is known for the Great Wall."
  },
  {
    category: "General Knowledge",
    question: "Which is the largest state in India by area?",
    options: ["Maharashtra", "Rajasthan", "Uttar Pradesh", "Madhya Pradesh"],
    answer: 1,
    description: "Rajasthan is the largest state in India by area."
  },
  {
    category: "General Knowledge",
    question: "Which sense organ helps us to see?",
    options: ["Ear", "Nose", "Eye", "Tongue"],
    answer: 2,
    description: "The eyes are the sense organs that help us to see."
  },
  // 2. Aptitude questions
  {
    category: "Aptitude",
    question: "What is 25% of 200?",
    options: ["25", "40", "50", "75"],
    answer: 2,
    description: "25% of 200 is 50."
  },
  {
    category: "Aptitude",
    question: "If 1 pen costs ₹10, what is the cost of 7 pens?",
    options: ["₹50", "₹60", "₹70", "₹80"],
    answer: 2,
    description: "7 pens at ₹10 each cost ₹70."
  },
  {
    category: "Aptitude",
    question: "What is the average of 10, 20, and 30?",
    options: ["15", "20", "25", "30"],
    answer: 1,
    description: "The average is (10+20+30)/3 = 20."
  },
  {
    category: "Aptitude",
    question: "If a book costs ₹120, what is the cost of 5 books?",
    options: ["₹500", "₹550", "₹600", "₹650"],
    answer: 2,
    description: "5 × ₹120 = ₹600."
  },
  {
    category: "Aptitude",
    question: "What is 15 × 4?",
    options: ["45", "50", "55", "60"],
    answer: 3,
    description: "15 multiplied by 4 equals 60."
  },
  {
    category: "Aptitude",
    question: "A train travels 120 km in 2 hours. What is its speed?",
    options: ["40 km/h", "50 km/h", "60 km/h", "70 km/h"],
    answer: 2,
    description: "Speed = Distance ÷ Time = 120 ÷ 2 = 60 km/h."
  },
  {
    category: "Aptitude",
    question: "What is 10% of 450?",
    options: ["40", "45", "50", "55"],
    answer: 1,
    description: "10% of 450 is 45."
  },
  {
    category: "Aptitude",
    question: "If the perimeter of a square is 40 cm, what is one side?",
    options: ["5 cm", "8 cm", "10 cm", "12 cm"],
    answer: 2,
    description: "Perimeter = 4 × side → side = 40 ÷ 4 = 10 cm."
  },
  {
    category: "Aptitude",
    question: "What is the simple interest on ₹1000 at 10% per year for 1 year?",
    options: ["₹50", "₹100", "₹150", "₹200"],
    answer: 1,
    description: "SI = (P × R × T)/100 = (1000 × 10 × 1)/100 = ₹100."
  },
  {
    category: "Aptitude",
    question: "What is the value of 9²?",
    options: ["18", "27", "72", "81"],
    answer: 3,
    description: "9 squared is 81."
  },
  {
    category: "Aptitude",
    question: "If 6 workers do a job in 10 days, how many days will 3 workers take?",
    options: ["10", "15", "20", "25"],
    answer: 2,
    description: "Work is inversely proportional to workers. 6 workers → 10 days, so 3 workers → 20 days."
  },
  {
    category: "Aptitude",
    question: "What is the ratio of 2 : 4 in simplest form?",
    options: ["1 : 1", "1 : 2", "2 : 1", "2 : 3"],
    answer: 1,
    description: "2 : 4 simplifies to 1 : 2."
  },
  {
    category: "Aptitude",
    question: "What is the sum of first 10 natural numbers?",
    options: ["45", "50", "55", "60"],
    answer: 2,
    description: "Sum = n(n+1)/2 = 10×11/2 = 55."
  },
  {
    category: "Aptitude",
    question: "What is 30% of 300?",
    options: ["60", "70", "80", "90"],
    answer: 3,
    description: "30% of 300 is 90."
  },
  {
    category: "Aptitude",
    question: "If a shirt costs ₹500 and is sold for ₹450, what is the loss?",
    options: ["₹30", "₹40", "₹50", "₹60"],
    answer: 2,
    description: "Loss = Cost Price - Selling Price = 500 - 450 = ₹50."
  },
  {
    category: "Aptitude",
    question: "What is the area of a rectangle with length 10 cm and breadth 5 cm?",
    options: ["25", "40", "50", "60"],
    answer: 2,
    description: "Area = length × breadth = 10 × 5 = 50 cm²."
  },
  {
    category: "Aptitude",
    question: "What is the LCM of 4 and 6?",
    options: ["8", "10", "12", "24"],
    answer: 2,
    description: "LCM of 4 and 6 is 12."
  },
  {
    category: "Aptitude",
    question: "What is the HCF of 12 and 18?",
    options: ["3", "6", "9", "12"],
    answer: 1,
    description: "HCF of 12 and 18 is 6."
  },
  {
    category: "Aptitude",
    question: "If a number is multiplied by 0, what is the result?",
    options: ["0", "1", "Same number", "Undefined"],
    answer: 0,
    description: "Any number multiplied by 0 equals 0."
  },
  {
    category: "Aptitude",
    question: "What is the value of 100 ÷ 5?",
    options: ["10", "15", "20", "25"],
    answer: 2,
    description: "100 ÷ 5 = 20."
  },
  {
    category: "Aptitude",
    question: "If the cost price is ₹200 and selling price is ₹250, what is the profit?",
    options: ["₹30", "₹40", "₹50", "₹60"],
    answer: 2,
    description: "Profit = Selling Price - Cost Price = 250 - 200 = ₹50."
  },
  {
    category: "Aptitude",
    question: "What is ⅓ of 90?",
    options: ["20", "25", "30", "35"],
    answer: 2,
    description: "⅓ of 90 is 30."
  },
  {
    category: "Aptitude",
    question: "If a car travels 60 km in 1 hour, how far will it travel in 3 hours?",
    options: ["120 km", "150 km", "180 km", "200 km"],
    answer: 2,
    description: "Distance = Speed × Time = 60 × 3 = 180 km."
  },
  {
    category: "Aptitude",
    question: "What is the cube of 3?",
    options: ["9", "18", "27", "81"],
    answer: 2,
    description: "3 cubed is 27."
  },
  {
    category: "Aptitude",
    question: "What is 50% of 80?",
    options: ["30", "35", "40", "45"],
    answer: 2,
    description: "50% of 80 is 40."
  },
  {
    category: "Aptitude",
    question: "How many months are there in 2 years?",
    options: ["12", "18", "24", "36"],
    answer: 2,
    description: "2 years = 24 months."
  },
  {
    category: "Aptitude",
    question: "What is the value of 7 × 8?",
    options: ["48", "54", "56", "64"],
    answer: 2,
    description: "7 × 8 = 56."
  },
  {
    category: "Aptitude",
    question: "If a number is increased from 20 to 30, what is the increase percentage?",
    options: ["25%", "40%", "50%", "60%"],
    answer: 2,
    description: "Increase = (30-20)/20 × 100 = 50%."
  },
  {
    category: "Aptitude",
    question: "What is the square root of 144?",
    options: ["10", "11", "12", "13"],
    answer: 2,
    description: "The square root of 144 is 12."
  },
  {
    category: "Aptitude",
    question: "What is the total of angles in a triangle?",
    options: ["90°", "120°", "180°", "360°"],
    answer: 2,
    description: "The sum of angles in a triangle is always 180°."
  },
  {
    category: "Aptitude",
    question: "If 2 pencils cost ₹10, what is the cost of 10 pencils?",
    options: ["₹40", "₹45", "₹50", "₹60"],
    answer: 2,
    description: "10 pencils cost ₹50 (₹10 ÷ 2 × 10)."
  },
  {
    category: "Aptitude",
    question: "What is the value of 5³?",
    options: ["15", "25", "75", "125"],
    answer: 3,
    description: "5 cubed (5 × 5 × 5) equals 125."
  },
  {
    category: "Aptitude",
    question: "What is the perimeter of a rectangle with length 8 cm and breadth 4 cm?",
    options: ["20", "24", "28", "32"],
    answer: 1,
    description: "Perimeter = 2 × (length + breadth) = 2 × (8+4) = 24 cm."
  },
  {
    category: "Aptitude",
    question: "What is 75% of 200?",
    options: ["100", "125", "150", "175"],
    answer: 2,
    description: "75% of 200 is 150."
  },
  {
    category: "Aptitude",
    question: "If a sum becomes double in 10 years at simple interest, what is the rate?",
    options: ["5%", "8%", "10%", "12%"],
    answer: 2,
    description: "At simple interest, doubling in 10 years means rate = 100 ÷ 10 = 10%."
  },
  {
    category: "Aptitude",
    question: "What is the value of 1 + 2 × 3?",
    options: ["7", "9", "6", "5"],
    answer: 0,
    description: "Order of operations: 1 + (2×3) = 1 + 6 = 7."
  },
  {
    category: "Aptitude",
    question: "How many sides does a hexagon have?",
    options: ["5", "6", "7", "8"],
    answer: 1,
    description: "A hexagon has 6 sides."
  },
  {
    category: "Aptitude",
    question: "What is the value of 0²?",
    options: ["0", "1", "Undefined", "Infinity"],
    answer: 0,
    description: "0 squared is 0."
  },
  {
    category: "Aptitude",
    question: "If the ratio of boys to girls is 3 : 2, how many girls are there if boys are 15?",
    options: ["8", "9", "10", "12"],
    answer: 2,
    description: "Ratio 3:2 → if boys = 15, girls = (2/3)×15 = 10."
  },
  {
    category: "Aptitude",
    question: "What is the sum of angles of a square?",
    options: ["180°", "270°", "360°", "540°"],
    answer: 2,
    description: "The sum of angles of a square is 360°."
  },
  {
    category: "Aptitude",
    question: "What is 40% of 500?",
    options: ["150", "180", "200", "220"],
    answer: 2,
    description: "40% of 500 is 200."
  },
  {
    category: "Aptitude",
    question: "What is the value of 6 × (4 + 2)?",
    options: ["24", "30", "36", "48"],
    answer: 2,
    description: "6 × (4+2) = 6 × 6 = 36."
  },
  {
    category: "Aptitude",
    question: "How many minutes are there in 2 hours?",
    options: ["60", "90", "120", "150"],
    answer: 2,
    description: "2 hours = 120 minutes."
  },
  {
    category: "Aptitude",
    question: "What is the next number in the series: 5, 10, 15, ?",
    options: ["18", "20", "25", "30"],
    answer: 1,
    description: "The series increases by 5, so next is 20."
  },
  {
    category: "Aptitude",
    question: "What is the value of 2⁴?",
    options: ["8", "12", "16", "32"],
    answer: 2,
    description: "2 raised to the power of 4 is 16."
  },
  {
    category: "Aptitude",
    question: "If a triangle has all sides equal, it is called?",
    options: ["Isosceles", "Scalene", "Right", "Equilateral"],
    answer: 3,
    description: "A triangle with all sides equal is called Equilateral."
  },
  {
    category: "Aptitude",
    question: "What is the simple interest on ₹500 at 5% per year for 2 years?",
    options: ["₹25", "₹40", "₹50", "₹60"],
    answer: 2,
    description: "SI = (P × R × T)/100 = (500 × 5 × 2)/100 = ₹50."
  },
  {
    category: "Aptitude",
    question: "What is the value of 90 ÷ 9?",
    options: ["9", "10", "11", "12"],
    answer: 1,
    description: "90 ÷ 9 = 10."
  },
  {
    category: "Aptitude",
    question: "How many degrees are there in a right angle?",
    options: ["45°", "60°", "90°", "120°"],
    answer: 2,
    description: "A right angle measures 90°."
  },
  {
    category: "Aptitude",
    question: "If one item costs ₹25, how much do 4 items cost?",
    options: ["₹75", "₹90", "₹100", "₹120"],
    answer: 2,
    description: "4 × ₹25 = ₹100."
  },
  // questions.js (Reasoning / Aptitude section)
  {
    category: "Reasoning",
    question: "What comes next in the series: 2, 6, 12, 20, ?",
    options: ["28", "30", "32", "36"],
    answer: 1,
    description: "The differences are 4, 6, 8; next difference is 10 → 20+10 = 30."
  },
  {
    category: "Reasoning",
    question: "Find the odd one out: Apple, Mango, Banana, Carrot",
    options: ["Apple", "Mango", "Banana", "Carrot"],
    answer: 3,
    description: "Carrot is a vegetable, while the others are fruits."
  },
  {
    category: "Reasoning",
    question: "Bird : Fly :: Fish : ?",
    options: ["Run", "Jump", "Swim", "Crawl"],
    answer: 2,
    description: "Birds fly, fish swim."
  },
  {
    category: "Reasoning",
    question: "If CAT = 3120, then DOG = ?",
    options: ["4157", "7154", "7145", "4175"],
    answer: 1,
    description: "Using alphabetical positions: D=4, O=15, G=7 → 4157."
  },
  {
    category: "Reasoning",
    question: "Ram walks 10 m north, then 5 m east. How far is he from the start?",
    options: ["10 m", "12 m", "15 m", "18 m"],
    answer: 1,
    description: "Distance = √(10² + 5²) = √125 ≈ 11.18 ≈ 12 m."
  },
  {
    category: "Reasoning",
    question: "A is the brother of B. B is the sister of C. How is A related to C?",
    options: ["Brother", "Sister", "Cousin", "Father"],
    answer: 0,
    description: "A is the brother of C."
  },
  {
    category: "Reasoning",
    question: "All cats are animals. Some animals are dogs. Conclusion: Some cats are dogs.",
    options: ["True", "False"],
    answer: 1,
    description: "The conclusion is false; no direct relation between cats and dogs is given."
  },
  {
    category: "Reasoning",
    question: "Which letter is 5th to the right of M?",
    options: ["Q", "R", "S", "T"],
    answer: 1,
    description: "M is the 13th letter; 5th to the right is R (18th)."
  },
  {
    category: "Reasoning",
    question: "5, 10, 20, 40, ?",
    options: ["60", "70", "80", "90"],
    answer: 2,
    description: "Each term doubles; next is 80."
  },
  {
    category: "Reasoning",
    question: "Find the odd one out: Pen, Pencil, Eraser, Book",
    options: ["Pen", "Pencil", "Eraser", "Book"],
    answer: 3,
    description: "Book is different; others are stationery items used for writing/erasing."
  },
  {
    category: "Reasoning",
    question: "Hand : Glove :: Foot : ?",
    options: ["Shoe", "Sock", "Slipper", "Sandal"],
    answer: 0,
    description: "A glove covers a hand; a shoe covers a foot."
  },
  {
    category: "Reasoning",
    question: "If A = 1 and Z = ?",
    options: ["24", "25", "26", "27"],
    answer: 2,
    description: "Z is the 26th letter of the alphabet."
  },
  {
    category: "Reasoning",
    question: "A person walks south and turns right. Which direction is he facing?",
    options: ["East", "West", "North", "South"],
    answer: 1,
    description: "Facing south, a right turn means facing west."
  },
  {
    category: "Reasoning",
    question: "My mother’s father is my",
    options: ["Uncle", "Father", "Grandfather", "Cousin"],
    answer: 2,
    description: "Mother’s father is grandfather."
  },
  {
    category: "Reasoning",
    question: "1, 4, 9, 16, ?",
    options: ["20", "25", "30", "36"],
    answer: 1,
    description: "These are square numbers: 1², 2², 3², 4² → next is 5² = 25."
  },
  {
    category: "Reasoning",
    question: "Square, Rectangle, Triangle, Circle – odd one out",
    options: ["Square", "Rectangle", "Triangle", "Circle"],
    answer: 3,
    description: "Circle is odd; others are polygons."
  },
  {
    category: "Reasoning",
    question: "Fire : Hot :: Ice : ?",
    options: ["Cool", "Cold", "Warm", "Dry"],
    answer: 1,
    description: "Fire is hot, ice is cold."
  },
  {
    category: "Reasoning",
    question: "If PEN is written as QFO, then BOOK is written as",
    options: ["CPPL", "CPPM", "CQQM", "CPQM"],
    answer: 0,
    description: "Each letter shifted by +1: B→C, O→P, O→P, K→L → CPPL."
  },
  {
    category: "Reasoning",
    question: "If you face east and turn left, which direction will you face?",
    options: ["North", "South", "West", "East"],
    answer: 0,
    description: "Facing east, left turn means facing north."
  },
  {
    category: "Reasoning",
    question: "Son of my sister is my",
    options: ["Nephew", "Cousin", "Uncle", "Brother"],
    answer: 0,
    description: "Son of sister is nephew."
  },
  {
    category: "Reasoning",
    question: "3, 6, 11, 18, ?",
    options: ["25", "27", "29", "30"],
    answer: 2,
    description: "Differences are 3, 5, 7; next difference is 11 → 18+11 = 29."
  },
  {
    category: "Reasoning",
    question: "Dog, Cat, Cow, Tiger – odd one out",
    options: ["Dog", "Cat", "Cow", "Tiger"],
    answer: 2,
    description: "Cow is odd; it is a domestic farm animal, others are carnivores/pets."
  },
  {
    category: "Reasoning",
    question: "Teacher : School :: Doctor : ?",
    options: ["Medicine", "Nurse", "Hospital", "Patient"],
    answer: 2,
    description: "Teacher works in a school; doctor works in a hospital."
  },
  {
    category: "Reasoning",
    question: "If 123 = ABC, then 456 =",
    options: ["DEF", "EFG", "GHI", "HIJ"],
    answer: 0,
    description: "1=A, 2=B, 3=C → 4=D, 5=E, 6=F → DEF."
  },
  {
    category: "Reasoning",
    question: "Sun rises in the east. If a man faces the sun, which direction is behind him?",
    options: ["East", "West", "North", "South"],
    answer: 1,
    description: "Facing east, behind is west."
  },
 {
    category: "Reasoning",
    question: "Father of my father is my",
    options: ["Uncle", "Cousin", "Brother", "Grandfather"],
    answer: 3,
    description: "Father of one's father is grandfather."
  },
  {
    category: "Reasoning",
    question: "100, 90, 81, 73, ?",
    options: ["65", "66", "64", "63"],
    answer: 0,
    description: "The differences are -10, -9, -8; next difference is -8 → 73-8 = 65."
  },
  {
    category: "Reasoning",
    question: "January, March, July, Sunday – odd one out",
    options: ["January", "March", "July", "Sunday"],
    answer: 3,
    description: "Sunday is a day, the others are months."
  },
  {
    category: "Reasoning",
    question: "Eye : See :: Ear : ?",
    options: ["Hear", "Speak", "Smell", "Touch"],
    answer: 0,
    description: "Eyes are for seeing, ears are for hearing."
  },
  {
    category: "Reasoning",
    question: "If MAN = NBO, then CAT =",
    options: ["DBU", "DBV", "DAT", "DZU"],
    answer: 0,
    description: "Each letter is shifted +1: C→D, A→B, T→U → DBU."
  },
  {
    category: "Reasoning",
    question: "A man walks north, then west, then south. He is in which direction from start?",
    options: ["North", "South", "East", "West"],
    answer: 3,
    description: "Net displacement is towards the west."
  },
  {
    category: "Reasoning",
    question: "Daughter of my brother is my",
    options: ["Niece", "Cousin", "Sister", "Aunt"],
    answer: 0,
    description: "Brother’s daughter is niece."
  },
  {
    category: "Reasoning",
    question: "All roses are flowers. Some flowers fade quickly. Conclusion: Some roses fade quickly.",
    options: ["True", "False"],
    answer: 1,
    description: "The conclusion is false; no direct statement about roses fading."
  },
  {
    category: "Reasoning",
    question: "What comes next: A, C, F, J, ?",
    options: ["M", "N", "O", "P"],
    answer: 2,
    description: "Positions: A(1), C(3), F(6), J(10); next is O(15)."
  },
  {
    category: "Reasoning",
    question: "Which number is the largest?",
    options: ["0.8", "0.75", "3/4", "4/5"],
    answer: 3,
    description: "4/5 = 0.8, which is the largest among the given options."
  },
  {
    category: "Reasoning",
    question: "Which letter comes before E?",
    options: ["C", "D", "F", "G"],
    answer: 1,
    description: "The letter before E is D."
  },
  {
    category: "Reasoning",
    question: "5 pens cost ₹25. Cost of 1 pen?",
    options: ["₹4", "₹5", "₹6", "₹7"],
    answer: 1,
    description: "₹25 ÷ 5 = ₹5 per pen."
  },
  {
    category: "Reasoning",
    question: "A clock shows 3:00. Angle between the hands is",
    options: ["60°", "90°", "120°", "180°"],
    answer: 1,
    description: "At 3:00, the angle between hour and minute hands is 90°."
  },
  {
    category: "Reasoning",
    question: "Which is different? 2, 3, 5, 9",
    options: ["2", "3", "5", "9"],
    answer: 3,
    description: "9 is not prime, while the others are prime numbers."
  },
  {
    category: "Reasoning",
    question: "Position of Z in the alphabet",
    options: ["24", "25", "26", "27"],
    answer: 2,
    description: "Z is the 26th letter of the alphabet."
  },
  {
    category: "Reasoning",
    question: "How many letters are between A and J?",
    options: ["7", "8", "9", "10"],
    answer: 1,
    description: "Between A and J are 8 letters (B to I)."
  },
  {
    category: "Reasoning",
    question: "Which comes first in dictionary?",
    options: ["Apple", "Ant", "Ball", "Bat"],
    answer: 1,
    description: "Ant comes first alphabetically."
  },
  {
    category: "Reasoning",
    question: "How many months have 31 days?",
    options: ["5", "6", "7", "8"],
    answer: 2,
    description: "7 months have 31 days: Jan, Mar, May, Jul, Aug, Oct, Dec."
  },
  {
    category: "Reasoning",
    question: "Which number is even?",
    options: ["13", "17", "21", "24"],
    answer: 3,
    description: "24 is even, others are odd."
  },
  {
    category: "Reasoning",
    question: "Which is not a prime number?",
    options: ["2", "3", "4", "5"],
    answer: 2,
    description: "4 is not prime; it is divisible by 2."
  },
  {
    category: "Reasoning",
    question: "If all birds fly and sparrow is a bird, then sparrow can",
    options: ["Swim", "Fly", "Run", "Crawl"],
    answer: 1,
    description: "By logic, sparrow can fly."
  },
  {
    category: "Reasoning",
    question: "Which shape has no corners?",
    options: ["Square", "Triangle", "Rectangle", "Circle"],
    answer: 3,
    description: "A circle has no corners."
  },
  {
    category: "Reasoning",
    question: "Which is heavier?",
    options: ["1 kg iron", "1 kg cotton", "Both same", "Cannot say"],
    answer: 2,
    description: "1 kg of iron and 1 kg of cotton weigh the same."
  },
  {
    category: "Reasoning",
    question: "If today is Monday, what day will it be after 7 days?",
    options: ["Sunday", "Monday", "Tuesday", "Friday"],
    answer: 1,
    description: "After 7 days, it will be Monday again."
  },
  {
    category: "Reasoning",
    question: "How many sides does a hexagon have?",
    options: ["5", "6", "7", "8"],
    answer: 1,
    description: "A hexagon has 6 sides."
  },
  // questions.js (Current Affairs section)
  {
    category: "Current Affairs",
    question: "Who is the current President of India?",
    options: ["Ram Nath Kovind", "Pranab Mukherjee", "Droupadi Murmu", "Narendra Modi"],
    answer: 2,
    description: "Droupadi Murmu became the 15th President of India in July 2022."
  },
  {
    category: "Current Affairs",
    question: "Who is the current Prime Minister of India?",
    options: ["Rahul Gandhi", "Narendra Modi", "Amit Shah", "Arvind Kejriwal"],
    answer: 1,
    description: "Narendra Modi has been serving as Prime Minister of India since 2014."
  },
  {
    category: "Current Affairs",
    question: "Which country hosted the G20 Summit in 2023?",
    options: ["USA", "Japan", "India", "Brazil"],
    answer: 2,
    description: "India hosted the G20 Summit in 2023."
  },
  {
    category: "Current Affairs",
    question: "What is the name of India’s space agency?",
    options: ["NASA", "ESA", "ISRO", "CNSA"],
    answer: 2,
    description: "ISRO (Indian Space Research Organisation) is India’s national space agency."
  },
  {
    category: "Current Affairs",
    question: "Which mission successfully landed near the Moon’s south pole in 2023?",
    options: ["Chandrayaan-1", "Chandrayaan-2", "Chandrayaan-3", "Mangalyaan"],
    answer: 2,
    description: "Chandrayaan-3 successfully landed near the Moon’s south pole in August 2023."
  },
  {
    category: "Current Affairs",
    question: "Which city hosted the 2023 G20 Leaders’ Summit?",
    options: ["Mumbai", "New Delhi", "Bengaluru", "Hyderabad"],
    answer: 1,
    description: "The 2023 G20 Leaders’ Summit was held in New Delhi."
  },
  {
    category: "Current Affairs",
    question: "Who is the current Chief Justice of India (2024)?",
    options: ["N. V. Ramana", "U. U. Lalit", "D. Y. Chandrachud", "Ranjan Gogoi"],
    answer: 2,
    description: "Justice D. Y. Chandrachud is the current Chief Justice of India."
  },
  {
    category: "Current Affairs",
    question: "Which Indian state launched the “Gruha Lakshmi” scheme?",
    options: ["Tamil Nadu", "Karnataka", "Kerala", "Telangana"],
    answer: 1,
    description: "Karnataka launched the Gruha Lakshmi scheme to support women."
  },
  {
    category: "Current Affairs",
    question: "Which Indian city is known as the startup capital of India?",
    options: ["Pune", "Hyderabad", "Bengaluru", "Chennai"],
    answer: 2,
    description: "Bengaluru is widely recognized as the startup capital of India."
  },
  {
    category: "Current Affairs",
    question: "Which country won the ICC Men’s Cricket World Cup 2023?",
    options: ["India", "England", "Australia", "New Zealand"],
    answer: 2,
    description: "Australia won the ICC Men’s Cricket World Cup 2023."
  },
  {
    category: "Current Affairs",
    question: "Where was the ICC Men’s Cricket World Cup 2023 final held?",
    options: ["Eden Gardens", "Wankhede Stadium", "Narendra Modi Stadium", "Chinnaswamy Stadium"],
    answer: 2,
    description: "The final was held at the Narendra Modi Stadium in Ahmedabad."
  },
  {
    category: "Current Affairs",
    question: "Who is the current RBI Governor (2024)?",
    options: ["Urjit Patel", "Raghuram Rajan", "Shaktikanta Das", "Duvvuri Subbarao"],
    answer: 2,
    description: "Shaktikanta Das is the current Governor of the Reserve Bank of India."
  },
  {
    category: "Current Affairs",
    question: "Which Indian state has the highest population according to recent estimates?",
    options: ["Maharashtra", "Uttar Pradesh", "Bihar", "West Bengal"],
    answer: 1,
    description: "Uttar Pradesh has the highest population among Indian states."
  },
  {
    category: "Current Affairs",
    question: "What does G20 stand for?",
    options: ["Group of 20 countries", "Global 20 nations", "Group of developing countries", "Global economic union"],
    answer: 0,
    description: "G20 stands for Group of 20 countries."
  },
  {
    category: "Current Affairs",
    question: "Which Indian mission was India’s first Mars mission?",
    options: ["Chandrayaan-2", "Aditya-L1", "Mangalyaan", "Gaganyaan"],
    answer: 2,
    description: "Mangalyaan (Mars Orbiter Mission) was India’s first mission to Mars."
  },
  {
    category: "Current Affairs",
    question: "Which Indian mission is aimed at studying the Sun?",
    options: ["Chandrayaan-3", "Mangalyaan", "Aditya-L1", "Gaganyaan"],
    answer: 2,
    description: "Aditya-L1 is India’s mission to study the Sun."
  },
  {
    category: "Current Affairs",
    question: "Which country became the newest member of BRICS in 2024?",
    options: ["Argentina", "Saudi Arabia", "Egypt", "All of the above"],
    answer: 3,
    description: "Argentina, Saudi Arabia, and Egypt joined BRICS in 2024."
  },
  {
    category: "Current Affairs",
    question: "What is India’s digital payment system called?",
    options: ["IMPS", "NEFT", "RTGS", "UPI"],
    answer: 3,
    description: "UPI (Unified Payments Interface) is India’s digital payment system."
  },
  {
    category: "Current Affairs",
    question: "Which organization released the Global Hunger Index?",
    options: ["WHO", "IMF", "Concern Worldwide", "World Bank"],
    answer: 2,
    description: "The Global Hunger Index is released by Concern Worldwide."
  },
  {
    category: "Current Affairs",
    question: "Which Indian city hosted the Women’s Premier League (WPL) final 2023?",
    options: ["Mumbai", "Delhi", "Bengaluru", "Ahmedabad"],
    answer: 0,
    description: "Mumbai hosted the WPL final in 2023."
  },
  {
    category: "Current Affairs",
    question: "Who is the current Home Minister of India?",
    options: ["Rajnath Singh", "Amit Shah", "Nirmala Sitharaman", "S. Jaishankar"],
    answer: 1,
    description: "Amit Shah is the current Home Minister of India."
  },
  {
    category: "Current Affairs",
    question: "Who is the current Defence Minister of India?",
    options: ["Amit Shah", "Rajnath Singh", "Narendra Modi", "Anurag Thakur"],
    answer: 1,
    description: "Rajnath Singh is the current Defence Minister of India."
  },
  {
    category: "Current Affairs",
    question: "Which Indian city launched the world’s first water metro?",
    options: ["Kochi", "Chennai", "Mumbai", "Kolkata"],
    answer: 0,
    description: "Kochi launched the world’s first water metro in 2023."
  },
  {
    category: "Current Affairs",
    question: "What is the theme of India’s G20 presidency?",
    options: ["One Earth, One Family, One Future", "Global Unity", "Economic Growth", "Sustainable World"],
    answer: 0,
    description: "The theme of India’s G20 presidency is 'One Earth, One Family, One Future'."
  },
  {
    category: "Current Affairs",
    question: "Which Indian state topped the SDG India Index 2023?",
    options: ["Tamil Nadu", "Kerala", "Himachal Pradesh", "Gujarat"],
    answer: 1,
    description: "Kerala topped the SDG India Index 2023."
  },
  {
    category: "Current Affairs",
    question: "Which country launched the world’s first AI-based weather forecasting system?",
    options: ["USA", "China", "UK", "Japan"],
    answer: 2,
    description: "The UK launched the world’s first AI-based weather forecasting system."
  },
  {
    category: "Current Affairs",
    question: "Which Indian state recently implemented the Uniform Civil Code?",
    options: ["Uttar Pradesh", "Gujarat", "Uttarakhand", "Assam"],
    answer: 2,
    description: "Uttarakhand became the first Indian state to implement the Uniform Civil Code."
  },
  {
    category: "Current Affairs",
    question: "Who is the CEO of NITI Aayog (2024)?",
    options: ["Amitabh Kant", "Parameswaran Iyer", "B. V. R. Subrahmanyam", "Arvind Panagariya"],
    answer: 2,
    description: "B. V. R. Subrahmanyam is the CEO of NITI Aayog as of 2024."
  },
  {
    category: "Current Affairs",
    question: "Which Indian state hosted the National Games 2023?",
    options: ["Goa", "Gujarat", "Odisha", "Kerala"],
    answer: 0,
    description: "Goa hosted the National Games in 2023."
  },
  {
    category: "Current Affairs",
    question: "Which Indian city is known as the cleanest city in India (Swachh Survekshan)?",
    options: ["Indore", "Surat", "Navi Mumbai", "Bhopal"],
    answer: 0,
    description: "Indore has consistently ranked as the cleanest city in India."
  },
  {
    category: "Current Affairs",
    question: "Which country became the first to land on the Moon’s south pole?",
    options: ["USA", "Russia", "China", "India"],
    answer: 3,
    description: "India became the first country to land on the Moon’s south pole with Chandrayaan-3."
  },
  {
    category: "Current Affairs",
    question: "Which Indian bank is the largest public sector bank?",
    options: ["PNB", "SBI", "Canara Bank", "Bank of Baroda"],
    answer: 1,
    description: "State Bank of India (SBI) is the largest public sector bank in India."
  },
  {
    category: "Current Affairs",
    question: "Who is the current Finance Minister of India?",
    options: ["Smriti Irani", "Nirmala Sitharaman", "Piyush Goyal", "Anurag Thakur"],
    answer: 1,
    description: "Nirmala Sitharaman is the current Finance Minister of India."
  },
  {
    category: "Current Affairs",
    question: "Which Indian city hosted the FIFA U-17 Women’s World Cup final 2022?",
    options: ["Bhubaneswar", "Navi Mumbai", "Kolkata", "Goa"],
    answer: 1,
    description: "Navi Mumbai hosted the FIFA U-17 Women’s World Cup final in 2022."
  },
  {
    category: "Current Affairs",
    question: "Which Indian state launched “Mission Shakti” for women empowerment?",
    options: ["Odisha", "Gujarat", "Rajasthan", "Haryana"],
    answer: 0,
    description: "Odisha launched Mission Shakti to empower women."
  },
  {
    category: "Current Affairs",
    question: "What is the full form of AI?",
    options: ["Advanced Intelligence", "Artificial Intelligence", "Automatic Intelligence", "Applied Intelligence"],
    answer: 1,
    description: "AI stands for Artificial Intelligence."
  },
  {
    category: "Current Affairs",
    question: "Which Indian state recently became the first to introduce a digital caste certificate?",
    options: ["Kerala", "Telangana", "Andhra Pradesh", "Tamil Nadu"],
    answer: 1,
    description: "Telangana introduced digital caste certificates."
  },
  {
    category: "Current Affairs",
    question: "Which country hosted the 2024 Olympics?",
    options: ["Japan", "China", "France", "USA"],
    answer: 2,
    description: "France hosted the 2024 Summer Olympics in Paris."
  },
  {
    category: "Current Affairs",
    question: "Which Indian city is known as the FinTech hub of India?",
    options: ["Mumbai", "Hyderabad", "Gurugram", "Pune"],
    answer: 1,
    description: "Hyderabad is recognized as India’s FinTech hub."
  },
  {
    category: "Current Affairs",
    question: "Which Indian state has the longest coastline?",
    options: ["Andhra Pradesh", "Tamil Nadu", "Gujarat", "Maharashtra"],
    answer: 2,
    description: "Gujarat has the longest coastline among Indian states."
  },
  {
    category: "Current Affairs",
    question: "What is India’s rank in global GDP by nominal terms (approx)?",
    options: ["3rd", "4th", "5th", "6th"],
    answer: 2,
    description: "India ranks approximately 5th in global GDP by nominal terms."
  },
  {
    category: "Current Affairs",
    question: "Which Indian mission is aimed at sending humans to space?",
    options: ["Aditya-L1", "Chandrayaan-3", "Gaganyaan", "Mangalyaan"],
    answer: 2,
    description: "Gaganyaan is India’s mission to send humans to space."
  },
  {
    category: "Current Affairs",
    question: "Which Indian city hosted the first Global Biofuel Summit?",
    options: ["Mumbai", "New Delhi", "Pune", "Chennai"],
    answer: 1,
    description: "New Delhi hosted the first Global Biofuel Summit."
  },
  {
    category: "Current Affairs",
    question: "Which Indian state launched the “Mukhyamantri Ladli Behna Yojana”?",
    options: ["Uttar Pradesh", "Madhya Pradesh", "Bihar", "Rajasthan"],
    answer: 1,
    description: "Madhya Pradesh launched the Mukhyamantri Ladli Behna Yojana."
  },
  {
    category: "Current Affairs",
    question: "Who is the current External Affairs Minister of India?",
    options: ["Piyush Goyal", "S. Jaishankar", "Rajnath Singh", "Nitin Gadkari"],
    answer: 1,
    description: "S. Jaishankar is the current External Affairs Minister of India."
  },
  {
    category: "Current Affairs",
    question: "Which Indian city hosted the World Tourism G20 meet?",
    options: ["Srinagar", "Jaipur", "Goa", "Kochi"],
    answer: 0,
    description: "Srinagar hosted the G20 World Tourism meet."
  },
  {
    category: "Current Affairs",
    question: "Which Indian state has the highest literacy rate?",
    options: ["Tamil Nadu", "Kerala", "Maharashtra", "Karnataka"],
    answer: 1,
    description: "Kerala has the highest literacy rate among Indian states."
  },
  {
    category: "Current Affairs",
    question: "Which digital initiative provides a unique identity to citizens of India?",
    options: ["PAN", "Voter ID", "Aadhaar", "Passport"],
    answer: 2,
    description: "Aadhaar provides a unique identity to Indian citizens."
  },
  {
    category: "Current Affairs",
    question: "Which Indian state recently became the first to achieve 100% household tap water connections?",
    options: ["Goa", "Haryana", "Punjab", "Telangana"],
    answer: 0,
    description: "Goa achieved 100% household tap water connections."
  },
  {
    category: "Current Affairs",
    question: "Which global organization released the World Happiness Report?",
    options: ["WHO", "UN", "IMF", "World Bank"],
    answer: 1,
    description: "The United Nations releases the World Happiness Report."
  },
  // questions.js (Programming section)

  {
    category: "Programming",
    question: "Which language is mainly used to structure web pages?",
    options: ["CSS", "JavaScript", "HTML", "Python"],
    answer: 2,
    description: "HTML (HyperText Markup Language) is used to structure web pages."
  },
  {
    category: "Programming",
    question: "Which language is used to add styling to web pages?",
    options: ["HTML", "CSS", "Java", "C"],
    answer: 1,
    description: "CSS (Cascading Style Sheets) is used to style web pages."
  },
  {
    category: "Programming",
    question: "Which language is used to add interactivity to web pages?",
    options: ["HTML", "CSS", "JavaScript", "SQL"],
    answer: 2,
    description: "JavaScript is used to add interactivity to web pages."
  },
  {
    category: "Programming",
    question: "Which symbol is used for single-line comments in C?",
    options: ["#", "//", "/* */", "<!-- -->"],
    answer: 1,
    description: "In C, // is used for single-line comments."
  },
  {
    category: "Programming",
    question: "Which keyword is used to declare a function in JavaScript?",
    options: ["define", "function", "method", "func"],
    answer: 1,
    description: "The 'function' keyword is used to declare functions in JavaScript."
  },
  {
    category: "Programming",
    question: "Which of the following is NOT a programming language?",
    options: ["Python", "Java", "HTML", "C"],
    answer: 2,
    description: "HTML is a markup language, not a programming language."
  },
  {
    category: "Programming",
    question: "What is the correct file extension for a Python file?",
    options: [".pt", ".p", ".py", ".python"],
    answer: 2,
    description: "Python files use the .py extension."
  },
  {
    category: "Programming",
    question: "Which data type is used to store whole numbers in C?",
    options: ["float", "char", "int", "double"],
    answer: 2,
    description: "The 'int' data type is used to store whole numbers in C."
  },
  {
    category: "Programming",
    question: "Which keyword is used to create an object in Java?",
    options: ["class", "object", "new", "create"],
    answer: 2,
    description: "The 'new' keyword is used to create objects in Java."
  },
  {
    category: "Programming",
    question: "Which loop executes at least once?",
    options: ["for", "while", "do-while", "foreach"],
    answer: 2,
    description: "The do-while loop executes at least once before checking the condition."
  },
  {
    category: "Programming",
    question: "Which symbol is used to assign a value?",
    options: ["==", "!=", "=", "<="],
    answer: 2,
    description: "The '=' symbol is used for assignment."
  },
  {
    category: "Programming",
    question: "Which operator is used for comparison in programming?",
    options: ["=", "==", ":=", "=>"],
    answer: 1,
    description: "The '==' operator is used for comparison."
  },
  {
    category: "Programming",
    question: "What does IDE stand for?",
    options: ["Integrated Development Environment", "Internal Development Editor", "Integrated Design Engine", "Interactive Development Editor"],
    answer: 0,
    description: "IDE stands for Integrated Development Environment."
  },
  {
    category: "Programming",
    question: "Which language is platform-independent?",
    options: ["C", "C++", "Java", "Assembly"],
    answer: 2,
    description: "Java is platform-independent due to the JVM (Java Virtual Machine)."
  },
  {
    category: "Programming",
    question: "Which data structure follows LIFO?",
    options: ["Queue", "Stack", "Array", "Linked List"],
    answer: 1,
    description: "Stack follows Last In, First Out (LIFO)."
  },
  {
    category: "Programming",
    question: "Which data structure follows FIFO?",
    options: ["Stack", "Tree", "Queue", "Graph"],
    answer: 2,
    description: "Queue follows First In, First Out (FIFO)."
  },
  {
    category: "Programming",
    question: "Which symbol is used to end a statement in C?",
    options: [".", ":", ";", ","],
    answer: 2,
    description: "Statements in C end with a semicolon (;)."
  },
  {
    category: "Programming",
    question: "Which function is used to print output in Python?",
    options: ["write()", "echo()", "print()", "display()"],
    answer: 2,
    description: "The print() function is used to display output in Python."
  },
  {
    category: "Programming",
    question: "Which keyword is used to define a class in Java?",
    options: ["struct", "define", "class", "object"],
    answer: 2,
    description: "The 'class' keyword is used to define classes in Java."
  },
  {
    category: "Programming",
    question: "Which loop is best when the number of iterations is known?",
    options: ["while", "do-while", "for", "infinite"],
    answer: 2,
    description: "The 'for' loop is best when the number of iterations is known."
  },
  {
    category: "Programming",
    question: "Which of these is a valid variable name?",
    options: ["2value", "value_2", "value-2", "value 2"],
    answer: 1,
    description: "value_2 is a valid variable name."
  },
  {
    category: "Programming",
    question: "Which keyword stops a loop immediately?",
    options: ["stop", "exit", "break", "end"],
    answer: 2,
    description: "The 'break' keyword stops a loop immediately."
  },
  {
    category: "Programming",
    question: "Which keyword skips the current iteration of a loop?",
    options: ["break", "skip", "continue", "pass"],
    answer: 2,
    description: "The 'continue' keyword skips the current iteration of a loop."
  },
  {
    category: "Programming",
    question: "Which language is commonly used for data analysis?",
    options: ["Python", "C", "HTML", "Assembly"],
    answer: 0,
    description: "Python is widely used for data analysis due to libraries like Pandas and NumPy."
  },
  {
    category: "Programming",
    question: "What does SQL stand for?",
    options: ["Structured Query Language", "Simple Query Language", "Sequential Query Language", "Server Query Language"],
    answer: 0,
    description: "SQL stands for Structured Query Language."
  },
  // questions.js (Programming section)
  {
    category: "Programming",
    question: "Which language is mainly used to structure web pages?",
    options: ["CSS", "JavaScript", "HTML", "Python"],
    answer: 2,
    description: "HTML (HyperText Markup Language) is used to structure web pages."
  },
  {
    category: "Programming",
    question: "Which language is used to add styling to web pages?",
    options: ["HTML", "CSS", "Java", "C"],
    answer: 1,
    description: "CSS (Cascading Style Sheets) is used to style web pages."
  },
  {
    category: "Programming",
    question: "Which language is used to add interactivity to web pages?",
    options: ["HTML", "CSS", "JavaScript", "SQL"],
    answer: 2,
    description: "JavaScript is used to add interactivity to web pages."
  },
  {
    category: "Programming",
    question: "Which symbol is used for single-line comments in C?",
    options: ["#", "//", "/* */", "<!-- -->"],
    answer: 1,
    description: "In C, // is used for single-line comments."
  },
  {
    category: "Programming",
    question: "Which keyword is used to declare a function in JavaScript?",
    options: ["define", "function", "method", "func"],
    answer: 1,
    description: "The 'function' keyword is used to declare functions in JavaScript."
  },
  {
    category: "Programming",
    question: "Which of the following is NOT a programming language?",
    options: ["Python", "Java", "HTML", "C"],
    answer: 2,
    description: "HTML is a markup language, not a programming language."
  },
  {
    category: "Programming",
    question: "What is the correct file extension for a Python file?",
    options: [".pt", ".p", ".py", ".python"],
    answer: 2,
    description: "Python files use the .py extension."
  },
  {
    category: "Programming",
    question: "Which data type is used to store whole numbers in C?",
    options: ["float", "char", "int", "double"],
    answer: 2,
    description: "The 'int' data type is used to store whole numbers in C."
  },
  {
    category: "Programming",
    question: "Which keyword is used to create an object in Java?",
    options: ["class", "object", "new", "create"],
    answer: 2,
    description: "The 'new' keyword is used to create objects in Java."
  },
  {
    category: "Programming",
    question: "Which loop executes at least once?",
    options: ["for", "while", "do-while", "foreach"],
    answer: 2,
    description: "The do-while loop executes at least once before checking the condition."
  },
  {
    category: "Programming",
    question: "Which symbol is used to assign a value?",
    options: ["==", "!=", "=", "<="],
    answer: 2,
    description: "The '=' symbol is used for assignment."
  },
  {
    category: "Programming",
    question: "Which operator is used for comparison in programming?",
    options: ["=", "==", ":=", "=>"],
    answer: 1,
    description: "The '==' operator is used for comparison."
  },
  {
    category: "Programming",
    question: "What does IDE stand for?",
    options: ["Integrated Development Environment", "Internal Development Editor", "Integrated Design Engine", "Interactive Development Editor"],
    answer: 0,
    description: "IDE stands for Integrated Development Environment."
  },
  {
    category: "Programming",
    question: "Which language is platform-independent?",
    options: ["C", "C++", "Java", "Assembly"],
    answer: 2,
    description: "Java is platform-independent due to the JVM (Java Virtual Machine)."
  },
  {
    category: "Programming",
    question: "Which data structure follows LIFO?",
    options: ["Queue", "Stack", "Array", "Linked List"],
    answer: 1,
    description: "Stack follows Last In, First Out (LIFO)."
  },
  {
    category: "Programming",
    question: "Which data structure follows FIFO?",
    options: ["Stack", "Tree", "Queue", "Graph"],
    answer: 2,
    description: "Queue follows First In, First Out (FIFO)."
  },
  {
    category: "Programming",
    question: "Which symbol is used to end a statement in C?",
    options: [".", ":", ";", ","],
    answer: 2,
    description: "Statements in C end with a semicolon (;)."
  },
  {
    category: "Programming",
    question: "Which function is used to print output in Python?",
    options: ["write()", "echo()", "print()", "display()"],
    answer: 2,
    description: "The print() function is used to display output in Python."
  },
  {
    category: "Programming",
    question: "Which keyword is used to define a class in Java?",
    options: ["struct", "define", "class", "object"],
    answer: 2,
    description: "The 'class' keyword is used to define classes in Java."
  },
  {
    category: "Programming",
    question: "Which loop is best when the number of iterations is known?",
    options: ["while", "do-while", "for", "infinite"],
    answer: 2,
    description: "The 'for' loop is best when the number of iterations is known."
  },
  {
    category: "Programming",
    question: "Which of these is a valid variable name?",
    options: ["2value", "value_2", "value-2", "value 2"],
    answer: 1,
    description: "value_2 is a valid variable name."
  },
  {
    category: "Programming",
    question: "Which keyword stops a loop immediately?",
    options: ["stop", "exit", "break", "end"],
    answer: 2,
    description: "The 'break' keyword stops a loop immediately."
  },
  {
    category: "Programming",
    question: "Which keyword skips the current iteration of a loop?",
    options: ["break", "skip", "continue", "pass"],
    answer: 2,
    description: "The 'continue' keyword skips the current iteration of a loop."
  },
  {
    category: "Programming",
    question: "Which language is commonly used for data analysis?",
    options: ["Python", "C", "HTML", "Assembly"],
    answer: 0,
    description: "Python is widely used for data analysis due to libraries like Pandas and NumPy."
  },
  {
    category: "Programming",
    question: "What does SQL stand for?",
    options: ["Structured Query Language", "Simple Query Language", "Sequential Query Language", "Server Query Language"],
    answer: 0,
    description: "SQL stands for Structured Query Language."
  },
  // questions.js (Programming section continued)
  {
    category: "Programming",
    question: "Which command is used to take input in Python?",
    options: ["input()", "scan()", "read()", "gets()"],
    answer: 0,
    description: "The input() function is used to take user input in Python."
  },
  {
    category: "Programming",
    question: "Which operator is used for logical AND?",
    options: ["&", "&&", "||", "!"],
    answer: 1,
    description: "The logical AND operator is represented by &&."
  },
  {
    category: "Programming",
    question: "Which language is mainly used for Android app development?",
    options: ["Python", "Java", "C", "PHP"],
    answer: 1,
    description: "Java is the primary language used for Android app development."
  },
  {
    category: "Programming",
    question: "What is the output of: print(2 + 3 * 4)?",
    options: ["20", "14", "24", "10"],
    answer: 1,
    description: "Order of operations: 3*4=12, then 2+12=14."
  },
  {
    category: "Programming",
    question: "Which data type stores true or false?",
    options: ["int", "char", "boolean", "float"],
    answer: 2,
    description: "Boolean data type stores true or false values."
  },
  {
    category: "Programming",
    question: "Which of the following is a loop structure?",
    options: ["if-else", "switch", "for", "break"],
    answer: 2,
    description: "The 'for' loop is a loop structure."
  },
  {
    category: "Programming",
    question: "Which language uses indentation instead of braces?",
    options: ["Java", "C", "Python", "JavaScript"],
    answer: 2,
    description: "Python uses indentation to define code blocks instead of braces."
  },
  {
    category: "Programming",
    question: "Which function is used to find the length of a string in C?",
    options: ["length()", "strlen()", "size()", "count()"],
    answer: 1,
    description: "The strlen() function returns the length of a string in C."
  },
  {
    category: "Programming",
    question: "Which symbol is used for multi-line comments in C?",
    options: ["//", "<!-- -->", "/* */", "##"],
    answer: 2,
    description: "Multi-line comments in C are written using /* ... */."
  },
  {
    category: "Programming",
    question: "Which language is best suited for machine learning?",
    options: ["C", "Python", "HTML", "SQL"],
    answer: 1,
    description: "Python is best suited for machine learning due to libraries like TensorFlow and scikit-learn."
  },
  {
    category: "Programming",
    question: "Which keyword is used to inherit a class in Java?",
    options: ["implements", "inherit", "extends", "uses"],
    answer: 2,
    description: "The 'extends' keyword is used to inherit a class in Java."
  },
  {
    category: "Programming",
    question: "Which of the following is NOT a loop?",
    options: ["for", "while", "switch", "do-while"],
    answer: 2,
    description: "Switch is a conditional statement, not a loop."
  },
  {
    category: "Programming",
    question: "Which operator increases a value by 1?",
    options: ["--", "++", "+=", "=="],
    answer: 1,
    description: "The ++ operator increments a value by 1."
  },
  {
    category: "Programming",
    question: "Which programming language is used for backend web development?",
    options: ["HTML", "CSS", "Python", "XML"],
    answer: 2,
    description: "Python is widely used for backend web development with frameworks like Django and Flask."
  },
  {
    category: "Programming",
    question: "Which keyword is used to define constants in C?",
    options: ["const", "constant", "final", "static"],
    answer: 0,
    description: "The 'const' keyword is used to define constants in C."
  },
  {
    category: "Programming",
    question: "Which structure stores elements of the same data type?",
    options: ["Structure", "Union", "Array", "File"],
    answer: 2,
    description: "An array stores elements of the same data type."
  },
  {
    category: "Programming",
    question: "Which operator is used for OR condition?",
    options: ["&&", "||", "!", "&"],
    answer: 1,
    description: "The logical OR operator is represented by ||."
  },
  {
    category: "Programming",
    question: "Which language is used to query databases?",
    options: ["Python", "Java", "SQL", "C"],
    answer: 2,
    description: "SQL (Structured Query Language) is used to query databases."
  },
  {
    category: "Programming",
    question: "Which statement is used for decision making?",
    options: ["for", "while", "if", "break"],
    answer: 2,
    description: "The 'if' statement is used for decision making."
  },
  {
    category: "Programming",
    question: "Which keyword is used to return a value from a function?",
    options: ["send", "output", "return", "back"],
    answer: 2,
    description: "The 'return' keyword is used to return values from functions."
  },
  {
    category: "Programming",
    question: "Which data structure is used for hierarchical data?",
    options: ["Array", "Stack", "Queue", "Tree"],
    answer: 3,
    description: "Tree data structures are used to represent hierarchical data."
  },
  {
    category: "Programming",
    question: "Which of the following is a scripting language?",
    options: ["Java", "C", "Python", "C++"],
    answer: 2,
    description: "Python is a scripting language."
  },
  {
    category: "Programming",
    question: "Which language is used to design dynamic web pages?",
    options: ["HTML", "JavaScript", "CSS", "XML"],
    answer: 1,
    description: "JavaScript is used to design dynamic web pages."
  },
  {
    category: "Programming",
    question: "What is the correct syntax to print in Java?",
    options: ["print(\"Hello\");", "System.out.print(\"Hello\");", "echo \"Hello\";", "printf(\"Hello\");"],
    answer: 1,
    description: "In Java, System.out.print(\"Hello\"); is the correct syntax."
  },
  {
    category: "Programming",
    question: "Which programming concept allows reusing code?",
    options: ["Compilation", "Inheritance", "Debugging", "Execution"],
    answer: 1,
    description: "Inheritance allows reusing code by extending existing classes."
  },
  // questions.js (Computer Basics & Core Concepts section)
  {
    category: "Computer Basics",
    question: "What does CPU stand for?",
    options: ["Central Program Unit", "Central Processing Unit", "Computer Processing Unit", "Control Processing Unit"],
    answer: 1,
    description: "CPU stands for Central Processing Unit, which is the main component that executes instructions."
  },
  {
    category: "Computer Basics",
    question: "Which device is known as the brain of the computer?",
    options: ["Monitor", "Keyboard", "CPU", "Mouse"],
    answer: 2,
    description: "The CPU is considered the brain of the computer."
  },
  {
    category: "Computer Basics",
    question: "Which of the following is an input device?",
    options: ["Monitor", "Printer", "Keyboard", "Speaker"],
    answer: 2,
    description: "The keyboard is an input device used to enter data into the computer."
  },
  {
    category: "Computer Basics",
    question: "Which of the following is an output device?",
    options: ["Mouse", "Scanner", "Monitor", "Keyboard"],
    answer: 2,
    description: "The monitor is an output device that displays information."
  },
  {
    category: "Computer Basics",
    question: "What does RAM stand for?",
    options: ["Read Access Memory", "Random Access Memory", "Ready Access Memory", "Rapid Access Memory"],
    answer: 1,
    description: "RAM stands for Random Access Memory."
  },
  {
    category: "Computer Basics",
    question: "RAM is a type of",
    options: ["Permanent memory", "Secondary memory", "Volatile memory", "External memory"],
    answer: 2,
    description: "RAM is volatile memory, meaning data is lost when power is turned off."
  },
  {
    category: "Computer Basics",
    question: "Which memory is non-volatile?",
    options: ["RAM", "Cache", "ROM", "Register"],
    answer: 2,
    description: "ROM (Read Only Memory) is non-volatile and retains data even without power."
  },
  {
    category: "Computer Basics",
    question: "What does ROM stand for?",
    options: ["Read Only Memory", "Run Only Memory", "Random Output Memory", "Ready Only Memory"],
    answer: 0,
    description: "ROM stands for Read Only Memory."
  },
  {
    category: "Computer Basics",
    question: "Which unit is used to measure computer memory?",
    options: ["Hertz", "Meter", "Byte", "Second"],
    answer: 2,
    description: "Computer memory is measured in bytes."
  },
  {
    category: "Computer Basics",
    question: "Which unit is the smallest?",
    options: ["Bit", "Byte", "KB", "MB"],
    answer: 0,
    description: "A bit is the smallest unit of computer memory."
  },
  {
    category: "Computer Basics",
    question: "1 Byte equals",
    options: ["4 bits", "6 bits", "8 bits", "16 bits"],
    answer: 2,
    description: "1 byte equals 8 bits."
  },
  {
    category: "Computer Basics",
    question: "Which of the following is system software?",
    options: ["MS Word", "Web Browser", "Operating System", "Media Player"],
    answer: 2,
    description: "An operating system is system software."
  },
  {
    category: "Computer Basics",
    question: "Which of the following is application software?",
    options: ["Windows", "Linux", "MS Excel", "BIOS"],
    answer: 2,
    description: "MS Excel is application software."
  },
  {
    category: "Computer Basics",
    question: "What is the main function of an operating system?",
    options: ["Write programs", "Manage hardware and software", "Design websites", "Browse internet"],
    answer: 1,
    description: "The operating system manages hardware and software resources."
  },
  {
    category: "Computer Basics",
    question: "Which operating system is open source?",
    options: ["Windows", "macOS", "Linux", "DOS"],
    answer: 2,
    description: "Linux is an open-source operating system."
  },
  {
    category: "Computer Basics",
    question: "What does GUI stand for?",
    options: ["General User Interface", "Graphical User Interface", "Global User Interface", "Graphic Utility Interface"],
    answer: 1,
    description: "GUI stands for Graphical User Interface."
  },
  {
    category: "Computer Basics",
    question: "Which device is used to store data permanently?",
    options: ["RAM", "Cache", "Hard Disk", "Register"],
    answer: 2,
    description: "Hard disks store data permanently."
  },
  {
    category: "Computer Basics",
    question: "Which of the following is secondary storage?",
    options: ["RAM", "ROM", "Hard Disk", "Cache"],
    answer: 2,
    description: "Hard disks are secondary storage devices."
  },
  {
    category: "Computer Basics",
    question: "What is the full form of USB?",
    options: ["Universal Serial Bus", "Unified System Bus", "Universal System Block", "Unified Serial Board"],
    answer: 0,
    description: "USB stands for Universal Serial Bus."
  },
  {
    category: "Computer Basics",
    question: "Which device is used to scan documents?",
    options: ["Printer", "Scanner", "Monitor", "Speaker"],
    answer: 1,
    description: "Scanners are used to digitize documents."
  },
  {
    category: "Computer Basics",
    question: "Which of the following is NOT hardware?",
    options: ["Keyboard", "Mouse", "CPU", "Windows"],
    answer: 3,
    description: "Windows is software, not hardware."
  },
  {
    category: "Computer Basics",
    question: "What is software?",
    options: ["Physical components", "Set of programs", "Input devices", "Output devices"],
    answer: 1,
    description: "Software is a set of programs that run on hardware."
  },
  {
    category: "Computer Basics",
    question: "Which key is used to delete characters to the left of the cursor?",
    options: ["Delete", "Shift", "Backspace", "Enter"],
    answer: 2,
    description: "The Backspace key deletes characters to the left of the cursor."
  },
  {
    category: "Computer Basics",
    question: "Which key is used to start a new line?",
    options: ["Spacebar", "Shift", "Enter", "Tab"],
    answer: 2,
    description: "The Enter key is used to start a new line."
  },
  {
    category: "Computer Basics",
    question: "Which of the following is a web browser?",
    options: ["Windows", "Google Chrome", "Android", "Linux"],
    answer: 1,
    description: "Google Chrome is a web browser."
  },
  {
    category: "Computer Basics",
    question: "What does WWW stand for?",
    options: ["World Wide Web", "World Web Wide", "Web World Wide", "Wide World Web"],
    answer: 0,
    description: "WWW stands for World Wide Web, a system of interlinked hypertext documents accessed via the internet."
  },
  {
    category: "Computer Basics",
    question: "Which device connects a computer to the internet?",
    options: ["Monitor", "Modem", "Printer", "Scanner"],
    answer: 1,
    description: "A modem connects a computer to the internet."
  },
  {
    category: "Computer Basics",
    question: "What is a computer virus?",
    options: ["Hardware damage", "Software bug", "Malicious program", "Input error"],
    answer: 2,
    description: "A computer virus is a malicious program designed to disrupt or damage systems."
  },
  {
    category: "Computer Basics",
    question: "Which software protects a computer from viruses?",
    options: ["Compiler", "Antivirus", "Browser", "Editor"],
    answer: 1,
    description: "Antivirus software protects computers from viruses and malware."
  },
  {
    category: "Computer Basics",
    question: "What is the full form of LAN?",
    options: ["Large Area Network", "Local Area Network", "Logical Area Network", "Long Area Network"],
    answer: 1,
    description: "LAN stands for Local Area Network."
  },
  {
    category: "Computer Basics",
    question: "What is the full form of WAN?",
    options: ["Wide Area Network", "Web Area Network", "World Area Network", "Wired Area Network"],
    answer: 0,
    description: "WAN stands for Wide Area Network."
  },
  {
    category: "Computer Basics",
    question: "Which device is used to print on paper?",
    options: ["Monitor", "Scanner", "Printer", "Mouse"],
    answer: 2,
    description: "A printer is used to produce hard copies of documents."
  },
  {
    category: "Computer Basics",
    question: "Which memory is fastest?",
    options: ["RAM", "ROM", "Cache", "Hard Disk"],
    answer: 2,
    description: "Cache memory is the fastest type of memory."
  },
  {
    category: "Computer Basics",
    question: "What is booting?",
    options: ["Installing software", "Restarting computer", "Starting the computer", "Shutting down"],
    answer: 2,
    description: "Booting refers to starting the computer and loading the operating system."
  },
  {
    category: "Computer Basics",
    question: "Which of the following is an example of an operating system?",
    options: ["MS Word", "Photoshop", "Windows", "Excel"],
    answer: 2,
    description: "Windows is an operating system."
  },
  {
    category: "Computer Basics",
    question: "Which key combination is used to copy text?",
    options: ["Ctrl + V", "Ctrl + X", "Ctrl + C", "Ctrl + Z"],
    answer: 2,
    description: "Ctrl + C is used to copy text."
  },
  {
    category: "Computer Basics",
    question: "Which key combination is used to paste text?",
    options: ["Ctrl + P", "Ctrl + V", "Ctrl + X", "Ctrl + A"],
    answer: 1,
    description: "Ctrl + V is used to paste text."
  },
  {
    category: "Computer Basics",
    question: "Which key combination is used to cut text?",
    options: ["Ctrl + X", "Ctrl + C", "Ctrl + V", "Ctrl + Z"],
    answer: 0,
    description: "Ctrl + X is used to cut text."
  },
  {
    category: "Computer Basics",
    question: "What is a file?",
    options: ["Collection of hardware", "Collection of programs", "Collection of data", "Collection of devices"],
    answer: 2,
    description: "A file is a collection of data stored on a computer."
  },
  {
    category: "Computer Basics",
    question: "What is a folder?",
    options: ["Hardware component", "Collection of files", "Output device", "Input device"],
    answer: 1,
    description: "A folder is used to organize and store files."
  },
  {
    category: "Computer Basics",
    question: "Which storage device is portable?",
    options: ["Hard Disk", "RAM", "USB Flash Drive", "ROM"],
    answer: 2,
    description: "USB flash drives are portable storage devices."
  },
  {
    category: "Computer Basics",
    question: "Which device is used to move the cursor on screen?",
    options: ["Keyboard", "Mouse", "Printer", "Speaker"],
    answer: 1,
    description: "A mouse is used to move the cursor on the screen."
  },
  {
    category: "Computer Basics",
    question: "Which of the following is NOT an operating system?",
    options: ["Linux", "Windows", "Android", "MS PowerPoint"],
    answer: 3,
    description: "MS PowerPoint is application software, not an operating system."
  },
  {
    category: "Computer Basics",
    question: "What is the full form of PDF?",
    options: ["Portable Data File", "Personal Document Format", "Portable Document Format", "Printed Document File"],
    answer: 2,
    description: "PDF stands for Portable Document Format."
  },
  {
    category: "Computer Basics",
    question: "Which software is used to create presentations?",
    options: ["MS Word", "MS Excel", "MS PowerPoint", "Notepad"],
    answer: 2,
    description: "MS PowerPoint is used to create presentations."
  },
  {
    category: "Computer Basics",
    question: "What does BIOS stand for?",
    options: ["Basic Input Output System", "Binary Input Output System", "Basic Internal Operating System", "Boot Internal Operating System"],
    answer: 0,
    description: "BIOS stands for Basic Input Output System."
  },
  {
    category: "Computer Basics",
    question: "Which part of the computer displays output?",
    options: ["CPU", "Monitor", "Keyboard", "Mouse"],
    answer: 1,
    description: "The monitor displays output from the computer."
  },
  {
    category: "Computer Basics",
    question: "Which storage device uses magnetic storage?",
    options: ["CD", "DVD", "Hard Disk", "Pen Drive"],
    answer: 2,
    description: "Hard disks use magnetic storage technology."
  },
  {
    category: "Computer Basics",
    question: "Which of the following is an example of cloud storage?",
    options: ["Hard Disk", "Pen Drive", "Google Drive", "RAM"],
    answer: 2,
    description: "Google Drive is an example of cloud storage."
  },
  {
    category: "Computer Basics",
    question: "Which computer generation used artificial intelligence concepts?",
    options: ["First", "Second", "Third", "Fifth"],
    answer: 3,
    description: "Fifth generation computers introduced artificial intelligence concepts."
  }
];