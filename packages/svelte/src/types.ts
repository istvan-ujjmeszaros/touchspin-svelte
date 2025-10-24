/**
 * @touchspin/svelte - TypeScript Types
 */

import type { TouchSpinCoreOptions } from '@touchspin/core';

export type { TouchSpinCoreOptions };

/**
 * Metadata passed to change handler
 */
export interface TouchSpinChangeMeta {
  source: 'user' | 'prop' | 'api';
  action?: 'increment' | 'decrement' | 'setValue' | 'input';
}

/**
 * TouchSpin Svelte component props
 */
export interface TouchSpinProps {
  // Value management
  value?: number;
  defaultValue?: number;

  // Core settings
  min?: number;
  max?: number;
  step?: number;
  decimals?: number;

  // Display
  prefix?: string;
  suffix?: string;

  // State
  disabled?: boolean;
  readOnly?: boolean;

  // Form integration
  name?: string;
  id?: string;

  // Styling
  class?: string;
  inputClass?: string;

  // Pass-through props for inner input
  inputProps?: Record<string, any>;

  // Test ID (input will be suffixed with -input)
  dataTestid?: string;

  // Event callbacks
  onChange?: (detail: { value: number; meta: TouchSpinChangeMeta }) => void;
  onBlur?: (event: FocusEvent) => void;
  onFocus?: (event: FocusEvent) => void;
  onOnMin?: () => void;
  onOnMax?: () => void;
  onOnStartSpin?: () => void;
  onOnStopSpin?: () => void;
  onOnStartUpSpin?: () => void;
  onOnStartDownSpin?: () => void;
  onOnStopUpSpin?: () => void;
  onOnStopDownSpin?: () => void;
  onOnSpeedChange?: () => void;

  // Advanced TouchSpin core options (optional)
  coreOptions?: Partial<Omit<TouchSpinCoreOptions, 'renderer'>>;
}

/**
 * TouchSpin Svelte component events
 */
export interface TouchSpinEvents {
  change: CustomEvent<{ value: number; meta: TouchSpinChangeMeta }>;
  blur: CustomEvent<FocusEvent>;
  focus: CustomEvent<FocusEvent>;
  'on:min': CustomEvent<void>;
  'on:max': CustomEvent<void>;
  'on:startspin': CustomEvent<void>;
  'on:stopspin': CustomEvent<void>;
  'on:startupspin': CustomEvent<void>;
  'on:startdownspin': CustomEvent<void>;
  'on:stopupspin': CustomEvent<void>;
  'on:stopdownspin': CustomEvent<void>;
  'on:speedchange': CustomEvent<void>;
}

/**
 * Imperative handle API exposed via component actions
 */
export interface TouchSpinHandle {
  focus(): void;
  blur(): void;
  increment(): void;
  decrement(): void;
  getValue(): number;
  setValue(value: number): void;
  startUpSpin(): void;
  startDownSpin(): void;
  stopSpin(): void;
  updateSettings(opts: Partial<TouchSpinCoreOptions>): void;
}
