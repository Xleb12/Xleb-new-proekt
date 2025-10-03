const list = document.getElementById('list')
const search = document.getElementById('search')
const bthSearh = document.getElementById('search-bth')
const menu = document.getElementById('menu')
let activeTag = 1
const tags = [
    {
        id:1,
        title:'Все'
    }
    {
        id:2,
        title:'Идеи'
    }
    {
        id:3,
        title:'Личное'
    }
    {
        id:4,
        title:'Работа'
    }
]
const note = [
    {
        id:1,
        title:'Сдать отчёт'
        tag:4,
        apdateDate: new Date().toDateString()
    }
    {
        id:2,
        title:'Сделать днд поле битвы для днд'
        tag:4,
        apdateDate: new Date().toDateString()
    }
    {
        id:3,
        title:'Придумать дндн компаию'
        tag:4,
        apdateDate: new Date().toDateString()
    }
    {
        id:4,
        title:'Сделать всё в мудл оп анг.'
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

function createTag{
    const element = document
}