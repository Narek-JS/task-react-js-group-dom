// օգտագործելով https://jsonplaceholder.typicode.com/todos hղումը ներբեռնեք todo list-ը և նկարեք էկրանին todo-ների title-ները։ 
// Title-ին սեղմելուց այն պետք է գույնը փոխի և կողքը իր id պետք է նկարվի
const wrapperTitleLists = document.querySelector('.wrapper-title-lists');
let oldIndex;

fetch('https://jsonplaceholder.typicode.com/todos').then(response => {
    render(response.json());
})

const activeList = (index) => {
    const wrapperList = document.querySelector(`.wrapper-list-${index}`);
    wrapperList.style.background = setBg()

    if(oldIndex !== undefined){
        const title = document.querySelector(`.wrapper-list-${oldIndex} .title`);
        const toodoId = document.querySelector(`.wrapper-list-${oldIndex} .toodo-id`); 
        title.classList.remove('actve-title');
        toodoId.classList.remove('actve-toodo-id');
    };
    const title = document.querySelector(`.wrapper-list-${index} .title`);
    const toodoId = document.querySelector(`.wrapper-list-${index} .toodo-id`);
    title.classList.add('actve-title');
    toodoId.classList.add('actve-toodo-id');

    oldIndex = index;
}
const changeColorToDefault = (index) => {
    const wrapperList = document.querySelector(`.wrapper-list-${index}`);
    wrapperList.style.background = '#FFFFFF';
};

function render(promis){
    promis.then(lists => {
        const titleLists = lists.map((toodo, index) => {
            return `
                <div 
                    class='wrapper-list wrapper-list-${index}' 
                    onclick='activeList(${index})'
                    ondblclick='changeColorToDefault(${index})'    
                >
                    <p class='title'>${toodo.title}</p>
                    <p class='toodo-id'>${toodo.id}</p>
                </div> `
        });
        wrapperTitleLists.insertAdjacentHTML('beforeend', titleLists.join(' '));
    })
};

// document.querySelector('body').addEventListener('dblclick', () => alert())

function setBg () {
    return "#" + Math.floor(Math.random()*16777215).toString(16);
  }


// document.body.style.backgroundColor = "#" + randomColor;
  