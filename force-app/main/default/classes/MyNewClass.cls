public with sharing class MyNewClass {
    
    @AuraEnabled(cacheable=true)
    public static List<Contact> fetchContacts(Id accountId) {
        // Check if accountId is not null before querying
        if (accountId != null) {
            // Query and return the contacts directly
            return [SELECT Id, FirstName, LastName, Email, Phone FROM Contact WHERE AccountId = :accountId];
        }
        // Return an empty list if accountId is null
        return new List<Contact>();
    }
}
