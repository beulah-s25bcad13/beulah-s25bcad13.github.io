// =============================================
// BEULAH S — PORTFOLIO APP.JS
// EmailJS: service_cmoxpej / template_jic7mvp
// =============================================

// Init EmailJS
emailjs.init("zM2YhB46nzbOnaNsa");

// ===== DEFAULT DATA =====
const DEFAULT = {
  profile: {
    name: "Beulah S",
    title: "BCA Computer Science Student",
    college: "Kristu Jayanti University · 2025–28",
    bio: "I'm a first year Computer Science student at Kristu Jayanti University, passionate about coding and web development. I love bringing ideas to life through clean, functional code — and when I'm not at my keyboard, you'll find me diving into a good book or leading something exciting on campus.",
    location: "Bengaluru, India",
    email: "sbeulah14@gmail.com",
    phone: "+91 78711 39951",
    github: "beulah-s25bcad13.github.io",
    linkedin: "linkedin.com/in/beulah-s4a2018379",
    photo: "https://api.dicebear.com/7.x/personas/svg?seed=Beulah&backgroundColor=f2c4ce",
    tags: ["Web Developer", "Python Enthusiast", "Leader", "Book Lover"],
    statProjects: 5,
    statGPA: "1st",
    statAwards: "6+",
    resumeLink: "#"
  },
  projects: [
    {
      id: 1, icon: "🌸",
      title: "Student Portfolio Website",
      desc: "A fully responsive personal portfolio built with HTML, CSS, and JavaScript to showcase projects, skills and achievements.",
      tech: ["HTML", "CSS", "JavaScript"],
      github: "https://beulah-s25bcad13.github.io",
      demo: "https://beulah-s25bcad13.github.io"
    },
    {
      id: 2, icon: "💻",
      title: "Web Development Projects",
      desc: "Collection of web development mini-projects exploring front-end concepts, responsive design and interactivity.",
      tech: ["HTML", "CSS", "JavaScript", "Python"],
      github: "https://github.com",
      demo: ""
    },
    {
      id: 3, icon: "🗄️",
      title: "Database Management System",
      desc: "A simple database project using SQL and MongoDB demonstrating both relational and NoSQL data handling.",
      tech: ["MongoDB", "SQL", "Python"],
      github: "https://github.com",
      demo: ""
    }
  ],
  skills: [
    { id: 1,  name: "Python",      cat: "Languages",   level: 80 },
    { id: 2,  name: "C",           cat: "Languages",   level: 75 },
    { id: 3,  name: "C++",         cat: "Languages",   level: 70 },
    { id: 4,  name: "JavaScript",  cat: "Languages",   level: 78 },
    { id: 5,  name: "HTML",        cat: "Web",         level: 90 },
    { id: 6,  name: "CSS",         cat: "Web",         level: 85 },
    { id: 7,  name: "SQL",         cat: "Database",    level: 72 },
    { id: 8,  name: "MongoDB",     cat: "Database",    level: 68 },
    { id: 9,  name: "Leadership",  cat: "Soft Skills", level: 92 },
  ],
  education: [
    {
      id: 1,
      degree: "BCA Computer Science",
      inst: "Kristu Jayanti University",
      period: "2025 – 2028",
      desc: "Currently pursuing Bachelor of Computer Applications with focus on programming, web development, and database management."
    },
    {
      id: 2,
      degree: "Higher Secondary Education",
      inst: "School",
      period: "Completed 2025",
      desc: "Completed 12th grade with strong foundation in Mathematics and Computer Science."
    }
  ],
  achievements: [
    { id: 1, title: "Digital Engineering Certificate", issuer: "Digital Program", year: "2025", desc: "Certified in digital engineering fundamentals and practices." },
    { id: 2, title: "MongoDB Certification", issuer: "MongoDB University", year: "2025", desc: "Completed MongoDB database design and development course." },
    { id: 3, title: "Microsoft Certification", issuer: "Microsoft Learn", year: "2025", desc: "Completed Microsoft certification courses in technology fundamentals." },
    { id: 4, title: "Web Development Bootcamp", issuer: "Online Platform", year: "2025", desc: "Completed intensive web development training covering full stack basics." },
  ]
};

// ===== STATE =====
let data = loadData();

function loadData() {
  try {
    const s = localStorage.getItem('beulah_portfolio');
    return s ? JSON.parse(s) : JSON.parse(JSON.stringify(DEFAULT));
  } catch(e) {
    return JSON.parse(JSON.stringify(DEFAULT));
  }
}
function saveData() {
  localStorage.setItem('beulah_portfolio', JSON.stringify(data));
}

// ===== RENDER ALL =====
function renderAll() {
  renderProfile();
  renderSkills();
  renderProjects();
  renderEducation();
  renderAchievements();
  renderAdminLists();
}

// ===== PROFILE =====
function renderProfile() {
  const p = data.profile;
  set('hero-name', p.name);
  set('hero-title', p.title);
  set('hero-college', p.college);
  set('about-bio', p.bio);
  set('about-college-info', p.college.split('·')[0].trim());
  set('about-location', p.location);
  set('about-email', p.email);
  set('about-phone', p.phone);
  set('about-github', p.github);
  set('about-linkedin', p.linkedin);
  set('stat-projects', p.statProjects);
  set('stat-gpa', p.statGPA);
  set('stat-awards', p.statAwards);
  set('footer-year', new Date().getFullYear());

  const photo = document.getElementById('hero-photo');
  if (photo) photo.src = p.photo || DEFAULT.profile.photo;

  const resumeEl = document.getElementById('resume-link');
  if (resumeEl) resumeEl.href = p.resumeLink || '#';

  const tagsEl = document.getElementById('hero-tags');
  if (tagsEl) tagsEl.innerHTML = (p.tags || []).map(t => `<span class="tag">${t}</span>`).join('');
}

// ===== SKILLS =====
function renderSkills() {
  const grid = document.getElementById('skills-grid');
  if (!grid) return;
  grid.innerHTML = data.skills.map(s => `
    <div class="skill-card">
      <div class="skill-header">
        <span class="skill-name">${s.name}</span>
        <span class="skill-pct">${s.level}%</span>
      </div>
      <div class="skill-bar-bg">
        <div class="skill-bar-fill" data-w="${s.level}%" style="width:0%"></div>
      </div>
      <div class="skill-cat">${s.cat}</div>
    </div>
  `).join('');
  setTimeout(() => {
    document.querySelectorAll('.skill-bar-fill').forEach(b => { b.style.width = b.dataset.w; });
  }, 400);
}

// ===== PROJECTS =====
function renderProjects() {
  const grid = document.getElementById('projects-grid');
  if (!grid) return;
  if (!data.projects.length) {
    grid.innerHTML = `<p style="color:var(--text-muted);grid-column:1/-1;text-align:center;">No projects yet. Add via Edit panel.</p>`;
    return;
  }
  grid.innerHTML = data.projects.map(p => `
    <div class="project-card">
      <button class="project-del" onclick="deleteProject(${p.id})" title="Delete"><i class="fas fa-trash"></i></button>
      <div class="project-icon">${p.icon || '💻'}</div>
      <h3 class="project-title">${p.title}</h3>
      <p class="project-desc">${p.desc}</p>
      <div class="project-tech">${(p.tech||[]).map(t=>`<span class="tech-tag">${t}</span>`).join('')}</div>
      <div class="project-links">
        ${p.github ? `<a href="${p.github}" target="_blank"><i class="fab fa-github"></i> GitHub</a>` : ''}
        ${p.demo  ? `<a href="${p.demo}" target="_blank"><i class="fas fa-external-link-alt"></i> Live</a>` : ''}
      </div>
    </div>
  `).join('');
}

// ===== EDUCATION =====
function renderEducation() {
  const tl = document.getElementById('education-timeline');
  if (!tl) return;
  tl.innerHTML = data.education.map(e => `
    <div class="timeline-item">
      <div class="timeline-dot"></div>
      <div class="timeline-period">${e.period}</div>
      <div class="timeline-degree">${e.degree}</div>
      <div class="timeline-inst"><i class="fas fa-university" style="margin-right:6px;color:var(--pink-dark)"></i>${e.inst}</div>
      <div class="timeline-desc">${e.desc}</div>
      <button class="timeline-del" onclick="deleteEducation(${e.id})"><i class="fas fa-trash"></i> Remove</button>
    </div>
  `).join('');
}

// ===== ACHIEVEMENTS =====
function renderAchievements() {
  const grid = document.getElementById('achievements-grid');
  if (!grid) return;
  const icons = ['🏆','🌸','⭐','🎖️','🏅','💡','🎓','🌟','✨','🥇'];
  grid.innerHTML = data.achievements.map((a,i) => `
    <div class="achievement-card">
      <button class="ach-del" onclick="deleteAchievement(${a.id})"><i class="fas fa-times"></i></button>
      <div class="award-icon">${icons[i % icons.length]}</div>
      <div class="award-title">${a.title}</div>
      <div class="award-issuer">${a.issuer}</div>
      <div class="award-year">${a.year}</div>
      <div class="award-desc">${a.desc}</div>
    </div>
  `).join('');
}

// ===== ADMIN LISTS =====
function renderAdminLists() {
  document.getElementById('projects-list').innerHTML = data.projects.map(p => `
    <div class="admin-item">
      <span>${p.icon} ${p.title}</span>
      <button class="item-del" onclick="deleteProject(${p.id})"><i class="fas fa-trash"></i></button>
    </div>`).join('');

  document.getElementById('skills-list').innerHTML = data.skills.map(s => `
    <div class="admin-item">
      <span>${s.name} <small style="color:var(--pink-dark)">(${s.level}%)</small></span>
      <button class="item-del" onclick="deleteSkill(${s.id})"><i class="fas fa-trash"></i></button>
    </div>`).join('');

  document.getElementById('edu-list').innerHTML = data.education.map(e => `
    <div class="admin-item">
      <span>${e.degree}</span>
      <button class="item-del" onclick="deleteEducation(${e.id})"><i class="fas fa-trash"></i></button>
    </div>`).join('');

  document.getElementById('awards-list').innerHTML = data.achievements.map(a => `
    <div class="admin-item">
      <span>${a.title}</span>
      <button class="item-del" onclick="deleteAchievement(${a.id})"><i class="fas fa-trash"></i></button>
    </div>`).join('');
}

// ===== SAVE PROFILE =====
function saveProfile() {
  const p = data.profile;
  data.profile = {
    name:         v('f-name')    || p.name,
    title:        v('f-title')   || p.title,
    college:      v('f-college') || p.college,
    bio:          v('f-bio')     || p.bio,
    location:     v('f-location')|| p.location,
    email:        v('f-email')   || p.email,
    phone:        v('f-phone')   || p.phone,
    github:       v('f-github')  || p.github,
    linkedin:     v('f-linkedin')|| p.linkedin,
    photo:        v('f-photo')   || p.photo,
    tags:         (v('f-tags')||'').split(',').map(t=>t.trim()).filter(Boolean),
    statProjects: v('f-stat-p')  || p.statProjects,
    statGPA:      v('f-stat-g')  || p.statGPA,
    statAwards:   v('f-stat-a')  || p.statAwards,
    resumeLink:   p.resumeLink
  };
  saveData(); renderAll(); notify('✅ Profile updated!');
}

// ===== ADD PROJECT =====
function addProject() {
  const title = v('p-title');
  if (!title) { notify('⚠️ Enter a project title'); return; }
  data.projects.push({
    id: Date.now(), icon: v('p-icon') || '💻',
    title, desc: v('p-desc') || '',
    tech: (v('p-tech')||'').split(',').map(t=>t.trim()).filter(Boolean),
    github: v('p-github') || '', demo: v('p-demo') || ''
  });
  clr(['p-title','p-desc','p-tech','p-github','p-demo','p-icon']);
  saveData(); renderAll(); notify('🌸 Project added!');
}

// ===== ADD SKILL =====
function addSkill() {
  const name = v('s-name');
  if (!name) { notify('⚠️ Enter a skill name'); return; }
  data.skills.push({
    id: Date.now(), name,
    cat: v('s-cat') || 'Languages',
    level: parseInt(document.getElementById('s-level').value) || 80
  });
  clr(['s-name']);
  saveData(); renderAll(); notify('🌸 Skill added!');
}

// ===== ADD EDUCATION =====
function addEducation() {
  const degree = v('e-degree');
  if (!degree) { notify('⚠️ Enter degree name'); return; }
  data.education.unshift({
    id: Date.now(), degree,
    inst: v('e-inst') || '',
    period: v('e-period') || '',
    desc: v('e-desc') || ''
  });
  clr(['e-degree','e-inst','e-period','e-desc']);
  saveData(); renderAll(); notify('🌸 Education added!');
}

// ===== ADD ACHIEVEMENT =====
function addAchievement() {
  const title = v('a-title');
  if (!title) { notify('⚠️ Enter award title'); return; }
  data.achievements.push({
    id: Date.now(), title,
    issuer: v('a-issuer') || '',
    year: v('a-year') || '',
    desc: v('a-desc') || ''
  });
  clr(['a-title','a-issuer','a-year','a-desc']);
  saveData(); renderAll(); notify('🌸 Achievement added!');
}

// ===== DELETES =====
function deleteProject(id)     { if (confirm('Delete this project?'))    { data.projects    = data.projects.filter(x=>x.id!==id);    saveData(); renderAll(); notify('🗑️ Deleted'); } }
function deleteSkill(id)       {                                          { data.skills      = data.skills.filter(x=>x.id!==id);      saveData(); renderAll(); notify('🗑️ Deleted'); } }
function deleteEducation(id)   { if (confirm('Delete this entry?'))      { data.education   = data.education.filter(x=>x.id!==id);   saveData(); renderAll(); notify('🗑️ Deleted'); } }
function deleteAchievement(id) { if (confirm('Delete this achievement?')){ data.achievements = data.achievements.filter(x=>x.id!==id); saveData(); renderAll(); notify('🗑️ Deleted'); } }

// ===== ADMIN PANEL =====
function toggleAdmin() {
  document.getElementById('admin-panel').classList.toggle('active');
  document.getElementById('admin-overlay').classList.toggle('active');
  fillAdminForm();
}
function closeAdmin() {
  document.getElementById('admin-panel').classList.remove('active');
  document.getElementById('admin-overlay').classList.remove('active');
}
function fillAdminForm() {
  const p = data.profile;
  sv('f-name', p.name); sv('f-title', p.title); sv('f-college', p.college);
  sv('f-bio', p.bio); sv('f-location', p.location); sv('f-email', p.email);
  sv('f-phone', p.phone); sv('f-github', p.github); sv('f-linkedin', p.linkedin);
  sv('f-photo', p.photo); sv('f-tags', (p.tags||[]).join(', '));
  sv('f-stat-p', p.statProjects); sv('f-stat-g', p.statGPA); sv('f-stat-a', p.statAwards);
}
function showTab(id, e) {
  document.querySelectorAll('.tab-content').forEach(t => t.classList.remove('active'));
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  document.getElementById('tab-' + id).classList.add('active');
  if (e && e.target) e.target.classList.add('active');
}

// ===== EMAILJS CONTACT FORM =====
async function handleContact(e) {
  e.preventDefault();
  const btn    = document.getElementById('send-btn');
  const status = document.getElementById('form-status');
  const name   = document.getElementById('msg-name').value.trim();
  const email  = document.getElementById('msg-email').value.trim();
  const msg    = document.getElementById('msg-message').value.trim();

  btn.disabled = true;
  btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
  status.className = 'form-status';
  status.textContent = '';

  try {
    await emailjs.send("service_cmoxpej", "template_jic7mvp", {
      name:    name,
      email:   email,
      message: msg,
      time:    new Date().toLocaleString()
    });

    status.className = 'form-status success';
    status.textContent = '🌸 Message sent! Beulah will get back to you soon.';
    document.getElementById('contact-form').reset();
  } catch(err) {
    status.className = 'form-status error';
    status.textContent = '❌ Something went wrong. Please try again or email directly.';
    console.error('EmailJS error:', err);
  } finally {
    btn.disabled = false;
    btn.innerHTML = 'Send Message <i class="fas fa-paper-plane"></i>';
  }
}

// ===== NAVBAR SCROLL =====
window.addEventListener('scroll', () => {
  document.getElementById('navbar').classList.toggle('scrolled', window.scrollY > 50);
});

// ===== CURSOR GLOW =====
document.addEventListener('mousemove', e => {
  const glow = document.getElementById('cursor-glow');
  if (glow) { glow.style.left = e.clientX + 'px'; glow.style.top = e.clientY + 'px'; }
});

// ===== SCROLL ANIMATIONS =====
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.1 });

function observeElements() {
  document.querySelectorAll('.project-card, .skill-card, .achievement-card, .timeline-item, .about-card, .about-text').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(28px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
  });
}

// ===== UTILS =====
function set(id, val) { const el = document.getElementById(id); if (el) el.textContent = val ?? ''; }
function v(id)  { const el = document.getElementById(id); return el ? el.value.trim() : ''; }
function sv(id, val) { const el = document.getElementById(id); if (el) el.value = val ?? ''; }
function clr(ids) { ids.forEach(id => sv(id, '')); }

let nTimer;
function notify(msg) {
  const n = document.getElementById('__notif');
  n.textContent = msg; n.classList.add('show');
  clearTimeout(nTimer);
  nTimer = setTimeout(() => n.classList.remove('show'), 2800);
}

// ===== INIT =====
document.addEventListener('DOMContentLoaded', () => {
  renderAll();
  setTimeout(observeElements, 150);
});