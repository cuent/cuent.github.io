---
layout: post
title:  "Linear Algebra"
date:   2019-05-05 21:41:19 -0500
categories: math
---

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
