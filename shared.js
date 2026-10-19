const SB = window.supabase;
const cfg = window.SSAB_CONFIG || {};
const configured = SB && cfg.supabaseUrl && cfg.supabaseAnonKey && !cfg.supabaseUrl.includes('YOUR_') && !cfg.supabaseAnonKey.includes('YOUR_');
const db = configured ? SB.createClient(cfg.supabaseUrl, cfg.supabaseAnonKey) : null;
const $ = (s, root=document) => root.querySelector(s);
const money = n => Number(n || 0) === 0 ? 'Free' : `₹${Number(n).toLocaleString('en-IN')}`;
function toast(message, type='info') { const t=$('#toast'); if(!t) return; t.textContent=message; t.dataset.type=type; t.classList.add('show'); setTimeout(()=>t.classList.remove('show'),3000); }
function needConfig(){ if(!db){ toast('Connect Supabase first. Follow the README setup steps.', 'error'); return false;} return true; }
