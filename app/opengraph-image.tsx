import { ImageResponse } from 'next/og';
export const alt = 'DOSCAR04 — автосервис и детейлинг в Актобе';
export const size = {width:1200,height:630};
export const contentType = 'image/png';
export default function Image(){return new ImageResponse(<div style={{display:'flex',flexDirection:'column',justifyContent:'space-between',background:'#101113',color:'#f5f5f2',width:'100%',height:'100%',padding:'70px'}}><div style={{display:'flex',fontSize:88,fontWeight:700}}>DOSCAR<span style={{color:'#ec2b35'}}>04</span></div><div style={{display:'flex',flexDirection:'column',fontSize:54,lineHeight:1.2}}><div>Сервис. Детейлинг. Характер.</div><div style={{fontSize:27,color:'#a9acb2',marginTop:35}}>Актобе / Тургенева, 93Б / +7 708 219 64 85</div></div><div style={{height:7,background:'#ec2b35',width:160}}/></div>,size)}
