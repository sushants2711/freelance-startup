import { useState } from "react";
import { foundersContact, contactFormFields } from "./contactData";
import FormField from "./FormField";

export default function Contact() {
  const [status, setStatus] = useState(""); // '' | 'loading' | 'success' | 'error'

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    const form = e.target;
    const formData = new FormData(form);

    try {
      const response = await fetch(
        "https://formsubmit.co/ajax/sushants2711@gmail.com",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
          },
          body: formData,
        },
      );

      if (response.ok) {
        setStatus("success");
        form.reset();

        // Hide success message after 5 seconds
        setTimeout(() => {
          setStatus("");
        }, 5000);
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error("Form submission failed:", error);
      setStatus("error");
    }
  };

  return (
    <section className="py-[96px] max-sm:py-16 relative" id="contact">
      {/* Success Popup */}
      {status === "success" && (
        <div className="fixed bottom-10 right-10 bg-gold text-ink p-[16px_24px] rounded-[6px] shadow-lg z-50 flex items-center gap-[12px] animate-[slideIn_0.3s_ease-out]">
          <div className="w-[24px] h-[24px] rounded-full border-2 border-ink flex items-center justify-center">
            <svg
              width="14"
              height="10"
              viewBox="0 0 14 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 5L5 9L13 1"
                stroke="#101010"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div>
            <p className="m-0 font-bold text-[1rem]">Message Sent</p>
            <p className="m-0 text-[0.85rem] opacity-90 mt-[2px]">
              Our team will contact you within 24 hours.
            </p>
          </div>
        </div>
      )}

      {/* Error Popup */}
      {status === "error" && (
        <div className="fixed bottom-10 right-10 bg-red-500 text-white p-[16px_24px] rounded-[6px] shadow-lg z-50 flex items-center gap-[12px] animate-[slideIn_0.3s_ease-out]">
          <div>
            <p className="m-0 font-bold text-[1rem]">Something went wrong</p>
            <p className="m-0 text-[0.85rem] opacity-90 mt-[2px]">
              Please try again or email us directly.
            </p>
          </div>
        </div>
      )}

      <div className="wrap grid grid-cols-1 md:grid-cols-[0.9fr_1.1fr] gap-[64px]">
        <div>
          <p className="text-gold text-[0.85rem] font-mono mb-[12px] uppercase tracking-wider">
            contact
          </p>
          <h2 className="text-[clamp(2rem,4vw,2.75rem)] leading-tight mt-[8px]">
            Tell us what you&apos;re building
          </h2>
          <p className="text-slate mt-[16px] text-[1.1rem] leading-relaxed max-w-[42ch]">
            Send the details and you&apos;ll get a scoped reply — what it takes,
            roughly how long, and what it costs — within two working days.
          </p>

          <div className="mt-[42px] grid grid-cols-1 sm:grid-cols-2 gap-[32px]">
            {foundersContact.map((founder, idx) => (
              <div key={idx}>
                <div className="mb-[16px] text-[1.05rem]">
                  <span className="text-slate text-[0.8rem] font-mono block mb-[4px] uppercase tracking-wider">
                    {founder.role}
                  </span>
                  {founder.name}
                </div>
                <div className="mb-[16px] text-[1.05rem]">
                  <span className="text-slate text-[0.8rem] font-mono block mb-[4px] uppercase tracking-wider">
                    Email
                  </span>
                  <a
                    href={`mailto:${founder.email}`}
                    className="text-paper hover:text-gold transition-colors no-underline"
                  >
                    {founder.email}
                  </a>
                </div>
                <div className="mb-[16px] text-[1.05rem]">
                  <span className="text-slate text-[0.8rem] font-mono block mb-[4px] uppercase tracking-wider">
                    Phone
                  </span>
                  <a
                    href={`tel:${founder.phoneLink}`}
                    className="text-paper hover:text-gold transition-colors no-underline"
                  >
                    {founder.phone}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Using AJAX FormSubmit so we don't redirect away from the site */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-[20px]">
          {/* Honeypot for spam prevention */}
          <input type="text" name="_honey" style={{ display: "none" }} />
          <input type="hidden" name="_captcha" value="false" />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-[18px]">
            {contactFormFields
              .filter((f) => f.layout === "half")
              .map((field) => (
                <FormField key={field.id} field={field} />
              ))}
          </div>

          {contactFormFields
            .filter((f) => f.layout === "full")
            .map((field) => (
              <FormField key={field.id} field={field} />
            ))}

          <button
            type="submit"
            disabled={status === "loading"}
            className="self-start border-none cursor-pointer mt-[12px] inline-flex items-center gap-[10px] font-semibold text-[1rem] py-[15px] px-[32px] rounded-[6px] transition-all duration-150 ease-out bg-gold text-ink hover:bg-gold-light hover:shadow-[0_0_20px_rgba(201,162,39,0.3)] disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {status === "loading" ? "Sending..." : "Send project details"}
          </button>
        </form>
      </div>
    </section>
  );
}
