/* =========================================================
   PLAYFAIR CIPHER + DEMO LOGIN
   No external libraries required.
   ========================================================= */

const ALPHABET = "ABCDEFGHIKLMNOPQRSTUVWXYZ";

// Convert text to uppercase, combine J with I, and remove
// spaces, numbers, and punctuation.
function cleanLetters(value) {
  return String(value || "")
    .toUpperCase()
    .replace(/J/g, "I")
    .replace(/[^A-Z]/g, "");
}

// Create the 5 x 5 Playfair matrix.
function buildMatrix(keyword) {
  const key = cleanLetters(keyword);

  if (!key) {
    throw new Error("Please enter a keyword.");
  }

  let sequence = "";

  for (const ch of key + ALPHABET) {
    if (!sequence.includes(ch)) {
      sequence += ch;
    }
  }

  const matrix = [];

  for (let r = 0; r < 5; r++) {
    matrix.push(sequence.slice(r * 5, r * 5 + 5).split(""));
  }

  return matrix;
}

// Find a letter's position in the matrix.
function positionOf(matrix, letter) {
  const target = letter === "J" ? "I" : letter;

  for (let r = 0; r < 5; r++) {
    for (let c = 0; c < 5; c++) {
      if (matrix[r][c] === target) {
        return { row: r, col: c };
      }
    }
  }

  return null;
}

// Create the HTML for the matrix.
function matrixHTML(matrix) {
  return `<div class="matrix">${
    matrix.flat().map(ch => `<div>${ch}</div>`).join("")
  }</div>`;
}

// Prepare plaintext into letter pairs.
// Repeated letters in a pair are separated with X.
// An unmatched final letter gets X.
function preparePlaintext(text) {
  const cleaned = cleanLetters(text);
  const pairs = [];
  let i = 0;

  while (i < cleaned.length) {
    const a = cleaned[i];
    const b = cleaned[i + 1];

    if (!b) {
      pairs.push(a + "X");
      i++;
    } else if (a === b) {
      pairs.push(a + "X");
      i++;
    } else {
      pairs.push(a + b);
      i += 2;
    }
  }

  return pairs;
}

// Apply Playfair rules to one pair.
function transformPair(pair, matrix, mode) {
  const a = pair[0];
  const b = pair[1];

  const p1 = positionOf(matrix, a);
  const p2 = positionOf(matrix, b);

  if (!p1 || !p2) {
    throw new Error(`Invalid pair: ${pair}`);
  }

  // Encryption moves right/down.
  // Decryption moves left/up.
  const direction = mode === "encrypt" ? 1 : -1;

  // RULE 1: Both letters are in the same row.
  if (p1.row === p2.row) {
    const a2 = matrix[p1.row][
      (p1.col + direction + 5) % 5
    ];

    const b2 = matrix[p2.row][
      (p2.col + direction + 5) % 5
    ];

    return {
      result: a2 + b2,
      rule: "Same row",
      explanation: mode === "encrypt"
        ? "Both letters are in the same row, so each moves one position to the right."
        : "Both letters are in the same row, so each moves one position to the left."
    };
  }

  // RULE 2: Both letters are in the same column.
  if (p1.col === p2.col) {
    const a2 = matrix[
      (p1.row + direction + 5) % 5
    ][p1.col];

    const b2 = matrix[
      (p2.row + direction + 5) % 5
    ][p2.col];

    return {
      result: a2 + b2,
      rule: "Same column",
      explanation: mode === "encrypt"
        ? "Both letters are in the same column, so each moves one position downward."
        : "Both letters are in the same column, so each moves one position upward."
    };
  }

  // RULE 3: Rectangle rule.
  const a2 = matrix[p1.row][p2.col];
  const b2 = matrix[p2.row][p1.col];

  return {
    result: a2 + b2,
    rule: "Rectangle rule",
    explanation:
      "The letters form a rectangle; each letter keeps its row and takes the other letter's column."
  };
}

// Display a generated matrix.
function setMatrix(containerId, matrix) {
  const el = document.getElementById(containerId);

  el.classList.remove("empty");
  el.innerHTML = matrixHTML(matrix);
}

// Display a success or error message.
function showStatus(id, message, type = "") {
  const el = document.getElementById(id);

  el.textContent = message;
  el.className = `status ${type}`;
}

// Display algorithm steps.
function showSteps(containerId, steps) {
  const el = document.getElementById(containerId);

  if (!steps.length) {
    el.className = "empty";
    el.textContent = "No steps available.";
    return;
  }

  el.className = "";

  el.innerHTML = steps.map((s, i) => `
    <div class="step">
      <div class="step-no">${i + 1}</div>
      <div>
        <h4>${s.input} → ${s.output}</h4>
        <p>
          <strong>${s.rule}</strong> — ${s.explanation}
        </p>
      </div>
    </div>
  `).join("");
}

// Remove likely filler X characters for display.
// This is only an estimate because X can be a real letter.
function removeLikelyFillers(text) {
  let result = text;

  result = result.replace(/([A-Z])X\1/g, "$1$1");

  if (result.endsWith("X")) {
    result = result.slice(0, -1);
  }

  return result;
}

// ENCRYPTION
function encryptMessage() {
  try {
    const key = document.getElementById("encryptKey").value;
    const plaintext = document.getElementById("plaintext").value;

    if (!key.trim()) {
      throw new Error("Enter a keyword.");
    }

    if (!plaintext.trim()) {
      throw new Error("Enter plaintext.");
    }

    const matrix = buildMatrix(key);
    const pairs = preparePlaintext(plaintext);

    if (!pairs.length) {
      throw new Error("Plaintext must contain letters.");
    }

    setMatrix("encryptMatrix", matrix);

    let ciphertext = "";
    const steps = [];

    for (const pair of pairs) {
      const result = transformPair(pair, matrix, "encrypt");

      ciphertext += result.result;

      steps.push({
        input: pair,
        output: result.result,
        rule: result.rule,
        explanation: result.explanation
      });
    }

    document.getElementById("preparedText").textContent =
      pairs.join(" ");

    document.getElementById("encryptPairs").textContent =
      pairs.join(" | ");

    document.getElementById("ciphertext").textContent =
      ciphertext;

    showSteps("encryptionSteps", steps);

    showStatus(
      "encryptStatus",
      "Encryption completed successfully.",
      "ok"
    );
  } catch (error) {
    showStatus("encryptStatus", error.message, "error");
  }
}

// DECRYPTION
function decryptMessage() {
  try {
    const key = document.getElementById("decryptKey").value;
    const input = document.getElementById("cipherInput").value;

    if (!key.trim()) {
      throw new Error("Enter a keyword.");
    }

    if (!input.trim()) {
      throw new Error("Enter ciphertext.");
    }

    const matrix = buildMatrix(key);
    const ciphertext = cleanLetters(input);

    if (!ciphertext.length) {
      throw new Error("Ciphertext must contain letters.");
    }

    if (ciphertext.length % 2 !== 0) {
      throw new Error(
        "Ciphertext must contain an even number of letters."
      );
    }

    const pairs = [];

    for (let i = 0; i < ciphertext.length; i += 2) {
      pairs.push(ciphertext.slice(i, i + 2));
    }

    setMatrix("decryptMatrix", matrix);

    let plaintext = "";
    const steps = [];

    for (const pair of pairs) {
      const result = transformPair(pair, matrix, "decrypt");

      plaintext += result.result;

      steps.push({
        input: pair,
        output: result.result,
        rule: result.rule,
        explanation: result.explanation
      });
    }

    document.getElementById("decryptPairs").textContent =
      pairs.join(" | ");

    document.getElementById("decryptedText").textContent =
      plaintext;

    document.getElementById("cleanedDecryptedText").textContent =
      removeLikelyFillers(plaintext);

    showSteps("decryptionSteps", steps);

    showStatus(
      "decryptStatus",
      "Decryption completed successfully.",
      "ok"
    );
  } catch (error) {
    showStatus("decryptStatus", error.message, "error");
  }
}

// MATRIX GENERATOR
function generateMatrix() {
  try {
    const key = document.getElementById("matrixKey").value;

    if (!key.trim()) {
      throw new Error("Enter a keyword.");
    }

    const matrix = buildMatrix(key);
    const container = document.getElementById("displayMatrix");

    container.classList.remove("empty");
    container.innerHTML = matrixHTML(matrix);
  } catch (error) {
    const container = document.getElementById("displayMatrix");

    container.className = "matrix-large-box empty";
    container.textContent = error.message;
  }
}

// CLEAR ENCRYPTION FIELDS
function clearEncryption() {
  document.getElementById("encryptKey").value = "";
  document.getElementById("plaintext").value = "";

  document.getElementById("encryptMatrix").className =
    "matrix-box empty";

  document.getElementById("encryptMatrix").textContent =
    "Enter a keyword to generate the matrix.";

  document.getElementById("preparedText").textContent = "—";
  document.getElementById("encryptPairs").textContent = "—";
  document.getElementById("ciphertext").textContent = "—";

  document.getElementById("encryptionSteps").className = "empty";

  document.getElementById("encryptionSteps").textContent =
    "Encrypt a message to see the steps.";

  showStatus("encryptStatus", "");
}

// CLEAR DECRYPTION FIELDS
function clearDecryption() {
  document.getElementById("decryptKey").value = "";
  document.getElementById("cipherInput").value = "";

  document.getElementById("decryptMatrix").className =
    "matrix-box empty";

  document.getElementById("decryptMatrix").textContent =
    "Enter a keyword to generate the matrix.";

  document.getElementById("decryptPairs").textContent = "—";
  document.getElementById("decryptedText").textContent = "—";
  document.getElementById("cleanedDecryptedText").textContent = "—";

  document.getElementById("decryptionSteps").className = "empty";

  document.getElementById("decryptionSteps").textContent =
    "Decrypt a message to see the steps.";

  showStatus("decryptStatus", "");
}

// INITIAL EXAMPLE MATRIX
function initHeroMatrix() {
  const matrix = buildMatrix("MONARCHY");

  document.getElementById("heroMatrix").innerHTML =
    matrixHTML(matrix);
}

// SET UP LOGIN AND BUTTONS
document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("loginForm");
  const loginScreen = document.getElementById("loginScreen");
  const appShell = document.getElementById("appShell");
  const loginStatus = document.getElementById("loginStatus");

  // Demo-only login check.
  loginForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const username =
      document.getElementById("loginUsername").value.trim();

    const password =
      document.getElementById("loginPassword").value;

    if (username === "demo" && password === "playfair123") {
      loginStatus.textContent =
        "Login successful. Opening your project…";

      loginStatus.className = "login-status success";

      loginScreen.hidden = true;
      appShell.hidden = false;

      initHeroMatrix();
    } else {
      loginStatus.textContent =
        "Incorrect username or password. Please try again.";

      loginStatus.className = "login-status error";
    }
  });

  initHeroMatrix();

  document.getElementById("encryptBtn")
    .addEventListener("click", encryptMessage);

  document.getElementById("decryptBtn")
    .addEventListener("click", decryptMessage);

  document.getElementById("generateMatrixBtn")
    .addEventListener("click", generateMatrix);

  document.getElementById("clearEncryptBtn")
    .addEventListener("click", clearEncryption);

  document.getElementById("clearDecryptBtn")
    .addEventListener("click", clearDecryption);

  document.getElementById("matrixKey")
    .addEventListener("input", generateMatrix);
});
