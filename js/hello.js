// export:不僅可以導出物件，變數也可以導出，EX：基本類型變數、函數、陣列、物件，可直接宣告時直接export
// export const util = {
//     sum(a, b) {
//         return a + b;
//     }
// }
// export {util}


// 使用預設方式導出，不設定名稱，匯入時再輸入名稱
export default {
    sum(a, b) {
        return a + b;
    }
}

