export default function (Alpine) {
  Alpine.directive('view-transition', (el, { value, expression }, { evaluate, cleanup }) => {
    // Set the view transition name
    el.style.viewTransitionName = value || ''

    // If no expression provided, we're just setting the transition name
    if (!expression) return

    const handler = () => {
      // Helper function to handle class toggling
      const toggleClasses = (classes) => {
        if (typeof classes === 'string') {
          el.classList.toggle(classes)
        } else if (Array.isArray(classes)) {
          classes.forEach((cl) => el.classList.toggle(cl))
        }
      }

      // Determine if expression should be evaluated or used directly
      const shouldEvaluate =
        expression.includes('?') || expression.includes('&&') || expression.includes('||') || /[{}[\]]/.test(expression)

      // Execute class toggle with or without transition
      const executeToggle = () => toggleClasses(shouldEvaluate ? evaluate(expression) : expression)

      if (!document.startViewTransition) {
        executeToggle()

        return
      }

      document.startViewTransition(executeToggle)
    }

    // Only add click handler if we have an expression to toggle
    el.addEventListener('click', handler)

    cleanup(() => el.removeEventListener('click', handler))
  })
}
