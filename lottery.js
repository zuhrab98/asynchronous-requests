function lottery() {
    console.log("Вы начали игру");
    let promise = new Promise(function (resolve, reject) {
        setTimeout(function () {
            Math.random(0) > 0.5 ? resolve() : reject("Вы промахнулись");
        }, 2000);
    });
    return promise;
}

const fetchData = async () => {
    try {
        await lottery();
        console.log("Вы выиграли");
        console.log("Вам заплатили");
    } catch (error) {
        console.log(`${error} > Вы проиграли`);
    } finally {
        console.log("Игра закончена");
    }
};

fetchData();

// lottery()
//   .then(() => console.log("Вы выиграли"))
//   .then(() => console.log("Вам заплатили"))
//   .catch(() => console.log("Вы проиграли"))
//   .finally(() => console.log("Игра закончена"));
