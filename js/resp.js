burger = document.querySelector('.burger')
navbar = document.querySelector('.navbar')
navlist = document.querySelector('.nav-list')
rightnav = document.querySelector('.rightnav')



burger.addEventListener('click', ()=>{
rightnav.classList.toggle('v-class-resp');
navlist.classList.toggle('v-class-resp');
navbar.classList.toggle('h-nav-resp');
})
 
btn = document.querySelector('.btn')

btn.addEventListener('click', ()=>{
    location ='https://youtu.be/e0V2MYfHuoQ?feature=shared'
})

btn1 = document.querySelector('.btn1')

btn1.addEventListener('click', ()=>{
    location ='https://www.youtube.com/@Lazyy_Rise/videos'
})


navitem = document.querySelector('.nav-item')
navitem.addEventListener('click', ()=>{
    location ='#home'
})
navitem1 = document.querySelector('.nav-item1')
navitem1.addEventListener('click', ()=>{
    location ='#about'
})
navitem2 = document.querySelector('.nav-item2')
navitem2.addEventListener('click', ()=>{
    location ='#GTA'
})
navitem3 = document.querySelector('.nav-item3')
navitem3.addEventListener('click', ()=>{
    location ='#Downloading process'
})