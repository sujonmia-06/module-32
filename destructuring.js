const fish = { id: 58, name: 'King Hilsha', price: 9000, phone: 8801234567890, address: 'Padma', dress: 'silver' };

// console.log(fish.phone);

// const phone = fish.phone;
// const address = fish.address;
// const price = fish.price;

const { name, phone, address, price, dress } = fish;


console.log(phone);
console.log(address, price);
console.log(name, dress);

const company = {
    name: 'Airtel',
    ceo: {
        id: 1,
        name: 'Elisha',
        food: 'seafood'
    },
    web: {
        work: 'website development',
        employees: 10,
        frameworks: 'React',
        tech: {
            first: 'html',
            second: 'css',
            third: 'javascript',
        },
    },
};

const { work, frameworks } = company.web;
const { food } = company.ceo;
const { first, second, third } = company.web.tech;

console.log(work, frameworks, food, first, second, third);
