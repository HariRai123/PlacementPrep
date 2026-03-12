function deepcopy(obj)
{
    if(obj===null || typeof obj!== "object")
    {
        return obj;
    }
    let copy=Array.isArray(obj) ?[] :{};
    for(let key in obj)
    {
        copy[key]=deepcopy(obj[key])
    }
    return copy;
}

const user={
    name:"Hari",
    address:{
        city:"Hyd"
    }
}

const copy=deepcopy(user);

copy.address.city="Vizag"

console.log(user.address.city)
console.log(copy.address.city)