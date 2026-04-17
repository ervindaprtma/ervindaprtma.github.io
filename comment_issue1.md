### 🚀 Progress Update: New Pages, Content System & Learning Roadmap (Phase 6)

Berikut adalah rangkuman penambahan dan perbaikan terbaru sejak komentar sebelumnya:

---

**1. 🔧 Bug Fixes — Profile Icon Visibility (Dark Mode)**
- Identified root cause of invisible icons on `about.html` in dark mode: hardcoded `color: black` in `.profile-item p` and `.profile-item p a` CSS rules was overriding dark mode styles with insufficient specificity.
- Fix applied: added `!important` to all dark mode `.profile-item` overrides in `main.css`, replaced hardcoded `color: black` with `color: inherit` (text) and `color: #0d6efd` (links).
- Icons (`fa-user-circle`, `fa-envelope`, `fa-globe`, `fa-linkedin`, `fa-github`) now render in accent cyan (`#00f2fe`) in dark mode. Fixed invalid CSS `align-items: left` → `align-items: center` and missing `font-size` unit (`14` → `14px`).

---

**2. 📝 Article & Research Page — Full Build (`article_research.html`)**
- Rebuilt from scratch. Replaced "Under Construction" placeholder with a fully functional blog-style listing page.
- **Two sections**: 🔬 Research Notes (top) + ✍️ Articles (below).
- **Card-based grid** layout (1/2/3 columns responsive), accent bar per section type (blue for articles, purple/pink for research).
- **Tag system**: each card has category tags used by the filter and search system.
- **Live search bar** + **filter buttons** (All, Networking, Security, MikroTik, Fortinet, Linux, Monitoring) — fully client-side, no backend required.
- Cards are clickable to full individual pages.

---

**3. 📁 Article & Research Content System**
New folder structure created:

```
content/
├── articles/
│   ├── _template.html                    ← Reusable blank article template
│   └── mikrotik-firewall-deep-dive.html  ← Full article: MikroTik Firewall (Filter/Mangle/Raw)
└── research/
    ├── forti-ioc-threat-feed.html        ← Research note: IOC Threat Feed on FortiGate
    ├── librenms-setup.html               ← Research note: LibreNMS via Docker (300+ node ISP)
    └── sdwan-sla-telegraf.html           ← Research note: SD-WAN SLA → Telegraf → OpenSearch → Grafana
```

Each page features:
- Dark mode compatible styling (inline CSS, consistent with portfolio theme)
- Section headers with left accent bar
- Code blocks (dark terminal style)
- Tables with dark mode overrides
- Callout / warning boxes
- Prev / Next article navigation
- FOIT inline script

---

**4. 🗺️ Learning Roadmap — Full Build (`learning_roadmap.html`)**
- Rebuilt from scratch. Replaced "Under Construction" placeholder with a comprehensive visual career roadmap.
- **Two parallel tracks** running simultaneously:

    **🔐 Security Engineering Track (Phase 0–∞)**
    - Phase 0: Network Engineer Foundation ✅
    - Phase 1: Basic Information Assurance ✅
    - Phase 2: CompTIA Security+ SY0-701 🔵 In Progress
    - Phase 3: Beginner Offensive Security (eJPT, CWSE ✅, CAPT ✅) 🔵 In Progress
    - Phase 4: Security Analyst — CompTIA CySA+ 🟠 Next
    - Phase 5: Purple Team + ISC2 SSCP
    - Phase 6: Cryptography, PKI & ISC2 CCSP
    - Phase 7: GRC — NIST CSF / ISO 27001
    - Phase 8: ISC2 CISSP (8 Domains)
    - Phase 9: CompTIA SecurityX CAS-005
    - Phase ∞: Research, CTF, Bug Bounty — Always Ongoing

    **🌐 Network Engineering & Automation Track (Phase A–F)**
    - Phase A: CCNP ENCOR + ENARSI ✅
    - Phase B: Fortinet NSE 4 → NSE 7 🔵 In Progress
    - Phase C: Palo Alto PCNSA → PCNSE 🟠 Next
    - Phase D: NetDevOps — Python, Ansible, Terraform, NETCONF
    - Phase E: Agentic AI for Networks (LangChain, LLM+SNMP, RAG)
    - Phase F: CCIE Security / Enterprise — Long-term Goal

- **Visual design**: zigzag timeline with gradient vertical line (blue → purple → pink), glowing cards for active phases, status badges (✅ Done / 🔵 Active / 🟠 Next / ⬜ Planned), vendor-branded certification badges (Cisco, Fortinet, Palo Alto, CompTIA, ISC2, Hackviser), scroll animations via AOS.
- Full dark mode support.
