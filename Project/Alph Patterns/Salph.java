class Salph
{
public static void main(String[] args) 
{
int i,j,k , A=65;
for(i=1; i<=5; i++)
{
for(j=4; j>=i; j--)
{
System.out.print(" ");
}
for(k=1; k<=(2*i-1); k++)
{
System.out.print((char)A++);
}
System.out.println("");
}
}
}