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
  1. homophily: nodes share attributes.
  2. structural equivalence: nodes with similar local neighborhood structure have similar labels.
  3. monophily: nodes with unrelated labels.

- **Relation prediction**: aka. link prediction or graph completion seeks to infer the relationship of a node with other nodes in the graph. The problems involves that given a set of nodes $$\mathcal{V}$$ and an incomplete set of edges $$\mathcal{E}_{\text{train}}\in\mathcal{E}$$, infer the missing edges $$\mathcal{E}\setminus\mathcal{E}_{\text{train}}$$. Complexity is highly depend on the type of graph (i.e. simple graph or multi-relational graph) and it often requires inductive biases specific for each graph domain.

- **Clustering and community detection**: An unsupervised task that finds a community structure where nodes are more likely to form edges with nodes that belong to the same community. The challenge is to infer the *community structure* given an input graph $$\mathcal{G}=(\mathcal{V},\mathcal{E})$$.


- **Graph classification/clustering**: Task over entire graphs. Graph classification involves that given multiple different graphs, learn predictions specific to each graph. And graph clustering (similarity matching) the goal is to learn an unsupervised measure of similarity between a set of i.i.d. graphs. Challenge is to define useful features that consider the relational structure of each datapoint.

### Traditional approaches
Uses for node classification tasks
- graph statistics
- kernel methods
Link prediction
- measure overlap between node neighborhoods
Clustering / community detection
- spectral clustering (graph Laplacians)

#### Graphs statistics and kernel methods
Extract statistics or features and use them in traditional machine learning classifiers.
- **Node level statistics and features**:
  1. **Node degree**: it is the number of incident edges to a node.

      $$d_u=\sum_{v\in V}A_{u,v}$$
  2. **Node centrality**: measures the importance of a node; it takes into account the importance of a node's neighbors.

      $$e_u=\frac{1}{\lambda}\sum_{v\in V}A_{u,v}e_v \forall_u \in V \text{   (eigenvector centrality)}$$

      We can compute the vector of node centrality $$\mathbb{e}$$ using the eigenvector equation with the adjacency matrix $$\lambda\mathbb{e}=A\mathbb{e}$$.

      We can use the eigenvector centrality to rank the likelihood that a node has visited infinity nodes on a random walk (due to the power of iteration) $$\mathbb{e}^{(t+1)}=A\mathbb{e^{(t)}}$$.

      Other measures:
        - _betweeness centrality_: measures how often a node lies on the shortest path between two other nodes.
        - _closeness centrality_: measures the average shortest path length between a node and all other nodes.

    3. **Clustering coefficient**:
    3. **Motifs**:




Graph-level stats -> kernel methods
