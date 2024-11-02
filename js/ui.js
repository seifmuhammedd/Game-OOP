import { gamesList } from "./index.js";
const gamesDisplay = document.getElementById("gamesDisplay");
const gameDetails = document.getElementById("gameDetails");
export class Ui {
    constructor() {}
    changeActive() {
      document.querySelectorAll(".nav-link").forEach((link) => {
        link.addEventListener("click", () => {
          document.querySelector("a.active").classList.remove("active");
          link.classList.add("active");
        });
      });
    }
    openDetails() {
      gameDetails.classList.replace("d-none", "d-block");
    }
    closeDetails() {
      gameDetails.classList.replace("d-block", "d-none");
    }
    showLoading() {
      document
        .querySelector(".loading-screen")
        .classList.replace("d-none", "d-flex");
    }
    hideLoading() {
      document
        .querySelector(".loading-screen")
        .classList.replace("d-flex", "d-none");
    }
    display() {
      let showData = ``;
      for (let i = 0; i < gamesList.length; i++) {
        showData += `
                  <div class="col-md-3">
                      <div class="card bg-transparent text-white text-center" id="${
                        gamesList[i].id
                      }">
                          <div class="card-img px-3 pt-3">
                              <img src="${
                                gamesList[i].thumbnail
                              }" class="card-img-top w-100" alt="game-img">
                          </div>
                          <div class="card-body">
                              <div class="card-head d-flex align-items-center justify-content-between">
                                  <h5 class="card-title h6">${
                                    gamesList[i].title
                                  }</h5>
                                  <span class="badge bg-primary">Free</span>
                              </div>
                              <p class="card-text mt-2 text-secondary">${gamesList[
                                i
                              ].short_description.slice(" ", 55)},...</p>
                          </div>
                          <div class="card-footer d-flex align-items-center justify-content-between">
                              <span class="badge">${gamesList[i].genre}</span>
                              <span class="badge">${gamesList[i].platform}</span>
                          </div>
                      </div>
                  </div>
          `;
        gamesDisplay.innerHTML = showData;
      }
    }
    displayDetails(game) {
      let detailsInfo = `
                      <div class="col-md-4">
                          <img src="${game.thumbnail}" class="w-100" alt="game-img">
                      </div>
                      <div class="col-md-8">
                          <h3>Title: <span>${game.title}</span></h3>
                          <p>Category: <span class="badge">${game.genre}</span></p>
                          <p>Platform: <span class="badge">${game.platform}</span></p>
                          <p>Status: <span class="badge">${game.status}</span></p>
                          <p class="description">${game.description}</p>
                          <a class="btn btn-outline-warning text-white" href="${game.game_url}" target="_blank">Show Game</a>
                      </div>
      `;
      document.getElementById("detailsData").innerHTML = detailsInfo;
    }
  }