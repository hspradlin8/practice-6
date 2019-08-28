/* book 2 ch 6  Represent your Pet Practice*/

const lilJerryTheCat = {
    name: "Lil Jerry",
    species: "Tabby/MainCoon",
    nickName: "Jer Bear",
    age: 7,
    meow: function () {   
        window.alert("MEOOOWWW!")
    },
    eat: function () {
        window.alert("Crunk, crunk, chew, chew")
    },
    sleeps: function () {
        window.alert("snores")
    },
    favoriteToys: [],
    play: function (toy) {
        if (toy =="bird") {
            this.favoriteToys.push(toy);
            console.log("bird");
        } else if (toy == "bell") {
            this.favoriteToys.push(toy);
            console.log("bell");
        } else if (toy == "laser") {
            this.favoriteToys.push(toy);
        } 
    }
}
 lilJerryTheCat.play("bird");
 lilJerryTheCat.play("bell");
 lilJerryTheCat.play("laser");
 lilJerryTheCat.play("snake");
/*pet sounds */
lilJerryTheCat.meow();
lilJerryTheCat.eat();
lilJerryTheCat.sleeps();

/* My Pet This */
// favoriteToy = []
// play = function (favoriteToy) { 
// if (favoriteToy === bird) {
//     lilJerryTheCat = "Happy";
//     this.favoriteToy.push(item)
// } else if (favoriteToy === bell){
//     lilJerryTheCat = "excited";
//     this.favoriteToy.push(item)
// } else (favoriteToy === laser);{
//     lilJerryTheCat = "Sad";
//     this.favoriteToy.push(item)
// }
// }
// play = function (item) {
    // this.favoriteToy.push(item)
// }