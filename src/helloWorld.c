#include <stdio.h>

#if defined(WIN32) || defined(_WIN32)
#define EXPORT __declspec(dllexport)
#else
#define EXPORT
#endif

EXPORT int HelloWorld() {
  printf("Hello World");
  return 0;
}