// execution of an throttle fn from scartch 

function throttle(fn,limit)
{
    let lastExecution=0;
    return function(...args)
    {
        const now = Date.now();
        if(now-lastExecution>=limit)
        {
            fn.apply(this,args);
            lastExecution=now
        }
    }
}


const throttled =throttle((pos)=>{
    console.log(`Handler fired at position ${pos} ms`)
},200)

let t=0;
const interval=setInterval(()=>{
    throttled(t)
    t+=50;
    if(t>500) clearInterval(interval)
},50)

//scroll handler 
// const handleScroll=throttle(()=>{
//     const scrollY=window.scrollY
//     console.log(`scroll position `,scrollY)
// },200)

// window.addEventListener('scroll',handleScroll)