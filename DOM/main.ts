const btn = document.querySelector('#key') as HTMLButtonElement
btn.addEventListener('click',(e:Event)=>{
     const body = document.querySelector('body')!
     body.insertAdjacentHTML('beforeend','<div>chris</div>')
}
  
)