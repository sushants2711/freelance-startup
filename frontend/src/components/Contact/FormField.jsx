export default function FormField({ field }) {
  const baseClasses =
    "w-full bg-[#161616] border border-[var(--line-strong)] text-paper p-[14px_16px] rounded-[6px] font-sans text-[1rem] focus:border-gold focus:outline-none transition-colors";

  return (
    <div className="flex flex-col">
      <label
        htmlFor={field.id}
        className="text-[0.9rem] font-medium text-[#d0d0d0] mb-[8px] block"
      >
        {field.label}
      </label>

      {field.componentType === "input" && (
        <input
          id={field.id}
          name={field.name}
          type={field.type}
          placeholder={field.placeholder}
          required={field.required}
          className={baseClasses}
        />
      )}

      {field.componentType === "select" && (
        <select
          id={field.id}
          name={field.name}
          className={`${baseClasses} appearance-none cursor-pointer`}
        >
          {field.options.map((opt, idx) => (
            <option key={idx} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      )}

      {field.componentType === "textarea" && (
        <textarea
          id={field.id}
          name={field.name}
          placeholder={field.placeholder}
          required={field.required}
          className={`${baseClasses} resize-y min-h-[140px]`}
        ></textarea>
      )}
    </div>
  );
}
