$(document).ready(function(){

    let tekstit = ["<h1>Otsikko 1</h1>", "<h1>Otsikko 2</h1>", "<h1>Otsikko 3</h1>", "<h1>Otsikko 4</h1>", "<h1>Otsikko 5</h1>"];
    $(".harj5").append(tekstit);    

    
    //$(".harj5").on("click", function(){ $(this).css("color", "red")})
    $("h1").click(function(){ 
        let myColor = $(this).css("color");
        console.log(myColor);
        if(myColor == "rgb(0, 0, 0)"){
            $(this).css("color", "red")
        }else if(myColor == "rgb(255, 0, 0)"){
            $(this).css("color", "green")
        }else{
            $(this).hide()
        }
    })
    //$(".harj5").on("click", function(){ $(this).hide()})
    //$(".harj5").click(function(){ $(this).hide()})  
});

$(document).ready(function(){

    let tekstit = ["<h1>kuva 1</h1>", "<h1>kuva 2</h1>", "<h1>kuva 3</h1>", "<h1>kuva 4</h1>", "<h1>kuva 5</h1>"];
    $(".kohta2").append(tekstit);

    $(".kohta2").mouseover(function(){
        $(".kohta2").html("<img src='./rickroll.jpg'/>");
      });
      $(".kohta2").mouseout(function(){
        $(".kohta2").html(tekstit);
      });
});    


$('#Delta1').click(function () {
    var functions = ['btn1()', 'btn2()', 'btn3()', 'btn4()', 'btn5()', 'btn6()', 'btn7()', 'btn8()', 'btn9()', 'btn10()'];
    var div = document.getElementById('insertHere');
    var ctr = 1;
    for (var i in functions) {

        var btn = document.createElement('button');
        var txt = document.createTextNode(String(ctr));

        btn.appendChild(txt);
        btn.setAttribute('type', 'button');
        btn.setAttribute('onclick', functions[i]);
        btn.setAttribute('id', 'button' + ctr);
        div.appendChild(btn);
        ctr++;
    }
});

function btn1() {alert('button 1');}    
function btn2() {alert('button 2');}    
function btn3() {alert('button 3');}
function btn4() {alert('button 4');}
function btn5() {alert('button 5');}
function btn6() {alert('button 6');}
function btn7() {alert('button 7');}
function btn8() {alert('button 8');}
function btn9() {alert('button 9');}
function btn10() {alert('button 10');}



$form = $("<form></form>");

$form.append('<label for="email" name="email">Email</label><br>');
$form.append('<input type="email" value="email"><br>');


$form.append('<label for="number" nimber="email">phonenumber</label><br>');
$form.append('<input type="text" value="number"><br>');

$form.append('<input type="button" value="submit">');


$('body').append($form);
$("form").click(function(){ $($form).hide("")})