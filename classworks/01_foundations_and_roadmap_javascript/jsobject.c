// V8 representation of 

#include <stdio.h>
#include <stdlib.h>
#include <string.h>

typedef enum
{
  JS_STRING,
  JS_NUMBER,
  JS_FUNCTION,
  JS_OBJECT,
  JS_ARRAY,
  JS_UNDEFINED,
  JS_BOOLEAN
} JSValueType;

typedef struct JSValue {
  JSValueType type;
  union {
    char *stringValue;
    double numberValue;
    struct JSObject *objectValue;
    struct JSArray *arrayValue;
    void (*functionValue)();
    int booleanValue;
  };
} JSValue;

typedef struct JSProperty
{
  char *key;
  JSValue value;
  int writable; // eto boolean
  int enumerable;
  int configurable;

} JSProperty;

typedef struct JSObject 
{
  JSProperty *properties;
  size_t propertyCount;
  struct JSObject *prototype;
} JSObject;

typedef struct JSArray 
{
  size_t length;
  JSProperty *items;
  JSObject *prototype;
} JSArray;


void greet() {
  printf("Hello world\n");
}

void objectToString() {
  printf("[object Object]\n");
}

JSObject* createObjectPrototype() {
  JSObject *prototype = (JSObject *)malloc(sizeof(JSObject));
  JSProperty *properties = (JSProperty *)malloc(1 * sizeof(JSProperty));

  properties[0].key = "toString";
  properties[0].value.type = JS_FUNCTION;
  properties[0].value.functionValue = objectToString;

  prototype->propertyCount = 1;
  prototype->properties = properties;

  prototype->prototype = NULL;
  return prototype;
}

void execute(JSObject* object, char* key) {
  if(object == NULL) {
    return;
  }
  for (int i = 0; i < object->propertyCount; ++i) {
    if(strcmp(object->properties[i].key, key) == 0) {
      if(object->properties[i].value.type == JS_STRING) {
        printf("%s\n", object->properties[i].value.stringValue);
      } else if(object->properties[i].value.type == JS_NUMBER) {
        printf("%f\n", object->properties[i].value.numberValue);
      } else if(object->properties[i].value.type == JS_FUNCTION) {
        object->properties[i].value.functionValue();
      }
      return;
    }
  }
  execute(object->prototype, key);
}

int main() {

  JSObject *Object = createObjectPrototype();
  JSObject *person = (JSObject *)malloc(sizeof(JSObject));
  JSProperty *properties = (JSProperty *)malloc(4 * sizeof(JSProperty));

  // name
  properties[0].key = "name";
  properties[0].value.type = JS_STRING;
  properties[0].value.stringValue = strdup("Alice");

  // age
  properties[1].key = "age";
  properties[1].value.type = JS_NUMBER;
  properties[1].value.numberValue = 25;

  // isStudent
  properties[2].key = "isStudent";
  properties[2].value.type = JS_BOOLEAN;
  properties[2].value.booleanValue = 0;

  // greet
  properties[3].key = "greet";
  properties[3].value.type = JS_FUNCTION;
  properties[3].value.functionValue = greet;

  person->properties = properties;

  person->propertyCount = 4;
  person->prototype = Object;


  execute(person, "name");
  execute(person, "age");

  execute(person, "greet");

  execute(person, "toString");

}