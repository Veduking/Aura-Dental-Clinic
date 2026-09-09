// All website photos live in public/images so they work without an external image host.
// These files are the Aura Dental Studio photos supplied by the clinic.
const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || "/Aura-Dental-Clinic";

export const IMAGES = {
  hero: {
    src: `${BASE_PATH}/images/aura-logo-main.jpeg`,
    alt: "Illuminated Aura Dental Studio logo",
  },
  welcomeArea: {
    src: `${BASE_PATH}/images/aura-welcome-area.jpeg`,
    alt: "Aura Dental Studio welcome area",
  },
  doctor: {
    src: `${BASE_PATH}/images/dr-gopika-viswanath.png`,
    alt: "Dr. Gopika Viswanath at Aura Dental Studio",
  },
  reception: {
    src: `${BASE_PATH}/images/aura-main-entrance.png`,
    alt: "Aura Dental Studio reception",
  },
  exterior: {
    src: `${BASE_PATH}/images/aura-clinic-exterior.png`,
    alt: "Aura Dental Studio exterior",
  },
  treatmentRoom: {
    src: `${BASE_PATH}/images/aura-treatment-room-wide.jpeg`,
    alt: "Aura Dental Studio treatment room",
  },
  dentalChair: {
    src: `${BASE_PATH}/images/aura-dental-chair.jpeg`,
    alt: "Dental chair and equipment at Aura Dental Studio",
  },
  clinic: {
    src: `${BASE_PATH}/images/aura-treatment-room-2.png`,
    alt: "Aura Dental Studio treatment room",
  },
} as const;

export const SITE = {
  name: "Aura Dental Studio",
  tagline: "Creating Healthy & Beautiful Smiles",
  description:
    "Aura Dental Studio offers gentle, modern and personalized dental care in Mathikere, Bengaluru — from cleanings and whitening to root canal treatment, implants and smile design. Book your appointment online today.",
  url: "https://veduking.github.io/Aura-Dental-Clinic",
  phoneDisplay: "+91 99013 34365",
  phoneHref: "+919901334365",
  whatsappHref: "919901334365",
  email: "hello@auradentalstudio.example",
  address: "#905, 1st Floor, 6th Cross, 1st Stage, 1st Phase, Gokul, HMT Layout, Mathikere, Bengaluru, Karnataka 560054",
  landmark: "Opp. Vidyaranyapura Academy",
  mapEmbedSrc:
    "https://www.google.com/maps?q=2HH4%2BQP%2C%20Bengaluru%2C%20Karnataka&output=embed",
  mapsShareUrl:
    "https://www.google.com/maps/search/?api=1&query=2HH4%2BQP%2C%20Bengaluru%2C%20Karnataka",
  hours: [
    { day: "Clinic Timings", time: "10:00 AM – 2:00 PM & 4:00 PM – 8:00 PM" },
  ],
};

export const DOCTOR = {
  name: "Dr. Gopika Viswanath",
  qualification: "BDS, MDS (Endodontist)",
  specialization: "Endodontics",
};

export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Gallery", href: "#gallery" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
];

export const SERVICES = [
  { icon: "sparkles", title: "Dental Cleaning", desc: "Professional scaling and polishing to keep your smile fresh and plaque-free." },
  { icon: "smile", title: "Teeth Whitening", desc: "Safe, in-clinic whitening for a noticeably brighter smile in one visit." },
  { icon: "wand", title: "Smile Designing & Makeover", desc: "A custom treatment plan that reshapes and brightens your whole smile." },
  { icon: "activity", title: "Root Canal Treatment", desc: "Precision root canal treatment that helps save your natural tooth." },
  { icon: "tooth", title: "Natural Tooth-Coloured Fillings", desc: "Composite fillings designed to blend naturally with your smile." },
  { icon: "anchor", title: "Dental Implants", desc: "Permanent, natural-looking replacements for missing teeth." },
  { icon: "grid", title: "Orthodontic Treatments & Aligners", desc: "Braces and clear aligners to straighten teeth at any age." },
  { icon: "baby", title: "Paediatric Dentistry", desc: "Gentle, friendly care that helps children feel at ease in the chair." },
  { icon: "tooth", title: "Crowns & Bridges", desc: "Custom restorations that protect damaged teeth and replace missing ones." },
  { icon: "activity", title: "Gum Treatment", desc: "Focused care to support healthy gums and a strong foundation for your smile." },
  { icon: "wand", title: "Laser Dentistry", desc: "Modern laser-assisted treatment for precise and comfortable dental care." },
  { icon: "tooth", title: "Extraction & Minor Surgical Procedures", desc: "Careful treatment for teeth that need removal and other minor procedures." },
];

export const WHY_US = [
  { icon: "award", title: "Experienced Dentist", desc: "Over 9 years of hands-on clinical practice." },
  { icon: "cpu", title: "Modern Technology", desc: "Digital X-rays and intraoral cameras for precise diagnosis." },
  { icon: "shield", title: "Sterilized Equipment", desc: "Hospital-grade sterilization for every single visit." },
  { icon: "wallet", title: "Affordable Treatment", desc: "Transparent pricing with flexible payment options." },
  { icon: "heart", title: "Patient First", desc: "Every plan is built around your comfort and comfort level." },
  { icon: "siren", title: "Emergency Care", desc: "Same-day appointments for urgent dental pain." },
];

export const GALLERY = [
  { title: "Reception", src: IMAGES.reception.src },
  { title: "Clinic Exterior", src: IMAGES.exterior.src },
  { title: "Dental Chair", src: IMAGES.dentalChair.src },
  { title: "Clinic", src: IMAGES.clinic.src },
];

export const TESTIMONIALS = [
  { name: "Aarav M.", rating: 5, text: "Had my teeth cleaning done here. Very gentle treatment and the staff were really friendly." },
  { name: "Sneha R.", rating: 5, text: "I went in with severe tooth pain and needed a root canal. The dentist explained everything patiently and the treatment went smoothly." },
  { name: "Rohan K.", rating: 5, text: "Really happy with my crown. It looks natural and feels comfortable." },
  { name: "Priya N.", rating: 5, text: "My son had his first dental visit here and I was impressed with how patiently the dentist handled him." },
  { name: "Kunal S.", rating: 5, text: "Had a tooth extraction done. I was nervous, but it was quick and much easier than I expected." },
  { name: "Nikhil A.", rating: 5, text: "The minor dental procedure was done carefully and professionally. The whole team was reassuring." },
  { name: "Tanvi S.", rating: 5, text: "I came for a cleaning and also got helpful advice about my gums. Very informative and professional." },
  { name: "Vivek S.", rating: 5, text: "I had a complicated tooth that needed treatment. The dentist was patient and handled everything very carefully." },
  { name: "Karan M.", rating: 5, text: "Excellent crown work. It feels completely natural when I eat and smile." },
  { name: "Suresh R.", rating: 5, text: "Good experience overall. The dentist explained the procedure clearly and the treatment was comfortable." },
];

export const TREATMENTS_FOR_FORM = [
  ...SERVICES.map((service) => service.title),
  "General Consultation",
];

export const STATS = [
  { label: "Years of Experience", value: 9 },
  { label: "Happy Patients", value: 50 },
  { label: "Google Rating", value: 5.0 },
];
