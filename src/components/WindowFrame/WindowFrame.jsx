import React, { useState, useEffect, useRef } from 'react';
import { Terminal, FileCode, Code } from 'lucide-react';
import './WindowFrame.css';

export default function WindowFrame() {
  const [activeTab, setActiveTab] = useState('settings');
  const [terminalLines, setTerminalLines] = useState([
    "Type command or boot django server...",
    "System status: READY"
  ]);
  const [isDiagnosticRunning, setIsDiagnosticRunning] = useState(false);
  const bodyRef = useRef(null);

  const djangoLogs = [
    "Performing migrations checks... [NO MIGRATIONS PENDING]",
    "Verifying database connections pool (SQL Server)...",
    "STATUS: Database server 'cursed_db' connected via port 1433.",
    "Loading 5 backend modular apps [Accounts, Products, Orders, Marketing, Support]...",
    "Django version 5.0.2, using settings 'cursed_society.settings'",
    "Starting development server at http://127.0.0.1:8000/",
    "Quit the server with CONTROL-C.",
    "LOG [01:10:45] GET /api/v1/products/ - 200 OK (21 tables mapped)",
    "LOG [01:10:46] GET /api/v1/orders/status/ - 200 OK",
    "SYSTEM HEALTH REPORT: ALL DJANGO SERVICES OPERATIONAL"
  ];

  const runDiagnostic = () => {
    if (isDiagnosticRunning) return;
    setIsDiagnosticRunning(true);
    setTerminalLines(["$ python manage.py runserver"]);
    
    let currentLogIndex = 0;
    
    const interval = setInterval(() => {
      if (currentLogIndex < djangoLogs.length) {
        setTerminalLines(prev => [...prev, djangoLogs[currentLogIndex]]);
        currentLogIndex++;
      } else {
        clearInterval(interval);
        setIsDiagnosticRunning(false);
      }
    }, 450);
  };

  // Autoscroll terminal body when lines are added
  useEffect(() => {
    if (bodyRef.current && activeTab === 'server_boot') {
      bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
    }
  }, [terminalLines, activeTab]);

  return (
    <div className="window-container glass-panel">
      <div className="window-header">
        <div className="window-controls">
          <div className="window-dot close"></div>
          <div className="window-dot minimize"></div>
          <div className="window-dot maximize"></div>
        </div>
        <div className="window-title">
          {activeTab === 'settings' && 'settings.py — edit'}
          {activeTab === 'schema' && 'schema.sql — read'}
          {activeTab === 'server_boot' && 'server_boot.sh — python'}
        </div>
        <div className="window-status-led">
          <span className="window-status-dot"></span>
          <span>DEV_SERVER</span>
        </div>
      </div>

      <div className="window-tabs">
        <button 
          className={`window-tab ${activeTab === 'settings' ? 'active' : ''}`}
          onClick={() => setActiveTab('settings')}
        >
          <FileCode size={14} />
          <span>settings.py</span>
        </button>
        <button 
          className={`window-tab ${activeTab === 'schema' ? 'active' : ''}`}
          onClick={() => setActiveTab('schema')}
        >
          <Code size={14} />
          <span>schema.sql</span>
        </button>
        <button 
          className={`window-tab ${activeTab === 'server_boot' ? 'active' : ''}`}
          onClick={() => setActiveTab('server_boot')}
        >
          <Terminal size={14} />
          <span>server_boot.sh</span>
        </button>
      </div>

      <div className="window-body" ref={bodyRef}>
        {activeTab === 'settings' && (
          <div className="code-content">
            <div className="code-line"><span className="token-comment"># DJANGO SETTINGS FOR CURSED SOCIETY E-COMMERCE</span></div>
            <div className="code-line"><span className="token-key">DEBUG</span> <span className="token-punctuation">=</span> <span className="token-boolean">True</span></div>
            <div className="code-line"><span className="token-key">INSTALLED_APPS</span> <span className="token-punctuation">=</span> <span className="token-punctuation">[</span></div>
            <div className="code-line code-indent"><span className="token-string">'rest_framework'</span><span className="token-punctuation">,</span></div>
            <div className="code-line code-indent"><span className="token-string">'cursed_society.accounts'</span><span className="token-punctuation">,</span></div>
            <div className="code-line code-indent"><span className="token-string">'cursed_society.products'</span><span className="token-punctuation">,</span></div>
            <div className="code-line code-indent"><span className="token-string">'cursed_society.orders'</span><span className="token-punctuation">,</span></div>
            <div className="code-line code-indent"><span className="token-string">'cursed_society.marketing'</span><span className="token-punctuation">,</span></div>
            <div className="code-line code-indent"><span className="token-string">'cursed_society.support'</span></div>
            <div className="code-line"><span className="token-punctuation">]</span></div>
            <div className="code-line"><span className="token-key">DATABASES</span> <span className="token-punctuation">=</span> <span className="token-punctuation">&#123;</span></div>
            <div className="code-line code-indent"><span className="token-string">'default'</span><span className="token-punctuation">:</span> <span className="token-punctuation">&#123;</span></div>
            <div className="code-line code-indent-2"><span className="token-string">'ENGINE'</span><span className="token-punctuation">:</span> <span className="token-string">'django.db.backends.sqlserver'</span><span className="token-punctuation">,</span></div>
            <div className="code-line code-indent-2"><span className="token-string">'NAME'</span><span className="token-punctuation">:</span> <span className="token-string">'cursed_db'</span><span className="token-punctuation">,</span></div>
            <div className="code-line code-indent-2"><span className="token-string">'USER'</span><span className="token-punctuation">:</span> <span className="token-string">'sa'</span></div>
            <div className="code-line code-indent"><span className="token-punctuation">&#125;</span></div>
            <div className="code-line"><span className="token-punctuation">&#125;</span></div>
          </div>
        )}

        {activeTab === 'schema' && (
          <div className="code-content">
            <div className="code-line"><span className="token-comment">-- SQL SERVER DATABASE SCHEMA (21 TABLES TOTAL)</span></div>
            <div className="code-line"><span className="token-keyword">CREATE TABLE</span> <span className="token-key">Accounts_User</span> <span className="token-punctuation">(</span></div>
            <div className="code-line code-indent"><span className="token-key">user_id</span> <span className="token-keyword">INT PRIMARY KEY IDENTITY</span><span className="token-punctuation">(</span><span className="token-number">1</span><span className="token-punctuation">,</span><span className="token-number">1</span><span className="token-punctuation">)</span><span className="token-punctuation">,</span></div>
            <div className="code-line code-indent"><span className="token-key">username</span> <span className="token-keyword">VARCHAR</span><span className="token-punctuation">(</span><span className="token-number">50</span><span className="token-punctuation">)</span> <span className="token-keyword">NOT NULL UNIQUE</span><span className="token-punctuation">,</span></div>
            <div className="code-line code-indent"><span className="token-key">email</span> <span className="token-keyword">VARCHAR</span><span className="token-punctuation">(</span><span className="token-number">100</span><span className="token-punctuation">)</span> <span className="token-keyword">NOT NULL</span><span className="token-punctuation">,</span></div>
            <div className="code-line code-indent"><span className="token-key">created_at</span> <span className="token-keyword">DATETIME DEFAULT GETDATE</span><span className="token-punctuation">(</span><span className="token-punctuation">)</span></div>
            <div className="code-line"><span className="token-punctuation">)</span><span className="token-punctuation">;</span></div>
            <div className="code-line"><span className="token-keyword">CREATE TABLE</span> <span className="token-key">Products_Item</span> <span className="token-punctuation">(</span></div>
            <div className="code-line code-indent"><span className="token-key">product_id</span> <span className="token-keyword">INT PRIMARY KEY IDENTITY</span><span className="token-punctuation">(</span><span className="token-number">1</span><span className="token-punctuation">,</span><span className="token-number">1</span><span className="token-punctuation">)</span><span className="token-punctuation">,</span></div>
            <div className="code-line code-indent"><span className="token-key">name</span> <span className="token-keyword">VARCHAR</span><span className="token-punctuation">(</span><span className="token-number">150</span><span className="token-punctuation">)</span> <span className="token-keyword">NOT NULL</span><span className="token-punctuation">,</span></div>
            <div className="code-line code-indent"><span className="token-key">price</span> <span className="token-keyword">DECIMAL</span><span className="token-punctuation">(</span><span className="token-number">10</span><span className="token-punctuation">,</span><span className="token-number">2</span><span className="token-punctuation">)</span> <span className="token-keyword">NOT NULL</span><span className="token-punctuation">,</span></div>
            <div className="code-line code-indent"><span className="token-key">stock</span> <span className="token-keyword">INT DEFAULT</span> <span className="token-number">0</span></div>
            <div className="code-line"><span className="token-punctuation">)</span><span className="token-punctuation">;</span></div>
          </div>
        )}

        {activeTab === 'server_boot' && (
          <div className="terminal-content">
            <div className="terminal-prompt">
              <span style={{ color: '#8b5cf6' }}>dev@garvyadav</span>
              <span>:</span>
              <span style={{ color: '#3b82f6' }}>~/projects/cursed-society</span>
            </div>
            
            {terminalLines.map((line, idx) => (
              <div 
                key={idx} 
                className={`code-line ${idx === 0 ? '' : 'terminal-output'}`}
                style={line.includes('OPERATIONAL') ? { color: '#22c55e', fontWeight: 'bold' } : {}}
              >
                {line}
              </div>
            ))}
            
            {!isDiagnosticRunning && (
              <div>
                <button className="terminal-run-btn" onClick={runDiagnostic}>
                  BOOT DEVELOPMENT SERVER
                </button>
                <span className="terminal-cursor" style={{ marginLeft: '8px' }}></span>
              </div>
            )}
            
            {isDiagnosticRunning && (
              <div className="code-line terminal-output">
                Booting server<span className="terminal-cursor"></span>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
