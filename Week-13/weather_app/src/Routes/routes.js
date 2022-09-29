const express = require('express');
const router = express.Router();
const { WeatherData, ForecastData, currentData, filterData } = require('../Controller/controller');


router.post('/multipleCities', WeatherData);

router.post('/forecastData', ForecastData);

router.post('/currentData', currentData);

router.post('/filterData', filterData);

module.exports = router;