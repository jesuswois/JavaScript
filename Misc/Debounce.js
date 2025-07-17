/*
    Debounce retrasa la ejecución de una función por un tiempo determinado, al mismo
    tiempo haciendo que en caso de que se vuelva a llamar, se cancele la llamada 
    anterior.
*/
const debounce = (func,delay=1000) => {
    let timeout
    return (...args) => {
        // En este ambiente léxico la variable timeout se guarda entre llamadas
        clearTimeout(timeout)
        timeout = setTimeout(()=>{
            func(...args)
        },delay)
    }
}

const debounceText = debounce((text)=>{console.log(text)})

// Bye no se imprimira, pero Hello si.
debounceText("Bye")
setTimeout(()=>{
    debounceText("Hello")
},500)