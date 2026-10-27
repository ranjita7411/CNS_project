:root {
  --blue: #2563eb;
  --blue-dark: #1d4ed8;
  --blue-light: #eff6ff;
  --ink: #172033;
  --muted: #64748b;
  --line: #e2e8f0;
  --surface: #ffffff;
  --soft: #f8fafc;
  --green: #059669;
  --shadow: 0 18px 50px rgba(15, 23, 42, .08);
  --radius: 20px;
}

* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
  scroll-padding-top: 90px;
}

body {
  margin: 0;
  color: var(--ink);
  background: #fff;
  font-family: Inter, system-ui, -apple-system, BlinkMacSystemFont,
    "Segoe UI", sans-serif;
  line-height: 1.6;
}

button,
input,
textarea {
  font: inherit;
}

button,
a {
  -webkit-tap-highlight-color: transparent;
}

a {
  color: inherit;
  text-decoration: none;
}

[hidden] {
  display: none !important;
}

/* LOGIN PAGE */

.login-screen {
  min-height: 100vh;
  position: relative;
  overflow: hidden;
  display: grid;
  place-items: center;
  padding: 32px 18px 68px;
  background: linear-gradient(
    135deg,
    #fff 0%,
    #f8fbff 55%,
    #eff6ff 100%
  );
}

.login-screen::before,
.login-screen::after {
  content: "";
  position: absolute;
  border-radius: 50%;
  border: 1px solid rgba(37, 99, 235, .1);
  pointer-events: none;
}

.login-screen::before {
  width: 480px;
  height: 480px;
  top: -250px;
  right: -120px;
}

.login-screen::after {
  width: 360px;
  height: 360px;
  bottom: -190px;
  left: -110px;
}

.login-decoration {
  position: absolute;
  border-radius: 50%;
  filter: blur(2px);
  pointer-events: none;
}

.decoration-one {
  width: 180px;
  height: 180px;
  top: 12%;
  left: 12%;
  background: rgba(219, 234, 254, .45);
}

.decoration-two {
  width: 240px;
  height: 240px;
  right: 10%;
  bottom: 12%;
  background: rgba(239, 246, 255, .8);
}

.login-card {
  position: relative;
  z-index: 1;
  width: min(100%, 430px);
  padding: 38px;
  border: 1px solid rgba(255, 255, 255, .95);
  border-radius: 28px;
  background: rgba(255, 255, 255, .86);
  box-shadow:
    0 24px 80px rgba(30, 64, 175, .12),
    0 0 0 1px rgba(219, 234, 254, .75);
  backdrop-filter: blur(18px);
  -webkit-backdrop-filter: blur(18px);
}

.login-logo {
  display: grid;
  place-items: center;
  width: 58px;
  height: 58px;
  border-radius: 18px;
  margin-bottom: 22px;
  background: linear-gradient(145deg, #eff6ff, #dbeafe);
  border: 1px solid #bfdbfe;
  font-size: 28px;
}

.login-eyebrow {
  margin: 0 0 8px;
  color: var(--blue);
  font-size: 11px;
  font-weight: 800;
  letter-spacing: .13em;
}

.login-card h1 {
  margin: 0;
  font-size: clamp(30px, 6vw, 38px);
  line-height: 1.15;
  letter-spacing: -.04em;
}

.login-subtitle {
  margin: 12px 0 27px;
  color: var(--muted);
  font-size: 14px;
}

.login-card form {
  display: flex;
  flex-direction: column;
}

.login-card label {
  margin: 0 0 7px;
  color: #334155;
  font-size: 13px;
  font-weight: 700;
}

.login-card input {
  width: 100%;
  min-height: 48px;
  margin: 0 0 18px;
  padding: 12px 14px;
  border: 1px solid #dbe3ef;
  border-radius: 12px;
  outline: none;
  background: #fff;
  color: var(--ink);
  transition: border-color .2s, box-shadow .2s;
}

.login-card input::placeholder {
  color: #94a3b8;
}

.login-card input:focus {
  border-color: #60a5fa;
  box-shadow: 0 0 0 4px rgba(59, 130, 246, .12);
}

.login-submit {
  width: 100%;
  justify-content: center;
  min-height: 49px;
  margin-top: 2px;
}

.login-status {
  min-height: 20px;
  margin: 10px 0 0;
  font-size: 13px;
}

.login-status.success {
  color: var(--green);
}

.login-status.error {
  color: #dc2626;
}

.login-note {
  margin: 18px 0 0;
  padding: 11px 12px;
  border: 1px solid #dbeafe;
  border-radius: 10px;
  background: #f8fbff;
  color: #64748b;
  font-size: 11px;
  text-align: center;
}

.login-note strong {
  color: #1d4ed8;
}

.login-footer {
  position: absolute;
  z-index: 1;
  bottom: 17px;
  left: 16px;
  right: 16px;
  margin: 0;
  color: #94a3b8;
  font-size: 11px;
  text-align: center;
}

/* NAVIGATION */

.navbar {
  position: sticky;
  z-index: 10;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  padding: 13px max(5vw, 20px);
  border-bottom: 1px solid rgba(226, 232, 240, .9);
  background: rgba(255, 255, 255, .92);
  backdrop-filter: blur(16px);
}

.brand {
  display: flex;
  align-items: center;
  gap: 11px;
  flex-shrink: 0;
}

.brand-icon {
  display: grid;
  place-items: center;
  width: 42px;
  height: 42px;
  border: 1px solid #dbeafe;
  border-radius: 13px;
  background: var(--blue-light);
  font-size: 21px;
}

.brand strong,
.brand small {
  display: block;
}

.brand strong {
  font-size: 15px;
  letter-spacing: -.02em;
}

.brand small {
  color: var(--muted);
  font-size: 10px;
}

.navbar nav {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-wrap: wrap;
  gap: 5px;
}

.navbar nav a {
  padding: 8px 10px;
  border-radius: 9px;
  color: #475569;
  font-size: 12px;
  font-weight: 650;
}

.navbar nav a:hover {
  color: var(--blue);
  background: var(--blue-light);
}

/* BUTTONS */

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  min-height: 43px;
  padding: 10px 17px;
  border: 1px solid transparent;
  border-radius: 11px;
  cursor: pointer;
  font-size: 13px;
  font-weight: 750;
  transition: transform .18s, box-shadow .18s, background .18s;
}

.btn:hover {
  transform: translateY(-1px);
}

.btn.primary {
  color: #fff;
  background: var(--blue);
  box-shadow: 0 7px 18px rgba(37, 99, 235, .18);
}

.btn.primary:hover {
  background: var(--blue-dark);
  box-shadow: 0 10px 22px rgba(37, 99, 235, .24);
}

.btn.secondary {
  color: #334155;
  background: #fff;
  border-color: #cbd5e1;
}

.btn.secondary:hover {
  background: #f8fafc;
  border-color: #94a3b8;
}

.btn.success {
  color: #fff;
  background: var(--green);
}

.btn.success:hover {
  background: #047857;
}

.btn.full {
  flex: 1;
}

/* HOME / HERO */

.hero {
  display: grid;
  grid-template-columns: minmax(0, 1.15fr) minmax(280px, .85fr);
  align-items: center;
  gap: 55px;
  padding: 78px max(7vw, 24px) 72px;
  background: radial-gradient(circle at 85% 25%, #eff6ff 0, #fff 42%);
}

.eyebrow {
  display: inline-block;
  margin-bottom: 12px;
  color: var(--blue);
  font-size: 11px;
  font-weight: 850;
  letter-spacing: .13em;
}

.hero h1 {
  margin: 0;
  font-size: clamp(44px, 7vw, 76px);
  line-height: 1.04;
  letter-spacing: -.06em;
}

.hero h1 span {
  color: var(--blue);
}

.hero-text {
  max-width: 610px;
  margin: 22px 0 25px;
  color: var(--muted);
  font-size: 16px;
}

.hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 11px;
}

.hero-card,
.panel,
.feature-card,
.rule-card,
.details-grid > div {
  border: 1px solid var(--line);
  border-radius: var(--radius);
  background: #fff;
  box-shadow: var(--shadow);
}

.hero-card {
  padding: 23px;
}

.card-title-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  margin-bottom: 18px;
}

.card-title-row h2 {
  margin: 0;
  font-size: 17px;
}

.card-title-row span {
  padding: 5px 9px;
  border: 1px solid #dbeafe;
  border-radius: 999px;
  color: var(--blue-dark);
  background: var(--blue-light);
  font-size: 11px;
  font-weight: 750;
}

.muted {
  color: var(--muted);
  font-size: 12px;
}

/* SECTIONS */

.section {
  padding: 72px max(7vw, 24px);
}

.section-heading {
  max-width: 750px;
  margin: 0 auto 34px;
  text-align: center;
}

.section-heading h2 {
  margin: 0 0 12px;
  font-size: clamp(28px, 4vw, 40px);
  line-height: 1.2;
  letter-spacing: -.04em;
}

.section-heading p {
  margin: 0;
  color: var(--muted);
  font-size: 14px;
}

.intro {
  background: #fff;
}

.feature-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 17px;
}

.feature-card {
  padding: 24px;
  box-shadow: none;
}

.feature-icon {
  display: grid;
  place-items: center;
  width: 45px;
  height: 45px;
  margin-bottom: 14px;
  border-radius: 13px;
  background: var(--blue-light);
  font-size: 22px;
}

.feature-card h3,
.rule-card h3 {
  margin: 0 0 7px;
  font-size: 16px;
}

.feature-card p,
.rule-card p {
  margin: 0;
  color: var(--muted);
  font-size: 13px;
}

/* ENCRYPTION AND DECRYPTION PANELS */

.tool-section,
.tool-section.alternate,
.rules-section {
  border-top: 1px solid #e2e8f0;
  border-bottom: 1px solid #e2e8f0;
  background: #f8fafc;
}

.tool-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 20px;
}

.panel {
  min-width: 0;
  padding: 25px;
}

.panel h3 {
  margin: 0 0 18px;
  font-size: 17px;
}

label {
  display: block;
  margin: 0 0 7px;
  color: #334155;
  font-size: 13px;
  font-weight: 750;
}

input,
textarea {
  display: block;
  width: 100%;
  margin: 0 0 18px;
  padding: 12px 13px;
  border: 1px solid #cbd5e1;
  border-radius: 10px;
  outline: none;
  color: var(--ink);
  background: #fff;
  transition: border-color .2s, box-shadow .2s;
}

input::placeholder,
textarea::placeholder {
  color: #94a3b8;
}

input:focus,
textarea:focus {
  border-color: #60a5fa;
  box-shadow: 0 0 0 3px rgba(96, 165, 250, .15);
}

textarea {
  resize: vertical;
  min-height: 110px;
}

.button-row {
  display: flex;
  gap: 10px;
}

.status {
  min-height: 20px;
  margin: 12px 0 0;
  font-size: 12px;
}

.status.ok {
  color: var(--green);
}

.status.error {
  color: #dc2626;
}

/* PLAYFAIR MATRIX */

.matrix {
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  gap: 5px;
  width: 100%;
  max-width: 290px;
  margin: 0 auto;
}

.matrix div {
  display: grid;
  place-items: center;
  aspect-ratio: 1;
  border: 1px solid #dbeafe;
  border-radius: 8px;
  color: #1e3a8a;
  background: #f8fbff;
  font-size: 16px;
  font-weight: 800;
  transition: background .15s, border-color .15s;
}

.matrix div:hover {
  background: #eaf2ff;
  border-color: #93c5fd;
}

.small-matrix {
  max-width: 255px;
}

.matrix-box,
.matrix-large-box {
  display: grid;
  place-items: center;
  min-height: 155px;
  padding: 18px;
  border: 1px dashed #cbd5e1;
  border-radius: 13px;
  background: #fff;
}

.matrix-box.empty,
.matrix-large-box.empty,
.empty {
  color: #94a3b8;
  font-size: 13px;
  text-align: center;
}

/* RESULTS */

.result-box {
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin-top: 12px;
  padding: 13px 14px;
  border: 1px solid #e2e8f0;
  border-radius: 11px;
  background: #f8fafc;
  overflow-wrap: anywhere;
}

.result-box span {
  color: #64748b;
  font-size: 11px;
  font-weight: 700;
}

.result-box strong {
  color: var(--ink);
  font-size: 14px;
  letter-spacing: .02em;
}

.highlight {
  border-color: #bfdbfe;
  background: #eff6ff;
}

.highlight strong {
  color: #1d4ed8;
}

.success-box {
  border-color: #a7f3d0;
  background: #ecfdf5;
}

.success-box strong {
  color: #047857;
}

.steps-panel {
  margin-top: 20px;
}

.step {
  display: grid;
  grid-template-columns: 34px 1fr;
  align-items: start;
  gap: 12px;
  padding: 15px 0;
  border-bottom: 1px solid #e2e8f0;
  text-align: left;
}

.step:last-child {
  border-bottom: none;
}

.step-no {
  display: grid;
  place-items: center;
  width: 32px;
  height: 32px;
  border-radius: 10px;
  color: #1d4ed8;
  background: #dbeafe;
  font-size: 12px;
  font-weight: 800;
}

.step h4 {
  margin: 0 0 5px;
  font-size: 13px;
}

.step p {
  margin: 0;
  color: var(--muted);
  font-size: 12px;
}

/* MATRIX GENERATOR */

.matrix-generator {
  display: flex;
  align-items: center;
  gap: 12px;
  max-width: 720px;
  margin: 0 auto 20px;
}

.matrix-generator input {
  flex: 1;
  margin: 0;
}

.matrix-large-box {
  max-width: 480px;
  margin: 0 auto;
}

.matrix-large-box .matrix {
  max-width: 390px;
}

/* RULES */

.rules-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 17px;
}

.rule-card {
  display: flex;
  gap: 17px;
  padding: 22px;
  box-shadow: none;
}

.rule-number {
  display: grid;
  place-items: center;
  flex-shrink: 0;
  width: 42px;
  height: 42px;
  border-radius: 13px;
  color: #1d4ed8;
  background: #dbeafe;
  font-size: 13px;
  font-weight: 850;
}

.rule-card code {
  display: inline-block;
  margin-top: 12px;
  padding: 6px 9px;
  border-radius: 7px;
  color: #1e40af;
  background: #eff6ff;
  font-size: 11px;
}

/* HISTORY */

.history {
  padding: 70px max(7vw, 24px);
  color: #fff;
  background: #1e3a8a;
}

.history .section-heading {
  margin-bottom: 0;
}

.history .section-heading h2 {
  color: #fff;
}

.history .section-heading p {
  color: #dbeafe;
}

.eyebrow.light {
  color: #bfdbfe;
}

/* ABOUT AND FOOTER */

.details-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 14px;
}

.details-grid > div {
  display: flex;
  flex-direction: column;
  gap: 7px;
  padding: 20px;
  box-shadow: none;
}

.details-grid span {
  color: var(--muted);
  font-size: 11px;
}

.details-grid strong {
  font-size: 13px;
}

footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 15px;
  padding: 23px max(7vw, 24px);
  border-top: 1px solid var(--line);
  color: var(--muted);
  background: #fff;
  font-size: 12px;
}

footer strong {
  color: var(--ink);
}

/* RESPONSIVE DESIGN */

@media (max-width: 900px) {
  .navbar {
    align-items: flex-start;
    flex-direction: column;
    gap: 10px;
  }

  .navbar nav {
    justify-content: flex-start;
  }

  .hero {
    grid-template-columns: 1fr;
    gap: 30px;
  }

  .hero-card {
    max-width: 520px;
    width: 100%;
  }

  .details-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 650px) {
  .login-card {
    padding: 27px 22px;
  }

  .hero,
  .section,
  .history {
    padding: 48px 20px;
  }

  .feature-grid,
  .tool-grid,
  .rules-grid {
    grid-template-columns: 1fr;
  }

  .panel {
    padding: 19px;
  }

  .matrix-generator {
    align-items: stretch;
    flex-direction: column;
  }

  .matrix-generator button {
    width: 100%;
  }

  .button-row {
    flex-direction: column;
  }

  .details-grid {
    grid-template-columns: 1fr;
  }

  footer {
    align-items: flex-start;
    flex-direction: column;
  }
}
