function solution(dots) {
    let arr = [];
    let incline;
    for(let i =0;i<dots.length;i++){
        for(let j =i+1;j<dots.length;j++){
            incline = (dots[i][1]-dots[j][1])/(dots[i][0]-dots[j][0]);
            if(arr.includes(incline)){
                return 1;
            }
            arr.push(incline);
        }
    }
    return 0
}