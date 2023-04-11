import React from "react";

const Blog = () => {
  return (
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
          Context API is a very powerful and useful tool in react. We use this
          to pass data to any component from any of components. This is a very
          useful feature to pass data when props drilling is very difficult or
          we want to avoid props drilling intentionally.
          <br />
          Context API is being used to pass data and access data from and in any
          component.
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
          Custom hook is a very useful functionality in react. We use any kind
          of hook in react to maintain or control or implement any side effects.
          We can do a lot of things in a hook such as data fetching, data
          loading, data controlling or data searching. We create or use hooks in
          react according to our own needs. Usually hooks are named adding 'use'
          as prefix.
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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem quae
          animi at, vero sunt magnam accusamus corporis. Praesentium, quos
          libero! Dicta ipsum quas eos. Maxime minima sapiente quisquam sit
          voluptates ex, consequuntur laudantium nihil harum possimus
          dignissimos, architecto cumque perspiciatis porro velit dolore! Nisi
          qui consequuntur voluptate debitis laudantium saepe impedit officiis
          quo ducimus, similique fugiat tempora consequatur sit iste.
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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
          perferendis numquam sit qui eveniet mollitia quam exercitationem.
          Ullam perspiciatis rem quasi illo dolorem, enim pariatur et. Dolorum
          enim aperiam expedita eveniet ad, deleniti minima voluptatum atque
          facilis tenetur voluptatibus esse reiciendis. Nihil quibusdam minus
          suscipit! Quo, temporibus, voluptatum quasi soluta perferendis,
          voluptas reiciendis placeat necessitatibus aliquam accusamus similique
          expedita cum.
        </p>
      </div>
    </section>
  );
};

export default Blog;
