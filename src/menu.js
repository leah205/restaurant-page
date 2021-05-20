const container = document.querySelector('#content');
const menuContainer = document.createElement('div');
menuContainer.setAttribute('id', 'menu-container');
function MakeMenuItem(price, name, url){
    const menuGroup = document.createElement('div');
    menuGroup.setAttribute('id', 'menu-group');
    const itemPhoto = document.createElement('img');
    const itemBtn = document.createElement('button');
    const itemName = document.createElement('p');
    const itemPrice = document.createElement('p');
    itemBtn.textContent = 'shop now';
    itemBtn.setAttribute('id', 'item-btn');
    itemPhoto.setAttribute('id', 'item-photo');
    itemName.setAttribute('id', 'item-name');
    itemPrice.setAttribute('id', 'item-price');
    itemPhoto.src = url;
    itemName.textContent = name;
    itemPrice.textContent = price;
    menuGroup.appendChild(itemPhoto);
    menuGroup.appendChild(itemName);
    menuGroup.appendChild(itemPrice);
    menuGroup.appendChild(itemBtn);
    menuContainer.appendChild(menuGroup);};
MakeMenuItem('$10-$12', 'savory french crepes', "https://www.cafeciboulette.com/uploads/1/2/7/2/127207554/s885776183456123287_p19_i1_w160.jpeg");
MakeMenuItem('$7.50-$9.00', 'sweet french crepes', 'https://www.cafeciboulette.com/uploads/1/2/7/2/127207554/s885776183456123287_p18_i3_w2560.jpeg');
MakeMenuItem( '$7.50 - $9.00', 'Belgian Waffles','https://www.cafeciboulette.com/uploads/1/2/7/2/127207554/s885776183456123287_p21_i1_w2560.jpeg');
MakeMenuItem('$7.75', 'Quiches', 'https://www.cafeciboulette.com/uploads/1/2/7/2/127207554/s885776183456123287_p38_i1_w2560.jpeg');
MakeMenuItem('$7.75', 'Paninis', 'https://www.cafeciboulette.com/uploads/1/2/7/2/127207554/s885776183456123287_p25_i1_w2560.jpeg');
MakeMenuItem('$2.75-$3.75 ','Caffe Americano','https://www.cafeciboulette.com/uploads/1/2/7/2/127207554/s885776183456123287_p40_i1_w2560.jpeg' );
MakeMenuItem('$3.25 - $4.75', 'Cafe Latte', 'https://www.cafeciboulette.com/uploads/1/2/7/2/127207554/s885776183456123287_p2_i2_w2560.jpeg');
MakeMenuItem('$3.50 - $5.00', 'Cafe Mocha', 'https://www.cafeciboulette.com/uploads/1/2/7/2/127207554/s885776183456123287_p26_i1_w1280.jpeg');
MakeMenuItem('$3.50 - $5.00', 'Hot Chocolate', 'https://www.cafeciboulette.com/uploads/1/2/7/2/127207554/s885776183456123287_p3_i2_w2560.jpeg');
MakeMenuItem('$3.50 - $5.00', 'Chai Latte', 'https://www.cafeciboulette.com/uploads/1/2/7/2/127207554/s885776183456123287_p6_i2_w1280.jpeg');
MakeMenuItem('$3.00 - $3.75', 'tea(infusion bag)', 'https://www.cafeciboulette.com/uploads/1/2/7/2/127207554/s885776183456123287_p4_i2_w1280.jpeg');
MakeMenuItem('$4.00', 'Almond Croissant', 'https://www.cafeciboulette.com/uploads/1/2/7/2/127207554/s885776183456123287_p7_i2_w2560.jpeg');
MakeMenuItem('$3.50', 'Blueberry Scone', 'https://www.cafeciboulette.com/uploads/1/2/7/2/127207554/s885776183456123287_p35_i1_w1280.jpeg');
MakeMenuItem('$3.50 - $4.75', 'Iced Drinks', 'https://www.cafeciboulette.com/uploads/1/2/7/2/127207554/s885776183456123287_p27_i1_w924.jpeg');
MakeMenuItem('$9.99', 'Roasted Coffee Beans', 'https://www.cafeciboulette.com/uploads/1/2/7/2/127207554/s885776183456123287_p60_i1_w5152.jpeg?width=2560')
function convertToId(name){
   
}



function createMenu(){
  container.appendChild(menuContainer)
}
export {createMenu}