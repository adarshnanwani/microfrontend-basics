import faker from 'faker';

const cardText = `<div>You have ${faker.datatype.number()} items in your cart</div>`;

document.querySelector('#dev-cart').innerHTML = cardText;
