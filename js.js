const list = document.getElementById('list')
const search = document.getElementById('search')
const bthSearh = document.getElementById('search-bth')
const bthModalO = document.getElementById('bth-modalOpen')
const bthModalC = document.getElementById('modal-close')
const overlay = document.getElementById('overlay')
const menu = document.getElementById('menu')
let activeTag = 1
const tags = [
    {
        id:1,
        title:'Все'
    },
    {
        id:2,
        title:'Идеи'
    },
    {
        id:3,
        title:'Личное'
    },
    {
        id:4,
        title:'Работа'
    }
]
const note = [
    {
        id:1,
        title:'Сдать отчёт',
        tag:4,
        apdateDate: new Date().toDateString()
    },
    {
        id:2,
        title:'Сделать днд поле битвы для днд',
        tag:4,
        apdateDate: new Date().toDateString()
    },
    {
        id:3,
        title:'Придумать дндн компаию',
        tag:4,
        apdateDate: new Date().toDateString()
    },
    {
        id:4,
        title:'Сделать всё в мудл оп анг.',
        tag:4,
        apdateDate: new Date().toDateString()
    }
]
search.addEventListener('keydown', function(event){
    if (event.key ==='Enter'|| event.keyCode === 13){
        event.preventDefault()
        bthSearh.click
    }
});

function createTag(tag){
    const element = document.createElement('li')
    element.classList.add('tagi')
}

function createNote(note){
    const element = document.createElement('div')
    element.classList.add("sidan")
    
    const title = document.createElement('span')
    title.innerText = note.title
    title.classList.add("h1")

    const date = document.createElement('span')
    date.classList.add("h2")
    date.innerText = new Date().toDateString()
    
    const tag = document.createElement('span')
    tag.classList.add("h3")
    tag.innerText = tags.find(obj => obj.id === note.tag).title

    element.appendChild(title)
    element.appendChild(date)
    element.appendChild(tag)
    return element
}
function getNotes(searchValue){
    const filteredNotes = notes.filter((i) => {
        return i.title.startsWith(searchValue)
    })
    return filteredNotes
}

function renderMenu(){
    for(let tag of tags){
        const element = createTag(tag)
        element.addEventListener("click",() =>{
            activeTag = tag.id
            render()
        })
        menu.appendChild(element)
    }
}

function render(){
    list.innerHTML=''
    let filtered=getNotes(search.value)

    if(activeTag !== 1){
        filtered=filtered.filter(i => i.tag === activeTag)
    }
    if (filtered.lenght === 0){
        list.innerText = 'Ничего не найдено  *~*'
        return
    }
    for (let i of filtered){
        const element = createNote(i)
        list.appendChild(element)
    }
}
function init(){
    renderMenu()
    render()
    bthSearh.addEventListener('click',render)
    bthModalO.addEventListener('click',()=>{
        overlay.classList.add('openM')
    })
}
init()
