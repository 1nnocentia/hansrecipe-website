import React, { useRef, useEffect } from 'react';
import { useAIAssistant } from '../viewmodels/hooks';
import { THEME } from '../config/theme';

const AIAssistant: React.FC = () => {
  const { isOpen, toggle, messages, input, setInput, sendMessage, isTyping } = useAIAssistant();
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  return (
    <div className="fixed bottom-6 right-6 z-60">
      <button onClick={toggle} className="w-16 h-16 bg-sage text-white rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-all group">
        {isOpen ? (
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
        ) : (
          <div className="relative">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" /></svg>
          </div>
        )}
      </button>

      {isOpen && (
        <div className="absolute bottom-20 right-0 w-[90vw] sm:w-100 h-125 bg-white rounded-3xl shadow-2xl border border-gray-100 flex flex-col overflow-hidden">
          <div className="bg-sage p-6 text-white">
            <h3 className="text-xl font-serif font-bold">Tanya Han's Assistant</h3>
            {/* <p className="text-xs opacity-80 uppercase tracking-widest">Edukasi Fermentasi</p> */}
          </div>
          
          <div ref={scrollRef} className="grow p-4 overflow-y-auto space-y-4 bg-gray-50">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] p-4 rounded-2xl text-sm ${msg.role === 'user' ? 'bg-sage text-white' : 'bg-white text-gray-800 shadow-sm'}`}>
                  {msg.text}
                </div>
              </div>
            ))}
            {isTyping && <div className="text-xs text-gray-400 italic">Sedang mengetik...</div>}
          </div>

          <div className="p-4 bg-white border-t border-gray-100">
            <div className="flex space-x-2">
              <input value={input} onChange={(e) => setInput(e.target.value)} onKeyPress={(e) => e.key === 'Enter' && sendMessage()} placeholder="Tanyakan manfaat kombucha..." className="grow px-4 py-3 bg-gray-100 rounded-xl text-sm focus:outline-none" />
              <button onClick={sendMessage} className="bg-sage text-white p-3 rounded-xl"><svg className="w-5 h-5 rotate-90" fill="currentColor" viewBox="0 0 20 20"><path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" /></svg></button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AIAssistant;
