import React,{useState} from 'react';
import IDA from './pages/IDA';
import MovItaqui from './pages/MovItaqui';
import Complexo from './pages/Complexo';
import Relatorios from './pages/Relatorios';
import Projetos from './pages/Projetos';
export default function App(){const [tab,setTab]=useState('ida');return(<div style={{background:'var(--bg)',minHeight:'100vh'}}><div className='container'><div className='header'><img className='logo' src='/logo-itaqui.svg' alt='Itaqui' height='36'/><h1>Dashboard Sustentável do Porto do Itaqui</h1></div><div className='tabs'>{[{key:'ida',label:'IDA'},{key:'movitaqui',label:'Movimentação (Itaqui)'},{key:'complexo',label:'Complexo do Itaqui'},{key:'rel',label:'Relatórios'},{key:'proj',label:'Projetos'}].map(t=>(<button key={t.key} className={`tab ${tab===t.key?'active':''}`} onClick={()=>setTab(t.key)}>{t.label}</button>))}</div>{tab==='ida'&&<IDA/>}{tab==='movitaqui'&&<MovItaqui/>}{tab==='complexo'&&<Complexo/>}{tab==='rel'&&<Relatorios/>}{tab==='proj'&&<Projetos/>}</div></div>)}
