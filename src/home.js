import { container } from "./inital";

const homePage = document.createElement('div');
const cafeDescription = document.createElement('div');
const cafeDescriptionContent = document.createElement('p');
const cafeDescriptionHeader = document.createElement('h2')
const homeImg = document.createElement('img');
homePage.setAttribute('id', 'home-page');
cafeDescriptionContent.textContent = 'Espresso drinks, worth every shot, made with locally roasted 100% Arabica beans. Serving French Crepes and Belgian Waffles all day. Enjoy the difference.'
cafeDescription.setAttribute('id', 'cafe-description');
cafeDescriptionHeader.textContent = 'Espresso, French Crepes, and Waffles'
cafeDescription.appendChild(cafeDescriptionHeader);
cafeDescription.appendChild(cafeDescriptionContent);
homeImg.src="http://www.tibaagan.com/wp-content/uploads/2015/10/1500-banner.jpg";
function createHomePage(){
    homePage.appendChild(homeImg);
    homePage.appendChild(cafeDescription);
    container.appendChild(homePage)
}
function hi(){
    console.log('hola');
}
export{createHomePage, hi}


