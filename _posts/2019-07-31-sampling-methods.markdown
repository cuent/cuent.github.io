---
layout: post
title:  "Sampling methods"
date:   2019-05-17 20:41:19 -0500
categories: sampling notes
---
# Monte Carlo Methods

Randomized algorithms have two categories: Las Vegas and Monte Carlo algorithms.

1. *Las Vegas:* always return an answer if available.
2. *Monte Carlo*: return answers with a random amount of error.

## Monte Carlo sampling
Probability distributions are commonly used in Machine Learning. Sampling provides a flexible way to approximate many sums and integrals. When a sum or integral cannot be computed, it is possible to approximate with **Monte Carlo sampling**. The main idea is to see the sum or integral as an expectation, and approximate it by an avearge.

$$s=\sum_x p(x)f(x)=\mathbb{E}_p[f(\mathbf{x})]$$

$$s=\int p(x)f(x) dx=\mathbb{E}_p[f(\mathbf{x})]$$

, where $$p$$ is a PMF or PDF over the random variable $$\mathbf{x}$$.  

$$s$$ can be approximated by drawing $$n$$ samples $$x^{(1)}, \dots, x^{(n)}$$ from $$p$$ and calculate the **empirical average** as follows:

$$\hat s_n=\frac{1}{n}\sum_{i=1}^n f(x^{(i)})$$

Some properties:
- Estimator $$\hat s$$ is unbiased.
- By the *[law of large numbers](https://en.wikipedia.org/wiki/Law_of_large_numbers)*, we say that if $$x^{(i)}$$ are i.i.d. the average converges to the expected values ($$\lim_{n\to\infty} \hat s_n=s$$).
- MC sampling relies in sampling from $$p$$, when is not possible, Importance Sampling or MCMC can be used.


## Importance Sampling


Biased Importance Sampling

## MCMC
## Gibbs Sampling
