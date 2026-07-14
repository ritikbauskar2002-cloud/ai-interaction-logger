function ChatPanel() {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col h-[700px]">
      <h2 className="text-2xl font-bold mb-6">
        AI Assistant
      </h2>

      {/* Chat Area */}
      <div className="flex-1 border rounded-lg p-4 bg-gray-50 overflow-y-auto">
        <p className="text-gray-500">
          Start a conversation with the AI...
        </p>
      </div>

      {/* Input Area */}
      <div className="mt-4 flex gap-2">
        <input
          type="text"
          placeholder="Describe today's interaction..."
          className="flex-1 border rounded-lg p-3"
        />

        <button
          className="bg-blue-600 text-white px-6 rounded-lg hover:bg-blue-700"
        >
          Send
        </button>
      </div>
    </div>
  );
}

export default ChatPanel;