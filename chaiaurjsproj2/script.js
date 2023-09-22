// const button=document.querySelector('.button')
const form=document.querySelector('form')

form.addEventListener('submit',function(e){
    // const height=document.get
    e.preventDefault();
    const height=parseInt(document.querySelector('#height').value);
    const weight=parseInt(document.querySelector('#weight').value);
    const results=document.querySelector('#results');

    if (height<0||isNaN(height)||height==="") {
        results.innerHTML = `INVALID INPUT !!!!${height}`;
    }
    else if (weight<0||isNaN(weight)||weight==="") {
        results.innerHTML = `INVALID INPUYT WEIGHT!!!!${weight}`;
    }
    else
    {
        const ans=(weight / ((height * height) / 10000)).toFixed(2);
        results.innerHTML=`<span>${ans}</span>`;
        if(ans>24.9)
        {
            // results.innerHTML=`<span>  You are OVERWEIGHT!!!!!!</span>`;
            results.innerHTML=`<span>Your BMI is${ans}& You are OVERWEIGHT!!!!!!</span>`;
}
        else if (ans<18.6) {
        results.innerHTML=`<span>${ans}</span>`;

            results.innerHTML=`<span>Your BMI is${ans}& You are UNDERWEIGHT!!!!!!</span>`;
            
        }
        else if(ans>18.6&&ans<24.9){
            results.innerHTML=`<span>Your BMI is${ans}& You'r WEIGHT is NORMAL!!!!!!</span>`;
            
        }
    }
});

// const form = document.querySelector('form');
// this usecase will give you empty
// const height = parseInt(document.querySelector('#height').value)

// form.addEventListener('submit', function (e) {
//   e.preventDefault();

//   const height = parseInt(document.querySelector('#height').value);
//   const weight = parseInt(document.querySelector('#weight').value);
//   const results = document.querySelector('#results');

//   if (height === '' || height < 0 || isNaN(height)) {
//     results.innerHTML = `Please give a valid height ${height}`;
//   } else if (weight === '' || weight < 0 || isNaN(weight)) {
//     results.innerHTML = `Please give a valid weight ${weight}`;
//   } else {
//     const bmi = (weight / ((height * height) / 10000)).toFixed(2);
//     //show the result
//     results.innerHTML = `<span>${bmi}</span>`;
//   }
// });

