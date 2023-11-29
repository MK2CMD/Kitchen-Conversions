let lbsbtn = document.getElementById('lbs_oz');
let ozbtn = document.getElementById('oz_lbs');
let cupsbtn = document.getElementById('oz_cups');
let cozbtn = document.getElementById('cups_oz');
let gozbtn = document.getElementById('oz_gal');
let galbtn = document.getElementById('gal_oz');
let qtsbtn = document.getElementById('qts_gal');
let gqtbtn = document.getElementById('gal_qt');
let tbsCbtn = document.getElementById('Tbs_C');
let tbsbtn = document.getElementById('Tbs_tsp');
let tspbtn = document.getElementById('tsp_Tbs');
let Clrbtn = document.getElementById('Clr');
let x2btn = document.getElementById('x2');
let x3btn = document.getElementById('x3');


lbsbtn.addEventListener('click', function(){
    let input = document.getElementById('input').value;
    document.getElementById('output').value = input * 16 + ' ounces'})


ozbtn.addEventListener('click', function(){
    let input = document.getElementById('input').value;
    document.getElementById('output').value = input /16 +  ' pounds';
});

cupsbtn.addEventListener('click', function(){
    let input = document.getElementById('input').value;
    document.getElementById('output').value = input / 8 +  ' cups';
});

cozbtn.addEventListener('click', function(){
    let input = document.getElementById('input').value;
    document.getElementById('output').value = input * 8 +  ' ounces';
});

gozbtn.addEventListener('click', function(){
    let input = document.getElementById('input').value;
    document.getElementById('output').value = input / 128 +  ' gallons';
});

galbtn.addEventListener('click', function(){
    let input = document.getElementById('input').value;
    document.getElementById('output').value = input * 128 +  ' ounces';
});

gqtbtn.addEventListener('click', function(){
    let input = document.getElementById('input').value;
    document.getElementById('output').value = input * 4 +  ' quarts';
});

qtsbtn.addEventListener('click', function(){
    let input = document.getElementById('input').value;
    document.getElementById('output').value = input / 4 +  ' gallons';
});

tbsbtn.addEventListener('click', function(){
    let input = document.getElementById('input').value;
    document.getElementById('output').value = input * 3 +  ' teaspoons';
});

tspbtn.addEventListener('click', function(){
    let input = document.getElementById('input').value;
    document.getElementById('output').value = input / 3 +  ' tablespoons';
});

tbsCbtn.addEventListener('click', function(){
    let input = document.getElementById('input').value;
    document.getElementById('output').value = input / 16 +  ' cups';
});

Clrbtn.addEventListener('click', function(){
    let input = document.getElementById('input').value = '';
    document.getElementById('input').focus();
    document.getElementById('output').value = input;
});

x2btn.addEventListener('click', function(){
    let input = document.getElementById('input').value;
    document.getElementById('input').value = input * 2;
    /*let output = document.getElementById('output').value;
    document.getElementById('output').value = output * 2;*/
    
});

x3btn.addEventListener('click', function(){
    let input = document.getElementById('input').value;
    document.getElementById('input').value = input * 3;
    /*let output = document.getElementById('output').value;
    document.getElementById('output').value = output * 3;*/
});






    


