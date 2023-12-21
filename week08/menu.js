// Menu Contacts

//class Contact
    //First Name
    //Last Name
    //Phone number
    //email

class Contact{
    constructor(firstName, lastName, phone, email){
        this.firstName = firstName;
        this.lastName = lastName;
        this.phone = phone;
        this.email = email;
    }
}

//class Menu
    //contacts array

    //see a menu
    //add a contact
    //delete contact
    //view contact

    //start the menu

class Menu {
    constructor(){
        this.contacts = []; //instantiate array of contacts
        this.selectedContact = null;
    }

    start(){
        let selection = this.showMainMenuOptions();
        while (selection != 0){
            switch (selection){
                case '1':
                    this.addContact();
                    break;
                case '2':
                    this.viewContact();
                    break;
                case '3':
                    this.deleteContact();
                    break;
                case '4':
                    this.displayAllContacts();
                default:
                    selection = 0;
            }
        selection = this.showMainMenuOptions();
        }
        alert('Exiting the menu. Goodbye!');
    }

    showMainMenuOptions(){
        return prompt(`
        0) exit
        1) create contact
        2) view contact
        3) delete contact
        4) display all contacts
        `);
    }

    viewContact(){
        let index = prompt("enter the index of contact you want to view:");
        if(index > -1 && index < this.contacts.length){
            this.selectedContact = this.contacts[index];
            let description = "Contact Name: " + this.selectedContact.firstName + " " + this.selectedContact.lastName
            + "\nPhone Number: " + this.selectedContact.phone 
            + "\nEmail: " + this.selectedContact.email;
            alert(description);
        }
    }

    //add contacts
    //prompt for name, phone and email
    //create contact and push into array
    addContact(){
        let firstName = prompt("Enter first name:");
        let lastName = prompt("Enter last name:");
        let phone = prompt("Enter phone number:");
        let email = prompt("Enter email:");
        this.contacts.push(new Contact(firstName, lastName, phone, email));
    }

    deleteContact(){
        let index = prompt('Enter the index of the contact you wish to delete: ');
        if (index > -1 && index < this.contacts.length){
            this.contacts.splice(index, 1);
            alert(" COntact was deleted successfully.");
        }
    }

    displayAllContacts(){
        let description = '';
        for(let i = 0; i < this.contacts.length; i++){
            this.selectedContact = this.contacts[i];
                description = description + i + ") Contact Name: " + this.selectedContact.firstName + " " + this.selectedContact.lastName
                + "\nPhone Number: " + this.selectedContact.phone 
                + "\nEmail: " + this.selectedContact.email + "\n"
                + '----------------------------------' + "\n";
        }
        alert(description);
    }
}
let menu = new Menu();
menu.start();
