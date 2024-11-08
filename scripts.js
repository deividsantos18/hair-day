const today = new Date()

const year = today.getFullYear()
const month = String(today.getMonth() + 1).padStart(2, '0')
const day = String(today.getDate()).padStart(2, '0')

const formattedDate = `${year}-${month}-${day}`

const calendar = document.getElementById("data")
const form = document.querySelector("form")
const btn = document.querySelector("button")


// Impede que dias anteriores ao hoje sejam selecionados
calendar.setAttribute("min", formattedDate)

// Faz com que o dia de hoje apareça como padrão
calendar.value = formattedDate

form.onsubmit = (event) => {
    event.preventDefault()
    weekend()
    time()
}

function weekend() {
    const dataSelect = new Date(calendar.value)
    const dayWeekend = dataSelect.getUTCDay()

    if (dayWeekend === 0 || dayWeekend === 6) {
        alert("Não atendemos nos finais de semana.")
    } else {
        btn.classList.remove("desativado")
    }
}

function time() {
    const selectedTime = document.querySelector('input[name="horario"]:checked')

    if (selectedTime) {
        selectedTime.setAttribute("disabled", "true")
        selectedTime.classList.add("desativado")
    } else {
        alert("Por favor, selecione um horário")
    }

}