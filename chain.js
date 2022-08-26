const users = [
    { id: 12, name: 'sabul', job: 'doctor' }
]
// console.log(users[0].job);


const data = {
    count: 5000,
    data: [
        { id: 1, name: 'babul', job: 'leader' },
        { id: 2, name: 'abul', job: 'doctor' }
    ]
}
const firstPerson = data.data[0].name
// console.log(firstPerson);




const user = {
    id: 5001,
    name: 'Thomas alva edison',
    address: {
        street: {
            first: '35/A kochukhet lane',
            second: 'third floor',
            third: 'right side'
        },
        postOffice: 'cantonment',
        city: 'Dhaka'
    }
}

const userFloor = user.address?.steet?.second;
console.log(userFloor);