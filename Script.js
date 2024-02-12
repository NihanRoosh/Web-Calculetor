function clickBf(val){
   
    document.getElementById("screen").value+=val

}
function ClearScreen(){
    document.getElementById("screen").value=""
}
function EqualClick(){
    var text=document.getElementById("screen").value
    var result=eval(text)
    document.getElementById("screen").value=result
}