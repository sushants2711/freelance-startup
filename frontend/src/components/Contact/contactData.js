export const foundersContact = [
  {
    role: "Founder",
    name: "Sushant Kumar Singh",
    email: "sushants2711@gmail.com",
    phone: "+91 79037 59760",
    phoneLink: "7903759760",
  },
  {
    role: "Founder",
    name: "Sonu Kumar",
    email: "Sonukumar9117@gmail.com",
    phone: "+91 91177 73191",
    phoneLink: "9117773191",
  },
];

export const serviceOptions = [
  "Figma UI Design",
  "Website (design & build)",
  "Full-stack web application",
  "Backend / API",
  "Mobile app",
  "AWS deployment & infrastructure",
  "Marketing / SEO",
  "Not sure yet",
];

export const contactFormFields = [
  {
    id: "name",
    name: "name",
    label: "Name",
    type: "text",
    placeholder: "Your name",
    required: true,
    componentType: "input",
    layout: "half",
  },
  {
    id: "email",
    name: "email",
    label: "Email",
    type: "email",
    placeholder: "you@company.com",
    required: true,
    componentType: "input",
    layout: "half",
  },
  {
    id: "service",
    name: "service",
    label: "What do you need?",
    type: "select",
    options: serviceOptions,
    componentType: "select",
    layout: "full",
  },
  {
    id: "msg",
    name: "message",
    label: "Project details",
    placeholder:
      "What are you trying to build, and roughly when do you need it live?",
    required: true,
    componentType: "textarea",
    layout: "full",
  },
];
