/*
 * @Author: hly
 * @Date: 2022-08-16 09:37:06
 * @LastEditors: hly
 * @LastEditTime: 2022-08-16 10:38:13
 * @Description:
 */
import {add} from '../src/add'
import Hello from '../src/components/HelloWorld.vue';
test('first test',() => {
    expect(1 + 1).toBe(2)
})

test('add',()=>{
    expect(add(1,1)).toBe(2)
})

test('hello',() => {
    console.log(Hello)
})