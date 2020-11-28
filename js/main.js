// 在導入的時候因為宣告時名稱是util，所以匯入時必須相同，若要在這裡改變名稱可以使用export default
import myUtil from './hello.js';
import { name, add } from './user.js';

myUtil.sum(1, 2);
console.log(name)
add(1, 2)