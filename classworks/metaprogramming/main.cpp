#include <iostream>
#include <thread>


void foo() {
  std::cout << "worker\n";
}


int main() {
  std::thread t1(foo);

  std::cout << "main thread tasks\n";

  t1.join();
}