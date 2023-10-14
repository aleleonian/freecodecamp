function orbitalPeriod(arr) {
    const GM = 398600.4418;
    const earthRadius = 6367.4447;
    return arr.map(satelite => {
        satelite.orbitalPeriod = altitudeToOrbitalPeriod(satelite.avgAlt, earthRadius, GM);
        delete satelite.avgAlt;
        return satelite;
    })
}

function altitudeToOrbitalPeriod(averageAltitude, earthRadius, GM) {

    // Calculate the semi-major axis (a) by adding the altitude to the Earth's radius
    const a = earthRadius + averageAltitude;

    // Calculate the orbital period (T) in seconds
    const T = 2 * Math.PI * Math.sqrt(Math.pow(a, 3) / GM);

    return Math.round(T);
}
console.log(orbitalPeriod([{ name: "iss", avgAlt: 413.6 }, { name: "hubble", avgAlt: 556.7 }, { name: "moon", avgAlt: 378632.553 }]));

//orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]) should return [{name: "sputnik", orbitalPeriod: 86400}].

//orbitalPeriod([{name: "iss", avgAlt: 413.6}, {name: "hubble", avgAlt: 556.7}, {name: "moon", avgAlt: 378632.553}]) 
// should return [{name : "iss", orbitalPeriod: 5557}, {name: "hubble", orbitalPeriod: 5734}, {name: "moon", orbitalPeriod: 2377399}]