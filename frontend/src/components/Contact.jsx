import { useState } from "react";

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
            <div>
              <div className="mb-[16px] text-[1.05rem]">
                <span className="text-slate text-[0.8rem] font-mono block mb-[4px] uppercase tracking-wider">
                  Founder
                </span>
                Sushant Kumar Singh
              </div>
              <div className="mb-[16px] text-[1.05rem]">
                <span className="text-slate text-[0.8rem] font-mono block mb-[4px] uppercase tracking-wider">
                  Email
                </span>
                <a
                  href="mailto:sushants2711@gmail.com"
                  className="text-paper hover:text-gold transition-colors no-underline"
                >
                  sushants2711@gmail.com
                </a>
              </div>
              <div className="mb-[16px] text-[1.05rem]">
                <span className="text-slate text-[0.8rem] font-mono block mb-[4px] uppercase tracking-wider">
                  Phone
                </span>
                <a
                  href="tel:7903759760"
                  className="text-paper hover:text-gold transition-colors no-underline"
                >
                  +91 79037 59760
                </a>
              </div>
            </div>

            <div>
              <div className="mb-[16px] text-[1.05rem]">
                <span className="text-slate text-[0.8rem] font-mono block mb-[4px] uppercase tracking-wider">
                  Founder
                </span>
                Sonu Kumar
              </div>
              <div className="mb-[16px] text-[1.05rem]">
                <span className="text-slate text-[0.8rem] font-mono block mb-[4px] uppercase tracking-wider">
                  Email
                </span>
                <a
                  href="mailto:Sonukumar9117@gmail.com"
                  className="text-paper hover:text-gold transition-colors no-underline"
                >
                  Sonukumar9117@gmail.com
                </a>
              </div>
              <div className="mb-[16px] text-[1.05rem]">
                <span className="text-slate text-[0.8rem] font-mono block mb-[4px] uppercase tracking-wider">
                  Phone
                </span>
                <a
                  href="tel:9117773191"
                  className="text-paper hover:text-gold transition-colors no-underline"
                >
                  +91 91177 73191
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Using AJAX FormSubmit so we don't redirect away from the site */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-[20px]">
          {/* Honeypot for spam prevention */}
          <input type="text" name="_honey" style={{ display: "none" }} />
          <input type="hidden" name="_captcha" value="false" />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-[18px]">
            <div className="flex flex-col">
              <label
                htmlFor="name"
                className="text-[0.9rem] font-medium text-[#d0d0d0] mb-[8px] block"
              >
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Your name"
                required
                className="w-full bg-[#161616] border border-[var(--line-strong)] text-paper p-[14px_16px] rounded-[6px] font-sans text-[1rem] focus:border-gold focus:outline-none transition-colors"
              />
            </div>
            <div className="flex flex-col">
              <label
                htmlFor="email"
                className="text-[0.9rem] font-medium text-[#d0d0d0] mb-[8px] block"
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="you@company.com"
                required
                className="w-full bg-[#161616] border border-[var(--line-strong)] text-paper p-[14px_16px] rounded-[6px] font-sans text-[1rem] focus:border-gold focus:outline-none transition-colors"
              />
            </div>
          </div>

          <div className="flex flex-col">
            <label
              htmlFor="service"
              className="text-[0.9rem] font-medium text-[#d0d0d0] mb-[8px] block"
            >
              What do you need?
            </label>
            <select
              id="service"
              name="service"
              className="w-full bg-[#161616] border border-[var(--line-strong)] text-paper p-[14px_16px] rounded-[6px] font-sans text-[1rem] focus:border-gold focus:outline-none appearance-none transition-colors cursor-pointer"
            >
              <option>Figma UI Design</option>
              <option>Website (design &amp; build)</option>
              <option>Full-stack web application</option>
              <option>Backend / API</option>
              <option>Mobile app</option>
              <option>AWS deployment &amp; infrastructure</option>
              <option>Marketing / SEO</option>
              <option>Not sure yet</option>
            </select>
          </div>

          <div className="flex flex-col">
            <label
              htmlFor="msg"
              className="text-[0.9rem] font-medium text-[#d0d0d0] mb-[8px] block"
            >
              Project details
            </label>
            <textarea
              id="msg"
              name="message"
              placeholder="What are you trying to build, and roughly when do you need it live?"
              className="w-full bg-[#161616] border border-[var(--line-strong)] text-paper p-[14px_16px] rounded-[6px] font-sans text-[1rem] focus:border-gold focus:outline-none resize-y min-h-[140px] transition-colors"
              required
            ></textarea>
          </div>

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
