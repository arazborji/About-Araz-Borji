const S = window.SPACE;
const nav = [['About','index.html'],['Projects','projects.html'],['Blog','blog.html'],['Now','now.html'],['Guestbook','guestbook.html'],['Search','search.html'],['Vault','vault.html']];

document.body.insertAdjacentHTML('afterbegin', `<header><div class="wrap"><a class="logo" href="https://www.spacex.com/vehicles/starship">SPACE</a><nav>${nav.map(([l,h])=>`<a href="${h}">${l}</a>`).join('')}</nav></div></header>`);




window.esc = s => String(s ?? '').replace(/[&<>"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
window.getRepos = async () => { try { const r = await fetch(`https://api.github.com/users/${S.githubUser}/repos?per_page=100&sort=updated`); return r.ok ? (await r.json()).filter(x => !x.fork) : []; } catch { return []; } };
