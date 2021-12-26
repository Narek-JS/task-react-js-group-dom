const form = document.getElementById('form');
const nameInput = document.querySelector('.animal-name-input');
const typeInput = document.querySelector('.animal-type-input');
const listsWrapper = document.querySelector('.lists');
let oldIndex;
let state = [
    {
        name: 'owl',
        type: 'bird'
    },
    {
        name:'tarantula',
        type:"I don't know"
    }
];
const clearAfterSubmit = () => {
    listsWrapper.innerHTML = '';
    nameInput.value = '';
    typeInput.value = '';
}

const activeList = (index) => {
    if(oldIndex !== undefined){
        const animalName = document.querySelector(`.list-${oldIndex} .animal-name`);
        const animalType = document.querySelector(`.list-${oldIndex} .animal-type`); 
        animalName.classList.remove('actve-animal-name');
        animalType.classList.remove('actve-animal-type');
    };
    const animalName = document.querySelector(`.list-${index} .animal-name`);
    const animalType = document.querySelector(`.list-${index} .animal-type`);
    animalName.classList.add('actve-animal-name');
    animalType.classList.add('actve-animal-type');

    oldIndex = index;
}

const deleteList = (index) => {
    state = state.filter((item, i) => i !== index);
    render();
};

const createError = () => {
    const errorDiv = `
        <div class='wrapper-error'>
            <span class='error-massage'>No No No No</span>
        </div>
    `
    form.insertAdjacentHTML('beforeend', errorDiv);
};

const deleteErrorWindow = () => {
    const errorDiv = document.querySelector('.wrapper-error');
    errorDiv.remove()
};

const logSubmit = (event) => {
    event.preventDefault();
    const valuesInInput = nameInput.value.length > 4 && typeInput.value.length > 4 

    if(valuesInInput){
        state.push({
            name: nameInput.value,
            type: typeInput.value
        });
        render();
    }else{
        createError()
        setTimeout(deleteErrorWindow, 3000)
    }
};
 
function render (){
    clearAfterSubmit();
    const lists = state.map((list, index) => `
        <div 
            class='list list-${index}' 
            data-animal-type='${list.type}' 
            onclick='activeList(${index})'
        >
            <p class='delete-list' onclick='deleteList(${index})'>X</p>
            <p class='animal-name'>${list.name}</p>
            <p class='animal-type'>${list.type}</p>
        </div> `
    );

    listsWrapper.insertAdjacentHTML('beforeend', lists.join(' '));
};
render()


form.addEventListener('submit', logSubmit);



