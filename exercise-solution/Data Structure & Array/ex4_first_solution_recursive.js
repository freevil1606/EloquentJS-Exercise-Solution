function deepEqual(v1, v2) {
    if (typeof v1 != "object" || typeof v2 != "object") return v1 == v2;
    if (!v1 || !v2) v1 == v2;
    if (Object.keys(v1).length !== Object.keys(v2).length) return false;

    for (const key in v1) {
        if (!deepEqual(v1[key], v2[key])) return false;
    }
    return true;
}
