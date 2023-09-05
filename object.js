const person = {
    name: {
      first: "John",
      middle: "James",
      last: "Doe"
    },
    age: 30,
    isEmployed: true,
    address: {
      street: {
        line1: "123 Main St",
        line2: "Apt 4B"
      },
      city: "New York",
      state: "NY",
      postalCode: "10001",
      country: "USA"
    },
    contact: {
      phoneNumbers: [
        {
          type: "home",
          number: "212-555-1234"
        },
        {
          type: "work",
          number: "212-555-5678"
        }
      ],
      email: "johndoe@example.com"
    },
    hobbies: ["reading", "hiking", "photography"],
    family: {
      spouse: {
        name: "Jane Doe",
        age: 28
      },
      children: [
        {
          name: "Alice",
          age: 5
        },
        {
          name: "Bob",
          age: 3
        }
      ]
    },
    accounts: {
      bank: {
        name: "Generic Bank",
        accountNumber: "12345678",
        balance: 1000.50
      },
      socialMedia: {
        twitter: "@johndoe",
        facebook: "john.doe.123"
      }
    }
  };

const showBalance = (person) => {
    if(!person || typeof person !== "object"){
        return "Error, not valid person";
    } else {
        return person.accounts.bank.balance
    }
    
  }
  
/*
Total Family Members:

    Write a function getTotalFamilyMembers(person) that returns the total count of family members (including the person, their spouse, and children).

*/

module.exports = {showBalance } ;
