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
  { tag: "Admission", text: "Spring 2027 admission is now open, apply by 15 January." },
  { tag: "Notice", text: "Mid-term examinations begin 8 March across all departments." },
  { tag: "Event", text: "EWU Research Festival 2027, register before 22 February." },
  { tag: "Scholarship", text: "Vice-Chancellor's Merit Scholarship results published." },
  { tag: "Update", text: "New AI & Data Science minor launching Fall 2027." },
  { tag: "Convocation", text: "29th Convocation scheduled for 18 April." },
];

export const DEPARTMENTS = [
  { slug: "cse", name: "Computer Science & Engineering", faculty: "Faculty of Sciences & Engineering", short: "CSE", students: 1820, faculty_count: 48, programs: 4, summary: "Software, AI, systems and theory, preparing engineers for Bangladesh's digital decade." },
  { slug: "eee", name: "Electrical & Electronic Engineering", faculty: "Faculty of Sciences & Engineering", short: "EEE", students: 1240, faculty_count: 32, programs: 3, summary: "Power, signals, embedded systems and renewable energy research." },
  { slug: "bba", name: "Business Administration", faculty: "Faculty of Business & Economics", short: "BBA", students: 2350, faculty_count: 58, programs: 5, summary: "Globally aligned business education with strong industry integration." },
  { slug: "economics", name: "Economics", faculty: "Faculty of Liberal Arts & Social Sciences", short: "ECO", students: 720, faculty_count: 22, programs: 3, summary: "Applied economics, development policy and South Asian markets." },
  { slug: "civil", name: "Civil Engineering", faculty: "Faculty of Sciences & Engineering", short: "CE", students: 640, faculty_count: 20, programs: 2, summary: "Sustainable infrastructure for a rapidly urbanising Bangladesh." },
  { slug: "english", name: "English", faculty: "Faculty of Liberal Arts & Social Sciences", short: "ENG", students: 530, faculty_count: 19, programs: 3, summary: "Literature, linguistics and applied language studies." },
  { slug: "pharmacy", name: "Pharmacy", faculty: "Faculty of Sciences & Engineering", short: "PHARM", students: 880, faculty_count: 26, programs: 2, summary: "B. Pharm and M. Pharm with WHO-aligned clinical training." },
  { slug: "law", name: "Law", faculty: "Faculty of Liberal Arts & Social Sciences", short: "LAW", students: 460, faculty_count: 17, programs: 2, summary: "Constitutional, corporate and human-rights law in the Bangladeshi context." },
];

// Cycle for department/eligibility cards
export const DEPT_IMG_KEYS = ["hero-2", "hero-3", "hero-4", "hero-5", "hero-6", "hero-7", "hero-2", "hero-3"];

export const FACULTY = [
  { id: "tasnia-rahman", name: "Dr. Tasnia Rahman", img: "face-1", dept: "cse", designation: "Professor & Chair", interests: ["Machine Learning", "NLP for Bangla", "Health AI"], cites: 1840, h: 21, papers: 64, education: ["PhD, University of Toronto", "MSc, BUET", "BSc, BUET"], bio: "Leads the Bangla NLP lab. Awarded the BAS Gold Medal 2024 for contributions to low-resource language AI." },
  { id: "kazi-mahbub", name: "Dr. Kazi Mahbubul Alam", img: "face-2", dept: "eee", designation: "Professor", interests: ["Power Electronics", "Renewable Energy", "Smart Grids"], cites: 1320, h: 18, papers: 51, education: ["PhD, KTH Stockholm", "MSc, BUET"], bio: "Principal investigator on the IDCOL solar mini-grid resilience project." },
  { id: "farhana-haque", name: "Dr. Farhana Haque", img: "face-3", dept: "bba", designation: "Associate Professor", interests: ["Consumer Behavior", "Emerging Markets", "Fintech Adoption"], cites: 890, h: 14, papers: 38, education: ["PhD, NUS Singapore", "MBA, IBA Dhaka"], bio: "Editor of the South Asian Journal of Marketing; consults for bKash and Pathao." },
  { id: "mahir-zaman", name: "Mahir Zaman", img: "face-2", dept: "cse", designation: "Assistant Professor", interests: ["Distributed Systems", "Edge Computing"], cites: 420, h: 9, papers: 22, education: ["PhD candidate, NUS", "BSc, EWU"], bio: "Building low-latency edge frameworks for Bangladeshi telcos." },
  { id: "rumana-akter", name: "Dr. Rumana Akter", img: "face-4", dept: "economics", designation: "Professor", interests: ["Development Economics", "Microfinance", "Gender & Labor"], cites: 1560, h: 19, papers: 47, education: ["PhD, SOAS London", "MA, Dhaka University"], bio: "Co-author of BIDS' annual State of the Bangladesh Economy report." },
  { id: "shariar-kabir", name: "Dr. Shariar Kabir", img: "face-2", dept: "pharmacy", designation: "Professor & Dean", interests: ["Pharmacology", "Tropical Diseases"], cites: 1990, h: 22, papers: 71, education: ["PhD, Tokyo University", "M. Pharm, DU"], bio: "Leads dengue-vector pharmacology research with icddr,b." },
  { id: "nusrat-jahan", name: "Nusrat Jahan", img: "face-3", dept: "english", designation: "Lecturer", interests: ["Post-colonial Literature", "Bengali Diaspora"], cites: 180, h: 5, papers: 11, education: ["MA, Jahangirnagar University"], bio: "Researches contemporary Dhaka literature." },
  { id: "imran-hossain", name: "Dr. Imran Hossain", img: "face-2", dept: "civil", designation: "Associate Professor", interests: ["Earthquake Engineering", "Sustainable Concrete"], cites: 760, h: 12, papers: 29, education: ["PhD, NTU Singapore"], bio: "Consultant on RAJUK seismic-retrofit guidelines." },
];

export const CLUBS = [
  { slug: "computer-club", name: "EWU Computer Club", img: "club-computer", category: "Academic", members: 320, summary: "Hackathons, programming contests and developer meetups." },
  { slug: "business-club", name: "Business Club", img: "club-business", category: "Academic", members: 410, summary: "Case competitions, industry talks and the annual EWU B-Quest." },
  { slug: "debate-club", name: "Debate Club", img: "club-debate", category: "Cultural", members: 180, summary: "Bangla and English debate, BP and AP formats." },
  { slug: "robotics", name: "Robotics Society", img: "club-robotics", category: "Academic", members: 140, summary: "Line-followers, ROVs and the national robotics olympiad." },
  { slug: "drama", name: "Drama Society", img: "club-drama", category: "Cultural", members: 95, summary: "Stage productions, street theatre and the annual Natya Utsab." },
  { slug: "photography", name: "Photographic Society", img: "club-photo", category: "Cultural", members: 220, summary: "Workshops, photo-walks across Dhaka and the EWU Lens festival." },
  { slug: "sports", name: "Sports Club", img: "club-sports", category: "Sports", members: 480, summary: "Cricket, football, badminton and table-tennis tournaments." },
  { slug: "social-service", name: "Social Service Club", img: "club-social", category: "Service", members: 260, summary: "Blood drives, flood relief and rural school partnerships." },
];

export const FACILITIES = [
  { name: "Central Library", img: "fac-library", icon: "BookOpen", summary: "120,000+ volumes, 40+ databases, 24/7 digital access." },
  { name: "Computer Labs", img: "fac-computer", icon: "Monitor", summary: "12 labs, 600+ workstations, GPU cluster for ML." },
  { name: "Research Labs", img: "fac-research", icon: "FlaskConical", summary: "AI, IoT, materials, pharmacology, energy labs." },
  { name: "Auditorium", img: "fac-auditorium", icon: "Mic2", summary: "Two halls seating 800 and 350 with full A/V." },
  { name: "Cafeteria", img: "fac-cafeteria", icon: "Utensils", summary: "Halal canteens, food court and quiet study cafés." },
  { name: "Sports Complex", img: "fac-sports", icon: "Trophy", summary: "Gymnasium, indoor courts and an open playing field." },
  { name: "Medical Centre", img: "fac-medical", icon: "HeartPulse", summary: "On-campus clinic with 24/7 emergency response." },
  { name: "Transport", img: "fac-transport", icon: "Bus", summary: "Shuttle fleet across 14 Dhaka pick-up points." },
];

export const SCHOLARSHIPS = [
  "Vice-Chancellor's Merit Scholarship, 100% tuition for top SSC/HSC scorers.",
  "Dean's Merit Award, up to 50% waiver for top 5% of each semester.",
  "Need-based Financial Aid, for families with documented hardship.",
  "Freedom Fighter Quota Waiver, full tuition for descendants.",
  "Sibling Waiver, 10% on tuition when a sibling is currently enrolled.",
  "Sports & Cultural Excellence Scholarship, for national-level performers.",
  "Female Student Encouragement Award, annual stipend for STEM majors.",
];

export const CALENDAR = [
  { date: "2027-01-08", title: "Spring 2027 Classes Begin", type: "Semester" },
  { date: "2027-01-15", title: "Spring Admission Deadline", type: "Admission" },
  { date: "2027-02-21", title: "International Mother Language Day, Holiday", type: "Holiday" },
  { date: "2027-03-08", title: "Mid-Term Examinations", type: "Exam" },
  { date: "2027-03-26", title: "Independence Day, Holiday", type: "Holiday" },
  { date: "2027-04-14", title: "Pohela Boishakh Celebration", type: "Event" },
  { date: "2027-04-18", title: "29th Convocation", type: "Event" },
  { date: "2027-05-02", title: "Final Examinations Begin", type: "Exam" },
  { date: "2027-05-25", title: "Summer 2027 Registration", type: "Semester" },
  { date: "2027-06-15", title: "EWU Research Festival", type: "Event" },
];

export const ACHIEVEMENTS = [
  { img: "ach-1", tag: "National Champions", title: "ICPC Dhaka Regional 2026", body: "EWU Computer Club secured the national title at the ACM ICPC programming contest." },
  { img: "ach-2", tag: "Gold Medal", title: "BAS Young Scientist Award", body: "Dr. Tasnia Rahman recognised by the Bangladesh Academy of Sciences for Bangla NLP research." },
  { img: "ach-3", tag: "Asia Finalist", title: "Robocon Asia-Pacific 2026", body: "EWU Robotics Society placed 4th among 24 nations in the regional robotics olympiad." },
  { img: "ach-4", tag: "Champions", title: "National Debate Championship", body: "EWU Debate Club lifted the national university debate trophy for the third consecutive year." },
];

export const ALUMNI = [
  { img: "alum-1", name: "Tahmid Karim", batch: "BBA 2018", role: "Founder, ChaloPay", body: "Built a fintech serving 200,000 users across Bangladesh.", quote: "EWU's business clinics turned my final-year case study into a real product. The mentors believed in the idea long before any investor did." },
  { img: "alum-2", name: "Sumaiya Hossain", batch: "BBA 2016", role: "VP, BRAC Bank", body: "Leads the retail digital banking transformation at one of Bangladesh's largest banks.", quote: "Every leadership instinct I rely on today, public speaking, ethical decisions, working across cultures, was first trained inside an EWU classroom." },
  { img: "alum-3", name: "Rashed Mahmud", batch: "EEE 2017", role: "Senior Engineer, Samsung Korea", body: "Designs next-generation memory chips at Samsung's Hwaseong campus.", quote: "EWU faculty pushed me to publish my first paper as an undergrad. That single push is the reason I was chosen for Samsung's R&D track." },
  { img: "alum-4", name: "Dr. Nabila Anjum", batch: "Pharmacy 2019", role: "Medical Officer, Square Hospitals", body: "Practising clinician and clinical research collaborator with icddr,b.", quote: "The clinical exposure EWU arranged with leading Dhaka hospitals shaped me into a doctor before I ever wore the white coat." },
];

export const FAQS = [
  { q: "What programs does EWU offer?", a: "30+ undergraduate and graduate programs across Engineering, Business, Pharmacy, Law, Economics and Liberal Arts." },
  { q: "When is the next admission cycle?", a: "Spring, Summer and Fall, applications open ~8 weeks before each semester. Spring 2027 is open now." },
  { q: "Are scholarships available for new students?", a: "Yes, merit, need-based, sports and quota waivers. Decisions are announced with the admission offer." },
  { q: "Is the campus accessible by public transport?", a: "Yes, EWU runs shuttle buses from 14 points across Dhaka and the campus is on a main road in Aftabnagar." },
  { q: "Does EWU have hostel facilities?", a: "Affiliated hostels for female students; a list of vetted private hostels for all students is available from Student Services." },
  { q: "How can I contact a specific faculty member?", a: "Use the Faculty Directory, each profile lists office hours, email and research interests." },
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
