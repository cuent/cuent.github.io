---
layout: post
title:  "Sampling methods notes"
date:   2019-05-17 20:41:19 -0500
categories: Bayesian-inference
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
- By calculating the variance $$Var[\hat s_n]$$ as $$n$$ increases, we can estimate the uncertainty of the Monte Carlo approximation.
- MC sampling relies in sampling from $$p$$. When *sampling* $$p$$ *is not possible*, importance sampling or MCMC can be used.


## Importance Sampling
In Monte Carlo, we can use any decomposition of $$p(\mathbf{x})$$ and $$f(\mathbf{x})$$ since $$f$$ can also be a probability (what factor plays which role of $$p$$ or $$f$$). We can even have a different decomposition as follows (i.e. we sample $$q$$ and average $$\frac{pf}{q})$$:

$$p(\mathbf{x})f(\mathbf{x})=q(\mathbf{x})\frac{p(\mathbf{x})f(\mathbf{x})}{q(\mathbf{x})}$$

However, we might not be able to sample from $$p$$ or we can pick another distribution to reach an optimal approximation. This optimal choice is $$q*$$, know as **optimal importance sampling**. So, we replace the empirical average with an **importance sampling estimator**:

$$\hat s_q=\frac{1}{n}\sum_{i=1, \mathbf{x}^{(i)}\sim q}^n \frac{p(\mathbf{x}^{(i)})f(\mathbf{x}^{(i)})}{q(\mathbf{x}^{(i)})}$$

Essentially, any distribution $$q$$ is valid. However, the choice of $$q$$ can be sensitive to the variance of the _importance sampling estimator_.

####  Biased Importance Sampling
BIS doesn't require to normalize $$p$$ or $$q$$, the estimator is given by:

$$
\hat s_{BIS}=\frac{\sum_{i=1}^n\frac{\tilde p(\mathbf{x^{(i)}})}{\tilde q(\mathbf{x^{(i)}})}f(\mathbf{x^{(i)}})}{\sum_{i=1}^n\frac{\tilde p(\mathbf{x^{(i)}})}{\tilde q(\mathbf{x^{(i)}})}}
$$

, where $$\tilde p$$ and $$\tilde q$$ are the unnormalized forms of $$p$$ and $$q$$. We take n samples $$\mathbf{x^{(i)}}$$ from $$q$$.

In general importance sampling is handy when it comes to:
- accelerate training in neural language models with a large vocabulary.
- estimate a partition function.
- estimate log-likelihood in deep directed models.
- improve estimates of the gradient of the cost function.

<!-- 
## Markov Chain Monte Carlo

## Gibbs Sampling -->
