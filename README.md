# TouchSpin Svelte

Svelte adapter for TouchSpin numeric input spinner - A feature-rich, accessible number input component with increment/decrement buttons.

## Features

- Multiple Renderers - Bootstrap 3/4/5, Tailwind CSS, and Vanilla CSS
- Touch & Mouse Support - Works on desktop and mobile devices
- Accessible - Full keyboard navigation and screen reader support
- TypeScript - Complete type definitions included
- Performance - Lightweight and fast
- Customizable - Extensive styling and behavior options
- Reactive & Imperative - Both declarative props and direct API control

## Installation

```bash
npm install @touchspin/svelte @touchspin/core
# or
yarn add @touchspin/svelte @touchspin/core
# or
pnpm add @touchspin/svelte @touchspin/core
```

## Quick Start

```svelte
<script lang="ts">
  import TouchSpin from '@touchspin/svelte/vanilla';
  import '@touchspin/renderer-vanilla/css';

  let value = $state(25);
</script>

<TouchSpin
  bind:value={value}
  min={0}
  max={100}
  step={1}
/>
```

## Available Renderers

Choose the renderer that matches your design system:

| Renderer | Import | CSS Import | Description |
|----------|--------|------------|-------------|
| **Vanilla** | `@touchspin/svelte/vanilla` | `@touchspin/renderer-vanilla/css` | Clean, framework-free styling |
| **Bootstrap 5** | `@touchspin/svelte/bootstrap5` | `@touchspin/renderer-bootstrap5/css` | Bootstrap 5 compatible |
| **Bootstrap 4** | `@touchspin/svelte/bootstrap4` | `@touchspin/renderer-bootstrap4/css` | Bootstrap 4 compatible |
| **Bootstrap 3** | `@touchspin/svelte/bootstrap3` | `@touchspin/renderer-bootstrap3/css` | Bootstrap 3 compatible |
| **Tailwind** | `@touchspin/svelte/tailwind` | `@touchspin/renderer-tailwind/css` | Tailwind CSS styling |

## API Reference

### Props

#### Value Management
```svelte
<TouchSpin
  bind:value={number}                     // Two-way bound value
  onOnChange={(value, meta) => void}      // Value change handler
/>
```

#### Configuration
```svelte
<TouchSpin
  min={number}                            // Minimum value
  max={number}                            // Maximum value
  step={number}                           // Increment/decrement step
  decimals={number}                       // Decimal places
  prefix="string"                         // Text before input
  suffix="string"                         // Text after input
/>
```

#### State & Behavior
```svelte
<TouchSpin
  disabled={boolean}                      // Disable input and buttons
  readOnly={boolean}                      // Make input read-only
/>
```

#### Form Integration
```svelte
<TouchSpin
  name="string"                           // Form field name
  id="string"                             // Input element ID
/>
```

#### Styling
```svelte
<TouchSpin
  className="string"                      // Wrapper CSS class
  inputClassName="string"                 // Input CSS class
/>
```

#### Events
```svelte
<TouchSpin
  onBlur={FocusEventHandler}              // Input blur event
  onFocus={FocusEventHandler}             // Input focus event

  // TouchSpin Events
  onOnMin={() => void}                    // Fired at minimum boundary
  onOnMax={() => void}                    // Fired at maximum boundary
  onOnStartSpin={() => void}              // Fired when spinning starts
  onOnStopSpin={() => void}               // Fired when spinning stops
  onOnStartUpSpin={() => void}            // Fired when upward spinning starts
  onOnStartDownSpin={() => void}          // Fired when downward spinning starts
  onOnStopUpSpin={() => void}             // Fired when upward spinning stops
  onOnStopDownSpin={() => void}           // Fired when downward spinning stops
  onOnSpeedChange={() => void}            // Fired when spin speed increases
/>
```

#### Advanced
```svelte
<TouchSpin
  coreOptions={object}                    // Advanced TouchSpin core options
  inputProps={object}                     // Pass-through props for input
  data-testid="string"                    // Test ID (input gets -input suffix)
/>
```

### Imperative API (bind:this)

For direct programmatic control, bind to the component instance:

```svelte
<script lang="ts">
  import TouchSpin, { type TouchSpinHandle } from '@touchspin/svelte/vanilla';

  let touchSpinRef: TouchSpinHandle | undefined;

  function handleIncrement() {
    touchSpinRef?.increment();
  }
</script>

<div>
  <button onclick={handleIncrement}>+1</button>
  <TouchSpin bind:this={touchSpinRef} bind:value={50} />
</div>
```

#### TouchSpinHandle Methods

```ts
interface TouchSpinHandle {
  // Focus Management
  focus(): void;                          // Focus the input
  blur(): void;                           // Blur the input

  // Value Control
  increment(): void;                      // Increment by step
  decrement(): void;                      // Decrement by step
  getValue(): number;                     // Get current value
  setValue(value: number): void;          // Set new value

  // Continuous Spinning
  startUpSpin(): void;                    // Start continuous upward spinning
  startDownSpin(): void;                  // Start continuous downward spinning
  stopSpin(): void;                       // Stop any continuous spinning

  // Configuration
  updateSettings(opts: Partial<TouchSpinCoreOptions>): void;
                                         // Update settings at runtime
}
```

## Usage Examples

### Basic Reactive Component

```svelte
<script lang="ts">
  import TouchSpin from '@touchspin/svelte/vanilla';

  let value = $state(10);
</script>

<div>
  <TouchSpin
    bind:value={value}
    min={0}
    max={100}
    step={5}
  />
  <p>Value: {value}</p>
</div>
```

### With Prefix/Suffix

```svelte
<script lang="ts">
  import TouchSpin from '@touchspin/svelte/vanilla';

  let price = $state(29.99);
</script>

<TouchSpin
  bind:value={price}
  min={0}
  max={1000}
  step={0.01}
  decimals={2}
  prefix="$"
  suffix=" USD"
/>
```

### Event Handling

```svelte
<script lang="ts">
  import TouchSpin from '@touchspin/svelte/vanilla';

  let events = $state<string[]>([]);

  function addEvent(eventName: string) {
    events.push(`${new Date().toLocaleTimeString()}: ${eventName}`);
    events = [...events]; // Trigger reactivity
  }
</script>

<div>
  <TouchSpin
    bind:value={50}
    min={0}
    max={100}
    onOnMin={() => addEvent('Reached minimum')}
    onOnMax={() => addEvent('Reached maximum')}
    onOnStartSpin={() => addEvent('Spin started')}
    onOnStopSpin={() => addEvent('Spin stopped')}
  />

  <h3>Event Log:</h3>
  <ul>
    {#each events as event}
      <li>{event}</li>
    {/each}
  </ul>
</div>
```

### Imperative Control

```svelte
<script lang="ts">
  import TouchSpin, { type TouchSpinHandle } from '@touchspin/svelte/vanilla';

  let touchSpinRef: TouchSpinHandle | undefined;
  let currentValue = $state(0);

  function updateValue() {
    currentValue = touchSpinRef?.getValue() ?? 0;
  }
</script>

<div>
  <div>
    <button onclick={() => touchSpinRef?.setValue(42)}>
      Set to 42
    </button>
    <button onclick={() => touchSpinRef?.startUpSpin()}>
      Start Spinning Up
    </button>
    <button onclick={() => touchSpinRef?.stopSpin()}>
      Stop Spinning
    </button>
    <button onclick={updateValue}>Get Current Value</button>
  </div>

  <TouchSpin
    bind:this={touchSpinRef}
    bind:value={25}
    min={0}
    max={100}
  />

  <p>Current value: {currentValue}</p>
</div>
```

### Form Integration

```svelte
<script lang="ts">
  import TouchSpin from '@touchspin/svelte/vanilla';

  function handleSubmit(e: SubmitEvent) {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    console.log('Quantity:', formData.get('quantity'));
  }
</script>

<form onsubmit={handleSubmit}>
  <label>
    Quantity:
    <TouchSpin
      name="quantity"
      bind:value={1}
      min={1}
      max={99}
    />
  </label>
  <button type="submit">Add to Cart</button>
</form>
```

## Advanced Configuration

### Custom Core Options

```svelte
<script lang="ts">
  import TouchSpin from '@touchspin/svelte/vanilla';
</script>

<TouchSpin
  bind:value={50}
  min={0}
  max={100}
  step={1}
  coreOptions={{
    verticalbuttons: true,     // Vertical button layout
    buttonup_class: 'custom-up',
    buttondown_class: 'custom-down',
  }}
/>
```

## Testing

```ts
import { render, screen } from '@testing-library/svelte';
import userEvent from '@testing-library/user-event';
import TouchSpin from '@touchspin/svelte/vanilla';

test('increments value', async () => {
  const user = userEvent.setup();
  render(TouchSpin, { props: { value: 5, min: 0, max: 10 } });

  const incrementBtn = screen.getByRole('button', { name: /increment/i });
  await user.click(incrementBtn);

  expect(screen.getByDisplayValue('6')).toBeInTheDocument();
});
```

## Development

```bash
# Install dependencies
yarn install

# Start development server
yarn dev

# Build all packages
yarn build

# Run tests
yarn test

# Type checking
yarn check

# Linting
yarn lint
```

## Related Packages

### Core
- **@touchspin/core** - Core TouchSpin logic and API

### Renderers
- **@touchspin/renderer-vanilla** - Vanilla CSS renderer
- **@touchspin/renderer-bootstrap3** - Bootstrap 3 renderer
- **@touchspin/renderer-bootstrap4** - Bootstrap 4 renderer
- **@touchspin/renderer-bootstrap5** - Bootstrap 5 renderer
- **@touchspin/renderer-tailwind** - Tailwind CSS renderer

### Adapters
- **@touchspin/angular** - Angular adapter
- **@touchspin/react** - React adapter
- **@touchspin/svelte** - Svelte adapter (this package)
- **@touchspin/vue** - Vue adapter
- **@touchspin/jquery** - jQuery plugin
- **@touchspin/webcomponent** - Web Components
- **@touchspin/standalone** - Standalone bundle

## Contributing

Contributions welcome! Please see the [main TouchSpin repository](https://github.com/istvan-ujjmeszaros/touchspin) for [contribution guidelines](https://github.com/istvan-ujjmeszaros/touchspin/blob/main/CONTRIBUTING.md).

## License

MIT © Istvan Ujj-Meszaros
