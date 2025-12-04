"use client";

import { useState } from "react";

const contentTemplates = {
  twitter: [
    "Just discovered the power of {topic}! Here's what you need to know: {benefit}. Who else is excited about this? Drop a comment below!",
    "Hot take: {topic} is changing the game. {benefit}. Agree or disagree?",
    "3 reasons why {topic} matters:\n\n1. {benefit}\n2. Saves you time\n3. Scales with your business\n\nWhat would you add?",
  ],
  linkedin: [
    "I've been diving deep into {topic} lately.\n\nHere's what I've learned:\n\n{benefit}\n\nThe key insight? Start small, iterate fast, and always focus on delivering value.\n\nWhat's your experience with {topic}?",
    "Unpopular opinion about {topic}:\n\n{benefit}\n\nI know this might be controversial, but hear me out...\n\nThe data speaks for itself. Companies implementing this are seeing 3x better results.\n\nThoughts?",
  ],
  instagram: [
    "The secret to {topic}? {benefit}\n\nDouble tap if you agree!\n\n#marketing #ai #growth #business #entrepreneur",
    "{topic} changed everything for us.\n\nBefore: Struggling to keep up\nAfter: {benefit}\n\nSave this for later!\n\n#marketingtips #aitools #growthhacking",
  ],
  blog: [
    "# The Ultimate Guide to {topic}\n\n## Introduction\n\nIn today's fast-paced digital landscape, {topic} has become essential for businesses of all sizes.\n\n## Why It Matters\n\n{benefit}\n\n## Key Takeaways\n\n- Start with a clear strategy\n- Measure your results\n- Iterate and improve\n\n## Conclusion\n\nThe future belongs to those who embrace {topic} early.",
  ],
};

export default function Home() {
  const [topic, setTopic] = useState("");
  const [benefit, setBenefit] = useState("");
  const [platform, setPlatform] = useState<keyof typeof contentTemplates>("twitter");
  const [generatedContent, setGeneratedContent] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);

  const generateContent = () => {
    if (!topic || !benefit) return;

    setIsGenerating(true);

    setTimeout(() => {
      const templates = contentTemplates[platform];
      const template = templates[Math.floor(Math.random() * templates.length)];
      const content = template
        .replace(/{topic}/g, topic)
        .replace(/{benefit}/g, benefit);

      setGeneratedContent(content);
      setIsGenerating(false);
    }, 1500);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generatedContent);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900">
      <header className="border-b border-purple-500/20 bg-black/20 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
              <span className="text-white font-bold text-xl">A</span>
            </div>
            <div>
              <h1 className="text-white font-bold text-xl">AI Marketing Agent</h1>
              <p className="text-purple-300 text-xs">Open Source Content Generator</p>
            </div>
          </div>
          <a
            href="https://github.com/LennyBuildsWeb3/ai-marketing-agent"
            target="_blank"
            className="text-purple-300 hover:text-white transition-colors text-sm flex items-center gap-2"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
            GitHub
          </a>
        </div>
      </header>

      <section className="max-w-6xl mx-auto px-6 py-16 text-center">
        <div className="inline-block px-4 py-1 rounded-full bg-purple-500/20 text-purple-300 text-sm mb-6">
          Powered by Open Source AI
        </div>
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Generate Marketing Content
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400"> in Seconds</span>
        </h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Free, open-source AI marketing agent. Create engaging content for Twitter, LinkedIn, Instagram, and blogs.
        </p>
      </section>

      <section className="max-w-4xl mx-auto px-6 pb-20">
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-purple-500/20 p-8">
          <div className="mb-6">
            <label className="text-gray-300 text-sm mb-2 block">Select Platform</label>
            <div className="flex flex-wrap gap-3">
              {(["twitter", "linkedin", "instagram", "blog"] as const).map((p) => (
                <button
                  key={p}
                  onClick={() => setPlatform(p)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all ${
                    platform === p
                      ? "bg-purple-500 text-white"
                      : "bg-gray-700 text-gray-300 hover:bg-gray-600"
                  }`}
                >
                  {p.charAt(0).toUpperCase() + p.slice(1)}
                </button>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <div>
              <label className="text-gray-300 text-sm mb-2 block">Topic / Product</label>
              <input
                type="text"
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
                placeholder="e.g., AI automation, SaaS tools..."
                className="w-full px-4 py-3 rounded-lg bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-colors"
              />
            </div>
            <div>
              <label className="text-gray-300 text-sm mb-2 block">Key Benefit</label>
              <input
                type="text"
                value={benefit}
                onChange={(e) => setBenefit(e.target.value)}
                placeholder="e.g., saves 10 hours per week..."
                className="w-full px-4 py-3 rounded-lg bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-colors"
              />
            </div>
          </div>

          <button
            onClick={generateContent}
            disabled={!topic || !benefit || isGenerating}
            className="w-full py-4 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold text-lg hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {isGenerating ? (
              <>
                <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
                Generating...
              </>
            ) : (
              <>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                Generate Content
              </>
            )}
          </button>

          {generatedContent && (
            <div className="mt-6">
              <div className="flex items-center justify-between mb-2">
                <label className="text-gray-300 text-sm">Generated Content</label>
                <button
                  onClick={copyToClipboard}
                  className="text-purple-400 hover:text-purple-300 text-sm flex items-center gap-1"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                  Copy
                </button>
              </div>
              <div className="bg-gray-900 rounded-lg p-4 border border-gray-700">
                <pre className="text-gray-200 whitespace-pre-wrap font-sans">{generatedContent}</pre>
              </div>
            </div>
          )}
        </div>

        <div className="grid md:grid-cols-3 gap-6 mt-12">
          <div className="bg-gray-800/30 rounded-xl p-6 border border-purple-500/10">
            <div className="w-12 h-12 rounded-lg bg-purple-500/20 flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-white font-semibold mb-2">100% Free</h3>
            <p className="text-gray-400 text-sm">No subscriptions, no hidden fees. Open source forever.</p>
          </div>
          <div className="bg-gray-800/30 rounded-xl p-6 border border-purple-500/10">
            <div className="w-12 h-12 rounded-lg bg-purple-500/20 flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="text-white font-semibold mb-2">Community Owned</h3>
            <p className="text-gray-400 text-sm">Built by marketers, for marketers. Contribute on GitHub.</p>
          </div>
          <div className="bg-gray-800/30 rounded-xl p-6 border border-purple-500/10">
            <div className="w-12 h-12 rounded-lg bg-purple-500/20 flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-white font-semibold mb-2">Powered by Sentient</h3>
            <p className="text-gray-400 text-sm">Built on open-source AI models from the Sentient ecosystem.</p>
          </div>
        </div>
      </section>

      <footer className="border-t border-purple-500/20 py-8">
        <div className="max-w-6xl mx-auto px-6 text-center text-gray-500 text-sm">
          <p>Built with love for the Sentient Builder Program</p>
          <p className="mt-1">
            <a href="https://github.com/LennyBuildsWeb3/ai-marketing-agent" className="text-purple-400 hover:text-purple-300">GitHub</a>
            {" • "}
            <a href="https://x.com/LennyBuilds" className="text-purple-400 hover:text-purple-300">Twitter</a>
          </p>
        </div>
      </footer>
    </div>
  );
}
