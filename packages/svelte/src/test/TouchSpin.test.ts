/// <reference types="vitest" />
import { describe, it, expect, beforeEach, vi } from 'vitest'
import TouchSpin from '../TouchSpin.svelte'
import type { TouchSpinProps } from '../types'

// Mock the TouchSpin core and renderer
const mockUpOnce = vi.fn()
const mockDownOnce = vi.fn()
const mockGetValue = vi.fn(() => 5)
const mockSetValue = vi.fn()

vi.mock('@touchspin/core', () => ({
  TouchSpin: vi.fn(() => ({
    upOnce: mockUpOnce,
    downOnce: mockDownOnce,
    getValue: mockGetValue,
    setValue: mockSetValue,
    destroy: vi.fn(),
  })),
}))

vi.mock('@touchspin/renderer-vanilla', () => ({
  VanillaRenderer: {},
}))

describe('TouchSpin.svelte', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('should be defined', () => {
    expect(TouchSpin).toBeDefined()
  })

  it('should have proper component structure', () => {
    // Basic smoke test - component exists and is importable
    expect(typeof TouchSpin).toBe('function')
  })

  it('should accept props interface', () => {
    // Type check - ensure our props interface matches expectations
    const props: TouchSpinProps = {
      value: 10,
      min: 0,
      max: 100,
      step: 1,
      disabled: false,
      readOnly: false,
      name: 'test',
      id: 'test-input',
      class: 'test-class',
      inputClass: 'test-input-class',
      dataTestid: 'test',
      onChange: vi.fn(),
      onFocus: vi.fn(),
      onBlur: vi.fn(),
    }

    expect(props.value).toBe(10)
    expect(props.min).toBe(0)
    expect(props.max).toBe(100)
  })
})
