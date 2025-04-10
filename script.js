function _f(id){
    return document.getElementById(id);
}

let div = _f('services');
let btn = _f('btn')

btn.onclick = function(){
    if(div.style.height == '832px'){
        div.style.height = '432px';
    }else{
        div.style.height = '832px';
    }
    
    
    // if(div.className == 'cls'){
    //     div.className = '';
    //     btn.innerHTML = 'show more'
    // }else{
    //     div.className = 'cls';
    //     btn.innerHTML = 'show less'
    // }

}

let divv = document.querySelector('#project')
let btnn = document.querySelector('#btnn')

btnn.onclick= function (){
    if(divv.style.height=='1192px'){
        divv.style.height='692px';
    }else{
        divv.style.height='1192px';
    }
}