const mapData = {
    veterinaryClinics: [
        {
            id: 1,
            lat: 42.855922,
            lon: 74.623953,
            text: 'Илбирс',
        },
        {
            id: 2,
            lat: 42.849757,
            lon: 74.609778,
            text: 'Багира',
        },
        {
            id: 3,
            lat: 42.814107,
            lon: 74.634396,
            text: 'Томас',
        },
        {
            id: 4,
            lat: 42.860505,
            lon: 74.596641,
            text: 'Ветэксперт',
        },
        {
            id: 5,
            lat: 42.857655,
            lon: 74.606919,
            text: 'Гаухар',
        },
        {
            id: 6,
            lat: 42.841934,
            lon: 74.617303,
            text: 'Альфавет',
        },
        {
            id: 7,
            lat: 42.844964,
            lon: 74.596355,
            text: 'Рикки',
        },
        {
            id: 8,
            lat: 42.852204,
            lon: 74.620200,
            text: 'KyrgyzVetService',
        },
        {
            id: 9,
            lat: 42.869519,
            lon: 74.569271,
            text: 'АгроВет'
        },
        {
            id: 10,
            lat: 42.860072,
            lon: 74.596783,
            text: 'Ветеринарная клиника'
        }
    ],
    petStore: [
        {
            id: 1,
            lat: 42.847114,
            lon: 74.595320,
            text: 'Любимая лапка'
        },
        {   
            id: 2,
            lat: 42.862274,
            lon: 74.603656,
            text: 'Зоомаркет'
        },
        {
            id: 3,
            lat: 42.859873,
            lon: 74.606798,
            text: 'Доберман'
        },
        {
            id: 4,
            lat: 42.869327,
            lon: 74.615950,
            text: 'КыргызВетСервис'
        },
        {
            id: 5,
            lat: 42.868004,
            lon: 74.585427,
            text: 'Алтын Балык'
        },
        {
            id: 6,
            lat: 42.871002,
            lon: 74.577797,
            text: 'Кот и пес'
        },
        {
            id: 7,
            lat: 42.873075,
            lon: 74.578279,
            text: 'ZooRoom'
        },
        {
            id: 8,
            lat: 42.873084,
            lon: 74.579863,
            text: 'Зоомаг'
        },
        {
            id: 9,
            lat: 42.873354,
            lon: 74.580050,
            text: 'Discus. Kg'
        },
        {
            id: 10,
            lat: 42.867957,
            lon: 74.585242,
            text: 'Любимчик'
        }
    ]
};



export default mapData;



export const calculateMeanVeterinaryClinicsLatAndLon = (category) => {
    let result = [];
    let allLats = [];
    let allLons = [];

    switch (category) {
        case 'клиники':
            allLats = mapData.veterinaryClinics.map((item) => item.lat);
            allLons = mapData.veterinaryClinics.map((item) => item.lon);
            result.push(allLats.reduce((start, lat) => {return start + lat;}, 0) / allLats.length);
            result.push(allLons.reduce((start, lon) => {return start + lon;}, 0) / allLons.length);
            break;
        case 'зоомагазины':
            allLats = mapData.petStore.map((item) => item.lat);
            allLons = mapData.petStore.map((item) => item.lon);
            result.push(allLats.reduce((start, lat) => {return start + lat;}, 0) / allLats.length);
            result.push(allLons.reduce((start, lon) => {return start + lon;}, 0) / allLons.length);
            break;
    }


    return result;
}