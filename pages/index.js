
import Head from 'next/head';
import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    // Enhanced romantic interactive game data
const gameData = {
    personalInfo: {
        boyfriendName: "Koushal",
        girlfriendName: "Vishu",
        cuteNicknames: ["Bachaa", "Bayko", "Baal"],
        petName: "LUDO",
        petBreed: "Lhasa Apso"
    },
    romanticPhrases: [
        "Darling just hold my hand you look so beautiful",
        "My dear Bachaa, your smile lights up my world",
        "Bayko, you are the most precious thing in my life",
        "Sweet Baal, even when you're angry you look adorable",
        "Vishu, your eyes are like stars in my darkest nights",
        "Every moment with you feels like a dream, my love"
    ],
    poems: [
        {
            title: "For My Beautiful Bayko",
            lines: [
                "In your eyes I see the universe,",
                "In your smile I find my peace,",
                "My dear Bachaa, my sweet Baal,",
                "You make all my worries cease."
            ]
        },
        {
            title: "When You're Angry",
            lines: [
                "Even when you're mad at me,",
                "You look like an angel divine,",
                "Darling just hold my hand,",
                "And be forever mine."
            ]
        },
        {
            title: "LUDO and You",
            lines: [
                "LUDO loves you, and so do I,",
                "Together we three, under the sky,",
                "My beautiful Vishu, don't you cry,",
                "Let's make up with a sweet goodbye to anger's lie."
            ]
        },
        {
            title: "My Sweet Vishu",
            lines: [
                "Bachaa, you're my morning sun,",
                "Bayko, you're my evening star,",
                "With you, life has just begun,",
                "Perfect just the way you are."
            ]
        }
    ],
    convincingMessages: [
        "I'm sorry Bachaa! Please forgive your silly Koushal 🥺",
        "Look at LUDO's puppy eyes! Even he's asking you to forgive me!",
        "I promise to be better, my sweet Bayko!",
        "Your happiness means everything to me, Baal!",
        "Can we cuddle and forget this fight?",
        "I'll buy you all the treats LUDO loves if you smile!",
        "Bachaa, without you, even LUDO looks sad!",
        "My beautiful Bayko, let's make new happy memories!"
    ],
    ludoReactions: [
        "Woof! LUDO says he loves you! 🐶",
        "LUDO is wagging his tail for you! 🐾",
        "Even LUDO thinks you should forgive Koushal! 😊",
        "LUDO wants belly rubs from his favorite human! 💖",
        "LUDO is doing his cute tricks to make you smile! ✨",
        "LUDO says: 'Vishu is the best human ever!' 🐕",
        "LUDO is spinning in circles because he's so happy! 🌟"
    ],
    compliments: [
        "You look absolutely stunning today, Bachaa!",
        "Your smile could light up the entire universe, Bayko!",
        "Sweet Baal, you're more beautiful than any flower!",
        "Vishu, your kindness makes you glow like an angel!",
        "My gorgeous Bachaa, you take my breath away!",
        "Beautiful Bayko, you're my dream come true!",
        "Adorable Baal, you make everything better!"
    ],
    loveLetters: [
        "My dearest Vishu, every day with you feels like the first day I fell in love. Your beautiful eyes, your sweet laugh, everything about you makes my heart skip a beat. Darling just hold my hand you look so beautiful. Love, your Koushal 💖",
        "To my precious Bachaa, you are the melody in my heart and the sunshine in my days. Even LUDO knows how special you are! I promise to love you more each day. Forever yours, Koushal 🌹",
        "Sweet Bayko, remember when we first met? I knew right then you were the one. Your beauty isn't just on the outside - your heart is pure gold. Let's create a million more memories together! With all my love, Koushal ✨"
    ],
    memoryGallery: [
        { caption: "Our first date - I was so nervous but you made me feel at ease 💕", photo: "📷" },
        { caption: "The day we adopted LUDO - our little family was complete! 🐶", photo: "📸" },
        { caption: "That sunset walk when you looked so beautiful in the golden light 🌅", photo: "📷" },
        { caption: "Our silly dance sessions in the kitchen - you always make me laugh 💃", photo: "📸" },
        { caption: "Lazy Sunday mornings with you and LUDO - pure happiness! ☀️", photo: "📷" }
    ],
    sweetPromises: [
        "I promise to always hold your hand, especially when you need comfort 🤝",
        "I promise to make you laugh every single day, my sweet Bachaa! 😄",
        "I promise to love you more than LUDO loves his treats (and that's a lot!) 🍖",
        "I promise to be your biggest supporter and cheerleader, Bayko! 📣",
        "I promise to dance with you in the rain and sunshine, Baal! 💃",
        "I promise to always tell you how beautiful you are, inside and out 💖"
    ],
    emergencyMessages: [
        "🚨 EMERGENCY CUTE ALERT! 🚨 Bachaa, you're too precious to stay angry! Look at these puppy eyes! 🥺👀",
        "⚠️ MAXIMUM SWEETNESS DEPLOYED! ⚠️ Bayko, even the stars are jealous of your beauty tonight! ✨🌟",
        "🆘 URGENT LOVE MESSAGE! 🆘 Baal, life without your smile is like pizza without cheese - incomplete! 🍕💔"
    ]
};

// Game state
let currentMoodLevel = 70;
let currentPoemIndex = 0;
let currentLetterIndex = 0;
let currentMemoryIndex = 0;
let ludoClickCount = 0;
let interactionCount = 0;

// DOM elements
const ludoContainer = document.getElementById('ludoContainer');
const ludoImage = document.getElementById('ludoImage');
const dogName = document.getElementById('dogName');
const dogStatus = document.getElementById('dogStatus');
const messageElement = document.getElementById('currentMessage');
const moodFill = document.getElementById('moodFill');
const moodIndicator = document.getElementById('moodIndicator');
const floatingElements = document.getElementById('floatingElements');
const surpriseSection = document.getElementById('surpriseSection');
const surpriseContent = document.getElementById('surpriseContent');

// Button elements
const emergencyBtn = document.getElementById('emergencyBtn');
const poemBtn = document.getElementById('poemBtn');
const complimentBtn = document.getElementById('complimentBtn');
const apologyBtn = document.getElementById('apologyBtn');
const loveLetter = document.getElementById('loveLetter');
const galleryBtn = document.getElementById('galleryBtn');
const promiseBtn = document.getElementById('promiseBtn');
const hugBtn = document.getElementById('hugBtn');
const closeBtn = document.getElementById('closeBtn');

// Modal elements
const poemModal = document.getElementById('poemModal');
const loveLatterModal = document.getElementById('loveLatterModal');
const galleryModal = document.getElementById('galleryModal');

// Initialize the enhanced game
function initGame() {
    addAllEventListeners();
    startPeriodicAnimations();
    updateMoodMeter();
    
    // Welcome animation sequence
    setTimeout(() => {
        createFloatingHearts(['💖', '✨', '🌟'], 5);
        showMessage("Welcome my beautiful Vishu! Click anywhere for surprises! 💕");
    }, 1000);
    
    // Auto-compliment after 3 seconds
    setTimeout(() => {
        if (interactionCount === 0) {
            showRandomCompliment();
        }
    }, 3000);
}

function addAllEventListeners() {
    // LUDO interactions
    ludoContainer.addEventListener('click', handleLudoClick);
    ludoImage.addEventListener('mouseenter', handleLudoHover);
    
    // Button interactions
    emergencyBtn.addEventListener('click', activateEmergencyMode);
    poemBtn.addEventListener('click', showPoemModal);
    complimentBtn.addEventListener('click', showRandomCompliment);
    apologyBtn.addEventListener('click', showApology);
    loveLetter.addEventListener('click', showLoveLetterModal);
    galleryBtn.addEventListener('click', showGalleryModal);
    promiseBtn.addEventListener('click', makeSweetPromise);
    hugBtn.addEventListener('click', giveVirtualHug);
    closeBtn.addEventListener('click', closeSurprise);
    
    // Modal interactions
    setupModalListeners();
    
    // Easter egg - secret key combination
    document.addEventListener('keydown', handleSecretKeys);
}

function handleLudoClick() {
    ludoClickCount++;
    interactionCount++;
    
    // Different reactions based on click count
    const reactions = gameData.ludoReactions;
    const randomReaction = reactions[Math.floor(Math.random() * reactions.length)];
    
    showMessage(randomReaction);
    
    // Special animations based on click count
    if (ludoClickCount % 3 === 0) {
        ludoImage.className = 'dog-image excited-mode';
        createFloatingHearts(['🐾', '🐶', '💖'], 8);
        increaseMood(10);
    } else if (ludoClickCount % 2 === 0) {
        ludoImage.className = 'dog-image happy-mode';
        createFloatingHearts(['❤️', '✨'], 5);
        increaseMood(5);
    }
    
    // Reset animation class
    setTimeout(() => {
        ludoImage.className = 'dog-image';
    }, 1000);
    
    // Special milestone reactions
    if (ludoClickCount === 5) {
        showSurprise("🎉 LUDO is super excited! He says you're the best human ever! Want to hear a secret? Koushal practices saying 'I love you' to LUDO every morning! 🐶💕");
    } else if (ludoClickCount === 10) {
        showSurprise("🌟 WOW! LUDO declares you the official 'Best Human Award' winner! He wants to give you all his toys and treats! 🏆🦴");
    }
    
    // Change dog status
    const statuses = [
        "So happy you clicked me! 🐾",
        "Woof woof! More clicks please! 🐶",
        "You're the best, Vishu! 💖",
        "LUDO loves belly rubs! 🤗",
        "Tail wagging intensifies! 🌟"
    ];
    dogStatus.textContent = statuses[Math.floor(Math.random() * statuses.length)];
}

function handleLudoHover() {
    createFloatingHearts(['🐾'], 1);
    dogStatus.textContent = "I sense pets incoming! 🐶";
}

function activateEmergencyMode() {
    interactionCount++;
    emergencyBtn.textContent = "🚨 DEPLOYING CUTENESS...";
    emergencyBtn.disabled = true;
    
    // Multi-stage emergency sequence
    setTimeout(() => {
        const emergencyMsg = gameData.emergencyMessages[Math.floor(Math.random() * gameData.emergencyMessages.length)];
        showSurprise(emergencyMsg);
        createFloatingHearts(['🚨', '💖', '🥺', '✨', '🌟', '❤️'], 15);
        increaseMood(20);
    }, 1000);
    
    setTimeout(() => {
        showMessage("EMERGENCY SUCCESS! Bachaa, how can you resist this level of cuteness? 😍");
        ludoImage.className = 'dog-image excited-mode';
    }, 3000);
    
    setTimeout(() => {
        emergencyBtn.textContent = "🚨 Emergency Cute Mode";
        emergencyBtn.disabled = false;
        ludoImage.className = 'dog-image';
    }, 5000);
}

function showPoemModal() {
    interactionCount++;
    displayPoem(currentPoemIndex);
    poemModal.classList.remove('hidden');
    increaseMood(15);
}

function displayPoem(index) {
    const poem = gameData.poems[index];
    document.getElementById('poemTitle').textContent = poem.title;
    
    const poemLines = document.getElementById('poemLines');
    poemLines.innerHTML = '';
    
    poem.lines.forEach(line => {
        const p = document.createElement('p');
        p.textContent = line;
        poemLines.appendChild(p);
    });
    
    createFloatingHearts(['📝', '💕', '🌹'], 5);
}

function showRandomCompliment() {
    interactionCount++;
    const compliment = gameData.compliments[Math.floor(Math.random() * gameData.compliments.length)];
    showMessage(compliment);
    createFloatingHearts(['🌟', '✨', '💖'], 6);
    increaseMood(8);
}

function showApology() {
    interactionCount++;
    const apology = gameData.convincingMessages[Math.floor(Math.random() * gameData.convincingMessages.length)];
    showSurprise(apology);
    ludoImage.className = 'dog-image sad-mode';
    createFloatingHearts(['🥺', '💔', '🙏'], 4);
    increaseMood(12);
    
    setTimeout(() => {
        ludoImage.className = 'dog-image';
    }, 1500);
}

function showLoveLetterModal() {
    interactionCount++;
    displayLoveLetter(currentLetterIndex);
    loveLatterModal.classList.remove('hidden');
    increaseMood(18);
}

function displayLoveLetter(index) {
    const letter = gameData.loveLetters[index];
    document.getElementById('letterContent').innerHTML = letter;
    createFloatingHearts(['💌', '💕', '📝'], 7);
}

function showGalleryModal() {
    interactionCount++;
    displayMemory(currentMemoryIndex);
    galleryModal.classList.remove('hidden');
    increaseMood(10);
}

function displayMemory(index) {
    const memory = gameData.memoryGallery[index];
    document.getElementById('galleryItem').querySelector('.memory-photo').textContent = memory.photo;
    document.getElementById('memoryCaption').textContent = memory.caption;
    createFloatingHearts(['📸', '💝', '🥰'], 4);
}

function makeSweetPromise() {
    interactionCount++;
    const promise = gameData.sweetPromises[Math.floor(Math.random() * gameData.sweetPromises.length)];
    showSurprise(promise);
    createFloatingHearts(['🤝', '💖', '⭐'], 5);
    increaseMood(15);
}

function giveVirtualHug() {
    interactionCount++;
    showMessage("🤗 Sending you the biggest, warmest hug, Bachaa! Feel my arms around you! 💕");
    
    // Special hug animation
    ludoImage.style.transform = 'scale(1.2)';
    createFloatingHearts(['🤗', '💝', '🥰', '❤️'], 10);
    increaseMood(25);
    
    setTimeout(() => {
        ludoImage.style.transform = '';
        showMessage("Hug delivered successfully! I love you, beautiful Bayko! 💖");
    }, 2000);
}

function setupModalListeners() {
    // Poem modal
    document.getElementById('nextPoem').addEventListener('click', () => {
        currentPoemIndex = (currentPoemIndex + 1) % gameData.poems.length;
        displayPoem(currentPoemIndex);
    });
    
    document.getElementById('closePoemModal').addEventListener('click', () => {
        poemModal.classList.add('hidden');
    });
    
    // Love letter modal
    document.getElementById('newLetter').addEventListener('click', () => {
        currentLetterIndex = (currentLetterIndex + 1) % gameData.loveLetters.length;
        displayLoveLetter(currentLetterIndex);
    });
    
    document.getElementById('closeLetterModal').addEventListener('click', () => {
        loveLatterModal.classList.add('hidden');
    });
    
    // Gallery modal
    document.getElementById('nextMemory').addEventListener('click', () => {
        currentMemoryIndex = (currentMemoryIndex + 1) % gameData.memoryGallery.length;
        displayMemory(currentMemoryIndex);
    });
    
    document.getElementById('closeGalleryModal').addEventListener('click', () => {
        galleryModal.classList.add('hidden');
    });
}

function showMessage(message) {
    messageElement.style.opacity = '0';
    messageElement.style.transform = 'scale(0.9)';
    
    setTimeout(() => {
        messageElement.textContent = message;
        messageElement.style.opacity = '1';
        messageElement.style.transform = 'scale(1)';
    }, 200);
}

function showSurprise(content) {
    surpriseContent.innerHTML = content;
    surpriseSection.classList.remove('hidden');
}

function closeSurprise() {
    surpriseSection.classList.add('hidden');
}

function createFloatingHearts(heartTypes, count) {
    for (let i = 0; i < count; i++) {
        setTimeout(() => {
            const heart = document.createElement('div');
            heart.className = 'floating-heart';
            heart.textContent = heartTypes[Math.floor(Math.random() * heartTypes.length)];
            
            // Random position
            heart.style.left = Math.random() * 100 + '%';
            heart.style.bottom = '0px';
            
            // Random animation properties
            heart.style.animationDelay = Math.random() * 0.5 + 's';
            heart.style.animationDuration = (Math.random() * 2 + 2) + 's';
            
            floatingElements.appendChild(heart);
            
            // Remove after animation
            setTimeout(() => {
                if (heart.parentNode) {
                    heart.parentNode.removeChild(heart);
                }
            }, 4000);
        }, i * 150);
    }
}

function increaseMood(amount) {
    currentMoodLevel = Math.min(100, currentMoodLevel + amount);
    updateMoodMeter();
}

function decreaseMood(amount) {
    currentMoodLevel = Math.max(0, currentMoodLevel - amount);
    updateMoodMeter();
}

function updateMoodMeter() {
    moodFill.style.width = currentMoodLevel + '%';
    
    // Update mood indicator emoji
    if (currentMoodLevel >= 80) {
        moodIndicator.textContent = '😍';
    } else if (currentMoodLevel >= 60) {
        moodIndicator.textContent = '😊';
    } else if (currentMoodLevel >= 40) {
        moodIndicator.textContent = '😐';
    } else if (currentMoodLevel >= 20) {
        moodIndicator.textContent = '😕';
    } else {
        moodIndicator.textContent = '😢';
    }
    
    // Special mood achievements
    if (currentMoodLevel === 100) {
        showSurprise("🎉 MAXIMUM HAPPINESS ACHIEVED! Vishu, you're absolutely glowing with joy! Koushal's mission accomplished! 💖✨");
        createFloatingHearts(['🎉', '🌟', '👑', '💖', '✨'], 20);
    }
}

function startPeriodicAnimations() {
    // Periodic floating hearts
    setInterval(() => {
        if (Math.random() < 0.4) {
            createFloatingHearts(['💕'], 1);
        }
    }, 3000);
    
    // Random sweet messages
    setInterval(() => {
        if (Math.random() < 0.2 && interactionCount > 5) {
            const phrases = gameData.romanticPhrases;
            const randomPhrase = phrases[Math.floor(Math.random() * phrases.length)];
            showMessage(randomPhrase);
        }
    }, 15000);
    
    // Mood decay (very slow)
    setInterval(() => {
        if (currentMoodLevel > 50 && Math.random() < 0.1) {
            decreaseMood(1);
        }
    }, 30000);
}

// Secret key combination easter egg
let secretSequence = [];
const targetSequence = ['v', 'i', 's', 'h', 'u'];

function handleSecretKeys(event) {
    secretSequence.push(event.key.toLowerCase());
    
    if (secretSequence.length > targetSequence.length) {
        secretSequence = secretSequence.slice(-targetSequence.length);
    }
    
    if (JSON.stringify(secretSequence) === JSON.stringify(targetSequence)) {
        triggerSecretMessage();
        secretSequence = [];
    }
}

function triggerSecretMessage() {
    showSurprise("🎊 SECRET UNLOCKED! You typed 'VISHU'! 🎊<br><br>Special message from Koushal: 'Every letter of your name is precious to me. V-I-S-H-U, each letter represents how much I adore you. You are my everything, my beautiful angel!' 👼💖");
    createFloatingHearts(['V', 'I', 'S', 'H', 'U', '💖', '👑'], 15);
    increaseMood(30);
}

// Auto-save interaction progress
function saveProgress() {
    const progress = {
        mood: currentMoodLevel,
        interactions: interactionCount,
        ludoClicks: ludoClickCount
    };
    // Note: Not using localStorage as per instructions, just keeping for reference
}

// Initialize everything when DOM is ready
initGame();

  }, []);

  return (
    <>
      <Head>
        <title>Ayy maza god baal ahe na tu?</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <div className="container">
        <div className="game-card">
            <h1 className="title">Ayy maza god baal ahe na tu? 💖</h1>
            
            <div className="ludo-container" id="ludoContainer">
                <div className="dog-image" id="ludoImage">
                    <div className="dog-face">
                        <div className="dog-ears">
                            <div className="ear left"></div>
                            <div className="ear right"></div>
                        </div>
                        <div className="dog-head">
                            <div className="dog-eyes">
                                <div className="eye left" id="leftEye"></div>
                                <div className="eye right" id="rightEye"></div>
                            </div>
                            <div className="dog-nose"></div>
                            <div className="dog-mouth" id="dogMouth"></div>
                        </div>
                        <div className="dog-body"></div>
                        <div className="dog-tail" id="dogTail"></div>
                    </div>
                </div>
                <p className="dog-name" id="dogName">LUDO 🐶</p>
                <p className="dog-status" id="dogStatus">Click me for surprises!</p>
            </div>

            <div className="message-container">
                <p className="message" id="currentMessage">Hey Vishu! Your Koushal loves you! Click LUDO for magic! 🐶✨</p>
            </div>

            <div className="interactive-grid">
                <button className="btn btn-emergency" id="emergencyBtn">🚨 Emergency Cute Mode</button>
                <button className="btn btn-poem" id="poemBtn">💌 Love Poems</button>
                <button className="btn btn-compliment" id="complimentBtn">🌟 Compliment Me</button>
                <button className="btn btn-apology" id="apologyBtn">🥺 Apology Booth</button>
                <button className="btn btn-love-letter" id="loveLetter">💕 Love Letter</button>
                <button className="btn btn-gallery" id="galleryBtn">📸 Memory Lane</button>
                <button className="btn btn-promise" id="promiseBtn">🤝 Sweet Promises</button>
                <button className="btn btn-hug" id="hugBtn">🤗 Virtual Hug</button>
            </div>

            <div className="mood-meter">
                <div className="mood-label">Vishu's Mood Meter:</div>
                <div className="mood-bar">
                    <div className="mood-fill" id="moodFill"></div>
                    <div className="mood-indicator" id="moodIndicator">😊</div>
                </div>
            </div>

            <div className="surprise-section hidden" id="surpriseSection">
                <div className="surprise-content" id="surpriseContent"></div>
                <button className="btn btn-close" id="closeBtn">Close</button>
            </div>

            <div className="floating-elements" id="floatingElements"></div>

            <footer className="footer">
                <p>Made with infinite love by Koushal ❤️ for his beautiful Vishu</p>
                <p className="sub-text">Darling just hold my hand you look so beautiful 💖</p>
            </footer>
        </div>
    </div>

    {/* Hidden modals */}
    <div className="modal hidden" id="poemModal">
        <div className="modal-content">
            <h3 id="poemTitle">For My Beautiful Bayko</h3>
            <div className="poem-lines" id="poemLines"></div>
            <button className="btn btn-next" id="nextPoem">Next Poem</button>
            <button className="btn btn-close-modal" id="closePoemModal">Close</button>
        </div>
    </div>

    <div className="modal hidden" id="loveLatterModal">
        <div className="modal-content love-letter-content">
            <h3>💌 Generating Love Letter...</h3>
            <div className="letter-content" id="letterContent"></div>
            <button className="btn btn-new-letter" id="newLetter">New Letter</button>
            <button className="btn btn-close-modal" id="closeLetterModal">Close</button>
        </div>
    </div>

    <div className="modal hidden" id="galleryModal">
        <div className="modal-content gallery-content">
            <h3>📸 Our Beautiful Memories</h3>
            <div className="gallery-item" id="galleryItem">
                <div className="memory-photo">📷</div>
                <p className="memory-caption" id="memoryCaption"></p>
            </div>
            <button className="btn btn-next-memory" id="nextMemory">Next Memory</button>
            <button className="btn btn-close-modal" id="closeGalleryModal">Close</button>
        </div>
    </div>
    </>
  );
}
