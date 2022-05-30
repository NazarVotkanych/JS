// -створити форму з інпутами для name та age.
//     При відправці форми записати об'єкт в localstorage
//
// let name = document.getElementById("name");
// let age = document.getElementById("age");
// let button = document.getElementById("button");
//
// let send = (userName, userAge) => {
//     let user = {
//         name: userName,
//         age: userAge
//     }
//     localStorage.setItem('UserInfo', JSON.stringify(user));
// };
// button.onclick = () => {
//     send(name.value, age.value)
// };
// -створити форму з інпутами для model,type та volume автівки.
//     при відпарвці форми об'єкти зберігаються в масиві в локальному сховищі.


let model = document.getElementById("model");
let type = document.getElementById("type");
let volume = document.getElementById("volume");
let button = document.getElementById("button")

let send = (userModel, userType, userVolume) => {
    let user = {
        model: userModel,
        type: userType,
        volume: userVolume
    }
    let info = localStorage.getItem("CARS");
    if (info) {
        let infoCars = JSON.parse(info)
        localStorage.setItem("CARS", JSON.stringify([...infoCars, user]))
        return;
    }
    localStorage.setItem("CARS", JSON.stringify([user]))
};
    button.onclick = () => {
        send(model.value, type.value, volume.value)
    };

