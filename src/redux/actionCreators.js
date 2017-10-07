export function addWord(en, vn, isMemorized) {
    return { type: 'ADD_WORD', en, vn, isMemorized };
}

export function toggleForm() {
    return { type: 'TOGGLE_FORM' };
}