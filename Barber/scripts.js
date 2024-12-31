
const buttonService = document.querySelector('.buttonServices')
const buttonTwo = document.querySelector('.buttonServicesTwo')
const list = document.querySelector('.listCortes')
const buttonDomicilio = document.querySelector('.domicilio')
const formulario = document.querySelector('.formulario')
const mascara = document.querySelector('.mascara-formulario')


function formatCurrency(value) {
    const newValue = value.toLocaleString('pt-br', { style: 'currency', currency: 'BRL', });

    return newValue
}

const hairCort = () => {

    let myLi = ''

    haircut.forEach(element => {
        myLi +=
            `
               <li class="liCut">
                    <p class="pMain">${formatCurrency(element.name)}</p>
                     <a href="https://api.whatsapp.com/send?phone=5511985214062&text=Ol%C3%A1,%20gostaria%20de%20agendar%20um%20corte!">
                     <button class="buttonPrice">${formatCurrency(element.price)}</button></a>
                </li>
                 
            `

    });

    list.innerHTML = myLi

}


const aparecerForm = () => {
    mascara.style.visibility = "visible"
    formulario.style.left = "50%"
    formulario.style.transform = "translateX(-50%)"
}


const esconderform = () => {
    mascara.style.visibility = "hidden"
    formulario.style.left = "-320px"
    formulario.style.transform = "translateX(0)"
}




mascara.addEventListener("click", esconderform)
buttonDomicilio.addEventListener("click", aparecerForm)
buttonService.addEventListener("click", hairCort) 