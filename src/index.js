
import {loadInitialPage, homeLink,contactLink,menuLink, } from './inital';
import{createContactPage} from './contact';
import{createHomePage} from './home';
import{createMenu} from './menu';
const container = document.querySelector('#content');
loadInitialPage();
createHomePage();
homeLink.addEventListener('click',() => {
    setForTabSwitch(container);
    createHomePage();
    homeLink.setAttribute('color', 'purple');
});
menuLink.addEventListener('click', () => {
    setForTabSwitch(container);
    createMenu();
});
contactLink.addEventListener('click', ()=>{
    setForTabSwitch(container);
    createContactPage();
})

function setForTabSwitch(container){
   while(container.firstElementChild){
       container.removeChild(container.firstElementChild)
   };
   loadInitialPage();
}

