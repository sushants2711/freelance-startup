import Section from "../layout/Section";
import { servicesData } from "./servicesData";
import ServiceCard from "./ServiceCard";

export default function Services() {
  return (
    <Section
      id="services"
      subtitle="services"
      title="From Concept to Production-Ready Product"
      description="Engage us for a specific phase or entrust us with the entire lifecycle. Our commitment to precision and transparency remains absolute."
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-y-[56px] gap-x-[48px]">
        {servicesData.map((service, i) => (
          <ServiceCard key={i} service={service} />
        ))}
      </div>
    </Section>
  );
}
