const gameDetails = document.getElementById("gameDetils");
const closeBtn = document.getElementById("btnClose");
const cards = document.querySelectorAll(".card");
const categories = document.querySelectorAll(".navbar-nav .nav-item a");

for (const card of cards) {
  card.addEventListener("click", () => {
    gameDetails.classList.replace("d-none", "d-block");
  });
}

closeBtn.addEventListener("click", () => {
  gameDetails.classList.replace("d-block", "d-none");
});

for (const category of categories) {
    category.addEventListener("click", function(){
        let categoryName = this.innerHTML.toLowerCase()
        
    })
}
