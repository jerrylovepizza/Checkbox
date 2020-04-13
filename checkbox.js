var q=[] ;
function checknum(obj){
    if(obj.checked){
        q.push(obj);
        if(q.length>2){
            let tmp=q.shift();
            tmp.checked=false;
        }
    }
}