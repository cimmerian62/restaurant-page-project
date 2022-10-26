import japanRest from './japanRest.jpg';

const component =  function() {
    const content = document.getElementById('content');
    const main = document.createElement('div');
    main.classList.add("main");
    const header = document.createElement('div');
    header.classList.add("header");
    header.textContent = "Welcome to the restaurant!!"
    const tabList = document.createElement('ul');

    tabList.classList.add('tablist')

    const item1 = document.createElement('li')
    item1.setAttribute('id','tab1')
    item1.textContent = "Home"
    item1.classList.add('tabSelected');
    const item2 = document.createElement('li')
    item2.setAttribute('id','tab2')
    item2.textContent = "Menu"
    const item3 = document.createElement('li')
    item3.setAttribute('id','tab3')
    item3.textContent = "Contact"


    tabList.appendChild(item1)
    tabList.appendChild(item2)
    tabList.appendChild(item3)
    
    header.appendChild(tabList)
    const myImg = new Image()
    myImg.src = japanRest
    myImg.setAttribute('id','img1')
    myImg.setAttribute('alt','Interior of a Japanese restaurant.');
    const info = document.createElement('div');
    info.classList.add('info');
    info.textContent = "    Our restaurant is an excellent establishment! We serve great food served by authentic japanese chefs trained in zen monasteries." +
    " Please come and eat, your won't regret it!";
    content.appendChild(header);
    content.appendChild(main);
    main.appendChild(myImg);
    main.appendChild(info);
    
  };

  export { component };
 