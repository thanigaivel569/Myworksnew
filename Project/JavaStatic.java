class JavaStatic{
  
   static int var1=659; 
   String var2;

   public static void main(String args[])
   {
	JavaStatic ob1 = new JavaStatic();
	JavaStatic ob2 = new JavaStatic();
	
	ob1.var1=88;
	ob1.var2="This is Object1";
    ob2.var1=99;
	ob2.var2="this is Object2";
	System.out.println("ob1 integer:"+ob1.var1);
	System.out.println("ob1 String:"+ob1.var2);
	System.out.println("ob2 integer:"+ob2.var1);
	System.out.println("ob2 STring:"+ob2.var2);
   }
}