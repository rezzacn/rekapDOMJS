// suwit start
function getPilihanKomputer() {
  const comp = Math.random();
  if (comp < 0.34) {
    return 'batu';
  }
  if (comp >= 0.34 && comp < 0.67) {
    return 'gunting';
  }
  return 'kertas';
}

function getHasil(comp, player) {
  if (player == comp) {
    return 'seri';
  }
  if (player == 'batu') {
    if (comp == 'gunting') {
      return 'menang';
    } else {
      return 'kalah';
    }
  }
  if (player == 'gunting') {
    if (comp == 'batu') {
      return 'kalah';
    } else {
      return 'menang';
    }
  }
  if (player == 'kertas') {
    if (comp == 'batu') {
      return 'menang';
    } else {
      return 'kalah';
    }
  }
}

const imgPlayer = document.querySelectorAll('section#suwit li img');
imgPlayer.forEach(function (plh) {
  plh.addEventListener('click', function () {
    const audioClick = new Audio('sound/click.mp3');
    audioClick.play();

    setTimeout(function () {
      const pilihanKomputer = getPilihanKomputer();
      const pilihanPlayer = plh.className;
      const hasil = getHasil(pilihanKomputer, pilihanPlayer);

      const imgKomputer = document.querySelector('.area-komputer img');
      imgKomputer.setAttribute('src', `img/suwit/${pilihanKomputer}.png`);

      const info = document.querySelector('.area-hasil img');
      info.setAttribute('src', `img/suwit/${hasil}.png`);

      const audioHasil = new Audio();
      if (hasil == 'menang') {
        audioHasil.src = 'sound/win.mp3';
      } else if (hasil == 'kalah') {
        audioHasil.src = 'sound/lose.mp3';
      } else {
        audioHasil.src = 'sound/draw.mp3';
      }
      audioHasil.play();
    }, 1000);
  });
});
// suwit end

// gallery start
const container = document.querySelector('section#gallery .container');
const jumbo = document.querySelector('.jumbo');
const thumbs = document.querySelectorAll('.thumb');
container.addEventListener('click', function (e) {
  if (e.target.className == 'thumb') {
    jumbo.src = e.target.src;

    jumbo.classList.add('fade');

    setTimeout(function () {
      jumbo.classList.remove('fade');
    }, 500);
  }

  thumbs.forEach(function (thumb) {
    thumb.className = 'thumb';
  });

  e.target.classList.add('active');
});
// gallery start
