module.exports = {
    isValid
}

function isValid (shout) {
    const result = true;

    if(!shout.message) {
        result = false;
    }

    if(typeof shout.message !== "string") {
        result = false;
    }

    if(shout.message.length < 3) {
        result = false;
    }

    return true;
}
