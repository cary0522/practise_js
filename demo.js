var title = document.getElementById("title");
var text = document.getElementById("text");
var btn = document.getElementById("btn");
var feedback = document.getElementById("feedback");

btn.addEventListener("click",function(){
    feedback.innerHTML = feedback.innerHTML + `
    <div>
        <h6>${title.value}</h6>
        <p>${text.value}</p>
    </div>
    `;
    title.value="";
    text.value="";
})

// var anytime_book = document.getElementsByClassName("anytime_book");
// anytime_book.addEventListener("click",function(){
//     prompt("請輸入姓名");
//     prompt("請輸入gmail帳號");
//     alert("預約完成");
//     anytime_book.style.color = "red";
// })

// for(var i = 1; i<10 ; i++){
//     document.write(i);
//     document.write("<br/>");
// }

// var i=1;
// while(i<=9){
//     document.write(i);
//     i++;
// }

function print(n){
    for( var i =0 ; i <n ;i++){
        document.write(i+1);
    }
}
print(3);

function star(n){
    var star = "";
    for(var i=0 ; i<n ; i++){
        star = star + "*";
    }
    document.write("<br/>");
    document.write(star);
}

star(4);

function starReturn(n){
    var starReturn = "";
    for (i=0 ; i<n ; i++){
        starReturn = starReturn + "*";
    }
    // return(starReturn);
    document.write("<br/>");
    document.write(starReturn);
}
starReturn(2);
 
function isUpperCase(str){
    if (str[3] >="a" && str[3] <= "z"){
        return true;
    } else{
        return false;
    }
}

document.write(isUpperCase("AAEErrr"));

function position(str){
    for(var i = 0 ; i <= str.length ; i++){
        if (str[i] >= "A" && str [i] <= "Z"){
            return (str[i] + i);
        }
    }
    return (-1);
    // return要寫在外面，以免跑第一個字母不符合大寫，即以-1結束程式碼
}
document.write(position("aaaaaaacD"));

// var arr = [2,4,5,6,7,8,9,20,40,300];
// var arr2 = arr.filter(function(value,arr){
//     return value >= 10;
// });
// document.write(arr2);

// function findSmallCount(arr,n){
//     return arr.filter(function(value,arr){
//         return value < n ;
//     }).length
//     // 可得數量而非陣列
// }

// document.write(findSmallCount([2,3,4,5,6,7,8,9],10));

// function tatol(arr,n){
//     var sum = 0;
//     // 需設定為數字，而非字串，後續才能相加
//     for (var i = 0 ; i <= arr.length ; i++){
//         if(arr[i] < n ){
//             sum = sum + arr[i];
//         }
//     }return(sum);
// }
// document.write(tatol([2,3,4,5,6,7,8],4));

// function findAllSmall(arr,n){
//     return arr.filter(function(value,arr){
//         return value < n ;
//     })
// }
// document.write(findAllSmall([2,3,5,6,7,8],6));

function sum (arr){
    var all = 0;
    for (var i = 0 ; i < arr.length ; i++){
        all = all + arr[i];
    }return all;
}

document.write(sum([2,3,4,5,6]));


function stars(n){
    var star = "";
    for (var i = 0 ; i < n ; i++){
        star = star + "*"
    }
    document.write(star);
    document.write("<br/>");
}

star(4);

function two_Sum(arr){
    
    for (var i=0 ; i<arr.length ; i++){
        var one = 5-arr[i];
        for (var j=i+1 ; j < arr.length ; j++){
            if( arr[j] == one){
                return ([i,j]);
            }
        }
        }
    }
document.write(two_Sum([2,3,4,5]));


function many_star(n){
    var star = "";
    for (var i = 0; i < n ; i++){
        for (var j=0 ; j <=i ; j++){
            star = star + "*";
        }
    }document.write(star);
    document.write("<br/>");
}
many_star(0);

 

function makeStars (n){
    var starArr = [];
    var star = "";
    for (var i=0 ; i<n ; i++){
        star = star + "*";
        starArr.push(star);
    }return starArr.join("//n");
}
makeStars(2);



function star(i){
    var result = "";
    for (var j = 1 ; j <= i ; j++){
        result = result + "*";
    }return result;
    // 先設定一個製造＊的函式，且Ｊ可以製造出多層的效果
}
function stars(n){
    for(var i=1 ; i<=n ; i++){
        document.write(star(i));
    }
    // 定義i，並控制要跑幾次製造＊的函式
    for(var i = n-1 ; i >0 ; i--){
        document.write(star(i));
    }
    // 製造遞減的＊
}
stars(0);

function makeStar(n){
    var arr=["x",];
    var star="";
    for(var i = 1 ; i<=n ; i++){
        star = star + "*";
        arr.push(star);
    }  
    // for(var i=n-1;i>0;i--){
    //     arr.push(arr[i-1]);
    // }
    document.write(arr.join("</br>"));
}
makeStar(2);


// function table(n){
//     for(var i=1 ; i<=9 ; i++){
//         document.write(n + "*" + i + "=" + n*i );
//         document.write("</br>");
//     }
// }
// table(3);

// function nice(){
//     for(var i = 1 ; i <= 9 ; i++){
//         for(var j = 1; j<= 9 ; j++){
//             document.write(i + "*" + j + "=" + i*j);
//             document.write("</br>");
//         }
//     }
// }
// nice();


function fib(n){
    if(n===0){
        return 0;
    }
    else if (n===1){
        return 1;
    }
    else{
        return fib(n-1)+fib(n-2);
    }
}
document.write(fib(8));

function fib(n){
    var fibArr = [0,1];
    for(var i=2 ; i <=n ; i++){
    fibArr[i]=fibArr[i-1]+fibArr[i-2];
    fibArr.push(fibArr[i]);
    }
    return fibArr[n];
}

document.write(fib(5));

function mini(str){
    var one = "" ;
    for (var i=str.length-1 ; i >=0 ; i--){
        one = one + str[i];
    }    
    return one;
}
console.log(mini("asdfgb"));

function miniArr(arr){
    var min = arr[0];
    for (var i = 1 ; i < arr.length ; i++){
        // 假定陣列中第一個數最小，若後續有比較到更小的，替換最小的數值
        if(min > arr[i]){
            min = arr[i];
        }
    }
    return min;
}
console.log(miniArr([11,22,3,1,5,6,7]));

var arr = [4,63,7,8,94,41];
var newArr = arr.sort();
// (function(a,b){
//     return a-b;
// });

console.log(newArr);

function findMy(arr , n){
    var newArr = arr.sort(function(a,b){
        return a-b;
    });
    return arr , newArr[n-1];
}

console.log(findMy([3,6,82,35,7,37,9,5],2));

function hey(str){
    var manyNumber = "";
    for(var i = 0 ; i < str.length ; i++){
        if(str[i] >= "A" && str[i] <= "Z"){
            manyNumber += str[i].toLowerCase();
        }else if (str[i] >= "a" && str[i] <= "z"){
            manyNumber += str[i].toUpperCase();
        }else{
            manyNumber += str[i];
        }
    }
    return manyNumber;
}

console.log(hey("AAAAbcde"));

