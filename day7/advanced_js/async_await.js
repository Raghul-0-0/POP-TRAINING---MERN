// async function asAw(){
//     console.log("Hello");
// }

// async function asAw(){
//     var a = 15
//     setTimeout(function(){
//         console.log("hello");
//     }, 5000)
//     console.log(await a);
// }
// console.log(asAw());
// asAw().then((res) =>{
//     console.log(res);
// }).catch((res) => {
//     console.log("res");
// })

//console.log(await asAw());

//Instagram console Demo for post,like,comment,share

likeCode = ()=>{
    return new Promise((likePost) => {
        setTimeout(() => {
            createPost("Post liked succesfully")
        })
    }
)
}

async function postCode(){
    var post = new Promise((createPost, reject) =>{
        createPost("post created successfulyll!")
    })
    console.log(await post)
}

postCode()
