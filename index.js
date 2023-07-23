// Write your solution in this file!

const employee = {
    name: "Owen",
    streetAddress: "12 Nyebuchi close"
}

function updateEmployeeWithKeyAndValue(obj, key, val) {
    let newObj = {...obj}
    newObj[key] = val;
    return newObj;
}

function destructivelyUpdateEmployeeWithKeyAndValue (obj, key, val) {
    obj[key] = val;
    return obj;
}

function deleteFromEmployeeByKey(obj, key) {
    let newObj = {...obj}
    delete newObj[key];
    return newObj;
}

function destructivelyDeleteFromEmployeeByKey(obj, key) {
    delete obj[key];
    return obj;
}