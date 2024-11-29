const passwordBtn = document.querySelector('.btn');
const lengthValue = document.querySelector('.lengthValue');
const rangeBar = document.querySelector('.range');
const passwordBox = document.querySelector('#password');
const minusBtn = document.querySelector('#decrease');
const plusBtn = document.querySelector('#increase');
const copyBtn = document.querySelector('#copy');
const levelBar = document.querySelector('.container #level');
const upperSelect = document.querySelector('#upper');
const lowerSelect = document.querySelector('#lower');
const numberSelect = document.querySelector('#numbers');
const symbolSelect = document.querySelector('#symbols');




const upperCaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz';
const symbols = '!@#$%^&*()-_=+[]{};:<>.?/';
const numbers = '0123456789';
let allChars = upperCaseLetters + lowerCaseLetters  + numbers;


// when you increase/decrease the lengthBar, it will show in real time the value
rangeBar.addEventListener('input',()=>{
    lengthValue.textContent = rangeBar.value;
    
    generatePassword(); // real time password generator
});


const generatePassword = ()=>{
    let password = '';

    // switch the level text
    levelBar.classList.remove('hidden');
    levelBar.classList.add('visible');

    for(let i = 0; i<rangeBar.value; i++){
        const randomIndex = Math.floor(Math.random()*allChars.length);
        password += allChars[randomIndex];
    }
 passwordBox.value = password;
 
 if(rangeBar.value<6){
    if(rangeBar.value<6){
        levelBar.innerHTML = 'Weak';
        levelBar.style.color='rgb(153, 2, 2)';

    }}else if(rangeBar.value>=6 && rangeBar.value <12){
        levelBar.innerHTML = 'Normal';
        levelBar.style.color='orange';


    }else if(rangeBar.value>=12 && rangeBar.value<18){
        levelBar.innerHTML = 'Strong';
        levelBar.style.color='lightgreen';

    }else{

        levelBar.innerHTML = 'Really Strong';
        levelBar.style.color='green';
    }

    if( !upperSelect.checked && 
        !lowerSelect.checked&&
        !numberSelect.checked &&
        !symbolSelect.checked){
        passwordBox.value = 'Please select Characters for the password';
    };
    
    

};

passwordBtn.addEventListener('click',generatePassword);

let decreaseBtn = () => {
    rangeBar.value = parseInt(rangeBar.value) - 1; 
    lengthValue.textContent = rangeBar.value;
    generatePassword(); 
};

let increaseBtn = () => {
    rangeBar.value = parseInt(rangeBar.value) + 1; 
    lengthValue.textContent = rangeBar.value;
    generatePassword(); 
};



plusBtn.addEventListener('click',increaseBtn);
minusBtn.addEventListener('click',decreaseBtn);


// copy the password button

const copyPassword = () =>{
passwordBox.select();
document.execCommand('copy');
};

copyBtn.addEventListener('click', copyPassword);

//Characters used:

const replaceCharachters = (checkbox,charachter) =>{
    if (checkbox.checked) {
        allChars +=charachter;
        generatePassword();
    }
     else {
        allChars = allChars.replace(charachter,'');
        generatePassword();
    }
};

upperSelect.addEventListener('change', () => {
    replaceCharachters(upperSelect,upperCaseLetters);
});

lowerSelect.addEventListener('change', () => {
    replaceCharachters(lowerSelect,lowerCaseLetters);
});

numberSelect.addEventListener('change', () => {
    replaceCharachters(numberSelect,numbers);
});

symbolSelect.addEventListener('change', () => {
    replaceCharachters(symbolSelect,symbols);
});

// if all checkboxes are unselected

