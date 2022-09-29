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

        const searchResult = cities.filter(item => (item?.city?.findname).toLowerCase() === search.toLowerCase());
        return res.json({
            status: true,
            data: searchResult[0]
        })

    } else {
        return res.json({
            status: false,
            message: "Search must be required"
        })
    }

}

module.exports = { WeatherData, ForecastData, currentData, filterData }