function solution(s) {
    if(s.length!==4&&s.length!==6) return false;
    return s.match(/\D/g)?false:true;
}