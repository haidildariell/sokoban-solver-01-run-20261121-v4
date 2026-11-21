import fs from'fs'
const{MAKEFUN_INPUT_DIR:I,MAKEFUN_OUTPUT_DIR:O}=process.env
let H,W,F,G,B,P,V,A=[],S=[],C=[],J,T=0,E
function R(f,o,a,k){let y=[f],L=f;a[f]=++T;for(let c of y){L=c<L?c:L;for(let d of F){let u=c+d;if(!W[u]&&!J[u]&&!o.includes(u)&&a[u]!=T){a[u]=T;if(k)S[u]=c;y.push(u)}}}return L}
function s(b,p){let Q=[[b,p,'']],D={[b+','+R(p,b,A,1)]:1}
for(let h=0;Q[h];h++){let[b,p,m]=Q[h];R(p,b,A,1);let Y=T
for(let i in b)for(let j in F){let x=b[i],d=F[j],u=x+d;if(W[u]||b.includes(u)||!V[u]||A[x-d]!=Y)continue;let q=[...b];q[i]=u;q.sort((a,b)=>a-b);let K=q+','+R(x,q,C,0);if(D[K])continue;let v='';for(let c=x-d;c!=p;c=S[c])v='udlr'[F.indexOf(c-S[c])]+v;let N=m+v+'UDLR'[j];if(q+''==G+''){E=x;return N}if(Q[25e4])return null;D[K]=1;Q.push([q,x,N])}}
return null}
for(let d of fs.readdirSync(I)){let t=''+fs.readFileSync(I+'/'+d+'/level.txt');H=t.indexOf('\n')+1;F=[-H,H,-1,1];W=[];G=[];B=[];t.replace(/[#.*+]/g,(c,i)=>c=='#'?W[i]=1:G.push(i));t.replace(/[$*]/g,(c,i)=>B.push(i));P=t.indexOf('@');J=[]
let o={},K=i=>(i%H/7|0)*2+(i>8*H),a=''
for(let b of B)(o[K(b)]??={B:[],G:[]}).B.push(b)
for(let g of G)o[K(g)].G.push(g)
for(let r of Object.values(o)){G=r.G;V=[];let q=G.map(g=>(V[g]=1,g));for(let c of q)for(let d of F){let y=c-d;if(!W[y]&&!W[y-d]&&!V[y]){V[y]=1;q.push(y)}}let m=s(r.B,P);if(!m)break;a+=m;P=E;for(let b of r.G)J[b]=1}
fs.mkdirSync(O+'/'+d,{recursive:!0});fs.writeFileSync(O+'/'+d+'/solution.txt',a)}
