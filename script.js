/* becode/javascript
 *
 * /07-misc/07-storage-clicker/script.js - 7.7: jeu : clicker persistant
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.
let upgradeCost = +document.querySelectorAll(".cost");

(function() {
    var Buttons = document.querySelectorAll(".upgradeBtn");
    console.log(Buttons);

    document.querySelectorAll(".upgradeBtn").forEach(function (btn) {
        btn.addEventListener("click", function () {
            console.log(btn.id);
            switch (btn) {
                case upgradeOne:
                    console.log("Dit werkt.");

                    break;
                case upgradeTwo:
                    console.log("blijkbaar dit ook");
                    break;
                case upgradeThree:
                    console.log("blijkbaar dit ook");
                    break;
                case upgradeFour:
                    console.log("blijkbaar dit ook");
                    break;
            }

        })
    });



    let image = document.getElementById("clickImage");
    let counter = document.getElementById("counter");

    image.addEventListener("click", function (){
        counter.innerHTML++;
        //store
        localStorage.setItem("lastCount", counter.innerHTML);

    });


    // Retrieve
    counter.innerHTML = localStorage.getItem("lastCount");


})();
