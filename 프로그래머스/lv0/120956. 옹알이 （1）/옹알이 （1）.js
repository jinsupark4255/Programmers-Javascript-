function solution(babbling) {
    return babbling.length-babbling.filter(item=> item.replace(/aya|ye|woo|ma/g,"")).length;
}