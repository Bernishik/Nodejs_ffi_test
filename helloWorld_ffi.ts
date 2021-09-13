import * as ffi from 'ffi-napi'

let libHelloWorld = ffi.Library("./src/helloWorld",{
    'HelloWorld': ['int',[]]
})



libHelloWorld.HelloWorld()

