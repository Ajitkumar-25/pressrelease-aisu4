


const backendData = [
  {
    title: 'Card 1',
    date: '2023-06-14',
    time: '10:00 AM',
    category: 'Category 1',
    description: 'Description for Card 1'
  },
  {
    title: 'Card 2',
    date: '2023-06-14',
    time: '2:30 PM',
    category: 'Category 2',
    description: 'Description for Card 2'
  },
  {
    title: 'Card 3',
    date: '2023-06-13',
    time: '5:00 PM',
    category: 'Category 3',
    description: 'Description for Card 3'
  },
  {
    title: 'Card 4',
    date: '2023-06-14',
    time: '11:30 AM',
    category: 'Category 4',
    description: 'Description for Card 4'
  },
  {
    title: 'Card 5',
    date: '2023-06-15',
    time: '9:00 AM',
    category: 'Category 5',
    description: 'Description for Card 5'
  },
  {
    title: 'Card 6',
    date: '2023-06-16',
    time: '3:00 PM',
    category: 'Category 6',
    description: 'Description for Card 6'
  },
  {
    title: 'Card 7',
    date: '2023-06-17',
    time: '12:00 PM',
    category: 'Category 7',
    description: 'Description for Card 7'
  },
  {
    title: 'Card 8',
    date: '2023-06-18',
    time: '4:30 PM',
    category: 'Category 8',
    description: 'Description for Card 9'
  },
  {
    title: 'Card 9',
    date: '2023-06-18',
    time: '4:30 PM',
    category: 'Category 9',
    description: 'Description for Card 9'
  },
  {
    title: 'Card 10',
    date: '2023-04-18',
    time: '4:30 PM',
    category: 'Category 10',
    description: 'Description for Card 10'
  }
];


// Function to create a card element
function createCard(title, date, time, category, description) {
  const card = document.createElement('div');
  card.className = 'card';

  const cardTitle = document.createElement('h2');
  cardTitle.className = 'card-title';
  cardTitle.textContent = title;

  const cardDate = document.createElement('p');
  cardDate.className = 'card-date';
  cardDate.textContent = 'Date: ' + date;

  const cardTime = document.createElement('p');
  cardTime.className = 'card-time';
  cardTime.textContent = 'Time: ' + time;

  const cardCategory = document.createElement('p');
  cardCategory.className = 'card-category';
  cardCategory.textContent = 'Category: ' + category;

  const cardDescription = document.createElement('p');
  cardDescription.className = 'card-description';
  cardDescription.textContent = description;


  const cardButton = document.createElement('button');
  cardButton.className = 'card-button';
  cardButton.textContent = 'Read More';
  cardButton.addEventListener('click', function() {
    // Handle button click event
    console.log('Button clicked for ' + title);
  });

  card.appendChild(cardTitle);
  card.appendChild(cardDate);
  card.appendChild(cardTime);
  card.appendChild(cardCategory);
  card.appendChild(cardDescription);
  card.appendChild(cardButton);

  return card;
}

// Function to fetch data from the backend and display it on the page
function fetchDataAndDisplay() {
  const cardContainer = document.getElementById('card-container');

  // Sort the data based on the date in ascending order
  backendData.sort((a, b) => {
    const dateTimeA = new Date(a.date + ' ' + a.time);
    const dateTimeB = new Date(b.date + ' ' + b.time);
    return dateTimeB - dateTimeA;
  });

  // Create and append cards for each data item
  backendData.forEach((item) => {
    const card = createCard(item.title, item.date, item.time, item.category, item.description);
    cardContainer.appendChild(card);
  });
}

// Fetch data and display when the page loads
window.onload = fetchDataAndDisplay;





const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
  nav.classList.toggle('nav-active');
});


