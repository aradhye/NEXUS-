/**
 * USICT, GGSIPU - Student Dashboard & Campus Map Suite
 * Prototype Application Logic
 */

// ==========================================
// CAMPUS BUILDINGS & LANDMARKS DATA
// ==========================================
const CAMPUS_LANDMARKS = [
  {
    id: "block-e",
    name: "Block E - USICT & CDMS",
    fullName: "University School of Information & Communication Technology (USICT) & Centre for Disaster Management Studies",
    category: "usict",
    categoryLabel: "Your Enrolled School 🏛️",
    coords: { x: 63.4, y: 37.6 },
    icon: "💻",
    description: "The premier technology school of GGSIPU offering B.Tech, M.Tech, and MCA programs. Home to cutting-edge AI, Machine Learning, Robotics, and Cyber Security laboratories.",
    schools: [
      "Department of Computer Science & Engineering (B.Tech CSE & CSE-AI)",
      "Department of Information Technology (B.Tech IT)",
      "Department of Electronics & Communication Engineering (B.Tech ECE)",
      "Department of Computer Applications (MCA)",
      "Centre for Disaster Management Studies (CDMS)"
    ],
    facilities: [
      "AI & Robotics Research Lab (Room 304)",
      "Advanced Computing & Cloud Lab (Room 312)",
      "Dean's Secretariat & Conference Room (Room 101)",
      "USICT Seminar Hall & Smart Classrooms (2nd & 3rd Floor)",
      "Embedded Systems & IoT Lab (Room 205)",
      "Departmental Library & Reading Room (1st Floor)",
      "Biometric Terminal Points (Gate 1 & Gate 2 Entrance)"
    ],
    floors: "Ground to 5th Floor with high-speed elevators",
    directions: "From Main Entry Gate: Walk south down the central avenue for ~300m, turn right onto the Academic Quad ring road. Block E is the modern brick building directly adjacent to the north-east face of the Central Library (~4 min walk)."
  },
  {
    id: "library",
    name: "Central Library & UWD",
    fullName: "University Central Library, Accounts Branch & University Works Division",
    category: "library",
    categoryLabel: "Central Library & Admin 📚",
    coords: { x: 64.2, y: 49.5 },
    icon: "📚",
    description: "The hexagonal central academic hub housing over 100,000 volumes, e-journals, digital reading lounges, book bank section, and university maintenance offices.",
    schools: [
      "Central University Library (3 Floors)",
      "Accounts Branch & Cash Counter (Ground Floor)",
      "University Works Division - UWD (Ground Floor Wing B)"
    ],
    facilities: [
      "24/7 Air-conditioned Reading Hall",
      "Digital Library Lounge (120 Terminal workstations)",
      "Photocopy & Document Binding Centre",
      "Book Return RFID Kiosks"
    ],
    floors: "Ground + 2 Floors",
    directions: "Located at the geometric epicenter of the University Academic Quad. Directly connected via covered walkways to Block E, Block D, Block C, Block B, and Block A."
  },
  {
    id: "admin-block",
    name: "Administration Block",
    fullName: "University Central Administrative Complex",
    category: "admin",
    categoryLabel: "University Administration 🏢",
    coords: { x: 72.9, y: 48.9 },
    icon: "🏢",
    description: "The main administrative headquarters of Guru Gobind Singh Indraprastha University. Coordinates university examinations, admissions, affiliations, and governance.",
    schools: [
      "Office of the Hon'ble Vice Chancellor",
      "Office of the Registrar",
      "Office of the Controller of Examinations (COE)",
      "Academic & Planning Branch",
      "Student Welfare & Scholarship Cell"
    ],
    facilities: [
      "Examination Result & Migration Certificate Counter",
      "Fee & Account Reconciliation Counter",
      "V.C. Board Room & Syndicate Hall",
      "Central Dispatch Section"
    ],
    floors: "4 interlinked diamond blocks (Ground + 3 Floors)",
    directions: "East of the Central Library. Accessible via the main entrance ring road with dedicated visitor parking."
  },
  {
    id: "block-d",
    name: "Block D - USMS & USMPMHS",
    fullName: "University School of Management Studies (USMS) & School of Medicine & Para-Medical Health Sciences",
    category: "academic",
    categoryLabel: "Academic School 🎓",
    coords: { x: 56.3, y: 37.3 },
    icon: "📊",
    description: "Home to GGSIPU's business school offering MBA and doctoral programs, alongside health science disciplines.",
    schools: [
      "University School of Management Studies (USMS)",
      "School of Medicine & Para-Medical Health Sciences (USMPMHS)"
    ],
    facilities: [
      "Corporate Simulation Lab & Case Study Room",
      "Management Auditorium",
      "Medical Sciences Demonstration Lab"
    ],
    floors: "Ground + 4 Floors",
    directions: "North-west quadrant of the Academic Quad, opposite Block E across the central promenade."
  },
  {
    id: "block-c",
    name: "Block C - USLLS, USHHS & USE",
    fullName: "University School of Law and Legal Studies (USLLS), Humanities & Social Sciences (USHHS) & School of Education (USE)",
    category: "academic",
    categoryLabel: "Academic School 🎓",
    coords: { x: 56.1, y: 49.8 },
    icon: "⚖️",
    description: "The center for legal education, humanities, and teacher education at GGSIPU.",
    schools: [
      "University School of Law and Legal Studies (USLLS)",
      "University School of Humanities & Social Sciences (USHHS)",
      "University School of Education (USE)"
    ],
    facilities: [
      "State-of-the-art Moot Court Hall",
      "Legal Aid Clinic",
      "Language & Phonetics Laboratory",
      "Psychology & Educational Testing Lab"
    ],
    floors: "Ground + 4 Floors",
    directions: "West face of the Academic Quad, directly west of the Central Library."
  },
  {
    id: "block-b",
    name: "Block B - USBAS & USCT",
    fullName: "University School of Basic & Applied Sciences (USBAS) & School of Chemical Technology (USCT)",
    category: "academic",
    categoryLabel: "Academic School 🎓",
    coords: { x: 61.4, y: 58.7 },
    icon: "🔬",
    description: "Equipped with advanced physical, chemical, and materials research laboratories.",
    schools: [
      "University School of Basic & Applied Sciences (USBAS)",
      "University School of Chemical Technology (USCT)"
    ],
    facilities: [
      "Chemical Engineering Pilot Plant",
      "Spectroscopy & XRD Research Centre",
      "Computational Chemistry Lab"
    ],
    floors: "Ground + 4 Floors",
    directions: "South-west corner of the Academic Quad, south of Block C."
  },
  {
    id: "block-a",
    name: "Block A - USBT & USEM",
    fullName: "University School of Biotechnology (USBT) & School of Environment Management (USEM)",
    category: "academic",
    categoryLabel: "Academic School 🎓",
    coords: { x: 69.2, y: 60.0 },
    icon: "🧬",
    description: "Leading biotech and environmental research facility with bioinformatics and tissue culture centers.",
    schools: [
      "University School of Biotechnology (USBT)",
      "University School of Environment Management (USEM)"
    ],
    facilities: [
      "Animal Cell Culture Facility",
      "Bioinformatics Supercomputing Node",
      "Environmental Monitoring Station & Greenhouse"
    ],
    floors: "Ground + 4 Floors",
    directions: "South-east corner of the Academic Quad, south of the Administration Block."
  },
  {
    id: "canteen",
    name: "University Canteen & Food Court",
    fullName: "Central University Canteen & Student Dining Court",
    category: "food",
    categoryLabel: "Dining & Hangout ☕",
    coords: { x: 49.7, y: 48.0 },
    icon: "☕",
    description: "Popular student dining hub serving hot meals, Indian snacks, beverages, and coffee.",
    schools: [
      "Main Dining Hall (Seating for 350+)",
      "Nescafe Express Counter",
      "Mother Dairy Milk & Ice Cream Booth",
      "Juice & Shake Corner"
    ],
    facilities: [
      "Indoor & Outdoor Courtyard Seating",
      "UPI & Digital Payment Counters",
      "Water Coolers & Handwash Stations"
    ],
    floors: "Ground Level with outdoor patio",
    directions: "Situated right between the hostel complex and the Academic Quad. A 2-minute walk from Block E and Block D."
  },
  {
    id: "boys-hostel",
    name: "Shivalik Boys Hostel",
    fullName: "Shivalik Boys Hostel & Dining Hall",
    category: "hostel",
    categoryLabel: "Student Residence 🛏️",
    coords: { x: 41.2, y: 47.9 },
    icon: "🛏️",
    description: "On-campus residential facility for male undergraduate and postgraduate students.",
    schools: ["GGSIPU Chief Warden Office", "Shivalik Mess Committee"],
    facilities: [
      "Single and twin-sharing furnished rooms",
      "Dedicated resident mess with 4 meals daily",
      "Gymnasium & Table Tennis Room",
      "High-speed Wi-Fi & 24/7 Power Backup"
    ],
    floors: "4 Storey Residential Blocks",
    directions: "Located in the western residential section, north of the health centre and west of the canteen."
  },
  {
    id: "girls-hostel",
    name: "Aravali Girls Hostel",
    fullName: "Aravali Girls Hostel Complex",
    category: "hostel",
    categoryLabel: "Student Residence 🛏️",
    coords: { x: 41.2, y: 39.9 },
    icon: "🛏️",
    description: "Secure, modern on-campus accommodation for female students.",
    schools: ["Aravali Hostel Administration & Security Desk"],
    facilities: [
      "Biometric access control & 24/7 female security guard staff",
      "Hygienic vegetarian dining hall",
      "Common recreation room with TV & indoor games",
      "Reading room & open badminton court"
    ],
    floors: "4 Storey Residential Blocks",
    directions: "Directly north of the Boys Hostel, facing the central lawn and sports arena."
  },
  {
    id: "sports-complex",
    name: "Sports Complex & Pool",
    fullName: "University Indoor Sports Complex & Swimming Pool",
    category: "sports",
    categoryLabel: "Sports & Fitness 🏊",
    coords: { x: 47.2, y: 70.7 },
    icon: "🏊",
    description: "World-class university sports facility hosting annual sports meets and inter-college championships.",
    schools: ["Directorate of Students' Welfare - Sports Division"],
    facilities: [
      "Olympic-size 50-meter outdoor swimming pool",
      "Wooden-floored badminton and basketball indoor arena",
      "Fully equipped fitness gym & weights room",
      "Locker rooms & shower facilities"
    ],
    floors: "Indoor arena + poolside pavilions",
    directions: "Southern boundary road, south of the boys hostel and health centre."
  },
  {
    id: "football-ground",
    name: "Football Stadium & Track",
    fullName: "Main Football Ground & 400m Synthetic Running Track",
    category: "sports",
    categoryLabel: "Sports & Fitness ⚽",
    coords: { x: 25.0, y: 53.5 },
    icon: "⚽",
    description: "The grand open athletic stadium of the university with spectator bleachers and floodlights.",
    schools: ["Annual Sports Meet 'Sportech' Venue"],
    facilities: [
      "Full-regulation football pitch with Bermuda grass",
      "8-lane 400m athletic running track",
      "Long jump, shot put, and archery zones",
      "High-mast stadium lighting"
    ],
    floors: "Ground level athletic stadium",
    directions: "Western section of the campus. A 5-minute walk from the hostels."
  },
  {
    id: "bank-post",
    name: "Indian Bank & Post Office",
    fullName: "Indian Bank University Branch, 24/7 ATM & India Post Sub-Post Office",
    category: "service",
    categoryLabel: "Banking & Postal 🏦",
    coords: { x: 38.9, y: 66.4 },
    icon: "🏦",
    description: "Full-service on-campus banking branch handling student tuition fee deposits, education loans, and postal mail.",
    schools: ["Indian Bank Dwarka Campus Branch (IFSC: IDIB000G082)"],
    facilities: [
      "24-Hour ATM Cash Dispenser & CDM (Cash Deposit Machine)",
      "Student Fee Payment Challan Counter",
      "India Post Speed Post & Parcel Delivery Counter",
      "Zero-balance student savings account helpdesk"
    ],
    floors: "Ground Level Facility",
    directions: "Adjacent to the Health Centre on the south-western campus loop road."
  },
  {
    id: "health-centre",
    name: "University Health Centre",
    fullName: "University Health Centre & 24/7 Medical Dispensary",
    category: "service",
    categoryLabel: "Medical Care 🏥",
    coords: { x: 38.0, y: 61.5 },
    icon: "🏥",
    description: "Comprehensive primary healthcare center providing emergency medical aid, regular checkups, and free medicines for students and staff.",
    schools: ["Chief Medical Officer & Visiting Specialist Physicians"],
    facilities: [
      "Emergency triage room & observation beds",
      "Free university dispensary & basic pathology lab",
      "24/7 On-duty ambulance service",
      "Dental & Physiotherapy consultation hours"
    ],
    floors: "Ground Floor Clinic",
    directions: "Located near the Indian Bank branch, conveniently accessible from the hostels."
  },
  {
    id: "entry-gate",
    name: "Main Campus Gate",
    fullName: "Main Entrance Gate (Dwarka Sector 16-C)",
    category: "service",
    categoryLabel: "Campus Entry 🚪",
    coords: { x: 50.8, y: 13.5 },
    icon: "🚪",
    description: "The primary entry and exit gate of Guru Gobind Singh Indraprastha University facing the main arterial road.",
    schools: ["University Security Headquarters"],
    facilities: [
      "Student & Faculty RFID Boom Barriers",
      "Visitor Pass & Vehicle Registration Booth",
      "E-Rickshaw shuttle pick-up station (₹10 to Dwarka Sec 14 Metro Station)",
      "Main parking lots for two-wheelers and four-wheelers"
    ],
    floors: "Entry gate complex",
    directions: "Connected to Dwarka Sector 14 Metro Station (Blue Line) via frequent university shuttle and e-rickshaws (1.2 km)."
  }
];

// ==========================================
// NOTICES DATABASE
// ==========================================
const OFFICIAL_NOTICES = [
  {
    id: "notif-01",
    tag: "Important",
    category: "Exam",
    title: "End Semester Examination Form 2026 - Registration Portal Open",
    date: "Oct 25, 2026",
    circularNo: "GGSIPU/COE/EXAM-FORM/2026/894",
    issuedBy: "Controller of Examinations (COE)",
    urgent: true,
    content: "All eligible undergraduate students of USICT enrolled in B.Tech (CSE, AI, IT, ECE) 3rd and 5th Semesters are hereby instructed to submit their online Examination Form on the student portal on or before <b>November 20, 2026</b>.<br><br><b>Important Guidelines:</b><ul><li>A late fee penalty of Rs 1,000 will be levied for forms submitted between 21 Nov and 25 Nov 2026. No forms accepted post 25 Nov.</li><li>Mandatory clearances required: College fee receipt, Library No-Dues certificate, and Biometric attendance clearance (≥80% required).</li><li>Admit cards will be generated on <b>December 01, 2026</b> for verified candidates.</li></ul>"
  },
  {
    id: "notif-02",
    tag: "Fee",
    category: "Fee",
    title: "Odd Semester Annual Fee Payment - Deadline Tomorrow (Nov 10)",
    date: "Oct 22, 2026",
    circularNo: "GGSIPU/ACCOUNTS/FEES/2026/102",
    issuedBy: "Finance & Accounts Branch",
    urgent: true,
    content: "Notice for all continuing students of USICT: The last date for payment of tuition and academic fees for the Odd Semester 2026-27 is <b>November 10, 2026</b>.<br><br>Late fee penalties will be applicable from Nov 11 at ₹100 per day. Please ensure payment is made online via the university fee portal or challan at the Indian Bank campus branch."
  },
  {
    id: "notif-03",
    tag: "Academic",
    category: "Academic",
    title: "Academic Calendar for Odd Semester 2026-27 (Revised Dates)",
    date: "Oct 22, 2026",
    circularNo: "GGSIPU/ACAD/CALENDAR/2026/411",
    issuedBy: "Dean, Academic Affairs",
    urgent: false,
    content: "The Competent Authority has approved the revised schedule for the culmination of the Odd Semester 2026-27.<br><br>End-term theory examinations will commence on <b>10 December 2026</b> and conclude on <b>24 December 2026</b>. Practical and viva-voce examinations will be conducted from 26 December to 31 December 2026."
  },
  {
    id: "notif-04",
    tag: "Info",
    category: "Academic",
    title: "Updated B.Tech CSE (Artificial Intelligence) Syllabus Scheme",
    date: "Oct 15, 2026",
    circularNo: "USICT/DEAN/BTECH-AI/2026/77",
    issuedBy: "Board of Studies, USICT",
    urgent: false,
    content: "The revised syllabus for B.Tech CSE (AI) Semester 3 and Semester 4 under the NEP-aligned curriculum framework is now available for download. Minor updates have been introduced to the Foundations of AI and Deep Learning lab courses with cloud GPU access enabled in Block E Lab 304."
  },
  {
    id: "notif-05",
    tag: "General",
    category: "Events",
    title: "Annual Sports Meet 'Sportech 2026' - Registrations Open",
    date: "Oct 18, 2026",
    circularNo: "GGSIPU/DSW/SPORTS/2026/331",
    issuedBy: "Directorate of Students' Welfare",
    urgent: false,
    content: "Inter-school athletic competitions, football tournament, badminton, and swimming championships will take place at the Main Sports Complex from Nov 18 to Nov 21, 2026. Interested students should register via their respective USICT sports coordinator."
  }
];

// ==========================================
// SYLLABUS DATA (B.TECH CSE AI)
// ==========================================
const SYLLABUS_DATA = {
  3: [
    {
      code: "IT-201",
      title: "Data Structures & Algorithms",
      credits: "4 Credits (L:3, T:1)",
      instructor: "Prof. Anurag Jain",
      units: "Unit 1: Arrays, Stacks, Queues, Linked Lists • Unit 2: Trees, AVL, B-Trees, Heaps • Unit 3: Graph Algorithms (Dijkstra, Prim, Kruskal) • Unit 4: Hashing, Sorting & Advanced Algorithm Complexity Analysis."
    },
    {
      code: "BS-203",
      title: "Discrete Mathematical Structures",
      credits: "4 Credits (L:3, T:1)",
      instructor: "Dr. R. K. Sharma",
      units: "Unit 1: Sets, Relations, Functions, Posets & Lattices • Unit 2: Propositional Logic, Quantifiers & Proof Methods • Unit 3: Combinatorics, Recurrence Relations & Generating Functions • Unit 4: Graph Theory & Boolean Algebra."
    },
    {
      code: "EC-205",
      title: "Digital Logic & Computer Design",
      credits: "4 Credits (L:3, T:0)",
      instructor: "Dr. Manoj Kumar",
      units: "Unit 1: Boolean Algebra, K-Maps, Logic Gates • Unit 2: Combinational Circuits (Adders, Multiplexers, Decoders) • Unit 3: Sequential Circuits, Flip-Flops, Counters, Registers • Unit 4: Memory Architecture, PLAs & Basic CPU Design."
    },
    {
      code: "IT-207",
      title: "Object Oriented Programming using Java",
      credits: "3 Credits (L:3, T:0)",
      instructor: "Prof. Bharati Suri",
      units: "Unit 1: OOP Principles, Classes, Inheritance & Polymorphism • Unit 2: Interfaces, Packages & Exception Handling • Unit 3: Java Collections Framework, Generics & Streams • Unit 4: Multithreading, File I/O & Event-Driven GUI."
    },
    {
      code: "AI-209",
      title: "Foundations of Artificial Intelligence & ML",
      credits: "4 Credits (L:3, T:1)",
      instructor: "Prof. Amit Prakash Singh",
      units: "Unit 1: AI Agents, Search Algorithms (A*, Minimax, Alpha-Beta) • Unit 2: Knowledge Representation, First-Order Logic & Inference • Unit 3: Supervised Learning (Regression, Classification, SVM) • Unit 4: Unsupervised Learning, Clustering & Neural Foundations."
    },
    {
      code: "IT-251",
      title: "Data Structures Laboratory",
      credits: "1 Credit (P:2)",
      instructor: "Prof. Anurag Jain / Lab Staff",
      units: "Hands-on implementation of Stacks, Queues, Binary Trees, Dijkstra's Algorithm, Heaps and Hash Maps in C++ / Java (Block E Lab 312)."
    },
    {
      code: "AI-257",
      title: "Artificial Intelligence Tools Lab (Python)",
      credits: "1 Credit (P:2)",
      instructor: "Prof. Amit Prakash Singh",
      units: "Practical implementations using NumPy, Pandas, Scikit-Learn, PyTorch. Real-world AI project development in Block E AI & Robotics Lab (Room 304)."
    }
  ],
  4: [
    { code: "CS-202", title: "Database Management Systems", credits: "4 Credits", instructor: "Faculty USICT", units: "ER Modeling, Relational Algebra, SQL, Normalization, Transactions, Concurrency." },
    { code: "CS-204", title: "Operating Systems", credits: "4 Credits", instructor: "Faculty USICT", units: "Processes, Threads, CPU Scheduling, Synchronization, Deadlocks, Memory Management." },
    { code: "AI-206", title: "Machine Learning Algorithms", credits: "4 Credits", instructor: "Faculty USICT", units: "Ensemble Models, Decision Trees, Logistic Regression, Dimensionality Reduction." },
    { code: "CS-208", title: "Computer Organization & Architecture", credits: "4 Credits", instructor: "Faculty USICT", units: "Instruction Sets, Pipelining, Cache Memory, RISC/CISC, Bus Architectures." }
  ]
};

// ==========================================
// ATTENDANCE DATA (2026 REGULATIONS COMPLIANT)
// ==========================================
const ATTENDANCE_DATA = [
  { code: "IT-201", name: "Data Structures & Algorithms", held: 42, attended: 36, type: "Theory" },
  { code: "BS-203", name: "Discrete Mathematical Structures", held: 40, attended: 34, type: "Theory" },
  { code: "EC-205", name: "Digital Logic & Computer Design", held: 38, attended: 33, type: "Theory" },
  { code: "IT-207", name: "OOP using Java", held: 36, attended: 31, type: "Theory" },
  { code: "AI-209", name: "Foundations of AI & ML", held: 42, attended: 37, type: "Theory" },
  { code: "IT-251", name: "DSA Lab", held: 14, attended: 12, type: "Lab" },
  { code: "AI-257", name: "AI Tools Lab", held: 14, attended: 12, type: "Lab" }
];

// ==========================================
// INITIALIZATION ON DOM READY
// ==========================================
document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  initNavigation();
  initDashboard();
  initCampusMap();
  initAttendance();
  initSyllabus();
  initAIAssistant();
  initModals();
});

// ==========================================
// THEME MANAGEMENT (LIGHT / DARK)
// ==========================================
function initTheme() {
  const toggleBtn = document.getElementById("themeToggleBtn");
  const savedTheme = localStorage.getItem("usict_theme") || "light";
  document.documentElement.setAttribute("data-theme", savedTheme);
  updateThemeIcon(savedTheme);

  if (toggleBtn) {
    toggleBtn.addEventListener("click", () => {
      const current = document.documentElement.getAttribute("data-theme") || "light";
      const next = current === "dark" ? "light" : "dark";
      document.documentElement.setAttribute("data-theme", next);
      localStorage.setItem("usict_theme", next);
      updateThemeIcon(next);
      showToast(`Switched to ${next === "dark" ? "Dark" : "Light"} theme`);
    });
  }
}

function updateThemeIcon(theme) {
  const toggleBtn = document.getElementById("themeToggleBtn");
  if (toggleBtn) {
    toggleBtn.textContent = theme === "dark" ? "☀️" : "🌙";
    toggleBtn.title = `Switch to ${theme === "dark" ? "Light" : "Dark"} mode`;
  }
}

// ==========================================
// NAVIGATION & VIEW SWITCHING
// ==========================================
function initNavigation() {
  // Mobile drawer toggle
  const mobileToggle = document.getElementById("mobileMenuBtn");
  const sidebar = document.getElementById("appSidebar");
  if (mobileToggle && sidebar) {
    mobileToggle.addEventListener("click", () => {
      sidebar.classList.toggle("mobile-open");
    });
  }

  // Handle all nav links and sidebar buttons with data-target
  document.querySelectorAll("[data-target]").forEach(el => {
    el.addEventListener("click", (e) => {
      e.preventDefault();
      const targetId = el.getAttribute("data-target");
      if (targetId) {
        switchTab(targetId);
        if (sidebar && sidebar.classList.contains("mobile-open")) {
          sidebar.classList.remove("mobile-open");
        }
      }
    });
  });

  // Handle avatar click to view student profile modal
  const avatarBtn = document.getElementById("headerAvatarBtn");
  if (avatarBtn) {
    avatarBtn.addEventListener("click", () => {
      openModal("profileModal");
    });
  }
}

function switchTab(tabId) {
  // Deactivate old active views
  document.querySelectorAll(".tab-view").forEach(v => v.classList.remove("active"));
  document.querySelectorAll("[data-target]").forEach(b => b.classList.remove("active"));

  // Activate target view
  const targetView = document.getElementById(tabId);
  if (targetView) {
    targetView.classList.add("active");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  // Update nav and sidebar highlights
  document.querySelectorAll(`[data-target="${tabId}"]`).forEach(b => b.classList.add("active"));

  // Special hooks on tab activation
  if (tabId === "tab-map") {
    // If map was opened, ensure canvas size/centering is calibrated
    if (window.mapController) {
      setTimeout(() => window.mapController.centerOnUSICT(), 50);
    }
  }
}

// ==========================================
// DASHBOARD INITIALIZATION
// ==========================================
function initDashboard() {
  // Render Notices in Dashboard Widget
  const noticesContainer = document.getElementById("dashboardNoticesList");
  if (noticesContainer) {
    noticesContainer.innerHTML = OFFICIAL_NOTICES.slice(0, 4).map(n => `
      <div class="notice-item" onclick="openNoticeModal('${n.id}')">
        <span class="tag ${n.tag}">${n.tag}</span>
        <span class="notice-title">${n.title}</span>
        <span class="notice-date">${n.date}</span>
      </div>
    `).join("");
  }

  // Mini-map quick actions on dashboard
  document.querySelectorAll(".map-quick-pin").forEach(pinBtn => {
    pinBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      const buildingId = pinBtn.getAttribute("data-building");
      switchTab("tab-map");
      if (window.mapController && buildingId) {
        setTimeout(() => window.mapController.selectBuilding(buildingId), 150);
      }
    });
  });

  const previewCard = document.getElementById("dashboardMapPreview");
  if (previewCard) {
    previewCard.addEventListener("click", () => {
      switchTab("tab-map");
      if (window.mapController) {
        setTimeout(() => window.mapController.centerOnUSICT(), 100);
      }
    });
  }
}

// ==========================================
// INTERACTIVE CAMPUS MAP SUITE (CORE FEATURE)
// ==========================================
function initCampusMap() {
  const canvasArea = document.getElementById("mapCanvasArea");
  const stage = document.getElementById("mapStage");
  const wrapper = document.getElementById("mapImageWrapper");
  const pinsContainer = document.getElementById("mapPinsContainer");

  if (!canvasArea || !stage || !wrapper || !pinsContainer) return;

  // Zoom & Pan State
  let scale = 1;
  let posX = 0;
  let posY = 0;
  let isDragging = false;
  let startX = 0;
  let startY = 0;
  let selectedBuildingId = "block-e"; // Default to USICT

  // Render all pins
  function renderPins(filterCategory = "all", searchQuery = "") {
    pinsContainer.innerHTML = "";
    const q = searchQuery.toLowerCase().trim();

    CAMPUS_LANDMARKS.forEach(b => {
      // Category filter check
      let matchesCat = true;
      if (filterCategory === "academic") matchesCat = (b.category === "academic" || b.category === "usict");
      else if (filterCategory === "hostels") matchesCat = (b.category === "hostel" || b.category === "food");
      else if (filterCategory === "sports") matchesCat = (b.category === "sports");
      else if (filterCategory === "admin") matchesCat = (b.category === "admin" || b.category === "library" || b.category === "service");

      // Search query check
      let matchesSearch = true;
      if (q) {
        const text = `${b.name} ${b.fullName} ${b.description} ${b.schools.join(" ")} ${b.facilities.join(" ")}`.toLowerCase();
        matchesSearch = text.includes(q);
      }

      if (!matchesCat || !matchesSearch) return;

      const pinEl = document.createElement("div");
      pinEl.className = `map-pin ${b.id === selectedBuildingId ? "active" : ""}`;
      pinEl.setAttribute("data-id", b.id);
      pinEl.setAttribute("data-category", b.category);
      pinEl.style.left = `${b.coords.x}%`;
      pinEl.style.top = `${b.coords.y}%`;

      pinEl.innerHTML = `
        <div class="pin-marker">
          <div class="pin-bubble">
            <span>${b.icon}</span>
            <span>${b.name.split(" - ")[0]}</span>
          </div>
          <div class="pin-point"></div>
        </div>
      `;

      pinEl.addEventListener("click", (e) => {
        e.stopPropagation();
        selectBuilding(b.id);
      });

      pinsContainer.appendChild(pinEl);
    });
  }

  // Transform apply
  function updateTransform() {
    stage.style.transform = `translate(${posX}px, ${posY}px) scale(${scale})`;
  }

  // Pan interaction
  canvasArea.addEventListener("mousedown", (e) => {
    isDragging = true;
    canvasArea.classList.add("grabbing");
    startX = e.clientX - posX;
    startY = e.clientY - posY;
  });

  window.addEventListener("mousemove", (e) => {
    if (!isDragging) return;
    posX = e.clientX - startX;
    posY = e.clientY - startY;
    updateTransform();
  });

  window.addEventListener("mouseup", () => {
    isDragging = false;
    canvasArea.classList.remove("grabbing");
  });

  // Touch Pan Support
  canvasArea.addEventListener("touchstart", (e) => {
    if (e.touches.length === 1) {
      isDragging = true;
      startX = e.touches[0].clientX - posX;
      startY = e.touches[0].clientY - posY;
    }
  }, { passive: true });

  window.addEventListener("touchmove", (e) => {
    if (!isDragging || e.touches.length !== 1) return;
    posX = e.touches[0].clientX - startX;
    posY = e.touches[0].clientY - startY;
    updateTransform();
  }, { passive: true });

  window.addEventListener("touchend", () => {
    isDragging = false;
  });

  // Mouse wheel zoom
  canvasArea.addEventListener("wheel", (e) => {
    e.preventDefault();
    const zoomFactor = 1.15;
    const oldScale = scale;
    if (e.deltaY < 0) {
      scale = Math.min(scale * zoomFactor, 3.2);
    } else {
      scale = Math.max(scale / zoomFactor, 0.75);
    }

    // Zoom towards center of canvas
    const rect = canvasArea.getBoundingClientRect();
    const cx = rect.width / 2;
    const cy = rect.height / 2;
    posX = cx - (cx - posX) * (scale / oldScale);
    posY = cy - (cy - posY) * (scale / oldScale);

    updateTransform();
  });

  // Select building and populate side drawer
  function selectBuilding(bId) {
    selectedBuildingId = bId;
    const building = CAMPUS_LANDMARKS.find(b => b.id === bId);
    if (!building) return;

    // Update active pin visual
    document.querySelectorAll(".map-pin").forEach(p => {
      p.classList.toggle("active", p.getAttribute("data-id") === bId);
    });

    // Populate Sidebar Details Panel
    const detailPanel = document.getElementById("buildingDetailCard");
    if (detailPanel) {
      detailPanel.innerHTML = `
        <span class="building-badge-tag tag ${building.category === 'usict' ? 'Important' : 'Academic'}">
          ${building.categoryLabel}
        </span>
        <div class="building-title-wrap">
          <h2>${building.name}</h2>
          <span class="sub-title">${building.fullName}</span>
        </div>
        <p style="font-size: 13px; line-height: 1.5; color: var(--ink-light);">${building.description}</p>
        
        <div class="building-meta-box">
          <div class="meta-row">
            <b>Building Floors:</b>
            <span>${building.floors}</span>
          </div>
          <div class="meta-row">
            <b>Category:</b>
            <span style="text-transform: capitalize;">${building.category}</span>
          </div>
        </div>

        <div>
          <div class="building-section-title">🎓 Departments & Schools</div>
          <ul class="building-facilities-list">
            ${building.schools.map(s => `<li><span>🏛️</span><span>${s}</span></li>`).join("")}
          </ul>
        </div>

        <div>
          <div class="building-section-title">🔬 Key Labs & Facilities</div>
          <ul class="building-facilities-list">
            ${building.facilities.map(f => `<li><span>🔹</span><span>${f}</span></li>`).join("")}
          </ul>
        </div>

        <div class="directions-box">
          <b>📍 Walking Directions:</b>
          ${building.directions}
        </div>

        <div class="building-actions-bar">
          <button class="primary-btn" onclick="window.mapController.centerOnBuilding('${building.id}')">
            🎯 Focus Location
          </button>
          <button class="secondary-btn" onclick="askAiAboutBuilding('${building.name}')">
            💬 Ask AI
          </button>
        </div>
      `;
    }

    centerOnBuilding(bId);
  }

  // Smooth Center on building coordinates
  function centerOnBuilding(bId) {
    const building = CAMPUS_LANDMARKS.find(b => b.id === bId);
    if (!building) return;

    const rect = canvasArea.getBoundingClientRect();
    scale = 1.35;
    // Map image is 1024 x 652
    const targetPxX = (building.coords.x / 100) * 1024;
    const targetPxY = (building.coords.y / 100) * 652;

    posX = (rect.width / 2) - (targetPxX * scale);
    posY = (rect.height / 2) - (targetPxY * scale);

    stage.style.transition = "transform 0.35s cubic-bezier(0.2, 0.9, 0.3, 1)";
    updateTransform();
    setTimeout(() => {
      stage.style.transition = "transform 0.05s ease-out";
    }, 380);
  }

  function centerOnUSICT() {
    centerOnBuilding("block-e");
  }

  function resetView() {
    const rect = canvasArea.getBoundingClientRect();
    scale = Math.min(rect.width / 1024, rect.height / 652) * 0.95;
    posX = (rect.width - 1024 * scale) / 2;
    posY = (rect.height - 652 * scale) / 2;
    stage.style.transition = "transform 0.35s ease";
    updateTransform();
    setTimeout(() => {
      stage.style.transition = "transform 0.05s ease-out";
    }, 380);
  }

  // Map Controls Buttons (+, -, reset, usict, fullscreen)
  document.getElementById("mapZoomInBtn")?.addEventListener("click", () => {
    scale = Math.min(scale * 1.3, 3.2);
    updateTransform();
  });
  document.getElementById("mapZoomOutBtn")?.addEventListener("click", () => {
    scale = Math.max(scale / 1.3, 0.75);
    updateTransform();
  });
  document.getElementById("mapResetBtn")?.addEventListener("click", resetView);
  document.getElementById("mapFocusUSICTBtn")?.addEventListener("click", centerOnUSICT);

  // Category Filter Buttons
  document.querySelectorAll(".map-filter-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".map-filter-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      const category = btn.getAttribute("data-cat") || "all";
      const searchVal = document.getElementById("mapSearchInput")?.value || "";
      renderPins(category, searchVal);
    });
  });

  // Search Input for Map
  const searchInput = document.getElementById("mapSearchInput");
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      const activeCatBtn = document.querySelector(".map-filter-btn.active");
      const activeCat = activeCatBtn ? activeCatBtn.getAttribute("data-cat") : "all";
      renderPins(activeCat, e.target.value);
    });
  }

  // Initial render & center
  renderPins();
  selectBuilding("block-e");
  setTimeout(resetView, 100);

  // Expose controller globally
  window.mapController = {
    selectBuilding,
    centerOnBuilding,
    centerOnUSICT,
    resetView
  };
}

// ==========================================
// ATTENDANCE PORTAL (2026 REGULATIONS)
// ==========================================
function initAttendance() {
  const tableBody = document.getElementById("attendanceTableBody");
  if (!tableBody) return;

  function renderTable() {
    tableBody.innerHTML = ATTENDANCE_DATA.map(c => {
      const pct = Math.round((c.attended / c.held) * 100);
      let statusClass = "tag Info";
      let statusText = "Safe (≥80%)";
      let barClass = "";

      if (pct < 70) {
        statusClass = "tag Important";
        statusText = "Detained (<70%)";
        barClass = "danger";
      } else if (pct < 80) {
        statusClass = "tag Fee";
        statusText = "Condonable (70-80%)";
        barClass = "warning";
      }

      return `
        <tr>
          <td><b>${c.code}</b></td>
          <td>${c.name}</td>
          <td><span class="tag Academic">${c.type}</span></td>
          <td>${c.attended} / ${c.held}</td>
          <td>
            <div style="display:flex; align-items:center; gap:8px;">
              <b>${pct}%</b>
              <div class="progress-bar-wrap">
                <div class="progress-bar-fill ${barClass}" style="width: ${pct}%"></div>
              </div>
            </div>
          </td>
          <td><span class="${statusClass}">${statusText}</span></td>
          <td>
            <button class="primary-btn" style="padding:4px 10px; font-size:11px;" onclick="simulateAttendanceCheck('${c.code}')">
              Biometric Log
            </button>
          </td>
        </tr>
      `;
    }).join("");
  }

  renderTable();

  // Condonation & Safety Calculator
  const calcSlider = document.getElementById("calcMissedSlider");
  const calcDisplay = document.getElementById("calcMissedVal");
  const calcResult = document.getElementById("calcResultBox");

  if (calcSlider && calcDisplay && calcResult) {
    calcSlider.addEventListener("input", () => {
      const missed = parseInt(calcSlider.value, 10);
      calcDisplay.textContent = missed;

      // Base: Total held: 226, attended: 191 (84.5%)
      const totalHeld = 226 + missed;
      const totalAttended = 191;
      const newPct = ((totalAttended / totalHeld) * 100).toFixed(1);

      let msg = "";
      if (newPct >= 80) {
        msg = `<span style="color:#17703f; font-weight:700;">✅ SAFE: Your attendance will be ${newPct}%. You satisfy the 80% mandatory criteria.</span>`;
      } else if (newPct >= 70) {
        msg = `<span style="color:#9a5b00; font-weight:700;">⚠️ CONDONATION ZONE: Your attendance drops to ${newPct}%. You will require a Medical Certificate within 7 days and a ₹750 condonation fee per course to avoid detention.</span>`;
      } else {
        msg = `<span style="color:#b3261e; font-weight:700;">🚨 DETENTION DANGER: Your attendance drops to ${newPct}% (<70%). As per GGSIPU 2026 Regulations, condonation is NOT permitted below 70%. You will be detained.</span>`;
      }

      calcResult.innerHTML = msg;
    });
  }
}

function simulateAttendanceCheck(courseCode) {
  showToast(`Fetching Biometric Log for ${courseCode} from Block E Gate 2 terminal...`);
  setTimeout(() => {
    openModal("biometricModal");
  }, 400);
}

// ==========================================
// SYLLABUS & ACADEMICS
// ==========================================
function initSyllabus() {
  const container = document.getElementById("syllabusCoursesGrid");
  const semButtons = document.querySelectorAll(".sem-btn");

  function renderSemester(sem) {
    const list = SYLLABUS_DATA[sem] || SYLLABUS_DATA[3];
    if (!container) return;

    container.innerHTML = list.map(c => `
      <div class="course-card">
        <div class="course-top-row">
          <span class="course-code">${c.code}</span>
          <span class="course-credits">${c.credits}</span>
        </div>
        <h4>${c.title}</h4>
        <div class="course-instructor">👨‍🏫 ${c.instructor}</div>
        <div class="course-units">${c.units}</div>
        <div style="display:flex; justify-content:space-between; align-items:center; margin-top:auto;">
          <button class="primary-btn" style="padding:6px 12px; font-size:12px;" onclick="downloadCourseSyllabus('${c.code}')">
            📥 Syllabus PDF
          </button>
          <button class="secondary-btn" style="padding:6px 12px; font-size:12px;" onclick="askAiAboutSubject('${c.title}')">
            Ask AI
          </button>
        </div>
      </div>
    `).join("");
  }

  semButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      semButtons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      const sem = parseInt(btn.getAttribute("data-sem") || "3", 10);
      renderSemester(sem);
    });
  });

  renderSemester(3);
}

function downloadCourseSyllabus(code) {
  showToast(`Downloading official GGSIPU Scheme & Syllabus for ${code}...`);
}

// ==========================================
// USICT AI ASSISTANT (INTELLIGENT BOT)
// ==========================================
function initAIAssistant() {
  const form = document.getElementById("aiChatForm");
  const input = document.getElementById("aiChatInput");
  const log = document.getElementById("aiChatLog");

  if (!form || !input || !log) return;

  function appendMsg(sender, html) {
    const msg = document.createElement("div");
    msg.className = `chat-msg ${sender}`;
    msg.innerHTML = html;
    log.appendChild(msg);
    log.scrollTop = log.scrollHeight;
  }

  function handleQuery(q) {
    q = q.trim();
    if (!q) return;

    appendMsg("user", escapeHtml(q));

    // Show simulated typing
    const typingMsg = document.createElement("div");
    typingMsg.className = "chat-msg bot";
    typingMsg.id = "typingIndicator";
    typingMsg.innerHTML = "Thinking...";
    log.appendChild(typingMsg);
    log.scrollTop = log.scrollHeight;

    setTimeout(() => {
      typingMsg.remove();
      const botResponse = generateAIAnswer(q);
      appendMsg("bot", botResponse);
    }, 350);
  }

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const query = input.value;
    input.value = "";
    handleQuery(query);
  });

  // Handle Quick Chips
  document.querySelectorAll(".chip-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const q = btn.getAttribute("data-q") || btn.textContent;
      handleQuery(q);
    });
  });

  // Welcome message
  appendMsg("bot", `Hello Student! I am your <b>USICT Assistant</b>. You can ask me about the <b>Campus Map</b>, <b>Block E facilities</b>, <b>Attendance Rules 2026</b>, <b>Exams</b>, <b>Fees</b>, or <b>Syllabus</b>.`);
}

function generateAIAnswer(rawQuery) {
  const q = rawQuery.toLowerCase();

  // Campus Map / Navigation Queries
  if (q.includes("map") || q.includes("where is") || q.includes("location") || q.includes("find") || q.includes("reach") || q.includes("canteen") || q.includes("library") || q.includes("hostel")) {
    if (q.includes("block e") || q.includes("usict") || q.includes("usit") || q.includes("ai lab")) {
      return `
        <b>USICT (Block E)</b> is located in the north-east quadrant of the central academic quad, directly northeast of the Central Library.
        <ul>
          <li><b>Labs:</b> AI & Robotics Lab (Room 304), Advanced Computing (Room 312).</li>
          <li><b>Dean Office:</b> Room 101.</li>
        </ul>
        <button class="chat-action-btn" onclick="navigateToMapBuilding('block-e')">📍 View Block E on Campus Map</button>
      `;
    }
    if (q.includes("library") || q.includes("books")) {
      return `
        <b>The Central Library</b> is the hexagonal building right in the center of the campus quad.
        <ul>
          <li>Houses over 100,000 titles and digital reading halls.</li>
          <li>Also houses the Accounts Branch and UWD on ground floor.</li>
        </ul>
        <button class="chat-action-btn" onclick="navigateToMapBuilding('library')">📍 View Library on Campus Map</button>
      `;
    }
    if (q.includes("canteen") || q.includes("food") || q.includes("eat")) {
      return `
        <b>The University Canteen & Food Court</b> is located between the Hostels and the Academic Blocks (right west of Block D).
        <ul>
          <li>Features Nescafe, Mother Dairy, hot meals, and a seating patio.</li>
        </ul>
        <button class="chat-action-btn" onclick="navigateToMapBuilding('canteen')">📍 Locate Canteen on Map</button>
      `;
    }
    if (q.includes("hostel")) {
      return `
        <b>Campus Hostels:</b>
        <ul>
          <li><b>Shivalik Boys Hostel:</b> Blue rectangular blocks west of the canteen.</li>
          <li><b>Aravali Girls Hostel:</b> Pink blocks north of the boys hostel.</li>
        </ul>
        <button class="chat-action-btn" onclick="navigateToMapBuilding('boys-hostel')">📍 View Hostels on Map</button>
      `;
    }
    return `
      <b>GGSIPU Dwarka Campus Map:</b> The university campus features 5 Academic Blocks (A to E), Central Library, Admin Block, Hostels, Sports Complex, and Indian Bank.
      <br><br>
      <button class="chat-action-btn" onclick="switchTab('tab-map')">🗺️ Open Interactive Campus Map</button>
    `;
  }

  // Attendance Queries (2026 Regulations)
  if (q.includes("attendance") || q.includes("detain") || q.includes("condonation") || q.includes("80") || q.includes("75") || q.includes("shortage")) {
    return `
      <b>Attendance Criteria (GGSIPU Regulations 2026):</b>
      <ul>
        <li><b>Mandatory 80%:</b> Students must maintain at least <b>80% attendance</b> in each course (theory & lab counted separately) to appear for End Semester Examinations.</li>
        <li><b>70% to 80% (Condonation Zone):</b> Can apply for shortage condonation on valid medical grounds (certified by a registered doctor) submitted within 7 days of absence.</li>
        <li><b>Condonation Fee:</b> ₹750 per subject.</li>
        <li><b>Below 70%:</b> Strict detention. No condonation is allowed below 70%; student must re-register in the next year.</li>
        <li>Recorded via <b>Biometric Terminals</b> across Block E.</li>
      </ul>
      <button class="chat-action-btn" onclick="switchTab('tab-attendance')">📊 Open Attendance Calculator</button>
    `;
  }

  // Exam Form & Examinations Queries
  if (q.includes("exam") || q.includes("datesheet") || q.includes("admit card") || q.includes("hall ticket") || q.includes("form")) {
    return `
      <b>End Semester Examinations 2026:</b>
      <ul>
        <li><b>Exam Form Deadline:</b> November 20, 2026 (No late fee). Late fee of ₹1,000 applies till Nov 25.</li>
        <li><b>Admit Card Release:</b> December 01, 2026.</li>
        <li><b>Theory Exams:</b> December 10 – December 24, 2026.</li>
        <li><b>Practical Exams:</b> December 26 – December 31, 2026.</li>
      </ul>
      <button class="chat-action-btn" onclick="switchTab('tab-exams')">🏆 View Examination Portal & Admit Card</button>
    `;
  }

  // Fees Queries
  if (q.includes("fee") || q.includes("payment") || q.includes("due") || q.includes("challan")) {
    return `
      <b>Tuition & Odd Semester Fee Notice:</b>
      <ul>
        <li><b>Last Date:</b> November 10, 2026 (Tomorrow).</li>
        <li>Payable via online student netbanking portal or challan at the Indian Bank branch on campus.</li>
        <li>Late penalty of ₹100/day applies from Nov 11.</li>
      </ul>
      <button class="chat-action-btn" onclick="openNoticeModal('notif-02')">📄 Read Official Fee Circular</button>
    `;
  }

  // Syllabus Queries
  if (q.includes("syllabus") || q.includes("subject") || q.includes("course") || q.includes("credit") || q.includes("ai")) {
    return `
      <b>B.Tech CSE (Artificial Intelligence) - 3rd Sem Curriculum:</b>
      <ul>
        <li><b>IT-201:</b> Data Structures & Algorithms (4 Credits)</li>
        <li><b>BS-203:</b> Discrete Mathematical Structures (4 Credits)</li>
        <li><b>EC-205:</b> Digital Logic & Computer Design (4 Credits)</li>
        <li><b>IT-207:</b> OOP using Java (3 Credits)</li>
        <li><b>AI-209:</b> Foundations of AI & ML (4 Credits)</li>
        <li><b>Labs:</b> DSA Lab, AI Tools Lab (Python/PyTorch)</li>
      </ul>
      <button class="chat-action-btn" onclick="switchTab('tab-syllabus')">📖 Open Full Syllabus Browser</button>
    `;
  }

  // Greetings & Help
  if (q.includes("hello") || q.includes("hi") || q.includes("hey") || q.includes("who are you")) {
    return `
      Hi Student! How can I assist you with your USICT dashboard today? You can ask me to show you the <b>campus map</b>, check your <b>attendance status</b>, view <b>exam dates</b>, or open <b>notices</b>.
    `;
  }

  return `
    I couldn't find an exact match for "${escapeHtml(rawQuery)}".
    <br><br>
    Try asking about:
    <ul>
      <li><b>"Where is USICT Block E?"</b></li>
      <li><b>"What is the attendance criteria?"</b></li>
      <li><b>"When is the fee payment deadline?"</b></li>
      <li><b>"Show campus map"</b></li>
    </ul>
  `;
}

function navigateToMapBuilding(buildingId) {
  switchTab("tab-map");
  if (window.mapController) {
    setTimeout(() => {
      window.mapController.selectBuilding(buildingId);
    }, 150);
  }
}

function askAiAboutBuilding(name) {
  const input = document.getElementById("aiChatInput");
  if (input) {
    input.value = `Tell me more about ${name}`;
    document.getElementById("aiChatForm")?.dispatchEvent(new Event("submit"));
    // Scroll chat into view if on mobile
    document.querySelector(".ai-card")?.scrollIntoView({ behavior: "smooth" });
  }
}

function askAiAboutSubject(title) {
  const input = document.getElementById("aiChatInput");
  if (input) {
    input.value = `What is the syllabus and recommended books for ${title}?`;
    document.getElementById("aiChatForm")?.dispatchEvent(new Event("submit"));
    switchTab("tab-dashboard");
    document.querySelector(".ai-card")?.scrollIntoView({ behavior: "smooth" });
  }
}

// ==========================================
// MODAL SYSTEM
// ==========================================
function initModals() {
  document.querySelectorAll(".modal-close-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      closeAllModals();
    });
  });

  document.querySelectorAll(".modal-backdrop").forEach(backdrop => {
    backdrop.addEventListener("click", (e) => {
      if (e.target === backdrop) closeAllModals();
    });
  });

  // Ticket submission handler
  const ticketForm = document.getElementById("supportTicketForm");
  if (ticketForm) {
    ticketForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const cat = document.getElementById("ticketCategory")?.value || "General";
      const subj = document.getElementById("ticketSubject")?.value || "Query";
      const randomId = Math.floor(1000 + Math.random() * 9000);
      ticketForm.reset();
      showToast(`Support Ticket #USICT-${randomId} submitted successfully! You will be notified via student email.`);
    });
  }
}

function openModal(modalId) {
  const m = document.getElementById(modalId);
  if (m) m.classList.add("active");
}

function closeAllModals() {
  document.querySelectorAll(".modal-backdrop").forEach(m => m.classList.remove("active"));
}

function openNoticeModal(noticeId) {
  const notice = OFFICIAL_NOTICES.find(n => n.id === noticeId) || OFFICIAL_NOTICES[0];
  const modal = document.getElementById("noticeModal");
  if (!modal) return;

  document.getElementById("noticeModalTag").textContent = notice.tag;
  document.getElementById("noticeModalTag").className = `tag ${notice.tag}`;
  document.getElementById("noticeModalTitle").textContent = notice.title;
  document.getElementById("noticeModalMeta").innerHTML = `Circular: <b>${notice.circularNo}</b> • Issued: <b>${notice.date}</b> by <b>${notice.issuedBy}</b>`;
  document.getElementById("noticeModalContent").innerHTML = notice.content;

  openModal("noticeModal");
}

// ==========================================
// TOAST NOTIFICATIONS
// ==========================================
function showToast(message) {
  let container = document.getElementById("toastContainer");
  if (!container) {
    container = document.createElement("div");
    container.id = "toastContainer";
    container.className = "toast-container";
    document.body.appendChild(container);
  }

  const toast = document.createElement("div");
  toast.className = "toast";
  toast.innerHTML = `<span>🔔</span><span>${message}</span>`;
  container.appendChild(toast);

  setTimeout(() => {
    toast.style.transition = "opacity 0.3s ease, transform 0.3s ease";
    toast.style.opacity = "0";
    toast.style.transform = "translateX(100%)";
    setTimeout(() => toast.remove(), 320);
  }, 3500);
}

// Escape HTML utility
function escapeHtml(text) {
  const div = document.createElement("div");
  div.textContent = text;
  return div.innerHTML;
}

