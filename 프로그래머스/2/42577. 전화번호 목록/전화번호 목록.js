function solution(phone_book) {
    // 전화번호부를 사전순으로 정렬합니다.
    phone_book.sort();
    
    // 정렬된 전화번호부에서 각 번호를 바로 다음 번호와 비교합니다.
    for (let i = 0; i < phone_book.length - 1; i++) {
        // 현재 번호가 다음 번호의 접두사인지 확인합니다.
        if (phone_book[i + 1].startsWith(phone_book[i])) {
            return false;
        }
    }
    return true;
}
