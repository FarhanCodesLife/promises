

// let newpromise = new Promise((resolve,reject)=>{
//     if (0) {
//         resolve('your ok')

        
//     }
//     else{
//         reject("error a raha he ")
//     }
// })


// newpromise.then((res)=>{
//     console.log(res);
// }).catch((error)=>{
//     console.log('not ok');
//     console.error(error);
// })





// let marks = 33
// let result = new Promise((resolve,reject)=>{
//     if (marks>50) {
//         console.log("passed");
//         resolve()
        
//     }
//     else{
//         console.log('fail');
//         reject()
//     }
    
// })


// result
// .then(()=>{
//     console.log('achi bat he bach gay ho ap');
// })
// .catch(
//     ()=>{
//         console.log('ab dobara dena pepar');
//     }
// )

let renderitems = (element)=>{
    div.innerHTML+=''
    
div.innerHTML+=`
<img width="200" src="${element.image}" alt="image">
<h4>Title : ${element.title}</h4>
<h6>Dis..  :${element.description}</h6>
<h3>Price  :${element.price}</h6>
<h3>Price  :${element.id}</h6>
<h3>Price  :${element.rating.rate}</h6>

<hr>




`
    
}





let div = document.querySelector('div')


fetch('https://fakestoreapi.com/products')
.then((res)=>{
    return res.json()
})
.then((res)=>{
     product = res

    res.map((element)=>{
        renderitems(element)

    })

})
.catch((err)=>{
    console.error(err);
})














