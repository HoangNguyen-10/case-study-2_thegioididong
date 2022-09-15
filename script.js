const addressbtn = document.querySelector('#address-form')
const addressclose = document.querySelector('#address-close')
let index = 0

//console.log(addressbtn)
addressbtn.addEventListener("click", function(){
    document.querySelector('.address-form').style.display = 'flex'
})
addressclose.addEventListener("click", function(){
    document.querySelector('.address-form').style.display = 'none'
})

//slider//
const rightbtn = document.querySelector('.fa-angles-right')
const leftbtn = document.querySelector('.fa-angles-left')
const imgNumber = document.querySelectorAll('.slider-content-left-top img')
// console.log (imgNumber.length)

rightbtn.addEventListener("click",function(){
    index = index+1
    if(index>imgNumber.length-1){
        index=0
    }
    document.querySelector(".slider-content-left-top").style.right = index * 100+"%"
})

leftbtn.addEventListener("click",function(){
    index = index-1
    if(index<0){
        index=imgNumber.length-1
    }
    document.querySelector(".slider-content-left-top").style.right = index * 100+"%"
})

//slide 1

const imgNumberLi = document.querySelectorAll('.slider-content-left-bottom li')


imgNumberLi.forEach(function(image,index){
    
    image.addEventListener("click",function(){
        removeactive()
    document.querySelector(".slider-content-left-top").style.right = index * 100+"%"
    image.classList.add("active")
    })
})

function  removeactive(){
    let imgactive = document.querySelector('.active')
    imgactive.classList.remove("active")
}

//slide-2

function imgAut(){
    index = index + 1
    if(index>imgNumber.length-1){
        index=0
    }
    removeactive()
    document.querySelector(".slider-content-left-top").style.right = index * 100+"%"
   imgNumberLi[index].classList.add("active")
    console.log(index)
}

setInterval(imgAut,4000)




