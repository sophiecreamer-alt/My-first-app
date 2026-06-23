import { useState } from 'react';

// ── Sample data ──────────────────────────────────────────

const NEWS = [
  {
    id: 1,
    category: 'announcement',
    title: '15 Days Out — Xerocon London',
    date: '23 Jun 2026',
    summary:
      "We're 15 days out from Xerocon London and the team is in full prep mode. All key materials — narratives, storybooks, messaging templates, and the need-to-know guide — are linked in the Resources section. Make sure you've reviewed them ahead of the event.",
    xeroconLink: 'https://docs.google.com/document/d/1xZXE-oJgKQ6J8trXsRyKVrmP1bZ6-In4oiQGk9S4yWQ/edit?usp=drivesdk',
    author: 'Sophie C',
    initials: 'SC',
  },
  {
    id: 2,
    category: 'initiative',
    title: 'The Corner Store — What You Need to Know',
    date: '23 Jun 2026',
    summary:
      'The Corner Store is a key part of our Xerocon story this year. It brings together our product narrative in a way that is clear, compelling, and built for partners. Review the full brief and make sure you can speak to it confidently on the day.',
    author: 'Sophie C',
    initials: 'SC',
  },
  {
    id: 3,
    category: 'announcement',
    title: 'Welcome to the Team Hub!',
    date: '1 Jun 2026',
    summary:
      'This is your central place for news, updates, priorities, and team resources. Bookmark it and check back regularly for the latest.',
    author: 'Team Hub',
    initials: 'TH',
  },
];

const CALENDAR_ITEMS = [
  {
    id: 1,
    month: 'JUN',
    day: '23',
    title: 'Project Aurora — Integration Sprint',
    description: 'API integration & data migration work continues. Engineering + Data teams.',
    status: 'inflight',
    statusLabel: 'In Flight',
  },
  {
    id: 2,
    month: 'JUN',
    day: '27',
    title: 'Q3 Roadmap Stakeholder Review',
    description: 'Present finalised Q3 roadmap to senior stakeholders. Deck in Resources.',
    status: 'upcoming',
    statusLabel: 'Upcoming',
  },
  {
    id: 3,
    month: 'JUL',
    day: '1',
    title: 'Customer Feedback Loop — Pilot Launch',
    description: 'Pilot the new feedback process with 5 key accounts.',
    status: 'upcoming',
    statusLabel: 'Upcoming',
  },
  {
    id: 4,
    month: 'JUL',
    day: '14',
    title: 'Project Aurora — Go Live',
    description: 'Target go-live date for Aurora Phase 2. Sign-off required by 11 Jul.',
    status: 'upcoming',
    statusLabel: 'Upcoming',
  },
  {
    id: 5,
    month: 'JUL',
    day: '18',
    title: 'Team All-Hands — Q3 Kick-Off',
    description: 'Full team all-hands to kick off Q3. Agenda circulated the week prior.',
    status: 'upcoming',
    statusLabel: 'Upcoming',
  },
  {
    id: 6,
    month: 'JUN',
    day: '10',
    title: 'OKR Mid-Quarter Check-In',
    description: 'Mid-quarter OKR review completed. Results shared with leadership.',
    status: 'completed',
    statusLabel: 'Completed',
  },
];

const RESOURCES = [
  {
    id: 1,
    icon: '📋',
    iconClass: 'resource-icon-blue',
    title: 'Xerocon London — Need to Know',
    description: 'Everything you need ahead of the event: schedule, logistics, key contacts, and what to expect on the day.',
    href: 'https://docs.google.com/document/d/1xZXE-oJgKQ6J8trXsRyKVrmP1bZ6-In4oiQGk9S4yWQ/edit?usp=drivesdk',
    linkLabel: 'Open Doc',
  },
  {
    id: 2,
    icon: '🇬🇧',
    iconClass: 'resource-icon-purple',
    title: 'DOC 1 — UK Narrative',
    description: 'The core UK narrative document. Essential reading for anyone presenting or talking to partners at Xerocon.',
    href: '#',
    linkLabel: 'Open Doc',
  },
  {
    id: 3,
    icon: '📖',
    iconClass: 'resource-icon-green',
    title: 'AB Storybook V2',
    description: 'Latest version of the AB storybook. Use this as your reference for the Accountant & Bookkeeper story at Xerocon.',
    href: '#',
    linkLabel: 'Open Doc',
  },
  {
    id: 4,
    icon: '📗',
    iconClass: 'resource-icon-orange',
    title: 'UK SB Storybook',
    description: 'The UK Small Business storybook. Key for aligning on the SB narrative ahead of event conversations.',
    href: '#',
    linkLabel: 'Open Doc',
  },
  {
    id: 5,
    icon: '💬',
    iconClass: 'resource-icon-pink',
    title: 'Regional Messaging Templates',
    description: 'Messaging templates for both SB and AB audiences. Use these to ensure consistent partner communications.',
    href: '#',
    linkLabel: 'Open Doc',
  },
  {
    id: 6,
    icon: '🤝',
    iconClass: 'resource-icon-blue',
    title: 'Partner Sales Narrative',
    description: 'The partner-facing sales narrative. Aligned to the Xerocon story and ready to use in partner conversations.',
    href: '#',
    linkLabel: 'Open Doc',
  },
  {
    id: 7,
    icon: '📊',
    iconClass: 'resource-icon-purple',
    title: 'Data Health SSOT',
    description: 'Single source of truth for data health metrics. Reference this for any data-related questions at the event.',
    href: '#',
    linkLabel: 'Open Doc',
  },
  {
    id: 8,
    icon: '📄',
    iconClass: 'resource-icon-green',
    title: 'Smart Doc Capture SSOT',
    description: 'Single source of truth for Smart Doc Capture. All key facts, figures, and talking points in one place.',
    href: '#',
    linkLabel: 'Open Doc',
  },
];

// ── Components ────────────────────────────────────────────

function Navbar() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <a href="#home" className="navbar-brand" onClick={close}>
          <span className="navbar-brand-icon">🏠</span>
          Team Hub
        </a>
        <ul className={`navbar-links${open ? ' open' : ''}`}>
          {[
            ['#news', 'News'],
            ['#calendar', 'Calendar'],
            ['#resources', 'Resources'],
            ['#about', 'About'],
            ['#contact', 'Contact'],
          ].map(([href, label]) => (
            <li key={href}>
              <a href={href} onClick={close}>{label}</a>
            </li>
          ))}
        </ul>
        <button
          className="navbar-toggle"
          onClick={() => setOpen(o => !o)}
          aria-label="Toggle menu"
        >
          {open ? '✕' : '☰'}
        </button>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section id="home" className="hero">
      <h1>Team Hub</h1>
      <p>
        Your central place for news, key updates to priority initiatives,
        team priorities &amp; capacity, and important resources.
      </p>
    </section>
  );
}

function NewsSection() {
  const badgeClass = {
    initiative: 'badge-initiative',
    announcement: 'badge-announcement',
    update: 'badge-update',
    alert: 'badge-alert',
  };

  return (
    <section id="news" className="section">
      <div className="container">
        <div className="section-header">
          <h2>📣 News &amp; Updates</h2>
          <p>Latest announcements and priority initiative updates from the team.</p>
        </div>
        <div className="news-grid">
          {NEWS.map(item => (
            <article key={item.id} className="news-card">
              <div className="news-card-meta">
                <span className={`badge ${badgeClass[item.category]}`}>
                  {item.category}
                </span>
                <span className="news-card-date">{item.date}</span>
              </div>
              <h3>{item.title}</h3>
              <p>{item.summary}</p>
              {item.xeroconLink && (
                <a href={item.xeroconLink} target="_blank" rel="noreferrer" className="resource-link-label">
                  Read the Need to Know →
                </a>
              )}
              <div className="news-card-author">
                <div className="avatar">{item.initials}</div>
                {item.author}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function CalendarSection() {
  return (
    <section id="calendar" className="section section-alt">
      <div className="container">
        <div className="section-header">
          <h2>📅 Calendar</h2>
          <p>Work currently in flight and what's coming next.</p>
        </div>
        <div className="calendar-list">
          {CALENDAR_ITEMS.map(item => (
            <div key={item.id} className="calendar-item">
              <div className="calendar-date-block">
                <div className="month">{item.month}</div>
                <div className="day">{item.day}</div>
              </div>
              <div className="calendar-info">
                <h4>{item.title}</h4>
                <p>{item.description}</p>
              </div>
              <span className={`status-pill status-${item.status}`}>
                {item.statusLabel}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ResourcesSection() {
  return (
    <section id="resources" className="section">
      <div className="container">
        <div className="section-header">
          <h2>🔗 Resources</h2>
          <p>Key documents, trackers, and guides for the team.</p>
        </div>
        <div className="resources-grid">
          {RESOURCES.map(r => (
            <a key={r.id} href={r.href} className="resource-card" onClick={e => e.preventDefault()}>
              <div className={`resource-icon ${r.iconClass}`}>{r.icon}</div>
              <div className="resource-body">
                <h4>{r.title}</h4>
                <p>{r.description}</p>
                <span className="resource-link-label">{r.linkLabel} →</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section id="about" className="section section-alt">
      <div className="container">
        <div className="about-layout">
          <div className="about-text">
            <h2>About This Hub</h2>
            <p>
              Team Hub is your single source of truth for what's happening across the team.
              It brings together news, priority updates, capacity information, and key
              resources — so everyone stays aligned without relying on scattered emails
              or chasing updates in meetings.
            </p>
            <p>
              Updated regularly by team leads, this hub is designed to give clear
              visibility over what we're working on, what's coming next, and where to
              find the things you need to do your best work.
            </p>
            <p>
              If you'd like to contribute a news post or add a resource, use the
              Contact form below or reach out to a team lead directly.
            </p>
          </div>
          <div className="about-stats">
            {[
              { number: '6', label: 'Active Initiatives' },
              { number: '12', label: 'Team Members' },
              { number: '3', label: 'Upcoming Milestones' },
              { number: 'Q3', label: 'Current Quarter' },
            ].map(s => (
              <div key={s.label} className="stat-card">
                <div className="stat-number">{s.number}</div>
                <div className="stat-label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  const [form, setForm] = useState({ name: '', email: '', topic: '', message: '' });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = 'Name is required.';
    if (!form.email.trim()) {
      e.email = 'Email is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      e.email = 'Please enter a valid email address.';
    }
    if (!form.message.trim()) e.message = 'Message is required.';
    return e;
  };

  const handleChange = e => {
    const { name, value } = e.target;
    setForm(f => ({ ...f, [name]: value }));
    if (errors[name]) setErrors(er => ({ ...er, [name]: undefined }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    const e2 = validate();
    if (Object.keys(e2).length > 0) { setErrors(e2); return; }
    setSubmitted(true);
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="contact-layout">
          <div className="contact-info">
            <h2>Get in Touch</h2>
            <p>
              Have a news update to share, a resource to add, or feedback on the hub?
              Fill in the form and a team lead will get back to you.
            </p>
            {[
              { icon: '📧', text: 'sophie.creamer@xero.com' },
              { icon: '📧', text: 'connor.barbour@xero.com' },
              { icon: '💬', text: '#team-hub on Slack' },
            ].map(d => (
              <div key={d.text} className="contact-detail">
                <div className="contact-detail-icon">{d.icon}</div>
                <span>{d.text}</span>
              </div>
            ))}
          </div>

          <div className="contact-form">
            {submitted ? (
              <div className="form-success">
                <div className="success-icon">✅</div>
                <h3>Message sent!</h3>
                <p>Thanks for reaching out. A team lead will be in touch shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Name *</label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Your name"
                      value={form.name}
                      onChange={handleChange}
                      className={errors.name ? 'error' : ''}
                    />
                    {errors.name && <div className="form-error">{errors.name}</div>}
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email *</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="your@email.com"
                      value={form.email}
                      onChange={handleChange}
                      className={errors.email ? 'error' : ''}
                    />
                    {errors.email && <div className="form-error">{errors.email}</div>}
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="topic">Topic</label>
                  <select id="topic" name="topic" value={form.topic} onChange={handleChange}>
                    <option value="">Select a topic…</option>
                    <option value="news">Submit a news update</option>
                    <option value="resource">Add a resource</option>
                    <option value="calendar">Calendar / initiative update</option>
                    <option value="feedback">Feedback on the hub</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="What would you like to share or ask?"
                    value={form.message}
                    onChange={handleChange}
                    className={errors.message ? 'error' : ''}
                  />
                  {errors.message && <div className="form-error">{errors.message}</div>}
                </div>
                <button type="submit" className="btn btn-primary">Send Message →</button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <p>© 2026 Team Hub · Built to keep the team aligned</p>
    </footer>
  );
}

// ── App ───────────────────────────────────────────────────

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <NewsSection />
      <CalendarSection />
      <ResourcesSection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </>
  );
}
