function convertHTML(str) {

    const entities = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '\"': '&quot;',
        '\'': '&apos;',
    }

    // return str.split("").map(character => character.match(/&|"|'|<|>/) ? entities[character] : character).join("");
    return str.split("").map(character => Object.keys(entities).includes(character) ? entities[character] : character).join("");
}

console.log(convertHTML("Hamburgers < Pizza < Tacos"));

/*

ChatGPT's version:
function convertHTML(str) {
    const entities = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&apos',
    };

    return str.replace(/[&<>"']/g, match => entities[match]);
}

In this version, we use the replace method with a regular expression to find and 
replace the specific characters defined in the entities object. 
It provides a more straightforward way to achieve the same result and is easier to read, 
especially when dealing with multiple replacement characters.

Takeaways:

If strings have to be replaced, then use the replace method.

*/