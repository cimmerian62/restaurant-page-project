import japanRest from './japanRest.jpg';

const home =  function() {

    const tab1 = document.getElementById('tab1')
    const tab2 = document.getElementById('tab2')
    const tab3 = document.getElementById('tab3')
    tab1.classList.add('tabSelected');
    tab2.classList = "";
    tab3.classList = "";

    const main = document.querySelector('.main')
    main.textContent = "";

    const myImg = new Image()
    myImg.src = japanRest
    myImg.setAttribute('id','img1')
    myImg.setAttribute('alt','Interior of a Japanese restaurant.');
    const info = document.createElement('div');
    info.classList.add('info');
    info.textContent = "    Our restaurant is an excellent establishment! We serve great food served by authentic japanese chefs trained in zen monasteries." +
    " Please come and eat, your won't regret it!";
    main.appendChild(myImg);
    main.appendChild(info);
    
  };

  export { home };
 