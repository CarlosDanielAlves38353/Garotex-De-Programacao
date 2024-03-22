const btnSuivant = document.querySelector('#suivant');
console.log(btnSuivant);

const btnPrécédent = document.querySelector('#précédent');
console.log(btnSuivant);

const cercles = document.querySelectorAll('.circle');
console.log(cercles);

const progress = document.querySelector('#progress');
console.log(progress);


let currentActive = 1;
console.log(currentActive)

btnSuivant.addEventListener('click', () => {
    console.log('bouton suivant cliqué')
    currentActive++;
  
    if (currentActive > cercles.length) {
      currentActive = cercles.length;
    }
    console.log(currentActive);
    update();
  });

    btnPrécédent.addEventListener('click', () => {
        console.log('bouton précédent cliqué')
        currentActive--;
      
        if (currentActive < 1) {
          currentActive = 1;
        }
      console.log(currentActive);
        update();
      });

    function update() {
        cercles.forEach((cercle, index) => {
          if (index < currentActive) {
            cercle.classList.add('active');
          } else {
            cercle.classList.remove('active');
          }
        });
        progress.style.width = ((currentActive - 1) / (cercles.length - 1)) * 380 + '%';
        btnPrécédent.disabled = currentActive === 1;
        btnSuivant.disabled = currentActive === cercles.length;
      }

      document.getElementById("suivant").addEventListener("click", function() {
        const destinationCard = document.getElementById("destination-card");
        destinationCard.scrollIntoView({ behavior: "smooth" });
      });
