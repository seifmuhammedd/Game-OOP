import { Ui } from "./ui.js";
import { Games } from "./game.js";
import { Details } from "./details.js";
const closeBtn = document.getElementById("btnClose");
const categories = document.querySelectorAll(".navbar-nav .nav-item a");
export let gamesList;
let ui = new Ui();
let games = new Games();
async function showGames(category = "mmorpg"){
    ui.showLoading()
    gamesList = await games.getGames(category);
    ui.hideLoading()
    ui.display()
    games.showDetailsOfGame()
}
showGames()
closeBtn.addEventListener("click", () => {
  ui.closeDetails();
});

for (const category of categories) {
  category.addEventListener("click", async function () {
    ui.changeActive();
    let categoryName = this.innerHTML.toLowerCase();
    ui.showLoading();
    showGames(categoryName)
  });
}
