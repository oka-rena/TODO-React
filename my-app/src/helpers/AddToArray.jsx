/**
 * useStateで管理している配列に、
 * 要素を追加するためのヘルパー関数
 * 
 * @param { Function } setFunction // useStateの更新関数
 * @param { String } addTarget
 */

export const addToArray = (setFunction, addTarget) => {
    setFunction((prev) => [...prev, addTarget]);
}