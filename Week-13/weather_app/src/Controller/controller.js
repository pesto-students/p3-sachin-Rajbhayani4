const axios = require('axios');
const cities = require('./weather_16.json');

const WeatherData = (req, res) => {

    const { search, page, limit } = req.body;
    if (search || (page && limit)) {
        let data;
        const searchResult = cities.filter(item => item.city.name.toString() === search);
        const startIndex = (page - 1) * limit;
        const endIndex = page * limit;
        const result = cities.slice(startIndex, endIndex);

        search === '' ? (data = result) : (data = searchResult)

        return res.json({
            status: true,
            data
        });
    } else {
        return res.json({
            status: false,
            message: "Page and limit must be required"
        });
    }
}

const ForecastData = async (req, res) => {

    const { city } = req.body;

    if (city) {
        const searchResult = cities.filter(item => (item?.city?.findname).toLowerCase() === city.toLowerCase());

        if (searchResult !== []) {

            let lat = searchResult[0]?.city?.coord?.lat, lon = searchResult[0]?.city?.coord?.lon;
            await axios.post(`api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=266c95e6d3b9a39cab24a23a31f06bc8`).then((data) => {
                return res.json({
                    status: true,
                    data
                })
            }).catch((error) => {
                return res.json({
                    status: false,
                    message: error.message
                })
            })

        } else {
            return res.json({
                status: false,
                message: "City is not exist"
            })
        }


    } else {
        return res.json({
            status: false,
            message: "City must be required"
        })
    }

}

const currentData = async (req, res) => {

    const { city } = req.body;

    if (city) {
        const searchResult = cities.filter(item => (item?.city?.findname).toLowerCase() === city.toLowerCase());

        if (searchResult !== []) {
            let lat = searchResult[0]?.city?.coord?.lat, lon = searchResult[0]?.city?.coord?.lon;

            await axios.post(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=266c95e6d3b9a39cab24a23a31f06bc8`).then((data) => {

                return res.json({
                    status: true,
                    data: data?.data
                })
            }).catch((error) => {
                return res.json({
                    status: false,
                    message: error.message
                })
            })

        } else {
            return res.json({
                status: false,
                message: "City is not exist"
            })
        }
    } else {
        return res.json({
            status: false,
            message: "City must be required"
        })
    }

}

const filterData = (req, res) => {

    const { search } = req.body;

    if (search) {
        const searchData = (searchCase) => {
            const result = [];
            let search = searchCase.toLowerCase();
            for (let i = 0; i < cities.length; i++) {

                for (const prop in cities[i]) {

                    if (prop != 'time') {
                        let condtion = prop == 'weather' ? cities[i][prop][0] : cities[i][prop];

                        for (let l in condtion) {

                            if (condtion[l].toString().toLowerCase().indexOf(search) != -1) result.push(cities[i]);
                            if (l == "coord") {
                                for (let j in condtion[l]) {

                                    if (condtion[l][j].toString().toLowerCase().indexOf(search) != -1) result.push(cities[i]);
                                }
                            }
                        }
                    }
                }

            }
            const unique = result.filter(ele => {
                const isDuplicate = result.includes(ele.city.name);
                if (!isDuplicate) {
                    result.push(ele.city.name); return true;
                } return false;
            })

            return unique
        }

        const data = searchData(search);
        return res.json({
            status: true,
            data: data
        })

    } else {
        return res.json({
            status: false,
            message: "Search must be required"
        })
    }

}

module.exports = { WeatherData, ForecastData, currentData, filterData }