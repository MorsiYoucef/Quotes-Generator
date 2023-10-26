// Variable
let btn = document.querySelector('#button-area')
let quote = document.querySelector('.quotes')
let person = document.querySelector('.person')

const quotes = [
  {quote:'“I am not afraid of storms, for I am learning how to sail my ship.”'
  ,person:"Louisa May Alcott."}
  ,{quote:'“To choose doubt as a philosophy of life is akin to choosing immobility as a means of transportation”'
  ,person:"Yann Martel."}
  ,{quote:'“Tomorrow is always fresh, with no mistakes in yet.”'
  ,person:"Lucy Maud Montgomery."}
  ,{quote:'“Its the possibility of having a dream come true that makes life interesting.”'
  ,person:"André Aciman"}
  ,{quote:'“All we have to decide is what to do with the time that is given to us.”'
  ,person:"J.R.R. Tolkien."}
  ,{quote:'“In spite of everything I still believe that people are really good at heart.”'
  ,person:"Anne Frank."}
  ,{quote:'“What’s the point of having a voice if you’re gonna be silent in those moments you shouldn’t be?”'
  ,person:"Angie Thomas."}
  ,{quote:'“Nothing in the world is ever completely wrong. Even a stopped clock is right twice a day.”'
  ,person:" Paulo Coelho."}
  ,{quote:'“Just think happy thoughts and you’ll fly.”'
  ,person:"J.M. Barrie."}
]
btn.addEventListener('click',function(){
  let random = Math.floor(Math.random() * quotes.length)
  quote.innerText = quotes[random].quote
  person.innerText = quotes[random].person
})