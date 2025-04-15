console.log('Hello World!');

document.addEventListener("DOMContentLoaded", function () {
    const taglines = [
        "Rent The Bag.",
        "Glockenspiel With The Extendo.",
        "This is the greatest country on earth whether you like it or not.",
        "Sip in Silence.",
        "We finna get hella active!",
        "You're competing with ass every second of your life.",
        "#INeedToSeeTheDada",
        "#ContemporaryGoofy",
        "Keep It In The Chamber.",
        "808 Monopolization.",
        "NO TWERKING DURING BUSINESS HOURS!",
        "Time got hands.",
        "Put some respect on that diploma.",
        "We not even using our college degrees!",
        "HE'S AT THE CRIB!",
        "I'm on my way to your house to discuss the way you disrespected me.",
        "Math is NOT real.",
        "I'm telling you, that guy had it coming.",
    ];

    const randomIndex = Math.floor(Math.random() * taglines.length);
    const chosenTagline = taglines[randomIndex];

    document.getElementById("tagline").textContent = chosenTagline;

    // Handle orientation warning
    function checkOrientation() {
        const isPortrait = window.innerHeight > window.innerWidth;
        const isMobile = /Mobi|Android/i.test(navigator.userAgent);
        const warning = document.getElementById("rotate-warning");

        if (isPortrait && isMobile) {
            warning.style.display = "block";
        } else {
            warning.style.display = "none";
        }
    }

    window.addEventListener("resize", checkOrientation);
    checkOrientation(); // Initial check
});
