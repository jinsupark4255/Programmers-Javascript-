function solution(board, moves) {
    var answer = 0;
    let tmp=0;
    let newArr=[[]];
    let arr=[];
    // let arr1=[];
    // let arr2=[];
    // let arr3=[];
    // let arr4=[];
    // let arr5=[];
    
    for(let i =0;i<board.length;i++){
        newArr[i]=new Array();
        for(let j =0;j<board.length;j++){
            newArr[i].push(board[j][tmp]);
        }
        tmp++;
        // arr1.push(board[i][0]);
        // arr2.push(board[i][1]);
        // arr3.push(board[i][2]);
        // arr4.push(board[i][3]);
        // arr5.push(board[i][4]);
    }
    for(let i =0;i<newArr.length;i++){
        newArr[i]=newArr[i].reverse();   
    }
    for(let i =0;i<newArr.length;i++){
        newArr[i]=newArr[i].filter(index=>index!=0);
    }
    console.log(newArr);
    // arr1=arr1.reverse();
    // arr1=arr1.filter(word=>word!=0);
    // arr2=arr2.reverse();
    // arr2=arr2.filter(word=>word!=0);
    // arr3=arr3.reverse();
    // arr3=arr3.filter(word=>word!=0);
    // arr4=arr4.reverse();
    // arr4=arr4.filter(word=>word!=0);
    // arr5=arr5.reverse();
    // arr5=arr5.filter(word=>word!=0);
    
    for(let i =0;i<moves.length;i++){
        if(newArr[moves[i]-1].length==0)
            break;
        if(arr[arr.length-1]==newArr[moves[i]-1][newArr[moves[i]-1].length-1]){
            arr.pop();
            newArr[moves[i]-1].pop();
            answer+=2;
        }
        else{
            arr.push(newArr[moves[i]-1].pop());
        }
        
        
//         if(moves[i]==1){
//             if(arr1.length==0){
//                 break;
//             }
//             if(arr[arr.length-1]==arr1[arr1.length-1]){
//                 console.log("1번 경우");
//                 answer+=2;
//                 arr.pop();
//                 arr1.pop();
//             }
//             else{
//                 arr.push(arr1.pop());
//             }
            
//         }
//         if(moves[i]==2){
//             if(arr2.length==0)
//                 break;
//             if(arr[arr.length-1]==arr2[arr2.length-1]){
//                 console.log("2번 경우");
//                 answer+=2;
//                 arr.pop();
//                 arr2.pop();
//             }
//             else{
//                 arr.push(arr2.pop());
//             }
            
//         }
//         if(moves[i]==3){
//             if(arr3.length==0)
//                 break;
//             if(arr[arr.length-1]==arr3[arr3.length-1]){
//                 console.log("3번 경우");
//                 answer+=2;
//                 arr.pop();
//                 arr3.pop();
//             }
//             else{
//                 arr.push(arr3.pop());
//             }
            
//         }
//         if(moves[i]==4){
//             if(arr4.length==0)
//                 break;
//             if(arr[arr.length-1]==arr4[arr4.length-1]){
//                 console.log("4번 경우");
//                 answer+=2;
//                 arr.pop();
//                 arr4.pop();
//             }
//             else{
//                 arr.push(arr4.pop());
//             }
            
//         }
//         if(moves[i]==5){
//             if(arr5.length==0)
//                 break;
//             if(arr[arr.length-1]==arr5[arr5.length-1]){
//                 console.log("5번 경우");
//                 answer+=2;
//                 arr.pop();
//                 arr5.pop();
//             }
//             else{
//                 arr.push(arr5.pop());
//             }
            
//         }
    }
    //console.log(arr);
    
    return answer;
}