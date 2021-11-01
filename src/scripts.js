const list = document.getElementById('list')
const addButton = document.getElementById('add')

addButton.onclick = function () {
    const listElement = document.getElementById('listElement').value
    let newItem = `
    <div id='${listElement}'>
        <p>${listElement}</p>
        <button onclick="deleteItem(this)">Remove</button>
        <button onclick="updateItem(this)">Update</button>
        <input id="${listElement}Input">
    `
    list.innerHTML += newItem
}

function deleteItem(ele) {
    var parEle = ele.parentNode.id
    var delIt = document.getElementById(parEle)
    delIt.remove()
}

function updateItem (ele) {
    var parEleId = ele.parentNode.id
    var parEle = document.getElementById(parEleId)
    var upNm = document.getElementById(parEleId+"Input").value
    parEle.innerHTML = `
        <p>${upNm}</p>
        <button onclick="deleteItem(this)">Remove</button>
        <button onclick="updateItem(this)">Update</button>
        <input id="${upNm}Input">
    `
    parEle.id = upNm
}
