// 1. Implement BankAccount Class
class BankAccount{
    #balance=0;

    deposit(value){
        this.#balance+=value;
    }

    withdraw(value){
        this.#balance-=value;
    }

    balance(){
        return this.#balance;
    }
}

let account=new BankAccount();
account.deposit(500);
console.log(account.balance());
account.withdraw(300);
console.log(account.balance());