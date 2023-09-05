
const { showBalance } = require('./object.js')


test("console log if there is not person", () =>{
    expect(showBalance()).toBe("Error, not valid person");
})

//console.log(showBalance(person)); //1000.5
it("return the balance", () => {
    const mockPerson = {
        name: {
          first: "Jane",
          middle: "",
          last: "Doe"
        },
        age: 30,
        isEmployed: true,
        address: {
          street: {
            line1: "",
            line2: ""
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
              number: ""
            },
            {
              type: "work",
              number: ""
            }
          ],
          email: ""
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
            accountNumber: "",
            balance: 1000.50
          },
          socialMedia: {
            twitter: "@johndoe",
            facebook: "john.doe.123"
          }
        }
      };
    expect(showBalance(mockPerson)).toBe(1000.5);
})