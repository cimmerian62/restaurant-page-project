const contact =  function() {

    const tab1 = document.getElementById('tab1')
    const tab2 = document.getElementById('tab2')
    const tab3 = document.getElementById('tab3')
    tab1.classList = "";
    tab2.classList = "";
    tab3.classList.add('tabSelected');

    const contactBanner = document.createElement('div')
    contactBanner.classList.add('contactBanner')
    contactBanner.textContent = "Contact Us"

    const email = document.createElement('div')
    email.classList.add('contact')
    email.textContent = "JapaneseRestaurant@FancyRestaurant.com"
    const phone = document.createElement('div')
    phone.classList.add('contact')
    phone.textContent = "555-555-5555"
    const address = document.createElement('div')
    address.classList.add('contact')
    address.textContent = "77 Delicious Food Dr 65435"

    

    const main = document.querySelector('.main')
    main.textContent = "";
    main.appendChild(contactBanner)
    main.appendChild(email)
    main.appendChild(phone)
    main.appendChild(address)
    

    
  };

  export { contact };
 