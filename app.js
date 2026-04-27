const STORAGE_KEY = "blue-lily-cma-builder-v2";

const FICA = {
  "": { heading: "", bullets: [] },
  "Individual": {
    heading: "FICA - Individual",
    bullets: [
      "Copy of ID document for South African citizens / passport for foreign nationals",
      "Proof of residential address less than three months old",
      "If proof of address is not in the person's name: third-party declaration, third-party ID, and third-party proof of residential address",
      "SARS document confirming income tax number",
      "Bank document confirming individual banking details less than three months old"
    ]
  },
  "Minor": {
    heading: "FICA - Minor",
    bullets: [
      "Copy of birth certificate, abridged or unabridged, or ID document",
      "Documents confirming legal guardianship, if applicable",
      "SARS document confirming income tax number of minor, if applicable",
      "Proof of residential address less than three months old",
      "Parent or guardian declaration if the minor shares the same residential address or does not have a tax number",
      "Parent or guardian ID document or passport",
      "Parent or guardian proof of residential address",
      "Parent or guardian bank document confirming banking details less than three months old"
    ]
  },
  "Non-Resident Individual": {
    heading: "FICA - Non-Resident Individual",
    bullets: [
      "Copy of foreign ID document or passport",
      "Proof of residential address less than three months old",
      "If proof of address is not in the person's name: third-party declaration, third-party ID, and third-party proof of residential address",
      "Document confirming tax registration number",
      "Bank document confirming foreign bank details less than three months old"
    ]
  },
  "Company": {
    heading: "FICA - Company",
    bullets: [
      "Company CIPC registration documents",
      "Proof of business address less than three months old, if different from registered address",
      "SARS document confirming income tax or VAT registration number for the company",
      "Resolution on company letterhead signed by all directors nominating authorised signatory or representative",
      "Bank document confirming company banking details less than three months old",
      "For authorised signatory, CEO, directors and 25% or more beneficial owners: ID and proof of address",
      "Register of shareholders or written statement showing ownership and control structure, if requested",
      "Proof of source of funds"
    ]
  },
  "Close Corporation": {
    heading: "FICA - Close Corporation",
    bullets: [
      "Copy of Founding Statement CK1 and Certificate of Incorporation",
      "CK2 for any changes to members, if applicable",
      "Proof of business address less than three months old",
      "SARS document confirming income tax or VAT registration number",
      "Resolution signed by members nominating authorised signatory or representative",
      "Bank document confirming close corporation banking details less than three months old",
      "For authorised signatory and each member: copy of ID and proof of residential address less than three months old",
      "Proof of source of funds"
    ]
  },
  "Trust": {
    heading: "FICA - Trust",
    bullets: [
      "Copy of Trust Deed and any deeds of amendment, if applicable",
      "Copy of Letters of Authority from the Master",
      "Proof of trust address less than three months old",
      "SARS document confirming tax registration number of the trust",
      "Bank document confirming trust banking details less than three months old",
      "Trustee resolution authorising the sale and nominating authorised signatory",
      "For trustees, founder, donor, protector, beneficiaries and authorised signatory: ID or passport and proof of address",
      "Proof of source of funds"
    ]
  },
  "Estate Late": {
    heading: "FICA - Estate Late",
    bullets: [
      "Death certificate of the deceased",
      "Copy of ID of the deceased",
      "Letters of Executorship or Letters of Authority",
      "Executor's copy of ID or passport",
      "Executor's proof of residential address less than three months old",
      "Estate bank document confirming banking details, if available",
      "Master's reference number",
      "Power of attorney and FICA documents if an agent signs for the executor"
    ]
  }
};

const OWNERSHIP = {
  "Full Title": {
    heading: "PROPERTY - Full Title",
    bullets: [
      "Title deed",
      "Current municipal rates statement",
      "Rates clearance figures when requested by conveyancer",
      "Approved building plans, if available",
      "Occupation certificate, if available",
      "Bond cancellation details, if property is bonded"
    ]
  },
  "Full Title Estate / HOA": {
    heading: "PROPERTY - Full Title Estate / HOA",
    bullets: [
      "Title deed",
      "Current municipal rates statement",
      "HOA constitution / rules",
      "Estate conduct rules and architectural guidelines, if applicable",
      "Latest HOA levy statement",
      "HOA levy clearance figures",
      "HOA consent to transfer / clearance certificate, if required",
      "Latest HOA financial statements, if requested by buyer, bank, or conveyancer",
      "Approved building plans, if available",
      "Bond cancellation details, if property is bonded"
    ]
  },
  "Sectional Title": {
    heading: "PROPERTY - Sectional Title",
    bullets: [
      "Title deed",
      "Current municipal rates statement",
      "Latest levy statement",
      "Levy clearance figures from managing agent or body corporate",
      "Body corporate Management Rules",
      "Body corporate Conduct Rules",
      "Latest body corporate financial statements or annual accounts",
      "Insurance schedule or insurance confirmation",
      "Sectional title plans, if available",
      "Special levy details, if applicable",
      "Minutes of latest AGM, if available",
      "Bond cancellation details, if property is bonded"
    ]
  },
  "Share Block": {
    heading: "PROPERTY - Share Block",
    bullets: [
      "Share certificate or share block certificate",
      "Use agreement or occupation agreement",
      "Share block company registration documents",
      "Company MOI or constitution",
      "Rules of the scheme",
      "Latest levy statement",
      "Clearance figures from the share block company",
      "Latest financial statements of the share block company",
      "Directors' resolution or consent to transfer, if required",
      "Proof of seller's shareholding and right of use",
      "Bond or finance settlement details, if applicable"
    ]
  },
  "Vacant Land": {
    heading: "PROPERTY - Vacant Land",
    bullets: [
      "Title deed",
      "Current municipal rates statement",
      "Rates clearance figures when requested by conveyancer",
      "Zoning certificate or zoning information, if available",
      "Approved site development plan, if applicable",
      "Service availability information, if available",
      "Bond cancellation details, if property is bonded"
    ]
  },
  "Farm / Agricultural Holding": {
    heading: "PROPERTY - Farm / Agricultural Holding",
    bullets: [
      "Title deed",
      "Current municipal rates statement",
      "Rates clearance figures when requested by conveyancer",
      "Zoning or land-use information",
      "Water rights or borehole documentation, if applicable",
      "Servitudes, access rights, and wayleave information, if applicable",
      "Approved building plans, if available",
      "Bond cancellation details, if property is bonded"
    ]
  }
};

const STANDARD_DOCS = {
  heading: "STANDARD SELLER / TRANSFER DOCUMENTS",
  bullets: [
    "Seller ID documents",
    "Marriage certificate and antenuptial contract, if applicable",
    "Divorce order / settlement agreement, if applicable",
    "Bond account details, if bonded",
    "Municipal account",
    "Rates clearance figures",
    "Signed mandate and signed sale agreement",
    "Proof of seller banking details",
    "Property condition report / disclosure document"
  ]
};

const COMPLIANCE = {
  electrical: {
    heading: "COMPLIANCE - Electrical Certificate of Compliance",
    bullets: [
      "Electrical Certificate of Compliance for the property",
      "Confirm that alterations or additions after previous COC are covered",
      "Keep invoice / electrician details with the certificate"
    ]
  },
  solar: {
    heading: "COMPLIANCE - Solar / Inverter / PV Installation",
    bullets: [
      "Electrical COC must include the solar, inverter or PV installation where applicable",
      "Solar installation certificate and installer details, if available",
      "Warranties, manuals and compliance documents for the installed system"
    ]
  },
  electricFence: {
    heading: "COMPLIANCE - Electric Fence Certificate",
    bullets: [
      "Electric fence system certificate from a registered installer",
      "Keep invoice / installer details with the certificate"
    ]
  },
  gas: {
    heading: "COMPLIANCE - Gas Certificate",
    bullets: [
      "Gas Certificate of Conformity for any gas installation",
      "Confirm gas bottles, lines and appliances are included where applicable"
    ]
  },
  bugs: {
    heading: "COMPLIANCE - Beetle / Bugs Certificate",
    bullets: [
      "Beetle / bugs certificate where required by province, bank, buyer or conveyancer",
      "Use a reputable provider and keep invoice details with the certificate"
    ]
  },
  water: {
    heading: "COMPLIANCE - Water Installation Certificate",
    bullets: [
      "City of Cape Town water installation certificate, if applicable",
      "Certificate to be obtained by the seller before transfer where required"
    ]
  }
};

const defaultData = {
  owner: "",
  address: "",
  preparedBy: "",
  agentFfc: "",
  agentPhone: "",
  agentEmail: "",
  agentWebsite: "",
  erfSize: "",
  underRoof: "",
  purchasePrice: "",
  purchaseDate: "",
  propertyType: "",
  condition: "Good",
  feature1: "",
  feature2: "",
  feature3: "",
  less1: "",
  less2: "",
  less3: "",
  marketArea: "",
  competing: "",
  recentSales: "",
  highestPrice: "",
  lowestPrice: "",
  medianPrice: "",
  avgPsm: "",
  marketValue: "",
  recommendation: "Market Value",
  recommendationText: "RECOMMENDED TO SELL AT MARKET VALUE",
  fica1: "Individual",
  fica2: "",
  ownershipType: "Full Title Estate / HOA",
  province: "Gauteng",
  solar: "No",
  electricFence: "No",
  gas: "No",
  bugs: "Auto",
  water: "No",
  standardDocs: "Yes",
  activeImages: [],
  offerImages: []
};

const sampleData = {
  ...defaultData,
  owner: "MARLYN FERREIRA",
  address: "1 BOOM STREET, ERMELO",
  preparedBy: "DAWIE DU TOIT",
  agentFfc: "1229447",
  agentPhone: "+271234567890",
  agentEmail: "dawie@bluelilysa.co.za",
  agentWebsite: "bluelilysa.co.za",
  erfSize: "1000",
  underRoof: "400",
  purchasePrice: "1750000",
  purchaseDate: "2013-04-01",
  propertyType: "VACANT",
  condition: "Good",
  feature1: "XXX",
  feature2: "XXXX",
  feature3: "XXXXX",
  less1: "ZZZ",
  less2: "ZZZZ",
  less3: "ZZZZZ",
  marketArea: "MONTANA",
  competing: "122",
  recentSales: "75",
  highestPrice: "1050000",
  lowestPrice: "995000",
  medianPrice: "1022500",
  avgPsm: "8894",
  marketValue: "2178291",
  recommendation: "Market Value",
  recommendationText: "RECOMENDED TO SELL AT MARKET VALUE",
  fica1: "Individual",
  fica2: "",
  ownershipType: "Full Title Estate / HOA",
  province: "Gauteng",
  solar: "No",
  electricFence: "No",
  gas: "No",
  bugs: "No",
  water: "No",
  standardDocs: "Yes",
  activeImages: [],
  offerImages: []
};

let state = { ...defaultData };

function populateSelects(){
  document.querySelectorAll(".fica-select").forEach(select => {
    select.innerHTML = Object.keys(FICA).map(key => `<option value="${escapeHtml(key)}">${key || "None"}</option>`).join("");
  });
  document.querySelectorAll(".ownership-select").forEach(select => {
    select.innerHTML = Object.keys(OWNERSHIP).map(key => `<option value="${escapeHtml(key)}">${key}</option>`).join("");
  });
}

function bindInputs(){
  document.querySelectorAll("[data-field]").forEach(input => {
    input.addEventListener("input", () => {
      state[input.dataset.field] = input.value;
      saveState();
      render();
    });
    input.addEventListener("change", () => {
      state[input.dataset.field] = input.value;
      saveState();
      render();
    });
  });
  document.getElementById("activeImages").addEventListener("change", event => handleImages(event, "activeImages", 6));
  document.getElementById("offerImages").addEventListener("change", event => handleImages(event, "offerImages", 4));
  document.getElementById("loadSample").addEventListener("click", () => {
    state = { ...sampleData };
    syncForm();
    saveState();
    render();
  });
  document.getElementById("clearData").addEventListener("click", () => {
    state = { ...defaultData, activeImages: [], offerImages: [] };
    syncForm();
    saveState();
    render();
  });
  document.getElementById("saveJson").addEventListener("click", downloadBackup);
  document.getElementById("importJson").addEventListener("change", importBackup);
  document.getElementById("exportPdf").addEventListener("click", exportPdf);
  document.getElementById("printPdf").addEventListener("click", () => window.print());
}

function handleImages(event, key, limit){
  const files = [...event.target.files].slice(0, limit);
  const readers = files.map(file => new Promise(resolve => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.readAsDataURL(file);
  }));
  Promise.all(readers).then(images => {
    state[key] = images;
    event.target.value = "";
    saveState();
    render();
  });
}

function syncForm(){
  document.querySelectorAll("[data-field]").forEach(input => {
    input.value = state[input.dataset.field] ?? "";
  });
}

function render(){
  const view = computedView();
  document.querySelectorAll("[data-out]").forEach(el => {
    const field = el.dataset.out;
    let value = view[field] ?? state[field] ?? "";
    if(el.dataset.money === "true") value = money(value);
    el.textContent = value;
  });
  document.querySelectorAll(".condition-option").forEach(item => {
    item.classList.toggle("active", normalize(item.dataset.condition) === normalize(state.condition));
  });
  document.querySelectorAll("[data-price]").forEach(el => {
    el.textContent = money(view.prices[el.dataset.price]);
  });
  renderImages("activeCollage", state.activeImages || [], 6);
  renderImages("offerCollage", state.offerImages || [], 4);
  renderThumbs("activeList", state.activeImages || [], "activeImages");
  renderThumbs("offerList", state.offerImages || [], "offerImages");
  renderFica();
}

function computedView(){
  const market = number(state.marketValue) || number(state.medianPrice) || 0;
  const recommendation = state.recommendation === "Custom" && state.recommendationText.trim()
    ? state.recommendationText.trim()
    : state.recommendationText.trim() || `RECOMMENDED TO SELL AT ${String(state.recommendation || "Market Value").toUpperCase()}`;
  return {
    purchaseDateFormatted: formatDate(state.purchaseDate),
    recommendationFinal: recommendation,
    prices: {
      below15: market * 0.85,
      below10: market * 0.9,
      market,
      above10: market * 1.1,
      above15: market * 1.15
    }
  };
}

function renderImages(targetId, images, limit){
  const target = document.getElementById(targetId);
  target.innerHTML = "";
  for(let i = 0; i < limit; i += 1){
    if(images[i]){
      const img = document.createElement("img");
      img.className = `collage-img img${i + 1}`;
      img.src = images[i];
      target.appendChild(img);
    }
  }
}

function renderThumbs(targetId, images, key){
  const target = document.getElementById(targetId);
  target.innerHTML = "";
  images.forEach((src, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "thumb-button";
    button.title = "Click to remove";
    button.innerHTML = `<img src="${src}" alt="Uploaded image ${index + 1}" />`;
    button.addEventListener("click", () => {
      state[key].splice(index, 1);
      saveState();
      render();
    });
    target.appendChild(button);
  });
}

function renderFica(){
  const sections = [];
  [state.fica1, state.fica2].forEach(key => {
    if(key && FICA[key]) sections.push(FICA[key]);
  });
  if(state.ownershipType && OWNERSHIP[state.ownershipType]) sections.push(OWNERSHIP[state.ownershipType]);
  sections.push(COMPLIANCE.electrical);
  if(state.solar === "Yes") sections.push(COMPLIANCE.solar);
  if(state.electricFence === "Yes") sections.push(COMPLIANCE.electricFence);
  if(state.gas === "Yes") sections.push(COMPLIANCE.gas);
  const needsBugs = state.bugs === "Yes" || (state.bugs === "Auto" && ["Western Cape", "KwaZulu-Natal"].includes(state.province));
  if(needsBugs) sections.push(COMPLIANCE.bugs);
  if(state.water === "Yes") sections.push(COMPLIANCE.water);
  if(state.standardDocs === "Yes") sections.push(STANDARD_DOCS);
  document.getElementById("ficaOutput").innerHTML = sections.map(section => `
    <div class="fica-section">
      <h2>${escapeHtml(section.heading)}</h2>
      <ul>${section.bullets.map(item => `<li>${escapeHtml(item)}</li>`).join("")}</ul>
    </div>
  `).join("");
}

function saveState(){
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function loadState(){
  try{
    const stored = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if(stored && typeof stored === "object") state = { ...defaultData, ...stored };
  }catch(error){
    state = { ...defaultData };
  }
}

function downloadBackup(){
  const blob = new Blob([JSON.stringify(state, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `${safeName(state.owner || "blue-lily-cma")}.json`;
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
}

function importBackup(event){
  const file = event.target.files[0];
  if(!file) return;
  const reader = new FileReader();
  reader.onload = () => {
    try{
      const imported = JSON.parse(reader.result);
      state = { ...defaultData, ...imported };
      syncForm();
      saveState();
      render();
    }catch(error){
      alert("The selected file is not a valid CMA backup JSON file.");
    }
    event.target.value = "";
  };
  reader.readAsText(file);
}

function exportPdf(){
  const report = document.getElementById("pdfReport");
  if(typeof html2pdf === "undefined"){
    window.print();
    return;
  }
  const fileName = `${safeName(state.owner || "Blue-Lily-CMA")}.pdf`;
  html2pdf().set({
    margin: 0,
    filename: fileName,
    image: { type: "jpeg", quality: 0.98 },
    html2canvas: { scale: 2, useCORS: true, backgroundColor: "#ffffff", scrollX: 0, scrollY: 0 },
    jsPDF: { unit: "px", format: [768, 1024], orientation: "portrait", compress: true },
    pagebreak: { mode: ["css", "legacy"], after: ".pdf-page" }
  }).from(report).save();
}

function number(value){
  if(value === null || value === undefined || value === "") return 0;
  const clean = String(value).replace(/[^0-9.-]/g, "");
  const parsed = Number(clean);
  return Number.isFinite(parsed) ? parsed : 0;
}

function money(value){
  const n = number(value);
  if(!n) return "";
  return "R " + Math.round(n).toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}

function formatDate(value){
  if(!value) return "";
  const date = new Date(`${value}T00:00:00`);
  if(Number.isNaN(date.getTime())) return value;
  return date.toLocaleDateString("en-ZA", { day: "2-digit", month: "long", year: "numeric" });
}

function normalize(value){
  return String(value || "").trim().toLowerCase();
}

function safeName(value){
  return String(value).trim().replace(/[^a-z0-9]+/gi, "-").replace(/^-+|-+$/g, "") || "Blue-Lily-CMA";
}

function escapeHtml(value){
  return String(value ?? "").replace(/[&<>'"]/g, char => ({ "&":"&amp;", "<":"&lt;", ">":"&gt;", "'":"&#39;", '"':"&quot;" }[char]));
}

populateSelects();
bindInputs();
loadState();
syncForm();
render();
