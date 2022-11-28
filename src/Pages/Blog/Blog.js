import React from 'react';
import useTitle from '../../Hook/useTitle';

const Blog = () => {
    useTitle('Blog');
    return (
        <div className='max-w-5xl mx-auto mt-10'>
            <h3 className='text-3xl font-semibold mb-5 mx-5'>Blog</h3>
            <div className='mx-5 mb-5 shadow rounded p-3'>
                <p className='text-xl font-semibold'>React vs. Angular vs. Vue?</p>
                <p>Vue provides higher customizability and hence is easier to learn than Angular or React. Further, Vue has an overlap with Angular and React with respect to their functionality like the use of components. Hence, the transition to Vue from either of the two is an easy option.</p>
            </div>
            <div className='mx-5 mb-5 shadow rounded p-3'>
                <p className='text-xl font-semibold'>What is a unit test? Why should we write unit tests?</p>
                <p>The main objective of unit testing is to isolate written code to test and determine if it works as intended. Unit testing is an important step in the development process, because if done correctly, it can help detect early flaws in code which may be more difficult to find in later testing stages.</p>
            </div>
            <div className='mx-5 mb-5 shadow rounded p-3'>
                <p className='text-xl font-semibold'>How does prototypical inheritance work?</p>
                <p>The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object. getPrototypeOf and Object.</p>
            </div>
            <div className='mx-5 mb-5 shadow rounded p-3'>
                <p className='text-xl font-semibold'>What are the different ways to manage a state in a React application?</p>
                <p>Beau Carnes. React state management is a process for managing the data that React components need in order to render themselves. This data is typically stored in the component's state object. When the state object changes, the component will re-render itself. React state management is basically half of a React app.</p>
            </div>
        </div>
    );
};

export default Blog;