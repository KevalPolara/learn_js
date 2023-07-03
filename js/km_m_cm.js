function conversion(){
    // console.log('ffffff');

    let x=document.getElementById("native").value;
    let y=parseInt(document.getElementById("value").value);
    let z=document.getElementById("destination").value;

    // console.log(x,y,z);

    let ans;

    switch(x){
        case 'km':
            if(z=='km'){
                ans=y;
                break;
            }else if(z=='m'){
                ans=y*1000;
                break;
            }else if(z=='cm'){
                ans=y*100000;
                break;
            }

        case 'm':
            if(z=='m'){
                ans=y;
                break;
            }else if(z=='km'){
                ans=y*0.001;
                break;
            }else if(z=='cm'){
                ans=y*100;
                break;
            }

        case 'cm':
            if(z=='cm'){
                ans=y;
                break;
            }else if(z=='km'){
                ans=y*0.00001;
                break;
            }else if(z=='m'){
                ans=y*0.01;
                break;
            }

        default:
             ans=('Invalid');
    }

    // if(x=='km' && z=='km' || x=='m' && z=='m' || x=='cm' && z=='cm'){
    //     ans=y;  
    // }else if(x=='km' && z=='m'){
    //     ans=y*1000;
    // }else if(x=='km' && z=='cm'){
    //     ans=y*100000;
    // }else if(x=='cm' && z=='km'){
    //     ans=y*0.00001;
    // }else if(x=='cm' && z=='m'){
    //     ans=y*0.01;
    // }else if(x=='m' && z=='km'){
    //     ans=y*0.001;
    // }else if(x=='m' && z=='cm'){
    //     ans=y*100;
    // }


//    if(x=='km' && z=='km'){
//      ans=y;
//    }else if(x=='km' && z=='m'){
//     ans=y*1000;
//    }else if(x=='km' && z=='cm'){
//     ans=y*100000;
//    }else if(x=='cm' && z=='cm'){
//     ans=y;
//    }else if(x=='cm' && z=='km'){
//     ans=y*0.00001;
//    }else if(x=='cm' &&z=='m'){
//     ans=y*0.01;
//    }else if(x=='m' &&z=='m'){
//     ans=y;
//    }else if(x=='m' && z=='km'){
//     ans=y*0.001;
//    }else if(x=='m' && z=='cm'){
//     ans=y*100;
//    }
//    console.log(ans);
   document.getElementById("valueone").innerHTML=ans;
   

    return false;
}