export default function MovieStats({movies}){
 const watched=movies.filter(m=>m.status==='Watched').length; const avg=movies.length?(movies.reduce((sum,m)=>sum+Number(m.myRating),0)/movies.length).toFixed(1):'0.0';
 return <div className="stats-grid"><div className="stat-card"><span>🎬</span><div><small>Total Movies</small><strong>{movies.length}</strong></div></div><div className="stat-card"><span>✓</span><div><small>Watched</small><strong>{watched}</strong></div></div><div className="stat-card"><span>◷</span><div><small>Not Watched</small><strong>{movies.length-watched}</strong></div></div><div className="stat-card"><span>⭐</span><div><small>Average My Rating</small><strong>{avg} / 5</strong></div></div></div>
}
