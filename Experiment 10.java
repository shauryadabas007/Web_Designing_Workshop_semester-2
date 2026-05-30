abstract class BankAccount {
    protected String accountNumber;
    protected String accountHolderName;
    protected double balance;

    public BankAccount(String accountNumber, String accountHolderName, double balance) {
        this.accountNumber = accountNumber;
        this.accountHolderName = accountHolderName;
        this.balance = balance;
    }

    public void deposit(double amount) {
        if (amount > 0) {
            balance += amount;
            System.out.println("Successfully deposited Rs. " + amount + " into Account " + accountNumber);
        } else {
            System.out.println("Invalid deposit amount.");
        }
    }

    public void displayAccountDetails() {
        System.out.println("\n--- Account Details ---");
        System.out.println("Account Number : " + accountNumber);
        System.out.println("Holder Name    : " + accountHolderName);
        System.out.println("Current Balance: Rs. " + balance);
    }

    public abstract void calculateInterest();
}

class SavingsAccount extends BankAccount {
    private double interestRate;

    public SavingsAccount(String accountNumber, String accountHolderName, double balance, double interestRate) {
        super(accountNumber, accountHolderName, balance);
        this.interestRate = interestRate;
    }

    @Override
    public void calculateInterest() {
        double interest = balance * (interestRate / 100);
        balance += interest;
        System.out.println("Savings Interest computed at " + interestRate + "%. Interest Added: Rs. " + interest);
    }
}

class CurrentAccount extends BankAccount {
    private double maintenanceFeeRate; // e.g., small fee rate applied on accounts

    public CurrentAccount(String accountNumber, String accountHolderName, double balance, double maintenanceFeeRate) {
        super(accountNumber, accountHolderName, balance);
        this.maintenanceFeeRate = maintenanceFeeRate;
    }

    @Override
    public void calculateInterest() {
        double fee = balance * (maintenanceFeeRate / 100);
        balance -= fee;
        System.out.println("Current Account processed. Maintenance charge applied at " + maintenanceFeeRate + "%. Deducted: Rs. " + fee);
    }
}

class Main {
    public static void main(String[] args) {
        
        System.out.println("=== Bank Management System Launching ===");

        SavingsAccount savings = new SavingsAccount("SAV123", "Rahul Sharma", 50000.0, 4.5);
        CurrentAccount current = new CurrentAccount("CUR789", "Anita Verma", 120000.0, 1.2);

        System.out.println("\n>> Processing Savings Account Operations <<");
        savings.displayAccountDetails();
        savings.deposit(15000.0);
        savings.calculateInterest();
        savings.displayAccountDetails();

        System.out.println("\n>> Processing Current Account Operations <<");
        current.displayAccountDetails();
        current.deposit(30000.0);
        current.calculateInterest();
        current.displayAccountDetails();

        System.out.println("\n=== Program Terminated Successfully ===");
    }
}