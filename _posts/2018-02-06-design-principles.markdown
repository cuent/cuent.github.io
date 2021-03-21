---
layout: post
title:  "Design Patterns"
date:   2018-02-06 20:41:19 -0500
categories: Programming
---
Shared vocabulary:
- easier to communicate. Communicate a set of characteristics, qualities, and constraints that a pattern represents.
- elevates level to think about architectures–think at the pattern level, don't stay in the nitty-gritty object level.
- Patterns and principles address issues of change in software.

## Basics
1. Abstraction
2. Encapsulation
2. Inheritance
3. Polymorphism

## Principles

1. **Identify the aspects of your application that vary and separate them from what stays the same**: Taking out what varies it helps to encapsulate and create many behaviors than a class might have. And doing so, you won't break anything when making changes.
2. **Program to an interface, not to an implementation**: reuse, programming to a supertype, assign concrete impl at runtime
3. **Favor composition over inheritance**:
4. **Strive for loosely coupled designs between objects that interact**: loosely coupled allows to design flexible systems because there is not much dependency between objects. For instance, that is the definition of _loosely coupled_, two objects can interact, but have little knowledge of each other.
5. **Classes should be open for extension, but closed for modification (_Open-Closed Principle_)**: Classes can be easily extended and incorporate new behavior without the necessity of of modifying existing code. In order to accomplish this, you need to have resilient designs to change and flexible enough to dead with new functionality.
6. **Dependency Inversion Principle**: Depend upon abstractions. Do not depend upon concrete classes. In other words, high-level components should not depend on our low-level components; the should __both__ depend on abstractions. For instance, a high-level component is a class with behavior defined in terms of other, low-level components.

## Patterns

### Strategy
Defines a family of algorithms, encapsulates each one, and makes them interchangeable. Strategy lets the algorithm vary independently from clients that use it.

### Observer
Defines a one-to-many dependency between objects so that when one object changes state, all of its dependents are notified and updated automatically–in other words, there is a subject/observers relationship or in Java words Observable/Observer relationship. When using this patter, you can pull or push data push is considered more appropriate.

### Decorator
Attaches additional responsibilities to an object dynamically. Decorators provide a flexible alternative to subclassing for extending functionality.

### Factory Method
Defines an interface for creating an object, but lets subclasses decide which class to instantiate. _Factory Method_ (used to create objects) lets a class defer instantiation to subclasses.

### Abstract Factory
Provides an interface for creating families of related or dependent objects without specifying their concrete classes.

### Singleton
Ensures a class has only one instance, and provides a global point of access to it. For multithreading applications, (1) you can `synchronize` the `getInstance()` method, (2) create an eager instance instead of a lazy one, or double-check _*_ lock to reduce the synchronization of the whole `getInstance()` method.

_* Remember to use `volatile` keyword in the instance variable to ensure that multiple threads handle the variable correctly when it is being initialized to the Singleton instance._

### Command
Encapsulates a request as an object, thereby letting you parameterize other objects with different requests, queue or log requests, and support undoable operations.

### Facade

### Adapter
