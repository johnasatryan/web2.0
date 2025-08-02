// node --version || node -v
// nvm (Node version manager)
// npm install -g typescript
// npx tsc --init

// Coffee interface
interface Coffee {
  cost(): number;
  description(): string;
}

// Concrete base coffee
class SimpleCoffee implements Coffee {
  cost(): number {
    return 5;
  }
  description(): string {
    return 'Simple Coffee';
  }
}

// Abstract decorator
abstract class CoffeeDecorator implements Coffee {
  protected coffee!: Coffee;
  constructor(coffee: Coffee) {
    this.coffee = coffee;
  }

  abstract cost(): number;
  abstract description(): string;
}

// Concrete decorators
class WithMilk extends CoffeeDecorator {
  cost(): number {
    return this.coffee.cost() + 1;
  }
  description(): string {
    return this.coffee.description() + ', Milk';
  }
}

class WithSugar extends CoffeeDecorator {
  cost(): number {
    return this.coffee.cost() + 0.5;
  }
  description(): string {
    return this.coffee.description() + ', Sugar';
  }
}

class WithWhippedCream extends CoffeeDecorator {
  cost(): number {
    return this.coffee.cost() + 2;
  }
  description(): string {
    return this.coffee.description() + ', Whipped Cream';
  }
}

// Example
// const myCoffee = new WithSugar(new WithMilk(new SimpleCoffee()));
// console.log(myCoffee.description()); // Simple Coffee, Milk, Sugar
// console.log(myCoffee.cost()); // 6.5

// const milkCoffee = new WithWhippedCream(new WithMilk(new SimpleCoffee()));

// console.log(milkCoffee.cost());
// console.log(milkCoffee.description());

// Task 2

// Notification interface
interface Notification {
  send(message: string): void;
}

class EmailNotification implements Notification {
  send(message: string): void {
    console.log('EMAIL:', message);
  }
}

class SMSNotification implements Notification {
  send(message: string): void {
    console.log('SMS:', message);
  }
}

class PushNotification implements Notification {
  send(message: string): void {
    console.log('PUSH:', message);
  }
}

class SlackNotification implements Notification {
  send(message: string): void {
    console.log('SLACK:', message);
  }
}

// type NotificationConstructor = new () => Notification;

class NotificationFactory {
  private static registry: Record<string, Notification> = {};

  static register(type: string, clazz: Notification): void {
    this.registry[type] = clazz;
  }

  static create(type: string): Notification | null {
    const someObject = this.registry[type];
    return someObject ? someObject : null;
  }
}

// Register all types
NotificationFactory.register('email', new EmailNotification());
NotificationFactory.register('sms', new SMSNotification());
NotificationFactory.register('push', new PushNotification());
NotificationFactory.register('slack', new SlackNotification());

// // Example usage
// const notifier = NotificationFactory.create("sms");
// notifier?.send("Hello via SMS!");

// function fetchAndPrint(storage: Storage, filename: string): void {
//   const content = storage.download(filename);
//   console.log(content);
// }

// const s1 = new ReadOnlyCloudStorage();
// const s2 = new LocalFileStorage();

// fetchAndPrint(s1, 'resume.pdf'); // ✅ works
// fetchAndPrint(s2, 'notes.txt'); // ✅ works

// function clearFile(storage: Storage, filename: string): void {
//   storage.delete(filename); // ❌ should not be called on read-only storage
// }

interface IReadableStorage {
  download(filename: string): string;
}

interface IWritableStorage {
  upload(file: string): void;
  delete(filename: string): void;
}

class LocalFileStorage implements IReadableStorage, IWritableStorage {
  upload(file: string): void {
    console.log("Uploading", file);
  }
  download(filename: string): string {
    return `Local file content: ${filename}`;
  }
  delete(filename: string): void {
    console.log("Deleting", filename);
  }
}

class ReadOnlyCloudStorage implements IReadableStorage {
  download(filename: string): string {
    return `Cloud backup content: ${filename}`;
  }
}

// Usage
function fetchAndPrint(storage: IReadableStorage, filename: string): void {
  console.log(storage.download(filename));
}

const local = new LocalFileStorage();
const cloud = new ReadOnlyCloudStorage();

fetchAndPrint(local, "local.txt"); 
fetchAndPrint(cloud, "backup.txt"); 