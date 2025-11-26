import React, { useState } from "react";
import { motion } from "framer-motion";
import { Sparkles, Send, Copy } from "lucide-react";
import { BlessingTone } from "../../types";
import { generateWeddingBlessing } from "../../services/geminiService";

const AIBlessing: React.FC = () => {
  const [relationship, setRelationship] = useState("");
  const [tone, setTone] = useState<BlessingTone>(BlessingTone.TRADITIONAL);
  const [senderName, setSenderName] = useState("");
  const [blessing, setBlessing] = useState("");
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    if (!relationship || !senderName) return;

    setLoading(true);
    const result = await generateWeddingBlessing(
      relationship,
      tone,
      senderName
    );
    setBlessing(result);
    setLoading(false);
  };

  return (
    <section className="py-20 bg-wedding-red relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/diamond-upholstery.png')] opacity-20"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="max-w-3xl mx-auto bg-white rounded-xl shadow-2xl overflow-hidden"
        >
          <div className="p-8 md:p-12">
            <div className="text-center mb-8">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                className="inline-block mb-4"
              >
                <Sparkles className="w-10 h-10 text-wedding-gold" />
              </motion.div>
              <h2 className="text-3xl font-serif text-gray-800 mb-2">
                AI Wedding Blessing Generator
              </h2>
              <p className="text-gray-600 font-sans">
                Stuck on what to write? Let our AI help you craft the perfect
                message for Aarav & Diya.
              </p>
            </div>

            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    value={senderName}
                    onChange={(e) => setSenderName(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-wedding-gold focus:border-transparent outline-none"
                    placeholder="e.g. Aunt Anita"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Relationship to Couple
                  </label>
                  <input
                    type="text"
                    value={relationship}
                    onChange={(e) => setRelationship(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-wedding-gold focus:border-transparent outline-none"
                    placeholder="e.g. Childhood Friend"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Tone of Blessing
                </label>
                <div className="flex flex-wrap gap-3">
                  {Object.values(BlessingTone).map((t) => (
                    <button
                      key={t}
                      onClick={() => setTone(t)}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                        tone === t
                          ? "bg-wedding-red text-white shadow-md transform scale-105"
                          : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                      }`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>

              <button
                onClick={handleGenerate}
                disabled={loading || !senderName || !relationship}
                className={`w-full py-4 rounded-lg font-bold text-lg text-white transition-all shadow-lg flex items-center justify-center gap-2 ${
                  loading || !senderName || !relationship
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-wedding-gold hover:bg-yellow-500"
                }`}
              >
                {loading ? (
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 1,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  >
                    <Sparkles className="w-6 h-6" />
                  </motion.div>
                ) : (
                  <>
                    <Sparkles className="w-5 h-5" /> Generate Blessing
                  </>
                )}
              </button>

              {blessing && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  className="mt-8 bg-wedding-cream p-6 rounded-lg border border-wedding-gold/50 relative group"
                >
                  <p className="font-script text-2xl text-gray-800 text-center leading-relaxed">
                    "{blessing}"
                  </p>
                  <button
                    onClick={() => navigator.clipboard.writeText(blessing)}
                    className="absolute top-2 right-2 p-2 text-gray-400 hover:text-wedding-red transition-colors"
                    title="Copy to clipboard"
                  >
                    <Copy className="w-4 h-4" />
                  </button>
                </motion.div>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AIBlessing;
