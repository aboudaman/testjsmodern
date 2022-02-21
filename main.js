// let element = document.querySelector('*');
// console.log(element)

// let elements = document.querySelectorAll('*');
// console.log(element)

// let h2 = document.querySelectorAll('h2')
// console.log(h2)
// let parent = document.getElementById('menu')
// let fChild = parent.firstElementChild
// let children = parent.children
// console.log(fChild)
// console.log(children)

// let content = document.getElementById('menu');
// console.log(content.firstElementChild);
let isLoading = true
let markCompleteButton
let allData = []
let allItems = document.querySelector('#alldata')
let submitButton = document.querySelector('#submit-button')

let newItemField = document.querySelector('.new-item')
let incompleteTasks = document.querySelector('.incomplete')
const body = document.querySelector('.container')
const page = document.querySelector('body')
const loader = document.querySelector('.loader')
let list = document.createElement('ul')
list.className = 'task-list'


fetch("https://jsonplaceholder.typicode.com/todos")
    .then(response => response.json())
    .then(data => {
        isLoading = false
        closeLoader()
       allData = [...data]
       render()
    })

function createLoader() {
    // let div = document.createElement('div')
    let p = document.createElement('p')
    p.textContent = 'Loading...'
    // loader.appendChild(p)
    return p
}
function showLoader() {
    const loaderContent = createLoader()
    loader.appendChild(loaderContent)
}

function closeLoader() {
    loader.innerHTML = ""
}

function handleAddNewItem() {
    const newItem =   {
        "userId": 1000,
        "id": 1002,
        "title": newItemField.value,
        "completed": false
      }
    const li = createListItem(newItem.title, newItem.completed)
    list.append(li)
    allItems.appendChild(list)
    allData.push(newItem)
}

// function changeTaskBackground(id) {
//     const task = document.getElementById(id)
//     task.style = 'background-color: orange;'

// }

function removeAllChildNodes(parent) {
    console.log(parent.firstChild)
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild)
    }
}

function handleMarkComplete(event) {
    // event.srcElement provides the button
    console.log(event.srcElement.innerText)
    // get the parent node of the button
    let listItem = event.srcElement.parentNode
    let listID = listItem.id
    updateListItem(listID)

    // render()
}

function updateListItem(iD) {
    // update the dom node corresponding to the iD by using replaceChild
    const existingItem = document.getElementById(iD)
    console.log(existingItem.parentNode)
    allData.forEach((data) => {
        if (data.id == iD) {
            data.completed =!data.completed
            const newItem = createListItem(data.title, data.completed, data.id)
            // list.appendChild(newItem)
            list.replaceChild(newItem, existingItem)
        }
    })
}

submitButton.addEventListener('click', handleAddNewItem)

function showData() {
    let incompletete = document.createElement('ul')
    // list.style.listStyleType = 'none'
    // list.style = "list-style: none; background-color: blue;"
    allData.forEach((data) => {
        // const button = createButton(data.completed, data.id, 'complete')
        const li = createListItem(data.title, data.completed, data.id)
        // li.appendChild(button)
        list.appendChild(li)
        // list.appendChild(span)
        // list.appendChild(button)
    })
    allItems.appendChild(list)
    // markCompleteButton  = document.querySelector('.task-list')
    // markCompleteButton.addEventListener('click', handleMarkComplete)
}

function createButton(text,id, className) {
    const button = document.createElement('button')
    button.innerHTML = (text)? 'completed':'Mark Complete'
    button.disabled = (text)? true : false
    // button.style = "background-color: green"
    button.className = className
    button.id = id
    return button
}

function removeOneNode(parent, child) {
    parent.removeChild(child)
}
function handleDelete(event) {
    const btnParent = event.srcElement.parentNode
    const ulParent =btnParent.parentNode
    removeOneNode(ulParent, btnParent)

    // console.log(ulParent)
    // console.log(btnParent)

    // const iD = event.srcElement.parentNode.id
    // const parent = eve
    // const existingItem = document.getElementById(iD)
    // console.log(existingItem.parentNode)
    // allData.forEach((data) => {
    //     if (data.id == iD) {
    //         data.completed =!data.completed
    //         const newItem = createListItem(data.title, data.completed, data.id)
    //         // list.appendChild(newItem)
    //         list.replaceChild(newItem, existingItem)
    //     }
    // })
}
function createListItem(title, completed, id) {
    const li = document.createElement('li')
    // Set an id attribute to the list item
    li.setAttribute('id', id)
    li.className = 'my-task'
    li.style = "list-style: none;"
    li.style.backgroundColor = (completed)? 'green' : 'red'
    let para =  document.createElement('p')
    para.innerText = title
    let button = document.createElement('button')
    let deleteButton = document.createElement('button')
    button.innerText = (completed)? 'Done' : 'Mark Completed'
    deleteButton.innerText = 'Delete'
    li.appendChild(para)
    li.appendChild(button)
    li.appendChild(deleteButton)
    button.addEventListener('click', handleMarkComplete)
    deleteButton.addEventListener('click', handleDelete)
    // li.innerHTML = `<div> <p> ${title} </p> <button> ${(completed)? 'Completed Task' : 'Mark Completed'} </button></div>`
    return li
}

function render() {
    removeAllChildNodes(list)
    // allItems.innerHTML = ""
    console.log('calling render!!!')
    if (isLoading) {
        showLoader()
    } else {
        showData()
    }
}

// render()