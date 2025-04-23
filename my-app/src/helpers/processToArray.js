/**
 * useStateで管理している配列の要素を操作するためのヘルパー関数
 * 
 * @param { Function } setFunction // useStateの更新関数
 * @param { String }   addTarget
 * @param { Int }      index // 配列のキー
 */

export const arrayHelper = () => {
    // 配列への要素追加
    const addToArray = (setFunction, addTarget) => {
        setFunction((prev) => [...prev, addTarget]);
    }

    // 配列から要素の削除
    const deleteFromArray = (setFunction, index) => {
        setFunction((prev) => prev.filter((_, i) => {
            return i !== index;
        }));
    }

    return {addToArray, deleteFromArray}
}