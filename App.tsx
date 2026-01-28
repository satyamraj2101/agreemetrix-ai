import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, 
  Menu, 
  X, 
  Activity, 
  ShieldCheck, 
  Zap, 
  Search,
  CheckCircle2,
  GitPullRequest,
  Database,
  Send,
  Loader2,
  Share2,
  TrendingUp,
  MessageSquare,
  Linkedin,
  Rocket,
  Lock,
  Globe,
  Layers,
  Users
} from './components/Icons';
import { DashboardVisual, WorkflowVisual, IntegrationsVisual, RoadmapVisual, RepositoryVisual, HeroInterfaceVisual } from './components/Visuals';

// --- LOGO COMPONENT ---
const AgreemetrixLogo = () => (
  <div className="w-10 h-10 rounded-xl bg-[#0B1121] border border-[#00D4C8]/30 flex items-center justify-center shadow-[0_0_20px_rgba(0,212,200,0.2)] group-hover:shadow-[0_0_30px_rgba(0,212,200,0.4)] transition-all overflow-hidden relative">
      <div className="absolute inset-0 bg-[#00D4C8]/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
      <svg viewBox="0 0 100 100" className="w-full h-full p-2">
        {/* Triangle */}
        <path 
          d="M50 20 L80 80 H20 Z" 
          fill="none" 
          stroke="#00D4C8" 
          strokeWidth="8" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        />
        {/* Circle */}
        <circle cx="50" cy="42" r="7" fill="white" />
        {/* Vertical Line */}
        <path d="M50 62 V80" stroke="#00D4C8" strokeWidth="8" strokeLinecap="round" />
      </svg>
  </div>
);

// --- FORM COMPONENT ---
const ContactForm = ({ placeholder, btnText, type = "waitlist" }: { placeholder: string, btnText: string, type?: string }) => {
    const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('loading');
        // Simulate API call
        setTimeout(() => {
            setStatus('success');
            console.log(`Sending ${type} request to Info@agreemetrix.com`);
        }, 1500);
    };

    if (status === 'success') {
        return (
            <div className="bg-green-500/10 border border-green-500/20 text-green-400 px-4 py-3 rounded-xl flex items-center gap-2 text-sm animate-in fade-in zoom-in duration-300">
                <CheckCircle2 size={16} /> 
                <span>Request Sent! We'll contact you shortly.</span>
            </div>
        )
    }

    return (
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2 w-full max-w-md">
            <input 
                type="email" 
                required
                placeholder={placeholder} 
                className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-slate-500 focus:outline-none focus:border-brand-accent/50 transition-colors w-full"
            />
            <button 
                disabled={status === 'loading'}
                className="bg-brand-accent hover:bg-cyan-400 text-brand-dark px-6 py-3 rounded-xl font-bold transition-all shadow-[0_0_20px_rgba(0,212,200,0.2)] hover:shadow-[0_0_30px_rgba(0,212,200,0.4)] disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2 whitespace-nowrap w-full sm:w-auto"
            >
                {status === 'loading' ? <Loader2 className="animate-spin w-4 h-4"/> : btnText}
                {status !== 'loading' && <ArrowRight className="w-4 h-4" />}
            </button>
        </form>
    );
}

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
        // Calculate offset to account for fixed header (approx 100px)
        const headerOffset = 100;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
        });
    }
    setMobileMenuOpen(false);
  };

  const scrollToWaitlist = () => {
    const el = document.getElementById('waitlist-form');
    if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="mesh-bg min-h-screen text-slate-300 font-sans selection:bg-brand-accent selection:text-brand-dark overflow-x-hidden">
      
      {/* --- NAVIGATION --- */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-brand-dark/90 backdrop-blur-xl border-b border-white/5 py-4 shadow-lg' : 'bg-transparent py-4 md:py-6'}`}>
        {isScrolled && <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-brand-accent/50 to-transparent animate-pulse"></div>}
        
        <div className="container mx-auto px-6 flex justify-between items-center relative z-10">
          <div className="flex items-center gap-3 group cursor-pointer" onClick={scrollToTop}>
            <AgreemetrixLogo />
            <span className="text-white font-bold text-lg md:text-xl tracking-tight">Agree<span className="text-brand-accent">metrix</span> <span className="text-[10px] bg-white/10 px-1 py-0.5 rounded text-brand-accent border border-brand-accent/20 hidden sm:inline-block">ALPHA</span></span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" onClick={(e) => scrollToSection(e, 'features')} className="text-sm font-medium hover:text-white transition-colors cursor-pointer">Platform</a>
            <a href="#intelligence" onClick={(e) => scrollToSection(e, 'intelligence')} className="text-sm font-medium hover:text-white transition-colors cursor-pointer">Intelligence</a>
            <a href="#integrations" onClick={(e) => scrollToSection(e, 'integrations')} className="text-sm font-medium hover:text-white transition-colors cursor-pointer">Integration</a>
            <a href="#investors" onClick={(e) => scrollToSection(e, 'investors')} className="text-sm font-medium hover:text-white transition-colors text-brand-accent cursor-pointer">Investors</a>
          </div>

          <div className="hidden md:flex items-center gap-4">
             <div className="flex items-center gap-2 text-[10px] font-mono text-brand-success bg-brand-success/10 px-2 py-1 rounded border border-brand-success/20">
                 <div className="w-1.5 h-1.5 rounded-full bg-brand-success animate-pulse"></div>
                 ONLINE
             </div>
             <a href="mailto:Info@agreemetrix.com" className="text-sm font-medium hover:text-white transition-colors ml-2">Contact Us</a>
             <button onClick={scrollToWaitlist} className="bg-brand-accent hover:bg-cyan-400 text-brand-dark px-5 py-2.5 rounded-lg font-bold text-sm transition-all shadow-[0_0_20px_rgba(0,212,200,0.2)] hover:shadow-[0_0_30px_rgba(0,212,200,0.4)] flex items-center gap-2">
                Join Waitlist <ArrowRight className="w-4 h-4" />
             </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden text-white p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
             <div className="md:hidden absolute top-full left-0 w-full bg-brand-dark border-b border-white/10 p-6 flex flex-col gap-4 animate-in slide-in-from-top-5 shadow-2xl">
                <a href="#features" onClick={(e) => scrollToSection(e, 'features')} className="text-lg font-medium text-white cursor-pointer py-2">Platform</a>
                <a href="#intelligence" onClick={(e) => scrollToSection(e, 'intelligence')} className="text-lg font-medium text-white cursor-pointer py-2">Intelligence</a>
                <a href="#integrations" onClick={(e) => scrollToSection(e, 'integrations')} className="text-lg font-medium text-white cursor-pointer py-2">Integration</a>
                <a href="#investors" onClick={(e) => scrollToSection(e, 'investors')} className="text-lg font-medium text-white cursor-pointer py-2">Investors</a>
                <div className="h-px bg-white/10 my-2"></div>
                <button onClick={() => { scrollToWaitlist(); setMobileMenuOpen(false); }} className="bg-brand-accent text-brand-dark px-5 py-3 rounded-lg font-bold w-full">Join Waitlist</button>
             </div>
        )}
      </nav>

      {/* --- HERO SECTION --- */}
      <section className="relative pt-24 pb-12 md:pt-48 md:pb-32 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-brand-accent/20 rounded-full blur-[120px] -z-10 opacity-30"></div>

        <div className="container mx-auto px-6 z-10 relative">
          
          <div className="text-center max-w-4xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-brand-accent mb-8 animate-fade-in-up">
                <span className="w-2 h-2 rounded-full bg-brand-accent animate-pulse"></span>
                Internal Development Phase • 2026
            </div>

            <h1 className="text-4xl md:text-7xl font-bold text-white tracking-tight mb-8 leading-tight">
                The Neural Network <br/>
                <span className="gradient-text">for Your Contracts</span>
            </h1>

            <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed px-4">
                We are building the operating system for the future of legal work. 
                Currently in private testing with select partners. Launch date TBD.
            </p>

            <div id="waitlist-form" className="flex justify-center mb-12 scroll-mt-32 w-full px-4 md:px-0">
                <ContactForm placeholder="Enter your work email" btnText="Join Private Waitlist" type="waitlist" />
            </div>
          </div>

          {/* New Tech Visual - Command Center */}
          <div className="animate-float px-2 md:px-0">
             <HeroInterfaceVisual />
          </div>
        </div>
      </section>

      {/* --- FEATURE: CONTRACT MANAGEMENT CORE --- */}
      <section id="features" className="py-16 md:py-24 relative border-t border-white/5 scroll-mt-28">
        <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
                <div className="order-2 md:order-1 relative">
                    <RepositoryVisual />
                </div>
                
                <div className="order-1 md:order-2">
                    <div className="w-12 h-12 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center mb-6">
                        <Database size={24} />
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Centralized Contract<br/>Intelligence</h2>
                    <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                        Move beyond static folders. Our dynamic repository automatically indexes, tags, and organizes your legacy and new agreements, creating a searchable single source of truth.
                    </p>
                    <ul className="space-y-4">
                        {[
                            'AI-driven metadata extraction',
                            'Smart search across all legal docs',
                            'Automated renewal tracking',
                            'Legacy contract migration'
                        ].map((item, i) => (
                            <li key={i} className="flex items-center gap-3 text-slate-300">
                                <div className="w-5 h-5 rounded-full bg-brand-accent/20 flex items-center justify-center">
                                    <CheckCircle2 size={12} className="text-brand-accent"/>
                                </div>
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
      </section>

      {/* --- FEATURE: WORKFLOW ENGINE --- */}
      <section className="py-16 md:py-24 relative bg-black/20">
        <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
                <div>
                     <div className="w-12 h-12 rounded-xl bg-purple-500/20 text-purple-400 flex items-center justify-center mb-6">
                        <GitPullRequest size={24} />
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Automated Workflow Engine</h2>
                    <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                        Design complex approval chains with a drag-and-drop visualizer. Set role-based routing, SLA triggers, and conditional logic that adapts to the contract value and risk profile.
                    </p>
                    <button className="text-brand-accent font-bold flex items-center gap-2 hover:gap-4 transition-all">
                        Explore Automation <ArrowRight size={16} />
                    </button>
                </div>
                <div className="relative">
                     <WorkflowVisual />
                </div>
            </div>
        </div>
      </section>

      {/* --- FEATURE: INTELLIGENCE & BI --- */}
      <section id="intelligence" className="py-16 md:py-24 relative border-t border-white/5 scroll-mt-28">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-brand-panel/30 to-transparent -z-10"></div>
        <div className="container mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
                 <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-accent/10 text-xs font-medium text-brand-accent mb-4">
                    <Activity size={12} /> Internal Preview
                  </div>
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Turn Documents into <span className="gradient-text">Data</span></h2>
                <p className="text-slate-400 text-lg">
                    Contracts aren't just files—they are business data. Agreemetrix extracts metadata, obligations, and revenue opportunities automatically.
                </p>
            </div>

            <div className="grid md:grid-cols-12 gap-8">
                <div className="md:col-span-8">
                    <DashboardVisual />
                </div>
                <div className="md:col-span-4 flex flex-col gap-4">
                    <div className="glass-panel p-6 rounded-xl flex-1 border border-white/10 hover:border-brand-accent/50 transition-colors cursor-default group">
                        <div className="w-10 h-10 rounded-lg bg-orange-500/20 flex items-center justify-center text-orange-400 mb-4 group-hover:scale-110 transition-transform">
                            <Search size={20}/>
                        </div>
                        <h4 className="text-white font-bold text-lg mb-2">Revenue Leakage</h4>
                        <p className="text-sm text-slate-400">Identify unbilled obligations and missed renewal uplifts automatically.</p>
                    </div>
                     <div className="glass-panel p-6 rounded-xl flex-1 border border-white/10 hover:border-brand-accent/50 transition-colors cursor-default group">
                        <div className="w-10 h-10 rounded-lg bg-red-500/20 flex items-center justify-center text-red-400 mb-4 group-hover:scale-110 transition-transform">
                            <ShieldCheck size={20}/>
                        </div>
                        <h4 className="text-white font-bold text-lg mb-2">Compliance Audit</h4>
                        <p className="text-sm text-slate-400">Real-time scoring of every contract against new regulatory frameworks.</p>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* --- INTEGRATIONS --- */}
      <section id="integrations" className="py-16 md:py-24 bg-[#0B1121] scroll-mt-28">
        <div className="container mx-auto px-6">
             <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
                <div className="order-2 md:order-1 overflow-visible">
                    <IntegrationsVisual />
                </div>
                <div className="order-1 md:order-2">
                     <div className="w-12 h-12 rounded-xl bg-brand-accent/10 text-brand-accent flex items-center justify-center mb-6">
                        <Share2 size={24} />
                    </div>
                     <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Universal Connector<br/>Fabric</h2>
                    <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                        Never say no to any integration. Our agnostic API Adapter unifies your entire enterprise stack—bridging the gap between legacy on-premise ERPs and modern cloud ecosystems. If it has data, we connect to it.
                    </p>
                    <div className="flex flex-wrap gap-2">
                        {['Salesforce', 'SAP', 'Workday', 'NetSuite', 'Oracle', 'DocuSign', 'Slack', 'SharePoint', 'Google Workspace', 'HubSpot', 'Microsoft 365', 'QuickBooks'].map(tag => (
                            <span key={tag} className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-slate-400 font-mono hover:bg-white/10 hover:border-white/20 transition-all cursor-default hover:text-white">
                                {tag}
                            </span>
                        ))}
                        <span className="px-3 py-1.5 rounded-full bg-brand-accent/10 border border-brand-accent/20 text-xs text-brand-accent font-mono hover:bg-brand-accent/20 transition-all cursor-pointer">
                                + Any Custom API
                        </span>
                    </div>
                </div>
             </div>
        </div>
      </section>

      {/* --- INVESTOR / VISION SECTION --- */}
      <section id="investors" className="py-16 md:py-24 relative overflow-hidden bg-brand-dark scroll-mt-28">
        {/* Abstract Background */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-tr from-brand-accent/5 to-purple-500/5 rounded-full blur-[120px] -z-10"></div>
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay"></div>
        
        <div className="container mx-auto px-6 relative z-10">
            {/* Header with High-Contrast Overlay */}
            <div className="text-center mb-20 relative">
                {/* Backdrop Filter for Readability */}
                <div className="absolute inset-0 bg-brand-dark/60 blur-3xl -z-10 rounded-full scale-150"></div>
                
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-accent/10 text-xs font-bold text-brand-accent mb-6 border border-brand-accent/20 shadow-[0_0_20px_rgba(0,212,200,0.15)] animate-fade-in-up backdrop-blur-sm">
                    <TrendingUp size={14} /> INVESTMENT OPPORTUNITY
                </div>
                <h2 className="text-4xl md:text-7xl font-bold text-white mb-8 tracking-tight drop-shadow-lg">
                    Back the World's Most <br/><span className="gradient-text">Advanced CLM</span>
                </h2>
                <p className="text-lg md:text-xl text-slate-200 max-w-3xl mx-auto leading-relaxed font-light drop-shadow-md px-2">
                    We aren't just building software; we are architecting the neural network of modern business. 
                    <strong className="text-white block mt-4 text-xl md:text-2xl font-normal">We’ve been stealthily engineering the future since 2025.</strong>
                    Now, we invite visionary partners to join us in defining the next era of Global LegalTech.
                </p>
            </div>

            {/* Investment Thesis Grid */}
            <div className="grid md:grid-cols-3 gap-8 mb-24">
                <div className="glass-panel p-8 rounded-3xl border border-white/10 hover:border-brand-accent/40 transition-all duration-300 hover:-translate-y-2 group relative overflow-hidden backdrop-blur-md bg-brand-dark/40">
                    <div className="absolute top-0 right-0 p-3 opacity-10 group-hover:opacity-20 transition-opacity">
                         <Lock size={100} />
                    </div>
                    <div className="w-12 h-12 rounded-2xl bg-brand-accent/10 flex items-center justify-center text-brand-accent mb-6 group-hover:scale-110 transition-transform">
                        <Layers size={24} />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">Deep Tech Moat</h3>
                    <p className="text-slate-300 leading-relaxed">Proprietary entity extraction engine built on custom LLMs, not just API wrappers. We own the intelligence layer.</p>
                </div>

                <div className="glass-panel p-8 rounded-3xl border border-white/10 hover:border-brand-accent/40 transition-all duration-300 hover:-translate-y-2 group relative overflow-hidden backdrop-blur-md bg-brand-dark/40">
                     <div className="absolute top-0 right-0 p-3 opacity-10 group-hover:opacity-20 transition-opacity">
                         <Globe size={100} />
                    </div>
                    <div className="w-12 h-12 rounded-2xl bg-purple-500/10 flex items-center justify-center text-purple-400 mb-6 group-hover:scale-110 transition-transform">
                        <TrendingUp size={24} />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">$20B+ Market</h3>
                    <p className="text-slate-300 leading-relaxed">Targeting the massive, underserved enterprise CLM market. The shift from "storage" to "intelligence" is just beginning.</p>
                </div>

                <div className="glass-panel p-8 rounded-3xl border border-white/10 hover:border-brand-accent/40 transition-all duration-300 hover:-translate-y-2 group relative overflow-hidden backdrop-blur-md bg-brand-dark/40">
                     <div className="absolute top-0 right-0 p-3 opacity-10 group-hover:opacity-20 transition-opacity">
                         <Zap size={100} />
                    </div>
                    <div className="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-400 mb-6 group-hover:scale-110 transition-transform">
                        <Users size={24} />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">Network Effect</h3>
                    <p className="text-slate-300 leading-relaxed">Our Universal API Adapter creates sticky, compounded value as customers connect more systems. High switching costs.</p>
                </div>
            </div>

            {/* Metrics & Roadmap Combo */}
            <div className="grid md:grid-cols-12 gap-12 items-center mb-24">
                <div className="md:col-span-4 space-y-6">
                    <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                        <div className="text-sm text-slate-400 mb-1">Target Addressable Market</div>
                        <div className="text-4xl font-bold text-white">$20 Billion+</div>
                        <div className="text-xs text-brand-accent mt-2 flex items-center gap-1"><TrendingUp size={12}/> Growing 18% YoY</div>
                    </div>
                    <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                        <div className="text-sm text-slate-400 mb-1">Development Stage</div>
                        <div className="text-4xl font-bold text-white">Alpha</div>
                        <div className="text-xs text-purple-400 mt-2">Rigorous Validation</div>
                    </div>
                    <div className="p-6 rounded-2xl bg-gradient-to-r from-brand-accent/20 to-transparent border border-brand-accent/30 backdrop-blur-sm">
                        <div className="text-sm text-brand-accent mb-1 font-bold">Funding Round</div>
                        <div className="text-4xl font-bold text-white">OPEN</div>
                        <div className="text-xs text-slate-300 mt-2">Seed / Series A</div>
                    </div>
                </div>
                <div className="md:col-span-8">
                     <RoadmapVisual />
                </div>
            </div>

            {/* CTA */}
            <div className="bg-brand-panel/80 border border-white/10 rounded-3xl p-8 md:p-16 max-w-4xl mx-auto text-center relative overflow-hidden backdrop-blur-lg">
                 <div className="absolute top-0 right-0 w-64 h-64 bg-brand-accent/10 rounded-full blur-[80px] -z-10"></div>
                 
                 <h3 className="text-2xl md:text-4xl font-bold text-white mb-6">Partner for Profitability</h3>
                 <p className="text-base md:text-lg text-slate-300 mb-10 max-w-2xl mx-auto">
                    We are selecting strategic partners who bring more than just capital. If you want to shape the future of legal intelligence, let's talk.
                 </p>
                 <div className="flex flex-col items-center gap-4 w-full">
                    <ContactForm placeholder="Enter institutional email" btnText="Request Investor Deck" type="investor" />
                    <p className="text-xs text-slate-500 mt-2">Strictly confidential. Accredited investors only.</p>
                 </div>
            </div>

        </div>
      </section>

      {/* --- COMMUNITY & SUPPORT SECTION --- */}
      <section className="py-20 border-t border-white/5 bg-[#0B1121]">
        <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12 text-center md:text-left">
                <div>
                    <h2 className="text-3xl font-bold text-white mb-2">Join the Movement</h2>
                    <p className="text-slate-400">Support us on our journey to redefine LegalTech.</p>
                </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
                <a href="https://www.producthunt.com/products/agreemetrix?utm_source=linkedin&utm_medium=social" target="_blank" rel="noopener noreferrer" className="group relative p-8 rounded-2xl bg-[#FF6154]/10 border border-[#FF6154]/20 hover:border-[#FF6154] hover:bg-[#FF6154]/20 transition-all duration-300 flex items-center justify-between overflow-hidden">
                    <div className="relative z-10">
                        <div className="flex items-center gap-3 mb-2 text-[#FF6154]">
                            <Rocket size={24} />
                            <span className="font-bold tracking-wide text-sm uppercase">Product Hunt</span>
                        </div>
                        <h3 className="text-xl md:text-2xl font-bold text-white mb-2 group-hover:translate-x-1 transition-transform">Support Our Launch</h3>
                        <p className="text-slate-400 text-sm group-hover:text-white/80">Vote for us and leave a review.</p>
                    </div>
                    <div className="w-12 h-12 rounded-full bg-[#FF6154] flex items-center justify-center text-white group-hover:scale-110 transition-transform shadow-[0_0_20px_rgba(255,97,84,0.4)]">
                        <ArrowRight size={20} />
                    </div>
                </a>

                <a href="https://www.linkedin.com/company/agreemetrix/" target="_blank" rel="noopener noreferrer" className="group relative p-8 rounded-2xl bg-[#0077B5]/10 border border-[#0077B5]/20 hover:border-[#0077B5] hover:bg-[#0077B5]/20 transition-all duration-300 flex items-center justify-between overflow-hidden">
                    <div className="relative z-10">
                        <div className="flex items-center gap-3 mb-2 text-[#0077B5]">
                            <Linkedin size={24} />
                            <span className="font-bold tracking-wide text-sm uppercase">LinkedIn</span>
                        </div>
                        <h3 className="text-xl md:text-2xl font-bold text-white mb-2 group-hover:translate-x-1 transition-transform">Follow Our Journey</h3>
                        <p className="text-slate-400 text-sm group-hover:text-white/80">Get the latest updates and behind-the-scenes.</p>
                    </div>
                    <div className="w-12 h-12 rounded-full bg-[#0077B5] flex items-center justify-center text-white group-hover:scale-110 transition-transform shadow-[0_0_20px_rgba(0,119,181,0.4)]">
                        <ArrowRight size={20} />
                    </div>
                </a>
            </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="bg-brand-dark border-t border-white/10 pt-16 pb-8">
        <div className="container mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mb-12 justify-center text-center md:text-left">
                <div>
                    <h4 className="text-white font-bold mb-4">Company</h4>
                     <ul className="space-y-2 text-sm text-slate-400">
                        <li><a href="https://www.linkedin.com/company/agreemetrix/" target="_blank" rel="noopener noreferrer" className="hover:text-brand-accent">About Agreemetrix</a></li>
                        <li><a href="#investors" className="hover:text-brand-accent">Investor Relations</a></li>
                        <li><a href="mailto:Info@agreemetrix.com" className="hover:text-brand-accent">Contact Team</a></li>
                    </ul>
                </div>
                 <div>
                    <h4 className="text-white font-bold mb-4">Connect</h4>
                     <ul className="space-y-2 text-sm text-slate-400">
                        <li><a href="https://www.linkedin.com/company/agreemetrix/" target="_blank" rel="noopener noreferrer" className="hover:text-brand-accent">LinkedIn (Company)</a></li>
                        <li><a href="https://www.linkedin.com/in/satyamraj2101/" target="_blank" rel="noopener noreferrer" className="hover:text-brand-accent">Meet the Founder</a></li>
                        <li><a href="mailto:Info@agreemetrix.com" className="hover:text-brand-accent">Email Us</a></li>
                    </ul>
                </div>
                <div>
                    <h4 className="text-white font-bold mb-4">Community</h4>
                     <ul className="space-y-2 text-sm text-slate-400">
                        <li><a href="https://www.producthunt.com/products/agreemetrix?utm_source=linkedin&utm_medium=social" target="_blank" rel="noopener noreferrer" className="text-brand-accent hover:text-white flex items-center gap-2 justify-center md:justify-start"><Rocket size={14}/> Support on Product Hunt</a></li>
                         <li><a href="https://www.linkedin.com/company/agreemetrix/" target="_blank" rel="noopener noreferrer" className="hover:text-brand-accent flex items-center gap-2 justify-center md:justify-start"><Linkedin size={14}/> Follow on LinkedIn</a></li>
                    </ul>
                </div>
            </div>
            
            <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5">
                <div className="flex items-center gap-2 mb-4 md:mb-0">
                    <AgreemetrixLogo />
                    <span className="text-slate-400 text-sm">© 2026 Agreemetrix Inc. All rights reserved.</span>
                </div>
                <div className="flex gap-4">
                     <a href="https://www.linkedin.com/company/agreemetrix/" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 cursor-pointer flex items-center justify-center text-slate-400 hover:text-white transition-colors">
                        <Share2 size={14}/>
                     </a>
                     <a href="mailto:Info@agreemetrix.com" className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 cursor-pointer flex items-center justify-center text-slate-400 hover:text-white transition-colors">
                        <Send size={14} />
                     </a>
                </div>
            </div>
        </div>
      </footer>
    </div>
  );
}

export default App;