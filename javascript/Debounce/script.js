// debouncing function
function debounce(fn,delay){
    let timer;
    return function(...args)
    {
        clearTimeout(timer);
        timer=setTimeout(()=>fn.apply(this,args),delay)
    }
}

// test 

let callCount=0;
const debouncedFn=debounce(()=>{
    callCount++;
    console.log((`Called ${callCount} time(s) -fired at `,new Date().toISOString))
},300)

debouncedFn() //cancelled
debouncedFn() //cancelled
debouncedFn() //cancelled
debouncedFn()

//for searching inputs in a input box
const searchdebounced=debounce(query=>{
    console.log(`API : searching for ${query}`)
},500)