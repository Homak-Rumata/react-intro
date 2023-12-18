function TypeCode (int) {
    const struct = ["Незаполненно", "Заполненно", "Ответственный за оформленние док-тов на кафедре", "Руководитель практики от Университета", "Заведующий Кафедры", "Директор центра карьеры", "Одобренно"]
    if (int<struct.length) {
        return struct[int];
    } else {
        return "Иное";
    }
}

export default TypeCode

