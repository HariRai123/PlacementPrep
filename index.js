const user={
    name:"Hari",
    address:{
        city:"Bangalore",
    }
}
// let deepCopy=JSON.parse(JSON.stringify(user));


let deepCopy={...user, name:"Ravi", address:{...user.address, city:"Mumbai"}}
// let shallowCopy={...user}

// let shallowCopy2=Object.assign({},user)

// shallowCopy.name="Ravi"
// shallowCopy.address.city="Mumbai"

// console.log(shallowCopy.address.city)

console.log(user)


