function bs(SciCal){
    n=SciCal.screen.value.length;
    SciCal.screen.value=SciCal.screen.value.substring(0,n-1);
}
function find(SciCal){
    /*SciCal.screen.value=SciCal.screen.value.replace("e^("/g,"Math.pow(Math.E,");*/
   let y=SciCal.screen.value;
    SciCal.screen.value=eval(SciCal.screen.value);
   let x=SciCal.screen.value;
    if(x[0]==='-'){i++;if(i===x.length){i++;}}
    for(d=0;i<x.length;i++){
    if('0'<=x[i]<='9' || (x[i]==='.' && ++d)){if(d<=1){continue;}
        else {break;}
    }
    else {break;}
    }
    if(x===y && i!=x.length){
        SciCal.screen.value="error";
    }
}