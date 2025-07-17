/* 
    Throttle es el equivalente a poner un "cooldown" a una función.
*/

const throttle = (func,timeout) => {
    let inCooldown=false
    return (...args) => {
        // Si inCooldown es false...
        if(!inCooldown){
            func(...args)
            setTimeout(()=>{
                // Desactivar inCooldown cuando pase el tiempo definido...
                inCooldown=false
            },timeout);
        }
    }
}