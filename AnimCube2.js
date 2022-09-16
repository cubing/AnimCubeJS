"use strict";function AnimCube2(t){var e,r,n,o,a,f,l,i,u,c,s,h,v,d,g,m,b,M,p,k,L,y,w,T,A,R,S,F,D,x,E,B,I,U,P,C,W,X,Y,q,z,O,Q,N,Z,H,G=[],K=[],j=[],J=[],V=[],$=[],_=[[0,-1,0],[0,1,0],[0,0,-1],[0,0,1],[-1,0,0],[1,0,0]],tt=[[-1,-1,-1],[1,-1,-1],[1,-1,1],[-1,-1,1],[-1,1,-1],[1,1,-1],[1,1,1],[-1,1,1]],et=[[0,1,2,3],[4,7,6,5],[0,4,5,1],[2,6,7,3],[0,3,7,4],[1,5,6,2]],rt=[[0,3,2,1],[0,3,2,1],[3,2,1,0],[3,2,1,0],[0,3,2,1],[0,3,2,1]],nt=[[2,5,3,4],[4,3,5,2],[4,1,5,0],[5,1,4,0],[0,3,1,2],[2,1,3,0]],ot=[1,1,-1,-1,-1,-1],at=[0,0,-1],ft=[1,0,0],lt=[],it=[],ut=[],ct=[],st=!0,ht=[],vt=[],dt=[],gt=!0,mt=-1,bt=6,Mt=12,pt=!0,kt=!1,Lt=!1,yt=!1,wt=0,Tt=0,At=0,Rt=0,St=[3,2,0,5,1,4],Ft=[[2,0,3,1],[1,3,0,2],[0,1,2,3],[0,1,2,3],[2,0,3,1],[0,1,2,3]];function Dt(){var t=Et("config");null!=t?function(t){var e=new XMLHttpRequest;function r(){4==e.readyState&&(200==e.status?function(t){for(var e=t.split("\n"),r=0;r<e.length;r++){var n=e[r].split("=");void 0!==n[1]&&(G[n[0]]=n[1].trim())}}(e.responseText):console.log("Error loading config file: "+t),xt())}e.onreadystatechange=r,e.open("GET",t,!0),e.send()}(t):xt()}function xt(){K[0]=Dr(255,128,64),K[1]=Dr(255,0,0),K[2]=Dr(0,255,0),K[3]=Dr(0,0,255),K[4]=Dr(153,153,153),K[5]=Dr(170,170,68),K[6]=Dr(187,119,68),K[7]=Dr(153,68,68),K[8]=Dr(68,119,68),K[9]=Dr(0,68,119),K[10]=Dr(255,255,255),K[11]=Dr(255,255,0),K[12]=Dr(255,96,32),K[13]=Dr(208,0,0),K[14]=Dr(0,144,0),K[15]=Dr(32,64,208),K[16]=Dr(176,176,176),K[17]=Dr(80,80,80),K[18]=Dr(255,0,255),K[19]=Dr(0,255,255),K[20]=Dr(255,160,192),K[21]=Dr(32,255,16),K[22]=Dr(0,0,0),K[23]=Dr(128,128,128);var t=Et("bgcolor");if(e=null!=t&&6==t.length&&Er(t)?"#"+t:"gray",t=Et("butbgcolor"),o=null!=t&&6==t.length&&Er(t)?"#"+t:e,null!=(t=Et("colors")))for(var u=0;u<10&&u<t.length/6;u++)Er(t.substring(6*u,6*u+6))&&(K[u]="#"+t.substring(6*u,6*u+6));for(u=0;u<6;u++)for(var c=0;c<4;c++)j[u][c]=u+10;if(null!=(t=Et("supercube"))&&"1"==t){Lt=!0,Bt(.06);for(u=0;u<4;u++)j[0][u]=22;null!=(t=Et("scw"))&&("1"==t?At=1:"2"==t&&(At=2)),1==At&&(K[10]="#000000")}if(null!=(t=Et("gabbacolors"))&&"1"==t&&(1==Lt?(K[11]="#fdcf00",K[12]="#fd4e0a",K[13]="#93000d",K[14]="#00702d",K[15]="#00347a"):(Bt(.06),K[11]="#ffd90a",K[12]="#ff4f0b",K[13]="#9e0b19",K[14]="#0b7d39",K[15]="#0b4186")),null!=(t=Et("borderwidth"))){for(u=0;u<t.length;u++)t.charAt(u)>="0"&&t.charAt(u)<="9"&&(Rt=10*Rt+parseInt(t[u]));Rt>=0&&Rt<=20&&Bt(Rt/100)}if(Lt)for(u=0;u<6;u++)for(c=0;c<4;c++)J[u][c]=0;var s="lluu";if(null!=(t=Et("colorscheme"))&&6==t.length)for(u=0;u<6;u++){var h=23;for(c=0;c<23;c++)if(t[u].toLowerCase()=="0123456789wyorgbldmcpnk".charAt(c)){h=c;break}for(c=0;c<4;c++)j[u][c]=h}if("1"==(t=Et("scramble"))?wt=1:"2"==t&&(wt=2),2==wt)for(u=0;u<6;u++)for(c=0;c<4;c++)V[u][c]=j[u][c],$[u][c]=J[u][c];if(0==wt){if(null!=(t=Et("pos"))&&24==t.length){s="uuuuff","gray"==e&&(e="white");for(u=0;u<6;u++){var g=St[u];for(c=0;c<4;c++){var m=Ft[u][c];j[g][m]=23;for(var b=0;b<14;b++)if(t.charAt(9*u+c)=="DFECABdfecabgh".charAt(b)){j[g][m]=b+4;break}}}}if(null!=(t=Et("facelets"))&&24==t.length)for(u=0;u<6;u++)for(c=0;c<4;c++){j[u][c]=23;for(b=0;b<23;b++)if(t[4*u+c].toLowerCase()=="0123456789wyorgbldmcpnk".charAt(b)){j[u][c]=b;break}}if(null!=(t=Et("superfacelets"))&&24==t.length)for(u=0;u<6;u++)for(c=0;c<4;c++)for(b=0;b<4;b++)if(t[4*u+c].toLowerCase()=="0123".charAt(b)){J[u][c]=b;break}}if(null!=(t=Et("randmoves"))){var L=0;for(u=0;u<t.length;u++)t.charAt(u)>="0"&&t.charAt(u)<="9"&&(L=10*L+parseInt(t[u]));L>0&&(Tt=L)}if(("random"==(t=Et("move"))||wt>0)&&(t=pn(2,Tt)),ht=null==t?[]:Pt(t,!0),C=0,z=-1,0==wt&&null!=(t=Et("initmove"))){"random"==t&&(t=pn(2,Tt));var y="#"==t?ht:Pt(t,!1);y.length>0&&Kt(j,y[0],0,y[0].length,!1)}if(t=Et("initrevmove"),1==wt?t=null:2==wt&&(t="#"),null!=t){"random"==t&&(t=pn(2,Tt));var w="#"==t?ht:Pt(t,!1);w.length>0&&Kt(j,w[0],0,w[0].length,!0)}0==wt&&null!=(t=Et("demo"))&&("random"==t&&(t=pn(2,Tt)),(vt="#"==t?ht:Pt(t,!0)).length>0&&vt[0].length>0&&(A=!0)),t=Et("position"),kr(Ar(lt,at,ft)),null==t&&(t=s);var T=Math.PI/12;for(u=0;u<t.length;u++){var P=T;switch(t[u].toLowerCase()){case"d":P=-P;case"u":Sr(at,P),Sr(ft,P);break;case"f":P=-P;case"b":Fr(at,P),Fr(ft,P);break;case"l":P=-P;case"r":Rr(at,P),Rr(ft,P)}}if(kr(Ar(lt,at,ft)),v=0,d=0,null!=(t=Et("speed")))for(u=0;u<t.length;u++)t.charAt(u)>="0"&&t.charAt(u)<="9"&&(v=10*v+parseInt(t[u]));if(null!=(t=Et("doublespeed")))for(u=0;u<t.length;u++)t.charAt(u)>="0"&&t.charAt(u)<="9"&&(d=10*d+parseInt(t[u]));if(0==v&&(v=10),0==d&&(d=3*v/2),R=0,null==(t=Et("perspective")))R=2;else for(u=0;u<t.length;u++)t.charAt(u)>="0"&&t.charAt(u)<="9"&&(R=10*R+parseInt(t[u]));var W,X=0;if(null!=(t=Et("scale")))for(u=0;u<t.length;u++)t.charAt(u)>="0"&&t.charAt(u)<="9"&&(X=10*X+parseInt(t[u]));if(S=1/(1+X/10),D=!1,null!=(t=Et("hint"))){D=!0,x=0;for(u=0;u<t.length;u++)t.charAt(u)>="0"&&t.charAt(u)<="9"&&(x=10*x+parseInt(t[u]));x<1?D=!1:x/=10}(E=3.7,null!=(t=Et("hinthoriz")))&&((W=parseFloat(t))>0&&(E=W));(B=3.7,null!=(t=Et("hintvert")))&&((W=parseFloat(t))>0&&(B=W));(I=0,null!=(t=Et("hintborder"))&&"1"==t&&(I=1),Q=13,null!=(t=Et("buttonheight")))&&((W=parseInt(t))>=9&W<=25&&(Q=W));(bt=0==ht.length?0:6,O=1,"0"==(t=Et("buttonbar"))?(O=0,Q=0,bt=0):"1"==t?O=1:"2"!=t&&0!=ht.length||(O=2,bt=0),t=Et("edit"),M="0"!=t,t=Et("repeat"),p="0"!=t,t=Et("clickprogress"),k="0"!=t,t=Et("movetext"),Z="1"==t?1:0,H=1,"0"==(t=Et("movetextspace"))&&(H=0),null!=(t=Et("textsize")))&&((W=parseInt(t))>=5&W<=40&&(Mt=W));(t=Et("fonttype"),pt=null==t||"1"==t,q=0,null!=(t=Et("metric"))&&("1"==t?q=1:"2"==t?q=2:"3"==t&&(q=3)),F=1,null!=(t=Et("align")))&&((W=parseInt(t))>=0&W<=3&&(F=W),W>=3&W<=99&&(F=W/100));if(null!=(t=Et("snap"))&&"1"==t&&(kt=!0),2!=wt)for(u=0;u<6;u++)for(c=0;c<4;c++)V[u][c]=j[u][c],$[u][c]=J[u][c];for(u=0;u<3;u++)it[u]=at[u],ut[u]=ft[u],ct[u]=lt[u];Nr(e)<128?(n="white",r=function(t){"#"!=t.substring(0,1)&&(t=Qr(t));var e=parseInt(t.substring(1,3),16),r=parseInt(t.substring(3,5),16),n=parseInt(t.substring(5,7),16);return e=Math.floor(1.3*e),r=Math.floor(1.3*r),n=Math.floor(1.3*n),Dr(e>255?255:e,r>255?255:r,n>255?255:n)}(e)):(n="black",r=Zr(e)),l=Nr(o)<128?"white":"black",a=n,null!=(t=Et("slidercolor"))&&6==t.length&&Er(t)&&(a="#"+t),f=Zr(e),null!=(t=Et("sliderbgcolor"))&&6==t.length&&Er(t)&&(f="#"+t),null!=(t=Et("troughcolor"))&&6==t.length&&Er(t)&&(f="#"+t),i="black",null!=(t=Et("cubecolor"))&&6==t.length&&Er(t)&&(i="#"+t),U=1,"0"==(t=Et("counter"))&&(U=0),z=ht.length>0&&ht[0][0]>=1e3?0:-1,nn=rn.getContext("2d"),ln=Q,un=bt,cn=Mt,Mn(),sn.appendChild(rn),rr(),A&&Vt(-1)}function Et(t){var e=kn[t];return void 0===e?G[t]:e}function Bt(t){cr[0][0]=cr[0][1]=cr[1][1]=cr[3][0]=t,cr[1][0]=cr[2][0]=cr[2][1]=cr[3][1]=1-t}var It=[0,0,0,0,0,0,1,1,1,3,3,3,3,3,3,2,2,2,2,2,2],Ut=[0,1,2,3,4,5,1,2,4,5,2,0,5,2,0,0,1,2,3,4,5];function Pt(t,e){if(e){for(var r=t.indexOf("{");-1!=r;)r=t.indexOf("{",r+1);if(null==dt)z=0,dt=[];else{for(var n=[],o=0;o<dt.length;o++)n[o]=dt[o];z=dt.length,dt=n}}var a=1;for(r=t.indexOf(";");-1!=r;)a++,r=t.indexOf(";",r+1);var f=[],l=0;for(r=t.indexOf(";"),a=0;-1!=r;)f[a++]=Wt(t.substring(l,r),e),l=r+1,r=t.indexOf(";",l);return f[a]=Wt(t.substring(l),e),f}var Ct=["m","t","c","s","a"];function Wt(t,e){for(var r=0,n=[],o=0;o<t.length;o++)if("."==t.charAt(o))n[r]=-1,r++;else if("{"==t.charAt(o)){o++;for(var a="";o<t.length&&"}"!=t.charAt(o);)e&&(a+=t.charAt(o)),o++;e&&(dt[z]=a,n[r]=1e3+z,z++,r++)}else for(var f=0;f<21;f++)if(t.charAt(o)=="UDFBLRESMXYZxyzudfblr".charAt(f)){o++;var l=It[f];if(n[r]=24*Ut[f],o<t.length&&0==It[f])for(var i=0;i<Ct.length;i++)if(t.charAt(o)==Ct[i]){l=i+1,o++;break}n[r]+=4*l,o<t.length&&("1"==t.charAt(o)?o++:"'"==t.charAt(o)||"3"==t.charAt(o)?(n[r]+=2,o++):"2"==t.charAt(o)&&(++o<t.length&&"'"==t.charAt(o)?(n[r]+=3,o++):n[r]+=1)),r++,o--;break}var u=[];for(o=0;o<r;o++)u[o]=n[o];return u}function Xt(t,e,r){if(e>=t.length)return"";for(var n="",o=e;o<r;o++){var a=zt(t,o);""!=a&&(n+=a+(H?" ":""))}return n}var Yt=[[["U","D","F","B","L","R"],["Um","Dm","Fm","Bm","Lm","Rm"],["Ut","Dt","Ft","Bt","Lt","Rt"],["Uc","Dc","Fc","Bc","Lc","Rc"],["Us","Ds","Fs","Bs","Ls","Rs"],["Ua","Da","Fa","Ba","La","Ra"]],[["U","D","F","B","L","R"],["~E","E","S","~S","M","~M"],["u","d","f","b","l","r"],["Z","~Z","Y","~Y","~X","X"],["Us","Ds","Fs","Bs","Ls","Rs"],["Ua","Da","Fa","Ba","La","Ra"]],[["U","D","F","B","L","R"],["~E","E","S","~S","M","~M"],["u","d","f","b","l","r"],["Y","~Y","Z","~Z","~X","X"],["Us","Ds","Fs","Bs","Ls","Rs"],["Ua","Da","Fa","Ba","La","Ra"]],[["U","D","F","B","L","R"],["u","d","f","b","l","r"],["Uu","Dd","Ff","Bb","Ll","Rr"],["QU","QD","QF","QB","QL","QR"],["UD'","DU'","FB'","BF'","LR'","RL'"],["UD","DU","FB","BF","LR","RL"]],[["U","D","F","B","L","R"],["~E","E","S","~S","M","~M"],["u","d","f","b","l","r"],["y","~y","z","~z","~x","x"],["Us","Ds","Fs","Bs","Ls","Rs"],["Ua","Da","Fa","Ba","La","Ra"]]],qt=["","2","'","2'"];function zt(t,e){if(e>=t.length)return"";if(t[e]>=1e3)return"";if(-1==t[e])return".";var r=Yt[Z-1][Math.floor(t[e]/4)%6][Math.floor(t[e]/24)];return"~"==r.charAt(0)?r.substring(1)+qt[(t[e]+2)%4]:r+qt[t[e]%4]}var Ot=["","q","h","s"];function Qt(t){for(var e=0,r=0;r<t.length;r++)t[r]<1e3&&e++;return e}function Nt(t,e){for(var r=0,n=0;;){for(;r<t.length&&t[r]>=1e3;)r++;if(n==e)break;r<t.length&&(n++,r++)}return r}function Zt(t,e){for(var r=0,n=0;n<t.length&&(n<e||e<0);n++)r+=Ht(t[n]);return r}function Ht(t){if(t<0||t>=1e3)return 0;var e=t%4,r=Math.floor(t/4)%6,n=1;switch(q){case 1:1!=e&&3!=e||(n*=2);case 2:1!=r&&4!=r&&5!=r||(n*=2);case 3:3==r&&(n=0),3!=q||4!=r&&5!=r||(n*=2)}return n}function Gt(t){z=t.length>0&&t[0]>=1e3?t[0]-1e3:-1}function Kt(t,e,r,n,o){for(var a=o?r+n:r;;){if(o){if(a<=r)break;a--}if(e[a]>=1e3)z=o?-1:e[a]-1e3;else if(e[a]>=0){var f=e[a]%4+1,l=Math.floor(e[a]/4)%6;4==f&&(f=2),o&&(f=4-f),le(t,Math.floor(e[a]/24),f,l)}if(!o&&++a>=r+n)break}}var jt=0,Jt=0;function Vt(t){if($t(),(A||0!=ht.length&&0!=ht[P].length)&&(!A||0!=vt.length&&0!=vt[0].length)){switch(W=1,X=!1,Y=!0,t){case 0:break;case 1:W=-1;break;case 2:X=!0;break;case 3:W=-1,X=!0;break;case 4:Y=!1}Hr(jt++,W)}}function $t(){1==w&&(m=!0)}function _t(){C=0,ht.length>0&&Gt(ht[P]),st=!0,b=!1;for(var t=0;t<6;t++)for(var e=0;e<4;e++)j[t][e]=V[t][e],J[t][e]=$[t][e];wt>0&&(ht=Pt(pn(2,Tt),!1)),2==wt&&Kt(j,ht[0],0,ht[0].length,!0);for(t=0;t<3;t++)at[t]=it[t],ft[t]=ut[t],lt[t]=ct[t]}var te=[[[0,2],[0,2]],[[0,2],[0,2]],[[0,2],[0,2]],[[0,2],[0,2]],[[0,2],[0,2]],[[0,2],[0,2]]],ee=[],re=[],ne=[[[0,0],[0,0]],[[0,2],[0,2]],[[0,2],[0,1]],[[0,1],[0,2]],[[0,2],[1,2]],[[1,2],[0,2]]],oe=[[1,0,3,3,2,3],[0,1,5,5,4,5],[2,3,1,0,3,2],[4,5,0,1,5,4],[3,2,2,4,1,0],[5,4,4,2,0,1]],ae=[[0,1,5,5,4,5],[1,0,3,3,2,3],[4,5,0,1,5,4],[2,3,1,0,3,2],[5,4,4,2,0,1],[3,2,2,4,1,0]];function fe(t){for(var e=0;e<6;e++)ee[e]=ne[oe[t][e]],re[e]=ne[ae[t][e]];st=!1}function le(t,e,r,n){5==n?ve(t,1^e,4-r):2!=n&&3!=n&&4!=n||ve(t,1^e,r),ve(t,e,4-r)}var ie=[0,1,3,2],ue=[1,2,-1,-2],ce=[0,1,3,2],se=[[3,3,3,0],[2,1,1,1],[3,3,0,0],[2,1,1,2],[3,2,0,0],[2,2,0,1]],he=[];function ve(t,e,r){de(t,e,r),1==Lt&&r>0&&r<4&&(de(J,e,r),function(t,e){for(var r=0;r<4;r++)J[t][r]=(J[t][r]+4-e)%4;4==t&&(we(2,1,3),1==e?we(0,1,1):2==e?we(0,1,2):3==e&&we(0,2,0));5==t&&(we(0,1,3),1==e?we(1,2,0):2==e?we(2,1,2):3==e&&we(2,1,1));2==t&&Te(0,4-e);3==t&&Te(1,e)}(e,r))}function de(t,e,r){for(var n=0;n<4;n++)he[(n+r)%4]=t[e][ie[n]];for(n=0;n<4;n++)t[e][ie[n]]=he[n];var o=2*r;for(n=0;n<4;n++)for(var a=nt[e][n],f=se[e][n],l=ue[f],i=ce[f],u=0;u<2;u++,o++)he[o%8]=t[a][u*l+i];for(n=0,o=0;n<4;n++)for(a=nt[e][n],f=se[e][n],l=ue[f],i=ce[f],u=0;u<2;u++,o++)t[a][u*l+i]=he[o]}var ge,me,be,Me,pe,ke,Le,ye=[[[0,1,0],[0,2,1],[0,2,4],[0,1,5]],[[2,1,0],[1,2,1],[1,2,4],[2,1,5]]];function we(t,e,r){for(var n=t,o=0;o<2;n+=e,o++)J[r][n]=(J[r][n]+2)%4}function Te(t,e){for(var r=0;r<4;r++)for(var n=ye[t][r],o=n[0],a=0;a<2;o+=n[1],a++)J[n[2]][o]=(J[n[2]][o]+e)%4}var Ae,Re,Se=[],Fe=[],De=[],xe=[],Ee=[[[0,0],[2,0],[2,1],[0,1]],[[2,0],[2,2],[1,2],[1,0]],[[2,2],[0,2],[0,1],[2,1]],[[0,2],[0,0],[1,0],[1,2]]],Be=[[1,0],[0,1],[-1,0],[0,-1]],Ie=[[1,1,1,1],[1,1,1,1],[1,-1,1,-1],[1,-1,1,-1],[-1,1,-1,1],[1,-1,1,-1]],Ue=[],Pe=[],Ce=[[[1,0,0],[0,0,0],[0,0,1]],[[1,0,0],[0,1,0],[0,0,0]],[[0,0,0],[0,1,0],[0,0,1]]],We=[[[0,0,1],[0,0,0],[-1,0,0]],[[0,1,0],[-1,0,0],[0,0,0]],[[0,0,0],[0,0,1],[0,-1,0]]],Xe=[[[0,0,0],[0,1,0],[0,0,0]],[[0,0,0],[0,0,0],[0,0,1]],[[1,0,0],[0,0,0],[0,0,0]]],Ye=[1,-1,1,-1,1,-1],qe=[],ze=[],Oe=[],Qe=[],Ne=[],Ze=[],He=[],Ge=[],Ke=[],je=[],Je=[],Ve=[],$e=[[1,0],[1,0],[1,1],[1,1],[1,1],[1,2]],_e=[],tr=[[0,2],[2,1],[2,2],[2,2],[2,2],[2,2]],er=[[0,1],[1,0],[0,1]];function rr(){if(nn.save(),nn.fillStyle=e,1!=O||0!=bt&&!A?(Br(nn,0,0,ge,me),nn.fillRect(0,0,ge,me)):(Br(nn,0,0,ge,me-on),nn.fillRect(0,0,ge,me-on)),Le=0,st)vr(at,ft,lt,te,3);else{for(var t=Math.cos(h+s),n=Math.sin(h+s)*Ye[u],i=0;i<3;i++){qe[i]=0,ze[i]=0;for(var v=0;v<3;v++){var d=Math.floor(u/2);qe[i]+=at[v]*(Xe[d][i][v]+Ce[d][i][v]*t+We[d][i][v]*n),ze[i]+=ft[v]*(Xe[d][i][v]+Ce[d][i][v]*t+We[d][i][v]*n)}}Ar(Oe,qe,ze);var g=Math.cos(h-s),m=Math.sin(h-s)*Ye[u];for(i=0;i<3;i++){Qe[i]=0,Ne[i]=0;for(v=0;v<3;v++){d=Math.floor(u/2);Qe[i]+=at[v]*(Xe[d][i][v]+Ce[d][i][v]*g+We[d][i][v]*m),Ne[i]+=ft[v]*(Xe[d][i][v]+Ce[d][i][v]*g+We[d][i][v]*m)}}Ar(Ze,Qe,Ne),je[0]=at,Je[0]=ft,Ve[0]=lt,je[1]=qe,Je[1]=ze,Ve[1]=Oe,je[2]=Qe,Je[2]=Ne,Ve[2]=Ze,_e[0]=ee,_e[1]=re,Tr(Lr(pr(He,at),5+R),Lr(pr(Ke,_[u]),1/3)),Tr(Lr(pr(Ge,at),5+R),Lr(pr(Ke,_[1^u]),1/3));var b,M=yr(He,_[u]),p=yr(Ge,_[1^u]);vr(je[$e[c][er[b=M<0&&p>0?0:M>0&&p<0?1:2][0]]],Je[$e[c][er[b][0]]],Ve[$e[c][er[b][0]]],_e[er[b][0]],tr[c][er[b][0]]),vr(je[$e[c][er[b][1]]],Je[$e[c][er[b][1]]],Ve[$e[c][er[b][1]]],_e[er[b][1]],tr[c][er[b][1]])}if(N||w||(mt=-1),!(wt>0&&2==O)){if(!A&&ht.length>0){if(ht[P].length>0){if(bt>0){nn.lineWidth=fn,nn.strokeStyle=l;var k=(ge-2)*function(t,e){for(var r=0,n=0;n<e;n++)t[n]<1e3&&r++;return r}(ht[P],C)/Qt(ht[P]);nn.fillStyle=f,nn.fillRect(an,me-bt-an,ge-on,bt),nn.fillStyle=a,nn.fillRect(an,me-bt-an,k,bt),nn.beginPath(),nn.rect(an,me-bt-an,ge-on,bt),nn.stroke()}var L=Zt(ht[P],C)+"/"+Zt(ht[P],-1)+Ot[q];nn.font="bold "+Mt+"px helvetica";var y=nn.measureText(L).width,T=ge-y-2,S=me-bt-Math.floor(4*on);Z>0?(U&&br(nn,L,pt?T-on:T,S-Mt),function(t,e){var n=0==C?Nt(ht[P],C):C,o=Xt(ht[P],0,n),a=zt(ht[P],n),f=Xt(ht[P],n+1,ht[P].length);H&&(""==a&&(o=o.substr(0,o.length-1)),""!=f&&(f=" "+f.substr(0,f.length-1)));var l=t.measureText(o).width,i=t.measureText(a).width,u=t.measureText(f).width,c=1;c+l+i+u>ge&&(c=Math.min(1,ge/2-l-i/2),c=Math.max(c,ge-l-i-u-2));i>0&&(t.fillStyle=r,t.lineWidth=2,t.strokeStyle="black",t.beginPath(),cn<=14?t.fillRect(c+l-1,me-bt-Mt-Math.floor(4*on),i+2,Mt+Math.floor(3*on)):t.fillRect(c+l-1,me-bt-Mt-Math.floor(2*on),i+2,Mt+Math.floor(on)));l>0&&br(t,o,c,e);i>0&&br(t,a,c+l,e);u>0&&br(t,f,c+l+i,e)}(nn,S)):U&&br(nn,L,pt?T-on:T,S)}if(ht.length>1){L=P+1+"/"+ht.length,y=nn.measureText(L).width,T=ge-y-Q-Math.floor(5*on);br(nn,L,T,nr()),Ur(nn,7,ge-Q/2,Q/2)}}z>=0&&(nn.font="bold "+Mt+"px helvetica",br(nn,dt[z],pt?on:0,nr()))}nn.restore(),gt&&0!=O&&function(t){var e=Q%2==0?1:0;if(e+=Math.floor(on+.5)-1,2==O)return t.fillStyle=0==mt||wt>0&&6==mt?Zr(o):o,t.fillRect(an,me-Q,Q,Q),t.lineWidth=fn,t.strokeStyle=l,t.beginPath(),t.rect(an,me-Q-an,Q,Q),t.stroke(),void Ur(t,0,Q/2,me-(Q+1)/2-e);if(1==O){for(var r=0,n=0;n<7;n++){var a=Math.floor((ge-r)/(7-n));t.fillStyle=mt==n?Zr(o):o,t.fillRect(r,me,a,Q),t.lineWidth=fn,t.strokeStyle=l,t.beginPath(),0==n?t.rect(r+an,me-an,a-on,Q):t.rect(r-an,me-an,a,Q),t.stroke(),t.strokeStyle="black",Ur(t,n,r+a/2,me+Q/2-e),r+=a}gt=!1}}(nn)}function nr(){return cn<10?Math.floor(10*on):cn<12?Math.floor(12*on):cn<14?Math.floor(14*on):Mt}var or=[],ar=[],fr=[],lr=[],ir=[[],[],[],[],[],[]],ur=[[],[],[],[],[],[]],cr=[[.1,.1],[.9,.1],[.9,.9],[.1,.9]],sr=[[0,0],[0,1],[1,1],[1,0]],hr=[];function vr(t,e,r,n,o){for(var a=0;a<8;a++){var f=(s=ge<me?ge:me-bt)/3.7*yr(tt[a],e)*S,l=s/3.7*yr(tt[a],r)*S;f/=1-(h=s/(5+R)*yr(tt[a],t)*S)/s,l/=1-h/s,fr[a]=ge/2+f,lr[a]=0==F?(me-bt)/2*S-l:1==F?(me-bt)/2-l:2==F?me-bt-(me-bt)/2*S-l:(me-bt)*(F*(1-S)+S/2)-l}for(a=0;a<6;a++)for(var c=0;c<4;c++)ir[a][c]=fr[et[a][c]],ur[a][c]=lr[et[a][c]];if(D)for(a=0;a<6;a++)if(Tr(Lr(pr(He,t),5+R),_[a]),yr(He,_[a])<0){Lr(pr(hr,_[a]),x);var s,h;f=(s=ge<me?ge:me-bt)/E*yr(hr,e),l=s/B*yr(hr,r);f/=1-(h=s/(5+R)*yr(hr,t))/s,l/=1-h/s;var v=n[a][0][1]-n[a][0][0],d=n[a][1][1]-n[a][1][0];if(v>0&&d>0)for(var g=0,m=n[a][1][0];g<d;g++,m++)for(var p=0,k=n[a][0][0];p<v;p++,k++){for(c=0;c<4;c++)dr(a,c,or,ar,k+cr[c][0],m+cr[c][1],b),or[c]=Math.floor(or[c]+(b?-f:f)),ar[c]=Math.floor(ar[c]-l);1==Lt?(Xr(nn,or,ar,"#fdfdfd"),Wr(nn,or,ar,I?Zr("#fdfdfd"):"#fdfdfd"),Or(nn,or,ar,a,J[a][2*m+k],K[j[a][2*m+k]])):(Xr(nn,or,ar,K[j[a][2*m+k]]),Wr(nn,or,ar,I?Zr(K[j[a][2*m+k]]):K[j[a][2*m+k]]))}}for(a=0;a<6;a++){v=n[a][0][1]-n[a][0][0],d=n[a][1][1]-n[a][1][0];if(v<=0||d<=0){for(c=0;c<4;c++){var L=rt[a][c];or[c]=Math.floor(ir[a][c]+1*(ir[1^a][L]-ir[a][c])/2),ar[c]=Math.floor(ur[a][c]+1*(ur[1^a][L]-ur[a][c])/2),b&&(or[c]=ge-or[c])}Xr(nn,or,ar,i)}else{for(c=0;c<4;c++)dr(a,c,or,ar,n[a][0][sr[c][0]],n[a][1][sr[c][1]],b);Xr(nn,or,ar,i)}}for(a=0;a<6;a++)if(Tr(Lr(pr(He,t),5+R),_[a]),yr(He,_[a])>0){v=n[a][0][1]-n[a][0][0],d=n[a][1][1]-n[a][1][0];if(v>0&&d>0)for(g=0,m=n[a][1][0];g<d;g++,m++)for(p=0,k=n[a][0][0];p<v;p++,k++){for(c=0;c<4;c++)dr(a,c,or,ar,k+cr[c][0],m+cr[c][1],b);1==Lt?(Wr(nn,or,ar,"#fdfdfd"),Xr(nn,or,ar,"#fdfdfd"),Or(nn,or,ar,a,J[a][2*m+k],K[j[a][2*m+k]])):(Wr(nn,or,ar,K[j[a][2*m+k]]),Xr(nn,or,ar,K[j[a][2*m+k]]))}if(!M||w)continue;var y=(ir[a][1]-ir[a][0]+ir[a][2]-ir[a][3])/6,T=(ir[a][3]-ir[a][0]+ir[a][2]-ir[a][1])/6,A=(ur[a][1]-ur[a][0]+ur[a][2]-ur[a][3])/6,U=(ur[a][3]-ur[a][0]+ur[a][2]-ur[a][1])/6;if(3==o)for(c=0;c<4;c++){for(L=0;L<4;L++)dr(a,L,Se[Le],Fe[Le],Ee[c][L][0],Ee[c][L][1],!1);if(De[Le]=(y*Be[c][0]+A*Be[c][1])*Ie[a][c],xe[Le]=(T*Be[c][0]+U*Be[c][1])*Ie[a][c],Ue[Le]=nt[a][c%4],Pe[Le]=Math.floor(c/4),12==++Le)break}else if(0==o&&a!=u&&v>0&&d>0){for(c=2==v?0==n[a][1][0]?0:2:0==n[a][0][0]?3:1,L=0;L<4;L++)dr(a,L,Se[Le],Fe[Le],Ee[c][L][0],Ee[c][L][1],!1);De[Le]=(y*Be[c][0]+A*Be[c][1])*Ie[a][c],xe[Le]=(T*Be[c][0]+U*Be[c][1])*Ie[a][c],Ue[Le]=u,Pe[Le]=0,Le++}}}function dr(t,e,r,n,o,a,f){o/=2,a/=2;var l=ir[t][0]+(ir[t][1]-ir[t][0])*o,i=ur[t][0]+(ur[t][1]-ur[t][0])*o,u=ir[t][3]+(ir[t][2]-ir[t][3])*o,c=ur[t][3]+(ur[t][2]-ur[t][3])*o;r[e]=Math.floor(.5+l+(u-l)*a),n[e]=Math.floor(.5+i+(c-i)*a),f&&(r[e]=ge-r[e])}var gr=[1,1,-1,-1,-1,1,1,-1,-1,0,1,0,0,1,0,-1],mr=[];function br(t,e,r,o){if(pt){t.fillStyle="black";for(var a=0;a<mr.length;a+=2)t.fillText(e,r+mr[a],o+mr[a+1]);t.fillStyle="white"}else t.fillStyle=n;t.fillText(e,r,o)}var Mr=[-1,3,1,-1,0,2,4,-1];function pr(t,e){return t[0]=e[0],t[1]=e[1],t[2]=e[2],t}function kr(t){var e=Math.sqrt(yr(t,t));return t[0]/=e,t[1]/=e,t[2]/=e,t}function Lr(t,e){return t[0]*=e,t[1]*=e,t[2]*=e,t}function yr(t,e){return t[0]*e[0]+t[1]*e[1]+t[2]*e[2]}function wr(t,e){return t[0]+=e[0],t[1]+=e[1],t[2]+=e[2],t}function Tr(t,e){return t[0]-=e[0],t[1]-=e[1],t[2]-=e[2],t}function Ar(t,e,r){return t[0]=e[1]*r[2]-e[2]*r[1],t[1]=e[2]*r[0]-e[0]*r[2],t[2]=e[0]*r[1]-e[1]*r[0],t}function Rr(t,e){var r=Math.sin(e),n=Math.cos(e),o=t[1]*n-t[2]*r,a=t[1]*r+t[2]*n;return t[1]=o,t[2]=a,t}function Sr(t,e){var r=Math.sin(e),n=Math.cos(e),o=t[0]*n-t[2]*r,a=t[0]*r+t[2]*n;return t[0]=o,t[2]=a,t}function Fr(t,e){var r=Math.sin(e),n=Math.cos(e),o=t[0]*n-t[1]*r,a=t[0]*r+t[1]*n;return t[0]=o,t[1]=a,t}function Dr(t,e,r){return"#"+xr(t.toString(16))+xr(e.toString(16))+xr(r.toString(16))}function xr(t){return("00"+t).substring(t.length)}function Er(t){for(var e=0,r=0;r<6;r++)for(var n=0;n<16;n++)if(t[r].toLowerCase()=="0123456789abcdef".charAt(n)){e++;break}return 6==e}function Br(t,e,r,n,o){t.beginPath(),t.moveTo(e,r),t.lineTo(e+n,r),t.lineTo(e+n,r+o),t.lineTo(e,r+o),t.lineTo(e,r),t.closePath(),t.clip()}var Ir=[];function Ur(t,e,r,n){switch(r=Math.floor(r),n=Math.floor(n),e){case 0:Cr(t,r-Ir[4],n-Ir[3],Ir[3],Ir[6]+1),Pr(t,r+Ir[4],n,-1);break;case 1:Cr(t,r+Ir[1],n-Ir[3],Ir[3],Ir[6]+1),Pr(t,r-Ir[1],n,-1);break;case 2:Pr(t,r+Ir[1],n,-1);break;case 3:w?Cr(t,r-Ir[4],n-Ir[3],Ir[7],Ir[7]):(Cr(t,r-Ir[4],n-Ir[2],Ir[7],Ir[5]),Cr(t,r-Ir[2],n-Ir[4],Ir[3],Ir[9]));break;case 4:Pr(t,r-Ir[2],n,1);break;case 5:Cr(t,r-Ir[4],n-Ir[3],Ir[3],Ir[6]+1),Pr(t,r,n,1);break;case 6:Cr(t,r+Ir[1],n-Ir[3],Ir[3],Ir[6]+1),Pr(t,r-Ir[4],n,1);break;case 7:t.fillStyle=7==mt?Zr(o):o,t.fillRect(ge-Q-Ir[1]-an,Ir[1]+an,Q,Q),t.lineWidth=fn,t.strokeStyle=l,t.beginPath(),on%2==0?t.rect(ge-Q-Ir[1],Ir[1],Q,Q):t.rect(ge-Q-Ir[1]-an,Ir[1]+an,Q,Q),t.stroke(),Pr(t,r-Ir[3],n+Ir[1],1)}}function Pr(t,e,r,n){var o=3*on,a=[],f=[];a[0]=e,a[1]=e+n,a[2]=e+4*on*n,a[3]=e+n,a[4]=e,f[0]=r-o,f[1]=r-o,f[2]=r,f[3]=r+o,f[4]=r+o,function(t,e,r){t.beginPath(),t.moveTo(e[0]+an,r[0]+an);for(var n=1;n<5;n++)t.lineTo(e[n]+an,r[n]+an);t.closePath(),t.fillStyle="white",t.strokeStyle="black",t.fill(),t.lineWidth=fn,t.stroke()}(t,a,f)}function Cr(t,e,r,n,o){t.lineWidth=fn,t.beginPath(),t.rect(e+an,r+an,n-1,o-1),t.fillStyle="white",t.fill(),t.strokeStyle="black",t.stroke()}function Wr(t,e,r,n){t.beginPath(),t.moveTo(e[0],r[0]),t.lineTo(e[1],r[1]),t.lineTo(e[2],r[2]),t.lineTo(e[3],r[3]),t.closePath(),t.strokeStyle=n,t.lineWidth=.7*on,t.stroke()}function Xr(t,e,r,n){t.beginPath(),t.moveTo(e[0],r[0]),t.lineTo(e[1],r[1]),t.lineTo(e[2],r[2]),t.lineTo(e[3],r[3]),t.closePath(),t.fillStyle=n,t.fill()}var Yr,qr,zr=[[0,1,2,3],[3,0,1,2],[2,3,0,1],[1,2,3,0]];function Or(t,e,r,n,o,a){var f=[],l=[];if(2!=At||"#ffffff"!=a){for(var i=0;i<4;i++)f[i]=Math.floor(e[i]+.05*(e[zr[2][i]]-e[i])),l[i]=Math.floor(r[i]+.05*(r[zr[2][i]]-r[i]));0==n&&(o=(o+1)%4),4==n&&(o=(o+3)%4);var u=zr[o][0],c=zr[o][1],s=zr[o][2],h=zr[o][3],v=.26*(f[s]-f[c]),d=.26*(l[s]-l[c]),g=(f[u]-f[c])/2,m=l[c]+(l[u]-l[c])/2,b=l[s]+(l[h]-l[s])/2,M=(f[h]-f[s])/2,p=1^o;t.fillStyle=a,t.beginPath(),t.moveTo(f[u]+(f[h]-f[u])/2,l[u]+(l[h]-l[u])/2),t.lineTo(f[p]+g,m),t.lineTo(f[p]+v+g,m+d),t.lineTo(f[p]+v,l[p]+d),p=(p+1)%4,t.lineTo(f[p]-v,l[p]-d),t.lineTo(f[p]-v+M,b-d),t.lineTo(f[p]+M,b),t.closePath(),t.fill(),t.lineWidth=.6*on,t.strokeStyle="black",t.stroke()}}function Qr(t){return"white"==t?"#FFFFFF":"black"==t?"#000000":"#808080"}function Nr(t){return"#"!=t.substring(0,1)&&(t=Qr(t)),(299*parseInt(t.substring(1,3),16)+587*parseInt(t.substring(3,5),16)+114*parseInt(t.substring(5,7),16))/1e3}function Zr(t){"#"!=t.substring(0,1)&&(t=Qr(t));var e=parseInt(t.substring(1,3),16),r=parseInt(t.substring(3,5),16),n=parseInt(t.substring(5,7),16);return Dr(e=Math.floor(.7*e),r=Math.floor(.7*r),n=Math.floor(.7*n))}function Hr(t,e){if(t>Jt)setTimeout(Hr,0,t,e);else{if(!Y){for(var r=ht[P];C<r.length;){if(r[C]>=1e3)z=r[C]-1e3;else if(-1!=r[C]){var n=r[C]%4+1,o=Math.floor(r[C]/4)%6,a=Math.floor(r[C]/24);le(j,a,4==n?2:n,o)}C++}return w=!1,gt=!0,rr(),void Jt++}var f,l,i,g,b,M,k=e;!1,requestAnimationFrame((function t(){if(R){if(R=!1,M=!1,p)k>0?C>=r.length&&(C=0,Gt(r)):(z=-1,0==C&&(C=r.length));else if(k>0&&C>=r.length||k<0&&0==C)return m=!1,w=!1,Jt++,gt=!0,void rr();w=!0,gt=!0}if(S&&(S=!1,k<0&&(x=!1,0==C?(x=!0,D=!0):C--),!x)){if(T=!1,-1==r[C]){if(rr(),!X)for(f=Date.now();Date.now()-f<1e3;);}else r[C]>=1e3?z=k>0?r[C]-1e3:-1:T=!0;if(T){n=r[C]%4+1,o=Math.floor(r[C]/4)%6;var e=n<3;if(4==n&&(n=2),k<0&&(e=!e,n=4-n),a=Math.floor(r[C]/24),L=!1,st=!0,y=!0,h=0,ot[a]>0&&(e=!e),Y){b=Math.PI/2,g=e?1:-1;var E=67*v;2==n&&(b=Math.PI,E=67*d),L=!0,u=a,c=o,fe(a),f=Date.now(),l=f,i=g*b/E,s=0}}else F=!0}if(!x&&(T&&(Y&&s*g<b?(rr(),m&&(F=!0),l=Date.now(),s=i*(l-f)):F=!0),F)){if(F=!1,S=!0,T&&(s=0,L=!1,st=!0,le(j,a,n,o),y=!1,Y&&rr(),X&&(M=!0)),k>0){if(++C<r.length&&r[C]>=1e3&&(z=r[C]-1e3,C++),C==r.length)if(A){C=0,Gt(r);for(var B=0;B<6;B++)for(var I=0;I<4;I++)j[B][I]=V[B][I],J[B][I]=$[B][I]}else D=!0}else z=-1;(m||M)&&(D=!0)}if(D)return D=!1,R=!0,jt<=Jt+1&&(w=!1),gt=!0,0==mt&&_t(),rr(),A&&(_t(),A=!1),m=!1,Jt++,void(1==C&&r[0]>=1e3&&C--);requestAnimationFrame(t)}));var T=!1,R=!0,S=!0,F=!1,D=!1,x=!1;r=A?vt[0]:ht[P]}}document.addEventListener("touchstart",_r),document.addEventListener("touchmove",vn),document.addEventListener("touchend",$r),document.addEventListener("mousedown",_r),document.addEventListener("mousemove",vn),document.addEventListener("mouseup",$r),document.addEventListener("contextmenu",mn);var Gr=!1,Kr=!0,jr=document.getElementsByTagName("div"),Jr=jr.length>0&&"wrap"==jr[0].className;function Vr(t){Jr?jr[0].style.overflow=t:document.body.style.overflow=t}function $r(t){if(Gr&&void 0!==t.touches&&(t.preventDefault(),Vr("auto")),Gr?setTimeout((function(){Kr=!0}),100):Kr=!0,Gr=!1,T=!1,N)N=!1,gt=!0,rr();else if(L&&!y){L=!1,h+=s,s=0;for(var e=h;e<0;)e+=32*Math.PI;var r=Math.floor(8*e/Math.PI)%16;(kt||r%4==0||r%4==3)&&(r=Math.floor((r+2)/4),ot[u]>0&&(r=(4-r)%4),h=0,st=!0,le(j,u,r,c)),rr()}}function _r(t){var e=rn.getBoundingClientRect(),r=Math.floor(e.left),n=Math.floor(e.top);if(void 0===t.touches)var o=t.clientX,a=t.clientY;else o=t.touches[0].clientX,a=t.touches[0].clientY;o<r||o>r+ge/on||a<n||a>n+(me+Q)/on||(t.preventDefault(),Gr=!0,Kr=!1,void 0!==t.touches&&(t.preventDefault(),Vr("hidden")),Yr=r,qr=n,pe=be=dn(t),ke=Me=gn(t),g=!1,mt=function(t,e){if(0==O)return-1;if(ht.length>1&&t>=ge-Q&&t<ge&&e>=0&&e<Q)return 7;if(2==O)return t>=0&&t<Q&&e>=me-Q&&e<me?0:-1;if(e<me)return-1;for(var r=0,n=0;n<7;n++){var o=(ge-r)/(7-n);if(t>=r&&t<r+o&&e>=me&&e<me+Q)return n;r+=o}return-1}(be,Me),mt>=0?(N=!0,3==mt?w?$t():b=!b:0==mt?wt>0&&2==O?1==yt?(yt=!1,$t(),_t()):(yt=!0,Vt(Mr[mt=6])):($t(),_t()):7==mt?($t(),setTimeout(_t,10),P=P<ht.length-1?P+1:0):Vt(Mr[mt]),gt=!0,rr()):bt>0&&ht.length>0&&ht[P].length>0&&Me>me-bt&&Me<=me?k&&($t(),tn(jt++)):(b&&(pe=be=ge-be),void 0===t.touches?!M||w||0!=t.button||t.shiftKey||(g=!0):M&&!w&&(g=!0)))}function tn(t){if(t>Jt)setTimeout(tn,0,t);else{var e=Qt(ht[P]),r=Math.floor(((be-1)*e*2/(ge-2)+1)/2);(r=Math.max(0,Math.min(e,r)))>0&&(r=Nt(ht[P],r)),r>C&&Kt(j,ht[P],C,r-C,!1),r<C&&Kt(j,ht[P],r,C-r,!0),C=r,T=!0,rr(),w=!1,Jt++}}var en,rn,nn,on,an,fn,ln,un,cn,sn,hn=[];function vn(t){if(Gr&&!N){if(T){$t();var e=Qt(ht[P]),r=Math.floor(((dn(t)-1)*e*2/(ge-2)+1)/2);return(r=Math.max(0,Math.min(e,r)))>0&&(r=Nt(ht[P],r)),r>C&&Kt(j,ht[P],C,r-C,!1),r<C&&Kt(j,ht[P],r,C-r,!0),C=r,void rr()}var n=b?ge-dn(t):dn(t),o=gn(t),a=n-be,f=o-Me;if(M&&g&&!L&&!w){pe=n,ke=o;for(var l=0;l<Le;l++){var i=Se[l][0],h=Se[l][1]-i,v=Se[l][3]-i,d=Fe[l][0],m=Fe[l][1]-d,p=Fe[l][3]-d,k=(p*(be-i)-v*(Me-d))/(h*p-v*m),y=(-m*(be-i)+h*(Me-d))/(h*p-v*m);if(k>0&&k<1&&y>0&&y<1){if(a*a+f*f<144)return;if(Ae=De[l],Re=xe[l],Math.abs(Ae*a+Re*f)/Math.sqrt((Ae*Ae+Re*Re)*(a*a+f*f))>.75){L=!0,u=Ue[l],c=Pe[l];break}}}g=!1,be=pe,Me=ke}a=(n-be)/on,f=(o-Me)/on,!L||w?(kr(wr(at,Lr(pr(hn,ft),-.016*a))),kr(Ar(ft,lt,at)),kr(wr(at,Lr(pr(hn,lt),.016*f))),kr(Ar(lt,at,ft)),be=n,Me=o):(st&&fe(u),s=.03*(Ae*a+Re*f)/Math.sqrt(Ae*Ae+Re*Re)),rr()}}function dn(t){return void 0===t.touches?(t.clientX-Yr)*on:(t.touches[0].clientX-Yr)*on}function gn(t){return void 0===t.touches?(t.clientY-qr)*on:(t.touches[0].clientY-qr)*on}function mn(t){Kr||t.preventDefault()}function bn(){clearTimeout(en),en=setTimeout((function(){Mn(),gt=!0,rr()}),20)}function Mn(){me=sn.clientHeight-1,ge=sn.clientWidth-1,rn.style.width=ge+"px",rn.style.height=me+"px",on=devicePixelRatio,an=on/2,me=Math.floor(me*on),ge=Math.floor(ge*on),rn.width=ge,rn.height=me,fn=on,Q=Math.floor(ln*on),bt=Math.floor(un*on),Mt=Math.floor(cn*on);for(var t=1;t<10;t++)Ir[t]=t*on;for(t=0;t<gr.length;t++)mr[t]=gr[t]*on;1==O&&(me-=Q)}function pn(t,e){var r,n,o=["R","L","F","B","U","D"],a=["","m","n"],f=["","2","'"],l=-1,i=-1,u=-1,c="";0==e&&(e=10*t);for(var s=0;s<e;s++){for(;l==i||Math.floor(l/2)==Math.floor(i/2)&&l==u;)l=Math.floor(6*Math.random());u=i,i=l,r=Math.floor(3*Math.random()),t<=3?c+=""+o[l]+f[r]+" ":(n=Math.floor(Math.random()*(t>4?3:2)),5==t&&1==n&&(n=0),c+=""+o[l]+a[n]+f[r]+" ")}return c}window.addEventListener("resize",bn);var kn=[];function Ln(){$t(),document.removeEventListener("mousedown",_r),document.removeEventListener("touchstart",_r),document.removeEventListener("touchmove",vn),document.removeEventListener("touchend",$r),document.removeEventListener("mousedown",_r),document.removeEventListener("mousemove",vn),document.removeEventListener("mouseup",$r),document.removeEventListener("contextmenu",mn),window.removeEventListener("resize",bn)}!function(){rn=document.createElement("canvas"),void 0!==t&&function(){for(var e=t.split("&"),r=0;r<e.length;r++){var n=e[r].split("=");void 0!==n[1]&&(kn[n[0]]=decodeURIComponent(n[1].trim()))}}();var e=Et("id");if(null!=e)(sn=document.getElementById(e)).innerHTML="";else if(null!=document.currentScript)sn=document.currentScript.parentNode;else{var r=document.getElementsByTagName("script"),n=r[r.length-1];sn=n.parentNode}null!=sn.id&&"undefined"!=typeof removeListeners&&(removeListeners[sn.id]=Ln);for(var o=0;o<6;o++)j[o]=[],J[o]=[],V[o]=[],$[o]=[];for(o=0;o<12;o++)Se[o]=[],Fe[o]=[];P=0,h=0,Dt()}()}