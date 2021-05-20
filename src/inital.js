import{hi} from './home'
const header = document.createElement('header');
const container = document.querySelector('#content');
const title = document.createElement('h1');
const navBar =document.createElement('ul');
const homeLink = document.createElement('li');
const contactLink = document.createElement('li');
const menuLink = document.createElement('li');
navBar.setAttribute('id', 'nav-bar');
function addTextContent(){
    homeLink.textContent = 'home';
    title.textContent = 'Coffee House';
    menuLink.textContent = 'menu';
    contactLink.textContent = 'contact us';
}
function createHeader(){
    addTextContent();
   container.appendChild(header);
   header.appendChild(title);
   header.appendChild(navBar);
   navBar.appendChild(homeLink);
   navBar.appendChild(menuLink);
   navBar.appendChild(contactLink);
   hi();
}

function sayHello(){console.log('world')}
export{loadInitialPage,homeLink,contactLink,menuLink, container,}

