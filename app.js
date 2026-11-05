const http = require('http');

const page = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Tejas Gaynar | DevOps Enthusiast</title>
<meta name="description" content="Portfolio of Tejas Gaynar, DevOps enthusiast open to new opportunities.">
<style>
  :root{--bg:#0b1220;--card:#111a2e;--line:#1f2b46;--text:#e6edf7;--muted:#93a1bb;--accent:#38bdf8;--accent2:#818cf8}
  *{box-sizing:border-box;margin:0;padding:0}
  html{scroll-behavior:smooth}
  body{font-family:system-ui,-apple-system,Segoe UI,Roboto,sans-serif;background:var(--bg);color:var(--text);line-height:1.6}
  .wrap{max-width:860px;margin:0 auto;padding:0 22px}
  nav{position:sticky;top:0;background:rgba(11,18,32,.85);backdrop-filter:blur(8px);border-bottom:1px solid var(--line);z-index:10}
  nav .wrap{display:flex;justify-content:space-between;align-items:center;height:60px}
  .logo{font-weight:800;letter-spacing:.5px}
  .logo span{color:var(--accent)}
  nav a{color:var(--muted);text-decoration:none;margin-left:20px;font-size:.95rem}
  nav a:hover{color:var(--accent)}
  .hero{padding:90px 0 60px;text-align:center}
  .badge{display:inline-flex;align-items:center;gap:8px;background:rgba(34,197,94,.12);color:#4ade80;
    border:1px solid rgba(34,197,94,.35);padding:6px 14px;border-radius:999px;font-size:.85rem;font-weight:600}
  .dot{width:8px;height:8px;border-radius:50%;background:#22c55e;animation:pulse 1.6s infinite}
  @keyframes pulse{0%{box-shadow:0 0 0 0 rgba(34,197,94,.6)}100%{box-shadow:0 0 0 10px rgba(34,197,94,0)}}
  .hello{margin-top:26px;color:var(--muted);font-size:1.1rem}
  h1{font-size:clamp(2.4rem,7vw,3.8rem);line-height:1.1;margin:6px 0 12px;
    background:linear-gradient(90deg,var(--accent),var(--accent2));-webkit-background-clip:text;background-clip:text;color:transparent}
  .role{font-size:1.3rem;font-weight:600}
  .tag{color:var(--muted);max-width:560px;margin:14px auto 30px}
  .btns{display:flex;gap:12px;justify-content:center;flex-wrap:wrap}
  .btn{padding:12px 24px;border-radius:10px;font-weight:600;text-decoration:none;transition:.2s}
  .primary{background:linear-gradient(90deg,var(--accent),var(--accent2));color:#06101f}
  .primary:hover{transform:translateY(-2px);box-shadow:0 8px 24px rgba(56,189,248,.35)}
  .ghost{border:1px solid var(--line);color:var(--text)}
  .ghost:hover{border-color:var(--accent);color:var(--accent)}
  section{padding:50px 0}
  h2{font-size:1.5rem;margin-bottom:6px}
  h2::after{content:"";display:block;width:46px;height:3px;background:var(--accent);margin-top:8px;border-radius:2px}
  .sub{color:var(--muted);margin:14px 0 22px}
  .chips{display:flex;flex-wrap:wrap;gap:10px}
  .chip{background:var(--card);border:1px solid var(--line);padding:9px 16px;border-radius:999px;font-size:.92rem}
  .chip:hover{border-color:var(--accent);color:var(--accent)}
  .flow{display:grid;grid-template-columns:repeat(auto-fit,minmax(150px,1fr));gap:14px;margin-top:20px}
  .box{background:var(--card);border:1px solid var(--line);border-radius:14px;padding:18px;text-align:center}
  .box b{display:block;margin:6px 0 2px}
  .box span{color:var(--muted);font-size:.85rem}
  .ico{font-size:1.6rem}
  .contact{text-align:center;background:var(--card);border:1px solid var(--line);border-radius:20px;padding:40px 22px}
  .contact a.mail{display:inline-block;margin-top:14px;font-size:1.15rem;color:var(--accent);text-decoration:none;font-weight:600;word-break:break-all}
  .contact a.mail:hover{text-decoration:underline}
  footer{text-align:center;color:var(--muted);font-size:.85rem;padding:30px 0 40px}
</style>
</head>
<body>
<nav><div class="wrap">
  <div class="logo">TG<span>.</span>dev</div>
  <div><a href="#about">About</a><a href="#skills">Skills</a><a href="#pipeline">Pipeline</a><a href="#contact">Contact</a></div>
</div></nav>

<header class="hero"><div class="wrap">
  <span class="badge"><span class="dot"></span>Open to new opportunities</span>
  <p class="hello">Hello, I'm</p>
  <h1>Tejas Gaynar</h1>
  <p class="role">DevOps Enthusiast</p>
  <p class="tag">I enjoy automating the path from code to production using CI/CD, containers, and the cloud.</p>
  <div class="btns">
    <a class="btn primary" href="mailto:tejas.gaynar2005@gmail.com">Get in touch</a>
    <a class="btn ghost" href="https://github.com/tejas-gaynar61" target="_blank" rel="noopener">GitHub</a>
  </div>
</div></header>

<section id="about"><div class="wrap">
  <h2>About</h2>
  <p class="sub">I am passionate about DevOps and automation. I build pipelines that test, package, and ship applications without manual steps, and I am always learning new tools. This page itself is deployed by a pipeline.</p>
</div></section>

<section id="skills"><div class="wrap">
  <h2>Skills</h2>
  <p class="sub">Tools I work with</p>
  <div class="chips">
    <span class="chip">CI/CD</span><span class="chip">GitHub Actions</span><span class="chip">Docker</span>
    <span class="chip">AWS EC2</span><span class="chip">Linux</span><span class="chip">Git &amp; GitHub</span>
    <span class="chip">Node.js</span><span class="chip">Bash</span>
  </div>
</div></section>

<section id="pipeline"><div class="wrap">
  <h2>This Page's Pipeline</h2>
  <p class="sub">Every push to main runs this flow automatically.</p>
  <div class="flow">
    <div class="box"><div class="ico">🧪</div><b>Test</b><span>npm test</span></div>
    <div class="box"><div class="ico">🔨</div><b>Build</b><span>Docker image</span></div>
    <div class="box"><div class="ico">🐳</div><b>Push</b><span>DockerHub</span></div>
    <div class="box"><div class="ico">☁️</div><b>Deploy</b><span>AWS EC2</span></div>
  </div>
</div></section>

<section id="contact"><div class="wrap">
  <div class="contact">
    <h2 style="display:inline-block">Let's Work Together</h2>
    <p class="sub">I am open to internships, jobs, and collaborations. Feel free to reach out.</p>
    <a class="mail" href="mailto:tejas.gaynar2005@gmail.com">tejas.gaynar2005@gmail.com</a>
  </div>
</div></section>

<footer>&copy; 2026 Tejas Gaynar &middot; Deployed with GitHub Actions, Docker and AWS EC2</footer>
</body>
</html>`;

function handler(req, res) {
  if (res.writeHead) res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
  res.end(page);
}

if (require.main === module) {
  http.createServer(handler).listen(process.env.PORT || 3000);
}

module.exports = { handler };

