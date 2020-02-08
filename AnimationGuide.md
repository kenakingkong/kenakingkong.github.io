# Animations

### Tools
* **styled-components** - inline style library that supports the use of objects to define keyframe animations
* **react-animations** - animations library built on animate.css

### Styled Components
https://styled-components.com/docs/basics#getting-started
* uses tagged template literals to style components
* removes mapping between components and styles - defining styles creates normal react components that has styles attached to it
* pass functions (interpolations) to styled components to change them based on props using (color: ${props => props.primary ? "white" : "palevioletred"})
* make new components that inherit the style of another by wrapping it in the styled() constructor
* use "as" (polymorphic prop) to dynamically swap out the element that receives the styles you wrote - make an a a button
* define styled components outside of render method - else itll be recreated on every render pass - and it will slow it down!!
* use keyframes helper to generate unique instances for animated components

### React Animations
https://daneden.github.io/animate.css/

https://www.npmjs.com/package/react-animations
