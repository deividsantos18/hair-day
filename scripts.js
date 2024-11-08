const today = new Date()

const year = today.getFullYear()
const month = String(today.getMonth() + 1).padStart(2, '0')
const day = String(today.getDate()).padStart(2, '0')

const formattedDate = `${year}-${month}-${day}`

const calendar = document.getElementById("data")
const form = document.querySelector("form")
const btn = document.querySelector("button")
const txtPrimary = document.getElementsByClassName("principal")
const txtSecundary = document.getElementsByClassName("secundario")


// Impede que dias anteriores ao hoje sejam selecionados
calendar.setAttribute("min", formattedDate)

// Faz com que o dia de hoje apareça como padrão
calendar.value = formattedDate

form.onsubmit = (event) => {
    event.preventDefault()
    if (weekend() && time()) {
        txtPrimary[0].classList.add("ocultar")
        txtSecundary[0].classList.remove("ocultar")

    }
}

function weekend() {
    const dataSelect = new Date(calendar.value)
    const dayWeekend = dataSelect.getUTCDay()

    if (dayWeekend === 0 || dayWeekend === 6) {
        alert("Não atendemos nos finais de semana.")
        return false
    } else {
        return true
    }

}

function time() {
    const selectedTime = document.querySelector('input[name="horario"]:checked')

    if (selectedTime) {
        selectedTime.setAttribute("disabled", "true")
        selectedTime.classList.add("desativado")
        return true
    } else {
        alert("Por favor, selecione um horário")
        return false
    }

}