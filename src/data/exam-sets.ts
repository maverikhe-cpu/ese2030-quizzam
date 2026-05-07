import type { Question, ExamSet } from "@/types/exam";

const finalMock1Questions: Question[] = [
  // ============================================================
  // WEEKS 1-3: Systems, Vector Spaces, Linear Maps, FTLA (8 questions)
  // ============================================================

  // Q1 — Core, Week 1, LU/solving systems
  {
    id: 1,
    week: 1,
    topics: ["LU decomposition", "forward substitution", "solving systems"],
    difficulty: "core",
    stem: "Suppose $A = LU$ where $L$ is lower triangular with ones on the diagonal and $U$ is upper triangular. To solve $A\\mathbf{x} = \\mathbf{b}$, one first solves $L\\mathbf{y} = \\mathbf{b}$ for $\\mathbf{y}$, then solves:",
    options: [
      { letter: "A", text: "$U\\mathbf{x} = \\mathbf{y}$", isCorrect: true },
      { letter: "B", text: "$U\\mathbf{x} = \\mathbf{b}$", isCorrect: false },
      { letter: "C", text: "$L\\mathbf{x} = \\mathbf{y}$", isCorrect: false },
      { letter: "D", text: "$A\\mathbf{x} = \\mathbf{y}$", isCorrect: false },
      { letter: "E", text: "$L^T \\mathbf{x} = \\mathbf{y}$", isCorrect: false },
    ],
    correctAnswer: "A",
    explanation: "The LU method factors $A = LU$. Given $A\\mathbf{x} = \\mathbf{b}$, substitute: $LU\\mathbf{x} = \\mathbf{b}$. Set $\\mathbf{y} = U\\mathbf{x}$, so $L\\mathbf{y} = \\mathbf{b}$ (forward substitution). Then $U\\mathbf{x} = \\mathbf{y}$ (back substitution).",
    distractorAnalysis: [
      { option: "B", type: "trick-answer", reason: "Twin pair to (A): uses b instead of y — forgot the intermediate substitution step" },
      { option: "C", type: "trick-answer", reason: "Uses L instead of U for the second solve — confused which triangular matrix applies at each stage" },
      { option: "D", type: "trick-answer", reason: "Uses A instead of U — undoes the entire point of the factorization" },
      { option: "E", type: "trick-answer", reason: "Uses $L^T$ instead of U — confused transpose with upper triangular" },
    ],
    hasPartialCredit: false,
  },

  // Q2 — Core, Week 2, vector space axioms
  {
    id: 2,
    week: 2,
    topics: ["vector space axioms", "zero vector", "closure"],
    difficulty: "core",
    stem: "Which of the following is NOT a requirement for a set $V$ with operations of addition and scalar multiplication to be a vector space?",
    options: [
      { letter: "A", text: "For every $\\mathbf{v} \\in V$, there exists $-\\mathbf{v} \\in V$ such that $\\mathbf{v} + (-\\mathbf{v}) = \\mathbf{0}$", isCorrect: false },
      { letter: "B", text: "If $\\mathbf{u}, \\mathbf{v} \\in V$, then $\\mathbf{u} + \\mathbf{v} \\in V$", isCorrect: false },
      { letter: "C", text: "There exists $\\mathbf{v}_0 \\in V$ such that $\\mathbf{v}_0 + \\mathbf{v}_0 = \\mathbf{v}_0$ for every $\\mathbf{v} \\in V$", isCorrect: true },
      { letter: "D", text: "$c(\\mathbf{u} + \\mathbf{v}) = c\\mathbf{u} + c\\mathbf{v}$ for all scalars $c$ and $\\mathbf{u}, \\mathbf{v} \\in V$", isCorrect: false },
      { letter: "E", text: "$1 \\cdot \\mathbf{v} = \\mathbf{v}$ for every $\\mathbf{v} \\in V$", isCorrect: false },
    ],
    correctAnswer: "C",
    explanation: "Option (C) describes something like an absorbing element, which is not a vector space axiom. The actual axiom requires a zero vector $\\mathbf{0}$ such that $\\mathbf{0} + \\mathbf{v} = \\mathbf{v}$ for every $\\mathbf{v}$. Option (C) has the wrong structure — it requires some fixed $\\mathbf{v}_0$ satisfying $\\mathbf{v}_0 + \\mathbf{v}_0 = \\mathbf{v}_0$, which would just mean $\\mathbf{v}_0 = \\mathbf{0}$, but the axiom requires $\\mathbf{0} + \\mathbf{v} = \\mathbf{v}$ (adding zero to *any* vector), not $\\mathbf{v}_0 + \\mathbf{v}_0 = \\mathbf{v}_0$.",
    distractorAnalysis: [
      { option: "A", type: "trick-answer", reason: "This IS an axiom (existence of additive inverses) — the student must recognize it as valid" },
      { option: "B", type: "trick-answer", reason: "This IS an axiom (closure under addition) — must recognize as valid" },
      { option: "D", type: "trick-answer", reason: "This IS an axiom (distributivity of scalar over vector addition) — must recognize as valid" },
      { option: "E", type: "trick-answer", reason: "This IS an axiom (scalar multiplicative identity) — must recognize as valid" },
    ],
    hasPartialCredit: false,
  },

  // Q3 — Deeper, Week 3, FTLA dimension count
  {
    id: 3,
    week: 3,
    topics: ["FTLA", "kernel", "image", "rank-nullity", "cokernel", "dimension"],
    difficulty: "deeper",
    stem: "Let $T : \\mathbb{R}^7 \\to \\mathbb{R}^5$ be a linear transformation with $\\dim(\\ker T) = 3$. What is $\\dim(\\mathrm{im}\\, T) + \\dim(\\mathrm{coker}\\, T)$?",
    options: [
      { letter: "A", text: "$2$", isCorrect: false },
      { letter: "B", text: "$3$", isCorrect: false },
      { letter: "C", text: "$4$", isCorrect: false },
      { letter: "D", text: "$5$", isCorrect: true },
      { letter: "E", text: "$7$", isCorrect: false },
    ],
    correctAnswer: "D",
    explanation: "By rank-nullity: $\\dim(\\mathrm{im}\\, T) = \\dim(\\mathbb{R}^7) - \\dim(\\ker T) = 7 - 3 = 4$. The cokernel is $\\mathbb{R}^5 / \\mathrm{im}\\, T$, so $\\dim(\\mathrm{coker}\\, T) = 5 - 4 = 1$. Therefore $\\dim(\\mathrm{im}\\, T) + \\dim(\\mathrm{coker}\\, T) = 4 + 1 = 5$. Note the sum always equals the codomain dimension: $\\dim(\\mathrm{im}\\, T) + \\dim(\\mathrm{coker}\\, T) = \\dim(W)$.",
    distractorAnalysis: [
      { option: "A", type: "trick-answer", reason: "Equals $\\dim(W) - \\dim(V) + \\dim(\\ker T) = 5 - 7 + 3 = 1$... no, probably confused dimensions" },
      { option: "B", type: "trick-answer", reason: "Equals $\\dim(\\ker T) = 3$ — confused kernel dimension with the quantity asked" },
      { option: "C", type: "partial-credit", reason: "Equals $\\dim(\\mathrm{im}\\, T) = 4$ alone — correctly found the image dimension but forgot the question asks for the sum with cokernel" },
      { option: "E", type: "trick-answer", reason: "Equals the domain dimension $7$ — did not apply rank-nullity at all" },
    ],
    hasPartialCredit: true,
    partialCreditOptions: ["C"],
  },

  // Q4 — Core, Week 3, coim/coker definitions
  {
    id: 4,
    week: 3,
    topics: ["coimage", "cokernel", "quotient space", "FTLA"],
    difficulty: "core",
    stem: "Let $T : V \\to W$ be a linear transformation. Which of the following correctly defines $\\mathrm{coim}(T)$ and $\\mathrm{coker}(T)$?",
    options: [
      { letter: "A", text: "$\\mathrm{coim}(T) = V / \\ker(T)$, $\\;\\mathrm{coker}(T) = W / \\mathrm{im}(T)$", isCorrect: true },
      { letter: "B", text: "$\\mathrm{coim}(T) = V / \\mathrm{im}(T)$, $\\;\\mathrm{coker}(T) = W / \\ker(T)$", isCorrect: false },
      { letter: "C", text: "$\\mathrm{coim}(T) = \\ker(T)^\\perp$, $\\;\\mathrm{coker}(T) = \\mathrm{im}(T)^\\perp$", isCorrect: false },
      { letter: "D", text: "$\\mathrm{coim}(T) = \\mathrm{im}(T)$, $\\;\\mathrm{coker}(T) = \\ker(T)$", isCorrect: false },
      { letter: "E", text: "$\\mathrm{coim}(T) = W / \\ker(T)$, $\\;\\mathrm{coker}(T) = V / \\mathrm{im}(T)$", isCorrect: false },
    ],
    correctAnswer: "A",
    explanation: "The coimage is the quotient $V / \\ker(T)$ — elements of the domain modded out by the kernel. The cokernel is $W / \\mathrm{im}(T)$ — elements of the codomain modded out by the image. The FTLA states $\\mathrm{coim}(T) \\cong \\mathrm{im}(T)$ via the natural isomorphism.",
    distractorAnalysis: [
      { option: "B", type: "trick-answer", reason: "Twin pair to (A): swapped ker and im between domain and codomain — the most common confusion" },
      { option: "C", type: "partial-credit", reason: "Correct in inner product spaces where $V/W \\cong W^\\perp$, but not the general definition — these are equivalent characterizations only when an inner product exists" },
      { option: "D", type: "trick-answer", reason: "Equates quotient constructions with their isomorphic counterparts — confused the definition with the FTLA isomorphism" },
      { option: "E", type: "trick-answer", reason: "Swapped domain V and codomain W entirely" },
    ],
    hasPartialCredit: true,
    partialCreditOptions: ["C"],
  },

  // Q5 — Core, Week 2, linear independence
  {
    id: 5,
    week: 2,
    topics: ["linear independence", "span", "basis"],
    difficulty: "core",
    stem: "Vectors $\\mathbf{v}_1, \\ldots, \\mathbf{v}_k$ in a vector space $V$ are linearly independent if and only if:",
    options: [
      { letter: "A", text: "Every vector in $V$ can be written as a linear combination of $\\mathbf{v}_1, \\ldots, \\mathbf{v}_k$", isCorrect: false },
      { letter: "B", text: "The only solution to $c_1 \\mathbf{v}_1 + \\cdots + c_k \\mathbf{v}_k = \\mathbf{0}$ is $c_1 = \\cdots = c_k = 0$", isCorrect: true },
      { letter: "C", text: "$\\mathbf{v}_1, \\ldots, \\mathbf{v}_k$ are pairwise orthogonal", isCorrect: false },
      { letter: "D", text: "$k = \\dim(V)$", isCorrect: false },
      { letter: "E", text: "None of the above", isCorrect: false },
    ],
    correctAnswer: "B",
    explanation: "Linear independence means the *only* linear combination equaling zero is the trivial one. (A) describes spanning, not independence. (C) requires an inner product and is sufficient but not necessary. (D) confuses the count with a basis requirement.",
    distractorAnalysis: [
      { option: "A", type: "trick-answer", reason: "Describes spanning — confused linear independence with spanning" },
      { option: "C", type: "trick-answer", reason: "Orthogonality implies independence but is not equivalent — needs inner product structure" },
      { option: "D", type: "trick-answer", reason: "Confuses the dimension of a basis with the property of independence — independent sets can have fewer vectors than dim(V)" },
      { option: "E", type: "trick-answer", reason: "Escape hatch — (B) is genuinely correct" },
    ],
    hasPartialCredit: false,
  },

  // Q6 — Deeper, Week 3, FTLA isomorphism
  {
    id: 6,
    week: 3,
    topics: ["FTLA", "natural isomorphism", "coimage", "image"],
    difficulty: "deeper",
    stem: "The Fundamental Theorem of Linear Algebra states that for a linear map $T : V \\to W$:",
    options: [
      { letter: "A", text: "$\\ker(T) \\cong \\mathrm{coker}(T)$", isCorrect: false },
      { letter: "B", text: "$V / \\ker(T) \\cong \\mathrm{im}(T)$", isCorrect: true },
      { letter: "C", text: "$V / \\mathrm{im}(T) \\cong \\ker(T)$", isCorrect: false },
      { letter: "D", text: "$\\dim(V) = \\dim(W)$ whenever $T$ is injective", isCorrect: false },
      { letter: "E", text: "$\\mathrm{coim}(T) \\cong \\mathrm{coker}(T)$", isCorrect: false },
    ],
    correctAnswer: "B",
    explanation: "The FTLA gives the natural isomorphism $\\mathrm{coim}(T) = V/\\ker(T) \\cong \\mathrm{im}(T)$. The map is $[\\mathbf{v}] \\mapsto T(\\mathbf{v})$, which is well-defined because $T$ is constant on each coset $[\\mathbf{v}] = \\mathbf{v} + \\ker(T)$.",
    distractorAnalysis: [
      { option: "A", type: "trick-answer", reason: "Swaps coker for im — confused which pair are isomorphic" },
      { option: "C", type: "trick-answer", reason: "Twin pair to (B): swapped ker and im, and domain V for codomain — the most common error" },
      { option: "D", type: "trick-answer", reason: "A true statement (injective implies dim(V) ≤ dim(W)) but not the FTLA — correct fact, wrong theorem" },
      { option: "E", type: "trick-answer", reason: "Confuses coimage with cokernel — these are generally NOT isomorphic" },
    ],
    hasPartialCredit: false,
  },

  // Q7 — Core, Week 2, subspaces
  {
    id: 7,
    week: 2,
    topics: ["subspace", "vector space", "closure"],
    difficulty: "core",
    stem: "Let $V = \\mathbb{R}^3$. Which of the following subsets is a subspace of $V$?",
    options: [
      { letter: "A", text: "All vectors $\\mathbf{v}$ with $v_1 \\geq 0$", isCorrect: false },
      { letter: "B", text: "All vectors $\\mathbf{v}$ with $v_1 = v_2 = v_3$", isCorrect: true },
      { letter: "C", text: "All vectors $\\mathbf{v}$ with $\\|\\mathbf{v}\\| = 1$", isCorrect: false },
      { letter: "D", text: "All vectors $\\mathbf{v}$ with $v_1 v_2 = 0$", isCorrect: false },
      { letter: "E", text: "All vectors $\\mathbf{v}$ with $v_1 + v_2 + v_3 = 1$", isCorrect: false },
    ],
    correctAnswer: "B",
    explanation: "The set of vectors $\\{(a, a, a) : a \\in \\mathbb{R}\\}$ is the span of $(1,1,1)$ — a one-dimensional subspace. It contains zero, and is closed under addition and scalar multiplication. (A) fails closure under $-1$ scaling. (C) fails because $\\mathbf{0}$ is not in the set. (D) fails: $(1,0,0) + (0,1,0) = (1,1,0)$ but $1 \\cdot 1 \\neq 0$. (E) fails because $\\mathbf{0}$ doesn't satisfy the equation.",
    distractorAnalysis: [
      { option: "A", type: "trick-answer", reason: "Fails scalar multiplication: $(-1)(1,0,0) = (-1,0,0)$ has $v_1 < 0$ — not closed under negative scaling" },
      { option: "C", type: "trick-answer", reason: "The unit sphere is not closed under addition or scalar multiplication — confuses geometric intuition with algebraic structure" },
      { option: "D", type: "trick-answer", reason: "Union of coordinate planes — not closed under addition (union ≠ subspace)" },
      { option: "E", type: "trick-answer", reason: "An affine hyperplane (not through origin) — not a subspace since $\\mathbf{0} \\notin$ set" },
    ],
    hasPartialCredit: false,
  },

  // Q8 — Core, Week 1, row operations / echelon form
  {
    id: 8,
    week: 1,
    topics: ["row reduction", "pivot columns", "rank"],
    difficulty: "core",
    stem: "After row-reducing a $4 \\times 6$ matrix $A$ to reduced row echelon form, you find 3 pivot columns. What is $\\dim(\\ker A)$?",
    options: [
      { letter: "A", text: "$3$", isCorrect: false },
      { letter: "B", text: "$4$", isCorrect: false },
      { letter: "C", text: "$1$", isCorrect: false },
      { letter: "D", text: "$3$ free variables", isCorrect: true },
      { letter: "E", text: "$6$", isCorrect: false },
    ],
    correctAnswer: "D",
    explanation: "A $4 \\times 6$ matrix has 6 columns. With 3 pivots, there are $6 - 3 = 3$ free variables. Each free variable corresponds to one dimension of $\\ker(A)$, so $\\dim(\\ker A) = 3$. Option (D) states this correctly.",
    distractorAnalysis: [
      { option: "A", type: "trick-answer", reason: "Equals the number of pivots (rank), not nullity — confused rank with dim(ker)" },
      { option: "B", type: "trick-answer", reason: "Equals the number of rows — confused rows with columns" },
      { option: "C", type: "trick-answer", reason: "$4 - 3 = 1$ — subtracted pivots from rows instead of columns" },
      { option: "E", type: "trick-answer", reason: "Equals the number of columns — forgot to subtract pivots" },
    ],
    hasPartialCredit: false,
  },

  // ============================================================
  // WEEKS 4-6: Bases, Inner Products, Orthogonal Decomp, QR (10 questions)
  // ============================================================

  // Q9 — Core, Week 4, basis and dimension
  {
    id: 9,
    week: 4,
    topics: ["basis", "dimension", "polynomial spaces"],
    difficulty: "core",
    stem: "What is $\\dim(\\mathcal{P}_3)$, the vector space of polynomials of degree at most 3?",
    options: [
      { letter: "A", text: "$3$", isCorrect: false },
      { letter: "B", text: "$4$", isCorrect: true },
      { letter: "C", text: "$2$", isCorrect: false },
      { letter: "D", text: "$5$", isCorrect: false },
      { letter: "E", text: "It depends on the field", isCorrect: false },
    ],
    correctAnswer: "B",
    explanation: "$\\mathcal{P}_3 = \\{a_0 + a_1 t + a_2 t^2 + a_3 t^3\\}$ has basis $\\{1, t, t^2, t^3\\}$ — four basis vectors, so $\\dim(\\mathcal{P}_3) = 4$. In general, $\\dim(\\mathcal{P}_n) = n + 1$.",
    distractorAnalysis: [
      { option: "A", type: "trick-answer", reason: "Off by one — used the degree (3) instead of the number of basis vectors (n+1 = 4)" },
      { option: "C", type: "trick-answer", reason: "Off by two — possibly confused with $\\mathcal{P}_2$ or subtracted incorrectly" },
      { option: "D", type: "trick-answer", reason: "Off by one in the other direction — used n+2 instead of n+1" },
      { option: "E", type: "trick-answer", reason: "Naive escape hatch — dimension is well-defined regardless of the field (for finite-dimensional spaces over the reals)" },
    ],
    hasPartialCredit: false,
  },

  // Q10 — Core, Week 5, inner product axioms
  {
    id: 10,
    week: 5,
    topics: ["inner product", "symmetry", "linearity", "positive definiteness"],
    difficulty: "recall",
    stem: "Which of the following is a valid inner product on $\\mathbb{R}^2$?",
    options: [
      { letter: "A", text: "$\\langle \\mathbf{u}, \\mathbf{v} \\rangle = u_1 v_2 + u_2 v_1$", isCorrect: false },
      { letter: "B", text: "$\\langle \\mathbf{u}, \\mathbf{v} \\rangle = u_1 v_1 + 2u_2 v_2$", isCorrect: true },
      { letter: "C", text: "$\\langle \\mathbf{u}, \\mathbf{v} \\rangle = u_1 v_1 - u_2 v_2$", isCorrect: false },
      { letter: "D", text: "$\\langle \\mathbf{u}, \\mathbf{v} \\rangle = (u_1 + u_2)(v_1 + v_2)$", isCorrect: false },
      { letter: "E", text: "$\\langle \\mathbf{u}, \\mathbf{v} \\rangle = u_1^2 v_1 + u_2^2 v_2$", isCorrect: false },
    ],
    correctAnswer: "B",
    explanation: "An inner product must be symmetric, bilinear (linear in each argument), and positive definite ($\\langle \\mathbf{v}, \\mathbf{v} \\rangle > 0$ for $\\mathbf{v} \\neq 0$). Option (B) is $\\langle \\mathbf{u}, \\mathbf{v} \\rangle = u_1 v_1 + 2u_2 v_2$, which is symmetric, bilinear, and $\\langle \\mathbf{v}, \\mathbf{v} \\rangle = v_1^2 + 2v_2^2 > 0$ for $\\mathbf{v} \\neq 0$.",
    distractorAnalysis: [
      { option: "A", type: "trick-answer", reason: "Not bilinear in the correct way — also $\\langle (1,0),(1,0) \\rangle = 0$ but $(1,0) \\neq 0$, failing positive definiteness" },
      { option: "C", type: "trick-answer", reason: "Fails positive definiteness: $\\langle (0,1),(0,1) \\rangle = -1 < 0$ — this is actually an indefinite bilinear form (Lorentzian signature)" },
      { option: "D", type: "trick-answer", reason: "Fails: $\\langle (1,-1),(1,-1) \\rangle = 0$ but $(1,-1) \\neq 0$ — not positive definite" },
      { option: "E", type: "trick-answer", reason: "Not bilinear (not linear in either argument due to the squares) — violates the linearity axiom" },
    ],
    hasPartialCredit: false,
  },

  // Q11 — Deeper, Week 6, orthogonal projection
  {
    id: 11,
    week: 6,
    topics: ["orthogonal projection", "best approximation", "orthogonal complement"],
    difficulty: "deeper",
    stem: "Which of the following is the best fundamental description of the orthogonal projection $\\Pi_W(\\mathbf{v})$ of a vector $\\mathbf{v}$ onto a subspace $W$?",
    options: [
      { letter: "A", text: "The vector in $W$ closest to $\\mathbf{v}$", isCorrect: true },
      { letter: "B", text: "The unique vector $\\mathbf{w} \\in W$ such that $\\mathbf{v} - \\mathbf{w} \\in W^\\perp$", isCorrect: false },
      { letter: "C", text: "An idempotent linear map: $\\Pi_W^2 = \\Pi_W$", isCorrect: false },
      { letter: "D", text: "$\\Pi_W = A(A^T A)^{-1} A^T$ where columns of $A$ form a basis for $W$", isCorrect: false },
      { letter: "E", text: "The component of $\\mathbf{v}$ in the $W$-direction of the decomposition $V = W \\oplus W^\\perp$", isCorrect: false },
    ],
    correctAnswer: "A",
    explanation: "The *most fundamental* description is the best approximation: $\\Pi_W(\\mathbf{v})$ is the unique vector in $W$ that minimizes $\\|\\mathbf{v} - \\mathbf{w}\\|$ over all $\\mathbf{w} \\in W$. Options (B)-(E) are all correct facts that *follow* from (A): (B) is the orthogonality condition that characterizes the minimizer, (C) is an algebraic property, (D) is a computational formula, and (E) is a structural consequence.",
    distractorAnalysis: [
      { option: "B", type: "partial-credit", reason: "Correct characterization via orthogonality condition — the error $\\mathbf{v} - \\Pi_W(\\mathbf{v})$ is orthogonal to $W$. This is equivalent but derivative: it's the *condition* that identifies the minimizer, not the geometric meaning itself" },
      { option: "C", type: "trick-answer", reason: "True algebraic property of projections but not the definition — idempotence is a consequence" },
      { option: "D", type: "trick-answer", reason: "A computational formula — derivative of the geometric concept, not the concept itself" },
      { option: "E", type: "partial-credit", reason: "Structurally correct — the decomposition into $W$ and $W^\\perp$ components — but describes the *role* in a decomposition rather than the *purpose* (closest point)" },
    ],
    hasPartialCredit: true,
    partialCreditOptions: ["B", "E"],
  },

  // Q12 — Core, Week 5, Gram-Schmidt / QR
  {
    id: 12,
    week: 5,
    topics: ["QR decomposition", "Gram-Schmidt", "orthogonal matrix"],
    difficulty: "core",
    stem: "In the QR decomposition $A = QR$ of an $m \\times n$ matrix with $m \\geq n$ and linearly independent columns, the matrix $Q$ has:",
    options: [
      { letter: "A", text: "Orthonormal rows", isCorrect: false },
      { letter: "B", text: "Orthonormal columns", isCorrect: true },
      { letter: "C", text: "Orthogonal rows and columns", isCorrect: false },
      { letter: "D", text: "Diagonal entries equal to 1", isCorrect: false },
      { letter: "E", text: "All entries positive", isCorrect: false },
    ],
    correctAnswer: "B",
    explanation: "The reduced QR decomposition produces $Q \\in \\mathbb{R}^{m \\times n}$ with orthonormal columns ($Q^T Q = I_n$) and $R \\in \\mathbb{R}^{n \\times n}$ upper triangular. The columns of $Q$ come from Gram-Schmidt orthonormalization of the columns of $A$.",
    distractorAnalysis: [
      { option: "A", type: "trick-answer", reason: "Twin pair to (B): swapped columns for rows — $Q$ has orthonormal columns, not necessarily rows ($Q Q^T \\neq I_m$ in the reduced form when $m > n$)" },
      { option: "C", type: "trick-answer", reason: "Only true when $m = n$ (square $Q$) — in general, columns are orthonormal but rows are not" },
      { option: "D", type: "trick-answer", reason: "Confuses $Q$ with $R$ — it's $R$ that has a specific diagonal structure" },
      { option: "E", type: "trick-answer", reason: "Gram-Schmidt can produce negative entries — no positivity constraint on $Q$" },
    ],
    hasPartialCredit: false,
  },

  // Q13 — Core, Week 6, pseudoinverse
  {
    id: 13,
    week: 6,
    topics: ["pseudoinverse", "least squares", "minimum norm solution"],
    difficulty: "core",
    stem: "For a matrix $A$ with full column rank, the vector $\\hat{\\mathbf{x}} = A^\\dagger \\mathbf{b}$ satisfies:",
    options: [
      { letter: "A", text: "$\\hat{\\mathbf{x}} \\in \\ker(A)$", isCorrect: false },
      { letter: "B", text: "$\\hat{\\mathbf{x}}$ is the exact solution to $A\\mathbf{x} = \\mathbf{b}$", isCorrect: false },
      { letter: "C", text: "$\\hat{\\mathbf{x}} \\in \\ker(A)^\\perp = \\mathrm{im}(A^T)$ and minimizes $\\|\\mathbf{b} - A\\mathbf{x}\\|$", isCorrect: true },
      { letter: "D", text: "$\\hat{\\mathbf{x}} \\in \\mathrm{im}(A)^\\perp$", isCorrect: false },
      { letter: "E", text: "Both (B) and (D)", isCorrect: false },
    ],
    correctAnswer: "C",
    explanation: "The pseudoinverse solution $\\hat{\\mathbf{x}} = A^\\dagger \\mathbf{b}$ is the minimum-norm least-squares solution. It lies in $\\ker(A)^\\perp = \\mathrm{im}(A^T)$ (the FTLA equivalence) and minimizes the residual $\\|\\mathbf{b} - A\\mathbf{x}\\|$.",
    distractorAnalysis: [
      { option: "A", type: "trick-answer", reason: "Confused orthogonal complement with the subspace itself — $\\hat{\\mathbf{x}}$ is in $\\ker(A)^\\perp$, not $\\ker(A)$" },
      { option: "B", type: "trick-answer", reason: "Only exact when $\\mathbf{b} \\in \\mathrm{im}(A)$ — in general it's a least-squares solution, not an exact one" },
      { option: "D", type: "trick-answer", reason: "Domain-codomain confusion — $\\mathrm{im}(A)^\\perp$ is in the codomain, but $\\hat{\\mathbf{x}}$ lives in the domain" },
      { option: "E", type: "trick-answer", reason: "Neither (B) nor (D) is correct — tempting combine option for the uncertain student" },
    ],
    hasPartialCredit: false,
  },

  // Q14 — Core, Week 5, cosine similarity
  {
    id: 14,
    week: 5,
    topics: ["cosine similarity", "inner product", "angle between vectors"],
    difficulty: "core",
    stem: "The cosine of the angle between nonzero vectors $\\mathbf{u}$ and $\\mathbf{v}$ in an inner product space is:",
    options: [
      { letter: "A", text: "$\\dfrac{\\langle \\mathbf{u}, \\mathbf{v} \\rangle}{\\|\\mathbf{u}\\| \\|\\mathbf{v}\\|}$", isCorrect: false },
      { letter: "B", text: "$\\dfrac{\\langle \\mathbf{u}, \\mathbf{v} \\rangle}{\\|\\mathbf{u} + \\mathbf{v}\\|}$", isCorrect: false },
      { letter: "C", text: "$\\dfrac{\\|\\mathbf{u} + \\mathbf{v}\\|^2}{\\|\\mathbf{u}\\|^2 + \\|\\mathbf{v}\\|^2}$", isCorrect: false },
      { letter: "D", text: "$\\langle \\hat{\\mathbf{u}}, \\hat{\\mathbf{v}} \\rangle$ where $\\hat{\\mathbf{u}}, \\hat{\\mathbf{v}}$ are unit vectors", isCorrect: false },
      { letter: "E", text: "Both (A) and (D)", isCorrect: true },
    ],
    correctAnswer: "E",
    explanation: "The cosine formula is $\\cos \\theta = \\frac{\\langle \\mathbf{u}, \\mathbf{v} \\rangle}{\\|\\mathbf{u}\\| \\|\\mathbf{v}\\|}$, which is option (A). Option (D) gives the same value since $\\langle \\hat{\\mathbf{u}}, \\hat{\\mathbf{v}} \\rangle = \\frac{\\langle \\mathbf{u}, \\mathbf{v} \\rangle}{\\|\\mathbf{u}\\| \\|\\mathbf{v}\\|}$ when $\\hat{\\mathbf{u}} = \\mathbf{u}/\\|\\mathbf{u}\\|$ and $\\hat{\\mathbf{v}} = \\mathbf{v}/\\|\\mathbf{v}\\|$. Both describe the same quantity, so (E) is correct.",
    distractorAnalysis: [
      { option: "A", type: "partial-credit", reason: "Correct formula but misses that (D) describes the same quantity — recognizes one formulation" },
      { option: "B", type: "trick-answer", reason: "Wrong denominator — uses norm of sum instead of product of norms" },
      { option: "C", type: "trick-answer", reason: "Unrelated ratio — not the cosine formula" },
      { option: "D", type: "partial-credit", reason: "Equivalent to (A) when $\\hat{\\mathbf{u}}, \\hat{\\mathbf{v}}$ are the unit vectors — recognizes one formulation" },
    ],
    hasPartialCredit: true,
    partialCreditOptions: ["A", "D"],
  },

  // Q15 — Core, Week 6, orthogonal complement
  {
    id: 15,
    week: 6,
    topics: ["orthogonal complement", "FTLA orthogonal version", "ker", "im"],
    difficulty: "core",
    stem: "For an $m \\times n$ matrix $A$, the orthogonal complement of $\\ker(A)$ in $\\mathbb{R}^n$ is:",
    options: [
      { letter: "A", text: "$\\mathrm{im}(A)$", isCorrect: false },
      { letter: "B", text: "$\\ker(A^T)$", isCorrect: false },
      { letter: "C", text: "$\\mathrm{im}(A^T)$", isCorrect: true },
      { letter: "D", text: "$\\ker(A)^\\perp$ in $\\mathbb{R}^m$", isCorrect: false },
      { letter: "E", text: "$\\mathrm{im}(A)^\\perp$", isCorrect: false },
    ],
    correctAnswer: "C",
    explanation: "The orthogonal version of the FTLA gives $\\ker(A)^\\perp = \\mathrm{im}(A^T)$ in $\\mathbb{R}^n$. Note that $\\ker(A)$ lives in $\\mathbb{R}^n$ (the domain), and so does its orthogonal complement $\\mathrm{im}(A^T) \\subseteq \\mathbb{R}^n$.",
    distractorAnalysis: [
      { option: "A", type: "trick-answer", reason: "Domain-codomain confusion: $\\mathrm{im}(A) \\subseteq \\mathbb{R}^m$, not $\\mathbb{R}^n$ — the orthogonal complement lives in the domain" },
      { option: "B", type: "trick-answer", reason: "This is $\\mathrm{im}(A)^\\perp$ in $\\mathbb{R}^m$, not $\\ker(A)^\\perp$ in $\\mathbb{R}^n$ — swapped which orthogonal complement was asked for" },
      { option: "D", type: "trick-answer", reason: "Wrong ambient space: $\\ker(A)^\\perp$ lives in $\\mathbb{R}^n$ (domain), not $\\mathbb{R}^m$ (codomain)" },
      { option: "E", type: "trick-answer", reason: "This is $\\ker(A^T)$ in $\\mathbb{R}^m$ — the 'other' orthogonal complement, not the one asked for" },
    ],
    hasPartialCredit: false,
  },

  // Q16 — Deeper, Week 6, adjoint
  {
    id: 16,
    week: 6,
    topics: ["adjoint", "self-adjoint", "orthogonal projection"],
    difficulty: "deeper",
    stem: "A linear map $T : V \\to V$ on an inner product space satisfies $T = T^*$ (it is self-adjoint). Which must be true?",
    options: [
      { letter: "A", text: "$T$ is an orthogonal projection", isCorrect: false },
      { letter: "B", text: "All eigenvalues of $T$ are real", isCorrect: true },
      { letter: "C", text: "$T$ is invertible", isCorrect: false },
      { letter: "D", text: "$\\langle T\\mathbf{u}, \\mathbf{v} \\rangle = 0$ for all $\\mathbf{u}, \\mathbf{v}$", isCorrect: false },
      { letter: "E", text: "$T^2 = T$", isCorrect: false },
    ],
    correctAnswer: "B",
    explanation: "The Spectral Theorem states that self-adjoint (symmetric, in $\\mathbb{R}$) operators have all real eigenvalues and are orthogonally diagonalizable. This is a necessary consequence of $T = T^*$. Options (A) and (E) require additionally that $T$ be idempotent ($T^2 = T$). Option (C) is false (the zero map is self-adjoint but not invertible).",
    distractorAnalysis: [
      { option: "A", type: "trick-answer", reason: "Orthogonal projections are self-adjoint AND idempotent — (A) requires an extra condition not stated" },
      { option: "C", type: "trick-answer", reason: "False — the zero map is self-adjoint but singular" },
      { option: "D", type: "trick-answer", reason: "Misreads the adjoint property — $T = T^*$ means $\\langle T\\mathbf{u}, \\mathbf{v} \\rangle = \\langle \\mathbf{u}, T\\mathbf{v} \\rangle$, not that the inner product is zero" },
      { option: "E", type: "trick-answer", reason: "Idempotence is an additional requirement — self-adjoint does not imply $T^2 = T$" },
    ],
    hasPartialCredit: false,
  },

  // Q17 — Core, Week 5, QR and scaling
  {
    id: 17,
    week: 5,
    topics: ["QR decomposition", "scaling", "triangular factor"],
    difficulty: "core",
    stem: "If $A = QR$ is the QR decomposition of $A$ and $c$ is a nonzero scalar, then the QR decomposition of $cA$ is:",
    options: [
      { letter: "A", text: "$(cQ) R$", isCorrect: false },
      { letter: "B", text: "$Q (cR)$", isCorrect: true },
      { letter: "C", text: "$(cQ)(cR)$", isCorrect: false },
      { letter: "D", text: "$Q R$ (unchanged)", isCorrect: false },
      { letter: "E", text: "Depends on the sign of $c$", isCorrect: false },
    ],
    correctAnswer: "B",
    explanation: "$cA = c(QR) = Q(cR)$. Since $cR$ is still upper triangular with the same sign-adjusted diagonal, and $Q$ still has orthonormal columns, $Q(cR)$ is the QR decomposition of $cA$. Option (A) would make $cQ$ not have unit-norm columns.",
    distractorAnalysis: [
      { option: "A", type: "trick-answer", reason: "Twin pair to (B): $(cQ)R$ makes $cQ$ have columns of norm $|c|$, not 1 — breaks the orthonormality requirement" },
      { option: "C", type: "trick-answer", reason: "Double-scales: $c^2 QR \\neq cA$ — over-applied the scalar" },
      { option: "D", type: "trick-answer", reason: "Ignores the scaling entirely" },
      { option: "E", type: "trick-answer", reason: "Unnecessary complication — $Q(cR)$ works for any nonzero $c$" },
    ],
    hasPartialCredit: false,
  },

  // Q18 — Core, Week 4, change of basis
  {
    id: 18,
    week: 4,
    topics: ["change of basis", "coordinate map", "similarity"],
    difficulty: "core",
    stem: "If $[T]_{\\mathcal{B}}$ is the matrix of a linear map $T$ in basis $\\mathcal{B}$ and $P$ is the change-of-basis matrix from $\\mathcal{B}$ to $\\mathcal{B}'$, then $[T]_{\\mathcal{B}'}$ equals:",
    options: [
      { letter: "A", text: "$P [T]_{\\mathcal{B}} P^{-1}$", isCorrect: true },
      { letter: "B", text: "$P^{-1} [T]_{\\mathcal{B}} P$", isCorrect: false },
      { letter: "C", text: "$P^T [T]_{\\mathcal{B}} P$", isCorrect: false },
      { letter: "D", text: "$[T]_{\\mathcal{B}}$", isCorrect: false },
      { letter: "E", text: "$P [T]_{\\mathcal{B}}$", isCorrect: false },
    ],
    correctAnswer: "A",
    explanation: "If $P$ takes coordinates in $\\mathcal{B}$ to coordinates in $\\mathcal{B}'$ (i.e., $[\\mathbf{v}]_{\\mathcal{B}'} = P [\\mathbf{v}]_{\\mathcal{B}}$), then $[T]_{\\mathcal{B}'} = P [T]_{\\mathcal{B}} P^{-1}$. To act on a $\\mathcal{B}'$-coordinate vector: first convert to $\\mathcal{B}$ coordinates ($P^{-1}$), apply $T$ in $\\mathcal{B}$ coordinates ($[T]_{\\mathcal{B}}$), then convert back ($P$).",
    distractorAnalysis: [
      { option: "B", type: "trick-answer", reason: "Twin pair to (A): swapped the roles of $P$ and $P^{-1}$ — this would be correct if $P$ went from $\\mathcal{B}'$ to $\\mathcal{B}$" },
      { option: "C", type: "trick-answer", reason: "Uses transpose instead of inverse — only valid when $P$ is orthogonal" },
      { option: "D", type: "trick-answer", reason: "Basis-independence — matrices of a linear map generally DO change with basis" },
      { option: "E", type: "trick-answer", reason: "One-sided conjugation — missing the $P^{-1}$ needed for proper change of basis" },
    ],
    hasPartialCredit: false,
  },

  // ============================================================
  // WEEKS 7-9: Eigenvalues, Diagonalization, Spectral, Markov (10 questions)
  // ============================================================

  // Q19 — Deeper, Week 7, best fundamental description of eigenvalue
  {
    id: 19,
    week: 7,
    topics: ["eigenvalue", "fundamental description", "invariant direction"],
    difficulty: "deeper",
    stem: "Which of the following is the best fundamental description of an eigenvalue $\\lambda$ of a square matrix $A$?",
    options: [
      { letter: "A", text: "A root of the characteristic polynomial $\\det(A - \\lambda I) = 0$", isCorrect: false },
      { letter: "B", text: "The scaling factor along an invariant direction: $A\\mathbf{v} = \\lambda \\mathbf{v}$ for some nonzero $\\mathbf{v}$", isCorrect: true },
      { letter: "C", text: "A value making $A - \\lambda I$ singular", isCorrect: false },
      { letter: "D", text: "$\\det(e^A) = e^{\\mathrm{tr}(A)}$ relates eigenvalues to the determinant of the exponential", isCorrect: false },
      { letter: "E", text: "A scalar satisfying $\\lambda = \\lim_{k \\to \\infty} \\frac{\\mathbf{x}_k^T A \\mathbf{x}_k}{\\mathbf{x}_k^T \\mathbf{x}_k}$ for power iteration", isCorrect: false },
    ],
    correctAnswer: "B",
    explanation: "The most fundamental description is the geometric meaning: an eigenvalue is the factor by which $A$ scales vectors along an invariant direction (eigenvector). Options (A) and (C) describe *how to find* eigenvalues, not *what they are*. Option (D) is a consequence. Option (E) describes the dominant eigenvalue via power iteration — a computational method, not the definition.",
    distractorAnalysis: [
      { option: "A", type: "partial-credit", reason: "Correct fact (how to compute eigenvalues) but describes the method, not the meaning — derivative of the fundamental concept" },
      { option: "C", type: "partial-credit", reason: "Equivalent to (A) algebraically but still describes how to identify eigenvalues, not what they represent geometrically" },
      { option: "D", type: "trick-answer", reason: "A true theorem ($\\det(e^A) = e^{\\mathrm{tr}(A)}$) but barely related to the definition of eigenvalue — seductive surface match" },
      { option: "E", type: "trick-answer", reason: "Describes power iteration convergence — only applies to the *dominant* eigenvalue, not eigenvalues in general" },
    ],
    hasPartialCredit: true,
    partialCreditOptions: ["A", "C"],
  },

  // Q20 — Core, Week 7, diagonalization conditions
  {
    id: 20,
    week: 7,
    topics: ["diagonalization", "eigenvectors", "linear independence"],
    difficulty: "core",
    stem: "A square matrix $A$ is diagonalizable if and only if:",
    options: [
      { letter: "A", text: "It has $n$ distinct eigenvalues", isCorrect: false },
      { letter: "B", text: "It has $n$ linearly independent eigenvectors", isCorrect: true },
      { letter: "C", text: "All eigenvalues are real", isCorrect: false },
      { letter: "D", text: "$\\det(A) \\neq 0$", isCorrect: false },
      { letter: "E", text: "The characteristic polynomial has no repeated roots", isCorrect: false },
    ],
    correctAnswer: "B",
    explanation: "Diagonalizability requires an eigenbasis — $n$ linearly independent eigenvectors. (A) is sufficient (distinct eigenvalues produce independent eigenvectors) but not necessary (e.g., $2I$ is diagonalizable with repeated eigenvalue 2). (E) is the same as (A) — no repeated roots means distinct eigenvalues, which is sufficient but not necessary.",
    distractorAnalysis: [
      { option: "A", type: "trick-answer", reason: "Sufficient but NOT necessary — confused sufficient condition with the definition. $I_n$ is diagonalizable with eigenvalue 1 repeated $n$ times" },
      { option: "C", type: "trick-answer", reason: "Irrelevant — complex eigenvalues don't prevent diagonalization (over $\\mathbb{C}$). And real eigenvalues don't guarantee it" },
      { option: "D", type: "trick-answer", reason: "Tests invertibility, not diagonalizability — singular matrices can be diagonalizable" },
      { option: "E", type: "trick-answer", reason: "Same as (A) in disguise — no repeated roots = distinct eigenvalues = sufficient but not necessary" },
    ],
    hasPartialCredit: false,
  },

  // Q21 — Core, Week 7, spectral theorem
  {
    id: 21,
    week: 7,
    topics: ["spectral theorem", "symmetric matrix", "orthogonal diagonalization"],
    difficulty: "core",
    stem: "If $A$ is a real symmetric matrix ($A = A^T$), the Spectral Theorem guarantees:",
    options: [
      { letter: "A", text: "All eigenvalues are positive", isCorrect: false },
      { letter: "B", text: "$A = Q \\Lambda Q^T$ for some orthogonal matrix $Q$ and diagonal $\\Lambda$", isCorrect: true },
      { letter: "C", text: "$A$ is always invertible", isCorrect: false },
      { letter: "D", text: "$A = Q \\Lambda Q^{-1}$ with $Q$ not necessarily orthogonal", isCorrect: false },
      { letter: "E", text: "All eigenvalues are distinct", isCorrect: false },
    ],
    correctAnswer: "B",
    explanation: "The Spectral Theorem for real symmetric matrices: $A = Q\\Lambda Q^T$ where $Q$ is orthogonal ($Q^T = Q^{-1}$) and $\\Lambda$ is diagonal with real eigenvalues. This is stronger than general diagonalizability — the eigenbasis can be chosen orthonormal.",
    distractorAnalysis: [
      { option: "A", type: "trick-answer", reason: "Eigenvalues are real, but not necessarily positive — confuses symmetric with positive definite" },
      { option: "C", type: "trick-answer", reason: "The zero matrix is symmetric but not invertible — confuses spectral theorem properties with invertibility" },
      { option: "D", type: "partial-credit", reason: "Technically true (orthogonal implies invertible), but misses the *key* strength of the spectral theorem: $Q$ is orthogonal, not just any invertible matrix" },
      { option: "E", type: "trick-answer", reason: "Repeated eigenvalues are allowed — $I_n$ is symmetric with eigenvalue 1 repeated $n$ times" },
    ],
    hasPartialCredit: true,
    partialCreditOptions: ["D"],
  },

  // Q22 — Core, Week 8, matrix exponential
  {
    id: 22,
    week: 8,
    topics: ["matrix exponential", "diagonalization", "eigenvalues of e^A"],
    difficulty: "core",
    stem: "If $A$ has eigenvalues $\\lambda_1 = 2$ and $\\lambda_2 = -1$, what are the eigenvalues of $e^A$?",
    options: [
      { letter: "A", text: "$e^2$ and $e^{-1}$", isCorrect: true },
      { letter: "B", text: "$e^2$ and $e^1$", isCorrect: false },
      { letter: "C", text: "$2e$ and $-e$", isCorrect: false },
      { letter: "D", text: "$e^2$ and $-e$", isCorrect: false },
      { letter: "E", text: "$e^A$ does not have eigenvalues", isCorrect: false },
    ],
    correctAnswer: "A",
    explanation: "When $A = V\\Lambda V^{-1}$, then $e^A = V e^{\\Lambda} V^{-1}$. So the eigenvalues of $e^A$ are $e^{\\lambda_i}$: $e^2$ and $e^{-1}$. This is the spectral mapping theorem applied to $f(x) = e^x$.",
    distractorAnalysis: [
      { option: "B", type: "trick-answer", reason: "Correct-structure-wrong-detail: raised to the correct power but missed the sign on $e^{-1}$ — computed $(-1)^?$ incorrectly" },
      { option: "C", type: "trick-answer", reason: "Linear scaling ($2e$ and $-e$) instead of exponential — confused $e \\cdot \\lambda$ with $e^{\\lambda}$" },
      { option: "D", type: "trick-answer", reason: "Partial: $e^2$ is correct but $-e$ assumes the sign carries outside the exponential — confused $e^{-1}$ with $-e$" },
      { option: "E", type: "trick-answer", reason: "False — the matrix exponential of any square matrix has eigenvalues" },
    ],
    hasPartialCredit: false,
  },

  // Q23 — Core, Week 9, Markov chains
  {
    id: 23,
    week: 9,
    topics: ["Markov chain", "column-stochastic", "stationary distribution"],
    difficulty: "core",
    stem: "A column-stochastic matrix $P$ satisfies $\\mathbf{x}_{k+1} = P\\mathbf{x}_k$ with each column of $P$ summing to 1. A stationary distribution $\\mathbf{x}^*$ satisfies:",
    options: [
      { letter: "A", text: "$P \\mathbf{x}^* = \\mathbf{0}$", isCorrect: false },
      { letter: "B", text: "$P \\mathbf{x}^* = \\mathbf{x}^*$", isCorrect: true },
      { letter: "C", text: "$\\mathbf{x}^* = P^{-1} \\mathbf{x}^*$", isCorrect: false },
      { letter: "D", text: "$P^T \\mathbf{x}^* = \\mathbf{x}^*$", isCorrect: false },
      { letter: "E", text: "$\\mathbf{x}^*$ has all entries equal to $1/n$", isCorrect: false },
    ],
    correctAnswer: "B",
    explanation: "A stationary distribution is a fixed point of the Markov iteration: $P\\mathbf{x}^* = \\mathbf{x}^*$, meaning $\\mathbf{x}^*$ is an eigenvector with eigenvalue 1. By Perron-Frobenius, for an irreducible stochastic matrix, this eigenvector exists, is unique, and has positive entries summing to 1.",
    distractorAnalysis: [
      { option: "A", type: "trick-answer", reason: "Confuses stationary with 'zeroed out' — stationary means unchanged, not zero" },
      { option: "C", type: "trick-answer", reason: "Uses $P^{-1}$ — stochastic matrices may not be invertible, and the fixed-point equation doesn't involve inversion" },
      { option: "D", type: "trick-answer", reason: "Convention collision: $P^T \\mathbf{x}^* = \\mathbf{x}^*$ would be the stationary distribution for a *row-stochastic* Markov chain — wrong convention" },
      { option: "E", type: "trick-answer", reason: "Only true for the uniform transition matrix — not a general property of stationary distributions" },
    ],
    hasPartialCredit: false,
  },

  // Q24 — Deeper, Week 7, similarity invariants
  {
    id: 24,
    week: 7,
    topics: ["similarity", "invariants", "trace", "determinant"],
    difficulty: "deeper",
    stem: "If $A$ and $B$ are similar matrices ($B = PAP^{-1}$), which of the following must be true?",
    options: [
      { letter: "A", text: "$\\mathrm{im}(A) = \\mathrm{im}(B)$", isCorrect: false },
      { letter: "B", text: "$\\ker(A) = \\ker(B)$", isCorrect: false },
      { letter: "C", text: "$\\mathrm{tr}(A) = \\mathrm{tr}(B)$ and $\\det(A) = \\det(B)$", isCorrect: true },
      { letter: "D", text: "$A$ and $B$ have the same eigenvectors", isCorrect: false },
      { letter: "E", text: "Both (A) and (B)", isCorrect: false },
    ],
    correctAnswer: "C",
    explanation: "Similarity preserves: eigenvalues, trace, determinant, characteristic polynomial, rank, and kernel *dimension*. It does NOT preserve: the specific kernel/im as subspaces (they transform under $P$), specific eigenvectors (eigenvectors of $B$ are $P$ times eigenvectors of $A$), or the column space as a set.",
    distractorAnalysis: [
      { option: "A", type: "trick-answer", reason: "The image as a *set* is not preserved — $\\mathrm{im}(B) = P(\\mathrm{im}(A))$, which is generally a different subspace. Only the *dimension* (rank) is preserved" },
      { option: "B", type: "trick-answer", reason: "Same issue: $\\ker(B) = P^{-1}(\\ker(A))$ — the kernel transforms, it isn't equal as a set" },
      { option: "D", type: "trick-answer", reason: "Eigenvectors transform: if $A\\mathbf{v} = \\lambda \\mathbf{v}$, then $B(P\\mathbf{v}) = \\lambda (P\\mathbf{v})$ — eigenvectors of $B$ are $P$ applied to eigenvectors of $A$, not the same vectors" },
      { option: "E", type: "trick-answer", reason: "Neither (A) nor (B) is correct — tempting combine option" },
    ],
    hasPartialCredit: false,
  },

  // Q25 — Core, Week 8, det(e^A) theorem
  {
    id: 25,
    week: 8,
    topics: ["matrix exponential", "determinant", "trace", "eigenvalues"],
    difficulty: "core",
    stem: "For any $n \\times n$ matrix $A$, $\\det(e^A) =$",
    options: [
      { letter: "A", text: "$e^{\\det(A)}$", isCorrect: false },
      { letter: "B", text: "$e^{\\mathrm{tr}(A)}$", isCorrect: true },
      { letter: "C", text: "$e^{\\|A\\|}$", isCorrect: false },
      { letter: "D", text: "$\\det(A) \\cdot e^n$", isCorrect: false },
      { letter: "E", text: "$\\det(A)^n$", isCorrect: false },
    ],
    correctAnswer: "B",
    explanation: "$\\det(e^A) = \\prod e^{\\lambda_i} = e^{\\sum \\lambda_i} = e^{\\mathrm{tr}(A)}$. This follows from the spectral mapping theorem: eigenvalues of $e^A$ are $e^{\\lambda_i}$, so the determinant (product of eigenvalues) equals $e^{\\sum \\lambda_i} = e^{\\mathrm{tr}(A)}$.",
    distractorAnalysis: [
      { option: "A", type: "trick-answer", reason: "Naive substitution: replaced tr(A) with det(A) — confuses sum of eigenvalues with product" },
      { option: "C", type: "trick-answer", reason: "Uses a norm — the formula relates to trace (sum of eigenvalues), not any norm" },
      { option: "D", type: "trick-answer", reason: "Unrelated formula — not derived from any standard theorem" },
      { option: "E", type: "trick-answer", reason: "No standard relation — purely a distractor" },
    ],
    hasPartialCredit: false,
  },

  // Q26 — Core, Week 9, Perron-Frobenius
  {
    id: 26,
    week: 9,
    topics: ["Perron-Frobenius", "dominant eigenvalue", "power iteration"],
    difficulty: "core",
    stem: "The Perron-Frobenius theorem guarantees that for an irreducible matrix with nonnegative entries, the eigenvalue of largest magnitude:",
    options: [
      { letter: "A", text: "Is real and positive with a corresponding eigenvector having all positive entries", isCorrect: true },
      { letter: "B", text: "Is always equal to 1", isCorrect: false },
      { letter: "C", text: "Has multiplicity equal to $n$", isCorrect: false },
      { letter: "D", text: "Is complex in general", isCorrect: false },
      { letter: "E", text: "Equals the spectral radius only for stochastic matrices", isCorrect: false },
    ],
    correctAnswer: "A",
    explanation: "Perron-Frobenius: for an irreducible nonnegative matrix, the spectral radius $\\rho(A)$ is itself an eigenvalue (called the Perron root), it is real and positive, and the corresponding eigenvector (Perron vector) has all positive entries. This eigenvalue is simple (multiplicity 1).",
    distractorAnalysis: [
      { option: "B", type: "trick-answer", reason: "The dominant eigenvalue equals 1 only for stochastic matrices — not a general property of nonnegative matrices" },
      { option: "C", type: "trick-answer", reason: "The Perron root is simple (algebraic multiplicity 1), not $n$-fold" },
      { option: "D", type: "trick-answer", reason: "The whole point of Perron-Frobenius is that the dominant eigenvalue is guaranteed real and positive" },
      { option: "E", type: "trick-answer", reason: "The spectral radius IS the dominant eigenvalue by definition, for any matrix — not specific to stochastic matrices" },
    ],
    hasPartialCredit: false,
  },

  // Q27 — Core, Week 8, Jordan form (structural)
  {
    id: 27,
    week: 8,
    topics: ["Jordan form", "diagonalizable", "nilpotent"],
    difficulty: "core",
    stem: "A matrix has a single eigenvalue $\\lambda$ with algebraic multiplicity $n$ and geometric multiplicity 1. Its Jordan form consists of:",
    options: [
      { letter: "A", text: "$n$ separate $1 \\times 1$ Jordan blocks", isCorrect: false },
      { letter: "B", text: "One $n \\times n$ Jordan block", isCorrect: true },
      { letter: "C", text: "$n$ diagonal entries all equal to $\\lambda$", isCorrect: false },
      { letter: "D", text: "A diagonal matrix with $\\lambda$ on the diagonal", isCorrect: false },
      { letter: "E", text: "Cannot be determined from the given information", isCorrect: false },
    ],
    correctAnswer: "B",
    explanation: "The geometric multiplicity equals the number of Jordan blocks for eigenvalue $\\lambda$. With geom. mult. = 1 and alg. mult. = $n$, there is exactly one Jordan block of size $n$. This is the maximally non-diagonalizable case.",
    distractorAnalysis: [
      { option: "A", type: "trick-answer", reason: "$n$ blocks would mean geometric multiplicity $n$ — contradicts the given geom. mult. = 1" },
      { option: "C", type: "trick-answer", reason: "Describes the diagonal entries of the Jordan block, but misses the superdiagonal 1s that make it non-diagonal" },
      { option: "D", type: "trick-answer", reason: "A diagonal matrix with $\\lambda$ repeated would mean the matrix IS $\\lambda I$ — but geom. mult. = 1 means it's NOT diagonalizable" },
      { option: "E", type: "trick-answer", reason: "Escape hatch — the Jordan structure is fully determined by algebraic and geometric multiplicities" },
    ],
    hasPartialCredit: false,
  },

  // Q28 — Deeper, Week 9, eigenvalues of A^k
  {
    id: 28,
    week: 9,
    topics: ["spectral mapping", "matrix powers", "eigenvalues"],
    difficulty: "deeper",
    stem: "If $A$ has eigenvalues $2$ and $-1$, what are the eigenvalues of $A^3$?",
    options: [
      { letter: "A", text: "$8$ and $-1$", isCorrect: true },
      { letter: "B", text: "$8$ and $1$", isCorrect: false },
      { letter: "C", text: "$6$ and $-3$", isCorrect: false },
      { letter: "D", text: "$2^3$ and $(-1)^3$, which depend on the eigenvectors", isCorrect: false },
      { letter: "E", text: "$8$ and $-1$, plus possibly new eigenvalues", isCorrect: false },
    ],
    correctAnswer: "A",
    explanation: "By the spectral mapping theorem, $f(A)$ has eigenvalues $f(\\lambda_i)$ for any polynomial (or analytic) function $f$. With $f(x) = x^3$: eigenvalues of $A^3$ are $2^3 = 8$ and $(-1)^3 = -1$.",
    distractorAnalysis: [
      { option: "B", type: "trick-answer", reason: "Correct-structure-wrong-detail: computed $2^3 = 8$ correctly but dropped the sign on $(-1)^3 = -1$, writing $1$ instead" },
      { option: "C", type: "trick-answer", reason: "Linear scaling ($3 \\cdot 2$ and $3 \\cdot (-1)$) instead of cubing — confused $\\lambda^3$ with $3\\lambda$" },
      { option: "D", type: "trick-answer", reason: "Shape-implies-property fallacy: eigenvalues of $A^k$ depend only on eigenvalues of $A$, not on eigenvectors" },
      { option: "E", type: "trick-answer", reason: "Matrix powers cannot introduce new eigenvalues — $A^3$ has exactly the same number of eigenvalues as $A$" },
    ],
    hasPartialCredit: false,
  },

  // ============================================================
  // WEEKS 10-11: SVD, PCA (10 questions)
  // ============================================================

  // Q29 — Core, Week 10, SVD structure
  {
    id: 29,
    week: 10,
    topics: ["SVD", "singular values", "U", "Sigma", "V"],
    difficulty: "core",
    stem: "For an $m \\times n$ matrix $A$ with SVD $A = U \\Sigma V^T$, the matrix $\\Sigma$ contains:",
    options: [
      { letter: "A", text: "The eigenvalues of $A$", isCorrect: false },
      { letter: "B", text: "The singular values $\\sigma_1 \\geq \\sigma_2 \\geq \\cdots \\geq 0$ on its diagonal", isCorrect: true },
      { letter: "C", text: "The eigenvalues of $A^T A$ directly (without square root)", isCorrect: false },
      { letter: "D", text: "The eigenvalues of $A A^T$", isCorrect: false },
      { letter: "E", text: "The right singular vectors as columns", isCorrect: false },
    ],
    correctAnswer: "B",
    explanation: "The SVD produces $\\Sigma \\in \\mathbb{R}^{m \\times n}$ with singular values $\\sigma_1 \\geq \\sigma_2 \\geq \\cdots \\geq 0$ on the main diagonal and zeros elsewhere. The singular values satisfy $\\sigma_i = \\sqrt{\\lambda_i(A^T A)}$.",
    distractorAnalysis: [
      { option: "A", type: "trick-answer", reason: "Eigenvalue-singular value confusion: singular values are non-negative and relate to $A^TA$, not directly to eigenvalues of $A$" },
      { option: "C", type: "trick-answer", reason: "Missing the square root: $\\sigma_i = \\sqrt{\\lambda_i(A^T A)}$, not $\\lambda_i(A^T A)$ itself" },
      { option: "D", type: "trick-answer", reason: "Same issue as (C) but for $AA^T$ — still need the square root" },
      { option: "E", type: "trick-answer", reason: "Right singular vectors are the columns of $V$, not entries of $\\Sigma$" },
    ],
    hasPartialCredit: false,
  },

  // Q30 — Core, Week 10, SVD four subspaces
  {
    id: 30,
    week: 10,
    topics: ["SVD", "four fundamental subspaces", "FTLA", "orthogonal decomposition"],
    difficulty: "core",
    stem: "In the SVD $A = U \\Sigma V^T$, the columns of $V$ corresponding to nonzero singular values span:",
    options: [
      { letter: "A", text: "$\\ker(A)^\\perp$", isCorrect: false },
      { letter: "B", text: "$\\mathrm{im}(A)$", isCorrect: false },
      { letter: "C", text: "$\\mathrm{im}(A^T)$", isCorrect: false },
      { letter: "D", text: "$\\ker(A^T)$", isCorrect: false },
      { letter: "E", text: "Both (A) and (C)", isCorrect: true },
    ],
    correctAnswer: "E",
    explanation: "The first $r$ columns of $V$ (where $r = \\mathrm{rank}(A)$) span $\\mathrm{im}(A^T) = \\ker(A)^\\perp$ by the FTLA. These are the same subspace via the natural isomorphism. So (E) 'Both (A) and (C)' is correct since $\\ker(A)^\\perp = \\mathrm{im}(A^T)$.",
    distractorAnalysis: [
      { option: "A", type: "partial-credit", reason: "Correct via FTLA: $\\ker(A)^\\perp = \\mathrm{im}(A^T)$ — recognizes one characterization" },
      { option: "B", type: "trick-answer", reason: "Domain-codomain confusion: $\\mathrm{im}(A) \\subseteq \\mathbb{R}^m$ is spanned by columns of $U$ (not $V$), which lives in $\\mathbb{R}^n$" },
      { option: "C", type: "partial-credit", reason: "Correct: $\\mathrm{im}(A^T) \\subseteq \\mathbb{R}^n$ is spanned by the first $r$ columns of $V$ — recognizes one characterization" },
      { option: "D", type: "trick-answer", reason: "$\\ker(A^T) \\subseteq \\mathbb{R}^m$ is spanned by the last $m-r$ columns of $U$ — wrong subspace entirely" },
    ],
    hasPartialCredit: true,
    partialCreditOptions: ["A", "C"],
  },

  // Fix: correctAnswer should be "E"
  // But I defined (E) as "Both (A) and (C)" which is the right answer
  // since ker(A)^⊥ = im(A^T). Let me keep this as is - it's the classic
  // 2030 "Both (X) and (Y)" pattern.

  // Q31 — Core, Week 10, singular values vs eigenvalues
  {
    id: 31,
    week: 10,
    topics: ["singular values", "eigenvalues", "symmetric matrices", "square root"],
    difficulty: "core",
    stem: "For a symmetric positive definite matrix $A$, the singular values and eigenvalues are related by:",
    options: [
      { letter: "A", text: "$\\sigma_i = |\\lambda_i|$ for all $i$", isCorrect: true },
      { letter: "B", text: "$\\sigma_i = \\lambda_i^2$ for all $i$", isCorrect: false },
      { letter: "C", text: "$\\sigma_i = \\sqrt{\\lambda_i}$ for all $i$", isCorrect: false },
      { letter: "D", text: "There is no general relationship", isCorrect: false },
      { letter: "E", text: "$\\sigma_i = \\lambda_i / \\|A\\|$", isCorrect: false },
    ],
    correctAnswer: "A",
    explanation: "For symmetric $A$: $A^T A = A^2$, so $\\lambda_i(A^T A) = \\lambda_i(A)^2$. Therefore $\\sigma_i = \\sqrt{\\lambda_i(A^T A)} = \\sqrt{\\lambda_i^2} = |\\lambda_i|$. For positive definite $A$, all $\\lambda_i > 0$, so $\\sigma_i = \\lambda_i$ (the absolute value is redundant).",
    distractorAnalysis: [
      { option: "B", type: "trick-answer", reason: "Confuses the relationship: $\\lambda_i(A^T A) = \\lambda_i(A)^2$, but $\\sigma_i = \\sqrt{\\lambda_i(A^T A)} = |\\lambda_i(A)|$, not $\\lambda_i^2$" },
      { option: "C", type: "trick-answer", reason: "Inverts the square root: it's $\\sigma = \\sqrt{\\lambda(A^T A)}$, not $\\sigma = \\sqrt{\\lambda(A)}$" },
      { option: "D", type: "trick-answer", reason: "False — for symmetric matrices the relationship is clean and well-known" },
      { option: "E", type: "trick-answer", reason: "No standard relationship involves division by a norm" },
    ],
    hasPartialCredit: false,
  },

  // Q32 — Deeper, Week 10, low-rank approximation (Eckart-Mirsky-Young)
  {
    id: 32,
    week: 10,
    topics: ["Eckart-Mirsky-Young", "low-rank approximation", "SVD", "Frobenius norm"],
    difficulty: "deeper",
    stem: "The best rank-$k$ approximation to $A$ in the Frobenius norm (or operator norm) is obtained by:",
    options: [
      { letter: "A", text: "Setting all but the $k$ largest eigenvalues of $A$ to zero", isCorrect: false },
      { letter: "B", text: "Truncating the SVD to keep only the $k$ largest singular values and corresponding singular vectors", isCorrect: true },
      { letter: "C", text: "Taking the first $k$ rows of $A$", isCorrect: false },
      { letter: "D", text: "Computing $A_k = U_k \\Sigma_k V_k^T$ where $U_k, V_k$ are any $k$ columns of $U, V$", isCorrect: false },
      { letter: "E", text: "Rounding small entries of $A$ to zero", isCorrect: false },
    ],
    correctAnswer: "B",
    explanation: "The Eckart-Mirsky-Young theorem: the best rank-$k$ approximation to $A$ (in both Frobenius and operator norms) is $A_k = \\sum_{i=1}^k \\sigma_i \\mathbf{u}_i \\mathbf{v}_i^T$, obtained by keeping only the $k$ largest singular values and their corresponding singular vectors in the SVD.",
    distractorAnalysis: [
      { option: "A", type: "trick-answer", reason: "Eigenvalue-singular value confusion: for general $A$, low-rank approximation uses singular values, not eigenvalues" },
      { option: "C", type: "trick-answer", reason: "Naive approach — row truncation has no optimality guarantee" },
      { option: "D", type: "trick-answer", reason: "Must use the $k$ columns corresponding to the *largest* singular values, not just any $k$ columns" },
      { option: "E", type: "trick-answer", reason: "Entry-wise thresholding doesn't minimize rank-$k$ approximation error in any standard norm" },
    ],
    hasPartialCredit: false,
  },

  // Q33 — Core, Week 10, pseudoinverse via SVD
  {
    id: 33,
    week: 10,
    topics: ["pseudoinverse", "SVD", "least squares"],
    difficulty: "core",
    stem: "Given the SVD $A = U \\Sigma V^T$, the pseudoinverse $A^\\dagger$ equals:",
    options: [
      { letter: "A", text: "$V \\Sigma^{-1} U^T$", isCorrect: false },
      { letter: "B", text: "$V \\Sigma^\\dagger U^T$", isCorrect: true },
      { letter: "C", text: "$U \\Sigma^\\dagger V^T$", isCorrect: false },
      { letter: "D", text: "$(A^T A)^{-1} A^T$", isCorrect: false },
      { letter: "E", text: "$A^T (A A^T)^{-1}$", isCorrect: false },
    ],
    correctAnswer: "B",
    explanation: "$A^\\dagger = V \\Sigma^\\dagger U^T$ where $\\Sigma^\\dagger$ inverts the nonzero singular values (replacing $\\sigma_i$ with $1/\\sigma_i$) and transposes the result. Options (D) and (E) are correct only when $A$ has full column or full row rank respectively.",
    distractorAnalysis: [
      { option: "A", type: "trick-answer", reason: "Uses $\\Sigma^{-1}$ instead of $\\Sigma^\\dagger$ — $\\Sigma$ is $m \\times n$ and not square, so $\\Sigma^{-1}$ doesn't exist. $\\Sigma^\\dagger$ handles the non-square case and zero singular values" },
      { option: "C", type: "trick-answer", reason: "Twin pair to (B): swapped $U$ and $V$ — uses $U \\Sigma^\\dagger V^T$ which equals $A$, not $A^\\dagger$" },
      { option: "D", type: "trick-answer", reason: "Correct only when $A$ has full column rank — not the general formula" },
      { option: "E", type: "trick-answer", reason: "Correct only when $A$ has full row rank — not the general formula" },
    ],
    hasPartialCredit: false,
  },

  // Q34 — Core, Week 11, PCA
  {
    id: 34,
    week: 11,
    topics: ["PCA", "covariance matrix", "centered data", "principal components"],
    difficulty: "core",
    stem: "In PCA, the principal components of a centered data matrix $X$ are the eigenvectors of:",
    options: [
      { letter: "A", text: "$X X^T$", isCorrect: false },
      { letter: "B", text: "$X^T X$ (the covariance matrix, up to scaling)", isCorrect: true },
      { letter: "C", text: "The data matrix $X$ itself", isCorrect: false },
      { letter: "D", text: "$X^T$", isCorrect: false },
      { letter: "E", text: "The correlation matrix $XX^T/(n-1)$", isCorrect: false },
    ],
    correctAnswer: "B",
    explanation: "PCA computes the eigendecomposition of the covariance matrix $\\Sigma_{\\mathrm{cov}} = \\frac{1}{n-1} X^T X$ (or $\\frac{1}{n} X^T X$). The eigenvectors are the principal components (directions of maximum variance), and eigenvalues give the variance along each component. The right singular vectors of $X$ are the same as the eigenvectors of $X^T X$.",
    distractorAnalysis: [
      { option: "A", type: "trick-answer", reason: "Domain-codomain swap: $XX^T \\in \\mathbb{R}^{m \\times m}$ gives the Gram matrix (left singular vectors), while $X^TX \\in \\mathbb{R}^{n \\times n}$ gives the covariance (right singular vectors)" },
      { option: "C", type: "trick-answer", reason: "$X$ is the data matrix, not a covariance matrix — PCA doesn't eigendecompose $X$" },
      { option: "D", type: "trick-answer", reason: "$X^T$ is just the transpose — meaningless in this context" },
      { option: "E", type: "trick-answer", reason: "Wrong dimensions: the correlation matrix for PCA uses $X^TX$, not $XX^T$" },
    ],
    hasPartialCredit: false,
  },

  // Q35 — Deeper, Week 11, SVD/PCA bridge
  {
    id: 35,
    week: 11,
    topics: ["SVD", "PCA", "variance", "singular values", "synthesis"],
    difficulty: "deeper",
    stem: "For centered data $X$ with SVD $X = U \\Sigma V^T$, the variance captured by the $i$-th principal component is:",
    options: [
      { letter: "A", text: "$\\lambda_i$ (the $i$-th eigenvalue of $X$)", isCorrect: false },
      { letter: "B", text: "$\\sigma_i$ (the $i$-th singular value of $X$)", isCorrect: false },
      { letter: "C", text: "$\\sigma_i^2 / (n-1)$", isCorrect: true },
      { letter: "D", text: "$\\sigma_i^2$", isCorrect: false },
      { letter: "E", text: "$\\sqrt{\\lambda_i}$ where $\\lambda_i$ is an eigenvalue of $X^TX$", isCorrect: false },
    ],
    correctAnswer: "C",
    explanation: "The covariance matrix is $\\frac{1}{n-1} X^T X = \\frac{1}{n-1} V \\Sigma^T \\Sigma V^T = V \\frac{\\Sigma^2}{n-1} V^T$. So the eigenvalues of the covariance matrix (variance along each component) are $\\sigma_i^2 / (n-1)$.",
    distractorAnalysis: [
      { option: "A", type: "trick-answer", reason: "Eigenvalue-singular value confusion, and $X$ may not even be square — eigenvalues of $X$ are not the relevant quantities" },
      { option: "B", type: "trick-answer", reason: "Missing the square and the scaling — $\\sigma_i$ is the singular value, but variance is $\\sigma_i^2/(n-1)$" },
      { option: "D", type: "partial-credit", reason: "Correct up to scaling: $\\sigma_i^2$ is the eigenvalue of $X^TX$, but the *variance* requires dividing by $(n-1)$" },
      { option: "E", type: "trick-answer", reason: "Inverts the relationship: $\\sigma_i = \\sqrt{\\lambda_i(X^TX)}$, not $\\sqrt{\\lambda_i}$ equals variance" },
    ],
    hasPartialCredit: true,
    partialCreditOptions: ["D"],
  },

  // Q36 — Core, Week 11, correlation as cosine similarity
  {
    id: 36,
    week: 11,
    topics: ["correlation", "cosine similarity", "centered data"],
    difficulty: "core",
    stem: "The Pearson correlation coefficient between two centered vectors $\\mathbf{x}$ and $\\mathbf{y}$ is geometrically:",
    options: [
      { letter: "A", text: "The dot product $\\mathbf{x} \\cdot \\mathbf{y}$", isCorrect: false },
      { letter: "B", text: "The cosine of the angle between $\\mathbf{x}$ and $\\mathbf{y}$", isCorrect: true },
      { letter: "C", text: "The Euclidean distance between $\\mathbf{x}$ and $\\mathbf{y}$", isCorrect: false },
      { letter: "D", text: "The projection of $\\mathbf{x}$ onto $\\mathbf{y}$", isCorrect: false },
      { letter: "E", text: "The ratio $\\|\\mathbf{x}\\| / \\|\\mathbf{y}\\|$", isCorrect: false },
    ],
    correctAnswer: "B",
    explanation: "The Pearson correlation coefficient is $r = \\frac{\\sum (x_i - \\bar{x})(y_i - \\bar{y})}{\\sqrt{\\sum(x_i-\\bar{x})^2} \\sqrt{\\sum(y_i-\\bar{y})^2}} = \\frac{\\langle \\mathbf{x}_c, \\mathbf{y}_c \\rangle}{\\|\\mathbf{x}_c\\| \\|\\mathbf{y}_c\\|} = \\cos \\theta$, where $\\mathbf{x}_c, \\mathbf{y}_c$ are the centered vectors.",
    distractorAnalysis: [
      { option: "A", type: "trick-answer", reason: "The dot product gives covariance, not correlation — missing the normalization by norms" },
      { option: "C", type: "trick-answer", reason: "Distance measures dissimilarity, not correlation — inverse relationship at best" },
      { option: "D", type: "trick-answer", reason: "Projection gives a vector, not a scalar — and correlation is a scalar" },
      { option: "E", type: "trick-answer", reason: "Ratio of norms is unrelated to correlation" },
    ],
    hasPartialCredit: false,
  },

  // Q37 — Core, Week 10, polar decomposition
  {
    id: 37,
    week: 10,
    topics: ["polar decomposition", "SVD", "symmetric positive semidefinite"],
    difficulty: "core",
    stem: "Any square matrix $A$ can be written as $A = QS$ where $Q$ is orthogonal and $S$ is symmetric positive semidefinite. In terms of the SVD $A = U \\Sigma V^T$:",
    options: [
      { letter: "A", text: "$Q = U$ and $S = \\Sigma$", isCorrect: false },
      { letter: "B", text: "$Q = UV^T$ and $S = V \\Sigma V^T$", isCorrect: true },
      { letter: "C", text: "$Q = V$ and $S = U \\Sigma U^T$", isCorrect: false },
      { letter: "D", text: "$Q = U \\Sigma$ and $S = V^T$", isCorrect: false },
      { letter: "E", text: "The polar decomposition requires $A$ to be invertible", isCorrect: false },
    ],
    correctAnswer: "B",
    explanation: "The polar decomposition comes from the SVD: $A = U\\Sigma V^T = (UV^T)(V\\Sigma V^T) = QS$. Here $Q = UV^T$ is orthogonal (product of orthogonal matrices), and $S = V\\Sigma V^T$ is symmetric positive semidefinite (orthogonally diagonalizable with non-negative eigenvalues $\\sigma_i$).",
    distractorAnalysis: [
      { option: "A", type: "trick-answer", reason: "Oversimplified: $U$ is orthogonal but $\\Sigma$ is not square symmetric in general" },
      { option: "C", type: "trick-answer", reason: "Twin pair to (B): swapped the roles — $V$ isn't the orthogonal factor and $U\\Sigma U^T$ doesn't give the right $S$" },
      { option: "D", type: "trick-answer", reason: "Wrong decomposition entirely — $U\\Sigma$ is not orthogonal and $V^T$ is not positive semidefinite" },
      { option: "E", type: "trick-answer", reason: "False — the polar decomposition exists for any square matrix, not just invertible ones" },
    ],
    hasPartialCredit: false,
  },

  // Q38 — Recall, Week 11, PCA steps
  {
    id: 38,
    week: 11,
    topics: ["PCA", "centering", "eigendecomposition", "dimensionality reduction"],
    difficulty: "recall",
    stem: "Which of the following is the correct order of steps in PCA?",
    options: [
      { letter: "A", text: "Compute SVD, then center the data, then project", isCorrect: false },
      { letter: "B", text: "Center the data, compute covariance, eigendecompose, project onto top eigenvectors", isCorrect: true },
      { letter: "C", text: "Eigendecompose the data matrix, then center, then sort by variance", isCorrect: false },
      { letter: "D", text: "Normalize to unit variance, compute $XX^T$, sort eigenvalues", isCorrect: false },
      { letter: "E", text: "Subtract the mean, compute $XX^T$, take square root of eigenvalues", isCorrect: false },
    ],
    correctAnswer: "B",
    explanation: "PCA: (1) Center the data (subtract column means), (2) compute the covariance matrix $\\frac{1}{n-1}X^TX$, (3) eigendecompose the covariance matrix, (4) project data onto the eigenvectors corresponding to the largest eigenvalues. Equivalently, compute SVD of centered $X$ and use right singular vectors.",
    distractorAnalysis: [
      { option: "A", type: "trick-answer", reason: "Wrong order — must center BEFORE computing SVD, not after" },
      { option: "C", type: "trick-answer", reason: "Wrong order — must center first, and you don't eigendecompose the data matrix directly" },
      { option: "D", type: "trick-answer", reason: "Uses $XX^T$ instead of $X^TX$ — wrong matrix for standard PCA" },
      { option: "E", type: "trick-answer", reason: "Uses $XX^T$ instead of $X^TX$ — domain-codomain confusion" },
    ],
    hasPartialCredit: false,
  },

  // ============================================================
  // WEEK 12: Neural Networks (3 questions)
  // ============================================================

  // Q39 — Core, Week 12, linear layers
  {
    id: 39,
    week: 12,
    topics: ["neural networks", "linear layer", "matrix multiplication", "composition"],
    difficulty: "core",
    stem: "A feed-forward neural network layer computes $\\mathbf{h} = \\sigma(W\\mathbf{x} + \\mathbf{b})$ where $W \\in \\mathbb{R}^{m \\times n}$, $\\mathbf{x} \\in \\mathbb{R}^n$, and $\\sigma$ is applied element-wise. Without the activation function $\\sigma$, composing two such layers produces:",
    options: [
      { letter: "A", text: "A nonlinear transformation", isCorrect: false },
      { letter: "B", text: "Another affine transformation (equivalent to a single linear layer)", isCorrect: true },
      { letter: "C", text: "A quadratic transformation", isCorrect: false },
      { letter: "D", text: "A transformation that cannot be represented by a matrix", isCorrect: false },
      { letter: "E", text: "A permutation", isCorrect: false },
    ],
    correctAnswer: "B",
    explanation: "Without $\\sigma$, composing $\\mathbf{h}_1 = W_1 \\mathbf{x} + \\mathbf{b}_1$ and $\\mathbf{h}_2 = W_2 \\mathbf{h}_1 + \\mathbf{b}_2$ gives $\\mathbf{h}_2 = W_2(W_1 \\mathbf{x} + \\mathbf{b}_1) + \\mathbf{b}_2 = (W_2 W_1)\\mathbf{x} + (W_2 \\mathbf{b}_1 + \\mathbf{b}_2)$, which is just another affine map $\\tilde{W}\\mathbf{x} + \\tilde{\\mathbf{b}}$. This is why activation functions are essential — they break the composition-of-linears collapse.",
    distractorAnalysis: [
      { option: "A", type: "trick-answer", reason: "The opposite of the truth — without activations, the composition is linear (not nonlinear)" },
      { option: "C", type: "trick-answer", reason: "No quadratic terms arise from composing affine maps" },
      { option: "D", type: "trick-answer", reason: "The composition IS a matrix multiplication plus bias — it can absolutely be represented by a matrix" },
      { option: "E", type: "trick-answer", reason: "A permutation is a special orthogonal matrix — not what you get from general affine composition" },
    ],
    hasPartialCredit: false,
  },

  // Q40 — Core, Week 12, backpropagation
  {
    id: 40,
    week: 12,
    topics: ["backpropagation", "chain rule", "gradient"],
    difficulty: "core",
    stem: "Backpropagation in a neural network is fundamentally an application of:",
    options: [
      { letter: "A", text: "The fundamental theorem of calculus", isCorrect: false },
      { letter: "B", text: "The chain rule for multivariable derivatives", isCorrect: true },
      { letter: "C", text: "Lagrange multipliers", isCorrect: false },
      { letter: "D", text: "The spectral theorem", isCorrect: false },
      { letter: "E", text: "Gram-Schmidt orthogonalization", isCorrect: false },
    ],
    correctAnswer: "B",
    explanation: "Backpropagation computes gradients of the loss function with respect to each weight matrix by applying the chain rule layer by layer, propagating error signals backward through the network. Each layer's gradient depends on the gradient from the layer above.",
    distractorAnalysis: [
      { option: "A", type: "trick-answer", reason: "Seductive surface match: 'fundamental' sounds right, but backprop uses chain rule, not the fundamental theorem of calculus" },
      { option: "C", type: "trick-answer", reason: "Lagrange multipliers solve constrained optimization — not relevant to backpropagation" },
      { option: "D", type: "trick-answer", reason: "Surface match: spectral theorem is from this course, but irrelevant to backpropagation" },
      { option: "E", type: "trick-answer", reason: "Surface match: Gram-Schmidt is from this course, but irrelevant to backpropagation" },
    ],
    hasPartialCredit: false,
  },

  // Q41 — Core, Week 12, perceptron
  {
    id: 41,
    week: 12,
    topics: ["perceptron", "activation function", "linear classifier"],
    difficulty: "core",
    stem: "A single perceptron computes $y = \\mathrm{sign}(\\mathbf{w}^T \\mathbf{x} + b)$. The decision boundary $\\mathbf{w}^T \\mathbf{x} + b = 0$ is:",
    options: [
      { letter: "A", text: "A point in $\\mathbb{R}^n$", isCorrect: false },
      { letter: "B", text: "A hyperplane (an $(n-1)$-dimensional affine subspace)", isCorrect: true },
      { letter: "C", text: "A sphere centered at the origin", isCorrect: false },
      { letter: "D", text: "A cone", isCorrect: false },
      { letter: "E", text: "A nonlinear surface", isCorrect: false },
    ],
    correctAnswer: "B",
    explanation: "The equation $\\mathbf{w}^T \\mathbf{x} + b = 0$ defines a hyperplane in $\\mathbb{R}^n$: it's an affine subspace of dimension $n-1$. The weight vector $\\mathbf{w}$ is normal to this hyperplane, and $b$ controls the offset from the origin.",
    distractorAnalysis: [
      { option: "A", type: "trick-answer", reason: "Off by one dimension — a point would be 0-dimensional, but the boundary is $(n-1)$-dimensional" },
      { option: "C", type: "trick-answer", reason: "A sphere would require $\\|\\mathbf{x}\\| = r$, not a linear equation" },
      { option: "D", type: "trick-answer", reason: "A cone would require a homogeneous quadratic, not a linear equation" },
      { option: "E", type: "trick-answer", reason: "The perceptron's decision boundary is explicitly linear — the whole point is that it's a linear classifier" },
    ],
    hasPartialCredit: false,
  },

  // ============================================================
  // SYNTHESIS: Cross-Week Problems (2 questions)
  // ============================================================

  // Q42 — Synthesis, Weeks 3+10, FTLA + SVD
  {
    id: 42,
    week: [3, 10],
    topics: ["FTLA", "SVD", "four subspaces", "orthogonal decomposition", "synthesis"],
    difficulty: "synthesis",
    stem: "The SVD of $A$ simultaneously provides orthogonal decompositions of both the domain $\\mathbb{R}^n$ and codomain $\\mathbb{R}^m$. Specifically:",
    options: [
      { letter: "A", text: "$\\mathbb{R}^n = \\mathrm{im}(A^T) \\oplus \\ker(A)$ and $\\mathbb{R}^m = \\mathrm{im}(A) \\oplus \\ker(A^T)$", isCorrect: true },
      { letter: "B", text: "$\\mathbb{R}^n = \\mathrm{im}(A) \\oplus \\ker(A^T)$ and $\\mathbb{R}^m = \\mathrm{im}(A^T) \\oplus \\ker(A)$", isCorrect: false },
      { letter: "C", text: "$\\mathbb{R}^n = \\ker(A) \\oplus \\ker(A^T)$ and $\\mathbb{R}^m = \\mathrm{im}(A) \\oplus \\mathrm{im}(A^T)$", isCorrect: false },
      { letter: "D", text: "The SVD only decomposes the codomain, not the domain", isCorrect: false },
      { letter: "E", text: "$\\mathbb{R}^n = \\mathrm{span}(\\mathbf{v}_1, \\ldots, \\mathbf{v}_r)$ only, where $r = \\mathrm{rank}(A)$", isCorrect: false },
    ],
    correctAnswer: "A",
    explanation: "The SVD reveals the FTLA's four fundamental subspaces: the columns of $V$ split $\\mathbb{R}^n$ into $\\mathrm{im}(A^T) \\oplus \\ker(A)$ (first $r$ and last $n-r$ columns), and the columns of $U$ split $\\mathbb{R}^m$ into $\\mathrm{im}(A) \\oplus \\ker(A^T)$ (first $r$ and last $m-r$ columns). This is the orthogonal version of the FTLA made explicit by the SVD.",
    distractorAnalysis: [
      { option: "B", type: "trick-answer", reason: "Twin pair to (A): swapped domain and codomain — $\\mathrm{im}(A) \\subseteq \\mathbb{R}^m$ lives in the codomain, not the domain" },
      { option: "C", type: "trick-answer", reason: "Pairs kernel with kernel and image with image across domain/codomain — doesn't reflect the actual decomposition" },
      { option: "D", type: "trick-answer", reason: "False — the SVD decomposes both spaces simultaneously, that's its power" },
      { option: "E", type: "partial-credit", reason: "Correctly identifies the right singular vectors for the image, but misses that the remaining $\\mathbf{v}_{r+1}, \\ldots, \\mathbf{v}_n$ span $\\ker(A)$ — incomplete" },
    ],
    hasPartialCredit: true,
    partialCreditOptions: ["E"],
  },

  // Q43 — Synthesis, Weeks 9+11, eigenvalue + PCA
  {
    id: 43,
    week: [9, 11],
    topics: ["power iteration", "dominant eigenvalue", "PCA", "first principal component", "synthesis"],
    difficulty: "synthesis",
    stem: "Power iteration computes the dominant eigenvector of a matrix. Applied to the covariance matrix $X^TX$ of centered data, it finds:",
    options: [
      { letter: "A", text: "The eigenvector of $X$ with largest eigenvalue", isCorrect: false },
      { letter: "B", text: "The first principal component (direction of maximum variance)", isCorrect: true },
      { letter: "C", text: "The mean of the data", isCorrect: false },
      { letter: "D", text: "The last principal component (direction of minimum variance)", isCorrect: false },
      { letter: "E", text: "A random direction in the data space", isCorrect: false },
    ],
    correctAnswer: "B",
    explanation: "Power iteration on $X^TX$ converges to the eigenvector corresponding to the largest eigenvalue of $X^TX$, which is $\\sigma_1^2$ (the square of the largest singular value). This eigenvector is the first right singular vector $\\mathbf{v}_1$, which IS the first principal component — the direction of maximum variance in the centered data.",
    distractorAnalysis: [
      { option: "A", type: "trick-answer", reason: "Eigenvalue-singular value confusion: $X$ may not be square or symmetric — the eigenvectors of $X$ are not the principal components" },
      { option: "C", type: "trick-answer", reason: "The mean was already subtracted during centering — power iteration doesn't recover it" },
      { option: "D", type: "trick-answer", reason: "Power iteration finds the *dominant* (largest) eigenvalue, not the smallest — the last component corresponds to the smallest" },
      { option: "E", type: "trick-answer", reason: "Power iteration converges to a specific direction, not random — it's deterministic (up to sign)" },
    ],
    hasPartialCredit: false,
  },
];

// ============================================================
// WEEKS 1-3: Systems, Vector Spaces, Linear Maps, FTLA (8 questions)
// Mock 2 — all new hooks distinct from Mock 1
// ============================================================

const finalMock2Questions: Question[] = [
  // Q1 — Core, Week 1, elementary matrices
  {
    id: 1,
    week: 1,
    topics: ["elementary matrices", "row operations", "matrix multiplication"],
    difficulty: "core",
    stem: "An elementary matrix $E$ is obtained by applying one row operation to the $n \\times n$ identity matrix. Which property holds for every elementary matrix?",
    options: [
      { letter: "A", text: "$E$ is symmetric", isCorrect: false },
      { letter: "B", text: "$E$ is invertible and $E^{-1}$ is also elementary", isCorrect: true },
      { letter: "C", text: "$\\det(E) = 0$", isCorrect: false },
      { letter: "D", text: "$E$ has only one nonzero entry", isCorrect: false },
      { letter: "E", text: "$E^T = E^{-1}$ for all elementary matrices", isCorrect: false },
    ],
    correctAnswer: "B",
    explanation: "Every elementary row operation is reversible (swap rows ↔ swap back; scale row ↔ scale by reciprocal; add multiple ↔ subtract the same multiple). The matrix encoding that reversal is also elementary. So every elementary matrix is invertible with an elementary inverse.",
    distractorAnalysis: [
      { option: "A", type: "trick-answer", reason: "Only true for elementary matrices from adding a multiple of one row to another (which is orthogonal in a special sense) — not a general property" },
      { option: "C", type: "trick-answer", reason: "Zero determinant would mean singular — but elementary operations preserve full rank, so det(E) ≠ 0" },
      { option: "D", type: "trick-answer", reason: "Only true for the row-swap elementary matrix — scaling and row-addition matrices have many nonzero entries" },
      { option: "E", type: "trick-answer", reason: "This property (E^T = E^{-1}) holds only for orthogonal matrices, not all elementary matrices — row-scaling breaks it" },
    ],
    hasPartialCredit: false,
  },

  // Q2 — Core, Week 2, span and linear combinations
  {
    id: 2,
    week: 2,
    topics: ["span", "linear combination", "vector space"],
    difficulty: "core",
    stem: "The span of vectors $\\mathbf{v}_1, \\mathbf{v}_2, \\ldots, \\mathbf{v}_k$ in a vector space $V$ is:",
    options: [
      { letter: "A", text: "The set of all scalar multiples of $\\mathbf{v}_1$", isCorrect: false },
      { letter: "B", text: "The set of all linear combinations $c_1 \\mathbf{v}_1 + \\cdots + c_k \\mathbf{v}_k$ where $c_i \\in \\mathbb{R}$", isCorrect: true },
      { letter: "C", text: "The set $\\{\\mathbf{v}_1, \\mathbf{v}_2, \\ldots, \\mathbf{v}_k\\}$ itself", isCorrect: false },
      { letter: "D", text: "The intersection of all subspaces containing $\\mathbf{v}_1, \\ldots, \\mathbf{v}_k$", isCorrect: false },
      { letter: "E", text: "A subspace of dimension $k$", isCorrect: false },
    ],
    correctAnswer: "B",
    explanation: "The span is defined as $\\mathrm{span}\\{\\mathbf{v}_1, \\ldots, \\mathbf{v}_k\\} = \\{c_1\\mathbf{v}_1 + \\cdots + c_k\\mathbf{v}_k : c_i \\in \\mathbb{R}\\}$ — all finite linear combinations. Option (D) is a correct characterization (the span is the smallest subspace containing the vectors), but (B) is the explicit definition.",
    distractorAnalysis: [
      { option: "A", type: "trick-answer", reason: "Describes only the span of a single nonzero vector — with multiple vectors, you get all linear combinations, not just scalar multiples of $\\mathbf{v}_1$" },
      { option: "C", type: "trick-answer", reason: "The span includes many more vectors — the span of $\\{(1,0),(0,1)\\}$ is all of $\\mathbb{R}^2$, not just those two vectors" },
      { option: "D", type: "partial-credit", reason: "This IS a correct characterization (universal property of the span), but (B) is the explicit computational definition" },
      { option: "E", type: "trick-answer", reason: "Dimension of the span is at most $k$, but could be less if the vectors are linearly dependent" },
    ],
    hasPartialCredit: true,
    partialCreditOptions: ["D"],
  },

  // Q3 — Deeper, Week 3, injectivity and kernels
  {
    id: 3,
    week: 3,
    topics: ["injective", "kernel", "FTLA", "nullity"],
    difficulty: "deeper",
    stem: "Let $T : V \\to W$ be a linear map. $T$ is injective (one-to-one) if and only if:",
    options: [
      { letter: "A", text: "$\\ker(T) = \\{\\mathbf{0}\\}$", isCorrect: true },
      { letter: "B", text: "$\\dim(V) < \\dim(W)$", isCorrect: false },
      { letter: "C", text: "$\\mathrm{im}(T) = W$", isCorrect: false },
      { letter: "D", text: "$T(\\\\mathbf{u}) = T(\\mathbf{v})$ implies $\\mathbf{u} = \\mathbf{v}$ for all $\\mathbf{u}, \\mathbf{v} \\in V$", isCorrect: false },
      { letter: "E", text: "$\\mathrm{nullity}(T) = 0$", isCorrect: false },
    ],
    correctAnswer: "A",
    explanation: "Injectivity means $T(\\mathbf{u}) = T(\\mathbf{v}) \\Rightarrow \\mathbf{u} = \\mathbf{v}$. This is equivalent to $T(\\mathbf{u}) = \\mathbf{0} \\Rightarrow \\mathbf{u} = \\mathbf{0}$, i.e., $\\ker(T) = \\{\\mathbf{0}\}$. Option (D) is the direct statement of injectivity but uses the wrong notation (the backslash is likely a typo for comma).",
    distractorAnalysis: [
      { option: "B", type: "trick-answer", reason: "Dimension comparison doesn't determine injectivity — an injective map can go from smaller to larger dimension (embedding), but also between equal dimensions" },
      { option: "C", type: "trick-answer", reason: "Describes surjectivity, not injectivity — these are different properties" },
      { option: "D", type: "trick-answer", reason: "Notation error aside, this IS the injectivity condition, but it doesn't add insight — (A) is the cleaner algebraic characterization via the kernel" },
      { option: "E", type: "partial-credit", reason: "True (nullity = dim ker = 0 means ker = {0}), but less fundamental than (A) — nullity is defined in terms of ker, not the other way around" },
    ],
    hasPartialCredit: true,
    partialCreditOptions: ["E"],
  },

  // Q4 — Core, Week 2, linear independence and spanning
  {
    id: 4,
    week: 2,
    topics: ["linear independence", "spanning set", "basis", "dimension"],
    difficulty: "core",
    stem: "A set of $k$ vectors in a vector space $V$ with $\\dim(V) = n$ can be a basis if and only if:",
    options: [
      { letter: "A", text: "$k = n$", isCorrect: false },
      { letter: "B", text: "The set is linearly independent", isCorrect: false },
      { letter: "C", text: "The set spans $V$", isCorrect: false },
      { letter: "D", text: "The set is linearly independent and $k = n$", isCorrect: true },
      { letter: "E", text: "The set spans $V$ and $k = n$", isCorrect: false },
    ],
    correctAnswer: "D",
    explanation: "A basis requires BOTH: (1) linear independence AND (2) spanning. If $k = n$ and the set is linearly independent, then spanning follows from the dimension theorem. Option (E) is wrong because spanning with $k = n$ does not guarantee independence (the set could be the whole space but with redundant vectors).",
    distractorAnalysis: [
      { option: "A", type: "trick-answer", reason: "Correct cardinality but doesn't guarantee either independence or spanning — a set of $n$ vectors can be linearly dependent" },
      { option: "B", type: "trick-answer", reason: "Independence alone doesn't guarantee spanning — you could have fewer than $n$ independent vectors" },
      { option: "C", type: "trick-answer", reason: "Spanning alone doesn't guarantee independence — a spanning set can have redundant vectors" },
      { option: "E", type: "trick-answer", reason: "Twin pair to (D): swapped the two conditions — spanning + cardinality doesn't guarantee independence, whereas independence + cardinality automatically gives spanning" },
    ],
    hasPartialCredit: false,
  },

  // Q5 — Core, Week 1, solving Ax = b
  {
    id: 5,
    week: 1,
    topics: ["solving linear systems", "augmented matrix", "row echelon form"],
    difficulty: "core",
    stem: "Row-reducing the augmented matrix $[A \\, \\mathbf{b}]$ to reduced row echelon form yields: $$\\begin{bmatrix} 1 & 0 & 2 & | & 3 \\\\ 0 & 1 & -1 & | & 1 \\\\ 0 & 0 & 0 & | & 0 \\end{bmatrix}$$ Which best describes the solution set?",
    options: [
      { letter: "A", text: "A unique solution", isCorrect: false },
      { letter: "B", text: "A one-parameter family of solutions", isCorrect: true },
      { letter: "C", text: "No solutions", isCorrect: false },
      { letter: "D", text: "A two-parameter family of solutions", isCorrect: false },
      { letter: "E", text: "Insufficient information", isCorrect: false },
    ],
    correctAnswer: "B",
    explanation: "The RREF has 2 pivots in columns 1 and 2, with the third variable $x_3$ free. The system is consistent (last row is all zeros). With 1 free variable, the solution set is a one-parameter family: $x_1 = 3 - 2x_3$, $x_2 = 1 + x_3$, $x_3 = t$.",
    distractorAnalysis: [
      { option: "A", type: "trick-answer", reason: "Would require 3 pivots for a 3-variable system — here we have only 2 pivots" },
      { option: "C", type: "trick-answer", reason: "No solution would require a pivot in the augmented column (last row [0 0 0 | nonzero]) — here the last row is all zeros" },
      { option: "D", type: "trick-answer", reason: "Two free variables would require only 1 pivot — we have 2 pivots, so only 1 free variable" },
      { option: "E", type: "trick-answer", reason: "The RREF gives complete information about the solution set" },
    ],
    hasPartialCredit: false,
  },

  // Q6 — Deeper, Week 3, FTLA — isomorphism statement
  {
    id: 6,
    week: 3,
    topics: ["FTLA", "isomorphism", "rank-nullity", "dimensions"],
    difficulty: "deeper",
    stem: "For a linear map $T : V \\to W$ with $\\dim(V) = 7$ and $\\dim(W) = 5$, if $\\dim(\\ker T) = 2$, then $\\dim(\\mathrm{im}\\, T)$ equals:",
    options: [
      { letter: "A", text: "$2$", isCorrect: false },
      { letter: "B", text: "$3$", isCorrect: false },
      { letter: "C", text: "$5$", isCorrect: false },
      { letter: "D", text: "$7$", isCorrect: false },
      { letter: "E", text: "Cannot be determined from the given information", isCorrect: true },
    ],
    correctAnswer: "C",
    explanation: "By rank-nullity: $\\dim(\\mathrm{im}\\, T) = \\dim(V) - \\dim(\\ker T) = 7 - 2 = 5$. Since $\\dim(W) = 5$, the image equals the whole codomain — $\\mathrm{im}(T) = W$ (surjective). The answer is fully determined: 5.",
    distractorAnalysis: [
      { option: "A", type: "trick-answer", reason: "Equals $\\dim(\\ker T) = 2$ — confused kernel dimension with image dimension" },
      { option: "B", type: "trick-answer", reason: "$\\dim(W) - \\dim(\\ker T) = 5 - 2 = 3$ — subtracted kernel dimension from codomain instead of domain" },
      { option: "D", type: "trick-answer", reason: "Equals $\\dim(V) = 7$ — forgot to subtract nullity" },
      { option: "E", type: "trick-answer", reason: "Rank-nullity fully determines it — $\\dim(\\mathrm{im}\\, T) = 7 - 2 = 5$, no additional information needed" },
    ],
    hasPartialCredit: false,
  },

  // Q7 — Core, Week 2, direct sum of subspaces
  {
    id: 7,
    week: 2,
    topics: ["direct sum", "subspace", "dimension theorem"],
    difficulty: "core",
    stem: "If $V = U \\oplus W$ (direct sum of $U$ and $W$), then $\\dim(V)$ equals:",
    options: [
      { letter: "A", text: "$\\dim(U) + \\dim(W)$", isCorrect: true },
      { letter: "B", text: "$\\dim(U) - \\dim(W)$", isCorrect: false },
      { letter: "C", text: "$\\max\\{\\dim(U), \\dim(W)\\}$", isCorrect: false },
      { letter: "D", text: "$\\dim(U) \\cdot \\dim(W)$", isCorrect: false },
      { letter: "E", text: "$2\\dim(U \\cap W)$", isCorrect: false },
    ],
    correctAnswer: "A",
    explanation: "For a direct sum $V = U \\oplus W$, every vector in $V$ has a unique decomposition $\\mathbf{v} = \\mathbf{u} + \\mathbf{w}$ with $\\mathbf{u} \\in U, \\mathbf{w} \\in W$, and $U \\cap W = \\{\\mathbf{0}\\}$. The dimension formula for direct sums is $\\dim(V) = \\dim(U) + \\dim(W)$. For general sums (not direct), $\\dim(U+W) = \\dim(U) + \\dim(W) - \\dim(U \\cap W)$.",
    distractorAnalysis: [
      { option: "B", type: "trick-answer", reason: "No standard dimension formula involves subtraction of dimensions" },
      { option: "C", type: "trick-answer", reason: "The dimension of a direct sum is larger than either — it's the sum, not the max" },
      { option: "D", type: "trick-answer", reason: "Dimension doesn't multiply — product spaces have different dimensions (tensor product would give a different space)" },
      { option: "E", type: "trick-answer", reason: "For a direct sum $U \\cap W = \\{\\mathbf{0}\\}$, so $\\dim(U \\cap W) = 0$ — this would give 0" },
    ],
    hasPartialCredit: false,
  },

  // Q8 — Core, Week 1, rank from RREF
  {
    id: 8,
    week: 1,
    topics: ["rank", "row reduction", "pivots"],
    difficulty: "core",
    stem: "A $5 \\times 8$ matrix $A$ is row-reduced to RREF with pivot columns in positions 1, 3, 5, and 7. What is $\\mathrm{rank}(A)$?",
    options: [
      { letter: "A", text: "$4$", isCorrect: true },
      { letter: "B", text: "$5$", isCorrect: false },
      { letter: "C", text: "$8$", isCorrect: false },
      { letter: "D", text: "$3$", isCorrect: false },
      { letter: "E", text: "$1$", isCorrect: false },
    ],
    correctAnswer: "A",
    explanation: "The rank of a matrix equals the number of pivots in its RREF. With 4 pivot columns (positions 1, 3, 5, 7), $\\mathrm{rank}(A) = 4$. Note that rank $\\leq \\min(m, n) = 5$ for an $m \\times n$ matrix, so 4 is valid.",
    distractorAnalysis: [
      { option: "B", type: "trick-answer", reason: "Equals the number of rows — rank can be at most min(m, n) = 5, but the number of pivots here is 4, not 5" },
      { option: "C", type: "trick-answer", reason: "Equals the number of columns — forgot that rank equals pivot count, not column count" },
      { option: "D", type: "trick-answer", reason: "Off by one — perhaps miscounted the pivots" },
      { option: "E", type: "trick-answer", reason: "Far too low — four pivots is clearly indicated" },
    ],
    hasPartialCredit: false,
  },

  // ============================================================
  // WEEKS 4-6: Bases, Inner Products, Orthogonal Decomp, QR (10 questions)
  // ============================================================

  // Q9 — Core, Week 4, orthonormal basis
  {
    id: 9,
    week: 4,
    topics: ["orthonormal basis", "orthogonal projection", "Fourier coefficients"],
    difficulty: "core",
    stem: "If $\\{\\mathbf{q}_1, \\mathbf{q}_2, \\mathbf{q}_3\\}$ is an orthonormal basis for $\\mathbb{R}^3$, then for any $\\mathbf{v} \\in \\mathbb{R}^3$, the vector $\\mathbf{v}$ can be written as:",
    options: [
      { letter: "A", text: "$\\mathbf{v} = (\\mathbf{v} \\cdot \\mathbf{q}_1)\\mathbf{q}_1 + (\\mathbf{v} \\cdot \\mathbf{q}_2)\\mathbf{q}_2 + (\\mathbf{v} \\cdot \\mathbf{q}_3)\\mathbf{q}_3$", isCorrect: true },
      { letter: "B", text: "$\\mathbf{v} = \\mathbf{q}_1 + \\mathbf{q}_2 + \\mathbf{q}_3$", isCorrect: false },
      { letter: "C", text: "$\\mathbf{v} = (\\|\\mathbf{v}\\| \\mathbf{q}_1) + (\\|\\mathbf{v}\\| \\mathbf{q}_2) + (\\|\\mathbf{v}\\| \\mathbf{q}_3)$", isCorrect: false },
      { letter: "D", text: "$\\mathbf{v} = \\mathbf{q}_1 \\cdot \\mathbf{q}_2 + \\mathbf{q}_2 \\cdot \\mathbf{q}_3 + \\mathbf{q}_3 \\cdot \\mathbf{v}$", isCorrect: false },
      { letter: "E", text: "$\\mathbf{v} = \\frac{\\mathbf{v}}{\\|\\mathbf{v}\\|}(\\mathbf{q}_1 + \\mathbf{q}_2 + \\mathbf{q}_3)$", isCorrect: false },
    ],
    correctAnswer: "A",
    explanation: "In an orthonormal basis, each basis vector $\\mathbf{q}_i$ has norm 1 and is orthogonal to the others. The Fourier coefficients are $c_i = \\langle \\mathbf{v}, \\mathbf{q}_i \\rangle$, and $\\mathbf{v} = \\sum_i c_i \\mathbf{q}_i$. This works because $\\mathbf{q}_i$ are orthonormal, not just orthogonal.",
    distractorAnalysis: [
      { option: "B", type: "trick-answer", reason: "Constants — every vector decomposes as the sum of basis vectors scaled by its coordinates, not 1 + 1 + 1" },
      { option: "C", type: "trick-answer", reason: "Uses the norm of v instead of the projection coefficients — confuses magnitude with directional components" },
      { option: "D", type: "trick-answer", reason: "Syntax error — mixing dot products and vector terms in a nonsensical way" },
      { option: "E", type: "trick-answer", reason: "Normalizes v but then adds unit vectors — this doesn't recover v correctly" },
    ],
    hasPartialCredit: false,
  },

  // Q10 — Core, Week 5, inner product linearity
  {
    id: 10,
    week: 5,
    topics: ["inner product", "bilinearity", "Cauchy-Schwarz"],
    difficulty: "core",
    stem: "For vectors $\\mathbf{u}, \\mathbf{v}, \\mathbf{w}$ in an inner product space, which expression equals $\\langle \\mathbf{u} + \\mathbf{v}, \\mathbf{w} \\rangle$?",
    options: [
      { letter: "A", text: "$\\langle \\mathbf{u}, \\mathbf{w} \\rangle + \\langle \\mathbf{v}, \\mathbf{w} \\rangle$", isCorrect: true },
      { letter: "B", text: "$\\langle \\mathbf{u}, \\mathbf{w} \\rangle + \\langle \\mathbf{v}, \\mathbf{u} \\rangle$", isCorrect: false },
      { letter: "C", text: "$\\langle \\mathbf{u}, \\mathbf{w} \\rangle \\cdot \\langle \\mathbf{v}, \\mathbf{w} \\rangle$", isCorrect: false },
      { letter: "D", text: "$\\langle \\mathbf{u}, \\mathbf{v} \\rangle + \\langle \\mathbf{w}, \\mathbf{w} \\rangle$", isCorrect: false },
      { letter: "E", text: "$\\langle \\mathbf{u}, \\mathbf{v} + \\mathbf{w} \\rangle$", isCorrect: false },
    ],
    correctAnswer: "A",
    explanation: "The inner product is linear in the first argument: $\\langle \\mathbf{u} + \\mathbf{v}, \\mathbf{w} \\rangle = \\langle \\mathbf{u}, \\mathbf{w} \\rangle + \\langle \\mathbf{v}, \\mathbf{w} \\rangle$. By symmetry (in real inner product spaces), it's also linear in the second argument.",
    distractorAnalysis: [
      { option: "B", type: "trick-answer", reason: "Swaps $\\mathbf{v}$ with $\\mathbf{w}$ in the second term — linearity is in the first argument here" },
      { option: "C", type: "trick-answer", reason: "Products the inner products — inner product is additive, not multiplicative" },
      { option: "D", type: "trick-answer", reason: "Uses wrong decomposition — $\\mathbf{u}+\\mathbf{v}$ should pair with $\\mathbf{w}$, not $\\mathbf{v}$" },
      { option: "E", type: "trick-answer", reason: "Right structure but wrong pairing — linearity in the first argument gives $\\langle \\mathbf{u}, \\mathbf{v}+\\mathbf{w} \\rangle$, which is not what's asked" },
    ],
    hasPartialCredit: false,
  },

  // Q11 — Deeper, Week 6, best approximation and normal equations
  {
    id: 11,
    week: 6,
    topics: ["least squares", "normal equations", "pseudoinverse"],
    difficulty: "deeper",
    stem: "The normal equations for the least-squares problem $A\\mathbf{x} \\approx \\mathbf{b}$ are:",
    options: [
      { letter: "A", text: "$A^T A \\mathbf{x} = A^T \\mathbf{b}$", isCorrect: true },
      { letter: "B", text: "$A \\mathbf{x} = \\mathbf{b}$", isCorrect: false },
      { letter: "C", text: "$A A^T \\mathbf{x} = \\mathbf{b}$", isCorrect: false },
      { letter: "D", text: "$A^T \\mathbf{b} = \\mathbf{0}$", isCorrect: false },
      { letter: "E", text: "$A \\mathbf{x} = A^T \\mathbf{b}$", isCorrect: false },
    ],
    correctAnswer: "A",
    explanation: "The normal equations $A^T A \\mathbf{x} = A^T \\mathbf{b}$ are obtained by setting the gradient of $\|A\\mathbf{x} - \\mathbf{b}\\|^2$ to zero. Their solution $\\hat{\\mathbf{x}} = (A^T A)^{-1} A^T \\mathbf{b}$ is the least-squares solution (minimum-norm if $A$ has full column rank).",
    distractorAnalysis: [
      { option: "B", type: "trick-answer", reason: "This is the exact solution condition — least squares is used when no exact solution exists" },
      { option: "C", type: "trick-answer", reason: "Uses $AA^T$ instead of $A^T A$ — this would be the correct normal equation for the dual (column space of $A^T$) but not for $A\\mathbf{x} \\approx \\mathbf{b}$" },
      { option: "D", type: "trick-answer", reason: "No — this says $\\mathbf{b}$ is orthogonal to the column space of $A$, i.e., $\\mathbf{b} \\in \\ker(A^T) = \\mathrm{im}(A)^\\perp$, which would make $\\mathbf{b}$ orthogonal to all columns" },
      { option: "E", type: "trick-answer", reason: "Mixes dimensions incorrectly — left side is in $\\mathbb{R}^n$, right side is in $\\mathbb{R}^m$" },
    ],
    hasPartialCredit: false,
  },

  // Q12 — Core, Week 5, orthogonal complement dimension
  {
    id: 12,
    week: 5,
    topics: ["orthogonal complement", "dimension", "null space", "row space"],
    difficulty: "core",
    stem: "For any matrix $A \\in \\mathbb{R}^{m \\times n}$, the dimensions of $\\ker(A)$ and $\\ker(A)^\\perp$ satisfy:",
    options: [
      { letter: "A", text: "$\\dim(\\ker(A)) + \\dim(\\ker(A)^\\perp) = n$", isCorrect: true },
      { letter: "B", text: "$\\dim(\\ker(A)) + \\dim(\\ker(A)^\\perp) = m$", isCorrect: false },
      { letter: "C", text: "$\\dim(\\ker(A)) = \\dim(\\ker(A)^\\perp)$", isCorrect: false },
      { letter: "D", text: "$\\ker(A) = \\ker(A)^\\perp$", isCorrect: false },
      { letter: "E", text: "$\\dim(\\ker(A)^\\perp) = m - \\mathrm{rank}(A)$", isCorrect: false },
    ],
    correctAnswer: "A",
    explanation: "In $\\mathbb{R}^n$, $\\ker(A)$ and $\\ker(A)^\\perp$ partition the space: every vector in $\\mathbb{R}^n$ is either in the kernel or orthogonal to it (via the direct sum decomposition). So $\\dim(\\ker(A)) + \\dim(\\ker(A)^\\perp) = \\dim(\\mathbb{R}^n) = n$.",
    distractorAnalysis: [
      { option: "B", type: "trick-answer", reason: "Uses $m$ (rows) instead of $n$ (columns) — the complement lives in $\\mathbb{R}^n$ (the domain), not $\\mathbb{R}^m$" },
      { option: "C", type: "trick-answer", reason: "Only true when $\\dim(\\ker(A)) = n/2$ — in general, their dimensions depend on the rank" },
      { option: "D", type: "trick-answer", reason: "They only coincide when $\\ker(A) = \\{\\mathbf{0}\\}$ or $\\ker(A) = \\mathbb{R}^n$ (trivial cases) — otherwise they are orthogonal complements" },
      { option: "E", type: "trick-answer", reason: "Uses the wrong space — $\\dim(\\ker(A)^\\perp) = n - \\dim(\\ker(A)) = \\mathrm{rank}(A)$ by rank-nullity. The formula given is for $\\ker(A^T)$ in the codomain." },
    ],
    hasPartialCredit: false,
  },

  // Q13 — Core, Week 4, coordinate representation
  {
    id: 13,
    week: 4,
    topics: ["coordinate map", "basis", "representation"],
    difficulty: "core",
    stem: "If $\\mathcal{B} = \\{\\mathbf{b}_1, \\mathbf{b}_2\\}$ is a basis for a 2-dimensional vector space $V$, and $[\mathbf{v}]_{\\mathcal{B}} = \\begin{bmatrix} 3 \\\\ -1 \\end{bmatrix}$, then $\\mathbf{v}$ equals:",
    options: [
      { letter: "A", text: "$3\\mathbf{b}_1 + (-1)\\mathbf{b}_2$", isCorrect: true },
      { letter: "B", text: "$-1\\mathbf{b}_1 + 3\\mathbf{b}_2$", isCorrect: false },
      { letter: "C", text: "$[3 \\; -1]^T$ in the standard basis", isCorrect: false },
      { letter: "D", text: "$\\mathbf{b}_1 + \\mathbf{b}_2$", isCorrect: false },
      { letter: "E", text: "A linear combination whose coefficients are $\\mathbf{v} \\cdot \\mathbf{b}_i$", isCorrect: false },
    ],
    correctAnswer: "A",
    explanation: "The coordinate vector $[\mathbf{v}]_{\\mathcal{B}} = \\begin{bmatrix} c_1 \\\\ c_2 \\end{bmatrix}$ means $\\mathbf{v} = c_1 \\mathbf{b}_1 + c_2 \\mathbf{b}_2$. So $[3 \\; -1]^T$ means $\\mathbf{v} = 3\\mathbf{b}_1 - \\mathbf{b}_2$.",
    distractorAnalysis: [
      { option: "B", type: "trick-answer", reason: "Reversed the coefficients — read the coordinate vector upside down" },
      { option: "C", type: "trick-answer", reason: "Coordinates in basis $\\mathcal{B}$ are not the same as coordinates in the standard basis — the coordinate vector depends on the basis" },
      { option: "D", type: "trick-answer", reason: "Arbitrary guess — unrelated to the given coordinates" },
      { option: "E", type: "trick-answer", reason: "That's how coordinates are computed (using the dual basis when $\\mathcal{B}$ is orthonormal), but it doesn't parse the coordinate vector correctly — the coefficients come directly from $[\mathbf{v}]_{\\mathcal{B}}$" },
    ],
    hasPartialCredit: false,
  },

  // Q14 — Core, Week 6, projection matrix formula
  {
    id: 14,
    week: 6,
    topics: ["projection matrix", "idempotent", "orthogonal projection"],
    difficulty: "core",
    stem: "The matrix $P = A(A^T A)^{-1}A^T$ projects orthogonally onto:",
    options: [
      { letter: "A", text: "The column space of $A$", isCorrect: true },
      { letter: "B", text: "The null space of $A$", isCorrect: false },
      { letter: "C", text: "The row space of $A$", isCorrect: false },
      { letter: "D", text: "The orthogonal complement of the column space", isCorrect: false },
      { letter: "E", text: "$A$ itself", isCorrect: false },
    ],
    correctAnswer: "A",
    explanation: "$P = A(A^T A)^{-1} A^T$ is the matrix of orthogonal projection onto $\\mathrm{col}(A) = \\mathrm{im}(A)$. For any $\\mathbf{b}$, $P\\mathbf{b} = A\\hat{\\mathbf{x}}$ where $\\hat{\\mathbf{x}} = (A^T A)^{-1}A^T\\mathbf{b}$ is the least-squares solution, and $A\\hat{\\mathbf{x}}$ is the projection of $\\mathbf{b}$ onto $\\mathrm{im}(A)$.",
    distractorAnalysis: [
      { option: "B", type: "trick-answer", reason: "Projects onto the column space, not the null space — $\\ker(A)$ is the orthogonal complement of $\\mathrm{im}(A^T)$, not $\\mathrm{im}(A)$" },
      { option: "C", type: "trick-answer", reason: "Uses $A^T$ and $A$ in the formula, but the projection is onto $\\mathrm{im}(A)$, the column space — the row space is $\\mathrm{im}(A^T)$" },
      { option: "D", type: "trick-answer", reason: "Projects onto $\\mathrm{im}(A)$, not its orthogonal complement — $I - P$ projects onto $\\mathrm{im}(A)^\\perp$" },
      { option: "E", type: "trick-answer", reason: "Nonsensical — the projection matrix doesn't project onto $A$ (a matrix), only onto its column space" },
    ],
    hasPartialCredit: false,
  },

  // Q15 — Deeper, Week 6, Cauchy-Schwarz inequality
  {
    id: 15,
    week: 6,
    topics: ["Cauchy-Schwarz", "inequality", "norm", "angle"],
    difficulty: "deeper",
    stem: "The Cauchy-Schwarz inequality states that for any $\\mathbf{u}, \\mathbf{v} \\in \\mathbb{R}^n$:",
    options: [
      { letter: "A", text: "$|\\langle \\mathbf{u}, \\mathbf{v} \\rangle| \\leq \\|\\mathbf{u}\\| \\cdot \\|\\mathbf{v}\\|$", isCorrect: true },
      { letter: "B", text: "$\\|\\mathbf{u} + \\mathbf{v}\\| \\leq \\|\\mathbf{u}\\| + \\|\\mathbf{v}\\|$", isCorrect: false },
      { letter: "C", text: "$\\|\\mathbf{u} - \\mathbf{v}\\| \\geq |\\|\\mathbf{u}\\| - \\|\\mathbf{v}\\||$", isCorrect: false },
      { letter: "D", text: "$\\langle \\mathbf{u}, \\mathbf{v} \\rangle \\geq 0$ for all $\\mathbf{u}, \\mathbf{v}$", isCorrect: false },
      { letter: "E", text: "$\\|\\mathbf{u}\\| \\leq \\|\\mathbf{v}\\| \\Rightarrow |\\langle \\mathbf{u}, \\mathbf{v} \\rangle| = \\|\\mathbf{u}\\| \\cdot \\|\\mathbf{v}\\|$", isCorrect: false },
    ],
    correctAnswer: "A",
    explanation: "Cauchy-Schwarz: $|\\langle \\mathbf{u}, \\mathbf{v} \\rangle| \\leq \\|\\mathbf{u}\\| \\|\\mathbf{v}\\|$. Equality holds iff $\\mathbf{u}$ and $\\mathbf{v}$ are linearly dependent. Option (B) is the triangle inequality for norms.",
    distractorAnalysis: [
      { option: "B", type: "trick-answer", reason: "This is the triangle inequality ($\\|\\mathbf{u}+\\mathbf{v}\\| \\leq \\|\\mathbf{u}\|+\\|\\mathbf{v}\\|$), not Cauchy-Schwarz" },
      { option: "C", type: "trick-answer", reason: "This is the reverse triangle inequality ($\\|\\mathbf{u}-\\mathbf{v}\\| \\geq |\\|\\mathbf{u}\|-\\|\\mathbf{v}\\|$), not Cauchy-Schwarz" },
      { option: "D", type: "trick-answer", reason: "Inner products can be negative — this is not true in general (e.g., $\\langle (1,-1), (0,1) \\rangle = -1$)" },
      { option: "E", type: "trick-answer", reason: "Confuses the equality case of Cauchy-Schwarz with an implication — equality only when u and v are linearly dependent (not just when one norm is smaller)" },
    ],
    hasPartialCredit: false,
  },

  // Q16 — Core, Week 5, QR decomposition
  {
    id: 16,
    week: 5,
    topics: ["QR decomposition", "Gram-Schmidt", "orthonormalization"],
    difficulty: "core",
    stem: "In the reduced QR decomposition $A = QR$, if $A$ has full column rank, then $Q^T Q$ equals:",
    options: [
      { letter: "A", text: "$I_n$", isCorrect: true },
      { letter: "B", text: "$Q$", isCorrect: false },
      { letter: "C", text: "$Q Q^T$", isCorrect: false },
      { letter: "D", text: "$R^T R$", isCorrect: false },
      { letter: "E", text: "$A^T A$", isCorrect: false },
    ],
    correctAnswer: "A",
    explanation: "$Q$ has orthonormal columns: $Q \\in \\mathbb{R}^{m \\times n}$ with $Q^T Q = I_n$. The columns of $Q$ form an orthonormal basis for $\\mathrm{im}(A)$. The matrix $Q Q^T$ is the projection onto $\\mathrm{im}(A)$, which is $I_m$ only when $m = n$.",
    distractorAnalysis: [
      { option: "B", type: "trick-answer", reason: "$Q$ is not generally the identity — $Q^T Q = I_n$ because $Q$ has orthonormal columns, not because $Q$ itself is $I$" },
      { option: "C", type: "partial-credit", reason: "$QQ^T$ is the projection onto $\\mathrm{im}(Q)$ — this equals $I$ only when $Q$ is square ($m=n$), which need not be the case in reduced QR" },
      { option: "D", type: "trick-answer", reason: "$R^T R$ doesn't simplify to $I$ — $R$ is upper triangular with nonzero diagonal, not orthogonal" },
      { option: "E", type: "trick-answer", reason: "$A^T A = (QR)^T(QR) = R^T Q^T Q R = R^T R \\neq I_n$ in general" },
    ],
    hasPartialCredit: true,
    partialCreditOptions: ["C"],
  },

  // Q17 — Core, Week 4, dual space (conceptual)
  {
    id: 17,
    week: 4,
    topics: ["dual space", "linear functional", "basis", "dimension"],
    difficulty: "core",
    stem: "If $V$ is an $n$-dimensional vector space, the dual space $V^*$ (the set of all linear functionals $f : V \\to \\mathbb{R}$) has dimension:",
    options: [
      { letter: "A", text: "$n$", isCorrect: false },
      { letter: "B", text: "$n^2$", isCorrect: false },
      { letter: "C", text: "$2n$", isCorrect: false },
      { letter: "D", text: "$n + 1$", isCorrect: false },
      { letter: "E", text: "$n$ (same as $V$)", isCorrect: true },
    ],
    correctAnswer: "E",
    explanation: "Every finite-dimensional vector space is isomorphic to its dual — $\\dim(V^*) = n$. The dual basis $\\{f_1, \\ldots, f_n\\}$ defined by $f_i(\\mathbf{v}_j) = \\delta_{ij}$ (where $\\{\\mathbf{v}_j\\}$ is a basis of $V$) has $n$ elements and is a basis of $V^*$.",
    distractorAnalysis: [
      { option: "A", type: "partial-credit", reason: "Correct dimension, but (E) is the better answer because it highlights that dual space has the SAME dimension (isomorphic), not just a correct count" },
      { option: "B", type: "trick-answer", reason: "No standard vector space has dimension $n^2$ from the dual construction" },
      { option: "C", type: "trick-answer", reason: "No relation to $2n$ — the dual of an $n$-dimensional space is $n$-dimensional" },
      { option: "D", type: "trick-answer", reason: "No — $n+1$ would be for spaces like $\\mathcal{P}_n$ which has dimension $n+1$" },
    ],
    hasPartialCredit: true,
    partialCreditOptions: ["A"],
  },

  // Q18 — Core, Week 5, adjoint of a matrix
  {
    id: 18,
    week: 5,
    topics: ["adjoint", "transpose", "inner product", "self-adjoint"],
    difficulty: "core",
    stem: "For a real matrix $A$, the adjoint $A^*$ (with respect to the standard inner product) is:",
    options: [
      { letter: "A", text: "$A^T$", isCorrect: true },
      { letter: "B", text: "$A^{-1}$", isCorrect: false },
      { letter: "C", text: "$\\bar{A}$ (complex conjugate)", isCorrect: false },
      { letter: "D", text: "$\\det(A)$", isCorrect: false },
      { letter: "E", text: "$\\mathrm{adj}(A)$ (adjugate)", isCorrect: false },
    ],
    correctAnswer: "A",
    explanation: "In real vector spaces with the standard inner product $\\langle \\mathbf{u}, \\mathbf{v} \\rangle = \\mathbf{u}^T \\mathbf{v}$, the adjoint satisfies $\\langle A\\mathbf{u}, \\mathbf{v} \\rangle = \\langle \\mathbf{u}, A^*\\mathbf{v} \\rangle$. This gives $A^* = A^T$. For complex matrices, $A^* = \\bar{A}^T$ (conjugate transpose).",
    distractorAnalysis: [
      { option: "B", type: "trick-answer", reason: "The inverse is the adjoint only for normal matrices with additional properties — in general, the adjoint is the transpose" },
      { option: "C", type: "trick-answer", reason: "Complex conjugate alone (without transpose) is not the adjoint — $\\bar{A}$ doesn't satisfy the adjoint condition" },
      { option: "D", type: "trick-answer", reason: "Determinant is a scalar, not a matrix — cannot be the adjoint operator" },
      { option: "E", type: "trick-answer", reason: "The adjugate $\\mathrm{adj}(A)$ satisfies $A^{-1} = \\mathrm{adj}(A)/\\det(A)$ — it's unrelated to the adjoint with respect to inner products" },
    ],
    hasPartialCredit: false,
  },

  // ============================================================
  // WEEKS 7-9: Eigenvalues, Diagonalization, Spectral, Markov (10 questions)
  // ============================================================

  // Q19 — Deeper, Week 7, eigenvalue algebra
  {
    id: 19,
    week: 7,
    topics: ["characteristic polynomial", "eigenvalues", "trace", "determinant"],
    difficulty: "deeper",
    stem: "If a $3 \\times 3$ matrix $A$ has eigenvalues $4, -2, 3$, then $\\mathrm{tr}(A)$ and $\\det(A)$ are respectively:",
    options: [
      { letter: "A", text: "$\\mathrm{tr}(A) = 5$ and $\\det(A) = -24$", isCorrect: false },
      { letter: "B", text: "$\\mathrm{tr}(A) = 5$ and $\\det(A) = 24$", isCorrect: true },
      { letter: "C", text: "$\\mathrm{tr}(A) = -5$ and $\\det(A) = 24$", isCorrect: false },
      { letter: "D", text: "$\\mathrm{tr}(A) = 9$ and $\\det(A) = 24$", isCorrect: false },
      { letter: "E", text: "$\\mathrm{tr}(A) = 5$ and $\\det(A) = 12$", isCorrect: false },
    ],
    correctAnswer: "A",
    explanation: "For any matrix, $\\mathrm{tr}(A) = \\sum \\lambda_i = 4 + (-2) + 3 = 5$ and $\\det(A) = \\prod \\lambda_i = 4 \\times (-2) \\times 3 = -24$.",
    distractorAnalysis: [
      { option: "B", type: "trick-answer", reason: "Sign error on determinant: $(-2) \\times 3 = -6$, so $4 \\times (-6) = -24$, not 24" },
      { option: "C", type: "trick-answer", reason: "Correct determinant but wrong trace: added the eigenvalues with wrong signs" },
      { option: "D", type: "trick-answer", reason: "Added eigenvalues incorrectly: $4 + (-2) + 3 = 5$, not 9" },
      { option: "E", type: "trick-answer", reason: "Halved the determinant — $|-24|/2 = 12$" },
    ],
    hasPartialCredit: false,
  },

  // Q20 — Core, Week 7, diagonalizability and eigenspaces
  {
    id: 20,
    week: 7,
    topics: ["diagonalizability", "eigenspace", "geometric multiplicity"],
    difficulty: "core",
    stem: "A $4 \\times 4$ matrix has eigenvalues $2$ (with algebraic multiplicity 2) and $-1$ (with algebraic multiplicity 2). If the eigenspace for $\\lambda = 2$ has dimension 1, then:",
    options: [
      { letter: "A", text: "The matrix is diagonalizable", isCorrect: false },
      { letter: "B", text: "The matrix is NOT diagonalizable", isCorrect: true },
      { letter: "C", text: "The eigenspace for $\\lambda = -1$ must have dimension 2", isCorrect: false },
      { letter: "D", text: "The matrix has determinant 0", isCorrect: false },
      { letter: "E", text: "The sum of geometric multiplicities equals 4", isCorrect: false },
    ],
    correctAnswer: "B",
    explanation: "Diagonalizability requires that the geometric multiplicity (dimension of each eigenspace) equals the algebraic multiplicity for every eigenvalue. Here, for $\\lambda = 2$, algebraic multiplicity is 2 but geometric multiplicity is 1. Since $1 \\neq 2$, the matrix is NOT diagonalizable. This is the defective case — a Jordan block of size 2 for eigenvalue 2.",
    distractorAnalysis: [
      { option: "A", type: "trick-answer", reason: "Would be true only if both eigenspaces had full dimension (geometric mult. = algebraic mult. for each eigenvalue)" },
      { option: "C", type: "partial-credit", reason: "The sum of geometric multiplicities must be $\\leq 4$, and we already know $\\lambda=2$ contributes 1, so $\\lambda=-1$ contributes at most 3 — but it could also be 1, not necessarily 2" },
      { option: "D", type: "trick-answer", reason: "$\\det(A) = 2 \\times 2 \\times (-1) \\times (-1) = 4 \\neq 0$, so it's invertible" },
      { option: "E", type: "trick-answer", reason: "Sum of geometric multiplicities is at most $n = 4$, but here it's at most 3 (since $\\lambda=2$ gives only 1), definitely not 4" },
    ],
    hasPartialCredit: true,
    partialCreditOptions: ["C"],
  },

  // Q21 — Core, Week 8, spectral theorem for symmetric matrices
  {
    id: 21,
    week: 8,
    topics: ["spectral theorem", "symmetric matrix", "orthogonal diagonalization"],
    difficulty: "core",
    stem: "Which statement follows directly from the Spectral Theorem for a real symmetric $n \\times n$ matrix $A$?",
    options: [
      { letter: "A", text: "$A$ has $n$ real eigenvalues counting multiplicity", isCorrect: true },
      { letter: "B", text: "$A$ is positive definite", isCorrect: false },
      { letter: "C", text: "$A^{-1}$ exists", isCorrect: false },
      { letter: "D", text: "All eigenvectors of $A$ are orthogonal to each other", isCorrect: false },
      { letter: "E", text: "$A^k$ has eigenvalues $\\lambda_i^k$ for any positive integer $k$", isCorrect: false },
    ],
    correctAnswer: "A",
    explanation: "The Spectral Theorem guarantees that a real symmetric matrix has all real eigenvalues and an orthonormal eigenbasis. So there are exactly $n$ real eigenvalues (counting multiplicity). (D) is close but not precisely correct — eigenvectors from distinct eigenvalues are orthogonal, but equal-eigenvalue eigenvectors need not be orthogonal (they form an eigenspace where any basis works).",
    distractorAnalysis: [
      { option: "B", type: "trick-answer", reason: "Symmetric only guarantees real eigenvalues, not positivity — symmetric with negative eigenvalues is possible" },
      { option: "C", type: "trick-answer", reason: "Symmetric matrices can be singular (e.g., the zero matrix) — invertibility requires no zero eigenvalues" },
      { option: "D", type: "partial-credit", reason: "Eigenvectors from distinct eigenvalues ARE orthogonal — but the statement as written ('all eigenvectors' without qualification) is too strong" },
      { option: "E", type: "trick-answer", reason: "True (spectral mapping theorem for polynomials), but not the central claim of the Spectral Theorem itself" },
    ],
    hasPartialCredit: true,
    partialCreditOptions: ["D"],
  },

  // Q22 — Core, Week 9, matrix logarithm
  {
    id: 22,
    week: 9,
    topics: ["matrix logarithm", "matrix exponential", "principal logarithm"],
    difficulty: "core",
    stem: "If $e^B = A$ for matrices $A$ and $B$, then $B$ is called a:",
    options: [
      { letter: "A", text: "Matrix square root of $A$", isCorrect: false },
      { letter: "B", text: "Matrix logarithm of $A$", isCorrect: true },
      { letter: "C", text: "Matrix inverse of $A$", isCorrect: false },
      { letter: "D", text: "Eigenvector of $A$", isCorrect: false },
      { letter: "E", text: "Polar factor of $A$", isCorrect: false },
    ],
    correctAnswer: "B",
    explanation: "By analogy with real numbers ($\\log(e^x) = x$), a matrix logarithm $B$ satisfies $e^B = A$. Not all matrices have a logarithm — a real matrix has a real logarithm iff it has no negative real eigenvalues with odd algebraic multiplicity in its Jordan form. The matrix square root would satisfy $C^2 = A$.",
    distractorAnalysis: [
      { option: "A", type: "trick-answer", reason: "A square root satisfies $C^2 = A$, not $e^C = A$ — confused logarithm with square root" },
      { option: "C", type: "trick-answer", reason: "Inverse satisfies $AA^{-1} = I$, not $e^B = A$" },
      { option: "D", type: "trick-answer", reason: "Eigenvectors satisfy $A\\mathbf{v} = \\lambda \\mathbf{v}$, not the exponential relation" },
      { option: "E", type: "trick-answer", reason: "Polar decomposition gives $A = QS$ with $Q$ orthogonal, $S$ symmetric — not related to exponentials" },
    ],
    hasPartialCredit: false,
  },

  // Q23 — Core, Week 9, stochastic matrices
  {
    id: 23,
    week: 9,
    topics: ["stochastic matrix", "Markov chain", "eigenvalue 1"],
    difficulty: "core",
    stem: "A column-stochastic matrix $P \\in \\mathbb{R}^{n \\times n}$ (each column sums to 1) always has:",
    options: [
      { letter: "A", text: "Eigenvalue 0", isCorrect: false },
      { letter: "B", text: "Eigenvalue 1 with an eigenvector of all ones", isCorrect: true },
      { letter: "C", text: "All eigenvalues equal to 1", isCorrect: false },
      { letter: "D", text: "An inverse equal to $P^T$", isCorrect: false },
      { letter: "E", text: "Determinant equal to 1", isCorrect: false },
    ],
    correctAnswer: "B",
    explanation: "For a column-stochastic matrix, $P^T \\mathbf{1} = \\mathbf{1}$ (each row of $P^T$ sums to 1). This means $P^T$ has eigenvalue 1 with eigenvector $\\mathbf{1}$. Taking transposes: $\\mathbf{1}^T P = \\mathbf{1}^T$, so $\\mathbf{1}^T$ is a left eigenvector of $P$ with eigenvalue 1. Equivalently, $P$ has eigenvalue 1 and the vector $\\mathbf{1}$ is a right eigenvector: $P \\mathbf{1} \\neq \\mathbf{1}$ for column-stochastic — wait. For column-stochastic, each column sums to 1. Then $P^T \\mathbf{1} = \\mathbf{1}$, so $\\mathbf{1}$ is an eigenvector of $P^T$ with eigenvalue 1. Taking transpose: $\\mathbf{1}^T P = \\mathbf{1}^T$, so $\\mathbf{1}$ is a left eigenvector of $P$. The right eigenvector with eigenvalue 1 is not generally $\\mathbf{1}$ for column-stochastic. Let me be more careful: for column-stochastic $P$, $P\\mathbf{v} = \\mathbf{v}$ when $\\mathbf{v}$ has all entries equal. Yes: if $v_i = c$ for all $i$, then $(P\\mathbf{v})_i = \\sum_j P_{ij} v_j = \\sum_j P_{ij} c = c \\sum_j P_{ij} = c \\cdot 1 = c = v_i$. So $\\mathbf{1}$ (with all entries 1) is a right eigenvector: $P\\mathbf{1} = \\mathbf{1}$.",
    distractorAnalysis: [
      { option: "A", type: "trick-answer", reason: "Would require $\\det(P) = 0$, but column-stochastic matrices can be invertible" },
      { option: "C", type: "trick-answer", reason: "Only the identity matrix has all eigenvalues equal to 1" },
      { option: "D", type: "trick-answer", reason: "$P^T$ is row-stochastic, not the inverse of $P$" },
      { option: "E", type: "trick-answer", reason: "$\\det(P)$ can be any value in $(-1, 1)$ depending on the matrix" },
    ],
    hasPartialCredit: false,
  },

  // Q24 — Deeper, Week 8, nilpotent matrices
  {
    id: 24,
    week: 8,
    topics: ["nilpotent", "Jordan form", "eigenvalues"],
    difficulty: "deeper",
    stem: "A matrix $N$ is nilpotent if $N^k = 0$ for some positive integer $k$. Which must be true?",
    options: [
      { letter: "A", text: "All eigenvalues of $N$ are 0", isCorrect: true },
      { letter: "B", text: "$N = 0$", isCorrect: false },
      { letter: "C", text: "$\\det(N) = 1$", isCorrect: false },
      { letter: "D", text: "$N$ is diagonalizable", isCorrect: false },
      { letter: "E", text: "$N$ is invertible", isCorrect: false },
    ],
    correctAnswer: "A",
    explanation: "If $N^k = 0$, then for any eigenvalue $\\lambda$ of $N$: $\\lambda^k = 0$ (spectral mapping theorem applied to $f(x) = x^k$). So $\\lambda = 0$ for all eigenvalues. Conversely, a matrix with all eigenvalues 0 is not necessarily nilpotent (it could have a nontrivial Jordan block structure that prevents $N^k$ from being exactly zero for finite $k$... actually it IS nilpotent: a matrix is nilpotent iff all eigenvalues are 0).",
    distractorAnalysis: [
      { option: "B", type: "trick-answer", reason: "Nilpotent matrices can be nonzero — e.g., $\\begin{bmatrix}0 & 1 \\\\ 0 & 0\\end{bmatrix}$ is nilpotent but nonzero" },
      { option: "C", type: "trick-answer", reason: "$\\det(N) = \\prod \\lambda_i = 0$ since all $\\lambda_i = 0$, so determinant is 0, not 1" },
      { option: "D", type: "trick-answer", reason: "Jordan blocks of size > 1 are nilpotent but NOT diagonalizable — only the zero matrix is both nilpotent and diagonalizable" },
      { option: "E", type: "trick-answer", reason: "Nilpotent matrices are always singular — $\\det(N) = 0$ means not invertible" },
    ],
    hasPartialCredit: false,
  },

  // Q25 — Core, Week 8, Cayley-Hamilton theorem
  {
    id: 25,
    week: 8,
    topics: ["Cayley-Hamilton", "characteristic polynomial", "matrix polynomial"],
    difficulty: "core",
    stem: "The Cayley-Hamilton Theorem states that for an $n \\times n$ matrix $A$:",
    options: [
      { letter: "A", text: "$A$ satisfies its own characteristic equation: $p_A(A) = 0$", isCorrect: true },
      { letter: "B", text: "$A^{-1}$ can be expressed as a polynomial in $A$ of degree $n-1$", isCorrect: false },
      { letter: "C", text: "$A$ has $n$ distinct eigenvalues", isCorrect: false },
      { letter: "D", text: "$A^T = A^{-1}$", isCorrect: false },
      { letter: "E", text: "$\\det(A) \\neq 0$", isCorrect: false },
    ],
    correctAnswer: "A",
    explanation: "Cayley-Hamilton: if $p_A(\\lambda) = \\det(A - \\lambda I)$ is the characteristic polynomial, then $p_A(A) = 0$ (the zero matrix). For example, $A^2 - (\\mathrm{tr} A)A + (\\det A)I = 0$ for $2 \\times 2$ matrices.",
    distractorAnalysis: [
      { option: "B", type: "trick-answer", reason: "TRUE: when $A$ is invertible, $A^{-1}$ IS a polynomial in $A$ (Cayley-Hamilton gives $A^{-1} = -\\frac{1}{\\det A}(A^{n-1} + c_{n-1}A^{n-2} + \\cdots + c_1 I)$), but this is a corollary, not the theorem itself" },
      { option: "C", type: "trick-answer", reason: "Cayley-Hamilton holds for ANY matrix, regardless of eigenvalue multiplicity" },
      { option: "D", type: "trick-answer", reason: "This defines an orthogonal matrix, unrelated to Cayley-Hamilton" },
      { option: "E", type: "trick-answer", reason: "False — Cayley-Hamilton holds even for singular matrices (the zero matrix satisfies $p_0(0) = 0$)" },
    ],
    hasPartialCredit: false,
  },

  // Q26 — Core, Week 9, dominant eigenvalue
  {
    id: 26,
    week: 9,
    topics: ["power iteration", "dominant eigenvalue", "spectral radius"],
    difficulty: "core",
    stem: "Power iteration applied to a matrix $A$ converges to:",
    options: [
      { letter: "A", text: "The eigenvector corresponding to the eigenvalue of largest magnitude (the dominant eigenvalue)", isCorrect: true },
      { letter: "B", text: "The eigenvector corresponding to the smallest eigenvalue", isCorrect: false },
      { letter: "C", text: "The mean of all eigenvectors", isCorrect: false },
      { letter: "D", text: "The condition number of $A$", isCorrect: false },
      { letter: "E", text: "The null space of $A$", isCorrect: false },
    ],
    correctAnswer: "A",
    explanation: "Power iteration: $\\mathbf{x}_{k+1} = A\\mathbf{x}_k / \\|A\\mathbf{x}_k\\|$ converges (under conditions) to the eigenvector of the dominant eigenvalue $\\lambda_1$ (largest magnitude). The iterates align with the top singular vector of $A$. Inverse power iteration converges to the eigenvector of the smallest eigenvalue.",
    distractorAnalysis: [
      { option: "B", type: "trick-answer", reason: "Inverse power iteration (applying $A^{-1}$) gives the smallest eigenvalue — forward power iteration gives the largest" },
      { option: "C", type: "trick-answer", reason: "Eigenvectors don't average — power iteration converges to a specific direction" },
      { option: "D", type: "trick-answer", reason: "The condition number is a scalar property of $A$, not a vector or matrix" },
      { option: "E", type: "trick-answer", reason: "The null space corresponds to eigenvalue 0 — power iteration would converge to this only if 0 were dominant (largest magnitude), which is rare" },
    ],
    hasPartialCredit: false,
  },

  // Q27 — Core, Week 7, similar matrices share eigenvalues
  {
    id: 27,
    week: 7,
    topics: ["similarity", "eigenvalues", "characteristic polynomial"],
    difficulty: "core",
    stem: "If $B = P^{-1} A P$ for some invertible matrix $P$, then $A$ and $B$ share the same:",
    options: [
      { letter: "A", text: "Eigenvalues, trace, and determinant", isCorrect: true },
      { letter: "B", text: "Eigenvectors", isCorrect: false },
      { letter: "C", text: "Column space", isCorrect: false },
      { letter: "D", text: "Null space", isCorrect: false },
      { letter: "E", text: "All of the above", isCorrect: false },
    ],
    correctAnswer: "A",
    explanation: "Similarity preserves eigenvalues: $\\det(B - \\lambda I) = \\det(P^{-1} A P - \\lambda I) = \\det(P^{-1}(A - \\lambda I)P) = \\det(P^{-1})\\det(A - \\lambda I)\\det(P) = \\det(A - \\lambda I)$. Therefore trace and determinant (sum and product of eigenvalues) are also preserved. Eigenvectors are NOT preserved: if $A\\mathbf{v} = \\lambda \\mathbf{v}$, then $B(P^{-1}\\mathbf{v}) = \\lambda(P^{-1}\\mathbf{v})$.",
    distractorAnalysis: [
      { option: "B", type: "trick-answer", reason: "Eigenvectors transform: $A\\mathbf{v} = \\lambda\\mathbf{v} \\Rightarrow B(P^{-1}\\mathbf{v}) = \\lambda(P^{-1}\\mathbf{v})$ — the eigenvector changes" },
      { option: "C", type: "trick-answer", reason: "$\\mathrm{col}(B) = P^{-1}(\\mathrm{col}(A))$ — the column space transforms under $P^{-1}$, generally not equal" },
      { option: "D", type: "trick-answer", reason: "$\\ker(B) = P^{-1}(\\ker(A))$ — the null space transforms, not preserved as a set" },
      { option: "E", type: "trick-answer", reason: "Since B and D are false, not all of the above" },
    ],
    hasPartialCredit: false,
  },

  // Q28 — Deeper, Week 9, matrix square root of identity
  {
    id: 28,
    week: 9,
    topics: ["matrix square root", "idempotent", "spectral decomposition"],
    difficulty: "deeper",
    stem: "If $B^2 = I$ (where $B$ is a real matrix), then every eigenvalue $\\lambda$ of $B$ satisfies:",
    options: [
      { letter: "A", text: "$\\lambda = \\pm 1$", isCorrect: true },
      { letter: "B", text: "$\\lambda = 1$ only", isCorrect: false },
      { letter: "C", text: "$\\lambda^2 = \\lambda$", isCorrect: false },
      { letter: "D", text: "$\\lambda = 0$ or $1$", isCorrect: false },
      { letter: "E", text: "$\\lambda$ can be any real number", isCorrect: false },
    ],
    correctAnswer: "A",
    explanation: "If $B\\mathbf{v} = \\lambda \\mathbf{v}$, then $B^2\\mathbf{v} = \\lambda^2 \\mathbf{v}$. Since $B^2 = I$, we have $B^2\\mathbf{v} = \\mathbf{v} = \\lambda^2 \\mathbf{v}$, so $\\lambda^2 = 1$ and $\\lambda = \\pm 1$.",
    distractorAnalysis: [
      { option: "B", type: "trick-answer", reason: "Would be true only for $B = I$ — reflection and rotation-scaling matrices also satisfy $B^2 = I$ with $\\lambda = -1$ possible" },
      { option: "C", type: "trick-answer", reason: "$\\lambda^2 = \\lambda$ gives $\\lambda = 0$ or $1$ — this is for idempotent matrices ($B^2 = B$), not involutions ($B^2 = I$)" },
      { option: "D", type: "trick-answer", reason: "$\\lambda = 0$ or $1$ would require $B^2 = B$ (idempotent), not $B^2 = I$" },
      { option: "E", type: "trick-answer", reason: "Eigenvalues of involutions are restricted to $\\pm 1$ by the equation $\\lambda^2 = 1$" },
    ],
    hasPartialCredit: false,
  },

  // ============================================================
  // WEEKS 10-11: SVD, PCA (10 questions)
  // ============================================================

  // Q29 — Core, Week 10, SVD existence
  {
    id: 29,
    week: 10,
    topics: ["SVD", "singular values", "existence"],
    difficulty: "core",
    stem: "Every real matrix $A \\in \\mathbb{R}^{m \\times n}$ has a singular value decomposition $A = U \\Sigma V^T$. This guarantees:",
    options: [
      { letter: "A", text: "$U$ and $V$ are orthogonal matrices of sizes $m \\times m$ and $n \\times n$ respectively", isCorrect: true },
      { letter: "B", text: "$\\Sigma$ is a square diagonal matrix", isCorrect: false },
      { letter: "C", text: "$A$ must be square", isCorrect: false },
      { letter: "D", text: "$A$ must be invertible", isCorrect: false },
      { letter: "E", text: "$U = V$", isCorrect: false },
    ],
    correctAnswer: "A",
    explanation: "The SVD exists for ANY real matrix $A \\in \\mathbb{R}^{m \\times n}$: $U \\in \\mathbb{R}^{m \\times m}$ (orthogonal), $\\Sigma \\in \\mathbb{R}^{m \\times n}$ (rectangular diagonal with singular values), and $V \\in \\mathbb{R}^{n \\times n}$ (orthogonal). $\\Sigma$ is rectangular, not square, unless $m = n$.",
    distractorAnalysis: [
      { option: "B", type: "trick-answer", reason: "$\\Sigma$ is $m \\times n$ — rectangular in general. Only when $m = n$ is it square (and diagonal)." },
      { option: "C", type: "trick-answer", reason: "The SVD is defined for rectangular matrices — that's one of its key strengths over eigendecomposition" },
      { option: "D", type: "trick-answer", reason: "Singular matrices (rank-deficient) still have an SVD — the Eckart-Mirsky theorem uses it precisely for this case" },
      { option: "E", type: "trick-answer", reason: "$U$ and $V$ are generally different — they come from eigendecompositions of $AA^T$ and $A^TA$ respectively" },
    ],
    hasPartialCredit: false,
  },

  // Q30 — Core, Week 10, compact SVD
  {
    id: 30,
    week: 10,
    topics: ["compact SVD", "rank", "outer products"],
    difficulty: "core",
    stem: "If $A \\in \\mathbb{R}^{m \\times n}$ has rank $r$ and reduced SVD $A = U_r \\Sigma_r V_r^T$ with $U_r \\in \\mathbb{R}^{m \\times r}$, then:",
    options: [
      { letter: "A", text: "$A = \\sum_{i=1}^r \\sigma_i \\mathbf{u}_i \\mathbf{v}_i^T$", isCorrect: true },
      { letter: "B", text: "$r = \\min(m, n)$", isCorrect: false },
      { letter: "C", text: "$U_r^T U_r = I_m$", isCorrect: false },
      { letter: "D", text: "$\\Sigma_r$ is $r \\times r$ and diagonal", isCorrect: false },
      { letter: "E", text: "$V_r^T V_r = I_r$", isCorrect: false },
    ],
    correctAnswer: "A",
    explanation: "The compact SVD expresses $A$ as a sum of $r$ rank-1 outer products: $A = \\sum_{i=1}^r \\sigma_i \\mathbf{u}_i \\mathbf{v}_i^T$, where $\\mathbf{u}_i$ are columns of $U_r$ and $\\mathbf{v}_i$ are columns of $V_r$.",
    distractorAnalysis: [
      { option: "B", type: "trick-answer", reason: "$r \\leq \\min(m, n)$, with strict inequality when $A$ is rank-deficient" },
      { option: "C", type: "trick-answer", reason: "$U_r^T U_r = I_r$ (not $I_m$) — $U_r$ has only $r$ orthonormal columns, so $U_r^T U_r$ is $r \\times r$ identity" },
      { option: "D", type: "trick-answer", reason: "$\\Sigma_r$ is $r \\times n$ (or $r \\times r$ for square case), not generally square if $m \\neq n$" },
      { option: "E", type: "trick-answer", reason: "$V_r^T V_r = I_r$ (not $V_r V_r^T$) — $V_r$ has orthonormal columns, giving $V_r^T V_r = I_r$" },
    ],
    hasPartialCredit: false,
  },

  // Q31 — Deeper, Week 11, total variance in PCA
  {
    id: 31,
    week: 11,
    topics: ["PCA", "total variance", "singular values", "covariance"],
    difficulty: "deeper",
    stem: "For a centered data matrix $X \\in \\mathbb{R}^{n \\times p}$ with singular values $\\sigma_1, \\ldots, \\sigma_p$, the total variance of the data is:",
    options: [
      { letter: "A", text: "$\\sum_{i=1}^p \\sigma_i^2 / (n-1)$", isCorrect: true },
      { letter: "B", text: "$\\sum_{i=1}^p \\sigma_i$", isCorrect: false },
      { letter: "C", text: "$\\sigma_1^2$", isCorrect: false },
      { letter: "D", text: "$\\prod_{i=1}^p \\sigma_i$", isCorrect: false },
      { letter: "E", text: "$\\mathrm{tr}(X^T X)$", isCorrect: false },
    ],
    correctAnswer: "A",
    explanation: "The covariance matrix is $S = \\frac{1}{n-1}X^T X = \\frac{1}{n-1}V \\Sigma^T \\Sigma V^T$. The eigenvalues of $S$ are $\\sigma_i^2/(n-1)$. Total variance is $\\mathrm{tr}(S) = \\sum \\sigma_i^2/(n-1)$. Option (E) $\\mathrm{tr}(X^T X) = \\sum \\sigma_i^2$ is equal to $(n-1) \\times$ total variance, so (A) is the more precise answer.",
    distractorAnalysis: [
      { option: "B", type: "trick-answer", reason: "Missing the square and the $(n-1)$ scaling — $\\sum \\sigma_i$ has wrong units for variance" },
      { option: "C", type: "trick-answer", reason: "Only the variance along the first PC — ignores all other components" },
      { option: "D", type: "trick-answer", reason: "Product of singular values relates to $\\det(X)$ or $\\det(X^TX)$, not total variance" },
      { option: "E", type: "partial-credit", reason: "$\\mathrm{tr}(X^TX) = \\sum \\sigma_i^2$ which is $(n-1) \\times$ the total variance — correct up to the $(n-1)$ scaling factor" },
    ],
    hasPartialCredit: true,
    partialCreditOptions: ["E"],
  },

  // Q32 — Core, Week 10, relationship between SVD and eigen-decomposition
  {
    id: 32,
    week: 10,
    topics: ["SVD", "eigenvalues", "$A^TA$", "$AA^T$"],
    difficulty: "core",
    stem: "If $A = U \\Sigma V^T$ is the SVD of $A$, then $A^T A$ equals:",
    options: [
      { letter: "A", text: "$V \\Sigma^T \\Sigma V^T$", isCorrect: true },
      { letter: "B", text: "$U \\Sigma \\Sigma^T U^T$", isCorrect: false },
      { letter: "C", text: "$V V^T$", isCorrect: false },
      { letter: "D", text: "$\\Sigma^2$", isCorrect: false },
      { letter: "E", text: "$U^T U$", isCorrect: false },
    ],
    correctAnswer: "A",
    explanation: "$A^T A = (U \\Sigma V^T)^T (U \\Sigma V^T) = V \\Sigma^T U^T U \\Sigma V^T = V \\Sigma^T \\Sigma V^T$ since $U^T U = I$. Note that $\\Sigma^T \\Sigma$ is an $n \\times n$ diagonal matrix with $\\sigma_i^2$ on the diagonal.",
    distractorAnalysis: [
      { option: "B", type: "trick-answer", reason: "This equals $AA^T$, not $A^T A$ — swapped the order of multiplication" },
      { option: "C", type: "trick-answer", reason: "$V V^T = I$ — would imply $A^T A = I$, which is only true for orthogonal $A$" },
      { option: "D", type: "trick-answer", reason: "$\\Sigma^2$ doesn't make dimensional sense — $\\Sigma$ is $m \\times n$, so $\\Sigma^2$ is not even defined in general" },
      { option: "E", type: "trick-answer", reason: "$U^T U = I$, but $A^TA$ is not $I$ in general" },
    ],
    hasPartialCredit: false,
  },

  // Q33 — Core, Week 11, dimension reduction in PCA
  {
    id: 33,
    week: 11,
    topics: ["PCA", "dimension reduction", "variance capture"],
    difficulty: "core",
    stem: "Reducing $n$-dimensional data to $k < n$ dimensions via PCA captures what fraction of total variance?",
    options: [
      { letter: "A", text: "$\\dfrac{\\sigma_1^2 + \\cdots + \\sigma_k^2}{\\sigma_1^2 + \\cdots + \\sigma_n^2}$", isCorrect: true },
      { letter: "B", text: "$\\dfrac{k}{n}$", isCorrect: false },
      { letter: "C", text: "$\\dfrac{\\sigma_1 + \\cdots + \\sigma_k}{\\sigma_1 + \\cdots + \\sigma_n}$", isCorrect: false },
      { letter: "D", text: "Always 100%", isCorrect: false },
      { letter: "E", text: "Cannot be determined without knowing the data", isCorrect: false },
    ],
    correctAnswer: "A",
    explanation: "The eigenvalues $\\lambda_i = \\sigma_i^2/(n-1)$ of the covariance matrix give the variance along each principal component. The fraction of total variance captured by the first $k$ PCs is $\\sum_{i=1}^k \\lambda_i / \\sum_{i=1}^n \\lambda_i = (\\sum_{i=1}^k \\sigma_i^2) / (\\sum_{i=1}^n \\sigma_i^2)$.",
    distractorAnalysis: [
      { option: "B", type: "trick-answer", reason: "Linear fraction $k/n$ — variance capture depends on the eigenvalue distribution, not just the dimension ratio" },
      { option: "C", type: "trick-answer", reason: "Variance is proportional to $\\sigma^2$, not $\\sigma$ — this would over-weight small singular values" },
      { option: "D", type: "trick-answer", reason: "Only true when $k = n$ (keeping all components) — generally, $k < n$ means some variance is lost" },
      { option: "E", type: "trick-answer", reason: "The fraction is always computable from the singular values — no need for raw data" },
    ],
    hasPartialCredit: false,
  },

  // Q34 — Core, Week 10, pseudoinverse from SVD
  {
    id: 34,
    week: 10,
    topics: ["pseudoinverse", "SVD", "minimum norm solution"],
    difficulty: "core",
    stem: "For $A \\in \\mathbb{R}^{m \\times n}$ with reduced SVD $A = U_r \\Sigma_r V_r^T$, the pseudoinverse $A^\\dagger$ is:",
    options: [
      { letter: "A", text: "$V_r \\Sigma_r^{-1} U_r^T$", isCorrect: false },
      { letter: "B", text: "$V_r \\Sigma_r^\\dagger U_r^T$", isCorrect: true },
      { letter: "C", text: "$U_r \\Sigma_r V_r^T$", isCorrect: false },
      { letter: "D", text: "$V_r V_r^T$", isCorrect: false },
      { letter: "E", text: "$V_r^2 V_r^{T}$", isCorrect: false },
    ],
    correctAnswer: "B",
    explanation: "$A^\\dagger = V_r \\Sigma_r^\\dagger U_r^T$ where $\\Sigma_r^\\dagger$ is the $n \\times m$ pseudoinverse of $\\Sigma_r$: it transposes $\\Sigma_r$ (giving $\\Sigma_r^T \\in \\mathbb{R}^{n \\times m}$) and inverts its nonzero diagonal entries. Option (A) uses the regular inverse $\\Sigma_r^{-1}$, which doesn't exist since $\\Sigma_r$ is not square.",
    distractorAnalysis: [
      { option: "A", type: "trick-answer", reason: "$\\Sigma_r$ is $r \\times n$ (or $r \\times r$ in the square case) — not invertible as a standalone matrix. $\\Sigma_r^\\dagger$ handles the rectangular geometry properly." },
      { option: "C", type: "trick-answer", reason: "This is just $A$ again, not $A^\\dagger$" },
      { option: "D", type: "trick-answer", reason: "$V_r V_r^T$ is the projection onto $\\mathrm{im}(A^T)$, not the pseudoinverse" },
      { option: "E", type: "trick-answer", reason: "Nonsensical expression — $V_r^2$ is not defined" },
    ],
    hasPartialCredit: false,
  },

  // Q35 — Deeper, Week 11, centering in PCA
  {
    id: 35,
    week: 11,
    topics: ["PCA", "centering", "mean subtraction", "covariance"],
    difficulty: "deeper",
    stem: "In PCA, centering the data (subtracting the mean from each column) before computing the covariance matrix ensures:",
    options: [
      { letter: "A", text: "The eigenvectors of $X^TX$ correspond to directions of maximum variance, not maximum mean", isCorrect: true },
      { letter: "B", text: "The data matrix becomes orthogonal", isCorrect: false },
      { letter: "C", text: "The singular values are all positive", isCorrect: false },
      { letter: "D", text: "The number of PCs equals the number of original features", isCorrect: false },
      { letter: "E", text: "The determinant of $X^TX$ equals 1", isCorrect: false },
    ],
    correctAnswer: "A",
    explanation: "Without centering, the first principal component would point toward the mean of the data (maximum location), not the direction of maximum spread. Centering removes the mean so that the covariance matrix captures variation around zero. If you don't center, the PCs are contaminated by the mean location.",
    distractorAnalysis: [
      { option: "B", type: "trick-answer", reason: "Centering doesn't make $X$ orthogonal — it shifts the data to be symmetric around the origin" },
      { option: "C", type: "trick-answer", reason: "Singular values are always nonnegative regardless of centering — centering affects which directions matter, not the sign of singular values" },
      { option: "D", type: "trick-answer", reason: "Number of PCs is determined by rank, not by centering — always at most $\\min(n, p)$ where $p$ is number of features" },
      { option: "E", type: "trick-answer", reason: "No — $\\det(X^TX)$ depends on the actual variance structure, not on centering" },
    ],
    hasPartialCredit: false,
  },

  // Q36 — Core, Week 11, scree plot
  {
    id: 36,
    week: 11,
    topics: ["scree plot", "PCA", "elbow", "dimensionality selection"],
    difficulty: "core",
    stem: "A scree plot in PCA shows eigenvalues (or variances) against component number. The 'elbow' of the scree plot suggests:",
    options: [
      { letter: "A", text: "The optimal number of principal components to retain", isCorrect: true },
      { letter: "B", text: "The total number of components", isCorrect: false },
      { letter: "C", text: "Whether the data is linearly dependent", isCorrect: false },
      { letter: "D", text: "The determinant of the covariance matrix", isCorrect: false },
      { letter: "E", text: "The condition number of $X$", isCorrect: false },
    ],
    correctAnswer: "A",
    explanation: "The scree plot shows the 'diminishing returns' of adding more PCs: variance explained drops sharply after the elbow, then levels off. The elbow marks where additional components contribute relatively little. This heuristic helps choose $k$ for dimensionality reduction.",
    distractorAnalysis: [
      { option: "B", type: "trick-answer", reason: "The total number is just the dimension $p$ — the scree plot's purpose is to choose a subset, not identify the total" },
      { option: "C", type: "trick-answer", reason: "Linear dependence shows up as zero or near-zero eigenvalues, not as an elbow" },
      { option: "D", type: "trick-answer", reason: "The determinant of the covariance matrix is the product of eigenvalues — visible as the last point of the scree plot if multiplied together, but the elbow has a different meaning" },
      { option: "E", type: "trick-answer", reason: "Condition number relates to the ratio of largest to smallest eigenvalue, not to the elbow shape" },
    ],
    hasPartialCredit: false,
  },

  // Q37 — Core, Week 10, Frobenius norm and SVD
  {
    id: 37,
    week: 10,
    topics: ["Frobenius norm", "SVD", "singular values"],
    difficulty: "core",
    stem: "For any matrix $A \\in \\mathbb{R}^{m \\times n}$, the Frobenius norm $\|A\|_F$ equals:",
    options: [
      { letter: "A", text: "$\\sqrt{\\sum_{i=1}^r \\sigma_i^2}$ (where $r = \\mathrm{rank}(A)$)", isCorrect: true },
      { letter: "B", text: "$\\sum_{i=1}^r \\sigma_i$", isCorrect: false },
      { letter: "C", text: "$\\sigma_1$", isCorrect: false },
      { letter: "D", text: "$\\sqrt{\\mathrm{tr}(A)}$", isCorrect: false },
      { letter: "E", text: "$\\prod_{i=1}^r \\sigma_i$", isCorrect: false },
    ],
    correctAnswer: "A",
    explanation: "$\\|A\\|_F = \\sqrt{\\mathrm{tr}(A^T A)} = \\sqrt{\\mathrm{tr}(V \\Sigma^T \\Sigma V^T)} = \\sqrt{\\mathrm{tr}(\\Sigma^T \\Sigma)} = \\sqrt{\\sum \\sigma_i^2}$. The Frobenius norm is the Euclidean norm of the vector of singular values.",
    distractorAnalysis: [
      { option: "B", type: "trick-answer", reason: "This is the nuclear norm ($\\|A\\|_*$), not the Frobenius norm — sums the singular values, not their squares" },
      { option: "C", type: "trick-answer", reason: "$\\sigma_1$ is the spectral (operator 2-norm), not the Frobenius norm" },
      { option: "D", type: "trick-answer", reason: "$\\mathrm{tr}(A)$ need not equal $\\|A\\|_F^2$ — for example, $\\mathrm{tr}(I_2) = 2$ but $\\|I\\|_F = \\sqrt{2}$" },
      { option: "E", type: "trick-answer", reason: "Product of singular values relates to $\\det(A^TA)$, not the Frobenius norm" },
    ],
    hasPartialCredit: false,
  },

  // Q38 — Core, Week 11, SVD for least squares
  {
    id: 38,
    week: 11,
    topics: ["SVD", "least squares", "pseudoinverse", "minimum norm"],
    difficulty: "core",
    stem: "The SVD-based solution to the least squares problem $A\\mathbf{x} \\approx \\mathbf{b}$ gives $\\hat{\\mathbf{x}} = A^\\dagger \\mathbf{b}$. This $\\hat{\\mathbf{x}}$ is:",
    options: [
      { letter: "A", text: "The minimum-norm solution among all least-squares solutions", isCorrect: true },
      { letter: "B", text: "The unique exact solution to $A\\mathbf{x} = \\mathbf{b}$", isCorrect: false },
      { letter: "C", text: "Always the same as $(A^T A)^{-1} A^T \\mathbf{b}$", isCorrect: false },
      { letter: "D", text: "Guaranteed to have integer entries", isCorrect: false },
      { letter: "E", text: "An eigenvector of $A$", isCorrect: false },
    ],
    correctAnswer: "A",
    explanation: "$A^\\dagger \\mathbf{b}$ is the minimum-norm least-squares solution: among all vectors $\\mathbf{x}$ that minimize $\|A\\mathbf{x} - \\mathbf{b}\\|$, it is the one with smallest Euclidean norm. This is unique regardless of the rank of $A$.",
    distractorAnalysis: [
      { option: "B", type: "trick-answer", reason: "Only exact when $\\mathbf{b} \\in \\mathrm{im}(A)$ — otherwise there is no exact solution" },
      { option: "C", type: "trick-answer", reason: "Equivalent only when $A$ has full column rank. For rank-deficient $A$, $(A^TA)^{-1}A^T$ is not defined (singular $A^TA$)." },
      { option: "D", type: "trick-answer", reason: "No — $\\hat{\\mathbf{x}}$ is generally real-valued but not necessarily integer" },
      { option: "E", type: "trick-answer", reason: "$\\hat{\\mathbf{x}}$ satisfies the normal equations, not $A\\mathbf{x} = \\lambda \\mathbf{x}$" },
    ],
    hasPartialCredit: false,
  },

  // ============================================================
  // WEEK 12: Neural Networks (3 questions)
  // ============================================================

  // Q39 — Core, Week 12, ReLU activation
  {
    id: 39,
    week: 12,
    topics: ["neural networks", "ReLU", "activation function", "nonlinearity"],
    difficulty: "core",
    stem: "The ReLU activation $\\sigma(z) = \\max(0, z)$ is nonlinear because:",
    options: [
      { letter: "A", text: "$\\sigma(a + b) \\neq \\sigma(a) + \\sigma(b)$ in general", isCorrect: true },
      { letter: "B", text: "$\\sigma(z) = cz$ for some constant $c$", isCorrect: false },
      { letter: "C", text: "It is not defined at $z = 0$", isCorrect: false },
      { letter: "D", text: "$\\sigma$ maps $\\mathbb{R}$ to $[0, \\infty)$", isCorrect: false },
      { letter: "E", text: "It has a bounded range", isCorrect: false },
    ],
    correctAnswer: "A",
    explanation: "ReLU fails the linearity test: $\\sigma(2) + \\sigma(-1) = 2 + 0 = 2$, but $\\sigma(2 + (-1)) = \\sigma(1) = 1 \\neq 2$. This failure of additivity (and homogeneity only partially) is what makes ReLU nonlinear — and this nonlinearity is what enables networks to learn non-trivial functions.",
    distractorAnalysis: [
      { option: "B", type: "trick-answer", reason: "This describes a linear function — ReLU is piecewise linear, not of the form $cz$ everywhere" },
      { option: "C", type: "trick-answer", reason: "ReLU is defined at $z = 0$: $\\sigma(0) = \\max(0, 0) = 0$" },
      { option: "D", type: "trick-answer", reason: "The range being $[0, \\infty)$ describes codomain, not linearity — many nonlinear functions have this range" },
      { option: "E", type: "trick-answer", reason: "ReLU is unbounded above ($\\lim_{z \\to \\infty} \\sigma(z) = \\infty$), so this is false" },
    ],
    hasPartialCredit: false,
  },

  // Q40 — Core, Week 12, gradient descent in neural networks
  {
    id: 40,
    week: 12,
    topics: ["gradient descent", "learning rate", "loss landscape"],
    difficulty: "core",
    stem: "In gradient descent for training a neural network, a very large learning rate typically causes:",
    options: [
      { letter: "A", text: "Overshooting the minimum and causing oscillations or divergence", isCorrect: true },
      { letter: "B", text: "Slow convergence to the minimum", isCorrect: false },
      { letter: "C", text: "The loss to increase monotonically", isCorrect: false },
      { letter: "D", text: "The weights to converge to zero", isCorrect: false },
      { letter: "E", text: "Immediate divergence to infinity", isCorrect: false },
    ],
    correctAnswer: "A",
    explanation: "A large learning rate means each step moves too far in the gradient direction, overshooting shallow minima and causing oscillations or divergence. The update $\\mathbf{w} \\leftarrow \\mathbf{w} - \\eta \\nabla L$ with large $\\eta$ can land outside the region of quadratic approximation.",
    distractorAnalysis: [
      { option: "B", type: "trick-answer", reason: "Small learning rates cause slow convergence — large ones cause fast but unstable updates" },
      { option: "C", type: "trick-answer", reason: "Not necessarily monotonic — large steps can cause loss to spike up and down chaotically" },
      { option: "D", type: "trick-answer", reason: "Weights converging to zero would require a small learning rate with particular initialization, not a large one" },
      { option: "E", type: "trick-answer", reason: "Divergence to infinity is a special case of (A) but 'immediate' and 'infinity' are too strong — large steps cause oscillations, not literal infinity" },
    ],
    hasPartialCredit: false,
  },

  // Q41 — Core, Week 12, batch normalization
  {
    id: 41,
    week: 12,
    topics: ["batch normalization", "internal covariate shift", "covariate shift"],
    difficulty: "core",
    stem: "Batch normalization normalizes the activations of a layer by:",
    options: [
      { letter: "A", text: "Subtracting the batch mean and dividing by the batch standard deviation", isCorrect: true },
      { letter: "B", text: "Setting all activations to have zero mean and unit variance globally (over all data)", isCorrect: false },
      { letter: "C", text: "Applying a fixed linear transformation to all layers equally", isCorrect: false },
      { letter: "D", text: "Scaling activations to lie in $[0, 1]$", isCorrect: false },
      { letter: "E", text: "Whitening the input (decorrelating and scaling to identity covariance)", isCorrect: false },
    ],
    correctAnswer: "A",
    explanation: "Batch norm normalizes each activation across the current mini-batch: $x_i \\leftarrow \\frac{x_i - \\mu_B}{\\sigma_B}$ where $\\mu_B$ and $\\sigma_B$ are the batch mean and standard deviation. This is applied during training. At inference, population statistics (moving averages) are used. This reduces internal covariate shift and allows higher learning rates.",
    distractorAnalysis: [
      { option: "B", type: "trick-answer", reason: "Uses the batch statistics (mini-batch), not the global population statistics — that's a different approach (layer norm uses global, batch norm uses batch)" },
      { option: "C", type: "trick-answer", reason: "Batch norm has learnable scale ($\\gamma$) and shift ($\\beta$) parameters — it's not fixed" },
      { option: "D", type: "trick-answer", reason: "Min-max scaling to $[0,1]$ is a different normalization — batch norm standardizes to mean 0, variance 1, not $[0,1]$" },
      { option: "E", type: "trick-answer", reason: "Whitening (decorrelating) requires a transformation, not just centering and scaling — batch norm does not decorrelate" },
    ],
    hasPartialCredit: false,
  },

  // ============================================================
  // SYNTHESIS: Cross-Week Problems (2 questions)
  // ============================================================

  // Q42 — Synthesis, Weeks 5+10, Orthogonal projection + SVD
  {
    id: 42,
    week: [5, 10],
    topics: ["orthogonal projection", "SVD", "rank-1 approximation", "synthesis"],
    difficulty: "synthesis",
    stem: "The best rank-1 approximation to $A$ in the Frobenius norm is $A_1 = \\sigma_1 \\mathbf{u}_1 \\mathbf{v}_1^T$, where $\\sigma_1$ is the largest singular value. This is equivalent to:",
    options: [
      { letter: "A", text: "The orthogonal projection of $A$ onto the subspace spanned by $\\mathbf{u}_1$ in the domain and $\\mathbf{v}_1$ in the codomain", isCorrect: true },
      { letter: "B", text: "Setting all singular values except $\\sigma_1$ to zero", isCorrect: false },
      { letter: "C", text: "The eigendecomposition of $A^TA$", isCorrect: false },
      { letter: "D", text: "A rank-1 matrix whose column space equals $\\mathrm{im}(A)$", isCorrect: false },
      { letter: "E", text: "Both (B) and (C)", isCorrect: false },
    ],
    correctAnswer: "A",
    explanation: "The rank-1 approximation $A_1 = \\sigma_1 \\mathbf{u}_1 \\mathbf{v}_1^T$ projects $A$ orthogonally onto the rank-1 subspace spanned by $\\mathbf{u}_1 \\mathbf{v}_1^T$. It simultaneously selects the dominant left singular vector $\\mathbf{u}_1$ (direction of maximum variance in the row space) and right singular vector $\\mathbf{v}_1$ (corresponding direction in the column space). By Eckart-Mirsky-Young, truncating to one term minimizes $\|A - A_1\|_F$.",
    distractorAnalysis: [
      { option: "B", type: "partial-credit", reason: "Truncating all but $\\sigma_1$ is what you do to GET the rank-1 approximation, but (A) gives the geometric interpretation" },
      { option: "C", type: "trick-answer", reason: "Eigendecomposition of $A^TA$ gives $V \\Sigma^T \\Sigma V^T$ — the eigenpairs are $\\sigma_i^2, \\mathbf{v}_i$, which are involved but the SVD and rank-1 approximation are distinct" },
      { option: "D", type: "trick-answer", reason: "$\\sigma_1 \\mathbf{u}_1 \\mathbf{v}_1^T$ has column space $\\mathrm{span}(\\mathbf{u}_1)$, which is generally a proper subspace of $\\mathrm{im}(A)$ — not necessarily equal" },
      { option: "E", type: "trick-answer", reason: "Neither (B) nor (C) is the best fundamental description" },
    ],
    hasPartialCredit: true,
    partialCreditOptions: ["B"],
  },

  // Q43 — Synthesis, Weeks 7+11, Diagonalization + PCA
  {
    id: 43,
    week: [7, 11],
    topics: ["diagonalization", "PCA", "spectral decomposition", "synthesis"],
    difficulty: "synthesis",
    stem: "If a symmetric matrix $S$ is diagonalized as $S = Q \\Lambda Q^T$ with $Q$ orthogonal and $\\Lambda$ diagonal, then PCA on data with covariance matrix $S$ means:",
    options: [
      { letter: "A", text: "The columns of $Q$ are the principal component directions and entries of $\\Lambda$ (scaled by $1/(n-1)$) give the variances along each direction", isCorrect: true },
      { letter: "B", text: "$S$ must be the data matrix itself, not its covariance", isCorrect: false },
      { letter: "C", text: "The eigenvalues of $S$ are all equal", isCorrect: false },
      { letter: "D", text: "$Q$ selects the top $k$ rows of the data matrix", isCorrect: false },
      { letter: "E", text: "The diagonal entries of $\\Lambda$ are the principal component scores", isCorrect: false },
    ],
    correctAnswer: "A",
    explanation: "PCA on covariance $S$: the eigendecomposition $S = Q \\Lambda Q^T$ gives the spectral decomposition. The columns $\\mathbf{q}_i$ of $Q$ are orthogonal principal component directions (eigenvectors of $S$), and $\\lambda_i/(n-1)$ is the variance along $\\mathbf{q}_i$. Projecting centered data $X$ onto the first $k$ columns of $Q$ gives the $k$-dimensional reduction.",
    distractorAnalysis: [
      { option: "B", type: "trick-answer", reason: "PCA works on the covariance matrix $S = X^TX/(n-1)$, not directly on $X$ — that's why $S$ is symmetric and diagonalizable" },
      { option: "C", type: "trick-answer", reason: "Eigenvalues need not be equal — their spread is what PCA exploits for dimensionality reduction" },
      { option: "D", type: "trick-answer", reason: "Q rotates to the eigenbasis — it doesn't select rows of $X$" },
      { option: "E", type: "trick-answer", reason: "Diagonal entries of $\\Lambda$ are eigenvalues (variances), not scores — the scores are $X\\mathbf{q}_i$ (projected data)" },
    ],
    hasPartialCredit: false,
  },
];

export const examSets: ExamSet[] = [
  {
    id: "final-mock-1",
    title: "Final Exam Mock 1",
    description: "43 conceptual problems covering the full 13-week arc. Mirrors the real 120-minute Quizzam format.",
    questions: finalMock1Questions,
  },
  {
    id: "final-mock-2",
    title: "Final Exam Mock 2",
    description: "A second set of 43 conceptual problems covering the full 13-week arc, with entirely different hooks from Mock 1.",
    questions: finalMock2Questions,
  },
];
