var inputdata="";
var savedata="";
var mode="";


function setNum(number){
    if(number == "+/-"){   //누른게 +/- 라면
        inputdata*=-1; //양수,음수로 변환
    }else if(number=="." && inputdata=="") {
        inputdata="0.";
    }else{
        inputdata+=number;
    }
    document.getElementById("output").value = inputdata;
}

function setOperator(op){
    mode = op;
    savedata = inputdata;
    inputdata = "";
    document.getElementById("output").value = "";
}

function clearAll(){
inputdata = "";
savedata = "";
mode = "";
f1.reset();
}

function answer(){
    var n1 = parseFloat(inputdata);
    var n2 = parseFloat(savedata);
    
    switch(mode){	// 연산자에 따라 계산
    case "+" :	// 더하기
        inputdata = n2+n1;
        break;
    case "-" :	// 빼기
        inputdata = n2-n1;
        break;
    case "*" :	// 곱하기
        inputdata = n2*n1;
        break;
    case "/" :	// 나누기
        inputdata = n2/n1;
        break;
    
    }
    
    document.getElementById("output").value = inputdata;	// 답 출력
}