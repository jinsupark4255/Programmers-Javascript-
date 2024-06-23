function solution(str1, str2) {
    let arr1 = [];
    let arr2 = [];
    for(let i =0;i<str1.length-1;i++){
        if(str1[i].match(/[a-zA-Z]/g)&&str1[i+1].match(/[a-zA-Z]/g)){
            arr1.push(str1[i]+str1[i+1])
        }
    }
    for(let i =0;i<str2.length-1;i++){
        if(str2[i].match(/[a-zA-Z]/g)&&str2[i+1].match(/[a-zA-Z]/g)){
            arr2.push(str2[i]+str2[i+1])
        }
    }
    for(let i =0;i<arr1.length;i++){
        arr1[i] = arr1[i].toUpperCase();
    }
    for(let i = 0;i<arr2.length;i++){
        arr2[i] = arr2[i].toUpperCase();
    }
    let map1 = new Map();
    let map2 = new Map();
    for(let i =0;i<arr1.length;i++){
        if(map1.has(arr1[i])){
            map1.set(arr1[i],map1.get(arr1[i])+1)
        }else{
            map1.set(arr1[i],1)
        }
    }
    for(let i =0;i<arr2.length;i++){
        if(map2.has(arr2[i])){
            map2.set(arr2[i],map2.get(arr2[i])+1)
        }else{
            map2.set(arr2[i],1)
        }
    }
    console.log(map1);
    console.log(map2);
    let min=0;
    let sum = 0;
    map1.forEach((value,key)=>{
        sum+=map1.get(key);
        if(map2.has(key)){
            if(map1.get(key)>map2.get(key)){
                min+=map2.get(key)
            }else{
                min+=map1.get(key)
            }
        }
    })
    map2.forEach((value,key)=>{
        sum+=map2.get(key);
    })
    console.log(min);
    console.log(sum - min);
    if(min===0&&sum-min===0){
        return 65536;
    }else{
        return parseInt(min/(sum-min)*65536)
    }
}