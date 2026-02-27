import React, { useState, useEffect, useRef } from 'react';
import ReactMarkdown from 'react-markdown';
import { BrowserRouter, Routes, Route, Link, useParams, useNavigate, useLocation } from 'react-router-dom';
import { BookOpen, Settings, Zap, Terminal, Github, ArrowLeft, ArrowRight, Code, User, Menu, X, ChevronRight, Cloud, Sparkles, List, ChevronDown, ChevronUp, Search as SearchIcon, Copy, Check, Shield, Lightbulb, Apple, Monitor } from 'lucide-react';

const allDocs = [
  // Start Here — essential onboarding, read in order
  { id: 'why-desktop-agents', title: 'Beyond Chatbots', icon: <Lightbulb size={20} />, path: '/docs/why-desktop-agents.md', category: 'start', description: 'Why desktop agents are the new age of productivity' },
  { id: 'setup', title: 'Getting Started', icon: <Settings size={20} />, path: '/docs/setup.md', category: 'start', description: 'Download Antigravity and start your productivity journey' },
  { id: 'antigravity-quickstart', title: 'Antigravity Quick Start', icon: <Zap size={20} />, path: '/docs/antigravity-quickstart.md', category: 'start', description: 'Easy first steps with Antigravity—create a project and start building' },
  { id: 'key-concepts', title: 'Key Concepts', icon: <BookOpen size={20} />, path: '/docs/key-concepts.md', category: 'start', description: 'Essential mental models for working with desktop agents' },
  // Core Skills — deeper topics, read as needed
  { id: 'workflow', title: 'Desktop Productivity', icon: <Zap size={20} />, path: '/docs/workflow.md', category: 'core', description: 'High-speed workflows for files, tasks, and code' },
  { id: 'permissions', title: 'Permissions & Approvals', icon: <Shield size={20} />, path: '/docs/permissions-and-approvals.md', category: 'core', description: 'How the agent asks permission and how to configure trust' },
  { id: 'planning-mode', title: 'Planning Mode', icon: <List size={20} />, path: '/docs/planning-mode.md', category: 'core', description: 'How the agent plans complex projects before executing' },
  // Reference — look up when relevant
  { id: 'mac-setup', title: 'Mac Setup Guide', icon: <Apple size={20} />, path: '/docs/mac-setup-guide.md', category: 'reference', description: 'Complete Mac-specific setup and troubleshooting' },
  { id: 'windows-setup', title: 'Windows Setup Guide', icon: <Monitor size={20} />, path: '/docs/windows-setup-guide.md', category: 'reference', description: 'Complete Windows-specific setup and troubleshooting' },
  { id: 'terminal-basics', title: 'Terminal Basics', icon: <Terminal size={20} />, path: '/docs/terminal-basics.md', category: 'reference', description: 'History, core commands, and CLI survival guide' },
  { id: 'how-websites', title: 'How Webapps Run', icon: <Code size={20} />, path: '/docs/how-websites-work.md', category: 'reference', description: 'Understand browsers, servers, and React' },
  { id: 'hosting', title: 'Webapp Hosting', icon: <Cloud size={20} />, path: '/docs/webapp-hosting.md', category: 'reference', description: 'Free hosting guidelines for your webapps' },
  { id: 'ai-features', title: 'Adding AI Features', icon: <Sparkles size={20} />, path: '/docs/adding-ai-features.md', category: 'reference', description: 'Power your apps with Google\'s AI' },
  { id: 'ai-studio', title: 'Migrating from AI Studio', icon: <Zap size={20} />, path: '/docs/from-ai-studio.md', category: 'reference', description: 'Migrate prototypes to local development' },
  { id: 'alternative-agents', title: 'Alternative AI Agents', icon: <Code size={20} />, path: '/docs/alternative-agents.md', category: 'reference', description: 'Compare Antigravity, Cursor, Claude Code, and other tools' },
  { id: 'file-formats', title: 'File Formats Guide', icon: <BookOpen size={20} />, path: '/docs/file-formats.md', category: 'reference', description: 'Master Markdown, JSON, and CSV for AI workflows' },
  { id: 'git-github', title: 'Git & GitHub', icon: <Github size={20} />, path: '/docs/git-github-basics.md', category: 'reference', description: 'Version control and backing up code' },
  { id: 'markdown', title: 'Markdown for Writers', icon: <BookOpen size={20} />, path: '/docs/markdown-for-writers.md', category: 'reference', description: 'Write text better than in Word' },
  // Other
  { id: 'about', title: 'About', icon: <User size={20} />, path: '/docs/about.md', category: 'other', description: 'How this guide was created' },
];

function CodeBlock({ children, className }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    const codeText = String(children).replace(/\n$/, '');
    try {
      await navigator.clipboard.writeText(codeText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <div className="code-block-wrapper">
      <pre className={className}>
        <code>{children}</code>
      </pre>
      <button
        className={`copy-button ${copied ? 'copied' : ''}`}
        onClick={handleCopy}
        aria-label={copied ? 'Copied!' : 'Copy code'}
        title={copied ? 'Copied!' : 'Copy code'}
      >
        {copied ? <Check size={14} /> : <Copy size={14} />}
        <span className="copy-text">{copied ? 'Copied!' : 'Copy'}</span>
      </button>
    </div>
  );
}

const startDocs = allDocs.filter(d => d.category === 'start');
const coreDocs = allDocs.filter(d => d.category === 'core');
const referenceDocs = allDocs.filter(d => d.category === 'reference');

function Layout({ children }) {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const searchInputRef = useRef(null);
  const navigate = useNavigate();

  const filteredDocs = searchQuery.trim()
    ? allDocs.filter(doc => {
        const q = searchQuery.toLowerCase();
        return doc.title.toLowerCase().includes(q) || doc.description.toLowerCase().includes(q);
      })
    : allDocs;

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === '/' && !isSearchOpen) {
        e.preventDefault();
        setIsSearchOpen(true);
      }
      if (e.key === 'Escape' && isSearchOpen) {
        setIsSearchOpen(false);
        setSearchQuery('');
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isSearchOpen]);

  useEffect(() => {
    if (isSearchOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [isSearchOpen]);

  return (
    <>
      <a href="#main-content" className="skip-link">Skip to content</a>
      <header className="header" role="banner">
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <Link to="/" className="logo" style={{ cursor: 'pointer', textDecoration: 'none' }} aria-label="Desktop Vibecoding Productivity Guide Home">
            <div className="logo-icon" aria-hidden="true">
              <Terminal size={20} />
            </div>
            <span className="logo-text">Desktop Vibecoding Guide</span>
          </Link>
        </div>
        <nav style={{ display: 'flex', alignItems: 'center', gap: '1rem' }} aria-label="Main navigation">
          <button
            className="search-trigger"
            onClick={() => setIsSearchOpen(true)}
            aria-label="Open search"
            style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)' }}
          >
            <SearchIcon size={18} />
            <span className="search-shortcut" aria-hidden="true">/</span>
          </button>
          <Link to="/docs/about" style={{ color: 'var(--text-secondary)', cursor: 'pointer', textDecoration: 'none' }}>About</Link>
          <a href="https://github.com/techczech/desktop-vibe-guide" target="_blank" style={{ color: 'var(--text-secondary)' }} aria-label="GitHub Repository">
            <Github size={24} />
          </a>
        </nav>
      </header>

      <main id="main-content">
        {children}
      </main>

      <footer className="footer" role="contentinfo">
        Built with <a href="https://antigravity.google">Antigravity</a> •
        <a href="https://github.com/techczech/desktop-vibe-guide" style={{ marginLeft: '0.5rem' }}>View Source</a>
      </footer>

      {isSearchOpen && (
        <div className="search-overlay" onClick={() => { setIsSearchOpen(false); setSearchQuery(''); }} role="dialog" aria-modal="true" aria-label="Search documentation">
          <div className="search-modal" onClick={e => e.stopPropagation()}>
            <div className="search-input-wrapper">
              <SearchIcon size={20} color="var(--text-secondary)" aria-hidden="true" />
              <input
                ref={searchInputRef}
                type="text"
                placeholder="Search documentation..."
                className="search-input"
                aria-label="Search input"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button onClick={() => { setIsSearchOpen(false); setSearchQuery(''); }} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-secondary)' }} aria-label="Close search">
                <X size={20} />
              </button>
            </div>
            <div className="search-results" role="listbox">
              {filteredDocs.length === 0 ? (
                <div style={{ padding: '1rem', color: 'var(--text-secondary)', textAlign: 'center' }}>No results found</div>
              ) : filteredDocs.map(doc => (
                <div
                  key={doc.id}
                  className="search-result-item"
                  role="option"
                  tabIndex={0}
                  onClick={() => {
                    navigate(`/docs/${doc.id}`);
                    setIsSearchOpen(false);
                    setSearchQuery('');
                  }}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      navigate(`/docs/${doc.id}`);
                      setIsSearchOpen(false);
                      setSearchQuery('');
                    }
                  }}
                >
                  <div className="search-result-icon" aria-hidden="true">{doc.icon}</div>
                  <div>
                    <div className="search-result-title">{doc.title}</div>
                    <div className="search-result-desc">{doc.description}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

function HomePage() {
  return (
    <div style={{ paddingTop: '2rem' }}>
      <section className="hero">
        <h1>Guide to Desktop Productivity with Vibecoding Tools</h1>
        <p>
          Master your machine using Antigravity. Beyond just writing and publishing code, learn to automate your desktop life, manage files, and build custom tools for your personal workflow—on both Mac and Windows.
        </p>
        <Link to="/docs/setup" className="hero-cta">
          Get Started <ArrowRight size={20} />
        </Link>
      </section>

      <section className="cards-section">
        <h2 className="section-title">Start Here</h2>
        <p className="section-subtitle">New to desktop agents? Read these in order.</p>
        <div className="cards-grid">
          {startDocs.map(doc => (
            <Link key={doc.id} to={`/docs/${doc.id}`} className="card" style={{ textDecoration: 'none', color: 'inherit' }}>
              <div className="card-icon">
                {React.cloneElement(doc.icon, { size: 24 })}
              </div>
              <h3>{doc.title}</h3>
              <p>{doc.description}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="cards-section">
        <h2 className="section-title">Core Skills</h2>
        <p className="section-subtitle">Deepen your understanding of key workflows.</p>
        <div className="cards-grid">
          {coreDocs.map(doc => (
            <Link key={doc.id} to={`/docs/${doc.id}`} className="card" style={{ textDecoration: 'none', color: 'inherit' }}>
              <div className="card-icon">
                {React.cloneElement(doc.icon, { size: 24 })}
              </div>
              <h3>{doc.title}</h3>
              <p>{doc.description}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="cards-section">
        <h2 className="section-title">Reference</h2>
        <p className="section-subtitle">Look up specific topics when you need them.</p>
        <div className="cards-grid">
          {referenceDocs.map(doc => (
            <Link key={doc.id} to={`/docs/${doc.id}`} className="card" style={{ textDecoration: 'none', color: 'inherit' }}>
              <div className="card-icon">
                {React.cloneElement(doc.icon, { size: 24 })}
              </div>
              <h3>{doc.title}</h3>
              <p>{doc.description}</p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}

function DocView() {
  const { docId } = useParams();
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [tocOpen, setTocOpen] = useState(false);
  const [headings, setHeadings] = useState([]);

  const activeDoc = allDocs.find(d => d.id === docId);
  const currentIndex = allDocs.findIndex(d => d.id === docId);
  const nextDoc = currentIndex < allDocs.length - 1 ? allDocs[currentIndex + 1] : null;
  const prevDoc = currentIndex > 0 ? allDocs[currentIndex - 1] : null;

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    if (activeDoc) {
      const fetchDoc = async () => {
        setLoading(true);
        try {
          const response = await fetch(activeDoc.path);
          const text = await response.text();
          setContent(text);

          const extractedHeadings = [];
          const lines = text.split('\n');
          let inCodeBlock = false;

          lines.forEach(line => {
            // Check if we're entering or exiting a code block
            if (line.trim().startsWith('```')) {
              inCodeBlock = !inCodeBlock;
              return;
            }

            // Only extract headings if we're not in a code block
            if (!inCodeBlock) {
              const match = line.trim().match(/^(#{1,3})\s+(.*)$/);
              if (match) {
                extractedHeadings.push({
                  level: match[1].length,
                  text: match[2],
                  id: match[2].toLowerCase().replace(/[^\w]+/g, '-')
                });
              }
            }
          });
          setHeadings(extractedHeadings);
        } catch (err) {
          setContent('# Error loading documentation');
        }
        setLoading(false);
      };
      fetchDoc();
      setSidebarOpen(false);
      setTocOpen(false);
    }
  }, [activeDoc]);

  if (!activeDoc) return <div style={{ padding: '4rem', textAlign: 'center' }}>Document not found</div>;

  return (
    <>
      <div className="doc-layout">
        <button className="menu-toggle" onClick={() => setSidebarOpen(!sidebarOpen)} style={{ position: 'fixed', top: '1rem', right: '4rem', zIndex: 101 }} aria-label="Toggle Navigation">
          {sidebarOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <aside className={`doc-sidebar ${sidebarOpen ? 'open' : ''}`}>
          <div className="sidebar-section">
            <div className="sidebar-heading">Start Here</div>
            {startDocs.map(doc => (
              <Link
                key={doc.id}
                to={`/docs/${doc.id}`}
                className={`sidebar-item ${activeDoc.id === doc.id ? 'active' : ''}`}
                onClick={() => setSidebarOpen(false)}
                style={{ textDecoration: 'none' }}
              >
                {doc.icon}
                {doc.title}
              </Link>
            ))}
          </div>
          <div className="sidebar-section">
            <div className="sidebar-heading">Core Skills</div>
            {coreDocs.map(doc => (
              <Link
                key={doc.id}
                to={`/docs/${doc.id}`}
                className={`sidebar-item ${activeDoc.id === doc.id ? 'active' : ''}`}
                onClick={() => setSidebarOpen(false)}
                style={{ textDecoration: 'none' }}
              >
                {doc.icon}
                {doc.title}
              </Link>
            ))}
          </div>
          <div className="sidebar-section">
            <div className="sidebar-heading">Reference</div>
            {referenceDocs.map(doc => (
              <Link
                key={doc.id}
                to={`/docs/${doc.id}`}
                className={`sidebar-item ${activeDoc.id === doc.id ? 'active' : ''}`}
                onClick={() => setSidebarOpen(false)}
                style={{ textDecoration: 'none' }}
              >
                {doc.icon}
                {doc.title}
              </Link>
            ))}
          </div>
        </aside>

        <div className="doc-view">
          <Link to="/" className="back-button" style={{ textDecoration: 'none' }}>
            <ArrowLeft size={18} />
            Back to Home
          </Link>

          <div className="mobile-toc-toggle" onClick={() => setTocOpen(!tocOpen)} aria-label="Toggle Table of Contents" role="button" tabIndex={0} onKeyDown={(e) => { if (e.key === 'Enter') setTocOpen(!tocOpen) }}>
            <List size={16} />
            <span>On this page</span>
            {tocOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
          </div>

          {tocOpen && (
            <div className="mobile-toc">
              {headings.map((heading, index) => (
                <a
                  key={index}
                  href={`#${heading.id}`}
                  className={`toc-link level-${heading.level}`}
                  onClick={(e) => {
                    e.preventDefault();
                    setTocOpen(false);
                    document.getElementById(heading.id)?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  {heading.text}
                </a>
              ))}
            </div>
          )}

          <div className="markdown-container">
            {loading ? (
              <div style={{ opacity: 0.5 }}>Loading...</div>
            ) : (
              <ReactMarkdown
                components={{
                  code: ({ node, inline, className, children, ...props }) => {
                    if (inline) {
                      return <code className="inline-code" {...props}>{children}</code>;
                    }
                    return <CodeBlock className={className}>{children}</CodeBlock>;
                  },
                  pre: ({ children }) => <>{children}</>,
                  h1: ({ children }) => {
                    const id = String(children).toLowerCase().replace(/[^\w]+/g, '-');
                    return <h1 id={id}>{children}</h1>;
                  },
                  h2: ({ children }) => {
                    const id = String(children).toLowerCase().replace(/[^\w]+/g, '-');
                    return <h2 id={id}>{children}</h2>;
                  },
                  h3: ({ children }) => {
                    const id = String(children).toLowerCase().replace(/[^\w]+/g, '-');
                    return <h3 id={id}>{children}</h3>;
                  }
                }}
              >
                {content}
              </ReactMarkdown>
            )}
          </div>

          <div className="doc-navigation">
            {prevDoc ? (
              <Link to={`/docs/${prevDoc.id}`} className="nav-button prev" style={{ textDecoration: 'none' }}>
                <ArrowLeft size={18} />
                <div>
                  <span className="nav-label">Previous</span>
                  <span className="nav-title">{prevDoc.title}</span>
                </div>
              </Link>
            ) : <div />}

            {nextDoc && (
              <Link to={`/docs/${nextDoc.id}`} className="nav-button next" style={{ textDecoration: 'none' }}>
                <div>
                  <span className="nav-label">Next</span>
                  <span className="nav-title">{nextDoc.title}</span>
                </div>
                <ArrowRight size={18} />
              </Link>
            )}
          </div>
        </div>

        <aside className="doc-toc-sidebar">
          <div className="toc-heading">On this page</div>
          <div className="toc-list">
            {headings.map((heading, index) => (
              <a
                key={index}
                href={`#${heading.id}`}
                className={`toc-link level-${heading.level}`}
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById(heading.id)?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                {heading.text}
              </a>
            ))}
          </div>
        </aside>
      </div>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/docs/:docId" element={<DocView />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
