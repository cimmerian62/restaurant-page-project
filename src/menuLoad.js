const menu =  function() {

    const tab1 = document.getElementById('tab1')
    const tab2 = document.getElementById('tab2')
    const tab3 = document.getElementById('tab3')
    tab1.classList = "";
    tab2.classList.add('tabSelected');
    tab3.classList = "";

    const food1 = document.createElement('div')
    food1.classList.add('menuTitle')
    food1.textContent = "Sushi 10.00$"
    const food1Des = document.createElement('p')
    food1Des.classList.add('menuPara')
    food1Des.textContent = "Delicious raw fish wrapped in rice and seaweed."
    const food2 = document.createElement('div')
    food2.classList.add('menuTitle')
    food2.textContent = "Noodles 7.00$"
    const food2Des = document.createElement('p')
    food2Des.classList.add('menuPara')
    food2Des.textContent = "Steaming ramen with chicken flavor added."
    const food3 = document.createElement('div')
    food3.classList.add('menuTitle')
    food3.textContent = "Rice 4.00$"
    const food3Des = document.createElement('p')
    food3Des.classList.add('menuPara')
    food3Des.textContent = "Plain old white rice, yum."

    const main = document.querySelector('.main')
    main.textContent = "";
    main.appendChild(food1)
    main.appendChild(food1Des)
    main.appendChild(food2)
    main.appendChild(food2Des)
    main.appendChild(food3)
    main.appendChild(food3Des)
    




    
  };

  export { menu };
 