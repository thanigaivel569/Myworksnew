
class Alphdiamond
{
public static void main(String[] args) 
{
int i, j, k,a=65;
for(i=1;i<=4;i++)
 {
for(j=i;j<4;j++)
{
System.out.print(" ");
}
for(k=1;k<(i*2);k++)
{
System.out.print((char)a++);
}
System.out.println();
}
for(i=3;i>=1;i--)
{
for(j=4;j>i;j--)
{
System.out.print(" ");
}
for(k=1;k<(i*2);k++)
{
System.out.print((char)a++);
}
System.out.println();
}
}
}