function solution(strings, n) {
    
    strings=strings.sort(function(a,b){
        if(a[n]>b[n]){
            return 1;
        }
        else if(a[n]<b[n]){
            return -1;
        }
        else if(a[n]==b[n]){
            if(a>b){
                return 1;
            }
            else if(a<b){
                return -1;
            }
        }
    })
    
    return strings;
}