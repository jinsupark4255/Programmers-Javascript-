function solution(survey, choices) {
    var answer = '';
    
    let mbti={
        'R':0,
        'T':0,
        'C':0,
        'F':0,
        'J':0,
        'M':0,
        'A':0,
        'N':0
    }
    
    //1번 지표 : 라이언(R) / 튜브(T)
    //2번 지표 : 콘형(C) / 프로도(F)
    //3번 지표 : 제이지(J) / 무지(M)
    //4번 지표 : 어피치(A) / 네오(N)
    
    //첫 번째 비동의, 두 번째 동의
    
    // 1	매우 비동의
    // 2	비동의
    // 3	약간 비동의
    // 4	모르겠음
    // 5	약간 동의
    // 6	동의
    // 7	매우 동의
    
    for(let i =0;i<choices.length;i++){
        if(choices[i]==1){
            mbti[survey[i][0]]+=3;
        }
        if(choices[i]==2){
            mbti[survey[i][0]]+=2;
        }
        if(choices[i]==3){
            mbti[survey[i][0]]+=1;
        }
        if(choices[i]==5){
            mbti[survey[i][1]]+=1;
        }
        if(choices[i]==6){
            mbti[survey[i][1]]+=2;
        }
        if(choices[i]==7){
            mbti[survey[i][1]]+=3;
        }
    }
    console.log(mbti);

    if(mbti['R']>mbti['T']){
        answer+='R';
    }
    if(mbti['R']<mbti['T']){
        answer+='T';
    }
    if(mbti['R']==mbti['T']){
        answer+='R';
    }
    if(mbti['C']>mbti['F']){
        answer+='C';
    }
    if(mbti['C']<mbti['F']){
        answer+='F';
    }
    if(mbti['C']==mbti['F']){
        answer+='C';
    }
    if(mbti['J']>mbti['M']){
        answer+='J';
    }
    if(mbti['J']<mbti['M']){
        answer+='M';
    }
    if(mbti['J']==mbti['M']){
        answer+='J';
    }
    if(mbti['A']>mbti['N']){
        answer+='A';
    }
    if(mbti['A']<mbti['N']){
        answer+='N';
    }
    if(mbti['A']==mbti['N']){
        answer+='A';
    }
    
    return answer;
}