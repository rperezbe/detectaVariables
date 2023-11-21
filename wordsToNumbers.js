function wordsToNumbers(text) {

    //separa el texto en palabras
    let words = text.split(/\s+/);

    //crea diccionario
    let dictionary = {
        'one': 1,
        'two': 2,
        'three': 3,
        'four': 4,
        'five': 5,
        'six': 6,
        'seven': 7,
        'eight': 8,
        'nine': 9,
        'ten': 10,
        'eleven': 11,
        'twelve': 12,
        'thirteen': 13,
        'fourteen': 14,
        'fifteen': 15,
        'sixteen': 16,
        'seventeen': 17,
        'eighteen': 18,
        'nineteen': 19,
        'twenty': 20,
        'thirty': 30,
        'forty': 40,
        'fifty': 50,
        'sixty': 60,
        'seventy': 70,
        'eighty': 80,
        'ninety': 90,
        'hundred': 100,
        'thousand': 1000,
        'million': 1000000,
        'billion': 1000000000,
    };
    //ver si words[i] contiene alguna de los números del diccionario
    for (let i = 0; i < words.length; i++) {
        //guardamos en una variaable la palabra en minúsculas y sin signos de puntuación
        let wordLowerCase = words[i].replace(/[.,;!?]+$/, '').toLowerCase();
        //vemos si es número
        if (dictionary[wordLowerCase]) {
            //en caso que sea número, usamos la palabra para encontrar el número del diccionario
            words[i] = dictionary[wordLowerCase];

            //controlamos el hundred antes de cualquier potencia
            if (words[i] == 100 && (dictionary[words[i + 1]] == 1000 || dictionary[words[i + 1]] == 1000000 || dictionary[words[i + 1]] == 1000000000)) {
                words[i] = words[i] * dictionary[words[i + 1]];
                words.splice(i + 1, 1);
                words = calculatePowers(words, i);
                i--;
            }

            if (words[i] == 100 || words[i] == 1000 || words[i] == 1000000 || words[i] == 1000000000) {
                words = calculatePowers(words, i);
                i--;
            }
            if (words[i] > 19) {
                words = nextNumber(words, i);
            }
            //para que el último número se sume y no quede colgado
            if (words[i - 1] > 0) {
                words[i] = words[i] + words[i - 1];
                words.splice(i - 1, 1);
            }
        } else if (words[i] == "and" && dictionary[words[i + 1]]) {
            words.splice(i, 1);
            //ponemos el punteto en el número anterior al que se sumará lo posterior a "and"
            i--;
            //sabemos que va a tener que ir a nextNumber directamente
            words = nextNumber(words, i);
        }
    }

    //funcion para calcular decenas
    function nextNumber(words, i) {
        if (dictionary[words[i + 1]]) {
            if (dictionary[words[i + 2]] == 100 || dictionary[words[i + 2]] == 1000 || dictionary[words[i + 2]] == 1000000 || dictionary[words[i + 2]] == 1000000000) {
                words[i] = words[i] + dictionary[words[i + 1]] * dictionary[words[i + 2]];
                //ojo con los borrados, primero el mayor
                words.splice(i + 2, 1);
                words.splice(i + 1, 1);
            } else {
                words[i] = words[i] + dictionary[words[i + 1]];
                words.splice(i + 1, 1);
            }
        }
        return words;
    }
    //función para calcular potencias
    function calculatePowers(words, i) {
        words[i] = words[i - 1] * words[i];
        words.splice(i - 1, 1);
        return words;
    }
   //volvemos a concatenar el texto
    return words.join(" ");
}