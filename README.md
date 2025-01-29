# Alpine View Transitions

An Alpine.js plugin that adds CSS View Transitions support to your Alpine applications.

## Installation

 ```bash
npm install alpine-view-transitions
```

## Usage

```js
import Alpine from 'alpinejs'
import ViewTransitions from 'alpine-view-transitions'

Alpine.plugin(ViewTransitions)
Alpine.start()
```

## Basic Usage
###  Add a View Transition
This will add a utility class and it will transition with the default cross-fade effect.
```html
<button x-view-transition="rotate-45">
    Click me
</button>
```

### Just set a transition name
Give the transition a unique name. The transition will now become a lot smoother.
```html
<span x-view-transition:button-text>
    Button text
</span>
 ```

## Dynamic Expressions
```html
<button
    x-data="{ isOpen: false }"
    x-on:click="isOpen = ! isOpen"
    x-view-transition:button="isOpen ? 'w-full' : 'w-1/2'"
>
    Toggle
</button>
```

## Custom CSS Animations

If you want to animate the transitions differently, you will have to add your own custom CSS. Learn more about how to do this [here](https://developer.mozilla.org/en-US/docs/Web/API/View_Transition_API#pseudo-elements)