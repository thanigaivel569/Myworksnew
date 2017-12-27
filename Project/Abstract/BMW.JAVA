abstract class Car
{
 
   public abstract void model();
}

 class BMW extends Car
{

   public void model()
   {
	System.out.println("BMW i8");
   }
   public static void main(String args[])
   {
	Car obj = new BMW();
	obj.model();
   }
}