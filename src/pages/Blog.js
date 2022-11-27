import UseTitle from "../component/hook/useTitle";

export default function Blog() {
  UseTitle("Blog");

  return (
    <div className="container mx-auto">
      <div className="w-[90%] mx-auto mt-16 pb-6">
        <div className=" grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 mx-auto">
          <div className="shadow-lg p-4">
            <h2 className="text-center mb-4 font-bold text-xl text-blue-600">
              What are the different ways to manage a state in a React
              application ?
            </h2>

            <p>1 Local state 2 Global state 3 Server state 4 URL state</p>
            <p>
              1 . Local (UI) state – Local state is data we manage in one or
              another component. Local state is most often managed in React
              using the useState hook.
            </p>
            <p>
              2 . Global state is necessary when we want to get and update data
              anywhere in our app, or in multiple components at least.
            </p>
            <p>
              3 . Server state is a simple concept, but can be hard to manage
              alongside all of our local and global UI state.
            </p>
            <p>
              4 . sData that exists on our URLs, including the pathname and
              query parameters.
            </p>
          </div>
          <div className="shadow-lg p-4">
            <h2 className=" text-center mb-4 font-bold text-xl text-blue-600">
              What is JWT, and how does it work?
            </h2>

            <p>
              The Prototypal Inheritance is a feature in javascript used to add
              methods and properties in objects. It is a method by which an
              object can inherit the properties and methods of another object.
              Traditionally, in order to get and set the [[Prototype]] of an
              object, we use Object.getPrototypeOf and Object.setPrototypeOf. if
              we have a constructor function and and we make many object from
              this function and we need a method that will sahre all of the
              object then we can use function buil in property prototype and add
              this method into it so that all object inherit this method and use
              it
            </p>
          </div>

          <div className="shadow-lg p-4">
            <h2 className="text-center mb-4 text-xl text-blue-600 font-bold">
              What is a unit test? Why should we write unit tests ?
            </h2>
            <p>
              Unit testing is a software development process in which the
              smallest testable parts of an application, called units, are
              individually and independently scrutinized for proper operation.
              This testing methodology is done during the development process by
              the software developers and sometimes QA staff. The main objective
              of unit testing is to isolate written code to test and determine
              if it works as intended.
            </p>
          </div>
          <div className="shadow-lg p-4">
            <h2 className="text-center mb-4 text-xl text-blue-600 font-bold">
              React vs. Angular vs. Vue?
            </h2>

            <p>
              1 . React : React can be used as a UI library to render elements,
              without enforcing a specific project structure, and thats why its
              not strictly a framework. React Elements are the smallest building
              blocks of React apps. They are more powerful than DOM elements
              because the React DOM makes sure to update them efficiently
              whenever something changes.
            </p>

            <p>
              The Vue.js core library focuses on the View layer only. It’s
              called a progressive framework because you can extend its
              functionality with official and third-party packages, such as Vue
              Router or Vuex, to turn it into an actual framework. Although Vue
              is not strictly associated with the MVVM (Model-View-ViewModel)
              pattern, its design was partly inspired by it. With Vue, you’ll be
              working mostly on the ViewModel layer, to make sure that the
              application data is processed in a way that allows the framework
              to render an up-to-date View.
            </p>

            <p>
              AngularJS, the original framework, is an MVC
              (Model-View-Controller)) framework. But in Angular 2, there’s no
              strict association with MV*-patterns as it is also
              component-based. Projects in Angular are structured into Modules,
              Components, and Services. Each Angular application has at least
              one root component and one root module. Each component in Angular
              contains a Template, a Class that defines the application logic,
              and MetaData (Decorators). The metadata for a component tells
              Angular where to find the building blocks that it needs to create
              and present its view.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
