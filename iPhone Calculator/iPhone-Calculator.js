/*MADE BY YASH JANGID*/
var num = 0  
var Para = [] 
var Flag = 0
var string = '' 
var x = 0
var y = 1
var z = ''
/*ACCESING BUTTONS*/
var Display  = document.getElementById('Text')
var Sign     = document.getElementById('Sign')
var Equal    = document.getElementById('Equal')
var Point    = document.getElementById('Point')
var Per      = document.getElementById('Per')
var Add      = document.getElementById('Add')
var Sub      = document.getElementById('Sub')
var Mul      = document.getElementById('Mul')
var Divi     = document.getElementById('Divi')
var Zero     = document.getElementById('Zero')
var One      = document.getElementById('One')
var Two      = document.getElementById('Two')
var Three    = document.getElementById('Three')
var Four     = document.getElementById('Four')
var Five     = document.getElementById('Five')
var Six      = document.getElementById('Six')
var Seven    = document.getElementById('Seven')
var Eight    = document.getElementById('Eight')
var Nine     = document.getElementById('Nine')
/*CLICK EVENTS*/
Sign.addEventListener('click',()=>{
    if(num!=0){
        num = -num
        x = 1
        Display.textContent = num/y
    }
})
Equal.addEventListener('click',()=>{
    num /= y
   Para.push(num)
   Calculator()
})
Point.addEventListener('click',()=>{
    if(Flag==0){
   if(string.length > 0){
            Display.textContent = num
            string = ''
            z = ''}
    else{
        Display.textContent = `${num}.`
        string = String(num)}
    }})
Per.addEventListener('click',()=>{
    if(num != 0){
        if(string.length==0){
        if(Flag == 0){
        Display.textContent = `${num}%`
        num = num/100
        Flag++}
        else{
        num = num*100
        Display.textContent = `${num}`
        Flag--
        }
    }
    }
})
Add.addEventListener('click',()=>{
    Color('+')
    Add.style.backgroundColor = 'white'
    Add.style.color = 'orange'  
    num /= y
    Para.push(num,'+')
    Reset()
})
Sub.addEventListener('click',()=>{
    if(num != 0){
    Color('-')    
    Sub.style.backgroundColor = 'white'
    Sub.style.color = 'orange'
    num /= y
    Para.push(num,'-')
    Reset()
    }
})
Mul.addEventListener('click',()=>{
    if(num != 0){
    Color('*')    
    Mul.style.backgroundColor = 'white'
    Mul.style.color = 'orange'
    num /= y
    Para.push(num,'*')
    Reset()
    }
})
Divi.addEventListener('click',()=>{
    if(num != 0){
    Color('/')    
    Divi.style.backgroundColor = 'white'
    Divi.style.color = 'orange'
    num /= y
    Para.push(num,'/')
    Reset()
    }
})
Zero.addEventListener('click',()=>{
    num= num*10 + 0
    if(num == 0 && string.length == 0){
        Color()
        Display.textContent = num}
        else{
            Color()
            DISPLAY()
        }
})
One.addEventListener('click',()=>{
   number(1)
})
Two.addEventListener('click',()=>{
    number(2)
})
Three.addEventListener('click',()=>{
    number(3)
})
Four.addEventListener('click',()=>{
    number(4)
})
Five.addEventListener('click',()=>{
    number(5)
})
Six.addEventListener('click',()=>{
   number(6)
})
Seven.addEventListener('click',()=>{
    number(7)
})
Eight.addEventListener('click',()=>{
    number(8)
})
Nine.addEventListener('click',()=>{
    number(9)
})
/*KEYDOWN EVENTS*/
document.addEventListener('keydown', Key =>{
    switch(Key.key){
        case '=':{
            num /= y
            Para.push(num)
            Calculator()
            break
        }
        case 'Enter':{
            num /= y
            Para.push(num)
            Calculator()
            break
        }
        case '+':{
            if(num != 0){
                Color('+')
                num /= y
                Para.push(num,'+')
                Reset()
                }
                break
        }
        case '-':{
            if(num != 0){
                Color('-')
                num /= y
                Para.push(num,'-')
                Reset()
                }
                break
        }
        case '*':{
            if(num != 0){
                Color('*')
                num /= y
                Para.push(num,'*')
                Reset()
                }
                break
        }
        case '/':{
            if(num != 0){
                Color('/')
                num /= y
                Para.push(num,'/')
                Reset()
                }
                break
        }
        case '%':{
            if(num != 0){
                if(string.length==0){
                if(Flag == 0){
                Display.textContent = `${num}%`
                num = num/100
                Flag++}
                else{
                num = num*100
                Display.textContent = `${num}`
                Flag--
                }
            }
            }
            break
        }
        case '.':{
            if(Flag==0){
                if(string.length > 0){
                         Display.textContent = num
                         string = ''
                         z = ''}
                 else{
                     Display.textContent = `${num}.`
                     string = String(num)}
                 }
                break} 
        case '0':{
            num= num*10 + 0
            if(num == 0 && string.length == 0){
                Color()
            Display.textContent = num}
            else{
                Color()
                DISPLAY()
            }
            break
        }
        case '1':{
            number(1)
            break
        }
        case '2':{
           number(2)
            break
        }
        case '3':{
            number(3)
            break
        }
        case '4':{
            number(4)
            break
        }
        case '5':{
            number(5)
            break
        }
        case '6':{
            number(6)
            break
        }
        case '7':{
            number(7)
            break
        }
        case '8':{
            number(8)
            break
        }
        case '9':{
            number(9)
            break
        }
    }
})
/*TO DETERMINE THE COLOR*/
function Color(Char){
    switch(Char){
        case '+':{
             Add.style.backgroundColor = 'white'
    Add.style.color = 'orange'
    break
        }
        case '-':{
             Sub.style.backgroundColor = 'white'
            Sub.style.color = 'orange'
            break
        }
        case '*':{
             Mul.style.backgroundColor = 'white'
            Mul.style.color = 'orange'
            break
        }
        case '/':{
    Divi.style.backgroundColor = 'white'
    Divi.style.color = 'orange'
    break
        }
        default:{
            Add.style.backgroundColor = 'orange'
            Add.style.color = 'white'
            Sub.style.backgroundColor = 'orange'
            Sub.style.color = 'white'
            Mul.style.backgroundColor = 'orange'
            Mul.style.color = 'white'
            Divi.style.backgroundColor = 'orange'
            Divi.style.color = 'white'
        }
    }
}
/**/
function number(o){
    if(x==1) {num = Math.abs(num)}
    num= num*10 + Number(o)
    Color()
    DISPLAY()
    if(x==1){num = -num}
}
/*RESET TO DEFAULT*/
function Reset(){
    string = ''
    z = ''
    y = 1
    num= 0
    x = 0
}
/*FOR DISPLAY THE INPUT*/
function DISPLAY(){
    if(string.length > 0){
        let rem = Math.abs(num%10)
        z += rem
        y *= 10
        Display.textContent = `${string}.${z}`  
        return
    }
    Display.textContent = num  
}
/*MAIN FUNCTION OF CALCULATOR IT IS DOING OPERATIONS*/
function Calculator(){
    while(Para.length != 1){
    let Result
    switch(Para[1]){
        case '+':{
          Result = Para[0] + Para[2]
          if(Result<1){
            Result *=100
            Result= Math.round(Result)
             Result /=100
          }
          else{
              Result = (Result*100)/100 
          }
          for(j=0;j<=2;j++){
            Para.shift()
          }
          Para.unshift(Result) 
          break
        }
        case '-':{
           Result =Para[0] - Para[2]
           if(Result<1){
            Result *=100
            Result= Math.round(Result)
             Result /=100
           }
           else{
               Result = (Result*100)/100
           }
           for(j=0;j<=2;j++){
            Para.shift()
          }
          Para.unshift(Result)
          break
        }
        case '*':{
            Result = (Para[0] * Para[2])
            if(Result<1){
                Result *=100
                Result= Math.round(Result)
                 Result /=100
            }
            else{
                Result = (Result*100)/100
            }
            for(j=0;j<=2;j++){
                Para.shift()
              }
              Para.unshift(Result)
              break
        }
        case '/':{
            Result = Para[0] / Para[2]
            if(Result<1){
                Result *=100
               Result= Math.round(Result)
                Result /=100
            }
            else{
                Result = (Result*100)/100
            }
            for(j=0;j<=2;j++){
                Para.shift()
              }
              Para.unshift(Result)
              break
        }
    }
    }
    Display.textContent = Para[0]
    num = Para[0]
    Para = []
}