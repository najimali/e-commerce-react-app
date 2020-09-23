# Build an E-commerce with ReactJS

Gatsby - [Official docs](https://www.gatsbyjs.com/docs/quick-start/)

### What is Gatsby ??
- It is a **static site generator** means it will produce for us static HTML files we load up on to a server
Static site donot mean not interative or not dynamic.
We can load JS into the HTML files that  Gatsby serves as well as make API calls do interactions & build incredibly rich & immersive sites even 
though they are static in their nature of just being HTML up without programming server -side language.

- It is going to use Node ,Node will be running in a developemnt environment but the final result dont require node to run on the server side
- Uses GraphQL to get Data from anywhere for eg data from markdown files,csv files, databases.
**Note** - Gatsby is not going to handle data for us rather it will get data pulled into Gatsby & generate the site from that data
- Uses React for Templating
- Includes Plugin Architecture


### Why use Gatsby ??
- We use Gatsby for speed security & improve dev experience 
- Gatsby has a solid team, open source coummity & great documenentation

### Your first project in gatsby reactjs

1. Install Gatsby globally

`npm install -g gatsby-cli`

To check if it is install run `gatsby --help` if no error then gatsby it 
install to this path.

2. Create a Gatsby site.

gatsby new `your__project__name`

3. Change into the working directory:

 `cd your__project__name`
 
4. Start the development mode:

`gatsby develop`

5. View your site locally

`http://localhost:8000/`

Install es7 extension - ES7 React/Redux/GraphQL/React-Native snippets by dsznajder


### Create Your First very Component in React

**1. Compoenent** - It represnt part of the user interface. 
It is reusable code that is same component can used for multiple times with different props.They can also be nested inside other components.
eg - Footer,Header,Main Content,SideBar etc.

Types:
- **Functional Components** (Trending) - It is Javascript function which return UI
- shortcut -  rfc
- eg function welcome(props){
    return <h1>>Hello ,{props.name}</h1>
}

- Diagram

properties(props) -> [Javascript function] ->HTML(JSX)
[learn more](https://www.youtube.com/watch?v=Cla1WwguArA)
-  **Class Components** - It is stateful & are regular ES6 classes that extend the component class from the react library.
They must contain the render method which in turns return HTML.
- shortcut rcc
- eg class Welcome extends React.Component{

    render(){
    return (<h1>>Hello ,{props.name}</h1>)

    }
}
learn state ,lifecycle ,methods & `this` binding after this learn hooks in class component.
- Diagram

properties(props) -> [ES6 ] ->HTML(JSX)
[learn more](https://www.youtube.com/watch?v=lnV34uLEzis)
### Export & Import components

1. Using default export - `exports default MyComponent`
then in another file `import MyComponent from 'component_path'`
in this MyComponent Name be anything 

2. Using Name export - `export const MyComponent` 
then in another file `import {MyComponent} from 'component_path'`
now you cannot change MyComponent Name & also use Curly bracket
otherwise you will get error - Attempt import error 'component_path' doent contain a default export 

### Functional vs Class Components 
Funtionals - 
1. Simple functions
2. Use functional components as much as possible
3. Mainly Responsible for UI


Class Components  - 
1. More Feature rich 
2. Maintain their own private data -state
3. Complex UI logic
4. Provide lifecycle hooks
5. Stateful/Smart/Container



**2. Props** - It is like passing argument in a function or simply taking data here & there.It makes our app dynamic 

- use name attribute to pass the different parameter

exports const Greet =props=>{

    return (<h1>>Hello ,{props.name}</h1>)
}
<Greet name="Passing first Para"/>

**Note-** 
1. for class component we can directly access props without mentioning props as passing parameter & they are already reserved in class components.
use `this` keyword to access propbs 
`this.props.name` 

2. Props are immuatable i.e you cannot change props value.
- [learn more](https://www.youtube.com/watch?v=m7OWXtbiXX8)

**3. State** - There is a container in a React so whenever you want to change something first access the container that is your state so basically changing the variable is thru container is states

### Props vs State
- Props -
1. Props get passed to the component
2. Functional Paramters
3. Props are immutable 
4. props - Functional Components & this.props - Class Components

- State -
1. state is managed within the component
2. Variable declared in the functional body 
3. State can be changed
4. useState Hook - Functional Components & this.state - Class Components



[learn more](https://www.youtube.com/watch?v=4ORZ1GmjaMc)
### Delete the files & bring in assets.
 - [ ] Delete the header.js,image folder,page-2.js
 - [ ] Download the files from LearnCodeOnline.
  
### Creating your very first component in React 
- use `rfc` to use functional template 
in the component make a folder name Reusable then make a Footer.js file 
make a footer design with `<Footer>` tag

- then in the layout.js file import footer & write your Layout method


### Getting started with Navbar in React 

**Link** - Link from gatsby is similar anchor tag in html but it provide us smooth pager changes rather than flashed occur as in anchor tag.


Syntax - <Link to="/location">blog<Link>

[more](https://www.gatsbyjs.com/docs/gatsby-link/)













