# Clinic Impact Estimator

A lightweight, browser-based tool to estimate the economic impact of safety‑net and community clinics, with a focus on **volunteer clinical time** and **delivered services**. The tool is static (HTML/JS only) and can be hosted on GitHub Pages or any static site host.

---

## Overall objectives

The goal of this project is to give free and charitable clinics, student‑run clinics, and other safety‑net providers a **simple, transparent way to quantify their impact** in dollar terms, without requiring PHI or deep analytics infrastructure.

Most existing “ROI” or cost‑effectiveness models in healthcare:

- Focus on one narrow intervention at a time (e.g., a specific DSME program or telehealth service).
- Require detailed utilization and claims data that small clinics often don’t have.
- Rely on complex assumptions about long‑term cost savings (QALYs, 10–20 year horizons, etc.), which are hard to communicate and compare across many procedure types.

Those models are valuable, but they are **hard to generalize and hard to explain** to clinic leaders, boards, funders, and volunteers.

This MVP uses a more pragmatic, scalable approach:

1. **Value contributed time using volunteer hours by role**  
   - Assign a conservative **hourly replacement cost** to common volunteer roles (unlicensed volunteer, RN, NP/PA, MD/DO).
   - Anchor these hourly values in widely used benchmarks like the Independent Sector national value of volunteer time, scaled up for licensed clinicians.
   - This produces a clear, intuitive number: “Our volunteers contributed \$X worth of clinical and support time last year.”

2. **Value delivered services using Medicare reimbursement rates**  
   - For selected CPT/HCPCS codes (e.g., office visits, DSME codes, lipid panel, mammography, screening colonoscopy), assign an **approximate national Medicare Physician Fee Schedule amount**.
   - Multiply that per‑service rate by the number of services delivered.
   - This treats “impact” as **what Medicare would have paid** for those encounters, which is:
     - Easy to explain,
     - Easy to expand to new CPT codes, and
     - Avoids delicate and heterogeneous assumptions about projected long‑term cost savings for each service.

By focusing on **volunteer time** and **reimbursement proxies**, this project aims to:

- Be **scalable** across many types of clinics and services.
- Stay **PHI‑free** (only aggregate counts and hours).
- Provide a **defensible lower bound** on economic value, while remaining simple enough for non‑technical users and contributors.

---

## What has been done

The current MVP is a single‑page web app (`index.html` + `services-config.js`) with the following features:

- **Two calculation modes**
  - **Volunteer time mode**  
    - User enters hours of volunteer time by role:
      - Unlicensed volunteer  
      - RN  
      - NP/PA  
      - MD/DO  
    - The tool multiplies hours × role‑specific hourly rate (from `VOLUNTEER_ROLES` in `services-config.js`) and reports:
      - Total volunteer hours,
      - Dollar value by role,
      - Total value of donated clinical time.
  - **Medicare reimbursement mode**  
    - User selects services from a dropdown (driven by `SERVICE_CONFIG` in `services-config.js`) and enters counts.
    - Each service maps to a CPT/HCPCS code and an approximate **national non‑facility Medicare rate** (currently placeholder values).
    - The tool multiplies count × rate and reports:
      - Value by service,
      - Total value of all services.

- **Guided, multi‑step flow**
  - Step 1: Clinic information (currently just an optional clinic name).
  - Step 2: Volunteer clinical time (only shown in volunteer mode).
  - Step 3: Clinical services delivered (always shown).
  - Step 4: Impact summary (infographic‑style cards).

- **Infographic‑style output**
  - Hero card with “Estimated annual value” and the selected mode.
  - Card summarizing volunteer time (or a note explaining it’s not included in Medicare mode).
  - Card summarizing clinical services and total value.
  - A small **Medicare assumptions table** listing each selected service, its CPT/HCPCS code, the per‑service rate, and the count used in the calculation.

- **Config‑driven design**
  - All service definitions and rates live in `services-config.js` (`SERVICE_CONFIG`).
  - All volunteer role labels and hourly values live in `services-config.js` (`VOLUNTEER_ROLES`).
  - The main HTML/JS logic reads from these configs; you can add or change services/roles without touching the calculator logic.

- **Static, dependency‑free implementation**
  - Pure HTML, CSS, and vanilla JavaScript.
  - No build step, no backend, no frameworks.
  - Designed to work as a simple static site (e.g., GitHub Pages).

---

## What needs to be done

This is an MVP intended to be iterated on. Key next steps for contributors:

### 1. Refine and validate hourly volunteer value estimates

- **Review and update role‑specific rates** in `VOLUNTEER_ROLES`:
  - Confirm the national volunteer rate used (e.g., 36.14 USD/hour from Independent Sector) and document the year.
  - Decide on clear multipliers for RN, NP/PA, and MD/DO (e.g., based on BLS wage ratios or nonprofit guidance for “skilled volunteers”).
- **Document the rationale** in the README and on the site:
  - Link to Independent Sector’s “Value of Volunteer Time” and methodology.
  - Link to one or two nonprofit guides for valuing skilled/professional volunteers.

### 2. Refine and validate clinical service reimbursement values

- For each entry in `SERVICE_CONFIG`:
  - Look up the **actual national, non‑facility Medicare Physician Fee Schedule rate** for a chosen year (e.g., 2026) using the CMS PFS lookup tool.
  - Replace placeholder `medicareNatRate` values with real figures.
  - Optionally, record the year and source (e.g., comment or additional field like `medicareYear: 2026`).
- Consider whether to:
  - Standardize on a **single reference year** (e.g., “all rates are 2026 national rates”).
  - Or support a simple switch for “year” later.

### 3. Expand the list of services

- Work with clinic stakeholders to prioritize **additional CPT/HCPCS codes** that matter to free clinics and safety‑net settings, e.g.:
  - Other E/M codes (new patients, telehealth variations).
  - Vaccinations, chronic care management, behavioral health integration.
  - Additional screening and prevention codes.
- Add these to `SERVICE_CONFIG` with:
  - A clear `label`,
  - The `cpt` code,
  - A Medicare national rate,
  - (Optional) a short tag/category for future grouping.

### 4. Improve usability and flexibility

Several user‑facing improvements are intentionally deferred to keep the MVP simple:

- **Allow users to override default values**
  - For volunteer mode:
    - Let users optionally override the hourly rate per role (e.g., “Use my own rate for MD/DO”).
  - For Medicare mode:
    - Let advanced users override the per‑service rate (e.g., if they want to use Medicaid, commercial, or local rates instead of national Medicare).
  - Persist overrides in local storage so they don’t have to be re‑entered every time.

- **Better handling of modes and explanations**
  - Surface clearer, non‑technical explanations of what each mode represents:
    - “Volunteer mode = replacement cost of donated time.”
    - “Medicare mode = what Medicare would have paid for these services (not including downstream savings).”

- **Minor workflow tweaks**
  - Make it obvious which steps apply in which mode (e.g., visually dim or hide the volunteer step when in Medicare mode).
  - Add a simple “Start over” button to reset the form.

### 5. Improve visual design and layout

Current styling is intentionally minimal. Future work could include:

- More polished **infographic styling** (colors, icons, typography) to make outputs presentation‑ready for boards and funders.
- Responsive tweaks for **small screens** (mobile/tablet).
- Clearer visual hierarchy between the **headline number** and supporting detail.

---

If you’re picking this project up:

- Start by reading `services-config.js` to understand the current assumptions.
- Run `index.html` locally in a browser (double‑click or serve via a simple HTTP server) to see the current flow.
- Choose one area above (e.g., “update Medicare rates for the current codes” or “add override fields for volunteer rates”) and open a PR focused on that single improvement.
