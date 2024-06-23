function solution(m, n, board) {
    let arr = []
    //board를 하나씩 다 끊어서 배열로 다시 저장함. 게임판처럼 보이게
    for(let i =0;i<board.length;i++){
        arr.push(board[i].split('')) ;
    }
    
    //같은 그림이 없을 동안만 진행
    while(true){
        let arrZero = [];
        //4개가 같은 경우 시작 좌표를 arrZero에 push
        for(let i =0;i<m-1;i++){
            for(let j =0;j<=n-1;j++){
                if(arr[i][j]&&arr[i][j]===arr[i+1][j]&&arr[i][j]===arr[i][j+1]&&arr[i][j]===arr[i+1][j+1]){
                    arrZero.push([i,j]);
                }
            }
        }
        
        //arrZero 안에 있는 좌표 값을 비교하면서 근처 4개의 값을 0으로 바꿈.
        for(let i =0;i<arrZero.length;i++){
            const col = arrZero[i][0];
            const row = arrZero[i][1];
            arr[col][row] = 0;
            arr[col+1][row] = 0;
            arr[col][row+1] = 0;
            arr[col+1][row+1] = 0;
        }
        
        for(let i = m-1;i>=0;i--){
            //특정 열의 행 중에서 값이 0인 값이 하나라도 없으면 할 필요 없음
            if(!arr[i].some((value)=>value === 0)){
                continue;
            }
            for(let j = 0;j<n;j++){
                for(let k =i-1;k>=0 && arr[i][j]===0;k--){
                    if(arr[k][j]){//위에것이 0이 아닐때만 해야 함
                        arr[i][j] = arr[k][j]//위에걸 밑으로 보내기
                        arr[k][j] = 0;//위에건 0으로 만듦
                        break;//하나씩만 처리해야 해서 break 걸림
                    }
                }
            }
        }
        
        //이제 더 이상 같은 그림이 없는 경우
        if(arrZero.length === 0){
            let sum = 0;
            for(let i =0;i<arr.length;i++){
                for(let j =0;j<arr[i].length;j++){
                    if(arr[i][j]===0){
                        sum++;
                    }
                }
            }
            return sum;
        }
        
    }
   
    
    
}