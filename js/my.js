const wrapper = document.getElementById("wrapper");
const loader = document.getElementById("loader")
function createCard(user) {
  return `
  <div class="card">
  <img src="${user.flag}" width="300" height="300" alt="">
  <h2>${user.country}</h2>
  <h2>${user.code}</h2>
  <h2>${user.id}</h2>
</div>
  `;
}
document.addEventListener("DOMContentLoaded", function () {
  fetch("https://cars-pagination.onrender.com/all-countries")
    .then(function (resp) {
      if (resp.status < 300) {
        return resp.json();
      }
    })
    .then(function (data) {
        wrapper.style.direction = 'block'
      data.length > 0 &&
        data.forEach((user) => {
          const card = createCard(user);
          wrapper.innerHTML += card;
        })
    })
    .catch(err=>{
        wrapper.style.direction = 'block'
    console.log(err);
    })
    .finally(function(){
    loader.style.display ="none"
    })
});

