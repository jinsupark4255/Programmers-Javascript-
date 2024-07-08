function solution(n, wires) {
    let answer = Number.MAX_SAFE_INTEGER;
    const arr = [];
    for(let i =0;i<=n;i++){
        arr.push([]);
    }
    for(let wire of wires){
        let [start,end] = wire;
        arr[start].push(end);
        arr[end].push(start);
    }
    
    function bfs(start,end){
        let count = 0;
        let visited = [];
        for(let i =0;i<=n;i++){
            visited.push(false);
        }
        let queue = [start];
        visited[start] = true;
        while(queue.length){
            let index = queue.shift();
            arr[index].forEach((element)=>{
                if(element!==end&&!visited[element]){
                    visited[element] = true;
                    queue.push(element);
                }
            })
            count++;
        }
        return count;
    }
    wires.forEach((wire)=>{
        let [start,end] = wire;
        answer = Math.min(answer,Math.abs(bfs(start,end) - bfs(end,start)))
    })
    return answer;
}