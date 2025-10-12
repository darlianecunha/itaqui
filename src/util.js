export async function loadCSV(p){const r=await fetch(p);const t=await r.text();const [h,...rows]=t.trim().split(/\r?\n/);const cols=h.split(',').map(s=>s.trim());return rows.map(r=>{const v=r.split(',').map(s=>s.trim());const o={};cols.forEach((c,i)=>o[c]=isNaN(Number(v[i]))?v[i]:Number(v[i]));return o;});}
export async function loadJSON(p){const r=await fetch(p);return await r.json();}
