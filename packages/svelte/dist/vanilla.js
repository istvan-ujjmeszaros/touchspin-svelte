var Jn = Object.defineProperty;
var Bt = (e) => {
  throw TypeError(e);
};
var Qn = (e, t, n) => t in e ? Jn(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var ye = (e, t, n) => Qn(e, typeof t != "symbol" ? t + "" : t, n), vt = (e, t, n) => t.has(e) || Bt("Cannot " + n);
var O = (e, t, n) => (vt(e, t, "read from private field"), n ? n.call(e) : t.get(e)), J = (e, t, n) => t.has(e) ? Bt("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n), re = (e, t, n, r) => (vt(e, t, "write to private field"), r ? r.call(e, n) : t.set(e, n), n), q = (e, t, n) => (vt(e, t, "access private method"), n);
import { onMount as $n, onDestroy as er } from "svelte";
import { TouchSpin as tr } from "@touchspin/core";
import { VanillaRenderer as nr } from "@touchspin/renderer-vanilla";
const rr = "5";
var un;
typeof window < "u" && ((un = window.__svelte ?? (window.__svelte = {})).v ?? (un.v = /* @__PURE__ */ new Set())).add(rr);
const ir = 1, fr = 4, lr = 8, ur = 16, N = Symbol(), sr = Symbol("filename"), ar = "http://www.w3.org/1999/xhtml", or = "@attach";
var sn, an;
const Yt = (an = (sn = globalThis.process) == null ? void 0 : sn.env) == null ? void 0 : an.NODE_ENV, h = Yt && !Yt.toLowerCase().startsWith("prod");
var Pt = Array.isArray, cr = Array.prototype.indexOf, we = Object.defineProperty, Fe = Object.getOwnPropertyDescriptor, vr = Object.getOwnPropertyDescriptors, dr = Object.prototype, _r = Array.prototype, on = Object.getPrototypeOf;
function hr(e) {
  for (var t = 0; t < e.length; t++)
    e[t]();
}
function cn() {
  var e, t, n = new Promise((r, i) => {
    e = r, t = i;
  });
  return { promise: n, resolve: e, reject: t };
}
const I = 2, Nt = 4, Ct = 8, ge = 16, pe = 32, Re = 64, Lt = 128, D = 1024, Y = 2048, ne = 4096, Ae = 8192, ee = 16384, It = 32768, Xe = 1 << 17, wr = 1 << 18, ft = 1 << 19, br = 1 << 20, z = 256, Je = 512, Ve = 32768, Qe = 1 << 21, lt = 1 << 22, ve = 1 << 23, de = Symbol("$state"), gr = Symbol("legacy props"), pr = Symbol(""), vn = Symbol("proxy path"), Se = new class extends Error {
  constructor() {
    super(...arguments);
    ye(this, "name", "StaleReactionError");
    ye(this, "message", "The reaction that called `getAbortSignal()` was re-run or destroyed");
  }
}();
function Er() {
  if (h) {
    const e = new Error("async_derived_orphan\nCannot create a `$derived(...)` with an `await` expression outside of an effect tree\nhttps://svelte.dev/e/async_derived_orphan");
    throw e.name = "Svelte error", e;
  } else
    throw new Error("https://svelte.dev/e/async_derived_orphan");
}
function qt() {
  if (h) {
    const e = new Error("bind_invalid_checkbox_value\nUsing `bind:value` together with a checkbox input is not allowed. Use `bind:checked` instead\nhttps://svelte.dev/e/bind_invalid_checkbox_value");
    throw e.name = "Svelte error", e;
  } else
    throw new Error("https://svelte.dev/e/bind_invalid_checkbox_value");
}
function mr() {
  if (h) {
    const e = new Error(`derived_references_self
A derived value cannot reference itself recursively
https://svelte.dev/e/derived_references_self`);
    throw e.name = "Svelte error", e;
  } else
    throw new Error("https://svelte.dev/e/derived_references_self");
}
function yr(e) {
  if (h) {
    const t = new Error(`effect_in_teardown
\`${e}\` cannot be used inside an effect cleanup function
https://svelte.dev/e/effect_in_teardown`);
    throw t.name = "Svelte error", t;
  } else
    throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function Sr() {
  if (h) {
    const e = new Error("effect_in_unowned_derived\nEffect cannot be created inside a `$derived` value that was not itself created inside an effect\nhttps://svelte.dev/e/effect_in_unowned_derived");
    throw e.name = "Svelte error", e;
  } else
    throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function kr(e) {
  if (h) {
    const t = new Error(`effect_orphan
\`${e}\` can only be used inside an effect (e.g. during component initialisation)
https://svelte.dev/e/effect_orphan`);
    throw t.name = "Svelte error", t;
  } else
    throw new Error("https://svelte.dev/e/effect_orphan");
}
function Ar() {
  if (h) {
    const e = new Error(`effect_update_depth_exceeded
Maximum update depth exceeded. This typically indicates that an effect reads and writes the same piece of state
https://svelte.dev/e/effect_update_depth_exceeded`);
    throw e.name = "Svelte error", e;
  } else
    throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function Tr(e) {
  if (h) {
    const t = new Error(`props_invalid_value
Cannot do \`bind:${e}={undefined}\` when \`${e}\` has a fallback value
https://svelte.dev/e/props_invalid_value`);
    throw t.name = "Svelte error", t;
  } else
    throw new Error("https://svelte.dev/e/props_invalid_value");
}
function Or(e) {
  if (h) {
    const t = new Error(`rune_outside_svelte
The \`${e}\` rune is only available inside \`.svelte\` and \`.svelte.js/ts\` files
https://svelte.dev/e/rune_outside_svelte`);
    throw t.name = "Svelte error", t;
  } else
    throw new Error("https://svelte.dev/e/rune_outside_svelte");
}
function xr() {
  if (h) {
    const e = new Error("state_descriptors_fixed\nProperty descriptors defined on `$state` objects must contain `value` and always be `enumerable`, `configurable` and `writable`.\nhttps://svelte.dev/e/state_descriptors_fixed");
    throw e.name = "Svelte error", e;
  } else
    throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function Pr() {
  if (h) {
    const e = new Error("state_prototype_fixed\nCannot set prototype of `$state` object\nhttps://svelte.dev/e/state_prototype_fixed");
    throw e.name = "Svelte error", e;
  } else
    throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function Nr() {
  if (h) {
    const e = new Error("state_unsafe_mutation\nUpdating state inside `$derived(...)`, `$inspect(...)` or a template expression is forbidden. If the value should not be reactive, declare it without `$state`\nhttps://svelte.dev/e/state_unsafe_mutation");
    throw e.name = "Svelte error", e;
  } else
    throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
var dn = "font-weight: bold", _n = "font-weight: normal";
function Cr(e) {
  h ? console.warn(`%c[svelte] await_reactivity_loss
%cDetected reactivity loss when reading \`${e}\`. This happens when state is read in an async function after an earlier \`await\`
https://svelte.dev/e/await_reactivity_loss`, dn, _n) : console.warn("https://svelte.dev/e/await_reactivity_loss");
}
function Lr() {
  h ? console.warn("%c[svelte] select_multiple_invalid_value\n%cThe `value` property of a `<select multiple>` element should be an array, but it received a non-array value. The selection will be kept as is.\nhttps://svelte.dev/e/select_multiple_invalid_value", dn, _n) : console.warn("https://svelte.dev/e/select_multiple_invalid_value");
}
function hn(e) {
  return e === this.v;
}
function Ir(e, t) {
  return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function";
}
function Rr(e) {
  return !Ir(e, this.v);
}
let Mr = !1;
function wn(e) {
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
function ie(e, t) {
  return e.label = t, bn(e.v, t), e;
}
function bn(e, t) {
  var n;
  return (n = e == null ? void 0 : e[vn]) == null || n.call(e, t), e;
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
function Wt(e) {
  He = e;
}
function Dr(e, t = !1, n) {
  U = {
    p: U,
    c: null,
    e: null,
    s: e,
    x: null,
    l: null
  }, h && (U.function = n, He = n);
}
function jr(e) {
  var t = (
    /** @type {ComponentContext} */
    U
  ), n = t.e;
  if (n !== null) {
    t.e = null;
    for (var r of n)
      In(r);
  }
  return e !== void 0 && (t.x = e), U = t.p, h && (He = (U == null ? void 0 : U.function) ?? null), e ?? /** @type {T} */
  {};
}
function gn() {
  return !0;
}
let oe = [];
function pn() {
  var e = oe;
  oe = [], hr(e);
}
function ut(e) {
  if (oe.length === 0 && !Ue) {
    var t = oe;
    queueMicrotask(() => {
      t === oe && pn();
    });
  }
  oe.push(e);
}
function Fr() {
  for (; oe.length > 0; )
    pn();
}
const Et = /* @__PURE__ */ new WeakMap();
function Ur(e) {
  var t = E;
  if (t === null)
    return p.f |= ve, e;
  if (h && e instanceof Error && !Et.has(e) && Et.set(e, Vr(e, t)), (t.f & It) === 0) {
    if ((t.f & Lt) === 0)
      throw !t.parent && e instanceof Error && En(e), e;
    t.b.error(e);
  } else
    tt(e, t);
}
function tt(e, t) {
  for (; t !== null; ) {
    if ((t.f & Lt) !== 0)
      try {
        t.b.error(e);
        return;
      } catch (n) {
        e = n;
      }
    t = t.parent;
  }
  throw e instanceof Error && En(e), e;
}
function Vr(e, t) {
  var l, u, s;
  const n = Fe(e, "message");
  if (!(n && !n.configurable)) {
    for (var r = "	", i = `
${r}in ${((l = t.fn) == null ? void 0 : l.name) || "<unknown>"}`, f = t.ctx; f !== null; )
      i += `
${r}in ${(u = f.function) == null ? void 0 : u[sr].split("/").pop()}`, f = f.p;
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
function En(e) {
  const t = Et.get(e);
  t && (we(e, "message", {
    value: t.message
  }), we(e, "stack", {
    value: t.stack
  }));
}
const Ke = /* @__PURE__ */ new Set();
let A = null, Ze = null, C = null, Ht = /* @__PURE__ */ new Set(), Z = [], st = null, mt = !1, Ue = !1;
var Oe, xe, Pe, ce, We, Ne, Ce, L, yt, ae, St, mn;
const it = class it {
  constructor() {
    J(this, L);
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
    J(this, Oe, /* @__PURE__ */ new Map());
    /**
     * When the batch is committed (and the DOM is updated), we need to remove old branches
     * and append new ones by calling the functions added inside (if/each/key/etc) blocks
     * @type {Set<() => void>}
     */
    J(this, xe, /* @__PURE__ */ new Set());
    /**
     * The number of async effects that are currently in flight
     */
    J(this, Pe, 0);
    /**
     * The number of async effects that are currently in flight, _not_ inside a pending boundary
     */
    J(this, ce, 0);
    /**
     * A deferred that resolves when the batch is committed, used with `settled()`
     * TODO replace with Promise.withResolvers once supported widely enough
     * @type {{ promise: Promise<void>, resolve: (value?: any) => void, reject: (reason: unknown) => void } | null}
     */
    J(this, We, null);
    /**
     * Deferred effects (which run after async work has completed) that are DIRTY
     * @type {Effect[]}
     */
    J(this, Ne, []);
    /**
     * Deferred effects that are MAYBE_DIRTY
     * @type {Effect[]}
     */
    J(this, Ce, []);
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
    Z = [], Ze = null, this.apply();
    var n = {
      parent: null,
      effect: null,
      effects: [],
      render_effects: [],
      block_effects: []
    };
    for (const r of t)
      q(this, L, yt).call(this, r, n);
    q(this, L, St).call(this), O(this, ce) > 0 ? (q(this, L, ae).call(this, n.effects), q(this, L, ae).call(this, n.render_effects), q(this, L, ae).call(this, n.block_effects)) : (Ze = this, A = null, zt(n.render_effects), zt(n.effects), Ze = null), C = null;
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
    if (Z.length > 0) {
      if (this.activate(), yn(), A !== null && A !== this)
        return;
    } else
      q(this, L, St).call(this);
    this.deactivate();
    for (const t of Ht)
      if (Ht.delete(t), t(), A !== null)
        break;
  }
  /**
   *
   * @param {boolean} blocking
   */
  increment(t) {
    re(this, Pe, O(this, Pe) + 1), t && re(this, ce, O(this, ce) + 1);
  }
  /**
   *
   * @param {boolean} blocking
   */
  decrement(t) {
    re(this, Pe, O(this, Pe) - 1), t && re(this, ce, O(this, ce) - 1);
    for (const n of O(this, Ne))
      F(n, Y), Le(n);
    for (const n of O(this, Ce))
      F(n, ne), Le(n);
    re(this, Ne, []), re(this, Ce, []), this.flush();
  }
  /** @param {() => void} fn */
  add_callback(t) {
    O(this, xe).add(t);
  }
  settled() {
    return (O(this, We) ?? re(this, We, cn())).promise;
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
yt = function(t, n) {
  var v;
  t.f ^= D;
  for (var r = t.first; r !== null; ) {
    var i = r.f, f = (i & (pe | Re)) !== 0, l = f && (i & D) !== 0, u = l || (i & Ae) !== 0 || this.skipped_effects.has(r);
    if ((r.f & Lt) !== 0 && ((v = r.b) != null && v.is_pending()) && (n = {
      parent: n,
      effect: r,
      effects: [],
      render_effects: [],
      block_effects: []
    }), !u && r.fn !== null) {
      f ? r.f ^= D : (i & Nt) !== 0 ? n.effects.push(r) : ze(r) && ((r.f & ge) !== 0 && n.block_effects.push(r), qe(r));
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
}, St = function() {
  if (O(this, ce) === 0) {
    for (const t of O(this, xe)) t();
    O(this, xe).clear();
  }
  O(this, Pe) === 0 && q(this, L, mn).call(this);
}, mn = function() {
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
          Sn(a, s, o, v);
        if (Z.length > 0) {
          A = l, l.apply();
          for (const a of Z)
            q(i = l, L, yt).call(i, a, r);
          Z = [], l.deactivate();
        }
      }
    }
    A = null, C = t;
  }
  this.committed = !0, Ke.delete(this), (f = O(this, We)) == null || f.resolve();
};
let nt = it;
function Br(e) {
  var t = Ue;
  Ue = !0;
  try {
    for (var n; ; ) {
      if (Fr(), Z.length === 0 && (A == null || A.flush(), Z.length === 0))
        return st = null, /** @type {T} */
        n;
      yn();
    }
  } finally {
    Ue = t;
  }
}
function yn() {
  var e = Te;
  mt = !0;
  try {
    var t = 0;
    for (Xt(!0); Z.length > 0; ) {
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
        Yr();
      }
      n.process(Z), le.clear();
    }
  } finally {
    mt = !1, Xt(e), st = null;
  }
}
function Yr() {
  try {
    Ar();
  } catch (e) {
    h && we(e, "stack", { value: "" }), tt(e, st);
  }
}
let K = null;
function zt(e) {
  var t = e.length;
  if (t !== 0) {
    for (var n = 0; n < t; ) {
      var r = e[n++];
      if ((r.f & (ee | Ae)) === 0 && ze(r) && (K = /* @__PURE__ */ new Set(), qe(r), r.deps === null && r.first === null && r.nodes_start === null && (r.teardown === null && r.ac === null ? Un(r) : r.fn = null), (K == null ? void 0 : K.size) > 0)) {
        le.clear();
        for (const i of K) {
          if ((i.f & (ee | Ae)) !== 0) continue;
          const f = [i];
          let l = i.parent;
          for (; l !== null; )
            K.has(l) && (K.delete(l), f.push(l)), l = l.parent;
          for (let u = f.length - 1; u >= 0; u--) {
            const s = f[u];
            (s.f & (ee | Ae)) === 0 && qe(s);
          }
        }
        K.clear();
      }
    }
    K = null;
  }
}
function Sn(e, t, n, r) {
  if (!n.has(e) && (n.add(e), e.reactions !== null))
    for (const i of e.reactions) {
      const f = i.f;
      (f & I) !== 0 ? Sn(
        /** @type {Derived} */
        i,
        t,
        n,
        r
      ) : (f & (lt | ge)) !== 0 && (f & Y) === 0 && // we may have scheduled this one already
      kn(i, t, r) && (F(i, Y), Le(
        /** @type {Effect} */
        i
      ));
    }
}
function kn(e, t, n) {
  const r = n.get(e);
  if (r !== void 0) return r;
  if (e.deps !== null)
    for (const i of e.deps) {
      if (t.includes(i))
        return !0;
      if ((i.f & I) !== 0 && kn(
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
    if (mt && t === E && (n & ge) !== 0)
      return;
    if ((n & (Re | pe)) !== 0) {
      if ((n & D) === 0) return;
      t.f ^= D;
    }
  }
  Z.push(t);
}
function An(e, t, n) {
  const r = Rt;
  if (t.length === 0) {
    n(e.map(r));
    return;
  }
  var i = A, f = (
    /** @type {Effect} */
    E
  ), l = qr();
  Promise.all(t.map((u) => /* @__PURE__ */ Hr(u))).then((u) => {
    l();
    try {
      n([...e.map(r), ...u]);
    } catch (s) {
      (f.f & ee) === 0 && tt(s, f);
    }
    i == null || i.deactivate(), kt();
  }).catch((u) => {
    tt(u, f);
  });
}
function qr() {
  var e = E, t = p, n = U, r = A;
  if (h)
    var i = Be;
  return function() {
    te(e), X(t), $e(n), r == null || r.activate(), h && (Tn(null), et(i));
  };
}
function kt() {
  te(null), X(null), $e(null), h && (Tn(null), et(null));
}
let _e = null;
function Tn(e) {
  _e = e;
}
const Wr = /* @__PURE__ */ new Set();
// @__NO_SIDE_EFFECTS__
function Rt(e) {
  var t = I | Y, n = p !== null && (p.f & I) !== 0 ? (
    /** @type {Derived} */
    p
  ) : null;
  return E === null || n !== null && (n.f & z) !== 0 ? t |= z : E.f |= ft, {
    ctx: U,
    deps: null,
    effects: null,
    equals: hn,
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
function Hr(e, t) {
  let n = (
    /** @type {Effect | null} */
    E
  );
  n === null && Er();
  var r = (
    /** @type {Boundary} */
    n.b
  ), i = (
    /** @type {Promise<V>} */
    /** @type {unknown} */
    void 0
  ), f = xn(
    /** @type {V} */
    N
  ), l = !p, u = /* @__PURE__ */ new Map();
  return si(() => {
    var c;
    h && (_e = E);
    var s = cn();
    i = s.promise;
    try {
      Promise.resolve(e()).then(s.resolve, s.reject).then(() => {
        o === A && o.committed && o.deactivate(), kt();
      });
    } catch (d) {
      s.reject(d), kt();
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
        _ !== Se && (f.f |= ve, Tt(f, _));
      else {
        (f.f & ve) !== 0 && (f.f ^= ve), Tt(f, d);
        for (const [b, g] of u) {
          if (u.delete(b), b === o) break;
          g.reject(Se);
        }
      }
      l && (r.update_pending_count(-1), o.decrement(v));
    };
    s.promise.then(a, (d) => a(null, d || "unknown"));
  }), Ln(() => {
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
function zr(e) {
  const t = /* @__PURE__ */ Rt(e);
  return t.equals = Rr, t;
}
function At(e) {
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
let dt = [];
function Kr(e) {
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
function Mt(e) {
  var t, n = E;
  if (te(Kr(e)), h) {
    let r = Ie;
    Kt(/* @__PURE__ */ new Set());
    try {
      dt.includes(e) && mr(), dt.push(e), e.f &= ~Ve, At(e), t = Ot(e);
    } finally {
      te(n), Kt(r), dt.pop();
    }
  } else
    try {
      e.f &= ~Ve, At(e), t = Ot(e);
    } finally {
      te(n);
    }
  return t;
}
function On(e) {
  var t = Mt(e);
  if (e.equals(t) || (e.v = t, e.wv = Bn()), !Ee)
    if (C !== null)
      C.set(e, e.v);
    else {
      var n = (fe || (e.f & z) !== 0) && e.deps !== null ? ne : D;
      F(e, n);
    }
}
let Ie = /* @__PURE__ */ new Set();
const le = /* @__PURE__ */ new Map();
function Kt(e) {
  Ie = e;
}
let Dt = !1;
function Gr() {
  Dt = !0;
}
function xn(e, t) {
  var n = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: e,
    reactions: null,
    equals: hn,
    rv: 0,
    wv: 0
  };
  return n;
}
// @__NO_SIDE_EFFECTS__
function Q(e, t) {
  const n = xn(e);
  return vi(n), n;
}
function $(e, t, n = !1) {
  p !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
  // to ensure we error if state is set inside an inspect effect
  (!G || (p.f & Xe) !== 0) && gn() && (p.f & (I | ge | lt | Xe)) !== 0 && !(j != null && j.includes(e)) && Nr();
  let r = n ? ke(t) : t;
  return h && bn(
    r,
    /** @type {string} */
    e.label
  ), Tt(e, r);
}
function Tt(e, t) {
  if (!e.equals(t)) {
    var n = e.v;
    Ee ? le.set(e, t) : le.set(e, n), e.v = t;
    var r = nt.ensure();
    if (r.capture(e, n), h) {
      if (E !== null) {
        const i = wn("UpdatedAt");
        if (i !== null) {
          e.updated ?? (e.updated = /* @__PURE__ */ new Map());
          let f = e.updated.get(i.stack);
          f || (f = { error: i, count: 0 }, e.updated.set(i.stack, f)), f.count++;
        }
      }
      E !== null && (e.set_during_effect = !0);
    }
    (e.f & I) !== 0 && ((e.f & Y) !== 0 && Mt(
      /** @type {Derived} */
      e
    ), F(e, (e.f & z) === 0 ? D : ne)), e.wv = Bn(), Nn(e, Y), E !== null && (E.f & D) !== 0 && (E.f & (pe | Re)) === 0 && (W === null ? di([e]) : W.push(e)), h && Ie.size > 0 && !Dt && Pn();
  }
  return t;
}
function Pn() {
  Dt = !1;
  const e = Array.from(Ie);
  for (const t of e)
    (t.f & D) !== 0 && F(t, ne), ze(t) && qe(t);
  Ie.clear();
}
function _t(e) {
  $(e, e.v + 1);
}
function Nn(e, t) {
  var n = e.reactions;
  if (n !== null)
    for (var r = n.length, i = 0; i < r; i++) {
      var f = n[i], l = f.f;
      if (h && (l & Xe) !== 0) {
        Ie.add(f);
        continue;
      }
      var u = (l & Y) === 0;
      u && F(f, t), (l & I) !== 0 ? (l & Ve) === 0 && (f.f |= Ve, Nn(
        /** @type {Derived} */
        f,
        ne
      )) : u && ((l & ge) !== 0 && K !== null && K.add(
        /** @type {Effect} */
        f
      ), Le(
        /** @type {Effect} */
        f
      ));
    }
}
const Zr = /^[a-zA-Z_$][a-zA-Z_$0-9]*$/;
function ke(e) {
  if (typeof e != "object" || e === null || de in e)
    return e;
  const t = on(e);
  if (t !== dr && t !== _r)
    return e;
  var n = /* @__PURE__ */ new Map(), r = Pt(e), i = /* @__PURE__ */ Q(0), f = he, l = (v) => {
    if (he === f)
      return v();
    var a = p, c = he;
    X(null), Qt(f);
    var d = v();
    return X(a), Qt(c), d;
  };
  r && (n.set("length", /* @__PURE__ */ Q(
    /** @type {any[]} */
    e.length
  )), h && (e = /** @type {any} */
  Qr(
    /** @type {any[]} */
    e
  )));
  var u = "";
  let s = !1;
  function o(v) {
    if (!s) {
      s = !0, u = v, ie(i, `${u} version`);
      for (const [a, c] of n)
        ie(c, se(u, a));
      s = !1;
    }
  }
  return new Proxy(
    /** @type {any} */
    e,
    {
      defineProperty(v, a, c) {
        (!("value" in c) || c.configurable === !1 || c.enumerable === !1 || c.writable === !1) && xr();
        var d = n.get(a);
        return d === void 0 ? d = l(() => {
          var _ = /* @__PURE__ */ Q(c.value);
          return n.set(a, _), h && typeof a == "string" && ie(_, se(u, a)), _;
        }) : $(d, c.value, !0), !0;
      },
      deleteProperty(v, a) {
        var c = n.get(a);
        if (c === void 0) {
          if (a in v) {
            const d = l(() => /* @__PURE__ */ Q(N));
            n.set(a, d), _t(i), h && ie(d, se(u, a));
          }
        } else
          $(c, N), _t(i);
        return !0;
      },
      get(v, a, c) {
        var g;
        if (a === de)
          return e;
        if (h && a === vn)
          return o;
        var d = n.get(a), _ = a in v;
        if (d === void 0 && (!_ || (g = Fe(v, a)) != null && g.writable) && (d = l(() => {
          var S = ke(_ ? v[a] : N), R = /* @__PURE__ */ Q(S);
          return h && ie(R, se(u, a)), R;
        }), n.set(a, d)), d !== void 0) {
          var b = H(d);
          return b === N ? void 0 : b;
        }
        return Reflect.get(v, a, c);
      },
      getOwnPropertyDescriptor(v, a) {
        var c = Reflect.getOwnPropertyDescriptor(v, a);
        if (c && "value" in c) {
          var d = n.get(a);
          d && (c.value = H(d));
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
            var g = d ? ke(v[a]) : N, S = /* @__PURE__ */ Q(g);
            return h && ie(S, se(u, a)), S;
          }), n.set(a, c));
          var _ = H(c);
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
            S !== void 0 ? $(S, N) : g in v && (S = l(() => /* @__PURE__ */ Q(N)), n.set(g + "", S), h && ie(S, se(u, g)));
          }
        if (_ === void 0)
          (!b || (V = Fe(v, a)) != null && V.writable) && (_ = l(() => /* @__PURE__ */ Q(void 0)), h && ie(_, se(u, a)), $(_, ke(c)), n.set(a, _));
        else {
          b = _.v !== N;
          var R = l(() => ke(c));
          $(_, R);
        }
        var w = Reflect.getOwnPropertyDescriptor(v, a);
        if (w != null && w.set && w.set.call(d, c), !b) {
          if (r && typeof a == "string") {
            var y = (
              /** @type {Source<number>} */
              n.get("length")
            ), T = Number(a);
            Number.isInteger(T) && T >= y.v && $(y, T + 1);
          }
          _t(i);
        }
        return !0;
      },
      ownKeys(v) {
        H(i);
        var a = Reflect.ownKeys(v).filter((_) => {
          var b = n.get(_);
          return b === void 0 || b.v !== N;
        });
        for (var [c, d] of n)
          d.v !== N && !(c in v) && a.push(c);
        return a;
      },
      setPrototypeOf() {
        Pr();
      }
    }
  );
}
function se(e, t) {
  return typeof t == "symbol" ? `${e}[Symbol(${t.description ?? ""})]` : Zr.test(t) ? `${e}.${t}` : /^\d+$/.test(t) ? `${e}[${t}]` : `${e}['${t}']`;
}
function Gt(e) {
  try {
    if (e !== null && typeof e == "object" && de in e)
      return e[de];
  } catch {
  }
  return e;
}
function Xr(e, t) {
  return Object.is(Gt(e), Gt(t));
}
const Jr = /* @__PURE__ */ new Set([
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
function Qr(e) {
  return new Proxy(e, {
    get(t, n, r) {
      var i = Reflect.get(t, n, r);
      return Jr.has(
        /** @type {string} */
        n
      ) ? function(...f) {
        Gr();
        var l = i.apply(this, f);
        return Pn(), l;
      } : i;
    }
  });
}
var $r, ei;
// @__NO_SIDE_EFFECTS__
function Cn(e) {
  return $r.call(e);
}
// @__NO_SIDE_EFFECTS__
function ti(e) {
  return ei.call(e);
}
function ni(e, t) {
  return /* @__PURE__ */ Cn(e);
}
function ri(e, t) {
  if (t) {
    const n = document.body;
    e.autofocus = !0, ut(() => {
      document.activeElement === n && e.focus();
    });
  }
}
let Zt = !1;
function ii() {
  Zt || (Zt = !0, document.addEventListener(
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
  X(null), te(null);
  try {
    return e();
  } finally {
    X(t), te(n);
  }
}
function fi(e, t, n, r = n) {
  e.addEventListener(t, () => at(n));
  const i = e.__on_r;
  i ? e.__on_r = () => {
    i(), r(!0);
  } : e.__on_r = () => r(!0), ii();
}
function li(e) {
  E === null && p === null && kr(e), p !== null && (p.f & z) !== 0 && E === null && Sr(), Ee && yr(e);
}
function ui(e, t) {
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
      qe(f), f.f |= It;
    } catch (s) {
      throw be(f), s;
    }
  else t !== null && Le(f);
  if (r) {
    var l = f;
    if (n && l.deps === null && l.teardown === null && l.nodes_start === null && l.first === l.last && // either `null`, or a singular child
    (l.f & ft) === 0 && (l = l.first), l !== null && (l.parent = i, i !== null && ui(l, i), p !== null && (p.f & I) !== 0 && (e & Re) === 0)) {
      var u = (
        /** @type {Derived} */
        p
      );
      (u.effects ?? (u.effects = [])).push(l);
    }
  }
  return f;
}
function Ln(e) {
  const t = ue(Ct, null, !1);
  return F(t, D), t.teardown = e, t;
}
function ht(e) {
  li("$effect"), h && we(e, "name", {
    value: "$effect"
  });
  var t = (
    /** @type {Effect} */
    E.f
  ), n = !p && (t & pe) !== 0 && (t & It) === 0;
  if (n) {
    var r = (
      /** @type {ComponentContext} */
      U
    );
    (r.e ?? (r.e = [])).push(e);
  } else
    return In(e);
}
function In(e) {
  return ue(Nt | br, e, !1);
}
function jt(e) {
  return ue(Nt, e, !1);
}
function si(e) {
  return ue(lt | ft, e, !0);
}
function Rn(e, t = 0) {
  return ue(Ct | t, e, !0);
}
function ai(e, t = [], n = []) {
  An(t, n, (r) => {
    ue(Ct, () => e(...r.map(H)), !0);
  });
}
function Mn(e, t = 0) {
  var n = ue(ge | t, e, !0);
  return h && (n.dev_stack = Be), n;
}
function Dn(e, t = !0) {
  return ue(pe | ft, e, !0, t);
}
function jn(e) {
  var t = e.teardown;
  if (t !== null) {
    const n = Ee, r = p;
    Jt(!0), X(null);
    try {
      t.call(null);
    } finally {
      Jt(n), X(r);
    }
  }
}
function Fn(e, t = !1) {
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
function oi(e) {
  for (var t = e.first; t !== null; ) {
    var n = t.next;
    (t.f & pe) === 0 && be(t), t = n;
  }
}
function be(e, t = !0) {
  var n = !1;
  (t || (e.f & wr) !== 0) && e.nodes_start !== null && e.nodes_end !== null && (ci(
    e.nodes_start,
    /** @type {TemplateNode} */
    e.nodes_end
  ), n = !0), Fn(e, t && !n), rt(e, 0), F(e, ee);
  var r = e.transitions;
  if (r !== null)
    for (const f of r)
      f.stop();
  jn(e);
  var i = e.parent;
  i !== null && i.first !== null && Un(e), h && (e.component_function = null), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes_start = e.nodes_end = e.ac = null;
}
function ci(e, t) {
  for (; e !== null; ) {
    var n = e === t ? null : (
      /** @type {TemplateNode} */
      /* @__PURE__ */ ti(e)
    );
    e.remove(), e = n;
  }
}
function Un(e) {
  var t = e.parent, n = e.prev, r = e.next;
  n !== null && (n.next = r), r !== null && (r.prev = n), t !== null && (t.first === e && (t.first = r), t.last === e && (t.last = n));
}
let Te = !1;
function Xt(e) {
  Te = e;
}
let Ee = !1;
function Jt(e) {
  Ee = e;
}
let p = null, G = !1;
function X(e) {
  p = e;
}
let E = null;
function te(e) {
  E = e;
}
let j = null;
function vi(e) {
  p !== null && (j === null ? j = [e] : j.push(e));
}
let M = null, B = 0, W = null;
function di(e) {
  W = e;
}
let Vn = 1, Ye = 0, he = Ye;
function Qt(e) {
  he = e;
}
let fe = !1;
function Bn() {
  return ++Vn;
}
function ze(e) {
  var a;
  var t = e.f;
  if ((t & Y) !== 0)
    return !0;
  if ((t & ne) !== 0) {
    var n = e.deps, r = (t & z) !== 0;
    if (t & I && (e.f &= ~Ve), n !== null) {
      var i, f, l = (t & Je) !== 0, u = r && E !== null && !fe, s = n.length;
      if ((l || u) && (E === null || (E.f & ee) === 0)) {
        var o = (
          /** @type {Derived} */
          e
        ), v = o.parent;
        for (i = 0; i < s; i++)
          f = n[i], (l || !((a = f == null ? void 0 : f.reactions) != null && a.includes(o))) && (f.reactions ?? (f.reactions = [])).push(o);
        l && (o.f ^= Je), u && v !== null && (v.f & z) === 0 && (o.f ^= z);
      }
      for (i = 0; i < s; i++)
        if (f = n[i], ze(
          /** @type {Derived} */
          f
        ) && On(
          /** @type {Derived} */
          f
        ), f.wv > e.wv)
          return !0;
    }
    (!r || E !== null && !fe) && F(e, D);
  }
  return !1;
}
function Yn(e, t, n = !0) {
  var r = e.reactions;
  if (r !== null && !(j != null && j.includes(e)))
    for (var i = 0; i < r.length; i++) {
      var f = r[i];
      (f.f & I) !== 0 ? Yn(
        /** @type {Derived} */
        f,
        t,
        !1
      ) : t === f && (n ? F(f, Y) : (f.f & D) !== 0 && F(f, ne), Le(
        /** @type {Effect} */
        f
      ));
    }
}
function Ot(e) {
  var b;
  var t = M, n = B, r = W, i = p, f = fe, l = j, u = U, s = G, o = he, v = e.f;
  M = /** @type {null | Value[]} */
  null, B = 0, W = null, fe = (v & z) !== 0 && (G || !Te || p === null), p = (v & (pe | Re)) === 0 ? e : null, j = null, $e(e.ctx), G = !1, he = ++Ye, e.ac !== null && (at(() => {
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
    if (gn() && W !== null && !G && d !== null && (e.f & (I | ne | Y)) === 0)
      for (_ = 0; _ < /** @type {Source[]} */
      W.length; _++)
        Yn(
          W[_],
          /** @type {Effect} */
          e
        );
    return i !== null && i !== e && (Ye++, W !== null && (r === null ? r = W : r.push(.../** @type {Source[]} */
    W))), (e.f & ve) !== 0 && (e.f ^= ve), c;
  } catch (g) {
    return Ur(g);
  } finally {
    e.f ^= Qe, M = t, B = n, W = r, p = i, fe = f, j = l, $e(u), G = s, he = o;
  }
}
function _i(e, t) {
  let n = t.reactions;
  if (n !== null) {
    var r = cr.call(n, e);
    if (r !== -1) {
      var i = n.length - 1;
      i === 0 ? n = t.reactions = null : (n[r] = n[i], n.pop());
    }
  }
  n === null && (t.f & I) !== 0 && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (M === null || !M.includes(t)) && (F(t, ne), (t.f & (z | Je)) === 0 && (t.f ^= Je), At(
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
      _i(e, n[r]);
}
function qe(e) {
  var t = e.f;
  if ((t & ee) === 0) {
    F(e, D);
    var n = E, r = Te;
    if (E = e, Te = !0, h) {
      var i = He;
      Wt(e.component_function);
      var f = (
        /** @type {any} */
        Be
      );
      et(e.dev_stack ?? Be);
    }
    try {
      (t & ge) !== 0 ? oi(e) : Fn(e), jn(e);
      var l = Ot(e);
      e.teardown = typeof l == "function" ? l : null, e.wv = Vn;
      var u;
      h && Mr && (e.f & Y) !== 0 && e.deps;
    } finally {
      Te = r, E = n, h && (Wt(i), et(f));
    }
  }
}
async function hi() {
  await Promise.resolve(), Br();
}
function H(e) {
  var c;
  var t = e.f, n = (t & I) !== 0;
  if (p !== null && !G) {
    var r = E !== null && (E.f & ee) !== 0;
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
    u !== null && (u.f & z) === 0 && (l.f ^= z);
  }
  if (h) {
    if (_e) {
      var s = (_e.f & Qe) !== 0, o = (c = _e.deps) == null ? void 0 : c.includes(e);
      if (!s && !G && !o) {
        Cr(
          /** @type {string} */
          e.label
        );
        var v = wn("TracedAt");
        v && console.warn(v);
      }
    }
    Wr.delete(e);
  }
  if (Ee) {
    if (le.has(e))
      return le.get(e);
    if (n) {
      l = /** @type {Derived} */
      e;
      var a = l.v;
      return ((l.f & D) === 0 && l.reactions !== null || qn(l)) && (a = Mt(l)), le.set(l, a), a;
    }
  } else if (n) {
    if (l = /** @type {Derived} */
    e, C != null && C.has(l))
      return C.get(l);
    ze(l) && On(l);
  }
  if (C != null && C.has(e))
    return C.get(e);
  if ((e.f & ve) !== 0)
    throw e.v;
  return e.v;
}
function qn(e) {
  if (e.v === N) return !0;
  if (e.deps === null) return !1;
  for (const t of e.deps)
    if (le.has(t) || (t.f & I) !== 0 && qn(
      /** @type {Derived} */
      t
    ))
      return !0;
  return !1;
}
function Ft(e) {
  var t = G;
  try {
    return G = !0, e();
  } finally {
    G = t;
  }
}
const wi = -7169;
function F(e, t) {
  e.f = e.f & wi | t;
}
const bi = /* @__PURE__ */ new Set(), gi = /* @__PURE__ */ new Set();
function pi(e, t, n, r = {}) {
  function i(f) {
    if (r.capture || mi.call(t, f), !f.cancelBubble)
      return at(() => n == null ? void 0 : n.call(this, f));
  }
  return e.startsWith("pointer") || e.startsWith("touch") || e === "wheel" ? ut(() => {
    t.addEventListener(e, i, r);
  }) : t.addEventListener(e, i, r), i;
}
function Ei(e) {
  for (var t = 0; t < e.length; t++)
    bi.add(e[t]);
  for (var n of gi)
    n(e);
}
let $t = null;
function mi(e) {
  var R;
  var t = this, n = (
    /** @type {Node} */
    t.ownerDocument
  ), r = e.type, i = ((R = e.composedPath) == null ? void 0 : R.call(e)) || [], f = (
    /** @type {null | Element} */
    i[0] || e.target
  );
  $t = e;
  var l = 0, u = $t === e && e.__root;
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
    X(null), te(null);
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
            if (Pt(b)) {
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
      e.__root = t, delete e.currentTarget, X(v), te(a);
    }
  }
}
function yi(e) {
  var t = document.createElement("template");
  return t.innerHTML = e.replaceAll("<!>", "<!---->"), t.content;
}
function Si(e, t) {
  var n = (
    /** @type {Effect} */
    E
  );
  n.nodes_start === null && (n.nodes_start = e, n.nodes_end = t);
}
// @__NO_SIDE_EFFECTS__
function ki(e, t) {
  var n, r = !e.startsWith("<!>");
  return () => {
    n === void 0 && (n = yi(r ? e : "<!>" + e), n = /** @type {Node} */
    /* @__PURE__ */ Cn(n));
    var i = (
      /** @type {TemplateNode} */
      n.cloneNode(!0)
    );
    return Si(i, i), i;
  };
}
function Ai(e, t) {
  e !== null && e.before(
    /** @type {Node} */
    t
  );
}
function Ti(e) {
  return e.endsWith("capture") && e !== "gotpointercapture" && e !== "lostpointercapture";
}
const Oi = [
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
function xi(e) {
  return Oi.includes(e);
}
const Pi = {
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
function Ni(e) {
  return e = e.toLowerCase(), Pi[e] ?? e;
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
          Or(t);
        },
        set: (r) => {
          n = r;
        }
      });
    }
  };
  e("$state"), e("$effect"), e("$derived"), e("$inspect"), e("$props"), e("$bindable");
}
function Ci(e, t) {
  var n = void 0, r;
  Mn(() => {
    n !== (n = t()) && (r && (be(r), r = null), n && (r = Dn(() => {
      jt(() => (
        /** @type {(node: Element) => void} */
        n(e)
      ));
    })));
  });
}
function Wn(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var i = e.length;
    for (t = 0; t < i; t++) e[t] && (n = Wn(e[t])) && (r && (r += " "), r += n);
  } else for (n in e) e[n] && (r && (r += " "), r += n);
  return r;
}
function Li() {
  for (var e, t, n = 0, r = "", i = arguments.length; n < i; n++) (e = arguments[n]) && (t = Wn(e)) && (r && (r += " "), r += t);
  return r;
}
function Hn(e) {
  return typeof e == "object" ? Li(e) : e ?? "";
}
const en = [...` 	
\r\f \v\uFEFF`];
function Ii(e, t, n) {
  var r = e == null ? "" : "" + e;
  if (n) {
    for (var i in n)
      if (n[i])
        r = r ? r + " " + i : i;
      else if (r.length)
        for (var f = i.length, l = 0; (l = r.indexOf(i, l)) >= 0; ) {
          var u = l + f;
          (l === 0 || en.includes(r[l - 1])) && (u === r.length || en.includes(r[u])) ? r = (l === 0 ? "" : r.substring(0, l)) + r.substring(u + 1) : l = u;
        }
  }
  return r === "" ? null : r;
}
function tn(e, t = !1) {
  var n = t ? " !important;" : ";", r = "";
  for (var i in e) {
    var f = e[i];
    f != null && f !== "" && (r += " " + i + ": " + f + n);
  }
  return r;
}
function wt(e) {
  return e[0] !== "-" || e[1] !== "-" ? e.toLowerCase() : e;
}
function Ri(e, t) {
  if (t) {
    var n = "", r, i;
    if (Array.isArray(t) ? (r = t[0], i = t[1]) : r = t, e) {
      e = String(e).replaceAll(/\s*\/\*.*?\*\/\s*/g, "").trim();
      var f = !1, l = 0, u = !1, s = [];
      r && s.push(...Object.keys(r).map(wt)), i && s.push(...Object.keys(i).map(wt));
      var o = 0, v = -1;
      const b = e.length;
      for (var a = 0; a < b; a++) {
        var c = e[a];
        if (u ? c === "/" && e[a - 1] === "*" && (u = !1) : f ? f === c && (f = !1) : c === "/" && e[a + 1] === "*" ? u = !0 : c === '"' || c === "'" ? f = c : c === "(" ? l++ : c === ")" && l--, !u && f === !1 && l === 0) {
          if (c === ":" && v === -1)
            v = a;
          else if (c === ";" || a === b - 1) {
            if (v !== -1) {
              var d = wt(e.substring(o, v).trim());
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
    return r && (n += tn(r)), i && (n += tn(i, !0)), n = n.trim(), n === "" ? null : n;
  }
  return e == null ? null : String(e);
}
function zn(e, t, n, r, i, f) {
  var l = e.__className;
  if (l !== n || l === void 0) {
    var u = Ii(n, r, f);
    u == null ? e.removeAttribute("class") : t ? e.className = u : e.setAttribute("class", u), e.__className = n;
  } else if (f && i !== f)
    for (var s in f) {
      var o = !!f[s];
      (i == null || o !== !!i[s]) && e.classList.toggle(s, o);
    }
  return f;
}
function bt(e, t = {}, n, r) {
  for (var i in n) {
    var f = n[i];
    t[i] !== f && (n[i] == null ? e.style.removeProperty(i) : e.style.setProperty(i, f, r));
  }
}
function Mi(e, t, n, r) {
  var i = e.__style;
  if (i !== t) {
    var f = Ri(t, r);
    f == null ? e.removeAttribute("style") : e.style.cssText = f, e.__style = t;
  } else r && (Array.isArray(r) ? (bt(e, n == null ? void 0 : n[0], r[0]), bt(e, n == null ? void 0 : n[1], r[1], "important")) : bt(e, n, r));
  return r;
}
function xt(e, t, n = !1) {
  if (e.multiple) {
    if (t == null)
      return;
    if (!Pt(t))
      return Lr();
    for (var r of e.options)
      r.selected = t.includes(nn(r));
    return;
  }
  for (r of e.options) {
    var i = nn(r);
    if (Xr(i, t)) {
      r.selected = !0;
      return;
    }
  }
  (!n || t !== void 0) && (e.selectedIndex = -1);
}
function Di(e) {
  var t = new MutationObserver(() => {
    xt(e, e.__value);
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
  }), Ln(() => {
    t.disconnect();
  });
}
function nn(e) {
  return "__value" in e ? e.__value : e.value;
}
const Me = Symbol("class"), De = Symbol("style"), Kn = Symbol("is custom element"), Gn = Symbol("is html");
function ji(e, t) {
  t ? e.hasAttribute("selected") || e.setAttribute("selected", "") : e.removeAttribute("selected");
}
function rn(e, t, n, r) {
  var i = Zn(e);
  i[t] !== (i[t] = n) && (t === "loading" && (e[pr] = n), n == null ? e.removeAttribute(t) : typeof n != "string" && Xn(e).includes(t) ? e[t] = n : e.setAttribute(t, n));
}
function Fi(e, t, n, r, i = !1, f = !1) {
  var l = Zn(e), u = l[Kn], s = !l[Gn], o = t || {}, v = e.tagName === "OPTION";
  for (var a in t)
    a in n || (n[a] = null);
  n.class ? n.class = Hn(n.class) : n[Me] && (n.class = null), n[De] && (n.style ?? (n.style = null));
  var c = Xn(e);
  for (const w in n) {
    let y = n[w];
    if (v && w === "value" && y == null) {
      e.value = e.__value = "", o[w] = y;
      continue;
    }
    if (w === "class") {
      var d = e.namespaceURI === "http://www.w3.org/1999/xhtml";
      zn(e, d, y, r, t == null ? void 0 : t[Me], n[Me]), o[w] = y, o[Me] = n[Me];
      continue;
    }
    if (w === "style") {
      Mi(e, y, t == null ? void 0 : t[De], n[De]), o[w] = y, o[De] = n[De];
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
          var g = xi(x);
          if (Ti(x) && (x = x.slice(0, -7), T.capture = !0), !g && _) {
            if (y != null) continue;
            e.removeEventListener(x, o[V], T), o[V] = null;
          }
          if (y != null)
            if (g)
              e[`__${x}`] = y, Ei([x]);
            else {
              let ot = function(ct) {
                o[w].call(this, ct);
              };
              o[V] = pi(x, e, ot, T);
            }
          else g && (e[`__${x}`] = void 0);
        } else if (w === "style")
          rn(e, w, y);
        else if (w === "autofocus")
          ri(
            /** @type {HTMLElement} */
            e,
            !!y
          );
        else if (!u && (w === "__value" || w === "value" && y != null))
          e.value = e.__value = y;
        else if (w === "selected" && v)
          ji(
            /** @type {HTMLOptionElement} */
            e,
            y
          );
        else {
          var S = w;
          s || (S = Ni(S));
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
          else R || c.includes(S) && (u || typeof y != "string") ? (e[S] = y, S in l && (l[S] = N)) : typeof y != "function" && rn(e, S, y);
        }
    }
  }
  return o;
}
function Ui(e, t, n = [], r = [], i, f = !1, l = !1) {
  An(n, r, (u) => {
    var s = void 0, o = {}, v = e.nodeName === "SELECT", a = !1;
    if (Mn(() => {
      var d = t(...u.map(H)), _ = Fi(
        e,
        s,
        d,
        i,
        f,
        l
      );
      a && v && "value" in d && xt(
        /** @type {HTMLSelectElement} */
        e,
        d.value
      );
      for (let g of Object.getOwnPropertySymbols(o))
        d[g] || be(o[g]);
      for (let g of Object.getOwnPropertySymbols(d)) {
        var b = d[g];
        g.description === or && (!s || b !== s[g]) && (o[g] && be(o[g]), o[g] = Dn(() => Ci(e, () => b))), _[g] = b;
      }
      s = _;
    }), v) {
      var c = (
        /** @type {HTMLSelectElement} */
        e
      );
      jt(() => {
        xt(
          c,
          /** @type {Record<string | symbol, any>} */
          s.value,
          !0
        ), Di(c);
      });
    }
    a = !0;
  });
}
function Zn(e) {
  return (
    /** @type {Record<string | symbol, unknown>} **/
    // @ts-expect-error
    e.__attributes ?? (e.__attributes = {
      [Kn]: e.nodeName.includes("-"),
      [Gn]: e.namespaceURI === ar
    })
  );
}
var fn = /* @__PURE__ */ new Map();
function Xn(e) {
  var t = e.getAttribute("is") || e.nodeName, n = fn.get(t);
  if (n) return n;
  fn.set(t, n = []);
  for (var r, i = e, f = Element.prototype; f !== i; ) {
    r = vr(i);
    for (var l in r)
      r[l].set && n.push(l);
    i = on(i);
  }
  return n;
}
function Vi(e, t, n = t) {
  var r = /* @__PURE__ */ new WeakSet();
  fi(e, "input", async (i) => {
    h && e.type === "checkbox" && qt();
    var f = i ? e.defaultValue : e.value;
    if (f = gt(e) ? pt(f) : f, n(f), A !== null && r.add(A), await hi(), f !== (f = t())) {
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
  Ft(t) == null && e.value && (n(gt(e) ? pt(e.value) : e.value), A !== null && r.add(A)), Rn(() => {
    h && e.type === "checkbox" && qt();
    var i = t();
    if (e === document.activeElement) {
      var f = (
        /** @type {Batch} */
        Ze ?? A
      );
      if (r.has(f))
        return;
    }
    gt(e) && i === pt(e.value) || e.type === "date" && !i && !e.value || i !== e.value && (e.value = i ?? "");
  });
}
function gt(e) {
  var t = e.type;
  return t === "number" || t === "range";
}
function pt(e) {
  return e === "" ? null : +e;
}
function ln(e, t) {
  return e === t || (e == null ? void 0 : e[de]) === t;
}
function Bi(e = {}, t, n, r) {
  return jt(() => {
    var i, f;
    return Rn(() => {
      i = f, f = [], Ft(() => {
        e !== n(...f) && (t(e, ...f), i && ln(n(...i), e) && t(null, ...i));
      });
    }), () => {
      ut(() => {
        f && ln(n(...f), e) && t(null, ...f);
      });
    };
  }), e;
}
let Ge = !1;
function Yi(e) {
  var t = Ge;
  try {
    return Ge = !1, [e(), Ge];
  } finally {
    Ge = t;
  }
}
function je(e, t, n, r) {
  var R;
  var i = (n & lr) !== 0, f = (n & ur) !== 0, l = (
    /** @type {V} */
    r
  ), u = !0, s = () => (u && (u = !1, l = f ? Ft(
    /** @type {() => V} */
    r
  ) : (
    /** @type {V} */
    r
  )), l), o;
  if (i) {
    var v = de in e || gr in e;
    o = ((R = Fe(e, t)) == null ? void 0 : R.set) ?? (v && t in e ? (w) => e[t] = w : void 0);
  }
  var a, c = !1;
  i ? [a, c] = Yi(() => (
    /** @type {V} */
    e[t]
  )) : a = /** @type {V} */
  e[t], a === void 0 && r !== void 0 && (a = s(), o && (Tr(t), o(a)));
  var d;
  if (d = () => {
    var w = (
      /** @type {V} */
      e[t]
    );
    return w === void 0 ? s() : (u = !0, w);
  }, (n & fr) === 0)
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
  var b = !1, g = ((n & ir) !== 0 ? Rt : zr)(() => (b = !1, d()));
  h && (g.label = t), i && H(g);
  var S = (
    /** @type {Effect} */
    E
  );
  return (
    /** @type {() => V} */
    (function(w, y) {
      if (arguments.length > 0) {
        const T = y ? H(g) : i ? ke(w) : w;
        return $(g, T), b = !0, l !== void 0 && (l = T), w;
      }
      return Ee && b || (S.f & ee) !== 0 ? g.v : H(g);
    })
  );
}
var qi = /* @__PURE__ */ ki("<div><input/></div>");
function Zi(e, t) {
  Dr(t, !0);
  let n = je(t, "value", 15, 0), r = je(t, "defaultValue", 3, 0), i = je(t, "disabled", 3, !1), f = je(t, "readOnly", 3, !1), l = je(t, "inputProps", 19, () => ({})), u, s = null, o = /* @__PURE__ */ Q(!1), v = null;
  $n(async () => {
    if (!u) return;
    const k = u;
    k.value = String(n() ?? r() ?? 0);
    const P = { renderer: nr };
    t.min !== void 0 && (P.min = t.min), t.max !== void 0 && (P.max = t.max), t.step !== void 0 && (P.step = t.step), t.decimals !== void 0 && (P.decimals = t.decimals), t.prefix !== void 0 && (P.prefix = t.prefix), t.suffix !== void 0 && (P.postfix = t.suffix), t.coreOptions && Object.assign(P, t.coreOptions), s = tr(k, P);
    const Ut = () => {
      var me;
      const m = Number(k.value);
      n(m), (me = t.onChange) == null || me.call(t, { value: m, meta: { source: "user", action: "input" } });
    };
    k.addEventListener("change", Ut);
    const Vt = [
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
    Vt.forEach(({ event: m, handler: me }) => {
      k.addEventListener(m, me);
    }), v = () => {
      k.removeEventListener("change", Ut), Vt.forEach(({ event: m, handler: me }) => {
        k.removeEventListener(m, me);
      }), s == null || s.destroy(), s = null;
    }, $(o, !0);
  }), er(() => {
    v && v();
  }), ht(() => {
    !H(o) || !s || n() === void 0 || s.setValue(n());
  }), ht(() => {
    if (!H(o) || !s) return;
    const k = {};
    t.min !== void 0 && (k.min = t.min), t.max !== void 0 && (k.max = t.max), t.step !== void 0 && (k.step = t.step), t.decimals !== void 0 && (k.decimals = t.decimals), t.prefix !== void 0 && (k.prefix = t.prefix), t.suffix !== void 0 && (k.postfix = t.suffix), s.updateSettings(k);
  }), ht(() => {
    !H(o) || !u || (i() !== void 0 && (u.disabled = i()), f() !== void 0 && (u.readOnly = f()));
  });
  function a() {
    u == null || u.focus();
  }
  function c() {
    u == null || u.blur();
  }
  function d() {
    s == null || s.upOnce();
  }
  function _() {
    s == null || s.downOnce();
  }
  function b() {
    return (s == null ? void 0 : s.getValue()) ?? 0;
  }
  function g(k) {
    var P;
    n(k), s == null || s.setValue(k), (P = t.onChange) == null || P.call(t, { value: k, meta: { source: "api", action: "setValue" } });
  }
  function S() {
    s == null || s.startUpSpin();
  }
  function R() {
    s == null || s.startDownSpin();
  }
  function w() {
    s == null || s.stopSpin();
  }
  function y(k) {
    s == null || s.updateSettings(k);
  }
  var T = {
    focus: a,
    blur: c,
    increment: d,
    decrement: _,
    getValue: b,
    setValue: g,
    startUpSpin: S,
    startDownSpin: R,
    stopSpin: w,
    updateSettings: y
  }, V = qi(), x = ni(V), ot = (k) => {
    var P;
    return (P = t.onBlur) == null ? void 0 : P.call(t, k);
  }, ct = (k) => {
    var P;
    return (P = t.onFocus) == null ? void 0 : P.call(t, k);
  };
  return Ui(
    x,
    () => ({
      class: t.inputClass,
      name: t.name,
      id: t.id,
      disabled: i(),
      readonly: f(),
      "data-testid": t.dataTestid ? `${t.dataTestid}-input` : void 0,
      onblur: ot,
      onfocus: ct,
      ...l()
    }),
    void 0,
    void 0,
    void 0,
    !0
  ), Bi(x, (k) => u = k, () => u), ai(() => zn(V, 1, Hn(t.class))), Vi(x, n), Ai(e, V), jr(T);
}
export {
  Zi as default
};
