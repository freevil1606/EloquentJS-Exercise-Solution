/*
* Compare object by the deep way
* v1 = {a: "A Value", b: {c: "C Value"}}
* v2 = {a: "A Value", b: {c: "C Value"}}
* v1 and v2 can be a primitive value
*
* Luon binh thuong:
* Kiem tra co phai object = (no) > so sanh gia tri
* So sanh tung thuoc tinh cua object (quay ve buoc tren)
*
* Lam sao de tao vong lap so sanh cho den het tat ca thuoc tinh, cua cha lan con?
* */
function deepEqual(v1, v2) {
    if (typeof v1 != "object" || typeof v2 != "object") return v1 == v2;
    if (!v1 || !v2) v1 == v2;
    if (Object.keys(v1).length !== Object.keys(v2).length) return false;

    for (const key in v1) {
        if (!deepEqual(v1[key], v2[key])) return false;
    }
    return true;
}

function deepEqual(v1, v2) {
    const comparePairs = [{v1, v2}];
    for (let pair of comparePairs) {
        console.log(JSON.parse(JSON.stringify(comparePairs)));
        const value1 = pair.v1;
        const value2 = pair.v2;

        if (typeof value1 != "object" || typeof value2 != "object") return value1 == value2;
        if (!value1 || !value2) value1 == value2;
        if (Object.keys(value1).length !== Object.keys(value2).length) return false;

        for (let key in value1) {
            comparePairs.push({v1: value1[key], v2: value2[key]})
        }
    }
    return true;
}

/*
* Compare object by the deep way
* v1 = {a: "A Value", b: {c: "C Value"}}
* v2 = {a: "A Value", b: {c: "C Value"}}
* v1 and v2 can be a primitive value
*
* Luon binh thuong:
* Kiem tra co phai object = (no) > so sanh gia tri
* So sanh tung thuoc tinh cua object (quay ve buoc tren)
*
* Lam sao de tao vong lap so sanh cho den het tat ca thuoc tinh, cua cha lan con?
*
* [{a: "A Value", b: {c: "C Value"}}, {c: "C Value"}]
* [
*   {v1: {a: "A Value", b: {c: "C Value"}}
*    v2: {a: "A Value", b: {c: "C Value"}}},
*   {v1: "A Value",
*    v2: "A Value"},
*   {v1: {c: "C Value"},
*    v2: {c: "C Value"}}
*   {v1: "C Value",
*    v2: "C Value"}
* ]
*
* */
