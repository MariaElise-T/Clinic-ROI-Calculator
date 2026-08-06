// services-config.js
// Central place to manage service assumptions for the calculator

// Service list for Medicare mode
// - label: what users see in the dropdown
// - cpt: CPT/HCPCS code
// - medicareNatRate: placeholder national non-facility Medicare rate in USD
//   Replace these with real rates from the CMS Physician Fee Schedule:
//   https://www.cms.gov/medicare/physician-fee-schedule/search

const SERVICE_CONFIG = [
  {
    id: "99213",
    label: "Office visit, established patient, level 3 (99213)",
    cpt: "99213",
    medicareNatRate: 95.00
  },
  {
    id: "99214",
    label: "Office visit, established patient, level 4 (99214)",
    cpt: "99214",
    medicareNatRate: 135.00
  },
  {
    id: "G0108",
    label: "Diabetes self-management, individual (G0108)",
    cpt: "G0108",
    medicareNatRate: 60.00
  },
  {
    id: "G0109",
    label: "Diabetes self-management, group (G0109)",
    cpt: "G0109",
    medicareNatRate: 20.00
  },
  {
    id: "80061",
    label: "Lipid panel (80061)",
    cpt: "80061",
    medicareNatRate: 25.00
  },
  {
    id: "77067",
    label: "Screening mammography, bilateral (77067)",
    cpt: "77067",
    medicareNatRate: 150.00
  },
  {
    id: "G0101",
    label: "Cervical/breast cancer screening pelvic & breast exam (G0101)",
    cpt: "G0101",
    medicareNatRate: 40.00
  },
  {
    id: "82274",
    label: "Fecal occult blood test, immunoassay (82274)",
    cpt: "82274",
    medicareNatRate: 20.00
  },
  {
    id: "45378",
    label: "Screening colonoscopy (45378)",
    cpt: "45378",
    medicareNatRate: 400.00
  }
];

// Volunteer role assumptions for “volunteer time” mode
// Based on national volunteer value and rough wage ratios.
// You can edit these numbers without touching index.html.

const VOLUNTEER_ROLES = {
  unlicensed: { label: "Unlicensed volunteer", rateUSD: 30 },
  rn:         { label: "Registered nurse (RN)", rateUSD: 36 },
  nppa:       { label: "NP / PA", rateUSD: 70 },
  md:         { label: "Physician (MD/DO)", rateUSD: 120 }
};