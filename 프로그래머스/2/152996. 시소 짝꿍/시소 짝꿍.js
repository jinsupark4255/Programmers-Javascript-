function solution(weights) {
  let answer = 0;
  const map = new Map();
  
  // 1) 비율 case 
  const ratio = [1, 3 / 2, 2, 4 / 3];

  // 2) 큰 값부터 시소 짝궁이 가능한 값을 찾기 위해 내림차순 정렬
  weights.sort((a, b) => b - a).forEach(w => {
  
    // 3) 가능한 모든 비율을 적용하여 짝궁 찾고,
    // 짝궁을 찾으면 answer에 추가, 중복되는 짝궁의 개수만큼 추가한다.
    ratio.forEach(r => {if (map.has(w * r)) answer += map.get(w * r)});
    
    // 4) 중복되는 값만큼 추가하기 위해 중복 값 카운트
    map.set(w, (map.get(w) || 0) + 1);
  });

  return answer;
}