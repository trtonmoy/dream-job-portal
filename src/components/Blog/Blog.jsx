import React from "react";

const Blog = ({ children }) => {
  return (
    <section>
      <div
        className="text-center w-full bg-scroll bg-[50%]  bg-no-repeat p-16 relative"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/1484759/pexels-photo-1484759.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
        }}
      >
        <span className="text-purple-900 text-center text-5xl font-bold">
          {children}
        </span>
        <div className="absolute top-0 left-0 w-full h-full bg-purple-900 opacity-5"></div>
      </div>
      <section
        className="bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://img.freepik.com/free-vector/minimalist-white-background-with-neumorphic-circle_1017-39167.jpg')",
        }}
      >
        <div className="p-12">
          <h4 className="font-bold text-2xl text-purple-800 text-center pt-8 pb-4">
            When should we use context API?
          </h4>
          <hr className="" />
          <h5 className="text-xl text-slate-700 font-medium px-2 py-1">
            Answer :{" "}
          </h5>
          <p className="text-lg text-slate-600 font-medium px-2">
            <mark className="px-2 rounded-lg py-1">Context API</mark> is a very
            powerful and useful tool in react. We use this to pass data to any
            component from any of components. This is a very useful feature to
            pass data when props drilling is very difficult or we want to avoid
            props drilling intentionally.
            <br />
            Context API is being used to pass data and access data from and in
            any component.
            <br />
            Besides these I would love to point out some more sides when we use
            Context API. Such as State management, Global data sharing, Avoiding
            props drilling, Components composition and etc.
          </p>
        </div>
        <hr />
        <div className="p-12">
          <h4 className="font-bold text-2xl text-purple-800 text-center pt-8 pb-4">
            What is 'Custom Hook'?
          </h4>
          <hr />
          <h5 className="text-xl text-slate-700 font-medium px-2 py-1">
            Answer :{" "}
          </h5>
          <p className="text-lg text-slate-600 font-medium px-2">
            <mark className="px-2 rounded-lg py-1">Custom hook</mark> is a very
            useful functionality in react. We use any kind of hook in react to
            maintain or control or implement any side effects. We can do a lot
            of things in a hook such as data fetching, data loading, data
            controlling or data searching. We create or use hooks in react
            according to our own needs. Usually hooks are named adding 'use' as
            prefix.
            <br />
            After all we can say that hook is a powerful tool in react and
            developers create hooks according to their functionalities and usage
            in a application.
          </p>
        </div>
        <hr />
        <div className="p-12">
          <h4 className="font-bold text-2xl text-purple-800 text-center pt-8 pb-4">
            What is 'useRef'?
          </h4>
          <h5 className="text-xl text-slate-700 font-medium px-2 py-1">
            Answer :{" "}
          </h5>
          <p className="text-lg text-slate-600 font-medium px-2">
            <mark className="px-2 rounded-lg py-1">'useRef(initialValue)'</mark>{" "}
            is a <mark>built-in</mark> React hook that accepts one argument as
            the initial value and returns a reference. A reference is an object
            having a special property current .
            <br />
            The useRef Hook allows you to persist values between renders. It can
            be used to store a mutable value that does not cause a re-render
            when updated. It can be used to access a DOM element directly.
            <br />
            'useRef()' only returns one item. It returns an Object called
            current. When we initialize useRef we set the initial value:
          </p>
        </div>
        <hr />
        <div className="p-12">
          <h4 className="font-bold text-2xl text-purple-800 text-center pt-8 pb-4">
            What is 'useMemo'?
          </h4>
          <h5 className="text-xl text-slate-700 font-medium px-2 py-1">
            Answer :{" "}
          </h5>
          <p className="text-lg text-slate-600 font-medium pb-8 px-2">
            React has a{" "}
            <mark className="px-2 rounded-lg py-1">
              built-in hook called useMemo
            </mark>{" "}
            that allows you to memoize expensive functions so that you can avoid
            calling them on every render. You simple pass in a function and an
            array of inputs and useMemo will only recompute the memoized value
            when one of the inputs has changed.
            <br />
            The useMemo Hook only runs when one of its dependencies update. This
            can improve performance. The React useMemo Hook returns a memoized
            value.
          </p>
        </div>
      </section>
    </section>
  );
};

export default Blog;
