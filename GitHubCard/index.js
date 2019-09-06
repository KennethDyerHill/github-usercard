/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/

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

// const followersArray = [];

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

/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/


axios.get('https://api.github.com/users/KennethDyerHill')
.then (dataSet => {
  const githubInfo = dataSet.data;
  cards.appendChild(githubInfo)
})
  .catch (error => {
  console.log("this is an error...", error)
})
const followersArray = ['tetondan', 'dustinmyers', 'justsml', 'bigknell', 'luishrd']; 
followersArray.forEach(user => {
  axios.get(`https://api.github.com/users/${user}`)
  .then (res => {
     const card = createStudent(res.data)
     const cards = document.querySelector('.cards')
     cards.appendChild(card)
   })
   .catch (error => {
     console.log("this is an error", error)
   })
})
function createStudent(info){
  const card = document.createElement('div');
  const picture = document.createElement('img');
  const cardInfo = document.createElement('div');
  const header3 = document.createElement('h3');
  const userName = document.createElement('p');
  const loca = document.createElement('p');
  const prof = document.createElement('p');
  const follower = document.createElement('p');
  const follows = document.createElement('p');
  const desc = document.createElement('p');

  card.appendChild(picture);
  card.classList.add('person');
  picture.src = info.avatar_url;

  card.appendChild(cardInfo);
  cardInfo.classList.add('card-info');

  cardInfo.appendChild(header3);
  header3.classList.add('name');
  header3.textContent = info.name;

  cardInfo.appendChild(userName);
  userName.classList.add('username');
  userName.textContent = info.login;

  cardInfo.appendChild(loca);
  loca.textContent = info.location;

  cardInfo.appendChild(prof);
  prof.textContent = info.profile;

  cardInfo.appendChild(follower);
  follower.textContent = info.followers;

  cardInfo.appendChild(follows);
  follows.textContent = info.following;

  cardInfo.appendChild(desc);
  desc.textContent = info.bio;

  return card;
}