# [Components, Props and State](https://reactjs.org/docs/components-and-props.html)

### Components let you split the UI into independent, reusable pieces,and think about each piece in isolation.The simplest way to define a component is to write a JavaScript function:

**example of a function component**

```
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
```

### This function is a valid React component because it accepts a single “props” (which stands for properties) object argument with data and returns a React element. 
### We call such components “function components” because they are literally JavaScript functions.

### You can also use an ES6 class to define a component:

 **example of a class component**

```
 class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}
```
### The above two components are equivalent from React’s point of view.

### React can also represent user-defined components

```
const element = <Welcome name="Sara" />;

```

### When React sees an element representing a user-defined component, it passes JSX attributes and children to this component as a single object. We call this object “props”.

### For example, this code renders “Hello, Sara” on the page:

```
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

const element = <Welcome name="Sara" />;
ReactDOM.render(
  element,
  document.getElementById('root')
);

```

**What happens in the above example**

1. We call ReactDOM.render() with the `<Welcome name="Sara" /> `element.
2. React calls the Welcome component with `{name: 'Sara'}` as the props.
3. Our Welcome component returns a `<h1>Hello, Sara</h1>` element as the result.
4. React DOM efficiently updates the DOM to match `<h1>Hello, Sara</h1>`.



# [Props and State](https://reactjs.org/docs/faq-state.html#what-is-the-difference-between-state-and-props)

### [props](https://reactjs.org/docs/components-and-props.html) (short for “properties”) and [state](https://reactjs.org/docs/state-and-lifecycle.html) are both plain JavaScript objects. While both hold information that influences the output of render, they are different in one important way: **props get passed to the component** (similar to function parameters) whereas **state is managed within the component** (similar to variables declared within a function).

## Props

### *props*  allow you to pass data from a parent (wrapping) component to a child (embedded) component.

**Example**

**AllPosts Component**

```
const posts = () => {
    return (
        <div>
            <Post title="My first Post" />
        </div>
    );
}

```

### Here, _title_  is the custom property (_prop_ ) set up on the custom Post  component. We basically replicate the default HTML attribute behavior we already know (e.g. `<input type="text">` informs the browser about how to handle that input).

**Post Component**

```
const post = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
        </div>
    );
}

```

### The Post  component receives the props  argument. You can of course name this argument whatever you want - it's your function definition, React doesn't care! But React will pass one argument to your component function => An object, which contains all properties you set up on <Post ... /> .

### `{props.title}`  then dynamically outputs the title  property of the props  object - which is available since we set the title  property inside AllPosts  component (see above).

# Stateless VS Stateful Components

### If you are managing states in your components, no matter the approach you're taking, you can differentiate the component in: Stateful or Stateless
## Stateful component (aka smart or container) - It is a component that can manage states; doesn't really matter if does so by using a useState hook or using a class-based approach using the state property. It is a good practice to **only have a couple of stateful components** in your app.
## Stateless component (aka dumb or presentational) - It does not have any state internal management; it is a **good practice to create as many as this stateless components as you can**.