document.addEventListener('click', function(e){
    let body = document.querySelector('body');

    let bullet = document.createElement('span');
    bullet.classList.add('bullet');
    let x = e.offsetX;
    let y = e.offsetY;
    bullet.style.left= x+'px';
    bullet.style.top= y+'px';

    body.appendChild(bullet);

    let images = [
        'url(images/blood.png)',
        'url(images/blood2.png)',
        'url(images/blood3.png)',
        'url(images/blood4.png)',
        'url(images/blood5.png)',
    ];
    let bloodBg = images[Math.floor(Math.random() * images.length )];

    let blood = document.createElement('span');
    blood.classList.add('blood');
    blood.style.left = x+'px';
    blood.style.top = y+'px';

    body.appendChild(blood);
    blood.style.backgroundImage = bloodBg;

    let sound = document.getElementById('sound');
    sound.play();

    let bgimages =[
        'url(images/bg.jpg)',
        'url(images/bg2.jpg)',
        'url(images/bg3.jpg)',
        'url(images/bg4.jpg)',
        'url(images/bg5.jpg)',
        'url(images/bg6.jpg)',
    ];
    let backBg = bgimages[Math.floor(Math.random() * bgimages.length )];
    let mainBg = document.querySelector('section');
    mainBg.classList.add('mainbg');
    mainBg.style.backgroundImage = backBg;



    
})