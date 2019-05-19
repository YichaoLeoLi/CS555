/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

 /*
Leo Li
On my honor, I have neither given nor received any unauthorized aid.

Description: The calculator is not yet fully functional, but this is the best I can do for now. It cannot do any decimals right now, not changing from positive to negative, not percentages, but it can do eveerything else. I don't think the css for this is going to show up nicely in xcode, but it works fine in a web browser. 

 */

$(document).ready(function(){

//beginning of jquery

var result = []; // this array stores the numbers that get entered into. For example, if I press '9' and then '5', the array is going to have [9, 5]
var result1; // this variable combines all the elements in the result and forms a number used for calculation. For example, if the array ois [9, 5], then is variable is going to be 95 as a number.
var result2 = []; //the first element of this array is the calculated result. 
var symbol_clicked = false;//a boolean indicating whether a symbol has been clicked before or not
var number_clicked = false;// a boolean indicating whether a number has been clicked before or not
var operation = [];//this array stores the operation that's entered, and it can store at most two variables.

//this function executes when a number is clicked
$(".number").click(function(){
    //$(".a0").append($(this).text());
    console.log(result);
    result.push($(this).text());//add the number that's being clicked to the array

    // if a number has been clicked before, that means the user is still entering a number, so just add an element to the array and change the display of the a0 class in html.
    if (number_clicked == true & symbol_clicked == false){
        result1 = result.join('');
        $(".a0").text(result1);
        console.log(result1);   
        result1 = parseInt(result1, 10);
        console.log(result1); 
    } else if(number_clicked == false & symbol_clicked == true){//if a symbol has been clicked before
        if (operation[operation.length-1]!='='){//if the last symbol in the array is not equal, meaning that the user didn't click equal sign
            if (result2.length == 0) {//if there is nothing in the result2 array
        result2.push(result1);
        console.log(result2);
        console.log(operation);
        result = [];
        result.push($(this).text());
        result1 = result.join('');
        $(".a0").text(result1);
        console.log(result1);   
        result1 = parseInt(result1, 10);
        console.log(result1);
    }else{
        result1 = result.join('');
        $(".a0").text(result1);
        console.log(result1);   
        result1 = parseInt(result1, 10);
        console.log(result1); 
    }
    }
    } else if(number_clicked == false & symbol_clicked == false){
        console.log(result);
        result1 = result.join('');
        $(".a0").text(result1);
        console.log(result1);   
        result1 = parseInt(result1, 10);
        console.log(result1);
    }
    number_clicked = true;
    symbol_clicked = false;
})

$(".symbol").click(function(){

    operation.push($(this).text());
    if(operation.length>2){
        operation.shift();
    }

//when something other than the equal sign is pressed, check if the length of the operation array is greater than one, meaning that an operation has been done before, and if there is, do the previous calculation; if there isn't, change the value of the symbol_clicked boolean.
    if (operation.length>1 & $(this).text()!='='){
            if (operation[0]=='+'){
            console.log(result1);
            console.log(result2[result2.length-1]);
            result1 = result1 + result2[result2.length-1];
            console.log(result1);
        }else if (operation[0]=='−'){
            result1 = result2[result2.length-1] - result1;
            console.log(result1);
        }else if (operation[0]=='×'){
            result1 = result1 * result2[result2.length-1];
            console.log(result1);
        }else if (operation[0]=='÷'){
            result1 = result2[result2.length-1] / result1;
            console.log(result1);
    }
    result2[0] = result1;
    $(".a0").text(result2[0]);
    symbol_clicked = true;
    number_clicked = false;
    result = [];
    }

//when the equal sign is pressed, do operations according to the operation sign that is entered before.
if ($(this).text()=='='){
    if (operation[0]=='+'){
            console.log(result1);
            console.log(result2[result2.length-1]);
            result1 = result1 + result2[result2.length-1];
            console.log(result1);
        }else if (operation[0]=='−'){
            result1 = result2[result2.length-1] - result1;
            console.log(result1);
        }else if (operation[0]=='×'){
            result1 = result1 * result2[result2.length-1];
            console.log(result1);
        }else if (operation[0]=='÷'){
            result1 = result2[result2.length-1] / result1;
            console.log(result1);
    }
    result2[0] = result1;
    $(".a0").text(result2[0]);
    symbol_clicked = false;
    number_clicked = false;
    result = [];
} else{


    symbol_clicked = true;
    number_clicked = false;
}
})

//this function executes when the "AC" button is clicked. this basically resets all the variables in the program. I haven't really done any "C" operations and I don't really know what's the difference between "C" and "AC"

$(".difference").click(function(){
    result = [];
    console.log(result);
    result1 = 0;
    result2 = [];
    symbol_clicked = false;
    number_clicked = false;
    operation = [];
    $(".a0").text(0);
})


//I basically copied the whole thing for numbers because I don't know how to select multiple things in html at once. This is only for number 0 and I did so because I put 0 in a different class as other numbers because then it would be easier to do css.
$(".bottomnumber1").click(function(){
    //$(".a0").append($(this).text());
    console.log(result);
    result.push($(this).text());
    if (number_clicked == true & symbol_clicked == false){
        result1 = result.join('');
        $(".a0").text(result1);
        console.log(result1);   
        result1 = parseInt(result1, 10);
        console.log(result1); 
    } else if(number_clicked == false & symbol_clicked == true){
        if (operation[operation.length-1]!='='){
            if (result2.length == 0) {
        result2.push(result1);
        console.log(result2);
        console.log(operation);
        result = [];
        result.push($(this).text());
        result1 = result.join('');
        $(".a0").text(result1);
        console.log(result1);   
        result1 = parseInt(result1, 10);
        console.log(result1);
    }else{
        result1 = result.join('');
        $(".a0").text(result1);
        console.log(result1);   
        result1 = parseInt(result1, 10);
        console.log(result1); 
    }
    }
    } else if(number_clicked == false & symbol_clicked == false){
        console.log(result);
        result1 = result.join('');
        $(".a0").text(result1);
        console.log(result1);   
        result1 = parseInt(result1, 10);
        console.log(result1);
    }
    number_clicked = true;
    symbol_clicked = false;
})




//end of jquery





 //beginning of the cordova stuff
var app = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {
        this.receivedEvent('deviceready');
    },

    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};

app.initialize();

//end of the cordova stuff


})