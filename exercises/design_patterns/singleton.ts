class Singleton {
  private static _instance: Singleton;

  public static get instance() {
    if (!Singleton._instance) {
      Singleton._instance = new Singleton();
    }
    return Singleton._instance;
  }
  private constructor() {}
}

const s1 = Singleton.instance;
const s2 = Singleton.instance;

console.log(s1 === s2);
