import React, { useState, useEffect } from "react";
import { Heart, Columns, Flower2, CircleDot, Home, Clock } from "lucide-react";

// Quote Database
const quoteDatabase = {
  stoicism: {
    anxiety: [
      {
        text: "You have power over your mind - not outside events. Realize this, and you will find strength.",
        author: "Marcus Aurelius",
        story:
          "When anxiety grips you, remember that your thoughts are within your control. The Roman emperor Marcus Aurelius wrote this while leading armies and facing constant uncertainty. He learned that peace comes not from controlling circumstances, but from mastering our response to them.",
      },
      {
        text: "He who fears death will never do anything worth of a man who is alive.",
        author: "Seneca",
        story:
          "Anxiety often stems from fear of unknown outcomes. Seneca reminds us that living in fear of what might happen prevents us from truly living. When you feel anxious, ask yourself: what would I do if I weren't afraid?",
      },
    ],
    overwhelmed: [
      {
        text: "Confine yourself to the present.",
        author: "Marcus Aurelius",
        story:
          "Feeling overwhelmed usually comes from trying to handle everything at once. Marcus Aurelius governed an empire by focusing on one moment at a time. Break down your mountain into the single step in front of you.",
      },
      {
        text: "A setback has often cleared the way for greater prosperity.",
        author: "Seneca",
        story:
          "When overwhelmed by challenges, remember that difficulty often precedes growth. Seneca lost his wealth and was exiled, yet these hardships led to his greatest philosophical insights. Your current struggle may be preparing you for something greater.",
      },
    ],
    sad: [
      {
        text: "The happiness of your life depends upon the quality of your thoughts.",
        author: "Marcus Aurelius",
        story:
          "Sadness colors how we see the world. Marcus Aurelius understood that our inner dialogue shapes our reality. When sad, be gentle with your thoughts. Your mind is a garden—tend it carefully.",
      },
      {
        text: "Life is very short and anxious for those who forget the past, neglect the present, and fear the future.",
        author: "Seneca",
        story:
          "Sadness often comes from dwelling on what was or fearing what will be. Seneca teaches us to find meaning in this present moment, for it's the only moment we truly possess.",
      },
    ],
    angry: [
      {
        text: "The best revenge is not to be like your enemy.",
        author: "Marcus Aurelius",
        story:
          "Anger tempts us to lash out, but Marcus Aurelius suggests a powerful alternative. When someone wrongs you, responding with wisdom rather than rage demonstrates true strength. Don't let others dictate who you become.",
      },
      {
        text: "Anger is an acid that can do more harm to the vessel in which it is stored than to anything on which it is poured.",
        author: "Seneca",
        story:
          "Seneca observed that anger hurts the angry person most. When you feel rage building, notice how it affects your body and mind. The person you're angry at may be sleeping peacefully while you suffer.",
      },
    ],
    stressed: [
      {
        text: "It's not what happens to you, but how you react to it that matters.",
        author: "Epictetus",
        story:
          "Stress comes from feeling we must control everything. Epictetus, who lived as a slave before becoming a philosopher, learned that true freedom comes from accepting what we cannot change and acting on what we can.",
      },
    ],
    change: [
      {
        text: "Loss is nothing else but change, and change is Nature's delight.",
        author: "Marcus Aurelius",
        story:
          "Change feels threatening because we cling to stability. But Marcus Aurelius saw that transformation is the universe's natural state. The tree sheds leaves to grow new ones. What you're losing may be making room for something new.",
      },
    ],
    loss: [
      {
        text: "What man actually needs is not a tensionless state but rather the striving and struggling for some goal worthy of him.",
        author: "Marcus Aurelius",
        story:
          "In loss, we often feel empty. Marcus Aurelius reminds us that meaning comes not from what we have, but from what we pursue. Let your loss redirect you toward a purpose that honors what you've experienced.",
      },
    ],
    motivation: [
      {
        text: "Waste no more time arguing what a good man should be. Be one.",
        author: "Marcus Aurelius",
        story:
          "Motivation isn't about feeling inspired—it's about acting despite not feeling inspired. Marcus Aurelius wrote this as emperor, reminding himself that character is built through action, not contemplation.",
      },
    ],
  },
  buddhism: {
    anxiety: [
      {
        text: "Do not dwell in the past, do not dream of the future, concentrate the mind on the present moment.",
        author: "Buddha",
        story:
          "Anxiety lives in the gap between now and what might be. The Buddha teaches that peace exists only in the present moment. When anxiety arises, gently bring your attention back to your breath, to this moment, to what is actually happening right now.",
      },
      {
        text: "Nothing can harm you as much as your own thoughts unguarded.",
        author: "Buddha",
        story:
          "Anxious thoughts spiral when left unchecked. The Buddha understood that our mind, left unwatched, creates suffering. Practice observing your thoughts without believing them. You are not your anxiety—you are the awareness that notices it.",
      },
    ],
    overwhelmed: [
      {
        text: "You only lose what you cling to.",
        author: "Buddha",
        story:
          "Feeling overwhelmed often comes from trying to hold onto too much. The Buddha teaches that suffering increases when we grasp tightly. What if you loosened your grip? Not everything requires your immediate attention or perfect execution.",
      },
      {
        text: "The trouble is, you think you have time.",
        author: "Buddha",
        story:
          "Paradoxically, feeling overwhelmed can stem from believing we must do everything. The Buddha reminds us that life is precious and finite. This helps us prioritize what truly matters and release what doesn't.",
      },
    ],
    sad: [
      {
        text: "Every morning we are born again. What we do today is what matters most.",
        author: "Buddha",
        story:
          "Sadness can make us feel stuck in how we feel. But the Buddha offers hope: each day is a new beginning. Yesterday's pain doesn't have to define today. You have the chance to start fresh each morning.",
      },
      {
        text: "Pain is certain, suffering is optional.",
        author: "Buddha",
        story:
          "The Buddha distinguished between pain (which is inevitable) and suffering (which we create through our relationship with pain). You're allowed to feel sad, but you don't have to let sadness define your entire existence.",
      },
    ],
    angry: [
      {
        text: "Holding onto anger is like drinking poison and expecting the other person to die.",
        author: "Buddha",
        story:
          "The Buddha observed that anger hurts us more than those we're angry with. When someone cuts you off in traffic and you rage for hours, who suffers? The other driver has forgotten the incident, but you carry the poison.",
      },
      {
        text: "You will not be punished for your anger, you will be punished by your anger.",
        author: "Buddha",
        story:
          "Anger isn't just an emotion we experience—it's a force that shapes our choices and relationships. The Buddha teaches that anger itself becomes the punishment, isolating us and clouding our judgment.",
      },
    ],
    lonely: [
      {
        text: "If you truly loved yourself, you could never hurt another.",
        author: "Buddha",
        story:
          "Loneliness often stems from feeling disconnected from ourselves and others. The Buddha teaches that true connection begins with self-compassion. When you befriend yourself, you become less dependent on external validation and more capable of genuine connection.",
      },
    ],
    change: [
      {
        text: "Nothing is permanent. Everything is subject to change. Being is always becoming.",
        author: "Buddha",
        story:
          "Change feels unsettling because we seek permanence in an impermanent world. The Buddha teaches that change isn't a disruption of life—it is life itself. The river never stops flowing; trying to freeze it only causes suffering.",
      },
    ],
    loss: [
      {
        text: "In the end, only three things matter: how much you loved, how gently you lived, and how gracefully you let go of things not meant for you.",
        author: "Buddha",
        story:
          "Loss teaches us about attachment. The Buddha doesn't say loss is easy, but that learning to release with grace is part of living fully. What you've lost was real and mattered. Honoring it means accepting that some things are not meant to stay forever.",
      },
    ],
  },
  taoism: {
    anxiety: [
      {
        text: "Nature does not hurry, yet everything is accomplished.",
        author: "Lao Tzu",
        story:
          "Anxiety rushes us, making us feel we must control everything immediately. Lao Tzu points to trees and rivers—they don't force growth, yet they flourish. Trust that things unfold in their own time. Your worried rushing may be creating the obstacles you fear.",
      },
      {
        text: "Do you have the patience to wait till your mud settles and the water is clear?",
        author: "Lao Tzu",
        story:
          "When anxious, our minds are like stirred-up water. Lao Tzu asks: can you simply wait? Not fix, not force, just allow the chaos to settle naturally. Clarity comes not from more thinking, but from stillness.",
      },
    ],
    overwhelmed: [
      {
        text: "To the mind that is still, the whole universe surrenders.",
        author: "Lao Tzu",
        story:
          "Feeling overwhelmed, we frantically chase solutions. But Lao Tzu suggests the opposite: become still. In stillness, we see clearly what matters and what doesn't. The universe works with us when we stop fighting it.",
      },
      {
        text: "When I let go of what I am, I become what I might be.",
        author: "Lao Tzu",
        story:
          "Overwhelm often comes from clinging to how things 'should' be. Lao Tzu invites us to release our rigid expectations. Who might you become if you stopped forcing yourself to fit a predetermined mold? What doors might open?",
      },
    ],
    sad: [
      {
        text: "New beginnings are often disguised as painful endings.",
        author: "Lao Tzu",
        story:
          "Sadness marks transitions. What feels like an ending may be life clearing space for something new. Lao Tzu teaches that the Tao moves in cycles—death feeds life, endings enable beginnings. Your sadness honors what was while preparing you for what comes next.",
      },
    ],
    frustrated: [
      {
        text: "By letting it go it all gets done. The world is won by those who let it go.",
        author: "Lao Tzu",
        story:
          "Frustration builds when we force solutions. Lao Tzu offers a paradox: release control to gain control. Like trying to grab water, the tighter you squeeze, the more slips away. What if you softened your grip?",
      },
    ],
    change: [
      {
        text: "Life is a series of natural and spontaneous changes. Don't resist them; that only creates sorrow.",
        author: "Lao Tzu",
        story:
          "We fear change because we crave stability. But Lao Tzu sees change as natural as breathing. Fighting change is like trying to stop the seasons. What if you moved with change instead of against it? Like a reed bending in the wind rather than a rigid tree that breaks.",
      },
      {
        text: "The wise man is one who knows what he does not know.",
        author: "Lao Tzu",
        story:
          "Change brings uncertainty, and uncertainty frightens us. Lao Tzu suggests that wisdom lies in accepting that we don't know what comes next. This acceptance isn't defeat—it's freedom from the burden of needing to control the uncontrollable.",
      },
    ],
    motivation: [
      {
        text: "A journey of a thousand miles begins with a single step.",
        author: "Lao Tzu",
        story:
          "When motivation feels distant, the path ahead seems impossible. Lao Tzu reminds us that great achievements are built from small, consistent actions. You don't need to see the whole staircase—just take the next step.",
      },
    ],
    doubt: [
      {
        text: "Care about what other people think and you will always be their prisoner.",
        author: "Lao Tzu",
        story:
          "Self-doubt often stems from worrying about others' judgments. Lao Tzu teaches that true freedom comes from trusting your own path. The moment you stop seeking everyone else's approval, you discover your authentic direction.",
      },
    ],
  },
};

const App = () => {
  const [currentTab, setCurrentTab] = useState("home");
  const [currentScreen, setCurrentScreen] = useState("home");
  const [selectedMoods, setSelectedMoods] = useState([]);
  const [allMatchedQuotes, setAllMatchedQuotes] = useState([]);
  const [displayedQuotes, setDisplayedQuotes] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [sessions, setSessions] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [syncStatus, setSyncStatus] = useState("");

  const philosophyInfo = {
    stoicism: {
      name: "Stoicism",
      icon: Columns,
      color: "bg-blue-100 text-blue-800",
    },
    buddhism: {
      name: "Buddhism",
      icon: Flower2,
      color: "bg-purple-100 text-purple-800",
    },
    taoism: {
      name: "Taoism",
      icon: CircleDot,
      color: "bg-green-100 text-green-800",
    },
  };

  const moodOptions = {
    emotions: [
      "anxiety",
      "overwhelmed",
      "sad",
      "angry",
      "frustrated",
      "lonely",
      "stressed",
    ],
    situations: [
      "change",
      "loss",
      "motivation",
      "relationship",
      "work",
      "doubt",
      "decision",
    ],
  };

  // Load favorites and sessions from cloud storage on mount
  useEffect(() => {
    const loadData = async () => {
      setIsLoading(true);
      try {
        // Check if cloud storage is available (only in Claude.ai)
        if (typeof window.storage !== "undefined") {
          const favoritesData = await window.storage.get(
            "philosophy-favorites",
            false
          );
          if (favoritesData?.value) {
            setFavorites(JSON.parse(favoritesData.value));
          }

          const sessionsData = await window.storage.get(
            "philosophy-sessions",
            false
          );
          if (sessionsData?.value) {
            setSessions(JSON.parse(sessionsData.value));
          }

          setSyncStatus("✓ Cloud synced");
        } else {
          const storedFavorites = localStorage.getItem("philosophyFavorites");
          const storedSessions = localStorage.getItem("philosophySessions");
          if (storedFavorites) setFavorites(JSON.parse(storedFavorites));
          if (storedSessions) setSessions(JSON.parse(storedSessions));
          setSyncStatus("✓ Saved locally");
        }
      } catch (error) {
        const storedFavorites = localStorage.getItem("philosophyFavorites");
        const storedSessions = localStorage.getItem("philosophySessions");
        if (storedFavorites) setFavorites(JSON.parse(storedFavorites));
        if (storedSessions) setSessions(JSON.parse(storedSessions));
        setSyncStatus("✓ Saved locally");
      }
      setIsLoading(false);
    };

    loadData();
  }, []);

  // Save favorites
  useEffect(() => {
    const saveFavorites = async () => {
      if (!isLoading) {
        try {
          localStorage.setItem(
            "philosophyFavorites",
            JSON.stringify(favorites)
          );

          if (typeof window.storage !== "undefined") {
            await window.storage.set(
              "philosophy-favorites",
              JSON.stringify(favorites),
              false
            );
            setSyncStatus("✓ Cloud synced");
          } else {
            setSyncStatus("✓ Saved locally");
          }

          setTimeout(() => setSyncStatus(""), 2000);
        } catch (error) {
          setSyncStatus("✓ Saved locally");
          setTimeout(() => setSyncStatus(""), 2000);
        }
      }
    };

    saveFavorites();
  }, [favorites, isLoading]);

  // Save sessions
  useEffect(() => {
    const saveSessions = async () => {
      if (!isLoading) {
        try {
          localStorage.setItem("philosophySessions", JSON.stringify(sessions));

          if (typeof window.storage !== "undefined") {
            await window.storage.set(
              "philosophy-sessions",
              JSON.stringify(sessions),
              false
            );
          }
        } catch (error) {
          // Silently fail
        }
      }
    };

    saveSessions();
  }, [sessions, isLoading]);

  const toggleMood = (mood) => {
    if (selectedMoods.includes(mood)) {
      setSelectedMoods(selectedMoods.filter((m) => m !== mood));
    } else {
      setSelectedMoods([...selectedMoods, mood]);
    }
  };

  const findRelevantQuotes = () => {
    const matchedQuotes = [];

    Object.keys(quoteDatabase).forEach((philosophy) => {
      selectedMoods.forEach((mood) => {
        const quotes = quoteDatabase[philosophy][mood];
        if (quotes) {
          quotes.forEach((quote) => {
            matchedQuotes.push({
              ...quote,
              philosophy,
            });
          });
        }
      });
    });

    const shuffled = matchedQuotes.sort(() => Math.random() - 0.5);

    setAllMatchedQuotes(shuffled);
    setDisplayedQuotes(shuffled.slice(0, 3));

    const newSession = {
      id: Date.now(),
      timestamp: new Date().toISOString(),
      moods: selectedMoods,
      quoteCount: shuffled.length,
    };

    const updatedSessions = [newSession, ...sessions].slice(0, 20);
    setSessions(updatedSessions);

    setCurrentScreen("results");
  };

  const loadMoreQuotes = () => {
    const currentCount = displayedQuotes.length;
    const nextBatch = allMatchedQuotes.slice(currentCount, currentCount + 3);
    setDisplayedQuotes([...displayedQuotes, ...nextBatch]);
  };

  const toggleFavorite = (quote) => {
    const quoteKey = `${quote.text}-${quote.author}`;
    const existing = favorites.find(
      (f) => `${f.text}-${f.author}` === quoteKey
    );

    if (existing) {
      setFavorites(
        favorites.filter((f) => `${f.text}-${f.author}` !== quoteKey)
      );
    } else {
      setFavorites([...favorites, quote]);
    }
  };

  const isFavorite = (quote) => {
    const quoteKey = `${quote.text}-${quote.author}`;
    return favorites.some((f) => `${f.text}-${f.author}` === quoteKey);
  };

  const startNewSearch = () => {
    setSelectedMoods([]);
    setAllMatchedQuotes([]);
    setDisplayedQuotes([]);
    setCurrentScreen("mood");
  };

  // Navigation
  const NavigationBar = () => (
    <>
      {/* Desktop Top Nav */}
      <nav className="hidden sm:block bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex justify-between items-center h-16">
            <h1 className="text-2xl font-extralight tracking-wide text-gray-900">
              Philosophy
            </h1>
            <div className="flex gap-8">
              <button
                onClick={() => {
                  setCurrentTab("home");
                  setCurrentScreen("home");
                }}
                className={`flex items-center gap-2 px-4 py-2 font-light transition-colors ${
                  currentTab === "home"
                    ? "text-gray-900 border-b-2 border-gray-900"
                    : "text-gray-500 hover:text-gray-900"
                }`}
              >
                <Home size={20} />
                <span>Home</span>
              </button>
              <button
                onClick={() => {
                  setCurrentTab("favorites");
                }}
                className={`flex items-center gap-2 px-4 py-2 font-light transition-colors ${
                  currentTab === "favorites"
                    ? "text-gray-900 border-b-2 border-gray-900"
                    : "text-gray-500 hover:text-gray-900"
                }`}
              >
                <Heart size={20} />
                <span>Favorites</span>
                {favorites.length > 0 && (
                  <span className="ml-1 px-2 py-0.5 bg-red-100 text-red-600 rounded-full text-xs">
                    {favorites.length}
                  </span>
                )}
              </button>
              <button
                onClick={() => {
                  setCurrentTab("history");
                }}
                className={`flex items-center gap-2 px-4 py-2 font-light transition-colors ${
                  currentTab === "history"
                    ? "text-gray-900 border-b-2 border-gray-900"
                    : "text-gray-500 hover:text-gray-900"
                }`}
              >
                <Clock size={20} />
                <span>History</span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Bottom Tab Bar */}
      <nav className="sm:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 safe-area-bottom z-50">
        <div className="flex justify-around items-center h-16">
          <button
            onClick={() => {
              setCurrentTab("home");
              setCurrentScreen("home");
            }}
            className={`flex flex-col items-center justify-center flex-1 h-full transition-colors ${
              currentTab === "home" ? "text-gray-900" : "text-gray-400"
            }`}
          >
            <Home size={24} />
            <span className="text-xs mt-1 font-light">Home</span>
          </button>
          <button
            onClick={() => {
              setCurrentTab("favorites");
            }}
            className={`flex flex-col items-center justify-center flex-1 h-full transition-colors relative ${
              currentTab === "favorites" ? "text-gray-900" : "text-gray-400"
            }`}
          >
            <Heart
              size={24}
              fill={currentTab === "favorites" ? "currentColor" : "none"}
            />
            <span className="text-xs mt-1 font-light">Favorites</span>
            {favorites.length > 0 && (
              <span className="absolute top-2 right-1/4 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {favorites.length}
              </span>
            )}
          </button>
          <button
            onClick={() => {
              setCurrentTab("history");
            }}
            className={`flex flex-col items-center justify-center flex-1 h-full transition-colors ${
              currentTab === "history" ? "text-gray-900" : "text-gray-400"
            }`}
          >
            <Clock size={24} />
            <span className="text-xs mt-1 font-light">History</span>
          </button>
        </div>
      </nav>
    </>
  );

  // Quote Card Component
  const QuoteCard = ({ quote, index }) => {
    const philInfo = philosophyInfo[quote.philosophy];
    const Icon = philInfo.icon;

    return (
      <div
        key={index}
        className="bg-white p-6 sm:p-8 rounded-2xl sm:rounded-3xl shadow-sm"
      >
        <div className="flex justify-between items-start mb-4 sm:mb-6">
          <span
            className={`px-2.5 sm:px-3 py-1 rounded-full text-xs font-light flex items-center gap-1.5 ${philInfo.color}`}
          >
            <Icon size={14} />
            {philInfo.name}
          </span>
          <button
            onClick={() => toggleFavorite(quote)}
            className="text-gray-400 hover:text-red-500 transition-colors"
          >
            <Heart
              size={22}
              fill={isFavorite(quote) ? "currentColor" : "none"}
              className={isFavorite(quote) ? "text-red-500" : ""}
            />
          </button>
        </div>

        <blockquote className="text-lg sm:text-xl font-light leading-relaxed text-gray-900 mb-4 sm:mb-6">
          "{quote.text}"
        </blockquote>

        <p className="text-sm sm:text-base text-gray-600 font-light leading-relaxed mb-3 sm:mb-4">
          {quote.story}
        </p>

        <p className="text-xs sm:text-sm text-gray-500 font-light">
          — {quote.author}
        </p>
      </div>
    );
  };

  // Home Screen
  const HomeScreen = () => (
    <div
      className="min-h-screen pb-24 sm:pb-6"
      style={{ backgroundColor: "#FFF8F0" }}
    >
      {syncStatus && (
        <div className="text-center py-4">
          <span className="text-xs text-gray-500 font-light">{syncStatus}</span>
        </div>
      )}

      {/* Hero Section - Full Width */}
      <div className="text-center mb-8 sm:mb-12 bg-white p-6 sm:p-12 shadow-sm">
        <h1 className="text-3xl sm:text-5xl font-extralight tracking-wide text-gray-900 mb-3 sm:mb-4">
          How are you feeling?
        </h1>
        <p className="text-gray-600 font-light text-base sm:text-lg mb-6 sm:mb-8">
          Find the wisdom you need right now
        </p>
        <button
          onClick={() => setCurrentScreen("mood")}
          className="bg-gray-900 text-white px-8 sm:px-12 py-4 sm:py-6 rounded-2xl sm:rounded-3xl font-light tracking-wide text-base sm:text-lg hover:bg-gray-800 transition-colors"
        >
          Tell Us How You Feel
        </button>
      </div>

      {/* Two Column Layout - With Margins */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {/* Favorites Preview */}
          <div>
            <div className="flex justify-between items-center mb-4 sm:mb-6">
              <h2 className="text-xl sm:text-2xl font-extralight tracking-wide text-gray-900">
                Saved Quotes
              </h2>
              {favorites.length > 0 && (
                <button
                  onClick={() => {
                    setCurrentTab("favorites");
                  }}
                  className="text-sm text-gray-600 hover:text-gray-900 font-light transition-colors"
                >
                  View All ({favorites.length})
                </button>
              )}
            </div>

            {favorites.length > 0 ? (
              <div className="space-y-4">
                {favorites.slice(0, 3).map((quote, index) => {
                  const philInfo = philosophyInfo[quote.philosophy];
                  const Icon = philInfo.icon;

                  return (
                    <div
                      key={index}
                      className="bg-white p-5 sm:p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow cursor-pointer"
                      onClick={() => {
                        setCurrentTab("favorites");
                      }}
                    >
                      <div className="flex justify-between items-start mb-3 sm:mb-4">
                        <span
                          className={`px-2.5 sm:px-3 py-1 rounded-full text-xs font-light flex items-center gap-1.5 ${philInfo.color}`}
                        >
                          <Icon size={14} />
                          {philInfo.name}
                        </span>
                        <Heart
                          size={18}
                          fill="currentColor"
                          className="text-red-500"
                        />
                      </div>
                      <blockquote className="text-sm sm:text-base font-light leading-relaxed text-gray-900 mb-2">
                        "
                        {quote.text.length > 120
                          ? quote.text.substring(0, 120) + "..."
                          : quote.text}
                        "
                      </blockquote>
                      <p className="text-xs text-gray-500 font-light">
                        — {quote.author}
                      </p>
                    </div>
                  );
                })}
              </div>
            ) : (
              <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm text-center">
                <Heart size={32} className="mx-auto mb-3 text-gray-300" />
                <p className="text-gray-600 font-light text-sm">
                  Your favorite quotes will appear here
                </p>
              </div>
            )}
          </div>

          {/* Recent History Preview */}
          <div>
            <div className="flex justify-between items-center mb-4 sm:mb-6">
              <h2 className="text-xl sm:text-2xl font-extralight tracking-wide text-gray-900">
                Recent Journey
              </h2>
              {sessions.length > 0 && (
                <button
                  onClick={() => {
                    setCurrentTab("history");
                  }}
                  className="text-sm text-gray-600 hover:text-gray-900 font-light transition-colors"
                >
                  View All ({sessions.length})
                </button>
              )}
            </div>

            {sessions.length > 0 ? (
              <div className="space-y-3 sm:space-y-4">
                {sessions.slice(0, 5).map((session) => (
                  <div
                    key={session.id}
                    className="bg-white p-4 sm:p-5 rounded-2xl shadow-sm hover:shadow-md transition-shadow cursor-pointer"
                    onClick={() => {
                      setCurrentTab("history");
                    }}
                  >
                    <div className="flex justify-between items-start mb-2 sm:mb-3 flex-wrap gap-2">
                      <span className="text-xs text-gray-500 font-light">
                        {new Date(session.timestamp).toLocaleDateString()} at{" "}
                        {new Date(session.timestamp).toLocaleTimeString([], {
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                      </span>
                      <span className="text-xs text-gray-600 font-light">
                        {session.quoteCount} quotes
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {session.moods.slice(0, 4).map((mood) => (
                        <span
                          key={mood}
                          className="px-2 sm:px-2.5 py-0.5 sm:py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-light capitalize"
                        >
                          {mood}
                        </span>
                      ))}
                      {session.moods.length > 4 && (
                        <span className="px-2 sm:px-2.5 py-0.5 sm:py-1 text-gray-500 text-xs font-light">
                          +{session.moods.length - 4}
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm text-center">
                <Clock size={32} className="mx-auto mb-3 text-gray-300" />
                <p className="text-gray-600 font-light text-sm">
                  Your reflection history will appear here
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );

  // Mood Selection Screen
  const MoodScreen = () => (
    <div
      className="min-h-screen p-4 sm:p-6 pb-24 sm:pb-6"
      style={{ backgroundColor: "#FFF8F0" }}
    >
      <div className="max-w-2xl mx-auto">
        <h1 className="text-2xl sm:text-3xl font-extralight tracking-wide text-gray-900 mb-2">
          What's on your mind?
        </h1>
        <p className="text-gray-600 font-light text-sm sm:text-base mb-6 sm:mb-8">
          Select all that apply—we'll find wisdom that speaks to you
        </p>

        <div className="mb-6 sm:mb-8">
          <h2 className="text-lg sm:text-xl font-light text-gray-900 mb-3 sm:mb-4">
            Emotions
          </h2>
          <div className="flex flex-wrap gap-2 sm:gap-3">
            {moodOptions.emotions.map((mood) => (
              <button
                key={mood}
                onClick={() => toggleMood(mood)}
                className={`px-4 sm:px-6 py-2.5 sm:py-3 rounded-full font-light transition-all capitalize text-sm sm:text-base ${
                  selectedMoods.includes(mood)
                    ? "bg-gray-900 text-white"
                    : "bg-white text-gray-700 border border-gray-200 hover:border-gray-400"
                }`}
              >
                {mood}
              </button>
            ))}
          </div>
        </div>

        <div className="mb-6 sm:mb-8">
          <h2 className="text-lg sm:text-xl font-light text-gray-900 mb-3 sm:mb-4">
            Life Situations
          </h2>
          <div className="flex flex-wrap gap-2 sm:gap-3">
            {moodOptions.situations.map((mood) => (
              <button
                key={mood}
                onClick={() => toggleMood(mood)}
                className={`px-4 sm:px-6 py-2.5 sm:py-3 rounded-full font-light transition-all capitalize text-sm sm:text-base ${
                  selectedMoods.includes(mood)
                    ? "bg-gray-900 text-white"
                    : "bg-white text-gray-700 border border-gray-200 hover:border-gray-400"
                }`}
              >
                {mood}
              </button>
            ))}
          </div>
        </div>

        <div className="flex gap-3 sm:gap-4">
          <button
            onClick={() => setCurrentScreen("home")}
            className="flex-1 bg-white text-gray-900 py-3.5 sm:py-4 rounded-2xl sm:rounded-3xl font-light tracking-wide border border-gray-300 hover:bg-gray-50 transition-colors text-sm sm:text-base"
          >
            Back
          </button>
          <button
            onClick={findRelevantQuotes}
            disabled={selectedMoods.length === 0}
            className="flex-1 bg-gray-900 text-white py-3.5 sm:py-4 rounded-2xl sm:rounded-3xl font-light tracking-wide hover:bg-gray-800 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed text-sm sm:text-base"
          >
            Find Wisdom
          </button>
        </div>
      </div>
    </div>
  );

  // Results Screen
  const ResultsScreen = () => {
    const hasMoreQuotes = displayedQuotes.length < allMatchedQuotes.length;

    return (
      <div
        className="min-h-screen p-4 sm:p-6 pb-24 sm:pb-6"
        style={{ backgroundColor: "#FFF8F0" }}
      >
        <div className="max-w-3xl mx-auto">
          <h1 className="text-2xl sm:text-3xl font-extralight tracking-wide text-gray-900 mb-2">
            Wisdom for You
          </h1>
          <p className="text-gray-600 font-light text-sm sm:text-base mb-6 sm:mb-8">
            {allMatchedQuotes.length}{" "}
            {allMatchedQuotes.length === 1 ? "quote" : "quotes"} matched your
            feelings
          </p>

          {displayedQuotes.length > 0 ? (
            <>
              <div className="space-y-4 sm:space-y-6 mb-6 sm:mb-8">
                {displayedQuotes.map((quote, index) => (
                  <QuoteCard key={index} quote={quote} index={index} />
                ))}
              </div>

              {hasMoreQuotes && (
                <button
                  onClick={loadMoreQuotes}
                  className="w-full bg-white text-gray-900 py-3.5 sm:py-4 rounded-2xl sm:rounded-3xl font-light tracking-wide border border-gray-300 hover:bg-gray-50 transition-colors mb-3 sm:mb-4 text-sm sm:text-base"
                >
                  Load More Quotes (
                  {allMatchedQuotes.length - displayedQuotes.length} remaining)
                </button>
              )}

              <button
                onClick={startNewSearch}
                className="w-full bg-gray-900 text-white py-3.5 sm:py-4 rounded-2xl sm:rounded-3xl font-light tracking-wide hover:bg-gray-800 transition-colors text-sm sm:text-base"
              >
                New Search
              </button>
            </>
          ) : (
            <div className="bg-white p-8 sm:p-12 rounded-2xl sm:rounded-3xl shadow-sm text-center">
              <p className="text-gray-600 font-light text-base sm:text-lg mb-4 sm:mb-6">
                We couldn't find specific quotes matching your selections. Try
                different moods or situations.
              </p>
              <button
                onClick={startNewSearch}
                className="w-full bg-gray-900 text-white px-6 sm:px-8 py-3.5 sm:py-4 rounded-2xl sm:rounded-3xl font-light tracking-wide hover:bg-gray-800 transition-colors text-sm sm:text-base"
              >
                Try Again
              </button>
            </div>
          )}
        </div>
      </div>
    );
  };

  // Favorites Screen
  const FavoritesScreen = () => (
    <div
      className="min-h-screen p-4 sm:p-6 pb-24 sm:pb-6"
      style={{ backgroundColor: "#FFF8F0" }}
    >
      <div className="max-w-3xl mx-auto">
        {syncStatus && (
          <div className="text-center mb-4">
            <span className="text-xs text-gray-500 font-light">
              {syncStatus}
            </span>
          </div>
        )}
        <h1 className="text-2xl sm:text-3xl font-extralight tracking-wide text-gray-900 mb-2">
          Your Saved Quotes
        </h1>
        <p className="text-gray-600 font-light text-sm sm:text-base mb-6 sm:mb-8">
          {favorites.length} {favorites.length === 1 ? "quote" : "quotes"} saved
          for reflection
        </p>

        {favorites.length > 0 ? (
          <div className="space-y-4 sm:space-y-6">
            {favorites.map((quote, index) => (
              <QuoteCard key={index} quote={quote} index={index} />
            ))}
          </div>
        ) : (
          <div className="bg-white p-8 sm:p-12 rounded-2xl sm:rounded-3xl shadow-sm text-center">
            <Heart
              size={40}
              className="mx-auto mb-3 sm:mb-4 text-gray-300 sm:w-12 sm:h-12"
            />
            <p className="text-gray-600 font-light text-base sm:text-lg mb-4 sm:mb-6">
              You haven't saved any quotes yet. When you find wisdom that
              resonates, tap the heart to save it here.
            </p>
            <button
              onClick={() => {
                setCurrentTab("home");
                setCurrentScreen("home");
              }}
              className="bg-gray-900 text-white px-6 sm:px-8 py-3.5 sm:py-4 rounded-2xl sm:rounded-3xl font-light tracking-wide hover:bg-gray-800 transition-colors text-sm sm:text-base"
            >
              Explore Quotes
            </button>
          </div>
        )}
      </div>
    </div>
  );

  // History Screen
  const HistoryScreen = () => (
    <div
      className="min-h-screen p-4 sm:p-6 pb-24 sm:pb-6"
      style={{ backgroundColor: "#FFF8F0" }}
    >
      <div className="max-w-3xl mx-auto">
        <h1 className="text-2xl sm:text-3xl font-extralight tracking-wide text-gray-900 mb-2">
          Your Journey
        </h1>
        <p className="text-gray-600 font-light text-sm sm:text-base mb-6 sm:mb-8">
          {sessions.length}{" "}
          {sessions.length === 1 ? "reflection" : "reflections"} recorded
        </p>

        {sessions.length > 0 ? (
          <div className="space-y-3 sm:space-y-4">
            {sessions.map((session) => (
              <div
                key={session.id}
                className="bg-white p-4 sm:p-6 rounded-xl sm:rounded-2xl shadow-sm"
              >
                <div className="flex justify-between items-start mb-2 sm:mb-3 flex-wrap gap-2">
                  <span className="text-xs sm:text-sm text-gray-500 font-light">
                    {new Date(session.timestamp).toLocaleDateString()} at{" "}
                    {new Date(session.timestamp).toLocaleTimeString([], {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </span>
                  <span className="text-xs sm:text-sm text-gray-600 font-light">
                    {session.quoteCount} quotes found
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {session.moods.map((mood) => (
                    <span
                      key={mood}
                      className="px-2.5 sm:px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-light capitalize"
                    >
                      {mood}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-white p-8 sm:p-12 rounded-2xl sm:rounded-3xl shadow-sm text-center">
            <Clock
              size={40}
              className="mx-auto mb-3 sm:mb-4 text-gray-300 sm:w-12 sm:h-12"
            />
            <p className="text-gray-600 font-light text-base sm:text-lg mb-4 sm:mb-6">
              Your search history will appear here. Start exploring wisdom to
              begin your journey.
            </p>
            <button
              onClick={() => {
                setCurrentTab("home");
                setCurrentScreen("home");
              }}
              className="bg-gray-900 text-white px-6 sm:px-8 py-3.5 sm:py-4 rounded-2xl sm:rounded-3xl font-light tracking-wide hover:bg-gray-800 transition-colors text-sm sm:text-base"
            >
              Begin Your Journey
            </button>
          </div>
        )}
      </div>
    </div>
  );

  if (isLoading) {
    return (
      <div
        className="min-h-screen flex items-center justify-center p-6"
        style={{ backgroundColor: "#FFF8F0" }}
      >
        <div className="text-center">
          <div className="animate-pulse mb-4">
            <div className="w-16 h-16 bg-gray-300 rounded-full mx-auto mb-4"></div>
          </div>
          <p className="text-gray-600 font-light">Loading your wisdom...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#FFF8F0" }}>
      <NavigationBar />

      <main>
        {currentTab === "home" && (
          <>
            {currentScreen === "home" && <HomeScreen />}
            {currentScreen === "mood" && <MoodScreen />}
            {currentScreen === "results" && <ResultsScreen />}
          </>
        )}
        {currentTab === "favorites" && <FavoritesScreen />}
        {currentTab === "history" && <HistoryScreen />}
      </main>
    </div>
  );
};

export default App;
