function StatusCode (int) {
    const struct = ["Производственная", "Научная"]
    if (int<struct.length) {
        return struct[int];
    } else {
        return "Иная";
    }
}

export default StatusCode