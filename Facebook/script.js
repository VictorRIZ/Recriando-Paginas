/*Modal*/ 
const Modal = {
    open(){
        //Abrir o modal
        //Adicionar a class active ao modal
         document.querySelector('.main-overlay')
         .classList
         .add('active')
    },
    close(){
        // Fechar o modal
        // Remover a class active do modal
        document.querySelector('.main-overlay')
         .classList
         .remove('active')
    }
}