function solution(edges) {
    let map = new Map();
    for(let i =0;i<edges.length;i++){
        if(!map.has(edges[i][0])){
            map.set(edges[i][0],[1,0]);
        }else{
            map.set(edges[i][0],[map.get(edges[i][0])[0]+1,map.get(edges[i][0])[1]])
        }
        if(!map.has(edges[i][1])){
            map.set(edges[i][1],[0,1]);
        }else{
            map.set(edges[i][1],[map.get(edges[i][1])[0],map.get(edges[i][1])[1]+1])
        }
    }
    let arr = new Array(4).fill(0)
    map.forEach((value,key)=>{
        if(value[0]>=2&&value[1]===0){
            arr[0] = key;
        }
        else if(value[0]===0){
            arr[2]++;
        }
        else if(value[0]>=2&&value[1]>=2){
            arr[3]++;
        }
    })
    arr[1] = map.get(arr[0])[0] - arr[2] - arr[3];
    return [arr[0],arr[1],arr[2],arr[3]]

}