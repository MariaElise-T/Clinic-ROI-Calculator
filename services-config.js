// services-config.js
// Central place to manage service assumptions

const SERVICE_CONFIG = [
  {
    id: "diabetes_visit",
    label: "Diabetes management visit",
    valueUSD: 100,
    rationale: "Diabetes self‑management and primary care programs show several hundred dollars in annual savings per engaged patient via reduced hospitalizations and lower total costs; 100 USD per focused visit is conservative.[web:78][web:79][web:85]",
    sources: "CDC DSMES business case; diabetes program cost and utilization studies.[web:78][web:75][web:79][web:85]"
  },
  {
    id: "htn_visit",
    label: "Hypertension management visit",
    valueUSD: 75,
    rationale: "Better BP control lowers risk of stroke and MI; economic models show meaningful long‑term cost reductions, likely smaller per visit than for diabetes.[web:67]",
    sources: "Hypertension risk‑reduction and economic impact analyses.[web:67]"
  },
  {
    id: "mammogram",
    label: "Mammogram (screening)",
    valueUSD: 75,
    rationale: "Breast cancer screening is generally cost‑effective or cost‑saving via earlier-stage detection; amortizing program‑level savings over many screens supports per‑screen values in the tens–low hundreds of dollars.[web:71][web:16]",
    sources: "Cost‑effectiveness and ROI studies of breast cancer screening.[web:71][web:16]"
  },
  {
    id: "pap_smear",
    label: "Pap smear",
    valueUSD: 75,
    rationale: "Cervical screening prevents high‑cost invasive cancer; cost‑effectiveness studies justify per‑screen savings in the tens–hundreds of dollars over screened populations.[web:51]",
    sources: "Economic evaluations of cervical cancer screening programs.[web:51]"
  },
  {
    id: "lipid_panel",
    label: "Cholesterol / lipid screening",
    valueUSD: 60,
    rationale: "Lipid panels support cardiovascular risk reduction; economic evaluations of risk‑factor management support modest per‑test savings once linked to treatment changes.[web:49][web:71]",
    sources: "Cost‑effectiveness work on cardiovascular risk screening and lipid management.[web:49][web:71]"
  },
  {
    id: "fit_test",
    label: "Colon cancer screening (FIT/FOBT)",
    valueUSD: 150,
    rationale: "Stool tests that lead to earlier CRC detection or polyp removal avert very high treatment costs; long‑run savings per test in the low hundreds are conservative.",
    sources: "Cost‑effectiveness of colorectal cancer screening options; preventive services league tables.[web:49][web:55]"
  },
  {
    id: "colonoscopy",
    label: "Colon cancer screening colonoscopy",
    valueUSD: 500,
    rationale: "Colonoscopy has higher upfront cost but strong evidence for preventing colorectal cancer and avoiding expensive late-stage treatment; 500 USD per screening is a cautious long‑term savings estimate.",
    sources: "Economic analyses of colonoscopy‑based colorectal cancer screening strategies.[web:49][web:55]"
  }
];
