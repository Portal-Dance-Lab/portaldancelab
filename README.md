# Portal Dance Lab — Website

Next.js site for portaldancelab.com. Hosted on Vercel. Auto-deploys on every push to `main`.

---

## Editing copy

All site copy lives in `content.js` at the root. Edit there, save, push — Vercel redeploys in ~60 seconds. No CMS needed.

To activate the YouTube video: paste the video ID (the part after `?v=`) into `content.js` → `VIDEO.youtubeId`.

---

## First-time setup (do this once)

### Step 1 — Install dependencies

Open Terminal, navigate to this folder, and run:

```bash
npm install
```

### Step 2 — Test it locally (optional but recommended)

```bash
npm run dev
```

Open http://localhost:3000 — should look exactly like the mockup.

---

## Push to GitHub

### Step 1 — Create a new repo on GitHub

1. Go to github.com and sign in
2. Click the **+** in the top right → **New repository**
3. Name it `portaldancelab` (or `portaldancelab-website`)
4. Set it to **Private**
5. Do NOT initialize with README (you already have one)
6. Click **Create repository**

### Step 2 — Push from Terminal

In Terminal, from inside this `portaldancelab/` folder:

```bash
git init
git add .
git commit -m "Initial commit — PDL homepage"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/portaldancelab.git
git push -u origin main
```

Replace `YOUR_USERNAME` with your GitHub username.

---

## Deploy on Vercel

1. Go to vercel.com and sign in
2. Click **Add New Project**
3. Select **Import Git Repository** → connect your GitHub account if not already connected
4. Find and select the `portaldancelab` repo
5. Leave all settings as-is (Vercel auto-detects Next.js)
6. Click **Deploy**

Vercel will give you a `.vercel.app` preview URL immediately. That's your live site.

---

## Connect portaldancelab.com

1. In your Vercel project, go to **Settings → Domains**
2. Add `portaldancelab.com` and `www.portaldancelab.com`
3. Vercel will show you DNS records to add — two options:
   - **Recommended:** Point your nameservers to Vercel (they handle everything)
   - **Alternative:** Add A record + CNAME at your current domain registrar
4. DNS propagation takes 5–30 minutes

---

## After launch — things to wire up

- [ ] Upload SZN II highlights to YouTube → paste video ID into `content.js → VIDEO.youtubeId`
- [ ] Swap GymMaster booking URL for Jackrabbit once migration is done (June 16) — one line in `content.js → BOOKING_URL`
- [ ] Build inner pages: Programs, Schedule, About, Teams
- [ ] Test on mobile
