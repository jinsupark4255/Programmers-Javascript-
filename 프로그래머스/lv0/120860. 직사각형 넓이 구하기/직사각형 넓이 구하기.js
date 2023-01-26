function solution(dots) {
    let a = dots[0][0];
    let b = dots[0][1];
    let width;
    let height;
    for(let i =0;i<dots.length;i++){
        if(a!==dots[i][0]){
            width = Math.abs(a-dots[i][0]);
        }
        if(b!==dots[i][1]){
            height = Math.abs(b-dots[i][1]);
        }
    }
    return width*height;
 
}