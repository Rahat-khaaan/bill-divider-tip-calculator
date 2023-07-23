const billInput = document.getElementById('billTotalInput')
const tipInput = document.getElementById('tipInput')
const numberOfPeopleDiv = document.getElementById('numberOfPeople')
const perPersonTotalDiv = document.getElementById('perPersonTotal')


let numberOfPeople = Number(numberOfPeopleDiv.innerText)

let calculateBill = () => {
    const bill = Number(billInput.value)


    const tipPercentage = Number(tipInput.value) / 100


    const tipAmount = bill * tipPercentage

    const finalTotal = tipAmount + bill

    let perPerson = finalTotal / numberOfPeople

    perPersonTotalDiv.innerText = `$${perPerson.toFixed(2)}`



}

const increasePeople = () => {

    numberOfPeople += 1
    console.log(numberOfPeople)


    numberOfPeopleDiv.innerText = numberOfPeople


    calculateBill()
}


const decreasePeople = () => {

    if (numberOfPeople <= 1) {
        return
    }
    numberOfPeople -= 1

    numberOfPeopleDiv.innerText = numberOfPeople


    calculateBill()
}