---
layout: post
title:  "CS224W notes - Machine learning with graphs"
date:   2019-05-17 20:41:19 -0500
categories: graphs notes
---

## [Introduction and graph structure][1]

### Why graphs?
Networks are general languages for describing complex systems of interacting entities. In other words, a network is a universal language for describing complex data.

Network structure affects the robustness of a system

Most real networks are sparse

Tasks to perform in graphs:
- node classification
- link prediction
- community detection
- network similarity

**Embedding nodes:** map nodes to $$d$$-dimensional embeddings. Thus, nodes wit similar network neighbourhoods are embedded close together.

Terminology:
- Networks refer to a real system, e.g. Social Networks, Web.
- Graph is a mathematical representation of a network e.g. graph, vertex, edge

Graphs can be directed (followers on twitter) or undirected (friends on Facebook)

Node degrees:
  Undirected:
  - node degree: the number of edges adjacent to node i
  - avg. degree

  Directed:
  - in-degree
  - out-degree
  - the total degree of a node is the sum of in and out-degrees

Complete Graph
- maximum number of edges in an undirected graph on $N$ nodes is $$E_max=\frac{N(N-1)}{2}$$ and when the number of edges is $E=E_max$, the undirected graph is called compete graph.

Bipartite Graph
- It is a graph whose nodes can be divided into two disjoints sets $U$ and $V$, which are independent sets.

Representing Graphs
  Adjacency matrix
  - $$A_{ij}=1$$ if there is a link from node $$i$$ to $$j$$
  - $$A_{ij}=0$$ otherwise
  - they are sparse

  Edge List
  - graph as a set of edges

  Adjacency list
  - each row is a node and its line is the connected nodes
    1:
    2: 3,4
    3: 2,4
    4: 5
  - Easier to work with if network is large or sparse

Edge attributes
 - weight (frequency of communication)
 - raking (best friend, 2nd best friend)
 - type (friend, relative)
 - Sign (Friend vs Foe)

Other types of graphs:
  - self-edges: contain self-loops (proteins, hyperlinks)
  - multigraph: more than one edge between nodes (communication, collaboration)

Connectivity:
  Disconnected graph
  - a graph can become a disconnected graph, if the a subgraph becomes isolated. Thus it has more than one component...
  - bridge edge: if we delete an edge,
  - articulation node: if we erase a node
  - Each component can be represented in a block-diagonal form

  Strongly connected directed graph
  - has a path from each node to every other node and vice-versa.

  Weakly connected directed graph
  - is connected if we disregard the edge directions

## [Properties of networks and random graph models][2]

### How to Measure a Network

- Degree distribution $$p(k)$$: probability that a randomly node has degree $$k$$.

$$N_k\rightarrow$$: number of nodes with degree $$k$$

$$p(k)=\frac{N_k}{N}$$

**Note:** directed graphs have separate in- and out-degree distributions

- Path: sequence of nodes in which each node is linked to the next one.

$$P_n=\{i_0,\dots,i_n\}$$

$$P_n=\{(i_0,i_1),\dots,(i_{n-1},i_n)\}$$

- Distance between a pair of nodes $$h_{A,B}$$: number of edges along the shortest path connecting the nodes.

If node are not connected, distance is defined as *zero* or *infinity*

Directed graphs, paths need to follow the direction of the arrows, and as a consequence, distance is not symmetric $$h_{B,C}\neq h_{c,B}$$

- Diameter: shortest path distance between any pair of nodes in a graph

- Average path length $$\bar h$$:

$$\bar h= \frac{1}{2E_{max}}\sum_{i,j\neq i}h_{ij}$$

$$E_{max}$$: max number of edges (total number of node pairs) $$=\frac{n(n-1)}{2}$$

- Clustering Coefficient
 



[1]: (http://web.stanford.edu/class/cs224w/slides/01-intro.pdf)
[2]: (http://web.stanford.edu/class/cs224w/slides/02-gnp-smallworld.pdf)
