import { component } from './pageLoad'
import { menu } from './menuLoad'
import { home } from './homeLoad'
import { contact } from './contactLoad'

component();

document.getElementById('tab1').addEventListener('click', () => {
    home();

})

document.getElementById('tab2').addEventListener('click', () => {
    menu();
    
})

document.getElementById('tab3').addEventListener('click', () => {
    contact();
    
})