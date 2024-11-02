import { gamesList } from "./index.js";
import { Ui } from "./ui.js";
import { Details } from "./details.js"
let ui = new Ui();
let details = new Details();
export class Games {
    constructor() {}
    getApi(category) {
      return `https://free-to-play-games-database.p.rapidapi.com/api/games?category=${category}`;
    }
    async getGames(category) {
      const options = {
        method: "GET",
        headers: {
          "x-rapidapi-key": "25c85252famshddc09d7bd0878f9p1915fbjsn820ef7d87c07",
          "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
        },
      };
      let response = await fetch(this.getApi(category), options);
      let result = await response.json();
      return result;
    }
    showDetailsOfGame(){
      document.querySelectorAll(".card").forEach(function (card) {
          card.addEventListener("click", async function () {
            ui.openDetails();
            ui.showLoading();
            let myGame = await details.getDetails(this.id);
            ui.hideLoading();
            ui.displayDetails(myGame);
          });
        });
    }
  }