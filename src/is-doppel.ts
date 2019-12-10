/**
 * instanceは違うか内包しているプロパティの名称と数、
 * 各プリミティブバリューが等しい場合にtrueを返す
 */
export function isDoppel(a:any, b:any):Boolean {
    if (Array.isArray(a) && Array.isArray(b)) {
        return a.length === b.length &&
               a.every((aValue, i) => isDoppel(aValue, b[i]))
    }
    
    if (typeof a === 'object' && typeof b === 'object') {
        const aKeys = Object.keys(a)
        const bKeys = Object.keys(b)
        return aKeys.length === bKeys.length &&
               aKeys.every((key) => isDoppel(a[key], b[key]))
    }

    return a === b
}