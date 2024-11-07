
// Function to remove articles from the start of a band name
function removeArticle(name) {
  return name.replace(/^(a |an |the )/i, '').trim();
}

// Sort the array ignoring articles
touristSpots.sort((a, b) => {
  let nameA = removeArticle(a).toLowerCase();
  let nameB = removeArticle(b).toLowerCase();
  return nameA.localeCompare(nameB);
});

// Select the ul element with id 'band'
const ulElement = document.getElementById('band');

// Add sorted band names to the ul element
touristSpots.forEach(band => {
  const li = document.createElement('li');
  li.textContent = band;
  ulElement.appendChild(li);
});

