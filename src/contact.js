const contactPage = document.createElement('div');
const phoneNumber = document.createElement('p');
const email = document.createElement('p');
contactPage.setAttribute('id', 'contact-page');
phoneNumber.textContent = 'Call us at 305-282-8922';
email.textContent = 'Email us at coffeehouse@tasty.com'
contactPage.appendChild(phoneNumber);
contactPage.appendChild(email);
const container = document.querySelector('#content');
function createContactPage(){
    container.appendChild(contactPage)
};

export{createContactPage};