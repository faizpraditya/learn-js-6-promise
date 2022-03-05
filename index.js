// const janji = new Promise(function (resolve, reject) {
//     if (success) {
//         resolve(value)
//     } else {
//         reject(error)
//     }
// })

let username = 'admin'
let password = '1234'

function login(){
    let janji = new Promise((resolve,reject) => {
        let id = 1234
        setTimeout(() => {
            if (username === 'admin' && password === '1234') {
                resolve(id)
                // resolve("Login success!")
            } else {
                reject('Invalid username and password!')
            }
        }, 3000);
    })

    return janji
}

function validateLogin(id) {
    let validate = new Promise((resolve,reject) => {
        setTimeout(() => {
            if (id===1234) {
                resolve('Success Login!')
            } else {
                reject('Login Failed')
            }
        }, 2000);
    })

    return validate
}

// login()
// .then((id) => {
//     validateLogin(id)
//     .then((message) => {
//         console.log(message);
//     })
//     .catch((error) => {
//         console.log(error);
//     })
// })
// .catch((err) => {
//     console.log("error: ", err);
// })

// Async
// promise
//  await => mendapatkan value dari hasil promise

async function call() {
    try {
        // balikannya resolve atau reject???
        let res = await login()
        let res2 = await validateLogin(res)
        console.log(res2);
        // validateLogin(res)
    } catch (error) {
        // jika balikan diatas reject, maka masuk ke sini
        console.log(error);
        // validateLogin(res)
    }
}

call()