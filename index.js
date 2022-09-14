let checkElement= document.getElementById("check");
let genElement= document.getElementById("gen");

var specialChars = ["/","^","[","!","@","#","$","%","^","&","*","(",")","_","+","-","=","{" ,"}",";",":","|",".","<",">","?","*","$","/"];
var numbers =["1","2","3","4","5","6","7","8","9","0"]
var alphabets=['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
let charCount =0;
let numCount =0;
let checkOutputMessage;

document.querySelector(".trybut").addEventListener("click",()=>{
    location.reload();
})
document.querySelector(".trybutgen").addEventListener("click",()=>{
    location.reload();
})
////////////checker///////////////
document.querySelector(".buttonc").addEventListener("click",()=>{
    let userCheckInput = document.querySelector(".checkInput").value;
    console.log(userCheckInput)
    let col;
    if(userCheckInput.length==0){
        checkOutputMessage = `Please provide a Input or Check our Strong Password Generator`;
        document.getElementById("checker").style.backgroundColor="#FFC4C4";

    }
    else if (userCheckInput.length<8){
        checkOutputMessage = `"${userCheckInput}" is a Bad Password.Check our Strong Password Generator for more Strong Passwords`;
        document.getElementById("checker").style.backgroundColor="#FFC4C4";
    }
    else{
        for(let i=0;i<userCheckInput.length;i++){
            if(specialChars.includes(userCheckInput[i])){
                charCount++;
            }
            if(numbers.includes(userCheckInput[i])){
                numCount++;
            }
        }
        if (charCount>1&&numCount>1){
            checkOutputMessage = `"${userCheckInput}" is very strong Password`;
            document.getElementById("checker").style.backgroundColor="#B1D7B4";
      
        }
        else if (charCount>0&&numCount>0){
            checkOutputMessage = `"${userCheckInput}" is a Good Password`;
            document.getElementById("checker").style.backgroundColor="#B1D7B4";
    
        }
        else{
            checkOutputMessage = `"${userCheckInput}" is a Bad Password.Check our Strong Password Generator for more Strong Passwords`;
            document.getElementById("checker").style.backgroundColor="#FFC4C4";
        }

    }
    
    checkElement.classList.add("hidden");
    document.getElementById("rc").classList.remove("hidden");
    document.querySelector(".remarkText").innerHTML=checkOutputMessage;

})










////////////////////////generator////////////////////
document.querySelector(".buttong").addEventListener("click",()=>{
    let userKeyword = document.querySelector(".generateInput").value;
    let specialRandomNumber =Math.floor(Math.random() * 26);
    let numberRandomNumber=Math.floor(Math.random() * 11);
    let alphabetsRandonNumber=Math.floor(Math.random() * 26);
    let charp="";
    let nump="";
    let alpha="";
    let password="";
    for(let i =0;i<5;i++){
        specialRandomNumber =Math.floor(Math.random() * 25);
        numberRandomNumber=Math.floor(Math.random() * 10);
        alphabetsRandonNumber=Math.floor(Math.random() * 26);
        charp=charp+specialChars[specialRandomNumber]
        nump=nump+numbers[numberRandomNumber];
        alpha = alpha+alphabets[alphabetsRandonNumber]
    }
    if(userKeyword.length==0){
        password=alpha+nump+charp
    }
    else if(userKeyword.length<5){
        password=userKeyword+nump+charp

    }
    else{
        password=userKeyword+nump+charp[2]+charp[3]
    }
    document.getElementById("Generator").style.backgroundColor="#B1D7B4";
    const userOutput =`" ${password} " is your new Strong Password.Now you can check it with our PasswordStrength Checker`
    genElement.classList.add("hidden");
    document.getElementById("rg").classList.remove("hidden");
    document.querySelector(".remarkTextgen").innerHTML=userOutput;
})










