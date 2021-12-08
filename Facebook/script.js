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
/*Mesmo código, porém só mudei os nomes para não gerar conflito*/ 
const ModalTwo = {
    open(){
       
         document.querySelector('.main-overlay.two')
         .classList
         .add('active')
    },
    close(){
        
        document.querySelector('.main-overlay.two')
         .classList
         .remove('active')
    }
}

const ModalThree = {
    open(){
        
         document.querySelector('.main-overlay.three')
         .classList
         .add('active')
    },
    close(){
        
        document.querySelector('.main-overlay.three')
         .classList
         .remove('active')
    }
}

/*Dark Mode */