const debounce = (func,delay=1000) => {
    let timeout
    return (...args) => {
        clearTimeout(timeout)
        timeout = setTimeout(()=>{
            func(...args)
        },delay)
    }
}

const debounceText = debounce((text)=>{console.log(text)})

debounceText("Hello")
setTimeout(()=>{
    debounceText("Hello")
},500)