const div = document.querySelector('.logo-azul')
const elements = div.childNodes;
  elemets.forEach(element => {
    element.addEventListener('click', () => {
      window.location.href = '../screens/index.html'
    })  
  })               