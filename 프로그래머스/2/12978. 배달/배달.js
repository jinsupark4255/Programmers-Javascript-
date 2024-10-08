function solution(N, road, K) {
  const graph = new Array(N + 1);
for (let i = 0; i < graph.length; i++) {
    graph[i] = [];
}


  let distance = Array.from({ length: N + 1 }, () => Infinity);

  let queue = [];
  for (let [a, b, c] of road) {
    graph[a].push([b, c]);
    graph[b].push([a, c]);
  }
 
  queue.push([1, 0]);
  distance[1] = 0;
  while (queue.length) {
    const [point, cost] = queue.shift();
    for (let i = 0; i < graph[point].length; i++) {
      const next = graph[point][i][0];
      const nextcost = graph[point][i][1];
      if (distance[next] > distance[point] + nextcost) {
        distance[next] = distance[point] + nextcost;
        queue.push([next, nextcost]);
      }
    }
  }
  distance = distance.filter((v) => v <= K);
  return distance.length;
}