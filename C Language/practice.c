#include <stdio.h>
#include <math.h>
/*int main(){
    int a, b;
    printf("Enter a :");
    scanf("%d", &a);

    printf("Enter b :");
    scanf("%d", &b);

    printf("Sum is : %d", a + b);
    return 0;
}*/

/*int main(){

    int side;
    printf("Enter side :");
    scanf("%d", &side);
    
    printf("Area is : %d", side * side);
    return 0;
}*/

/*int main(){
    float pi = 3.14;
    float r;
    printf("Enter radius :");
    scanf("%f", &r);

    printf("Area = %f", pi*r*2);
    return 0;
}*/

/*int main(){
    int a = 5;
    int b = a;
    int c = b;
    printf("%d %d %d", a,b,c);
    return 0;
}*/

/*int main() {
    int a, b, c;
    a = 6;
    b = 7;
    c = 8;
    int sum = a+b+c;
    int sub = a-b-c;
    int mul = a*b*c;
    int div = a/b/c;
    int power = pow(a, 5);

    printf("%d %d %d %d %d", sum, sub, mul, div, power);
    return 0;
}*/

/*int main(){
    int n;
    printf("Enter a Number");
    scanf("%d", &n);

    printf("%d", (n>9)&&(n<=100));
}*/

/*int main(){
    int a, b, c;
    printf("Enter num 1 : ");
    scanf("%d", &a);

    printf("Enter num 2 : ");
    scanf("%d", &b);

    printf("Enter num 3 : ");
    scanf("%d", &c);

    printf("%d", (a+b+c)/3);
    return 0;
}*/

/*int main(){
    int a;
    printf("Enter day 1-7 : ");
    scanf("%d", &a);

    switch (a)
    {
    case 1:
        printf("Monday \n");
        break;
    case 2:
        printf("Tuesday \n");
        break;
        case 3:
        printf("Wednesday \n");
        break;
    case 4:
        printf("Thursday \n");
        break;
        case 5:
        printf("Friday \n");
        break;
    case 6:
        printf("Saturday \n");
        break;
    case 7:
        printf("Sunday \n");
        break;
    default:
        printf("Invalid day ");
        break;
    }
}*/

/*int main(){
    char ch;
    printf("Enter a letter : ");
    scanf("%c", &ch);

    if(ch >= 'A' && ch <= 'Z'){
        printf("Capital Letter");
    }
    else if(ch >= 'a' && ch <= 'z'){
        printf("Small Letter");
    }
    else{
        printf("Invalid");
    }
    return 0;
}*/

/*int main(){
    for(int i = 0; i <= 10; i+=1){
        printf("%d \n", i);
    }
    return 0;
}*/

// int main() {
//     int n, rev = 0, last_digit;
//     printf("Enter a Nuumber : ");
//     scanf("%d", &n);

//     while(n > 0){
//         last_digit = n % 10; 
//         rev = rev * 10 + last_digit; 
//         n = n/10;
//     }
//     printf("%d", rev);
//     return 0;
// }


int main(){
    int a;
    printf("Enter the Limit : ");
    scanf("%d", &a);
    for(int i = a-1; i>=1; i--){
        a -= i;
    }
    printf("%d", a);
    
    return 0;
}