<script lang="ts">
  import { onMount, onDestroy } from 'svelte';
  import { TouchSpin as TouchSpinCore } from '@touchspin/core';
  import { VanillaRenderer } from '@touchspin/renderer-vanilla';
  import type { TouchSpinProps, TouchSpinHandle, TouchSpinChangeMeta, TouchSpinCoreOptions } from './types';

  let {
    value = $bindable(0),
    defaultValue = 0,
    min,
    max,
    step,
    decimals,
    prefix,
    suffix,
    disabled = false,
    readOnly = false,
    name,
    id,
    class: className,
    inputClass,
    inputProps = {},
    dataTestid,
    coreOptions,
    onChange,
    onBlur,
    onFocus,
    onOnMin,
    onOnMax,
    onOnStartSpin,
    onOnStopSpin,
    onOnStartUpSpin,
    onOnStartDownSpin,
    onOnStopUpSpin,
    onOnStopDownSpin,
    onOnSpeedChange
  } = $props();

  let inputRef: HTMLInputElement;
  let instance: ReturnType<typeof TouchSpinCore> | null = null;

  // Cleanup function
  let cleanup: (() => void) | null = null;

  onMount(async () => {
    if (!inputRef) return;

    const input = inputRef;
    input.value = String(value ?? defaultValue ?? 0);

    const initOptions: Record<string, any> = { renderer: VanillaRenderer };
    if (min !== undefined) initOptions.min = min;
    if (max !== undefined) initOptions.max = max;
    if (step !== undefined) initOptions.step = step;
    if (decimals !== undefined) initOptions.decimals = decimals;
    if (prefix !== undefined) initOptions.prefix = prefix;
    if (suffix !== undefined) initOptions.postfix = suffix;
    if (coreOptions) Object.assign(initOptions, coreOptions);

    instance = TouchSpinCore(input, initOptions);

    // Subscribe to changes
    const handleChange = () => {
      const numValue = Number(input.value);
      value = numValue;
      onChange?.({ value: numValue, meta: { source: 'user', action: 'input' } });
    };

    input.addEventListener('change', handleChange);

    // TouchSpin events
    const eventHandlers = [
      { event: 'touchspin.on.min', handler: () => onOnMin?.() },
      { event: 'touchspin.on.max', handler: () => onOnMax?.() },
      { event: 'touchspin.on.startspin', handler: () => onOnStartSpin?.() },
      { event: 'touchspin.on.stopspin', handler: () => onOnStopSpin?.() },
      { event: 'touchspin.on.startupspin', handler: () => onOnStartUpSpin?.() },
      { event: 'touchspin.on.startdownspin', handler: () => onOnStartDownSpin?.() },
      { event: 'touchspin.on.stopupspin', handler: () => onOnStopUpSpin?.() },
      { event: 'touchspin.on.stopdownspin', handler: () => onOnStopDownSpin?.() },
      { event: 'touchspin.on.speedchange', handler: () => onOnSpeedChange?.() },
    ];

    eventHandlers.forEach(({ event, handler }) => {
      input.addEventListener(event, handler);
    });

    // Set up cleanup function
    cleanup = () => {
      input.removeEventListener('change', handleChange);
      eventHandlers.forEach(({ event, handler }) => {
        input.removeEventListener(event, handler);
      });
      instance?.destroy();
      instance = null;
    };
  });

  onDestroy(() => {
    if (cleanup) {
      cleanup();
    }
  });

  // Update value when prop changes
  $effect(() => {
    if (instance && value !== undefined) {
      instance.setValue(value);
    }
  });

  // Update settings when props change
  $effect(() => {
    if (!instance) return;
    const updateOptions: Record<string, any> = {};
    if (min !== undefined) updateOptions.min = min;
    if (max !== undefined) updateOptions.max = max;
    if (step !== undefined) updateOptions.step = step;
    if (decimals !== undefined) updateOptions.decimals = decimals;
    if (prefix !== undefined) updateOptions.prefix = prefix;
    if (suffix !== undefined) updateOptions.postfix = suffix;
    instance.updateSettings(updateOptions);
  });

  // Update disabled/readonly
  $effect(() => {
    if (!inputRef) return;
    if (disabled !== undefined) inputRef.disabled = disabled;
    if (readOnly !== undefined) inputRef.readOnly = readOnly;
  });

  // Expose imperative API methods directly on component instance
  export function focus() {
    inputRef?.focus();
  }

  export function blur() {
    inputRef?.blur();
  }

  export function increment() {
    instance?.upOnce();
  }

  export function decrement() {
    instance?.downOnce();
  }

  export function getValue() {
    return instance?.getValue() ?? 0;
  }

  export function setValue(newValue: number) {
    value = newValue;
    instance?.setValue(newValue);
    onChange?.({ value: newValue, meta: { source: 'api', action: 'setValue' } });
  }

  export function startUpSpin() {
    instance?.startUpSpin();
  }

  export function startDownSpin() {
    instance?.startDownSpin();
  }

  export function stopSpin() {
    instance?.stopSpin();
  }

  export function updateSettings(opts: Partial<TouchSpinCoreOptions>) {
    instance?.updateSettings(opts);
  }
</script>

<div class={className}>
  <input
    bind:this={inputRef}
    bind:value={value}
    class={inputClass}
    {name}
    {id}
    {disabled}
    readonly={readOnly}
    data-testid={dataTestid ? `${dataTestid}-input` : undefined}
    onblur={(event) => onBlur?.(event)}
    onfocus={(event) => onFocus?.(event)}
    {...inputProps}
  />
</div>

<style>
  /* Component styles if needed */
</style>
