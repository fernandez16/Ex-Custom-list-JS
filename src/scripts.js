const addButton = document.getElementById('add')

addButton.onclick = function () {
    var listElement = document.getElementById('listElement').value
    var newItem = `
    <div id='${listElement}'>
        <p>${listElement}</p>
        <button onclick="deleteItem(this)">Remove</button>
        <button onclick="updateItem(this)">Update</button>
        <input id="${listElement}Input">
    `
    list.innerHTML += newItem
}

function deleteItem(child) {
    var parEle = document.getElementById(child.parentNode.id)
    parEle.remove()
}

function updateItem (child) {
    var parEleId = child.parentNode.id
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
