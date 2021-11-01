const list = document.getElementById('list')
let addButton = document.getElementById('add')

addButton.onclick = function () {
    const listElement = document.getElementById('listElement').value
    let newItem = `
    <p id='${listElement}'>${listElement}</p>
    `
    list.innerHTML += newItem
}