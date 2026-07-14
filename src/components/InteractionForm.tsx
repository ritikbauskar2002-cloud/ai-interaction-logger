function InteractionForm() {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <h2 className="text-2xl font-bold mb-6">
        Interaction Details
      </h2>

      <div className="space-y-4">

        <div>
          <label className="block text-sm font-medium mb-1">
            HCP Name
          </label>
          <input
            type="text"
            disabled
            placeholder="AI will fill this"
            className="w-full border rounded-lg p-2 bg-gray-100"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">
            Date
          </label>
          <input
            type="text"
            disabled
            placeholder="AI will fill this"
            className="w-full border rounded-lg p-2 bg-gray-100"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">
            Product
          </label>
          <input
            type="text"
            disabled
            placeholder="AI will fill this"
            className="w-full border rounded-lg p-2 bg-gray-100"
          />
        </div>

      </div>

    </div>
  );
}

export default InteractionForm;