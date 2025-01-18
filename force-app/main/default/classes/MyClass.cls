public with sharing class MyClass {
    public MyClass() {
        system.debug('Welcome to this new class');
    }

    public void method1(){
        List<Integer>intList = new List<Integer>();
        for(Integer i=0;i<25;i++){
            intList.add(i);
        }
        system.debug(intList);
        for(Integer i:intList){
            system.debug(i);
        }

        for(Integer i=0;i<100;i++)
        List<Account>accList = [select Id from Account limit 1];
    }
}