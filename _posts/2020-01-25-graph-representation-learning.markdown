---
layout: post
title:  "Graph Representation Learning notes"
date:   2020-01-25 14:41:19 -0500
categories: graphs notes
toc: true
---

## Introduction

Graphs are everywhere and most knowledge can be modeled with graphs. Graphs can be understood as a complex data structure that can be used as a universal language. Therefore, as any language, graphs communicate ideas using nodes (objects) and edges (interaction); thus any complex system can be modeled by creating relationships between points. We focus in the use machine learning on graphs, but the field of network analysis provide other approaches to analyze, understand and learn from graphs.

### Graphs: data structure
Graphs are composed with a set of nodes $$\mathcal{V}$$ on a set de edges $$\mathcal{E}$$ that define a relation $$\mathcal{G}=(\mathcal{V}, \mathcal{E})$$.

$$u,v\in\mathcal{V}$$

Also, notice that *graph* and *network* are terms used interchangeably, but graphs involves properties of real-world data while a network provides mathematical properties for graphs.

- **Adjacency Matrix**: $$A\in \mathbb{R}^{\mid V\mid\times\mid V\mid}
\begin{cases}
    A_{uv}=1& \text{if } (u,v)\in\mathcal{E}\\
    A_{uv}=0              & \text{otherwise}
\end{cases}$$
  - *directed*: no symmetric
  - *undirected*: symmetric
  - *weighted*: real values $$\{0,1\}$$

- **Graph Types**
  - *Simple Graph*: relation $$(u,v)\in\mathcal{E}$$
  - *Multi-relational*: considers type of edge with $$R$$ types, i.e. $$(u,\tau,v)\in\mathcal{E}, A_\tau$$ and $$A\in\mathbb{R}^{\mid V\mid\times\mid V\mid\times\mid R\mid}$$
  - *Attributes*: some graphs have information associated with each node $$X\in\mathbb{R}^{\mid V\mid\times\mid m\mid}$$.

### Machine Learning tasks on Graphs
ML on graphs involves common ML tasks such as 1) supervised learning: predict a target output; 2) unsupervised learning: infer patterns; 3) reinforcement learning: learn to act in an environment, but there are some task on graphs that lie on these categories.

- **Node classification**: Consist in predicting a label $$y_u$$ associated with a node $$u\in\mathcal{V}$$.

  Modeling in graphs is different since nodes are interconnected with each other and they are not i.i.d. Thus, some connection between nodes is needed. For example:
  1. homophily:
  2. structural equivalence:
  3. monophily:

- **Relation prediction**:
- **Clustering and community detection**:
- **Graph classification/clustering**: 
