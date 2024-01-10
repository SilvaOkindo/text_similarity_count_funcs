function countText(text, target) {
    let count = 0
    word = text.toLowerCase().split(/\s+/)
    for(let i = 0; i<word.length; i++) {
        if (word[i] === target.toLowerCase()) {
            count++
        }
    }

    console.log(count)
}

text = 'Lorem ipsum dolor sit sit amet consectetur adipisicing elit. Aut consequuntur voluptates ratione maiores natus ut eum porro beatae, soluta, in consequatur eveniet reiciendis amet rem sed obcaecati dicta sunt fugit?'
target = 'sit'

countText(text, target)


function characterCount(string, target) {
    let count = 0
    for (let i = 0; i < string.length; i++) {
        if (string.charAt(i) === target) {
            count++
        }   
    }

    console.log(count)
}

characterCount(text, 'i')


function countText(target) {
    let count = 0;

    // Using a regular expression to find all occurrences of the target string
    const regex = new RegExp(target, 'g');
    const matches = text.match(regex);

    // Check if matches is not null (i.e., there are matches)
    if (matches) {
        count = matches.length;
    }

    console.log(count);
}


countText(target);
