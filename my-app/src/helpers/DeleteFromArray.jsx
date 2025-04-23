/**
 * useStateで管理している配列から、
 * 要素を削除するためのヘルパー関数
 * 
 * @param { Function } setFunction // useStateの更新関数
 * @param { Int } index // 配列のキー
 */

export const deleteFromArray = (setFunction, index) => {
    setFunction((prev) => prev.filter((_, i) => {
        return i !== index;
    }));
}