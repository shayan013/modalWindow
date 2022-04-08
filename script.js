const button=document.querySelectorAll('.show-modal')
const modal=document.querySelector('.modal')
const btn=document.querySelector('.close-modal')
for(let i=0;i<button.length;i++){
button[i].addEventListener('click',function(){
modal.classList.remove('hidden')

})}

btn.addEventListener('click',function(){
    modal.classList.add('hidden')
})
document.addEventListener('keydown',function(e){

    console.log(e.key)
    if(e.key==='Escape'){
         modal.classList.add('hidden')
    }
})