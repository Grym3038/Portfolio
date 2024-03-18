async function theRace() {
    let squad1 = false;
    let squad2 = false;
    let noob = "";

    const squad1Go = new Promise((resolve) => {
        setTimeout(() => {
            noob = "squad1";
            resolve(true);
        }, Math.random() * 5000); // Random time under 5 seconds
    });

    const squad2Go = new Promise((resolve) => {
        setTimeout(() => {
            noob = "squad2";
            resolve(true);
        }, Math.random() * 5000); // Random time under 5 seconds
    });

    const results = await Promise.all([squad1Go, squad2Go]);
    return [...results, noob];
}

theRace().then((result) => {
    console.log("Loser:", result[2]);
});