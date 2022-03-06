// declare variable based on the name of an object property
const myObject = { x: 2, y: 50, z: 500, a: 25, b: 30 };

const { x, b } = myObject;
console.log(b);

// destructuring array
const [p, q] = [45, 33];
console.log(p, q);

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

console.log(company.web.tech.third);
console.log(company?.backend?.tech?.third);