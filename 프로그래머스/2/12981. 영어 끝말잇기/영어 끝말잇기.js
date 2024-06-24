function solution(n, words) {
    const seen = new Set(); // 이미 사용된 단어를 저장할 집합
    let prevWord = words[0];
    seen.add(prevWord);

    for (let i = 1; i < words.length; i++) {
        const currentWord = words[i];

        // 이미 사용된 단어이거나 끝말잇기 규칙 위반
        if (seen.has(currentWord) || prevWord[prevWord.length - 1] !== currentWord[0]) {
            return [(i % n) + 1, Math.floor(i / n) + 1];
        }

        seen.add(currentWord);
        prevWord = currentWord;
    }

    // 모든 단어가 규칙에 맞게 사용된 경우
    return [0, 0];
}
