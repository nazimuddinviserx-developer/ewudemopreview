// Placeholder data for the EWU live demo. All content is illustrative.

export const SITE = {
  name: "East West University",
  short: "EWU",
  tagline: "Excellence in Education",
  address: "A/2, Jahurul Islam Avenue, Jahurul Islam City, Aftabnagar, Dhaka-1212, Bangladesh",
  phone: "+880 9666 775577",
  emergency: "+880 1755 587224",
  email: "info@ewubd.edu",
  socials: {
    facebook: "https://facebook.com/ewubd",
    instagram: "https://instagram.com/ewubd",
    youtube: "https://youtube.com/@ewubd",
    twitter: "https://x.com/ewubd",
    linkedin: "https://linkedin.com/school/east-west-university",
  },
};

export const NEWS_TICKER = [
  { tag: "Admission", text: "Spring 2027 admission is now open — apply by 15 January." },
  { tag: "Notice", text: "Mid-term examinations begin 8 March across all departments." },
  { tag: "Event", text: "EWU Research Festival 2027 — register before 22 February." },
  { tag: "Scholarship", text: "Vice-Chancellor's Merit Scholarship results published." },
  { tag: "Update", text: "New AI & Data Science minor launching Fall 2027." },
  { tag: "Convocation", text: "29th Convocation scheduled for 18 April." },
];

export const DEPARTMENTS = [
  { slug: "cse", name: "Computer Science & Engineering", faculty: "Faculty of Sciences & Engineering", short: "CSE", students: 1820, faculty_count: 48, programs: 4, summary: "Software, AI, systems and theory — preparing engineers for Bangladesh's digital decade." },
  { slug: "eee", name: "Electrical & Electronic Engineering", faculty: "Faculty of Sciences & Engineering", short: "EEE", students: 1240, faculty_count: 32, programs: 3, summary: "Power, signals, embedded systems and renewable energy research." },
  { slug: "bba", name: "Business Administration", faculty: "Faculty of Business & Economics", short: "BBA", students: 2350, faculty_count: 58, programs: 5, summary: "Globally aligned business education with strong industry integration." },
  { slug: "economics", name: "Economics", faculty: "Faculty of Liberal Arts & Social Sciences", short: "ECO", students: 720, faculty_count: 22, programs: 3, summary: "Applied economics, development policy and South Asian markets." },
  { slug: "civil", name: "Civil Engineering", faculty: "Faculty of Sciences & Engineering", short: "CE", students: 640, faculty_count: 20, programs: 2, summary: "Sustainable infrastructure for a rapidly urbanising Bangladesh." },
  { slug: "english", name: "English", faculty: "Faculty of Liberal Arts & Social Sciences", short: "ENG", students: 530, faculty_count: 19, programs: 3, summary: "Literature, linguistics and applied language studies." },
  { slug: "pharmacy", name: "Pharmacy", faculty: "Faculty of Sciences & Engineering", short: "PHARM", students: 880, faculty_count: 26, programs: 2, summary: "B. Pharm and M. Pharm with WHO-aligned clinical training." },
  { slug: "law", name: "Law", faculty: "Faculty of Liberal Arts & Social Sciences", short: "LAW", students: 460, faculty_count: 17, programs: 2, summary: "Constitutional, corporate and human-rights law in the Bangladeshi context." },
];

export const FACULTY = [
  { id: "tasnia-rahman", name: "Dr. Tasnia Rahman", dept: "cse", designation: "Professor & Chair", interests: ["Machine Learning", "NLP for Bangla", "Health AI"], cites: 1840, h: 21, papers: 64, education: ["PhD, University of Toronto", "MSc, BUET", "BSc, BUET"], bio: "Leads the Bangla NLP lab. Awarded the BAS Gold Medal 2024 for contributions to low-resource language AI." },
  { id: "kazi-mahbub", name: "Dr. Kazi Mahbubul Alam", dept: "eee", designation: "Professor", interests: ["Power Electronics", "Renewable Energy", "Smart Grids"], cites: 1320, h: 18, papers: 51, education: ["PhD, KTH Stockholm", "MSc, BUET"], bio: "Principal investigator on the IDCOL solar mini-grid resilience project." },
  { id: "farhana-haque", name: "Dr. Farhana Haque", dept: "bba", designation: "Associate Professor", interests: ["Consumer Behavior", "Emerging Markets", "Fintech Adoption"], cites: 890, h: 14, papers: 38, education: ["PhD, NUS Singapore", "MBA, IBA Dhaka"], bio: "Editor of the South Asian Journal of Marketing; consults for bKash and Pathao." },
  { id: "mahir-zaman", name: "Mahir Zaman", dept: "cse", designation: "Assistant Professor", interests: ["Distributed Systems", "Edge Computing"], cites: 420, h: 9, papers: 22, education: ["PhD candidate, NUS", "BSc, EWU"], bio: "Building low-latency edge frameworks for Bangladeshi telcos." },
  { id: "rumana-akter", name: "Dr. Rumana Akter", dept: "economics", designation: "Professor", interests: ["Development Economics", "Microfinance", "Gender & Labor"], cites: 1560, h: 19, papers: 47, education: ["PhD, SOAS London", "MA, Dhaka University"], bio: "Co-author of BIDS' annual State of the Bangladesh Economy report." },
  { id: "shariar-kabir", name: "Dr. Shariar Kabir", dept: "pharmacy", designation: "Professor & Dean", interests: ["Pharmacology", "Tropical Diseases"], cites: 1990, h: 22, papers: 71, education: ["PhD, Tokyo University", "M. Pharm, DU"], bio: "Leads dengue-vector pharmacology research with icddr,b." },
  { id: "nusrat-jahan", name: "Nusrat Jahan", dept: "english", designation: "Lecturer", interests: ["Post-colonial Literature", "Bengali Diaspora"], cites: 180, h: 5, papers: 11, education: ["MA, Jahangirnagar University"], bio: "Researches contemporary Dhaka literature." },
  { id: "imran-hossain", name: "Dr. Imran Hossain", dept: "civil", designation: "Associate Professor", interests: ["Earthquake Engineering", "Sustainable Concrete"], cites: 760, h: 12, papers: 29, education: ["PhD, NTU Singapore"], bio: "Consultant on RAJUK seismic-retrofit guidelines." },
];

export const CLUBS = [
  { slug: "computer-club", name: "EWU Computer Club", category: "Academic", members: 320, summary: "Hackathons, programming contests and developer meetups." },
  { slug: "business-club", name: "Business Club", category: "Academic", members: 410, summary: "Case competitions, industry talks and the annual EWU B-Quest." },
  { slug: "debate-club", name: "Debate Club", category: "Cultural", members: 180, summary: "Bangla and English debate, BP and AP formats." },
  { slug: "robotics", name: "Robotics Society", category: "Academic", members: 140, summary: "Line-followers, ROVs and the national robotics olympiad." },
  { slug: "drama", name: "Drama Society", category: "Cultural", members: 95, summary: "Stage productions, street theatre and the annual Natya Utsab." },
  { slug: "photography", name: "Photographic Society", category: "Cultural", members: 220, summary: "Workshops, photo-walks across Dhaka and the EWU Lens festival." },
  { slug: "sports", name: "Sports Club", category: "Sports", members: 480, summary: "Cricket, football, badminton and table-tennis tournaments." },
  { slug: "social-service", name: "Social Service Club", category: "Service", members: 260, summary: "Blood drives, flood relief and rural school partnerships." },
];

export const FACILITIES = [
  { name: "Central Library", icon: "BookOpen", summary: "120,000+ volumes, 40+ databases, 24/7 digital access." },
  { name: "Computer Labs", icon: "Monitor", summary: "12 labs, 600+ workstations, GPU cluster for ML." },
  { name: "Research Labs", icon: "FlaskConical", summary: "AI, IoT, materials, pharmacology, energy labs." },
  { name: "Auditorium", icon: "Mic2", summary: "Two halls seating 800 and 350 with full A/V." },
  { name: "Cafeteria", icon: "Utensils", summary: "Halal canteens, food court and quiet study cafés." },
  { name: "Sports Complex", icon: "Trophy", summary: "Gymnasium, indoor courts and an open playing field." },
  { name: "Medical Centre", icon: "HeartPulse", summary: "On-campus clinic with 24/7 emergency response." },
  { name: "Transport", icon: "Bus", summary: "Shuttle fleet across 14 Dhaka pick-up points." },
];

export const SCHOLARSHIPS = [
  "Vice-Chancellor's Merit Scholarship — 100% tuition for top SSC/HSC scorers.",
  "Dean's Merit Award — up to 50% waiver for top 5% of each semester.",
  "Need-based Financial Aid — for families with documented hardship.",
  "Freedom Fighter Quota Waiver — full tuition for descendants.",
  "Sibling Waiver — 10% on tuition when a sibling is currently enrolled.",
  "Sports & Cultural Excellence Scholarship — for national-level performers.",
  "Female Student Encouragement Award — annual stipend for STEM majors.",
];

export const CALENDAR = [
  { date: "2027-01-08", title: "Spring 2027 Classes Begin", type: "Semester" },
  { date: "2027-01-15", title: "Spring Admission Deadline", type: "Admission" },
  { date: "2027-02-21", title: "International Mother Language Day — Holiday", type: "Holiday" },
  { date: "2027-03-08", title: "Mid-Term Examinations", type: "Exam" },
  { date: "2027-03-26", title: "Independence Day — Holiday", type: "Holiday" },
  { date: "2027-04-14", title: "Pohela Boishakh Celebration", type: "Event" },
  { date: "2027-04-18", title: "29th Convocation", type: "Event" },
  { date: "2027-05-02", title: "Final Examinations Begin", type: "Exam" },
  { date: "2027-05-25", title: "Summer 2027 Registration", type: "Semester" },
  { date: "2027-06-15", title: "EWU Research Festival", type: "Event" },
];

export const FAQS = [
  { q: "What programs does EWU offer?", a: "30+ undergraduate and graduate programs across Engineering, Business, Pharmacy, Law, Economics and Liberal Arts." },
  { q: "When is the next admission cycle?", a: "Spring, Summer and Fall — applications open ~8 weeks before each semester. Spring 2027 is open now." },
  { q: "Are scholarships available for new students?", a: "Yes — merit, need-based, sports and quota waivers. Decisions are announced with the admission offer." },
  { q: "Is the campus accessible by public transport?", a: "Yes — EWU runs shuttle buses from 14 points across Dhaka and the campus is on a main road in Aftabnagar." },
  { q: "Does EWU have hostel facilities?", a: "Affiliated hostels for female students; a list of vetted private hostels for all students is available from Student Services." },
  { q: "How can I contact a specific faculty member?", a: "Use the Faculty Directory — each profile lists office hours, email and research interests." },
];

export function deptBySlug(slug: string) {
  return DEPARTMENTS.find((d) => d.slug === slug);
}
export function facultyById(id: string) {
  return FACULTY.find((f) => f.id === id);
}
export function clubBySlug(slug: string) {
  return CLUBS.find((c) => c.slug === slug);
}
