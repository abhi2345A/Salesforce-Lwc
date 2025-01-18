@isTest
public with sharing class UnitTest_MyClass {
    @IsTest
    static void testMethod1(){
        
        Test.startTest();
        MyClass c = new MyClass();
        c.method1();
        Test.stopTest();
        
    }
}
