// ------------ cration des joueurs et de carte
let images = [1, 2, 3, 4, 5, 6, 7, 8];
let input_header = document.querySelector(".input_header");
let select_header = document.querySelector(".select_header");
let btn_header = document.querySelector(".btn_header");
let timme="";
// ----------- div -------
let div_contenu = document.querySelector(".contenu");
let div_card = document.querySelector(".container");
let div_headerr = document.querySelector(".headerr");
let div_main = document.querySelector("main");
let div_main_container = document.querySelector(".container");
let h1_main = document.querySelector(".h1_main");
let h2_main=document.querySelector(".h2_main");


btn_header.addEventListener("click", () => {
    input_header.value = input_header.value.trim();

    while (input_header.value == "" || select_header.value == "Difficulte") {
        if (input_header.value == "") {
            alert("Entrer Votre Nom !");

        } else if (select_header.value == "Difficulte") {
            alert("Choisi le niveau de jeux !");

        }
        return;
    }
    // ---------------- creation des card  -----------------
    switch (select_header.value) {
        case "facile":
            
            h1_main.innerHTML = `${input_header.value}`;
            // ------ chrono ----------
            minutes=0
            seconds=0
            timme=setInterval(timeGenerator,1000);
            // ------ end chrono ----------

            console.log(h1_main.innerHTML);

            images.sort(() => Math.random() - 0.5);
            console.log(`${images[0]}`);

            let card_facile = `
            <div class="card">
                <img src="./public/image/images${images[0]}.jpeg" class="face">
                <img src="./public/image/doimages.png" class="do" alt="do">
            </div>
            <div class="card">
                <img src="./public/image/images${images[0]}.jpeg" class="face">
                <img src="./public/image/doimages.png" class="do" alt="do">
            </div>
            <div class="card">
                <img src="./public/image/images${images[1]}.jpeg" class="face" alt="do">
                <img src="./public/image/doimages.png" class="do"  alt="do">
            </div>
            <div class="card">
                <img src="./public/image/images${images[1]}.jpeg" class="face" alt="do">
                <img src="./public/image/doimages.png" class="do"  alt="do">
            </div>
            `;
            div_main_container.classList.add("facile");
            div_card.innerHTML = card_facile;
            break;
        case "Normal":
            h1_main.innerHTML = `${input_header.value}`;
             // ------ chrono ----------
            minutes=0
            seconds=0
            timme=setInterval(timeGenerator,1000);
            // ------ end chrono ----------
            images.sort(() => Math.random() - 0.5);
            let card_Normal = `
                <div class="card">
                    <img src="./public/image/images${images[0]}.jpeg" class="face">
                    <img src="./public/image/doimages.png" class="do" alt="do">
                </div>
                <div class="card">
                    <img src="./public/image/images${images[0]}.jpeg" class="face">
                    <img src="./public/image/doimages.png" class="do" alt="do">
                </div>
                <div class="card">
                    <img src="./public/image/images${images[1]}.jpeg" class="face" alt="do">
                    <img src="./public/image/doimages.png" class="do"  alt="do">
                </div>
                <div class="card">
                    <img src="./public/image/images${images[1]}.jpeg" class="face" alt="do">
                    <img src="./public/image/doimages.png" class="do"  alt="do">
                </div>
                <div class="card">
                    <img src="./public/image/images${images[2]}.jpeg" class="face">
                    <img src="./public/image/doimages.png" class="do" alt="do">
                </div>
                <div class="card">
                    <img src="./public/image/images${images[2]}.jpeg" class="face">
                    <img src="./public/image/doimages.png" class="do" alt="do">
                </div>
                <div class="card">
                    <img src="./public/image/images${images[3]}.jpeg" class="face" alt="do">
                    <img src="./public/image/doimages.png" class="do"  alt="do">
                </div>
                <div class="card">
                    <img src="./public/image/images${images[3]}.jpeg" class="face" alt="do">
                    <img src="./public/image/doimages.png" class="do"  alt="do">
                </div>
                `;
            div_main_container.classList.remove("facile");
            div_card.innerHTML = card_Normal;
            break;
        case "Difficile":
            h1_main.innerHTML = `${input_header.value}`;
             // ------ chrono ----------
            minutes=0
            seconds=0
            timme=setInterval(timeGenerator,1000);
            // ------ end chrono ----------
            images.sort(() => Math.random() - 0.5);
            let card_Difficile = `
            
                    <div class="card">
                        <img src="./public/image/images${images[0]}.jpeg" class="face">
                        <img src="./public/image/doimages.png" class="do" alt="do">
                    </div>
                    <div class="card">
                        <img src="./public/image/images${images[0]}.jpeg" class="face">
                        <img src="./public/image/doimages.png" class="do" alt="do">
                    </div>
                    <div class="card">
                        <img src="./public/image/images${images[1]}.jpeg" class="face" alt="do">
                        <img src="./public/image/doimages.png" class="do"  alt="do">
                    </div>
                    <div class="card">
                        <img src="./public/image/images${images[1]}.jpeg" class="face" alt="do">
                        <img src="./public/image/doimages.png" class="do"  alt="do">
                    </div>
                    <div class="card">
                        <img src="./public/image/images${images[2]}.jpeg" class="face">
                        <img src="./public/image/doimages.png" class="do" alt="do">
                    </div>
                    <div class="card">
                        <img src="./public/image/images${images[2]}.jpeg" class="face">
                        <img src="./public/image/doimages.png" class="do" alt="do">
                    </div>
                    <div class="card">
                        <img src="./public/image/images${images[3]}.jpeg" class="face" alt="do">
                        <img src="./public/image/doimages.png" class="do"  alt="do">
                    </div>
                    <div class="card">
                        <img src="./public/image/images${images[3]}.jpeg" class="face" alt="do">
                        <img src="./public/image/doimages.png" class="do"  alt="do">
                    </div>
                    <div class="card">
                        <img src="./public/image/images${images[4]}.jpeg" class="face">
                        <img src="./public/image/doimages.png" class="do" alt="do">
                    </div>
                    <div class="card">
                        <img src="./public/image/images${images[4]}.jpeg" class="face">
                        <img src="./public/image/doimages.png" class="do" alt="do">
                    </div>
                    <div class="card">
                        <img src="./public/image/images${images[5]}.jpeg" class="face" alt="do">
                        <img src="./public/image/doimages.png" class="do"  alt="do">
                    </div>
                    <div class="card">
                        <img src="./public/image/images${images[5]}.jpeg" class="face" alt="do">
                        <img src="./public/image/doimages.png" class="do"  alt="do">
                    </div>
                    <div class="card">
                        <img src="./public/image/images${images[6]}.jpeg" class="face">
                        <img src="./public/image/doimages.png" class="do" alt="do">
                    </div>
                    <div class="card">
                        <img src="./public/image/images${images[6]}.jpeg" class="face">
                        <img src="./public/image/doimages.png" class="do" alt="do">
                    </div>
                    <div class="card">
                        <img src="./public/image/images${images[7]}.jpeg" class="face" alt="do">
                        <img src="./public/image/doimages.png" class="do"  alt="do">
                    </div>
                    <div class="card">
                        <img src="./public/image/images${images[7]}.jpeg" class="face" alt="do">
                        <img src="./public/image/doimages.png" class="do"  alt="do">
                    </div>

                    `;
            div_main_container.classList.remove("facile");
            div_card.innerHTML = card_Difficile;
            break;

        default:
            break;
    }
    div_main.classList.remove("no-show");
    div_headerr.classList.add("no-show");

    // ------------ end cration des cartes -----------------------


    // -------------- the game -------------
    let allCards = document.querySelectorAll(".card");
    let nmbrCard = allCards.length
    let firstCard = null;
    let secondCard = null;
    let canclick = true;
    let score = 0;

    // ----------- le melange des cardes ----------
    const melanger = () => {
        allCards.forEach(card => {
            let order_aleatoir = Math.floor(Math.random() * nmbrCard);
            card.style.order = order_aleatoir;
        });
    }
    melanger();
    // ----------- end melange des cardes ----------

    // -------------- debut de jeux ----------
    allCards.forEach(card => {
        card.addEventListener("click", showcard);

    });
    function showcard() {
        if (!canclick) {
            return
        }
        if (this.classList.contains("flip")) {
            return
        }
        // show card
        this.classList.add("flip");
        // ebd  show card

        if (!firstCard) {
            firstCard = this;
        } else if (!secondCard) {
            secondCard = this;
        }

        let img1 = firstCard ? firstCard.firstElementChild.src : null;
        let img2 = secondCard ? secondCard.firstElementChild.src : null;


        if (img1 === img2) {
            firstCard = null;
            secondCard = null;

            score++;
            if (score == nmbrCard / 2) gameover();

        } else if (img1 && img2) {
            canclick = false;
            setTimeout(() => {
                firstCard.classList.remove("flip");
                secondCard.classList.remove("flip");
                firstCard = null;
                secondCard = null;
                canclick = true;
            }, 1000);
        }
    }
    // -------------- end debut de jeux ----------

    // ------------- fin de jeux ---------------
    function gameover() {
        setTimeout(() => {
            alert('You win .........!');
            allCards.forEach(card => {
                card.classList.remove("flip");

            });
            firstCard = null;
            secondCard = null;
            img1 = null;
            img2 = null;
            canclick = true;
            melanger();
            allCards.forEach(card => {
                card.addEventListener("click", showcard);

            });
            score = 0;
             // ---------------- table des score -----------------
                let chrono = h2_main.innerHTML;
                let contenu = `
                        <div class="joueur">
                            <h2>${input_header.value} </h2>
                            <div class="diffeculte">
                                <i class="fa-solid fa-signs-post"></i>
                                <h4>${select_header.value} </h4>
                            </div>
                            <div class="crono">
                                
                                <h4> ${chrono} </h4>
                            </div>
                        </div>`;

                div_contenu.innerHTML += contenu;
                input_header.value = "";
            // ---------------- end table de score -----------------

            clearInterval(timme);
            div_main.classList.add("no-show");
            div_headerr.classList.remove("no-show");
        }, 1000);

    }
    // ------------- end fin de jeux ---------------

});

let seconds=0;
let minutes=0;
const timeGenerator = ()=>{
    seconds+=1;

    if (seconds>=60) {
        minutes+=1;
        seconds=0;        
    }

    let secondValue = seconds <10 ? `0${seconds}` : seconds;
    let minutesValue = minutes <10 ? `0${minutes}` : minutes;
    h2_main.innerHTML=`<i class="fa-regular fa-clock"></i> ${minutesValue}:min / ${secondValue}:s`;
}
