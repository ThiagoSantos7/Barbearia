
const buttonService = document.querySelector('.buttonServices')
const buttonTwo = document.querySelector('.buttonServicesTwo')
const list = document.querySelector('.listCortes')
const buttonDomicilio = document.querySelector('.domicilio')
const formulario = document.querySelector('.formulario')
const mascara = document.querySelector('.mascara-formulario')
const ajuda = document.querySelector('.btn-sos')
const info = document.querySelector('.info')
const removerInfo = document.querySelector('.removerImg')
const mascaraInfo = document.querySelector('.mascara-sos')



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
                     <a href="${element.src}">
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


const visibleSos = () => {
    
    info.style.visibility = "visible"
    mascaraInfo.style.visibility = "visible"

}

const hiddenSos = () => {
    
    info.style.visibility = "hidden"
    mascaraInfo.style.visibility = "hidden"

}



removerInfo.addEventListener("click", hiddenSos)
ajuda.addEventListener("click", visibleSos)
mascara.addEventListener("click", esconderform)
buttonDomicilio.addEventListener("click", aparecerForm)
buttonService.addEventListener("click", hairCort) 