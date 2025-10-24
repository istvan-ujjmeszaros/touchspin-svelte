var Xn = Object.defineProperty;
var Vt = (e) => {
  throw TypeError(e);
};
var Jn = (e, t, n) => t in e ? Xn(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var ye = (e, t, n) => Jn(e, typeof t != "symbol" ? t + "" : t, n), ct = (e, t, n) => t.has(e) || Vt("Cannot " + n);
var O = (e, t, n) => (ct(e, t, "read from private field"), n ? n.call(e) : t.get(e)), X = (e, t, n) => t.has(e) ? Vt("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n), te = (e, t, n, r) => (ct(e, t, "write to private field"), r ? r.call(e, n) : t.set(e, n), n), q = (e, t, n) => (ct(e, t, "access private method"), n);
import { onMount as Qn, onDestroy as $n } from "svelte";
import { TouchSpin as er } from "@touchspin/core";
import { VanillaRenderer as tr } from "@touchspin/renderer-vanilla";
const nr = "5";
var ln;
typeof window < "u" && ((ln = window.__svelte ?? (window.__svelte = {})).v ?? (ln.v = /* @__PURE__ */ new Set())).add(nr);
const rr = 1, ir = 4, fr = 8, lr = 16, N = Symbol(), ur = Symbol("filename"), sr = "http://www.w3.org/1999/xhtml", ar = "@attach";
var un, sn;
const Bt = (sn = (un = globalThis.process) == null ? void 0 : un.env) == null ? void 0 : sn.NODE_ENV, h = Bt && !Bt.toLowerCase().startsWith("prod");
var xt = Array.isArray, or = Array.prototype.indexOf, we = Object.defineProperty, Fe = Object.getOwnPropertyDescriptor, cr = Object.getOwnPropertyDescriptors, vr = Object.prototype, dr = Array.prototype, an = Object.getPrototypeOf;
function _r(e) {
  for (var t = 0; t < e.length; t++)
    e[t]();
}
function on() {
  var e, t, n = new Promise((r, i) => {
    e = r, t = i;
  });
  return { promise: n, resolve: e, reject: t };
}
const I = 2, Pt = 4, Nt = 8, ge = 16, pe = 32, Re = 64, Ct = 128, D = 1024, Y = 2048, ee = 4096, Ae = 8192, Q = 16384, Lt = 32768, Xe = 1 << 17, hr = 1 << 18, ft = 1 << 19, wr = 1 << 20, H = 256, Je = 512, Ve = 32768, Qe = 1 << 21, lt = 1 << 22, ve = 1 << 23, de = Symbol("$state"), br = Symbol("legacy props"), gr = Symbol(""), cn = Symbol("proxy path"), Se = new class extends Error {
  constructor() {
    super(...arguments);
    ye(this, "name", "StaleReactionError");
    ye(this, "message", "The reaction that called `getAbortSignal()` was re-run or destroyed");
  }
}();
function pr() {
  if (h) {
    const e = new Error("async_derived_orphan\nCannot create a `$derived(...)` with an `await` expression outside of an effect tree\nhttps://svelte.dev/e/async_derived_orphan");
    throw e.name = "Svelte error", e;
  } else
    throw new Error("https://svelte.dev/e/async_derived_orphan");
}
function Yt() {
  if (h) {
    const e = new Error("bind_invalid_checkbox_value\nUsing `bind:value` together with a checkbox input is not allowed. Use `bind:checked` instead\nhttps://svelte.dev/e/bind_invalid_checkbox_value");
    throw e.name = "Svelte error", e;
  } else
    throw new Error("https://svelte.dev/e/bind_invalid_checkbox_value");
}
function Er() {
  if (h) {
    const e = new Error(`derived_references_self
A derived value cannot reference itself recursively
https://svelte.dev/e/derived_references_self`);
    throw e.name = "Svelte error", e;
  } else
    throw new Error("https://svelte.dev/e/derived_references_self");
}
function mr(e) {
  if (h) {
    const t = new Error(`effect_in_teardown
\`${e}\` cannot be used inside an effect cleanup function
https://svelte.dev/e/effect_in_teardown`);
    throw t.name = "Svelte error", t;
  } else
    throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function yr() {
  if (h) {
    const e = new Error("effect_in_unowned_derived\nEffect cannot be created inside a `$derived` value that was not itself created inside an effect\nhttps://svelte.dev/e/effect_in_unowned_derived");
    throw e.name = "Svelte error", e;
  } else
    throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function Sr(e) {
  if (h) {
    const t = new Error(`effect_orphan
\`${e}\` can only be used inside an effect (e.g. during component initialisation)
https://svelte.dev/e/effect_orphan`);
    throw t.name = "Svelte error", t;
  } else
    throw new Error("https://svelte.dev/e/effect_orphan");
}
function kr() {
  if (h) {
    const e = new Error(`effect_update_depth_exceeded
Maximum update depth exceeded. This typically indicates that an effect reads and writes the same piece of state
https://svelte.dev/e/effect_update_depth_exceeded`);
    throw e.name = "Svelte error", e;
  } else
    throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function Ar(e) {
  if (h) {
    const t = new Error(`props_invalid_value
Cannot do \`bind:${e}={undefined}\` when \`${e}\` has a fallback value
https://svelte.dev/e/props_invalid_value`);
    throw t.name = "Svelte error", t;
  } else
    throw new Error("https://svelte.dev/e/props_invalid_value");
}
function Tr(e) {
  if (h) {
    const t = new Error(`rune_outside_svelte
The \`${e}\` rune is only available inside \`.svelte\` and \`.svelte.js/ts\` files
https://svelte.dev/e/rune_outside_svelte`);
    throw t.name = "Svelte error", t;
  } else
    throw new Error("https://svelte.dev/e/rune_outside_svelte");
}
function Or() {
  if (h) {
    const e = new Error("state_descriptors_fixed\nProperty descriptors defined on `$state` objects must contain `value` and always be `enumerable`, `configurable` and `writable`.\nhttps://svelte.dev/e/state_descriptors_fixed");
    throw e.name = "Svelte error", e;
  } else
    throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function xr() {
  if (h) {
    const e = new Error("state_prototype_fixed\nCannot set prototype of `$state` object\nhttps://svelte.dev/e/state_prototype_fixed");
    throw e.name = "Svelte error", e;
  } else
    throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function Pr() {
  if (h) {
    const e = new Error("state_unsafe_mutation\nUpdating state inside `$derived(...)`, `$inspect(...)` or a template expression is forbidden. If the value should not be reactive, declare it without `$state`\nhttps://svelte.dev/e/state_unsafe_mutation");
    throw e.name = "Svelte error", e;
  } else
    throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
var vn = "font-weight: bold", dn = "font-weight: normal";
function Nr(e) {
  h ? console.warn(`%c[svelte] await_reactivity_loss
%cDetected reactivity loss when reading \`${e}\`. This happens when state is read in an async function after an earlier \`await\`
https://svelte.dev/e/await_reactivity_loss`, vn, dn) : console.warn("https://svelte.dev/e/await_reactivity_loss");
}
function Cr() {
  h ? console.warn("%c[svelte] select_multiple_invalid_value\n%cThe `value` property of a `<select multiple>` element should be an array, but it received a non-array value. The selection will be kept as is.\nhttps://svelte.dev/e/select_multiple_invalid_value", vn, dn) : console.warn("https://svelte.dev/e/select_multiple_invalid_value");
}
function _n(e) {
  return e === this.v;
}
function Lr(e, t) {
  return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function";
}
function Ir(e) {
  return !Lr(e, this.v);
}
let Rr = !1;
function hn(e) {
  const t = Error.stackTraceLimit;
  Error.stackTraceLimit = 1 / 0;
  let n = Error();
  Error.stackTraceLimit = t;
  const r = n.stack;
  if (!r) return null;
  const i = r.split(`
`), f = [`
`];
  for (let l = 0; l < i.length; l++) {
    const u = i[l], s = u.replaceAll("\\", "/");
    if (u !== "Error") {
      if (u.includes("validate_each_keys"))
        return null;
      s.includes("svelte/src/internal") || s.includes("node_modules/.vite") || f.push(u);
    }
  }
  return f.length === 1 ? null : (we(n, "stack", {
    value: f.join(`
`)
  }), we(n, "name", {
    // 'Error' suffix is required for stack traces to be rendered properly
    value: `${e}Error`
  }), /** @type {Error & { stack: string }} */
  n);
}
function ne(e, t) {
  return e.label = t, wn(e.v, t), e;
}
function wn(e, t) {
  var n;
  return (n = e == null ? void 0 : e[cn]) == null || n.call(e, t), e;
}
let U = null;
function $e(e) {
  U = e;
}
let Be = null;
function et(e) {
  Be = e;
}
let He = null;
function qt(e) {
  He = e;
}
function Mr(e, t = !1, n) {
  U = {
    p: U,
    c: null,
    e: null,
    s: e,
    x: null,
    l: null
  }, h && (U.function = n, He = n);
}
function Dr(e) {
  var t = (
    /** @type {ComponentContext} */
    U
  ), n = t.e;
  if (n !== null) {
    t.e = null;
    for (var r of n)
      Ln(r);
  }
  return e !== void 0 && (t.x = e), U = t.p, h && (He = (U == null ? void 0 : U.function) ?? null), e ?? /** @type {T} */
  {};
}
function bn() {
  return !0;
}
let oe = [];
function gn() {
  var e = oe;
  oe = [], _r(e);
}
function ut(e) {
  if (oe.length === 0 && !Ue) {
    var t = oe;
    queueMicrotask(() => {
      t === oe && gn();
    });
  }
  oe.push(e);
}
function jr() {
  for (; oe.length > 0; )
    gn();
}
const pt = /* @__PURE__ */ new WeakMap();
function Fr(e) {
  var t = E;
  if (t === null)
    return p.f |= ve, e;
  if (h && e instanceof Error && !pt.has(e) && pt.set(e, Ur(e, t)), (t.f & Lt) === 0) {
    if ((t.f & Ct) === 0)
      throw !t.parent && e instanceof Error && pn(e), e;
    t.b.error(e);
  } else
    tt(e, t);
}
function tt(e, t) {
  for (; t !== null; ) {
    if ((t.f & Ct) !== 0)
      try {
        t.b.error(e);
        return;
      } catch (n) {
        e = n;
      }
    t = t.parent;
  }
  throw e instanceof Error && pn(e), e;
}
function Ur(e, t) {
  var l, u, s;
  const n = Fe(e, "message");
  if (!(n && !n.configurable)) {
    for (var r = "	", i = `
${r}in ${((l = t.fn) == null ? void 0 : l.name) || "<unknown>"}`, f = t.ctx; f !== null; )
      i += `
${r}in ${(u = f.function) == null ? void 0 : u[ur].split("/").pop()}`, f = f.p;
    return {
      message: e.message + `
${i}
`,
      stack: (s = e.stack) == null ? void 0 : s.split(`
`).filter((o) => !o.includes("svelte/src/internal")).join(`
`)
    };
  }
}
function pn(e) {
  const t = pt.get(e);
  t && (we(e, "message", {
    value: t.message
  }), we(e, "stack", {
    value: t.stack
  }));
}
const Ke = /* @__PURE__ */ new Set();
let A = null, Ze = null, C = null, Wt = /* @__PURE__ */ new Set(), G = [], st = null, Et = !1, Ue = !1;
var Oe, xe, Pe, ce, We, Ne, Ce, L, mt, ae, yt, En;
const it = class it {
  constructor() {
    X(this, L);
    ye(this, "committed", !1);
    /**
     * The current values of any sources that are updated in this batch
     * They keys of this map are identical to `this.#previous`
     * @type {Map<Source, any>}
     */
    ye(this, "current", /* @__PURE__ */ new Map());
    /**
     * The values of any sources that are updated in this batch _before_ those updates took place.
     * They keys of this map are identical to `this.#current`
     * @type {Map<Source, any>}
     */
    X(this, Oe, /* @__PURE__ */ new Map());
    /**
     * When the batch is committed (and the DOM is updated), we need to remove old branches
     * and append new ones by calling the functions added inside (if/each/key/etc) blocks
     * @type {Set<() => void>}
     */
    X(this, xe, /* @__PURE__ */ new Set());
    /**
     * The number of async effects that are currently in flight
     */
    X(this, Pe, 0);
    /**
     * The number of async effects that are currently in flight, _not_ inside a pending boundary
     */
    X(this, ce, 0);
    /**
     * A deferred that resolves when the batch is committed, used with `settled()`
     * TODO replace with Promise.withResolvers once supported widely enough
     * @type {{ promise: Promise<void>, resolve: (value?: any) => void, reject: (reason: unknown) => void } | null}
     */
    X(this, We, null);
    /**
     * Deferred effects (which run after async work has completed) that are DIRTY
     * @type {Effect[]}
     */
    X(this, Ne, []);
    /**
     * Deferred effects that are MAYBE_DIRTY
     * @type {Effect[]}
     */
    X(this, Ce, []);
    /**
     * A set of branches that still exist, but will be destroyed when this batch
     * is committed — we skip over these during `process`
     * @type {Set<Effect>}
     */
    ye(this, "skipped_effects", /* @__PURE__ */ new Set());
  }
  /**
   *
   * @param {Effect[]} root_effects
   */
  process(t) {
    G = [], Ze = null, this.apply();
    var n = {
      parent: null,
      effect: null,
      effects: [],
      render_effects: [],
      block_effects: []
    };
    for (const r of t)
      q(this, L, mt).call(this, r, n);
    q(this, L, yt).call(this), O(this, ce) > 0 ? (q(this, L, ae).call(this, n.effects), q(this, L, ae).call(this, n.render_effects), q(this, L, ae).call(this, n.block_effects)) : (Ze = this, A = null, Ht(n.render_effects), Ht(n.effects), Ze = null), C = null;
  }
  /**
   * Associate a change to a given source with the current
   * batch, noting its previous and current values
   * @param {Source} source
   * @param {any} value
   */
  capture(t, n) {
    O(this, Oe).has(t) || O(this, Oe).set(t, n), this.current.set(t, t.v), C == null || C.set(t, t.v);
  }
  activate() {
    A = this;
  }
  deactivate() {
    A = null, C = null;
  }
  flush() {
    if (G.length > 0) {
      if (this.activate(), mn(), A !== null && A !== this)
        return;
    } else
      q(this, L, yt).call(this);
    this.deactivate();
    for (const t of Wt)
      if (Wt.delete(t), t(), A !== null)
        break;
  }
  /**
   *
   * @param {boolean} blocking
   */
  increment(t) {
    te(this, Pe, O(this, Pe) + 1), t && te(this, ce, O(this, ce) + 1);
  }
  /**
   *
   * @param {boolean} blocking
   */
  decrement(t) {
    te(this, Pe, O(this, Pe) - 1), t && te(this, ce, O(this, ce) - 1);
    for (const n of O(this, Ne))
      F(n, Y), Le(n);
    for (const n of O(this, Ce))
      F(n, ee), Le(n);
    te(this, Ne, []), te(this, Ce, []), this.flush();
  }
  /** @param {() => void} fn */
  add_callback(t) {
    O(this, xe).add(t);
  }
  settled() {
    return (O(this, We) ?? te(this, We, on())).promise;
  }
  static ensure() {
    if (A === null) {
      const t = A = new it();
      Ke.add(A), Ue || it.enqueue(() => {
        A === t && t.flush();
      });
    }
    return A;
  }
  /** @param {() => void} task */
  static enqueue(t) {
    ut(t);
  }
  apply() {
  }
};
Oe = new WeakMap(), xe = new WeakMap(), Pe = new WeakMap(), ce = new WeakMap(), We = new WeakMap(), Ne = new WeakMap(), Ce = new WeakMap(), L = new WeakSet(), /**
 * Traverse the effect tree, executing effects or stashing
 * them for later execution as appropriate
 * @param {Effect} root
 * @param {EffectTarget} target
 */
mt = function(t, n) {
  var v;
  t.f ^= D;
  for (var r = t.first; r !== null; ) {
    var i = r.f, f = (i & (pe | Re)) !== 0, l = f && (i & D) !== 0, u = l || (i & Ae) !== 0 || this.skipped_effects.has(r);
    if ((r.f & Ct) !== 0 && ((v = r.b) != null && v.is_pending()) && (n = {
      parent: n,
      effect: r,
      effects: [],
      render_effects: [],
      block_effects: []
    }), !u && r.fn !== null) {
      f ? r.f ^= D : (i & Pt) !== 0 ? n.effects.push(r) : ze(r) && ((r.f & ge) !== 0 && n.block_effects.push(r), qe(r));
      var s = r.first;
      if (s !== null) {
        r = s;
        continue;
      }
    }
    var o = r.parent;
    for (r = r.next; r === null && o !== null; )
      o === n.effect && (q(this, L, ae).call(this, n.effects), q(this, L, ae).call(this, n.render_effects), q(this, L, ae).call(this, n.block_effects), n = /** @type {EffectTarget} */
      n.parent), r = o.next, o = o.parent;
  }
}, /**
 * @param {Effect[]} effects
 */
ae = function(t) {
  for (const n of t)
    ((n.f & Y) !== 0 ? O(this, Ne) : O(this, Ce)).push(n), F(n, D);
}, yt = function() {
  if (O(this, ce) === 0) {
    for (const t of O(this, xe)) t();
    O(this, xe).clear();
  }
  O(this, Pe) === 0 && q(this, L, En).call(this);
}, En = function() {
  var i, f;
  if (Ke.size > 1) {
    O(this, Oe).clear();
    var t = C, n = !0, r = {
      parent: null,
      effect: null,
      effects: [],
      render_effects: [],
      block_effects: []
    };
    for (const l of Ke) {
      if (l === this) {
        n = !1;
        continue;
      }
      const u = [];
      for (const [o, v] of this.current) {
        if (l.current.has(o))
          if (n && v !== l.current.get(o))
            l.current.set(o, v);
          else
            continue;
        u.push(o);
      }
      if (u.length === 0)
        continue;
      const s = [...l.current.keys()].filter((o) => !this.current.has(o));
      if (s.length > 0) {
        const o = /* @__PURE__ */ new Set(), v = /* @__PURE__ */ new Map();
        for (const a of u)
          yn(a, s, o, v);
        if (G.length > 0) {
          A = l, l.apply();
          for (const a of G)
            q(i = l, L, mt).call(i, a, r);
          G = [], l.deactivate();
        }
      }
    }
    A = null, C = t;
  }
  this.committed = !0, Ke.delete(this), (f = O(this, We)) == null || f.resolve();
};
let nt = it;
function Vr(e) {
  var t = Ue;
  Ue = !0;
  try {
    for (var n; ; ) {
      if (jr(), G.length === 0 && (A == null || A.flush(), G.length === 0))
        return st = null, /** @type {T} */
        n;
      mn();
    }
  } finally {
    Ue = t;
  }
}
function mn() {
  var e = Te;
  Et = !0;
  try {
    var t = 0;
    for (Zt(!0); G.length > 0; ) {
      var n = nt.ensure();
      if (t++ > 1e3) {
        if (h) {
          var r = /* @__PURE__ */ new Map();
          for (const f of n.current.keys())
            for (const [l, u] of f.updated ?? []) {
              var i = r.get(l);
              i || (i = { error: u.error, count: 0 }, r.set(l, i)), i.count += u.count;
            }
          for (const f of r.values())
            console.error(f.error);
        }
        Br();
      }
      n.process(G), le.clear();
    }
  } finally {
    Et = !1, Zt(e), st = null;
  }
}
function Br() {
  try {
    kr();
  } catch (e) {
    h && we(e, "stack", { value: "" }), tt(e, st);
  }
}
let z = null;
function Ht(e) {
  var t = e.length;
  if (t !== 0) {
    for (var n = 0; n < t; ) {
      var r = e[n++];
      if ((r.f & (Q | Ae)) === 0 && ze(r) && (z = /* @__PURE__ */ new Set(), qe(r), r.deps === null && r.first === null && r.nodes_start === null && (r.teardown === null && r.ac === null ? Fn(r) : r.fn = null), (z == null ? void 0 : z.size) > 0)) {
        le.clear();
        for (const i of z) {
          if ((i.f & (Q | Ae)) !== 0) continue;
          const f = [i];
          let l = i.parent;
          for (; l !== null; )
            z.has(l) && (z.delete(l), f.push(l)), l = l.parent;
          for (let u = f.length - 1; u >= 0; u--) {
            const s = f[u];
            (s.f & (Q | Ae)) === 0 && qe(s);
          }
        }
        z.clear();
      }
    }
    z = null;
  }
}
function yn(e, t, n, r) {
  if (!n.has(e) && (n.add(e), e.reactions !== null))
    for (const i of e.reactions) {
      const f = i.f;
      (f & I) !== 0 ? yn(
        /** @type {Derived} */
        i,
        t,
        n,
        r
      ) : (f & (lt | ge)) !== 0 && (f & Y) === 0 && // we may have scheduled this one already
      Sn(i, t, r) && (F(i, Y), Le(
        /** @type {Effect} */
        i
      ));
    }
}
function Sn(e, t, n) {
  const r = n.get(e);
  if (r !== void 0) return r;
  if (e.deps !== null)
    for (const i of e.deps) {
      if (t.includes(i))
        return !0;
      if ((i.f & I) !== 0 && Sn(
        /** @type {Derived} */
        i,
        t,
        n
      ))
        return n.set(
          /** @type {Derived} */
          i,
          !0
        ), !0;
    }
  return n.set(e, !1), !1;
}
function Le(e) {
  for (var t = st = e; t.parent !== null; ) {
    t = t.parent;
    var n = t.f;
    if (Et && t === E && (n & ge) !== 0)
      return;
    if ((n & (Re | pe)) !== 0) {
      if ((n & D) === 0) return;
      t.f ^= D;
    }
  }
  G.push(t);
}
function kn(e, t, n) {
  const r = It;
  if (t.length === 0) {
    n(e.map(r));
    return;
  }
  var i = A, f = (
    /** @type {Effect} */
    E
  ), l = Yr();
  Promise.all(t.map((u) => /* @__PURE__ */ Wr(u))).then((u) => {
    l();
    try {
      n([...e.map(r), ...u]);
    } catch (s) {
      (f.f & Q) === 0 && tt(s, f);
    }
    i == null || i.deactivate(), St();
  }).catch((u) => {
    tt(u, f);
  });
}
function Yr() {
  var e = E, t = p, n = U, r = A;
  if (h)
    var i = Be;
  return function() {
    $(e), Z(t), $e(n), r == null || r.activate(), h && (An(null), et(i));
  };
}
function St() {
  $(null), Z(null), $e(null), h && (An(null), et(null));
}
let _e = null;
function An(e) {
  _e = e;
}
const qr = /* @__PURE__ */ new Set();
// @__NO_SIDE_EFFECTS__
function It(e) {
  var t = I | Y, n = p !== null && (p.f & I) !== 0 ? (
    /** @type {Derived} */
    p
  ) : null;
  return E === null || n !== null && (n.f & H) !== 0 ? t |= H : E.f |= ft, {
    ctx: U,
    deps: null,
    effects: null,
    equals: _n,
    f: t,
    fn: e,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      N
    ),
    wv: 0,
    parent: n ?? E,
    ac: null
  };
}
// @__NO_SIDE_EFFECTS__
function Wr(e, t) {
  let n = (
    /** @type {Effect | null} */
    E
  );
  n === null && pr();
  var r = (
    /** @type {Boundary} */
    n.b
  ), i = (
    /** @type {Promise<V>} */
    /** @type {unknown} */
    void 0
  ), f = On(
    /** @type {V} */
    N
  ), l = !p, u = /* @__PURE__ */ new Map();
  return ui(() => {
    var c;
    h && (_e = E);
    var s = on();
    i = s.promise;
    try {
      Promise.resolve(e()).then(s.resolve, s.reject).then(() => {
        o === A && o.committed && o.deactivate(), St();
      });
    } catch (d) {
      s.reject(d), St();
    }
    h && (_e = null);
    var o = (
      /** @type {Batch} */
      A
    );
    if (l) {
      var v = !r.is_pending();
      r.update_pending_count(1), o.increment(v), (c = u.get(o)) == null || c.reject(Se), u.delete(o), u.set(o, s);
    }
    const a = (d, _ = void 0) => {
      if (_e = null, o.activate(), _)
        _ !== Se && (f.f |= ve, At(f, _));
      else {
        (f.f & ve) !== 0 && (f.f ^= ve), At(f, d);
        for (const [b, g] of u) {
          if (u.delete(b), b === o) break;
          g.reject(Se);
        }
      }
      l && (r.update_pending_count(-1), o.decrement(v));
    };
    s.promise.then(a, (d) => a(null, d || "unknown"));
  }), Cn(() => {
    for (const s of u.values())
      s.reject(Se);
  }), h && (f.f |= lt), new Promise((s) => {
    function o(v) {
      function a() {
        v === i ? s(f) : o(i);
      }
      v.then(a, a);
    }
    o(i);
  });
}
// @__NO_SIDE_EFFECTS__
function Hr(e) {
  const t = /* @__PURE__ */ It(e);
  return t.equals = Ir, t;
}
function kt(e) {
  var t = e.effects;
  if (t !== null) {
    e.effects = null;
    for (var n = 0; n < t.length; n += 1)
      be(
        /** @type {Effect} */
        t[n]
      );
  }
}
let vt = [];
function zr(e) {
  for (var t = e.parent; t !== null; ) {
    if ((t.f & I) === 0)
      return (
        /** @type {Effect} */
        t
      );
    t = t.parent;
  }
  return null;
}
function Rt(e) {
  var t, n = E;
  if ($(zr(e)), h) {
    let r = Ie;
    zt(/* @__PURE__ */ new Set());
    try {
      vt.includes(e) && Er(), vt.push(e), e.f &= ~Ve, kt(e), t = Tt(e);
    } finally {
      $(n), zt(r), vt.pop();
    }
  } else
    try {
      e.f &= ~Ve, kt(e), t = Tt(e);
    } finally {
      $(n);
    }
  return t;
}
function Tn(e) {
  var t = Rt(e);
  if (e.equals(t) || (e.v = t, e.wv = Vn()), !Ee)
    if (C !== null)
      C.set(e, e.v);
    else {
      var n = (fe || (e.f & H) !== 0) && e.deps !== null ? ee : D;
      F(e, n);
    }
}
let Ie = /* @__PURE__ */ new Set();
const le = /* @__PURE__ */ new Map();
function zt(e) {
  Ie = e;
}
let Mt = !1;
function Kr() {
  Mt = !0;
}
function On(e, t) {
  var n = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: e,
    reactions: null,
    equals: _n,
    rv: 0,
    wv: 0
  };
  return n;
}
// @__NO_SIDE_EFFECTS__
function re(e, t) {
  const n = On(e);
  return ci(n), n;
}
function ie(e, t, n = !1) {
  p !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
  // to ensure we error if state is set inside an inspect effect
  (!K || (p.f & Xe) !== 0) && bn() && (p.f & (I | ge | lt | Xe)) !== 0 && !(j != null && j.includes(e)) && Pr();
  let r = n ? ke(t) : t;
  return h && wn(
    r,
    /** @type {string} */
    e.label
  ), At(e, r);
}
function At(e, t) {
  if (!e.equals(t)) {
    var n = e.v;
    Ee ? le.set(e, t) : le.set(e, n), e.v = t;
    var r = nt.ensure();
    if (r.capture(e, n), h) {
      if (E !== null) {
        const i = hn("UpdatedAt");
        if (i !== null) {
          e.updated ?? (e.updated = /* @__PURE__ */ new Map());
          let f = e.updated.get(i.stack);
          f || (f = { error: i, count: 0 }, e.updated.set(i.stack, f)), f.count++;
        }
      }
      E !== null && (e.set_during_effect = !0);
    }
    (e.f & I) !== 0 && ((e.f & Y) !== 0 && Rt(
      /** @type {Derived} */
      e
    ), F(e, (e.f & H) === 0 ? D : ee)), e.wv = Vn(), Pn(e, Y), E !== null && (E.f & D) !== 0 && (E.f & (pe | Re)) === 0 && (W === null ? vi([e]) : W.push(e)), h && Ie.size > 0 && !Mt && xn();
  }
  return t;
}
function xn() {
  Mt = !1;
  const e = Array.from(Ie);
  for (const t of e)
    (t.f & D) !== 0 && F(t, ee), ze(t) && qe(t);
  Ie.clear();
}
function dt(e) {
  ie(e, e.v + 1);
}
function Pn(e, t) {
  var n = e.reactions;
  if (n !== null)
    for (var r = n.length, i = 0; i < r; i++) {
      var f = n[i], l = f.f;
      if (h && (l & Xe) !== 0) {
        Ie.add(f);
        continue;
      }
      var u = (l & Y) === 0;
      u && F(f, t), (l & I) !== 0 ? (l & Ve) === 0 && (f.f |= Ve, Pn(
        /** @type {Derived} */
        f,
        ee
      )) : u && ((l & ge) !== 0 && z !== null && z.add(
        /** @type {Effect} */
        f
      ), Le(
        /** @type {Effect} */
        f
      ));
    }
}
const Gr = /^[a-zA-Z_$][a-zA-Z_$0-9]*$/;
function ke(e) {
  if (typeof e != "object" || e === null || de in e)
    return e;
  const t = an(e);
  if (t !== vr && t !== dr)
    return e;
  var n = /* @__PURE__ */ new Map(), r = xt(e), i = /* @__PURE__ */ re(0), f = he, l = (v) => {
    if (he === f)
      return v();
    var a = p, c = he;
    Z(null), Jt(f);
    var d = v();
    return Z(a), Jt(c), d;
  };
  r && (n.set("length", /* @__PURE__ */ re(
    /** @type {any[]} */
    e.length
  )), h && (e = /** @type {any} */
  Jr(
    /** @type {any[]} */
    e
  )));
  var u = "";
  let s = !1;
  function o(v) {
    if (!s) {
      s = !0, u = v, ne(i, `${u} version`);
      for (const [a, c] of n)
        ne(c, se(u, a));
      s = !1;
    }
  }
  return new Proxy(
    /** @type {any} */
    e,
    {
      defineProperty(v, a, c) {
        (!("value" in c) || c.configurable === !1 || c.enumerable === !1 || c.writable === !1) && Or();
        var d = n.get(a);
        return d === void 0 ? d = l(() => {
          var _ = /* @__PURE__ */ re(c.value);
          return n.set(a, _), h && typeof a == "string" && ne(_, se(u, a)), _;
        }) : ie(d, c.value, !0), !0;
      },
      deleteProperty(v, a) {
        var c = n.get(a);
        if (c === void 0) {
          if (a in v) {
            const d = l(() => /* @__PURE__ */ re(N));
            n.set(a, d), dt(i), h && ne(d, se(u, a));
          }
        } else
          ie(c, N), dt(i);
        return !0;
      },
      get(v, a, c) {
        var g;
        if (a === de)
          return e;
        if (h && a === cn)
          return o;
        var d = n.get(a), _ = a in v;
        if (d === void 0 && (!_ || (g = Fe(v, a)) != null && g.writable) && (d = l(() => {
          var S = ke(_ ? v[a] : N), R = /* @__PURE__ */ re(S);
          return h && ne(R, se(u, a)), R;
        }), n.set(a, d)), d !== void 0) {
          var b = J(d);
          return b === N ? void 0 : b;
        }
        return Reflect.get(v, a, c);
      },
      getOwnPropertyDescriptor(v, a) {
        var c = Reflect.getOwnPropertyDescriptor(v, a);
        if (c && "value" in c) {
          var d = n.get(a);
          d && (c.value = J(d));
        } else if (c === void 0) {
          var _ = n.get(a), b = _ == null ? void 0 : _.v;
          if (_ !== void 0 && b !== N)
            return {
              enumerable: !0,
              configurable: !0,
              value: b,
              writable: !0
            };
        }
        return c;
      },
      has(v, a) {
        var b;
        if (a === de)
          return !0;
        var c = n.get(a), d = c !== void 0 && c.v !== N || Reflect.has(v, a);
        if (c !== void 0 || E !== null && (!d || (b = Fe(v, a)) != null && b.writable)) {
          c === void 0 && (c = l(() => {
            var g = d ? ke(v[a]) : N, S = /* @__PURE__ */ re(g);
            return h && ne(S, se(u, a)), S;
          }), n.set(a, c));
          var _ = J(c);
          if (_ === N)
            return !1;
        }
        return d;
      },
      set(v, a, c, d) {
        var V;
        var _ = n.get(a), b = a in v;
        if (r && a === "length")
          for (var g = c; g < /** @type {Source<number>} */
          _.v; g += 1) {
            var S = n.get(g + "");
            S !== void 0 ? ie(S, N) : g in v && (S = l(() => /* @__PURE__ */ re(N)), n.set(g + "", S), h && ne(S, se(u, g)));
          }
        if (_ === void 0)
          (!b || (V = Fe(v, a)) != null && V.writable) && (_ = l(() => /* @__PURE__ */ re(void 0)), h && ne(_, se(u, a)), ie(_, ke(c)), n.set(a, _));
        else {
          b = _.v !== N;
          var R = l(() => ke(c));
          ie(_, R);
        }
        var w = Reflect.getOwnPropertyDescriptor(v, a);
        if (w != null && w.set && w.set.call(d, c), !b) {
          if (r && typeof a == "string") {
            var y = (
              /** @type {Source<number>} */
              n.get("length")
            ), T = Number(a);
            Number.isInteger(T) && T >= y.v && ie(y, T + 1);
          }
          dt(i);
        }
        return !0;
      },
      ownKeys(v) {
        J(i);
        var a = Reflect.ownKeys(v).filter((_) => {
          var b = n.get(_);
          return b === void 0 || b.v !== N;
        });
        for (var [c, d] of n)
          d.v !== N && !(c in v) && a.push(c);
        return a;
      },
      setPrototypeOf() {
        xr();
      }
    }
  );
}
function se(e, t) {
  return typeof t == "symbol" ? `${e}[Symbol(${t.description ?? ""})]` : Gr.test(t) ? `${e}.${t}` : /^\d+$/.test(t) ? `${e}[${t}]` : `${e}['${t}']`;
}
function Kt(e) {
  try {
    if (e !== null && typeof e == "object" && de in e)
      return e[de];
  } catch {
  }
  return e;
}
function Zr(e, t) {
  return Object.is(Kt(e), Kt(t));
}
const Xr = /* @__PURE__ */ new Set([
  "copyWithin",
  "fill",
  "pop",
  "push",
  "reverse",
  "shift",
  "sort",
  "splice",
  "unshift"
]);
function Jr(e) {
  return new Proxy(e, {
    get(t, n, r) {
      var i = Reflect.get(t, n, r);
      return Xr.has(
        /** @type {string} */
        n
      ) ? function(...f) {
        Kr();
        var l = i.apply(this, f);
        return xn(), l;
      } : i;
    }
  });
}
var Qr, $r;
// @__NO_SIDE_EFFECTS__
function Nn(e) {
  return Qr.call(e);
}
// @__NO_SIDE_EFFECTS__
function ei(e) {
  return $r.call(e);
}
function ti(e, t) {
  return /* @__PURE__ */ Nn(e);
}
function ni(e, t) {
  if (t) {
    const n = document.body;
    e.autofocus = !0, ut(() => {
      document.activeElement === n && e.focus();
    });
  }
}
let Gt = !1;
function ri() {
  Gt || (Gt = !0, document.addEventListener(
    "reset",
    (e) => {
      Promise.resolve().then(() => {
        var t;
        if (!e.defaultPrevented)
          for (
            const n of
            /**@type {HTMLFormElement} */
            e.target.elements
          )
            (t = n.__on_r) == null || t.call(n);
      });
    },
    // In the capture phase to guarantee we get noticed of it (no possiblity of stopPropagation)
    { capture: !0 }
  ));
}
function at(e) {
  var t = p, n = E;
  Z(null), $(null);
  try {
    return e();
  } finally {
    Z(t), $(n);
  }
}
function ii(e, t, n, r = n) {
  e.addEventListener(t, () => at(n));
  const i = e.__on_r;
  i ? e.__on_r = () => {
    i(), r(!0);
  } : e.__on_r = () => r(!0), ri();
}
function fi(e) {
  E === null && p === null && Sr(e), p !== null && (p.f & H) !== 0 && E === null && yr(), Ee && mr(e);
}
function li(e, t) {
  var n = t.last;
  n === null ? t.last = t.first = e : (n.next = e, e.prev = n, t.last = e);
}
function ue(e, t, n, r = !0) {
  var i = E;
  if (h)
    for (; i !== null && (i.f & Xe) !== 0; )
      i = i.parent;
  i !== null && (i.f & Ae) !== 0 && (e |= Ae);
  var f = {
    ctx: U,
    deps: null,
    nodes_start: null,
    nodes_end: null,
    f: e | Y,
    first: null,
    fn: t,
    last: null,
    next: null,
    parent: i,
    b: i && i.b,
    prev: null,
    teardown: null,
    transitions: null,
    wv: 0,
    ac: null
  };
  if (h && (f.component_function = He), n)
    try {
      qe(f), f.f |= Lt;
    } catch (s) {
      throw be(f), s;
    }
  else t !== null && Le(f);
  if (r) {
    var l = f;
    if (n && l.deps === null && l.teardown === null && l.nodes_start === null && l.first === l.last && // either `null`, or a singular child
    (l.f & ft) === 0 && (l = l.first), l !== null && (l.parent = i, i !== null && li(l, i), p !== null && (p.f & I) !== 0 && (e & Re) === 0)) {
      var u = (
        /** @type {Derived} */
        p
      );
      (u.effects ?? (u.effects = [])).push(l);
    }
  }
  return f;
}
function Cn(e) {
  const t = ue(Nt, null, !1);
  return F(t, D), t.teardown = e, t;
}
function _t(e) {
  fi("$effect"), h && we(e, "name", {
    value: "$effect"
  });
  var t = (
    /** @type {Effect} */
    E.f
  ), n = !p && (t & pe) !== 0 && (t & Lt) === 0;
  if (n) {
    var r = (
      /** @type {ComponentContext} */
      U
    );
    (r.e ?? (r.e = [])).push(e);
  } else
    return Ln(e);
}
function Ln(e) {
  return ue(Pt | wr, e, !1);
}
function Dt(e) {
  return ue(Pt, e, !1);
}
function ui(e) {
  return ue(lt | ft, e, !0);
}
function In(e, t = 0) {
  return ue(Nt | t, e, !0);
}
function si(e, t = [], n = []) {
  kn(t, n, (r) => {
    ue(Nt, () => e(...r.map(J)), !0);
  });
}
function Rn(e, t = 0) {
  var n = ue(ge | t, e, !0);
  return h && (n.dev_stack = Be), n;
}
function Mn(e, t = !0) {
  return ue(pe | ft, e, !0, t);
}
function Dn(e) {
  var t = e.teardown;
  if (t !== null) {
    const n = Ee, r = p;
    Xt(!0), Z(null);
    try {
      t.call(null);
    } finally {
      Xt(n), Z(r);
    }
  }
}
function jn(e, t = !1) {
  var n = e.first;
  for (e.first = e.last = null; n !== null; ) {
    const i = n.ac;
    i !== null && at(() => {
      i.abort(Se);
    });
    var r = n.next;
    (n.f & Re) !== 0 ? n.parent = null : be(n, t), n = r;
  }
}
function ai(e) {
  for (var t = e.first; t !== null; ) {
    var n = t.next;
    (t.f & pe) === 0 && be(t), t = n;
  }
}
function be(e, t = !0) {
  var n = !1;
  (t || (e.f & hr) !== 0) && e.nodes_start !== null && e.nodes_end !== null && (oi(
    e.nodes_start,
    /** @type {TemplateNode} */
    e.nodes_end
  ), n = !0), jn(e, t && !n), rt(e, 0), F(e, Q);
  var r = e.transitions;
  if (r !== null)
    for (const f of r)
      f.stop();
  Dn(e);
  var i = e.parent;
  i !== null && i.first !== null && Fn(e), h && (e.component_function = null), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes_start = e.nodes_end = e.ac = null;
}
function oi(e, t) {
  for (; e !== null; ) {
    var n = e === t ? null : (
      /** @type {TemplateNode} */
      /* @__PURE__ */ ei(e)
    );
    e.remove(), e = n;
  }
}
function Fn(e) {
  var t = e.parent, n = e.prev, r = e.next;
  n !== null && (n.next = r), r !== null && (r.prev = n), t !== null && (t.first === e && (t.first = r), t.last === e && (t.last = n));
}
let Te = !1;
function Zt(e) {
  Te = e;
}
let Ee = !1;
function Xt(e) {
  Ee = e;
}
let p = null, K = !1;
function Z(e) {
  p = e;
}
let E = null;
function $(e) {
  E = e;
}
let j = null;
function ci(e) {
  p !== null && (j === null ? j = [e] : j.push(e));
}
let M = null, B = 0, W = null;
function vi(e) {
  W = e;
}
let Un = 1, Ye = 0, he = Ye;
function Jt(e) {
  he = e;
}
let fe = !1;
function Vn() {
  return ++Un;
}
function ze(e) {
  var a;
  var t = e.f;
  if ((t & Y) !== 0)
    return !0;
  if ((t & ee) !== 0) {
    var n = e.deps, r = (t & H) !== 0;
    if (t & I && (e.f &= ~Ve), n !== null) {
      var i, f, l = (t & Je) !== 0, u = r && E !== null && !fe, s = n.length;
      if ((l || u) && (E === null || (E.f & Q) === 0)) {
        var o = (
          /** @type {Derived} */
          e
        ), v = o.parent;
        for (i = 0; i < s; i++)
          f = n[i], (l || !((a = f == null ? void 0 : f.reactions) != null && a.includes(o))) && (f.reactions ?? (f.reactions = [])).push(o);
        l && (o.f ^= Je), u && v !== null && (v.f & H) === 0 && (o.f ^= H);
      }
      for (i = 0; i < s; i++)
        if (f = n[i], ze(
          /** @type {Derived} */
          f
        ) && Tn(
          /** @type {Derived} */
          f
        ), f.wv > e.wv)
          return !0;
    }
    (!r || E !== null && !fe) && F(e, D);
  }
  return !1;
}
function Bn(e, t, n = !0) {
  var r = e.reactions;
  if (r !== null && !(j != null && j.includes(e)))
    for (var i = 0; i < r.length; i++) {
      var f = r[i];
      (f.f & I) !== 0 ? Bn(
        /** @type {Derived} */
        f,
        t,
        !1
      ) : t === f && (n ? F(f, Y) : (f.f & D) !== 0 && F(f, ee), Le(
        /** @type {Effect} */
        f
      ));
    }
}
function Tt(e) {
  var b;
  var t = M, n = B, r = W, i = p, f = fe, l = j, u = U, s = K, o = he, v = e.f;
  M = /** @type {null | Value[]} */
  null, B = 0, W = null, fe = (v & H) !== 0 && (K || !Te || p === null), p = (v & (pe | Re)) === 0 ? e : null, j = null, $e(e.ctx), K = !1, he = ++Ye, e.ac !== null && (at(() => {
    e.ac.abort(Se);
  }), e.ac = null);
  try {
    e.f |= Qe;
    var a = (
      /** @type {Function} */
      e.fn
    ), c = a(), d = e.deps;
    if (M !== null) {
      var _;
      if (rt(e, B), d !== null && B > 0)
        for (d.length = B + M.length, _ = 0; _ < M.length; _++)
          d[B + _] = M[_];
      else
        e.deps = d = M;
      if (!fe || // Deriveds that already have reactions can cleanup, so we still add them as reactions
      (v & I) !== 0 && /** @type {import('#client').Derived} */
      e.reactions !== null)
        for (_ = B; _ < d.length; _++)
          ((b = d[_]).reactions ?? (b.reactions = [])).push(e);
    } else d !== null && B < d.length && (rt(e, B), d.length = B);
    if (bn() && W !== null && !K && d !== null && (e.f & (I | ee | Y)) === 0)
      for (_ = 0; _ < /** @type {Source[]} */
      W.length; _++)
        Bn(
          W[_],
          /** @type {Effect} */
          e
        );
    return i !== null && i !== e && (Ye++, W !== null && (r === null ? r = W : r.push(.../** @type {Source[]} */
    W))), (e.f & ve) !== 0 && (e.f ^= ve), c;
  } catch (g) {
    return Fr(g);
  } finally {
    e.f ^= Qe, M = t, B = n, W = r, p = i, fe = f, j = l, $e(u), K = s, he = o;
  }
}
function di(e, t) {
  let n = t.reactions;
  if (n !== null) {
    var r = or.call(n, e);
    if (r !== -1) {
      var i = n.length - 1;
      i === 0 ? n = t.reactions = null : (n[r] = n[i], n.pop());
    }
  }
  n === null && (t.f & I) !== 0 && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (M === null || !M.includes(t)) && (F(t, ee), (t.f & (H | Je)) === 0 && (t.f ^= Je), kt(
    /** @type {Derived} **/
    t
  ), rt(
    /** @type {Derived} **/
    t,
    0
  ));
}
function rt(e, t) {
  var n = e.deps;
  if (n !== null)
    for (var r = t; r < n.length; r++)
      di(e, n[r]);
}
function qe(e) {
  var t = e.f;
  if ((t & Q) === 0) {
    F(e, D);
    var n = E, r = Te;
    if (E = e, Te = !0, h) {
      var i = He;
      qt(e.component_function);
      var f = (
        /** @type {any} */
        Be
      );
      et(e.dev_stack ?? Be);
    }
    try {
      (t & ge) !== 0 ? ai(e) : jn(e), Dn(e);
      var l = Tt(e);
      e.teardown = typeof l == "function" ? l : null, e.wv = Un;
      var u;
      h && Rr && (e.f & Y) !== 0 && e.deps;
    } finally {
      Te = r, E = n, h && (qt(i), et(f));
    }
  }
}
async function _i() {
  await Promise.resolve(), Vr();
}
function J(e) {
  var c;
  var t = e.f, n = (t & I) !== 0;
  if (p !== null && !K) {
    var r = E !== null && (E.f & Q) !== 0;
    if (!r && !(j != null && j.includes(e))) {
      var i = p.deps;
      if ((p.f & Qe) !== 0)
        e.rv < Ye && (e.rv = Ye, M === null && i !== null && i[B] === e ? B++ : M === null ? M = [e] : (!fe || !M.includes(e)) && M.push(e));
      else {
        (p.deps ?? (p.deps = [])).push(e);
        var f = e.reactions;
        f === null ? e.reactions = [p] : f.includes(p) || f.push(p);
      }
    }
  } else if (n && /** @type {Derived} */
  e.deps === null && /** @type {Derived} */
  e.effects === null) {
    var l = (
      /** @type {Derived} */
      e
    ), u = l.parent;
    u !== null && (u.f & H) === 0 && (l.f ^= H);
  }
  if (h) {
    if (_e) {
      var s = (_e.f & Qe) !== 0, o = (c = _e.deps) == null ? void 0 : c.includes(e);
      if (!s && !K && !o) {
        Nr(
          /** @type {string} */
          e.label
        );
        var v = hn("TracedAt");
        v && console.warn(v);
      }
    }
    qr.delete(e);
  }
  if (Ee) {
    if (le.has(e))
      return le.get(e);
    if (n) {
      l = /** @type {Derived} */
      e;
      var a = l.v;
      return ((l.f & D) === 0 && l.reactions !== null || Yn(l)) && (a = Rt(l)), le.set(l, a), a;
    }
  } else if (n) {
    if (l = /** @type {Derived} */
    e, C != null && C.has(l))
      return C.get(l);
    ze(l) && Tn(l);
  }
  if (C != null && C.has(e))
    return C.get(e);
  if ((e.f & ve) !== 0)
    throw e.v;
  return e.v;
}
function Yn(e) {
  if (e.v === N) return !0;
  if (e.deps === null) return !1;
  for (const t of e.deps)
    if (le.has(t) || (t.f & I) !== 0 && Yn(
      /** @type {Derived} */
      t
    ))
      return !0;
  return !1;
}
function jt(e) {
  var t = K;
  try {
    return K = !0, e();
  } finally {
    K = t;
  }
}
const hi = -7169;
function F(e, t) {
  e.f = e.f & hi | t;
}
const wi = /* @__PURE__ */ new Set(), bi = /* @__PURE__ */ new Set();
function gi(e, t, n, r = {}) {
  function i(f) {
    if (r.capture || Ei.call(t, f), !f.cancelBubble)
      return at(() => n == null ? void 0 : n.call(this, f));
  }
  return e.startsWith("pointer") || e.startsWith("touch") || e === "wheel" ? ut(() => {
    t.addEventListener(e, i, r);
  }) : t.addEventListener(e, i, r), i;
}
function pi(e) {
  for (var t = 0; t < e.length; t++)
    wi.add(e[t]);
  for (var n of bi)
    n(e);
}
let Qt = null;
function Ei(e) {
  var R;
  var t = this, n = (
    /** @type {Node} */
    t.ownerDocument
  ), r = e.type, i = ((R = e.composedPath) == null ? void 0 : R.call(e)) || [], f = (
    /** @type {null | Element} */
    i[0] || e.target
  );
  Qt = e;
  var l = 0, u = Qt === e && e.__root;
  if (u) {
    var s = i.indexOf(u);
    if (s !== -1 && (t === document || t === /** @type {any} */
    window)) {
      e.__root = t;
      return;
    }
    var o = i.indexOf(t);
    if (o === -1)
      return;
    s <= o && (l = s);
  }
  if (f = /** @type {Element} */
  i[l] || e.target, f !== t) {
    we(e, "currentTarget", {
      configurable: !0,
      get() {
        return f || n;
      }
    });
    var v = p, a = E;
    Z(null), $(null);
    try {
      for (var c, d = []; f !== null; ) {
        var _ = f.assignedSlot || f.parentNode || /** @type {any} */
        f.host || null;
        try {
          var b = f["__" + r];
          if (b != null && (!/** @type {any} */
          f.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          e.target === f))
            if (xt(b)) {
              var [g, ...S] = b;
              g.apply(f, [e, ...S]);
            } else
              b.call(f, e);
        } catch (w) {
          c ? d.push(w) : c = w;
        }
        if (e.cancelBubble || _ === t || _ === null)
          break;
        f = _;
      }
      if (c) {
        for (let w of d)
          queueMicrotask(() => {
            throw w;
          });
        throw c;
      }
    } finally {
      e.__root = t, delete e.currentTarget, Z(v), $(a);
    }
  }
}
function mi(e) {
  var t = document.createElement("template");
  return t.innerHTML = e.replaceAll("<!>", "<!---->"), t.content;
}
function yi(e, t) {
  var n = (
    /** @type {Effect} */
    E
  );
  n.nodes_start === null && (n.nodes_start = e, n.nodes_end = t);
}
// @__NO_SIDE_EFFECTS__
function Si(e, t) {
  var n, r = !e.startsWith("<!>");
  return () => {
    n === void 0 && (n = mi(r ? e : "<!>" + e), n = /** @type {Node} */
    /* @__PURE__ */ Nn(n));
    var i = (
      /** @type {TemplateNode} */
      n.cloneNode(!0)
    );
    return yi(i, i), i;
  };
}
function ki(e, t) {
  e !== null && e.before(
    /** @type {Node} */
    t
  );
}
function Ai(e) {
  return e.endsWith("capture") && e !== "gotpointercapture" && e !== "lostpointercapture";
}
const Ti = [
  "beforeinput",
  "click",
  "change",
  "dblclick",
  "contextmenu",
  "focusin",
  "focusout",
  "input",
  "keydown",
  "keyup",
  "mousedown",
  "mousemove",
  "mouseout",
  "mouseover",
  "mouseup",
  "pointerdown",
  "pointermove",
  "pointerout",
  "pointerover",
  "pointerup",
  "touchend",
  "touchmove",
  "touchstart"
];
function Oi(e) {
  return Ti.includes(e);
}
const xi = {
  // no `class: 'className'` because we handle that separately
  formnovalidate: "formNoValidate",
  ismap: "isMap",
  nomodule: "noModule",
  playsinline: "playsInline",
  readonly: "readOnly",
  defaultvalue: "defaultValue",
  defaultchecked: "defaultChecked",
  srcobject: "srcObject",
  novalidate: "noValidate",
  allowfullscreen: "allowFullscreen",
  disablepictureinpicture: "disablePictureInPicture",
  disableremoteplayback: "disableRemotePlayback"
};
function Pi(e) {
  return e = e.toLowerCase(), xi[e] ?? e;
}
if (h) {
  let e = function(t) {
    if (!(t in globalThis)) {
      let n;
      Object.defineProperty(globalThis, t, {
        configurable: !0,
        // eslint-disable-next-line getter-return
        get: () => {
          if (n !== void 0)
            return n;
          Tr(t);
        },
        set: (r) => {
          n = r;
        }
      });
    }
  };
  e("$state"), e("$effect"), e("$derived"), e("$inspect"), e("$props"), e("$bindable");
}
function Ni(e, t) {
  var n = void 0, r;
  Rn(() => {
    n !== (n = t()) && (r && (be(r), r = null), n && (r = Mn(() => {
      Dt(() => (
        /** @type {(node: Element) => void} */
        n(e)
      ));
    })));
  });
}
function qn(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var i = e.length;
    for (t = 0; t < i; t++) e[t] && (n = qn(e[t])) && (r && (r += " "), r += n);
  } else for (n in e) e[n] && (r && (r += " "), r += n);
  return r;
}
function Ci() {
  for (var e, t, n = 0, r = "", i = arguments.length; n < i; n++) (e = arguments[n]) && (t = qn(e)) && (r && (r += " "), r += t);
  return r;
}
function Wn(e) {
  return typeof e == "object" ? Ci(e) : e ?? "";
}
const $t = [...` 	
\r\f \v\uFEFF`];
function Li(e, t, n) {
  var r = e == null ? "" : "" + e;
  if (n) {
    for (var i in n)
      if (n[i])
        r = r ? r + " " + i : i;
      else if (r.length)
        for (var f = i.length, l = 0; (l = r.indexOf(i, l)) >= 0; ) {
          var u = l + f;
          (l === 0 || $t.includes(r[l - 1])) && (u === r.length || $t.includes(r[u])) ? r = (l === 0 ? "" : r.substring(0, l)) + r.substring(u + 1) : l = u;
        }
  }
  return r === "" ? null : r;
}
function en(e, t = !1) {
  var n = t ? " !important;" : ";", r = "";
  for (var i in e) {
    var f = e[i];
    f != null && f !== "" && (r += " " + i + ": " + f + n);
  }
  return r;
}
function ht(e) {
  return e[0] !== "-" || e[1] !== "-" ? e.toLowerCase() : e;
}
function Ii(e, t) {
  if (t) {
    var n = "", r, i;
    if (Array.isArray(t) ? (r = t[0], i = t[1]) : r = t, e) {
      e = String(e).replaceAll(/\s*\/\*.*?\*\/\s*/g, "").trim();
      var f = !1, l = 0, u = !1, s = [];
      r && s.push(...Object.keys(r).map(ht)), i && s.push(...Object.keys(i).map(ht));
      var o = 0, v = -1;
      const b = e.length;
      for (var a = 0; a < b; a++) {
        var c = e[a];
        if (u ? c === "/" && e[a - 1] === "*" && (u = !1) : f ? f === c && (f = !1) : c === "/" && e[a + 1] === "*" ? u = !0 : c === '"' || c === "'" ? f = c : c === "(" ? l++ : c === ")" && l--, !u && f === !1 && l === 0) {
          if (c === ":" && v === -1)
            v = a;
          else if (c === ";" || a === b - 1) {
            if (v !== -1) {
              var d = ht(e.substring(o, v).trim());
              if (!s.includes(d)) {
                c !== ";" && a++;
                var _ = e.substring(o, a).trim();
                n += " " + _ + ";";
              }
            }
            o = a + 1, v = -1;
          }
        }
      }
    }
    return r && (n += en(r)), i && (n += en(i, !0)), n = n.trim(), n === "" ? null : n;
  }
  return e == null ? null : String(e);
}
function Hn(e, t, n, r, i, f) {
  var l = e.__className;
  if (l !== n || l === void 0) {
    var u = Li(n, r, f);
    u == null ? e.removeAttribute("class") : t ? e.className = u : e.setAttribute("class", u), e.__className = n;
  } else if (f && i !== f)
    for (var s in f) {
      var o = !!f[s];
      (i == null || o !== !!i[s]) && e.classList.toggle(s, o);
    }
  return f;
}
function wt(e, t = {}, n, r) {
  for (var i in n) {
    var f = n[i];
    t[i] !== f && (n[i] == null ? e.style.removeProperty(i) : e.style.setProperty(i, f, r));
  }
}
function Ri(e, t, n, r) {
  var i = e.__style;
  if (i !== t) {
    var f = Ii(t, r);
    f == null ? e.removeAttribute("style") : e.style.cssText = f, e.__style = t;
  } else r && (Array.isArray(r) ? (wt(e, n == null ? void 0 : n[0], r[0]), wt(e, n == null ? void 0 : n[1], r[1], "important")) : wt(e, n, r));
  return r;
}
function Ot(e, t, n = !1) {
  if (e.multiple) {
    if (t == null)
      return;
    if (!xt(t))
      return Cr();
    for (var r of e.options)
      r.selected = t.includes(tn(r));
    return;
  }
  for (r of e.options) {
    var i = tn(r);
    if (Zr(i, t)) {
      r.selected = !0;
      return;
    }
  }
  (!n || t !== void 0) && (e.selectedIndex = -1);
}
function Mi(e) {
  var t = new MutationObserver(() => {
    Ot(e, e.__value);
  });
  t.observe(e, {
    // Listen to option element changes
    childList: !0,
    subtree: !0,
    // because of <optgroup>
    // Listen to option element value attribute changes
    // (doesn't get notified of select value changes,
    // because that property is not reflected as an attribute)
    attributes: !0,
    attributeFilter: ["value"]
  }), Cn(() => {
    t.disconnect();
  });
}
function tn(e) {
  return "__value" in e ? e.__value : e.value;
}
const Me = Symbol("class"), De = Symbol("style"), zn = Symbol("is custom element"), Kn = Symbol("is html");
function Di(e, t) {
  t ? e.hasAttribute("selected") || e.setAttribute("selected", "") : e.removeAttribute("selected");
}
function nn(e, t, n, r) {
  var i = Gn(e);
  i[t] !== (i[t] = n) && (t === "loading" && (e[gr] = n), n == null ? e.removeAttribute(t) : typeof n != "string" && Zn(e).includes(t) ? e[t] = n : e.setAttribute(t, n));
}
function ji(e, t, n, r, i = !1, f = !1) {
  var l = Gn(e), u = l[zn], s = !l[Kn], o = t || {}, v = e.tagName === "OPTION";
  for (var a in t)
    a in n || (n[a] = null);
  n.class ? n.class = Wn(n.class) : n[Me] && (n.class = null), n[De] && (n.style ?? (n.style = null));
  var c = Zn(e);
  for (const w in n) {
    let y = n[w];
    if (v && w === "value" && y == null) {
      e.value = e.__value = "", o[w] = y;
      continue;
    }
    if (w === "class") {
      var d = e.namespaceURI === "http://www.w3.org/1999/xhtml";
      Hn(e, d, y, r, t == null ? void 0 : t[Me], n[Me]), o[w] = y, o[Me] = n[Me];
      continue;
    }
    if (w === "style") {
      Ri(e, y, t == null ? void 0 : t[De], n[De]), o[w] = y, o[De] = n[De];
      continue;
    }
    var _ = o[w];
    if (!(y === _ && !(y === void 0 && e.hasAttribute(w)))) {
      o[w] = y;
      var b = w[0] + w[1];
      if (b !== "$$")
        if (b === "on") {
          const T = {}, V = "$$" + w;
          let x = w.slice(2);
          var g = Oi(x);
          if (Ai(x) && (x = x.slice(0, -7), T.capture = !0), !g && _) {
            if (y != null) continue;
            e.removeEventListener(x, o[V], T), o[V] = null;
          }
          if (y != null)
            if (g)
              e[`__${x}`] = y, pi([x]);
            else {
              let ot = function(k) {
                o[w].call(this, k);
              };
              o[V] = gi(x, e, ot, T);
            }
          else g && (e[`__${x}`] = void 0);
        } else if (w === "style")
          nn(e, w, y);
        else if (w === "autofocus")
          ni(
            /** @type {HTMLElement} */
            e,
            !!y
          );
        else if (!u && (w === "__value" || w === "value" && y != null))
          e.value = e.__value = y;
        else if (w === "selected" && v)
          Di(
            /** @type {HTMLOptionElement} */
            e,
            y
          );
        else {
          var S = w;
          s || (S = Pi(S));
          var R = S === "defaultValue" || S === "defaultChecked";
          if (y == null && !u && !R)
            if (l[w] = null, S === "value" || S === "checked") {
              let T = (
                /** @type {HTMLInputElement} */
                e
              );
              const V = t === void 0;
              if (S === "value") {
                let x = T.defaultValue;
                T.removeAttribute(S), T.defaultValue = x, T.value = T.__value = V ? x : null;
              } else {
                let x = T.defaultChecked;
                T.removeAttribute(S), T.defaultChecked = x, T.checked = V ? x : !1;
              }
            } else
              e.removeAttribute(w);
          else R || c.includes(S) && (u || typeof y != "string") ? (e[S] = y, S in l && (l[S] = N)) : typeof y != "function" && nn(e, S, y);
        }
    }
  }
  return o;
}
function Fi(e, t, n = [], r = [], i, f = !1, l = !1) {
  kn(n, r, (u) => {
    var s = void 0, o = {}, v = e.nodeName === "SELECT", a = !1;
    if (Rn(() => {
      var d = t(...u.map(J)), _ = ji(
        e,
        s,
        d,
        i,
        f,
        l
      );
      a && v && "value" in d && Ot(
        /** @type {HTMLSelectElement} */
        e,
        d.value
      );
      for (let g of Object.getOwnPropertySymbols(o))
        d[g] || be(o[g]);
      for (let g of Object.getOwnPropertySymbols(d)) {
        var b = d[g];
        g.description === ar && (!s || b !== s[g]) && (o[g] && be(o[g]), o[g] = Mn(() => Ni(e, () => b))), _[g] = b;
      }
      s = _;
    }), v) {
      var c = (
        /** @type {HTMLSelectElement} */
        e
      );
      Dt(() => {
        Ot(
          c,
          /** @type {Record<string | symbol, any>} */
          s.value,
          !0
        ), Mi(c);
      });
    }
    a = !0;
  });
}
function Gn(e) {
  return (
    /** @type {Record<string | symbol, unknown>} **/
    // @ts-expect-error
    e.__attributes ?? (e.__attributes = {
      [zn]: e.nodeName.includes("-"),
      [Kn]: e.namespaceURI === sr
    })
  );
}
var rn = /* @__PURE__ */ new Map();
function Zn(e) {
  var t = e.getAttribute("is") || e.nodeName, n = rn.get(t);
  if (n) return n;
  rn.set(t, n = []);
  for (var r, i = e, f = Element.prototype; f !== i; ) {
    r = cr(i);
    for (var l in r)
      r[l].set && n.push(l);
    i = an(i);
  }
  return n;
}
function Ui(e, t, n = t) {
  var r = /* @__PURE__ */ new WeakSet();
  ii(e, "input", async (i) => {
    h && e.type === "checkbox" && Yt();
    var f = i ? e.defaultValue : e.value;
    if (f = bt(e) ? gt(f) : f, n(f), A !== null && r.add(A), await _i(), f !== (f = t())) {
      var l = e.selectionStart, u = e.selectionEnd, s = e.value.length;
      if (e.value = f ?? "", u !== null) {
        var o = e.value.length;
        l === u && u === s && o > s ? (e.selectionStart = o, e.selectionEnd = o) : (e.selectionStart = l, e.selectionEnd = Math.min(u, o));
      }
    }
  }), // If we are hydrating and the value has since changed,
  // then use the updated value from the input instead.
  // If defaultValue is set, then value == defaultValue
  // TODO Svelte 6: remove input.value check and set to empty string?
  jt(t) == null && e.value && (n(bt(e) ? gt(e.value) : e.value), A !== null && r.add(A)), In(() => {
    h && e.type === "checkbox" && Yt();
    var i = t();
    if (e === document.activeElement) {
      var f = (
        /** @type {Batch} */
        Ze ?? A
      );
      if (r.has(f))
        return;
    }
    bt(e) && i === gt(e.value) || e.type === "date" && !i && !e.value || i !== e.value && (e.value = i ?? "");
  });
}
function bt(e) {
  var t = e.type;
  return t === "number" || t === "range";
}
function gt(e) {
  return e === "" ? null : +e;
}
function fn(e, t) {
  return e === t || (e == null ? void 0 : e[de]) === t;
}
function Vi(e = {}, t, n, r) {
  return Dt(() => {
    var i, f;
    return In(() => {
      i = f, f = [], jt(() => {
        e !== n(...f) && (t(e, ...f), i && fn(n(...i), e) && t(null, ...i));
      });
    }), () => {
      ut(() => {
        f && fn(n(...f), e) && t(null, ...f);
      });
    };
  }), e;
}
let Ge = !1;
function Bi(e) {
  var t = Ge;
  try {
    return Ge = !1, [e(), Ge];
  } finally {
    Ge = t;
  }
}
function je(e, t, n, r) {
  var R;
  var i = (n & fr) !== 0, f = (n & lr) !== 0, l = (
    /** @type {V} */
    r
  ), u = !0, s = () => (u && (u = !1, l = f ? jt(
    /** @type {() => V} */
    r
  ) : (
    /** @type {V} */
    r
  )), l), o;
  if (i) {
    var v = de in e || br in e;
    o = ((R = Fe(e, t)) == null ? void 0 : R.set) ?? (v && t in e ? (w) => e[t] = w : void 0);
  }
  var a, c = !1;
  i ? [a, c] = Bi(() => (
    /** @type {V} */
    e[t]
  )) : a = /** @type {V} */
  e[t], a === void 0 && r !== void 0 && (a = s(), o && (Ar(t), o(a)));
  var d;
  if (d = () => {
    var w = (
      /** @type {V} */
      e[t]
    );
    return w === void 0 ? s() : (u = !0, w);
  }, (n & ir) === 0)
    return d;
  if (o) {
    var _ = e.$$legacy;
    return (
      /** @type {() => V} */
      (function(w, y) {
        return arguments.length > 0 ? ((!y || _ || c) && o(y ? d() : w), w) : d();
      })
    );
  }
  var b = !1, g = ((n & rr) !== 0 ? It : Hr)(() => (b = !1, d()));
  h && (g.label = t), i && J(g);
  var S = (
    /** @type {Effect} */
    E
  );
  return (
    /** @type {() => V} */
    (function(w, y) {
      if (arguments.length > 0) {
        const T = y ? J(g) : i ? ke(w) : w;
        return ie(g, T), b = !0, l !== void 0 && (l = T), w;
      }
      return Ee && b || (S.f & Q) !== 0 ? g.v : J(g);
    })
  );
}
var Yi = /* @__PURE__ */ Si("<div><input/></div>");
function Gi(e, t) {
  Mr(t, !0);
  let n = je(t, "value", 15, 0), r = je(t, "defaultValue", 3, 0), i = je(t, "disabled", 3, !1), f = je(t, "readOnly", 3, !1), l = je(t, "inputProps", 19, () => ({})), u, s = null, o = null;
  Qn(async () => {
    if (!u) return;
    const k = u;
    k.value = String(n() ?? r() ?? 0);
    const P = { renderer: tr };
    t.min !== void 0 && (P.min = t.min), t.max !== void 0 && (P.max = t.max), t.step !== void 0 && (P.step = t.step), t.decimals !== void 0 && (P.decimals = t.decimals), t.prefix !== void 0 && (P.prefix = t.prefix), t.suffix !== void 0 && (P.postfix = t.suffix), t.coreOptions && Object.assign(P, t.coreOptions), s = er(k, P);
    const Ft = () => {
      var me;
      const m = Number(k.value);
      n(m), (me = t.onChange) == null || me.call(t, { value: m, meta: { source: "user", action: "input" } });
    };
    k.addEventListener("change", Ft);
    const Ut = [
      {
        event: "touchspin.on.min",
        handler: () => {
          var m;
          return (m = t.onOnMin) == null ? void 0 : m.call(t);
        }
      },
      {
        event: "touchspin.on.max",
        handler: () => {
          var m;
          return (m = t.onOnMax) == null ? void 0 : m.call(t);
        }
      },
      {
        event: "touchspin.on.startspin",
        handler: () => {
          var m;
          return (m = t.onOnStartSpin) == null ? void 0 : m.call(t);
        }
      },
      {
        event: "touchspin.on.stopspin",
        handler: () => {
          var m;
          return (m = t.onOnStopSpin) == null ? void 0 : m.call(t);
        }
      },
      {
        event: "touchspin.on.startupspin",
        handler: () => {
          var m;
          return (m = t.onOnStartUpSpin) == null ? void 0 : m.call(t);
        }
      },
      {
        event: "touchspin.on.startdownspin",
        handler: () => {
          var m;
          return (m = t.onOnStartDownSpin) == null ? void 0 : m.call(t);
        }
      },
      {
        event: "touchspin.on.stopupspin",
        handler: () => {
          var m;
          return (m = t.onOnStopUpSpin) == null ? void 0 : m.call(t);
        }
      },
      {
        event: "touchspin.on.stopdownspin",
        handler: () => {
          var m;
          return (m = t.onOnStopDownSpin) == null ? void 0 : m.call(t);
        }
      },
      {
        event: "touchspin.on.speedchange",
        handler: () => {
          var m;
          return (m = t.onOnSpeedChange) == null ? void 0 : m.call(t);
        }
      }
    ];
    Ut.forEach(({ event: m, handler: me }) => {
      k.addEventListener(m, me);
    }), o = () => {
      k.removeEventListener("change", Ft), Ut.forEach(({ event: m, handler: me }) => {
        k.removeEventListener(m, me);
      }), s == null || s.destroy(), s = null;
    };
  }), $n(() => {
    o && o();
  }), _t(() => {
    s && n() !== void 0 && s.setValue(n());
  }), _t(() => {
    if (!s) return;
    const k = {};
    t.min !== void 0 && (k.min = t.min), t.max !== void 0 && (k.max = t.max), t.step !== void 0 && (k.step = t.step), t.decimals !== void 0 && (k.decimals = t.decimals), t.prefix !== void 0 && (k.prefix = t.prefix), t.suffix !== void 0 && (k.postfix = t.suffix), s.updateSettings(k);
  }), _t(() => {
    u && (i() !== void 0 && (u.disabled = i()), f() !== void 0 && (u.readOnly = f()));
  });
  function v() {
    u == null || u.focus();
  }
  function a() {
    u == null || u.blur();
  }
  function c() {
    s == null || s.upOnce();
  }
  function d() {
    s == null || s.downOnce();
  }
  function _() {
    return (s == null ? void 0 : s.getValue()) ?? 0;
  }
  function b(k) {
    var P;
    n(k), s == null || s.setValue(k), (P = t.onChange) == null || P.call(t, { value: k, meta: { source: "api", action: "setValue" } });
  }
  function g() {
    s == null || s.startUpSpin();
  }
  function S() {
    s == null || s.startDownSpin();
  }
  function R() {
    s == null || s.stopSpin();
  }
  function w(k) {
    s == null || s.updateSettings(k);
  }
  var y = {
    focus: v,
    blur: a,
    increment: c,
    decrement: d,
    getValue: _,
    setValue: b,
    startUpSpin: g,
    startDownSpin: S,
    stopSpin: R,
    updateSettings: w
  }, T = Yi(), V = ti(T), x = (k) => {
    var P;
    return (P = t.onBlur) == null ? void 0 : P.call(t, k);
  }, ot = (k) => {
    var P;
    return (P = t.onFocus) == null ? void 0 : P.call(t, k);
  };
  return Fi(
    V,
    () => ({
      class: t.inputClass,
      name: t.name,
      id: t.id,
      disabled: i(),
      readonly: f(),
      "data-testid": t.dataTestid ? `${t.dataTestid}-input` : void 0,
      onblur: x,
      onfocus: ot,
      ...l()
    }),
    void 0,
    void 0,
    void 0,
    !0
  ), Vi(V, (k) => u = k, () => u), si(() => Hn(T, 1, Wn(t.class))), Ui(V, n), ki(e, T), Dr(y);
}
export {
  Gi as default
};
