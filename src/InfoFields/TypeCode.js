function TypeCode (int) {
    const struct = ["Незаполненно", "Заполненно", "Одобренно", "Подписанно"]
    if (int<struct.length) {
        return struct[int];
    } else {
        return "Иное";
    }
}

export default TypeCode