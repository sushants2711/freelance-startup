import Section from "../layout/Section";
import { faqData } from "./faqData";
import FaqItem from "./FaqItem";

export default function FAQ() {
  return (
    <Section
      id="faq"
      className="bg-paper text-ink border-[var(--line-lt)]"
      subtitle="faq"
      title="Before you reach out"
    >
      <div className="border-t border-[var(--line-lt)] mt-[-8px]">
        {faqData.map((item, i) => (
          <FaqItem key={i} item={item} />
        ))}
      </div>
    </Section>
  );
}
