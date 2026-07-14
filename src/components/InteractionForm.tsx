function InteractionForm() {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 h-[700px] overflow-auto">
      <h2 className="text-2xl font-bold mb-6">
        Interaction Details
      </h2>

      <div className="space-y-5">

        <FormField label="HCP Name" />
        <FormField label="Date" />
        <FormField label="Product" />
        <FormField label="Sentiment" />
        <FormField label="Brochure Shared" />
        <FormField label="Notes" textarea />

      </div>
    </div>
  );
}

type FormFieldProps = {
  label: string;
  textarea?: boolean;
};

function FormField({ label, textarea = false }: FormFieldProps) {
  return (
    <div>
      <label className="block mb-2 text-sm font-semibold">
        {label}
      </label>

      {textarea ? (
        <textarea
          disabled
          rows={4}
          placeholder="AI will fill this..."
          className="w-full rounded-lg border border-gray-300 bg-gray-100 p-3"
        />
      ) : (
        <input
          disabled
          placeholder="AI will fill this..."
          className="w-full rounded-lg border border-gray-300 bg-gray-100 p-3"
        />
      )}
    </div>
  );
}

export default InteractionForm;