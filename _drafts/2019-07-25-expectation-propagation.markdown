---
layout: post
title: Expectation Propagation
date: '2019-05-17 20:41:19 -0500'
categories: ep notes
---

# Expectation Propagation notes

Commonly in probabilistic models, we deal with expectations that are either too hard to compute or intractable. In Bayesian inference, we usually need to calculate the posterior $$p(z\mid x)$$ for parameter estimation or the evidence $$p(x)$$ for model selection. We can use approximate inference to solve this complex integrals. There is many work that have been done in this area, but approximate methods can be classified in deterministic and sampling methods. The former evaluates the integral in several locations and constructs an approximate function. The latter relies in the law of large numbers and given enough samples, the integral will converge to the true value.

1. Sampling methods: Monte Carlo methods such as Importance sampling, Gibbs sampling, MCMC
2. Deterministic methods: Variational inference, Laplace approximation, Expectation Propagation

## Assumed-density Filtering (ADF)

ADF (aka. moment matching, online Bayesian learning and weak marginalization) can be used when given the joint $$p(x, \theta)$$, we want to calculate the posterior over the latent variable $$p(\theta \mid x)$$ and the evidence $$p(x)$$. This is a common task in statistical machine learning where we want to fit a parametric distribution.

**The common setting**: we are given a set of data points $$D=x_1,\dots,x_n$$, which we assume are i.i.d. Thus, we can model the joint distribution as the product of its observations and the prior $$p(D,\theta) = p(\theta)\prod_i p(x_i\mid\theta)$$. We can factorize the joint distribution as needed, but it is recommendable that **each factor is simple** to enough for being propagated and also the **fewer terms**, entails fewer approximations. In general, we can define the joint distribution as follows where $$t_0$$ is the prior.

$$p(D,\theta) = \prod_{i=0}^n t_i(\theta)$$

**Choose a parametric approximating distribution**: our goal is to approximate the posterior with a simple distribution; $$p(\theta\mid D) \approx q(\theta)$$.

1. This distribution has belong to the exponential family, so we can propagate its sufficient statistics.
2. Pick $$q$$ based in the nature and domain of $$\theta$$.

**Incorporate each term $$t_i$$**: Sequence and incorporate the term $$t_i** into the approximate posterior $$q(\theta$$) going from an old posterior to a new posterior.
