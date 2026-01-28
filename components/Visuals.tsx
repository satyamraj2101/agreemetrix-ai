import React, { useEffect, useState } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { 
  FileText, 
  CheckCircle2, 
  GitPullRequest, 
  Activity, 
  ShieldCheck, 
  Zap, 
  Globe, 
  Layers, 
  Users, 
  Search, 
  Database, 
  Calendar, 
  Code2, 
  Terminal, 
  Server, 
  Cloud, 
  LinkIcon, 
  MessageSquare, 
  Settings,
  Lock,
  Cpu,
  Layout
} from './Icons';

// Helper for 3D styles
const preserve3d = { transformStyle: 'preserve-3d' } as React.CSSProperties;

// --- BI DASHBOARD COMPONENT ---
const data = [
  { name: 'Mon', value: 4000, risk: 2400 },
  { name: 'Tue', value: 3000, risk: 1398 },
  { name: 'Wed', value: 5000, risk: 9800 },
  { name: 'Thu', value: 2780, risk: 3908 },
  { name: 'Fri', value: 1890, risk: 4800 },
  { name: 'Sat', value: 2390, risk: 3800 },
  { name: 'Sun', value: 3490, risk: 4300 },
];

const pieData = [
  { name: 'Compliant', value: 85 },
  { name: 'Flagged', value: 10 },
  { name: 'Critical', value: 5 },
];
const COLORS = ['#10B981', '#F59E0B', '#EF4444'];

export const DashboardVisual: React.FC = () => {
  return (
    <div className="relative w-full h-[300px] md:h-[400px] perspective-[1000px] group">
      <div 
        className="relative w-full h-full glass-panel rounded-xl p-4 overflow-hidden shadow-2xl border-t border-brand-accent/20 transition-transform duration-700 ease-out group-hover:rotate-x-2"
        style={preserve3d}
      >
        {/* Background Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:20px_20px] -z-10"></div>

        {/* Header - Floating */}
        <div className="flex justify-between items-center mb-6" style={{ transform: 'translateZ(20px)' }}>
          <div>
            <h3 className="text-white font-semibold text-lg flex items-center gap-2">
              <Activity className="w-4 h-4 text-brand-accent" /> Live Intelligence
            </h3>
            <p className="text-xs text-slate-400">Internal Test Environment (v0.9.4)</p>
          </div>
          <div className="flex gap-2">
              <span className="px-2 py-1 rounded bg-brand-accent/10 text-brand-accent text-xs font-mono border border-brand-accent/20 animate-pulse">SYSTEM ACTIVE</span>
          </div>
        </div>

        {/* Chart - Base Layer */}
        <div className="h-[150px] md:h-[200px] w-full relative">
           {/* Floating highlight over chart */}
           <div className="absolute top-10 left-1/2 w-32 h-32 bg-brand-accent/5 rounded-full blur-2xl animate-pulse -z-10"></div>
           
           <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data}>
              <defs>
                <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#00D4C8" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="#00D4C8" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#ffffff10" vertical={false} />
              <XAxis dataKey="name" stroke="#64748b" fontSize={10} tickLine={false} axisLine={false} />
              <YAxis stroke="#64748b" fontSize={10} tickLine={false} axisLine={false} />
              <Tooltip 
                contentStyle={{ backgroundColor: '#0B1121', borderColor: '#ffffff20', color: '#fff' }}
                itemStyle={{ color: '#00D4C8' }}
              />
              <Area type="monotone" dataKey="value" stroke="#00D4C8" strokeWidth={2} fillOpacity={1} fill="url(#colorValue)" />
            </AreaChart>
          </ResponsiveContainer>

          {/* Floating Data Tag */}
          <div className="absolute top-[30%] left-[40%] bg-brand-dark/90 border border-brand-accent/50 px-3 py-1 rounded shadow-xl text-xs text-brand-accent animate-bounce" style={{ transform: 'translateZ(40px)' }}>
            Peak Volume
          </div>
        </div>

        {/* Stats - Floating Cards */}
        <div className="grid grid-cols-3 gap-2 md:gap-4 mt-4" style={{ transform: 'translateZ(30px)' }}>
          <div className="bg-brand-dark/80 backdrop-blur-sm p-2 md:p-3 rounded-lg border border-white/5 hover:border-brand-accent/30 transition-colors shadow-lg">
              <div className="text-[10px] md:text-xs text-slate-400">Data Points</div>
              <div className="text-sm md:text-xl font-bold text-white mt-1">2.4M</div>
              <div className="text-[8px] md:text-[10px] text-brand-success flex items-center gap-1"><Zap className="w-3 h-3"/> Processed</div>
          </div>
          <div className="bg-brand-dark/80 backdrop-blur-sm p-2 md:p-3 rounded-lg border border-white/5 hover:border-brand-accent/30 transition-colors shadow-lg">
              <div className="text-[10px] md:text-xs text-slate-400">Neural Accuracy</div>
              <div className="text-sm md:text-xl font-bold text-white mt-1">99.9%</div>
              <div className="text-[8px] md:text-[10px] text-brand-success">Optimized</div>
          </div>
          <div className="bg-brand-dark/80 backdrop-blur-sm p-2 md:p-3 rounded-lg border border-white/5 flex items-center justify-between shadow-lg">
              <div>
                  <div className="text-[10px] md:text-xs text-slate-400">Security</div>
                  <div className="text-sm md:text-xl font-bold text-white mt-1">SOC2</div>
              </div>
              <div className="w-8 h-8 md:w-10 md:h-10">
                  <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                          <Pie data={pieData} innerRadius={10} outerRadius={18} paddingAngle={5} dataKey="value">
                              {pieData.map((entry, index) => (
                                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                              ))}
                          </Pie>
                      </PieChart>
                  </ResponsiveContainer>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const WorkflowVisual: React.FC = () => {
    return (
        <div className="relative w-full h-[350px] md:h-[400px] perspective-[1000px] group">
            {/* Styles for robust CSS animation - Replaces SMIL */}
            <style>
            {`
              @keyframes dash-flow-slow {
                from { stroke-dashoffset: 20; }
                to { stroke-dashoffset: 0; }
              }
            `}
            </style>
            <div 
                className="w-full h-full bg-[#0F172A] rounded-xl border border-white/10 flex overflow-hidden transition-transform duration-700 ease-out group-hover:rotate-y-1 group-hover:rotate-x-1 shadow-2xl scale-[0.85] md:scale-100 origin-center md:origin-top"
                style={preserve3d}
            >
                {/* 3D Grid Floor */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:20px_20px]"></div>

                {/* Left Toolbar (Configurability) */}
                <div className="w-16 h-full border-r border-white/5 bg-[#0B1121] flex flex-col items-center py-6 gap-4 z-10" style={{ transform: 'translateZ(10px)' }}>
                     <div className="w-10 h-10 rounded-lg bg-blue-500/10 text-blue-400 flex items-center justify-center border border-blue-500/20 hover:scale-110 transition-transform cursor-pointer" title="Triggers">
                        <Zap size={20} />
                     </div>
                     <div className="w-10 h-10 rounded-lg bg-brand-accent/10 text-brand-accent flex items-center justify-center border border-brand-accent/20 hover:scale-110 transition-transform cursor-pointer" title="Logic">
                        <GitPullRequest size={20} />
                     </div>
                     <div className="w-10 h-10 rounded-lg bg-purple-500/10 text-purple-400 flex items-center justify-center border border-purple-500/20 hover:scale-110 transition-transform cursor-pointer" title="Integrations">
                        <LinkIcon size={20} />
                     </div>
                     <div className="mt-auto w-10 h-10 rounded-lg bg-slate-800/50 text-slate-400 flex items-center justify-center border border-white/10 hover:text-white cursor-pointer" title="Settings">
                        <Settings size={20} />
                     </div>
                </div>

                {/* Main Canvas */}
                <div className="flex-1 relative p-8">
                     {/* Connecting Lines (CSS Animated for stability) */}
                     <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
                        <defs>
                             <filter id="glow-line">
                                <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                                <feMerge>
                                    <feMergeNode in="coloredBlur"/>
                                    <feMergeNode in="SourceGraphic"/>
                                </feMerge>
                            </filter>
                             <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                                <polygon points="0 0, 10 3.5, 0 7" fill="#475569" />
                            </marker>
                        </defs>
                        
                        {/* Line 1: Salesforce -> AI */}
                        <path d="M140,180 C200,180 200,100 280,100" fill="none" stroke="#475569" strokeWidth="2" markerEnd="url(#arrowhead)" strokeDasharray="5,5" />
                        {/* Animated Overlay Line 1 (Replaces moving circle) */}
                        <path d="M140,180 C200,180 200,100 280,100" fill="none" stroke="#00D4C8" strokeWidth="2" strokeDasharray="5,5" style={{ animation: 'dash-flow-slow 1s linear infinite' }} opacity="0.6" />

                        {/* Line 2: Salesforce -> Slack */}
                        <path d="M140,180 C200,180 200,260 280,260" fill="none" stroke="#475569" strokeWidth="2" markerEnd="url(#arrowhead)" strokeDasharray="5,5" />
                         {/* Animated Overlay Line 2 (Replaces moving circle) */}
                        <path d="M140,180 C200,180 200,260 280,260" fill="none" stroke="#8B5CF6" strokeWidth="2" strokeDasharray="5,5" style={{ animation: 'dash-flow-slow 1.5s linear infinite' }} opacity="0.6" />
                    </svg>

                    {/* Node 1: Salesforce Trigger */}
                    <div className="absolute left-8 top-1/2 -translate-y-1/2 w-32 bg-[#0B1121] border border-blue-500/30 rounded-xl p-3 shadow-lg flex flex-col items-center gap-2 hover:border-blue-500 transition-colors cursor-pointer" style={{ transform: 'translateZ(20px)' }}>
                        <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400">
                            <Cloud size={20} />
                        </div>
                        <div className="text-[10px] text-slate-400 font-mono">New Opportunity</div>
                        <div className="text-xs font-bold text-white">Salesforce</div>
                    </div>

                    {/* Node 2: AI Logic */}
                    <div className="absolute right-[10%] md:right-[25%] top-[80px] w-36 md:w-40 bg-[#0B1121] border border-brand-accent/30 rounded-xl p-3 shadow-lg flex flex-col gap-2 hover:border-brand-accent transition-colors cursor-pointer" style={{ transform: 'translateZ(30px)' }}>
                        <div className="flex items-center gap-2 border-b border-white/5 pb-2 mb-1">
                             <div className="w-6 h-6 rounded bg-brand-accent/20 flex items-center justify-center text-brand-accent"><Cpu size={14}/></div>
                             <span className="text-xs font-bold text-white">Risk Analysis</span>
                        </div>
                        <div className="space-y-1">
                             <div className="flex justify-between text-[10px] text-slate-400"><span>Clause</span><span>Indemnity</span></div>
                             <div className="flex justify-between text-[10px] text-slate-400"><span>Confidence</span><span className="text-brand-accent">98%</span></div>
                        </div>
                    </div>

                    {/* Node 3: Slack Notification */}
                    <div className="absolute right-[10%] md:right-[25%] bottom-[80px] w-36 md:w-40 bg-[#0B1121] border border-purple-500/30 rounded-xl p-3 shadow-lg flex flex-col gap-2 hover:border-purple-500 transition-colors cursor-pointer" style={{ transform: 'translateZ(30px)' }}>
                         <div className="flex items-center gap-2 border-b border-white/5 pb-2 mb-1">
                             <div className="w-6 h-6 rounded bg-purple-500/20 flex items-center justify-center text-purple-400"><MessageSquare size={14}/></div>
                             <span className="text-xs font-bold text-white">Legal Approval</span>
                        </div>
                         <div className="text-[10px] text-slate-400 leading-tight">Post to <span className="text-purple-400">#legal-review</span> if risk {'>'} 80%</div>
                    </div>

                    {/* Config Popover (Floating) */}
                    <div className="absolute top-4 right-4 bg-brand-panel/90 border border-white/10 rounded-lg p-3 backdrop-blur-md w-48 animate-in fade-in slide-in-from-right-4 hidden sm:block" style={{ transform: 'translateZ(50px)' }}>
                        <div className="text-[10px] font-bold text-slate-500 uppercase mb-2">Configuration</div>
                        <div className="flex items-center justify-between text-xs text-slate-300 mb-1">
                            <span>Auto-Approve</span>
                            <div className="w-8 h-4 bg-brand-accent/20 rounded-full relative"><div className="absolute right-0.5 top-0.5 w-3 h-3 bg-brand-accent rounded-full"></div></div>
                        </div>
                         <div className="flex items-center justify-between text-xs text-slate-300">
                            <span>Audit Log</span>
                            <div className="w-8 h-4 bg-slate-600 rounded-full relative"><div className="absolute left-0.5 top-0.5 w-3 h-3 bg-white rounded-full"></div></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

// --- INTEGRATIONS VISUAL (Universal Connector Fabric) ---
const integrationNodes = [
    { id: 1, name: 'Salesforce (CRM)', type: 'crm', icon: Cloud, color: '#00A1E0', angle: 0 },
    { id: 2, name: 'Slack', type: 'chat', icon: MessageSquare, color: '#4A154B', angle: 45 },
    { id: 3, name: 'Oracle (ERP)', type: 'db', icon: Database, color: '#F80000', angle: 90 },
    { id: 4, name: 'DocuSign', type: 'sign', icon: FileText, color: '#2C5DCD', angle: 135 },
    { id: 5, name: 'SAP (ERP)', type: 'erp', icon: Server, color: '#0FAAFF', angle: 180 },
    { id: 6, name: 'HubSpot (CRM)', type: 'crm', icon: Users, color: '#FF7A59', angle: 225 },
    { id: 7, name: 'Monday.com', type: 'pm', icon: Layout, color: '#FF3D00', angle: 270 },
    { id: 8, name: 'Workday', type: 'hr', icon: CheckCircle2, color: '#E28225', angle: 315 },
];

export const IntegrationsVisual: React.FC = () => {
    const [activeId, setActiveId] = useState<number | null>(null);

    // Auto-play animation cycle
    useEffect(() => {
        const interval = setInterval(() => {
            setActiveId(prev => {
                const nextId = prev === null ? 1 : prev + 1;
                return nextId > integrationNodes.length ? 1 : nextId;
            });
        }, 2000); // Change connection every 2 seconds

        return () => clearInterval(interval);
    }, []);

    // Redesigned Center Logo with Name
    const CenterLogo = () => (
         <div className="relative w-20 h-20 md:w-28 md:h-28 rounded-full bg-[#0B1121] border border-brand-accent/30 flex flex-col items-center justify-center shadow-[0_0_60px_rgba(0,212,200,0.15)] z-20 transition-all duration-300 group-hover:scale-105">
             {/* Animated rings */}
             <div className="absolute inset-0 rounded-full border border-brand-accent/20 animate-[spin_10s_linear_infinite] opacity-40 border-dashed"></div>
             <div className="absolute inset-2 rounded-full border border-purple-500/20 animate-[spin_15s_linear_infinite_reverse] opacity-40 border-dotted"></div>
             
             {/* Inner Core */}
             <div className="relative flex flex-col items-center z-10">
                 {/* Icon */}
                 <div className="mb-1">
                     <svg viewBox="0 0 100 100" className="w-6 h-6 md:w-8 md:h-8 drop-shadow-[0_0_10px_rgba(0,212,200,0.5)]">
                        <path d="M50 20 L80 80 H20 Z" fill="none" stroke="#00D4C8" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
                        <circle cx="50" cy="45" r="4" fill="white" />
                    </svg>
                 </div>
                 {/* Text */}
                 <div className="text-[8px] md:text-[10px] font-bold tracking-wider text-white uppercase text-center leading-none">
                     Agree<br/>metrix
                 </div>
             </div>
         </div>
    );

    return (
        <div className="relative w-full h-[350px] md:h-[500px] flex items-center justify-center overflow-visible bg-brand-dark/30 rounded-2xl border border-white/5 group perspective-[1000px] transform scale-[0.8] md:scale-100 origin-center -my-10 md:my-0">
            {/* Styles for bi-directional flow animation */}
            <style>
            {`
              @keyframes flow-in {
                from { stroke-dashoffset: 20; }
                to { stroke-dashoffset: 0; }
              }
              @keyframes flow-out {
                from { stroke-dashoffset: 0; }
                to { stroke-dashoffset: 20; }
              }
            `}
            </style>
            
            {/* Background Grid */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,212,200,0.03),transparent_70%)]"></div>
            
            {/* SVG Lines - Fixed coordinate system */}
            <svg 
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 overflow-visible pointer-events-none z-10 w-full h-full" 
                viewBox="-250 -250 500 500"
            >
                <defs>
                     <linearGradient id="line-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#00D4C8" stopOpacity="0" />
                        <stop offset="50%" stopColor="#00D4C8" stopOpacity="0.5" />
                        <stop offset="100%" stopColor="#00D4C8" stopOpacity="0" />
                    </linearGradient>
                    <marker id="arrow-in" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
                        <path d="M0,0 L6,3 L0,6 L2,3 Z" fill="#00D4C8" />
                    </marker>
                    <marker id="arrow-out" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
                        <path d="M6,0 L0,3 L6,6 L4,3 Z" fill="#8B5CF6" />
                    </marker>
                </defs>
                {integrationNodes.map((node, i) => {
                    // Geometry Calculations for Bi-Directional Curves
                    const rad = (node.angle * Math.PI) / 180;
                    const radius = 180; 
                    const x = Math.cos(rad) * radius;
                    const y = Math.sin(rad) * radius;
                    
                    // Vectors for offset calculation (to split lines)
                    // Perpendicular vector (-y, x) normalized
                    const perpX = -Math.sin(rad) * 40; // 40px curve offset
                    const perpY = Math.cos(rad) * 40;
                    
                    // Midpoint
                    const midX = x / 2;
                    const midY = y / 2;

                    // Control Points for two distinct curves ("Eye" shape)
                    // Curve 1 (In): Bends one way
                    const cp1x = midX + perpX;
                    const cp1y = midY + perpY;
                    
                    // Curve 2 (Out): Bends other way
                    const cp2x = midX - perpX;
                    const cp2y = midY - perpY;

                    const isActive = activeId === node.id;
                    
                    // Base line (straightish) for inactive
                    const pathBase = `M ${x} ${y} Q ${midX} ${midY} 0 0`;
                    
                    // Active curved paths
                    const pathIn = `M ${x} ${y} Q ${cp1x} ${cp1y} 0 0`; // Node -> Center
                    const pathOut = `M 0 0 Q ${cp2x} ${cp2y} ${x} ${y}`; // Center -> Node

                    return (
                        <g key={i}>
                            {/* Inactive State: Single Faint Line */}
                            {!isActive && (
                                <path 
                                    d={pathBase} 
                                    fill="none" 
                                    stroke="url(#line-gradient)"
                                    strokeWidth={1}
                                    strokeDasharray="5,5"
                                    opacity={0.2}
                                    className="transition-all duration-300"
                                />
                            )}
                            
                            {/* Active State: Bi-Directional Flows */}
                            {isActive && (
                                <>
                                    {/* 1. DATA INGESTION (Node -> Center) - Cyan */}
                                    <path
                                        d={pathIn}
                                        fill="none"
                                        stroke="#00D4C8"
                                        strokeWidth={2}
                                        strokeDasharray="4 6"
                                        style={{ animation: 'flow-in 0.8s linear infinite' }}
                                        markerEnd="url(#arrow-in)"
                                        opacity="0.9"
                                    />
                                    
                                    {/* 2. COMMAND SYNC (Center -> Node) - Purple */}
                                    <path
                                        d={pathOut}
                                        fill="none"
                                        stroke="#8B5CF6"
                                        strokeWidth={2}
                                        strokeDasharray="4 6"
                                        strokeDashoffset="5"
                                        style={{ animation: 'flow-out 1.2s linear infinite' }}
                                        markerEnd="url(#arrow-out)" 
                                        opacity="0.9"
                                    />
                                </>
                            )}
                        </g>
                    )
                })}
            </svg>

            {/* Central Node - Agreemetrix Core */}
            <div className="relative z-20 transition-transform duration-300">
                <CenterLogo />
            </div>

            {/* Satellite Nodes - DOM Positioned */}
            <div className="absolute inset-0 z-30 pointer-events-none">
                {integrationNodes.map((node, i) => {
                    const rad = (node.angle * Math.PI) / 180;
                    const radius = 180; 
                    const x = Math.cos(rad) * radius;
                    const y = Math.sin(rad) * radius;
                    const isActive = activeId === node.id;

                    return (
                        <div 
                            key={node.id}
                            className={`absolute left-1/2 top-1/2 w-12 h-12 md:w-14 md:h-14 -ml-6 -mt-6 md:-ml-7 md:-mt-7 rounded-2xl border flex items-center justify-center shadow-lg pointer-events-auto cursor-pointer transition-all duration-300 group/node
                                ${isActive ? 'bg-[#1e293b] border-white scale-110 shadow-[0_0_25px_rgba(0,212,200,0.3)]' : 'bg-[#0F172A] border-white/10 hover:scale-125 hover:border-white/30'}`}
                            style={{ 
                                transform: `translate(${x}px, ${y}px)`,
                            }}
                            onClick={() => setActiveId(activeId === node.id ? null : node.id)}
                        >
                            <node.icon size={20} className="md:w-[22px] md:h-[22px]" style={{ color: isActive ? '#fff' : node.color }} />
                            
                            {/* Tooltip */}
                            <div className={`absolute top-full mt-2 transition-opacity bg-brand-dark border border-white/10 px-2 py-1 rounded text-[10px] text-white whitespace-nowrap z-40 shadow-xl ${isActive ? 'opacity-100' : 'opacity-0 group-hover/node:opacity-100'}`}>
                                {node.name}
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* Status Pill */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-brand-dark/90 px-4 py-2 rounded-full border border-brand-accent/30 text-xs text-brand-accent font-mono flex items-center gap-2 shadow-[0_0_20px_rgba(0,212,200,0.1)] z-40 whitespace-nowrap">
                {activeId ? (
                    <>
                        <div className="w-2 h-2 rounded-full bg-brand-accent animate-ping"></div>
                        <span className="text-white hidden sm:inline">Syncing:</span> 
                        <span style={{ color: integrationNodes.find(n => n.id === activeId)?.color }}>
                            {integrationNodes.find(n => n.id === activeId)?.name}
                        </span>
                        <span className="text-slate-500 mx-1 hidden sm:inline">|</span>
                        <span className="text-[10px] text-purple-400 hidden sm:inline">Sending Commands...</span>
                    </>
                ) : (
                    <>
                        <div className="w-2 h-2 rounded-full bg-brand-success animate-pulse"></div>
                        Fabric Active: 56 Connections
                    </>
                )}
            </div>
        </div>
    );
}

export const RepositoryVisual: React.FC = () => {
    return (
        <div className="relative w-full h-auto min-h-[300px] perspective-[1000px] group">
            <div 
                className="relative w-full h-full glass-panel rounded-xl p-0 overflow-visible shadow-2xl border border-white/10 flex flex-col transition-all duration-700 ease-out group-hover:rotate-x-1"
                style={preserve3d}
            >
                {/* Header - 3D Pop */}
                <div className="h-10 bg-[#0B1121] border-b border-white/10 flex items-center px-4 justify-between rounded-t-xl" style={{ transform: 'translateZ(10px)' }}>
                    <div className="flex items-center gap-2 text-slate-400 text-xs">
                        <Database size={14} /> Repository / Index
                    </div>
                    <div className="flex gap-2">
                        <div className="w-2 h-2 rounded-full bg-slate-600"></div>
                        <div className="w-2 h-2 rounded-full bg-slate-600"></div>
                    </div>
                </div>
                
                {/* Search Bar - Floating */}
                <div className="p-4 border-b border-white/5 bg-brand-panel/50">
                    <div className="flex gap-3" style={{ transform: 'translateZ(20px)' }}>
                        <div className="flex-1 bg-brand-dark border border-white/10 rounded-lg px-3 py-2 flex items-center gap-2 text-sm text-slate-500 shadow-inner">
                            <Search size={14} className="text-brand-accent" />
                            <span>Search across 500k+ documents...</span>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-4 px-4 py-2 bg-white/5 text-[10px] text-slate-400 font-medium uppercase tracking-wider">
                    <div className="col-span-2">Document ID</div>
                    <div>Format</div>
                    <div className="text-right">Extracted Data</div>
                </div>

                {/* List Items - Holographic Stack Effect */}
                <div className="flex-1 p-2 space-y-2">
                    {[1,2,3].map((row, i) => (
                        <div 
                            key={i} 
                            className="grid grid-cols-4 px-4 py-3 bg-[#0F172A]/80 border border-white/5 rounded-lg hover:border-brand-accent/50 hover:bg-brand-accent/5 transition-all duration-300 items-center text-sm cursor-pointer shadow-md hover:shadow-[0_0_15px_rgba(0,212,200,0.1)] hover:-translate-y-1"
                            style={{ transform: `translateZ(${10 + (i * 5)}px)` }}
                        >
                            <div className="col-span-2 flex items-center gap-3">
                                <div className="p-1.5 rounded bg-brand-accent/10 text-brand-accent">
                                    <Code2 size={14} />
                                </div>
                                <div>
                                    <div className="text-slate-200 font-mono text-xs">DOC_{202600 + i}_V2</div>
                                </div>
                            </div>
                            <div className="text-slate-400 text-xs">PDF/OCR</div>
                            <div className="text-right text-brand-success font-mono text-xs flex items-center justify-end gap-1">
                                <CheckCircle2 size={10} /> 100% Match
                            </div>
                        </div>
                    ))}
                </div>
                
                {/* Scanning Light Effect */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-accent/5 to-transparent h-[100px] w-full pointer-events-none animate-[scan_3s_ease-in-out_infinite] -z-10"></div>
            </div>
        </div>
    )
}

// --- REVAMPED ROADMAP VISUAL ---
export const RoadmapVisual: React.FC = () => {
    return (
        <div className="relative w-full h-[400px] md:h-[500px] flex items-center justify-center overflow-hidden bg-brand-dark/50 rounded-2xl border border-white/5 p-4 md:p-8 perspective-[1000px]">
             {/* Central Timeline Line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-brand-accent/30 to-transparent -translate-x-1/2 z-0"></div>
            
            <div className="relative z-10 w-full max-w-3xl flex flex-col h-full justify-between" style={preserve3d}>
                 
                 {/* 2025 Node - Past/Completed */}
                 <div className="flex items-center w-full group opacity-80" style={{ transform: 'translateZ(0px)' }}>
                    <div className="w-[45%] text-right pr-4 md:pr-8">
                         <div className="text-slate-400 font-bold text-lg md:text-xl">2025: Foundation</div>
                         <ul className="text-[10px] md:text-xs text-slate-500 mt-1 space-y-1">
                             <li>• Stealth R&D & Core Engine</li>
                             <li>• LLM Training on 500k+ Contracts</li>
                             <li>• Initial Architecture Design</li>
                         </ul>
                    </div>
                    <div className="w-[10%] flex justify-center relative">
                        <div className="w-3 h-3 rounded-full bg-slate-600 border-2 border-brand-dark z-20"></div>
                    </div>
                    <div className="w-[45%] pl-4 md:pl-8"></div>
                </div>

                 {/* 2026 Q1 - Current */}
                 <div className="flex items-center w-full group" style={{ transform: 'translateZ(20px)' }}>
                    <div className="w-[45%] text-right pr-4 md:pr-8"></div>
                    <div className="w-[10%] flex justify-center relative">
                        <div className="w-5 h-5 rounded-full bg-brand-accent border-4 border-brand-dark z-20 shadow-[0_0_20px_rgba(0,212,200,0.8)]"></div>
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-brand-accent/20 rounded-full animate-ping"></div>
                    </div>
                     <div className="w-[45%] pl-4 md:pl-8">
                         <div className="inline-block bg-brand-accent/10 border border-brand-accent/20 px-3 py-1 rounded text-brand-accent font-bold text-sm mb-2">NOW: Q1 2026</div>
                         <div className="text-white font-bold text-base md:text-lg">Alpha Phase</div>
                         <ul className="text-[10px] md:text-xs text-slate-400 mt-1 space-y-1">
                             <li>• <span className="text-white">Internal Testing</span> with 5 Partners</li>
                             <li>• Entity Extraction v1.0 Live</li>
                             <li>• SOC2 Compliance Audit</li>
                         </ul>
                    </div>
                </div>

                {/* 2026 Q3 - Upcoming */}
                 <div className="flex items-center w-full group opacity-60 hover:opacity-100 transition-opacity" style={{ transform: 'translateZ(10px)' }}>
                    <div className="w-[45%] text-right pr-4 md:pr-8">
                         <div className="text-purple-400 font-bold text-base md:text-lg">Q3 2026: Beta</div>
                         <ul className="text-[10px] md:text-xs text-slate-500 mt-1 space-y-1">
                             <li>• Public Waitlist Access</li>
                             <li>• Workflow Automation Engine</li>
                             <li>• API Fabric Expansion</li>
                         </ul>
                    </div>
                    <div className="w-[10%] flex justify-center relative">
                        <div className="w-3 h-3 rounded-full bg-purple-500 border-2 border-brand-dark z-20"></div>
                    </div>
                    <div className="w-[45%] pl-4 md:pl-8"></div>
                </div>

                 {/* Future Node */}
                 <div className="flex items-center w-full group opacity-40 hover:opacity-100 transition-opacity" style={{ transform: 'translateZ(0px)' }}>
                    <div className="w-[45%] text-right pr-4 md:pr-8"></div>
                    <div className="w-[10%] flex justify-center relative">
                        <div className="w-3 h-3 rounded-full bg-slate-700 border-2 border-brand-dark z-20"></div>
                    </div>
                    <div className="w-[45%] pl-4 md:pl-8">
                         <div className="text-slate-500 font-bold text-base md:text-lg">2027: Global Launch</div>
                         <div className="text-[10px] md:text-xs text-slate-600 mt-1">Market Expansion & Series A</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

// --- HERO INTERFACE VISUAL ---
export const HeroInterfaceVisual: React.FC = () => {
    return (
        <div className="relative w-full max-w-[380px] md:max-w-4xl mx-auto h-[400px] md:h-[500px] perspective-[2000px] group">
            {/* Main Floating Panel */}
            <div 
                className="absolute inset-0 bg-[#0F172A]/95 backdrop-blur-xl border border-brand-accent/30 rounded-xl shadow-[0_0_100px_rgba(0,212,200,0.15)] overflow-hidden flex flex-col transition-all duration-700 ease-out group-hover:rotate-x-2 group-hover:rotate-y-1"
                style={preserve3d}
            >
                
                {/* Header Bar */}
                <div className="h-10 border-b border-brand-accent/20 flex items-center justify-between px-4 bg-[#0B1121]" style={{ transform: 'translateZ(10px)' }}>
                    <div className="flex items-center gap-4">
                         <div className="flex gap-1.5">
                            <div className="w-2.5 h-2.5 rounded-full bg-red-500/80"></div>
                            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></div>
                            <div className="w-2.5 h-2.5 rounded-full bg-green-500/80"></div>
                        </div>
                        <div className="text-[10px] font-mono text-brand-accent/70 tracking-wider flex items-center gap-2">
                            <ShieldCheck size={10} /> CLM_INTELLIGENCE_ENGINE_V1
                        </div>
                    </div>
                    <div className="text-[10px] font-mono text-slate-500 flex items-center gap-2">
                         <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
                         LIVE
                    </div>
                </div>

                {/* Main Content Area */}
                <div className="flex-1 flex overflow-hidden">
                    {/* Sidebar - Depth 2 (Hidden on Mobile) */}
                    <div className="hidden md:flex w-56 border-r border-white/5 bg-[#0B1121]/50 p-4 flex-col gap-4 z-10" style={{ transform: 'translateZ(20px)' }}>
                        <div className="text-[9px] font-bold text-slate-500 uppercase tracking-widest mb-1">Active Modules</div>
                        {[
                            { name: 'Entity Extraction', icon: Users, active: true },
                            { name: 'Risk Analysis', icon: ShieldCheck, active: true },
                            { name: 'Obligation Check', icon: GitPullRequest, active: false },
                        ].map((item, i) => (
                            <div key={i} className={`flex items-center gap-3 p-2.5 rounded cursor-pointer border transition-all ${item.active ? 'bg-brand-accent/10 border-brand-accent/30 text-brand-accent' : 'border-transparent text-slate-500 hover:text-slate-300'}`}>
                                <item.icon size={14} />
                                <span className="text-[11px] font-medium">{item.name}</span>
                            </div>
                        ))}
                    </div>

                    {/* Document View - Realistic Contract */}
                    <div className="flex-1 p-4 md:p-6 relative bg-[#1E293B] overflow-hidden flex justify-center">
                         {/* Scanning Laser Line */}
                        <div className="absolute top-0 left-0 right-0 h-[2px] bg-brand-accent shadow-[0_0_40px_rgba(0,212,200,0.8)] z-30 animate-[scan_4s_ease-in-out_infinite] opacity-60"></div>
                        
                        <div 
                             className="w-full max-w-[340px] md:w-[380px] bg-white rounded-sm shadow-2xl p-4 md:p-8 text-slate-800 font-serif text-[8px] leading-relaxed relative scale-[0.9] md:scale-100 origin-top"
                             style={{ transform: 'translateZ(10px) rotateX(2deg)', height: '120%' }}
                        >
                             {/* Paper Header */}
                             <div className="text-center mb-6 border-b-2 border-slate-800 pb-2">
                                 <h2 className="font-bold text-sm tracking-wide mb-1">MASTER SERVICES AGREEMENT</h2>
                                 <div className="text-[6px] text-slate-500">REF: MSA-2026-001-ACME</div>
                             </div>

                             {/* Content */}
                             <div className="space-y-3 opacity-80">
                                 <p className="text-justify"><span className="font-bold">THIS AGREEMENT</span> is made on this 12th day of October, 2026, by and between <span className="bg-blue-100 px-1 border border-blue-300 rounded-sm">Agreemetrix Inc.</span> ("Provider") and <span className="bg-blue-100 px-1 border border-blue-300 rounded-sm">Acme Corp.</span> ("Customer").</p>
                                 
                                 <div className="font-bold mt-4 mb-1">1. DEFINITIONS</div>
                                 <p className="text-justify">"Confidential Information" means all information disclosed by a party to the other party, whether orally or in writing.</p>
                                 
                                 <div className="font-bold mt-4 mb-1">2. FEES AND PAYMENT</div>
                                 <p className="text-justify">Customer shall pay Provider the fees set forth in the Order Form. All fees are quoted in <span className="bg-green-100 px-1 border border-green-300 rounded-sm font-bold">$1,500,000 USD</span>.</p>

                                 <div className="font-bold mt-4 mb-1">3. INDEMNIFICATION</div>
                                 <div className="relative">
                                     <p className="text-justify bg-red-50 p-1 border border-red-200 rounded-sm">Provider shall defend Customer against any claim, demand, suit, or proceeding made or brought against Customer by a third party.</p>
                                     <div className="absolute -right-12 top-0 bg-red-500 text-white text-[8px] px-1.5 py-0.5 rounded shadow animate-pulse">RISK: HIGH</div>
                                 </div>
                             </div>
                        </div>
                    </div>

                    {/* Right Data Panel - Terminal Style */}
                    <div className="hidden md:flex w-64 border-l border-white/5 bg-[#0B1121]/95 p-0 font-mono text-[10px] flex-col z-10" style={{ transform: 'translateZ(20px)' }}>
                        <div className="bg-[#0F172A] p-2 border-b border-white/5 text-slate-500 text-[9px] uppercase tracking-wider flex justify-between">
                            <span>Extraction Log</span>
                            <Terminal size={10} />
                        </div>
                        <div className="p-3 space-y-1 text-slate-400 overflow-y-auto font-mono text-[9px]">
                             <div className="text-green-500">{`>`} stream_start</div>
                             <div>{`{`}</div>
                             <div className="pl-2 text-blue-300">"parties": <span className="text-yellow-300">["Agreemetrix", "Acme"]</span>,</div>
                             <div className="pl-2 text-blue-300">"value": <span className="text-green-400">1500000</span>,</div>
                             <div className="pl-2 text-blue-300">"currency": <span className="text-green-400">"USD"</span>,</div>
                             <div className="pl-2 text-blue-300">"effective_date": <span className="text-yellow-300">"2026-10-12"</span>,</div>
                             <div className="pl-2 text-blue-300">"risks": [</div>
                             <div className="pl-4 text-white">"Indemnity_Clause",</div>
                             <div className="pl-4 text-white">"Unlimited_Liability"</div>
                             <div className="pl-2 text-blue-300">],</div>
                             <div className="pl-2 text-blue-300">"score": <span className="bg-red-500/20 text-red-400 px-1">0.42 (FAIL)</span></div>
                             <div>{`}`}</div>
                             <div className="text-green-500 animate-pulse">{`>`} awaiting_input_</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}