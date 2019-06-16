---
layout: post
title:  "Linear Algebra"
date:   2019-05-15 21:41:19 -0500
categories: math notes
---

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
$$A\mathbf{x}=\mathbf{b} \rightarrow A^{-1}A\mathbf{x}=A^{-1}\mathbf{b} \rightarrow \mathbf{I}_n\mathbf{x}=A^{-1}\mathbf{b} \rightarrow \mathbf{x}=A^{-1}\mathbf{b}$$

- Should **not** be used in practical applications because **limited precision**
- $$A^{-1} might not be possible to find (singular matrix).

#### Linear Combination

##### Span


#### Linear Dependece
#### Linear Independece
#### Square matrix
#### Singular matrix
#### Norms


[1]: (http://www.deeplearningbook.org/contents/linear_algebra.html)
