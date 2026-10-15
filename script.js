const letters = {
    "miss-you": {
        title: "Open When <br> You Miss Me",
        message:
            "Hi baby, you miss me ba? I miss you more everyday bae. There's not a second my soul isn't longging for your presence my love, let's endure hardship together no matter what okay baby. Just remember I'm Always your one call away I love you so much mwaaa :3",
        music: "2.mp3"      
    },

    "bad-day": {
        title: "Open When<br> You're Having A Bad Day",
        message:
            "It's okay to have bad days baby okay, at the end of the day you're going home to me bae. I'll always try to lambing my baby everytime makauli ikaw gikan sa work. I'm always proud of you baby, I love you mwaaaa",
        music: "3.mp3"
    },

    "need-a-hug": {
        title: "Open When <br> You Need A Hug",
        message:
            "if ever you need a hug bae just put my jersey sa imoa unlan and hug me okay, so I can feel it also baby, I miss you gusto na tika ma hug po baby. kaya rani natoo haa I lovee yooouuuu!!!!!.",
        music:"4.mp3"
    },

    "cant-sleep": {
        title: "Open When <br> You Can't Sleep",
        message:
            "Naaaaahhhh my baby cant sleep? hugg sa pillow baee and just think of all our happy memories bae. And if that doesnt work cal me baby, I'm always available for you okay. I love you so much babyy",
        music:"5.mp3"
    },

    "love-you": {
        title: "Open When <br> You Need To Know I Love You",
        message:
            "baby no amount of words can express the depth of my devotion to your precious soul. I would always eat my anger, my pride, my ego no matter who is right or wrong. I would always spend every cent I have in my name. I would always shout to the world that you are the one I love, that you are my gf, the girl I'm going to marry soon. I love you so much bae, this small letter cant express enough what I'm feeling for you bae",
        music:"6.mp3"
    },

    "thinking-of-you": {
        title: "Open When <br> You're Thinking Of Me",
        message:
            "Yeeeiiii, really?? I think of you always also baby. every second, every minute, every hour baby. Always take care of yourself baby, just until I'm there by yourside okay. I love you nica mwah",
        music:"12.mp3"
    }
};

// fetching the letter name
const params = new URLSearchParams(window.location.search);
const letterId = params.get("letter");

const letter = letters[letterId];

if (letter) {
    document.getElementById("letter-title").innerHTML = letter.title;
    document.getElementById("letter-message").textContent = letter.message;

    if (letter.music) {
        const audio = new Audio(letter.music);
        audio.loop = true;
        audio.play().catch(() => {});
    }
} else {
     document.getElementById("letter-title").textContent = "Letter not found.";
    document.getElementById("letter-message").textContent = "Hmm this letter doesn't seem to exist.";
}

const letterText = document.querySelector(".letter-text");
const gif = document.querySelector(".opening-gif");

setTimeout(() => {
    gif.src = "images/letter-final.png";
    letterText.classList.remove("hidden");
}, 1200);