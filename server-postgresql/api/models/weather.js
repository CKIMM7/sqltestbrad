const db = require ('../dbConfig')

class Weather {
    constructor(data){
        this.id = data.id
        this.temperature = data.temperature
        this.describe = data.describe
    }

    static get all() {
        return new Promise (async (resolve, reject) => {
            try {
                const weatherData = await db.query(`SELECT * FROM weather;`)
                const weather = weatherData.rows.map(d => new Weather(d))
                resolve(weather);
            } catch (err) {
                reject("Error retrieving weather")
            }
        })
    }


}

module.exports = Weather;


// DROP TABLE IF EXISTS weather;
// CREATE TABLE weather (
//     id serial PRIMARY KEY,
//     temperature INT NOT NULL,
//     describe varchar(255)
// );
