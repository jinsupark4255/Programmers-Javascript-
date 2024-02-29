function solution(participant, completion) {
    let hashMap = new Map();

    // completion 배열의 요소를 맵에 추가 (키는 요소, 값은 0으로 시작)
    for (let i = 0; i < completion.length; i++) {
        hashMap.set(completion[i], (hashMap.get(completion[i]) || 0) + 1);
    }

    // participant 배열을 순회하며 맵에서 요소를 찾고, 카운트를 감소
    for (let i = 0; i < participant.length; i++) {
        if (hashMap.has(participant[i])) {
            hashMap.set(participant[i], hashMap.get(participant[i]) - 1);
            if (hashMap.get(participant[i]) === 0) {
                hashMap.delete(participant[i]);
            }
        } else {
            // 완주하지 못한 참가자를 찾음
            return participant[i];
        }
    }
}