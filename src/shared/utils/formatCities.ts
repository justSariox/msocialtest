import cities from '../../shared/api/cities.json';

export const formatCities = () => {
    return cities
        .filter(city => city.population > 50000)
        .sort((a, b) => a.city.localeCompare(b.city));
};


export const biggestCity = () => {
    return cities.reduce((max, current) => +current.population > +max.population ? current : max, { population: 0 });
};