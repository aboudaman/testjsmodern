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
let allData = []
let allItems = document.querySelector('.alldata')
let submitButton = document.querySelector('#submit-button')
let newItemField = document.querySelector('.new-item')
let incompleteTasks = document.querySelector('.incomplete')
const body = document.querySelector('.container')
const page = document.querySelector('body')
const loader = document.querySelector('.loader')
let list = document.createElement('ul')


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

submitButton.addEventListener('click', handleAddNewItem)

function showData() {
    let incompletete = document.createElement('ul')
    // list.style.listStyleType = 'none'
    // list.style = "list-style: none; background-color: blue;"
    allData.forEach((data) => {
        const button = createButton('mark complete', data.id, 'complete')
        const span = document.createElement('span')
        span.appendChild(button)
        const li = createListItem(data.title, data.completed, data.id, span)
        list.appendChild(li)
        // list.appendChild(span)
        // list.appendChild(button)
    })
    allItems.appendChild(list)
}

function createButton(text,id, className) {
    const button = document.createElement('button')
    button.innerHTML = text
    // button.style = "background-color: green"
    button.className = className
    button.id = id
    return button
}

function createListItem(title, completed, id, markButton="") {
    console.log(markButton)
    const li = document.createElement('li')
    li.style = "list-style: none;"
    li.style.backgroundColor = (completed)? 'green' : 'red'
    li.innerHTML = `<h5> ${title}  <span> <button>geeee</button> </span></h5>`
    return li
}

function render() {
 
    if (isLoading) {
        showLoader()
    } else {

        showData()
    }
}
render()