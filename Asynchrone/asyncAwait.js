const asyncExercise1 = async () => {
    console.log("Started execution...")
    await new Promise((resolve,reject)=>{
        console.log("Started first promise!")
        setTimeout(()=>{
            resolve(console.log("Finished first promise! (Waited 1.5s)"))
        },1500)
    })
    console.log("Continuing execution...")
}
asyncExercise1()