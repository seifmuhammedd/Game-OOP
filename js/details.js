
export class Details {
    constructor() {}
    getApi(id) {
      return `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`;
    }
    async getDetails(id) {
      const options = {
        method: "GET",
        headers: {
          "x-rapidapi-key": "25c85252famshddc09d7bd0878f9p1915fbjsn820ef7d87c07",
          "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
        },
      };
      let response = await fetch(this.getApi(id), options);
      let result = await response.json();
      return result;
    }
  }