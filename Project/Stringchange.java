import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;
class Stringchange
{
public static void main(String args[])
{
System.out.println("Enter the String :");
Scanner sn = new Scanner(System.in);
String str1 = sn.nextLine();
char[] ch1;
char temp = '/';
ch1 = str1.toCharArray();
System.out.println("Original Text: "+str1);
System.out.print("Modified Text: ");
for(int i=0;i<ch1.length-1;i++)
{
if(ch1[i] == ch1[i+1])
{ 
temp = ch1[i];
  ch1[i]= '#';
  ch1[i+1]= '@';
}
}
for(int i=0;i<ch1.length;i++)
{   if(temp == ch1[i])
   {
ch1[i]='#';
System.out.print(ch1[i]);
   }
else
{
       System.out.print(ch1[i]);
}
}
}
}

