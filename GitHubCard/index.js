/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/

// const myName = "yakuana"; 

// changed "followersArray to gitUserNames"
const gitUserNames = ["yakuana", "JasonYoo1", "Ryan-Wisniewski", "taniamichelle", "tetondan", "dustinmyers"];

// iterating over gitUserNames []  
gitUserNames.forEach((name) => {

  // sending get request for current "name"
  axios.get(`https://api.github.com/users/${name}`)

  .then((object) => {
    // console object {}  
    // console.log("response", object); 

    // console data key of object {} -- the result is an object 
    // console.log("value of data key", object.data);

    // get .cards div 
    const cardsDiv = document.querySelector(".cards"); 

    // pass the data received from Github into createPersonCard function
    cardsDiv.appendChild(createPersonCard(object.data)); 
  })

  .catch((error) => {
    // error has occured 
    console.log("The API is currently down.", error)
  })

})

/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>

*/

function createPersonCard(newObject) {

  // check if passed in argument is an object 
  console.log(newObject); 

  // define new elements  
  const card = document.createElement("div");
  const cardImg = document.createElement("img");
  const cardInfo = document.createElement("div");
  const name = document.createElement("h3");
  const username = document.createElement("p");
  const location = document.createElement("p");
  const profile = document.createElement("p"); 
  const profileLink = document.createElement("a");
  const followers = document.createElement("p");
  const following = document.createElement("p");
  const bio = document.createElement("p");

  console.log(profile); 
  console.log(profileLink);

  // assign class names 
  card.classList.add("card"); 
  cardInfo.classList.add("card-info"); 
  name.classList.add("name"); 
  username.classList.add("username");

  // set content (links)
  cardImg.src = newObject.avatar_url; 
    // console.log(newObject.avatar_url); 
  profileLink.href = newObject.html_url;
    // console.log(profileLink.href);
  profileLink.textContent = newObject.html_url; 

  // set content (text)
  name.textContent = newObject.name; 
    // console.log("name", newObject.name); 
  username.textContent = newObject.login; 
    // console.log("location", newObject.location); 
  followers.textContent = `Followers: ${newObject.followers}`; 
    // console.log("followers", newObject.followers); 
  following.textContent = `Following: ${newObject.following}`; 
    // console.log("following", newObject.following); 
  profile.textContent = `Profile: `

  // check if location available and set content 
  if (newObject.location === null) {
    location.textContent = "Location: Not Available"; 
  } else {
    location.textContent = `Location: ${newObject.location}`; 
  };

  // check if bio available and set content 
  if (newObject.bio === null) {
    bio.textContent = "Bio: Not Available"; 
  } else {
    bio.textContent = `Bio: ${newObject.bio}`; 
  };

  // create structure of elements 
  card.appendChild(cardImg); 
  card.appendChild(cardInfo); 
  cardInfo.appendChild(name);
  cardInfo.appendChild(username);
  cardInfo.appendChild(location);
  cardInfo.appendChild(profile);
  cardInfo.appendChild(followers);
  cardInfo.appendChild(following);
  cardInfo.appendChild(bio); 
  profile.appendChild(profileLink); 

  return card; 
}

/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
