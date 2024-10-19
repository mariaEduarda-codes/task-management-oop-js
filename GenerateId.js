export default function generateId() {
    const ALLOWED_CHARACTERS = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",
    "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N","O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",
    1, 2, 3, 4, 5, 6, 7, 8, 9, 0, "-"];

    const SIZE_OF_ID =  5;

    let generatedId = '';

    for (let i = 0; i < SIZE_OF_ID; i++) {
        const randomIndex = Math.floor(Math.random() * ALLOWED_CHARACTERS.length);
        generatedId += ALLOWED_CHARACTERS[randomIndex];
    }

    return generatedId;
}