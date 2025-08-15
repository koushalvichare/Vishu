import Head from 'next/head';
import { useEffect, useState, useRef } from 'react';

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

export default function Home() {
    const [moodLevel, setMoodLevel] = useState(70);
    const [currentMessage, setCurrentMessage] = useState("Hey Vishu! Your Koushal loves you! Click LUDO for magic! 🐶✨");
    const [ludoAnimation, setLudoAnimation] = useState('');
    const [dogStatus, setDogStatus] = useState("Click me for surprises!");
    const [floatingHearts, setFloatingHearts] = useState([]);
    const [surprise, setSurprise] = useState({ content: '', visible: false });

    const [poemModal, setPoemModal] = useState(false);
    const [currentPoemIndex, setCurrentPoemIndex] = useState(0);

    const [loveLetterModal, setLoveLetterModal] = useState(false);
    const [currentLetterIndex, setCurrentLetterIndex] = useState(0);

    const [galleryModal, setGalleryModal] = useState(false);
    const [currentMemoryIndex, setCurrentMemoryIndex] = useState(0);

    const ludoImageRef = useRef(null);
    let interactionCount = 0;
    let ludoClickCount = 0;

    const createFloatingHearts = (heartTypes, count) => {
        const newHearts = [];
        for (let i = 0; i < count; i++) {
            newHearts.push({
                id: Math.random(),
                type: heartTypes[Math.floor(Math.random() * heartTypes.length)],
                style: {
                    left: Math.random() * 100 + '%',
                    animationDelay: Math.random() * 0.5 + 's',
                    animationDuration: (Math.random() * 2 + 2) + 's',
                }
            });
        }
        setFloatingHearts(prev => [...prev, ...newHearts]);
        setTimeout(() => {
            setFloatingHearts(prev => prev.slice(count));
        }, 4000);
    };

    const increaseMood = (amount) => {
        setMoodLevel(prev => Math.min(100, prev + amount));
    };

    const showMessage = (message) => {
        setCurrentMessage(message);
    };

    const handleLudoClick = () => {
        ludoClickCount++;
        interactionCount++;

        const reactions = gameData.ludoReactions;
        const randomReaction = reactions[Math.floor(Math.random() * reactions.length)];
        showMessage(randomReaction);

        if (ludoClickCount % 3 === 0) {
            setLudoAnimation('excited-mode');
            createFloatingHearts(['🐾', '🐶', '💖'], 8);
            increaseMood(10);
        } else if (ludoClickCount % 2 === 0) {
            setLudoAnimation('happy-mode');
            createFloatingHearts(['❤️', '✨'], 5);
            increaseMood(5);
        }

        setTimeout(() => {
            setLudoAnimation('');
        }, 1000);

        if (ludoClickCount === 5) {
            setSurprise({ content: "🎉 LUDO is super excited! He says you're the best human ever! Want to hear a secret? Koushal practices saying 'I love you' to LUDO every morning! 🐶💕", visible: true });
        } else if (ludoClickCount === 10) {
            setSurprise({ content: "🌟 WOW! LUDO declares you the official 'Best Human Award' winner! He wants to give you all his toys and treats! 🏆🦴", visible: true });
        }

        const statuses = [
            "So happy you clicked me! 🐾",
            "Woof woof! More clicks please! 🐶",
            "You're the best, Vishu! 💖",
            "LUDO loves belly rubs! 🤗",
            "Tail wagging intensifies! 🌟"
        ];
        setDogStatus(statuses[Math.floor(Math.random() * statuses.length)]);
    };

    const showRandomCompliment = () => {
        interactionCount++;
        const compliment = gameData.compliments[Math.floor(Math.random() * gameData.compliments.length)];
        showMessage(compliment);
        createFloatingHearts(['🌟', '✨', '💖'], 6);
        increaseMood(8);
    };

    const showApology = () => {
        interactionCount++;
        const apology = gameData.convincingMessages[Math.floor(Math.random() * gameData.convincingMessages.length)];
        setSurprise({ content: apology, visible: true });
        setLudoAnimation('sad-mode');
        createFloatingHearts(['🥺', '💔', '🙏'], 4);
        increaseMood(12);

        setTimeout(() => {
            setLudoAnimation('');
        }, 1500);
    };

    const makeSweetPromise = () => {
        interactionCount++;
        const promise = gameData.sweetPromises[Math.floor(Math.random() * gameData.sweetPromises.length)];
        setSurprise({ content: promise, visible: true });
        createFloatingHearts(['🤝', '💖', '⭐'], 5);
        increaseMood(15);
    };

    const giveVirtualHug = () => {
        interactionCount++;
        showMessage("🤗 Sending you the biggest, warmest hug, Bachaa ummaaa! Feel my arms around you! 💕");
        if (ludoImageRef.current) {
            ludoImageRef.current.style.transform = 'scale(1.2)';
        }
        createFloatingHearts(['🤗', '💝', '🥰', '❤️'], 10);
        increaseMood(25);

        setTimeout(() => {
            if (ludoImageRef.current) {
                ludoImageRef.current.style.transform = '';
            }
            showMessage("Hug delivered successfully! I love you so so much, beautiful Bayko! 💖");
        }, 2000);
    };

    const activateEmergencyMode = () => {
        interactionCount++;
        const emergencyMsg = gameData.emergencyMessages[Math.floor(Math.random() * gameData.emergencyMessages.length)];
        setSurprise({ content: emergencyMsg, visible: true });
        createFloatingHearts(['🚨', '💖', '🥺', '✨', '🌟', '❤️'], 15);
        increaseMood(20);
    };

    useEffect(() => {
        if (moodLevel === 100) {
            setSurprise({ content: "🎉 MAXIMUM HAPPINESS ACHIEVED! mera pyara bachaa, you're absolutely glowing with those pink pink chicks! Koushal's mission accomplished! 💖✨", visible: true });
            createFloatingHearts(['🎉', '🌟', '👑', '💖', '✨'], 20);
        }
    }, [moodLevel]);

    return (
        <>
            <Head>
                <title>Ayy maza god baal ahe na tu?</title>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Head>
            <div className="container">
                <div className="game-card">
                    <h1 className="title">Ayy maza god baal ahe na tu? 💖</h1>

                    <div className="ludo-container" onClick={handleLudoClick}>
                        <div className={`dog-image ${ludoAnimation}`} ref={ludoImageRef}>
                            <div className="dog-face">
                                <div className="dog-ears">
                                    <div className="ear left"></div>
                                    <div className="ear right"></div>
                                </div>
                                <div className="dog-head">
                                    <div className="dog-eyes">
                                        <div className="eye left"></div>
                                        <div className="eye right"></div>
                                    </div>
                                    <div className="dog-nose"></div>
                                    <div className="dog-mouth"></div>
                                </div>
                                <div className="dog-body"></div>
                                <div className="dog-tail"></div>
                            </div>
                        </div>
                        <p className="dog-name">LUDO 🐶</p>
                        <p className="dog-status">{dogStatus}</p>
                    </div>

                    <div className="message-container">
                        <p className="message">{currentMessage}</p>
                    </div>

                    <div className="interactive-grid">
                        <button className="btn btn-emergency" onClick={activateEmergencyMode}>🚨 Emergency Cute Mode</button>
                        <button className="btn btn-poem" onClick={() => setPoemModal(true)}>💌 Love Poems</button>
                        <button className="btn btn-compliment" onClick={showRandomCompliment}>🌟 Compliment Me</button>
                        <button className="btn btn-apology" onClick={showApology}>🥺 Apology Booth</button>
                        <button className="btn btn-love-letter" onClick={() => setLoveLetterModal(true)}>💕 Love Letter</button>
                        <button className="btn btn-gallery" onClick={() => setGalleryModal(true)}>📸 Memory Lane</button>
                        <button className="btn btn-promise" onClick={makeSweetPromise}>🤝 Sweet Promises</button>
                        <button className="btn btn-hug" onClick={giveVirtualHug}>🤗 Virtual Hug</button>
                    </div>

                    <div className="mood-meter">
                        <div className="mood-label">Vishu's Mood Meter:</div>
                        <div className="mood-bar">
                            <div className="mood-fill" style={{ width: `${moodLevel}%` }}></div>
                            <div className="mood-indicator">
                                {moodLevel >= 80 ? '😍' : moodLevel >= 60 ? '😊' : moodLevel >= 40 ? '😐' : moodLevel >= 20 ? '😕' : '😢'}
                            </div>
                        </div>
                    </div>

                    {surprise.visible && (
                        <div className="surprise-section">
                            <div className="surprise-content">{surprise.content}</div>
                            <button className="btn btn-close" onClick={() => setSurprise({ ...surprise, visible: false })}>Close</button>
                        </div>
                    )}

                    <div className="floating-elements">
                        {floatingHearts.map(heart => (
                            <div key={heart.id} className="floating-heart" style={heart.style}>{heart.type}</div>
                        ))}
                    </div>

                    <footer className="footer">
                        <p>Made with infinite love by Koushal ❤️ for his beautiful Vishu</p>
                        <p className="sub-text">Darling just hold my hand you look so beautiful 💖</p>
                    </footer>
                </div>
            </div>

            {poemModal && (
                <div className="modal">
                    <div className="modal-content">
                        <h3>{gameData.poems[currentPoemIndex].title}</h3>
                        <div className="poem-lines">
                            {gameData.poems[currentPoemIndex].lines.map((line, i) => <p key={i}>{line}</p>)}
                        </div>
                        <button className="btn btn-next" onClick={() => setCurrentPoemIndex((currentPoemIndex + 1) % gameData.poems.length)}>Next Poem</button>
                        <button className="btn btn-close-modal" onClick={() => setPoemModal(false)}>Close</button>
                    </div>
                </div>
            )}

            {loveLetterModal && (
                <div className="modal">
                    <div className="modal-content love-letter-content">
                        <h3>💌 Generating Love Letter...</h3>
                        <div className="letter-content">{gameData.loveLetters[currentLetterIndex]}</div>
                        <button className="btn btn-new-letter" onClick={() => setCurrentLetterIndex((currentLetterIndex + 1) % gameData.loveLetters.length)}>New Letter</button>
                        <button className="btn btn-close-modal" onClick={() => setLoveLetterModal(false)}>Close</button>
                    </div>
                </div>
            )}

            {galleryModal && (
                <div className="modal">
                    <div className="modal-content gallery-content">
                        <h3>📸 Our Beautiful Memories</h3>
                        <div className="gallery-item">
                            <div className="memory-photo">{gameData.memoryGallery[currentMemoryIndex].photo}</div>
                            <p className="memory-caption">{gameData.memoryGallery[currentMemoryIndex].caption}</p>
                        </div>
                        <button className="btn btn-next-memory" onClick={() => setCurrentMemoryIndex((currentMemoryIndex + 1) % gameData.memoryGallery.length)}>Next Memory</button>
                        <button className="btn btn-close-modal" onClick={() => setGalleryModal(false)}>Close</button>
                    </div>
                </div>
            )}
        </>
    );
}