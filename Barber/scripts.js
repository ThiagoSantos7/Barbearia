
const buttonService = document.querySelector('.buttonServices')
const buttonTwo = document.querySelector('.buttonServicesTwo')
const list = document.querySelector('.listCortes')



function formatCurrency(value) {
    const newValue = value.toLocaleString('pt-br', { style: 'currency', currency: 'BRL', });

    return newValue
}

const hairCort = () => {

    let myLi = ''

    if (list.style.display === "none" ) {

        list.style.display = "grid"

        haircut.forEach(element => {
            myLi +=
                `
                    <li class="liCut">
                        <p class="pMain">${formatCurrency(element.name)}</p>
                         <a href="https://api.whatsapp.com/send?phone=5511985214062&text=Ol%C3%A1,%20gostaria%20de%20agendar%20um%20corte!"><button class="buttonPrice">${formatCurrency(element.price)}</button></a>
                    </li>
                    `
        });
    } else {

        list.style.display = "none"
    }


    list.innerHTML = myLi


}

buttonService.addEventListener("click", hairCort)