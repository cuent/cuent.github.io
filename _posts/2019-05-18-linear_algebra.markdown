---
layout: post
title:  "Linear Algebra"
date:   2019-05-15 21:41:19 -0500
categories: math notes
---

Some interesting links:
- [Matrix cookbook][2]
- [Matrix derivatives][3]

Notes of [chapter 2][1] of Deep Learning book.

#### Mathematical objects

1. **Scalar:** single number $$x=1$$
2. **Vector:** array of numbers $$\mathbf{x}=\begin{vmatrix}x_1\\\vdots\\x_n\end{vmatrix}$$

    $$\mathbf{x_{-1}}$$: ignore element $$x_1$$
3. **Matrix:** 2D array of numbers $$\mathbf{A}\in\mathbb{R}^{mxn}$$

    horizontal coordinate (all), ith row: $$\mathbf{A}_{i,:}$$

    vertical coordinate (all), ith column: $$\mathbf{A}_{:,i}$$

    value: $$f(\mathbf{A})_{i,j}$$
4. **Tensor:** array with more than two axes $$\mathbf{A}$$

    value: $$\mathbf{A}_{i,j,k}$$

#### Transpose
  - Mirror across _main diagonal_ $$\mathbf{A} \rightarrow \mathbf{A}^\intercal$$
  - Scalar matrix, one item $$\mathbf{a}=\mathbf{a}^\intercal$$
  - Vector $$\mathbf{x}^\intercal$$
  - Matrix product $$(\mathbf{A}\mathbf{B})^\intercal=\mathbf{B}^\intercal\mathbf{A}^\intercal$$

#### Addition
   If $$\mathbf{A}$$ and $$\mathbf{B}$$ same shape, $$\mathbf{C}=\mathbf{A}+\mathbf{B}$$, where $$\mathbf{C}_{i,j}=\mathbf{A}_{i,j}+\mathbf{B}_{i,j}$$.

#### Scalar addition and multiplication
  $$\mathbf{D}=a\cdot\mathbf{B}+c$$, where $$\mathbf{D}_{i,j}=a\cdot\mathbf{B}_{i,j}+c$$

#### Addition matrix and vector
  $$\mathbf{C}=\mathbf{A}+\mathbf{b}$$, where $$\mathbf{C}_{i,j}=\mathbf{A}_{i,j}+\mathbf{b}_j$$

  **broadcasting**: $$\mathbf{b}$$ is addded to each **row** of the matrix $$\mathbf{A}$$.

#### Operations
  1. Matrix product $$\mathbf{C}=\mathbf{A}\mathbf{B} \rightarrow \mathbf{C}_{m\times p}=\mathbf{A}_{m\times n}\mathbf{B}_{n\times p}$$ and $$\mathbf{C}_{i,j}=\sum_k\mathbf{A}_{i,k}\mathbf{B}_{k,j}$$

      Vectors of the same size: $$\mathbf{x}^\intercal\mathbf{y}$$
  2. Elementwise product / Hadamard product $$\mathbf{A}\odot\mathbf{B}$$

#### Properties
  - Distributive: $$\mathbf{A}(\mathbf{B}+\mathbf{C})=\mathbf{A}\mathbf{B}+\mathbf{A}\mathbf{C}$$  
  - Associative: $$\mathbf{A}(\mathbf{B}\mathbf{C})=(\mathbf{A}\mathbf{B})\mathbf{C}$$
  - Commutative: **not** $$\mathbf{A}\mathbf{B}\neq \mathbf{B}\mathbf{A}$$ (not always)

    **yes** for vectors $$\rightarrow$$ $$\mathbf{x}^\intercal \mathbf{y}=\mathbf{y}^\intercal\mathbf{x}$$

#### Linear equations

$$\mathbf{A}\mathbf{x}=\mathbf{b}$$ (notation compact)
 - $$\mathbf{A}\in\mathbb{R}^{m\times n}$$ known
 - $$\mathbf{x}\in\mathbb{R}^m$$ variable
 - $$\mathbf{b}\in\mathbb{R}^m$$ known

 Notation not compact, equations:

 $$A_{1,:}\mathbf{x}=b_1 \rightarrow A_{1,1}x_1+\dots+A_{1,n}x_n=b_1\\
 \vdots\\
 A_{m,:}\mathbf{x}=b_m \rightarrow A_{m,1}x_1+\dots+A_{m,n}x_n=b_m$$

#### Identity matrix
$$\mathbf{I}_n\in\mathbb{R}^{nxn} \rightarrow \mathbf{I}_n\mathbf{x}=\mathbf{x}\:\:\:\:\:\:\: \forall_{\mathbf{x}}\in\mathbb{R}^n$$

#### Inverse Matrix
$$A^{-1}A=\mathbf{I}_n$$, $$AA^{-1}=\mathbf{I}_n$$, for square matrix left and right are the same.

For example:
$$
\begin{align}
A\mathbf{x}&=\mathbf{b} \\
A^{-1}A\mathbf{x}&=A^{-1}\mathbf{b} \\
\mathbf{I}_n\mathbf{x}&=A^{-1}\mathbf{b}\\
\mathbf{x}&=A^{-1}\mathbf{b}
\end{align}
$$

- Should **not** be used in practical applications because **limited precision**
- $$A^{-1}$$ might not be possible to find (singular matrix).

**Note:** Matrix should be **square and singular**. If not, we cannot get $$A^{-1}$$.
#### Linear Combination
$${\mathbf{v}^{(1)},\dots,\mathbf{v}^{(n)}}$$ Given by multiplying each vector $$\mathbf{v}^{(i)}$$ by a scalar and adding.

$$\sum_i c_i\mathbf{v}^{(i)}$$

##### Span
Set of all points obtained by linear combination of the original vectors

$$A\mathbf{x}=\mathbf{b} \rightarrow$$ solution if $$\mathbf{b}$$ is in the **span** (known as __column space__ / __range__ of $$A$$) of columns $$A$$

$$A$$ square matrix $$m=n$$ and all columns linear independent.

#### Linear Dependence
Same column space / a combination
#### Linear Independence
No vector in the set is a **linear combination** of the other vectors.
#### Square matrix
$$A \in\mathbb{R}^{m\times n} m=n$$
#### Singular matrix
Matrix with linear independent columns
#### Norms
Measure the size of a vector

- $$L^p$$ norm: $$\mid\mid x\mid\mid_p=(\sum_i\mid x_i\mid)^{\frac{1}{p}}$$ where $$p\in\mathbb{R}, p\geq 1$$

### Special kind of matrices and Vectors
### Eigendecomposition
### Singular Value Decomposition
### The Moore-Penrose Pseudoinverse

[1]: (http://www.deeplearningbook.org/contents/linear_algebra.html)
[2]: (https://www.math.uwaterloo.ca/~hwolkowi/matrixcookbook.pdf)
[3]: (https://people.maths.ox.ac.uk/gilesm/files/NA-08-01.pdf)
