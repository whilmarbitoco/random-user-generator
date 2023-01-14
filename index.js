const fetchButton = document.getElementById('fetch-button');

fetchButton.addEventListener('click', () => {
  fetch('https://randomuser.me/api')
    .then(response => response.json())
    .then(data => {
      const name = data.results[0].name.first + " " + data.results[0].name.last;
      const email = data.results[0].email;
      const image = data.results[0].picture.large;
      const gender = data.results[0].gender;

      const nameElement = document.getElementById('name');
      nameElement.innerHTML = name;

      const emailElement = document.getElementById('email');
      emailElement.innerHTML = email;

      const imgElement = document.getElementById('image');
      imgElement.src = image;
      const btnElement = document.getElementsByClassName('btn');

      if (gender === "female") {
          imgElement.style.borderColor = "#FFC0CB";
          
    } else if (gender === "male"){
          imgElement.style.borderColor = "#add8e6";
          
    }

    })
    .catch(error => {
      console.log('Error:', error);
    });
});
