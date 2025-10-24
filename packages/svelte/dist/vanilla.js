var Hn = Object.defineProperty;
var It = (e) => {
  throw TypeError(e);
};
var zn = (e, t, n) => t in e ? Hn(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var ge = (e, t, n) => zn(e, typeof t != "symbol" ? t + "" : t, n), lt = (e, t, n) => t.has(e) || It("Cannot " + n);
var A = (e, t, n) => (lt(e, t, "read from private field"), n ? n.call(e) : t.get(e)), K = (e, t, n) => t.has(e) ? It("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n), Q = (e, t, n, r) => (lt(e, t, "write to private field"), r ? r.call(e, n) : t.set(e, n), n), U = (e, t, n) => (lt(e, t, "access private method"), n);
import { onMount as Kn, onDestroy as Gn } from "svelte";
import { TouchSpin as Zn } from "@touchspin/core";
import { VanillaRenderer as Xn } from "@touchspin/renderer-vanilla";
const Jn = "5";
var Qt;
typeof window < "u" && ((Qt = window.__svelte ?? (window.__svelte = {})).v ?? (Qt.v = /* @__PURE__ */ new Set())).add(Jn);
const Qn = 1, $n = 4, er = 8, tr = 16, T = Symbol(), nr = Symbol("filename"), rr = "http://www.w3.org/1999/xhtml", ir = "@attach";
var $t, en;
const Rt = (en = ($t = globalThis.process) == null ? void 0 : $t.env) == null ? void 0 : en.NODE_ENV, b = Rt && !Rt.toLowerCase().startsWith("prod");
var St = Array.isArray, fr = Array.prototype.indexOf, de = Object.defineProperty, Re = Object.getOwnPropertyDescriptor, lr = Object.getOwnPropertyDescriptors, sr = Object.prototype, ur = Array.prototype, tn = Object.getPrototypeOf;
function ar(e) {
  for (var t = 0; t < e.length; t++)
    e[t]();
}
function nn() {
  var e, t, n = new Promise((r, i) => {
    e = r, t = i;
  });
  return { promise: n, resolve: e, reject: t };
}
const N = 2, kt = 4, At = 8, he = 16, we = 32, Ne = 64, Tt = 128, I = 1024, F = 2048, J = 4096, me = 8192, Z = 16384, Ot = 32768, ze = 1 << 17, or = 1 << 18, tt = 1 << 19, cr = 1 << 20, B = 256, Ke = 512, De = 32768, Ge = 1 << 21, nt = 1 << 22, ae = 1 << 23, oe = Symbol("$state"), vr = Symbol("legacy props"), dr = Symbol(""), rn = Symbol("proxy path"), pe = new class extends Error {
  constructor() {
    super(...arguments);
    ge(this, "name", "StaleReactionError");
    ge(this, "message", "The reaction that called `getAbortSignal()` was re-run or destroyed");
  }
}();
function _r() {
  if (b) {
    const e = new Error("async_derived_orphan\nCannot create a `$derived(...)` with an `await` expression outside of an effect tree\nhttps://svelte.dev/e/async_derived_orphan");
    throw e.name = "Svelte error", e;
  } else
    throw new Error("https://svelte.dev/e/async_derived_orphan");
}
function Mt() {
  if (b) {
    const e = new Error("bind_invalid_checkbox_value\nUsing `bind:value` together with a checkbox input is not allowed. Use `bind:checked` instead\nhttps://svelte.dev/e/bind_invalid_checkbox_value");
    throw e.name = "Svelte error", e;
  } else
    throw new Error("https://svelte.dev/e/bind_invalid_checkbox_value");
}
function hr() {
  if (b) {
    const e = new Error(`derived_references_self
A derived value cannot reference itself recursively
https://svelte.dev/e/derived_references_self`);
    throw e.name = "Svelte error", e;
  } else
    throw new Error("https://svelte.dev/e/derived_references_self");
}
function wr(e) {
  if (b) {
    const t = new Error(`effect_in_teardown
\`${e}\` cannot be used inside an effect cleanup function
https://svelte.dev/e/effect_in_teardown`);
    throw t.name = "Svelte error", t;
  } else
    throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function br() {
  if (b) {
    const e = new Error("effect_in_unowned_derived\nEffect cannot be created inside a `$derived` value that was not itself created inside an effect\nhttps://svelte.dev/e/effect_in_unowned_derived");
    throw e.name = "Svelte error", e;
  } else
    throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function gr(e) {
  if (b) {
    const t = new Error(`effect_orphan
\`${e}\` can only be used inside an effect (e.g. during component initialisation)
https://svelte.dev/e/effect_orphan`);
    throw t.name = "Svelte error", t;
  } else
    throw new Error("https://svelte.dev/e/effect_orphan");
}
function pr() {
  if (b) {
    const e = new Error(`effect_update_depth_exceeded
Maximum update depth exceeded. This typically indicates that an effect reads and writes the same piece of state
https://svelte.dev/e/effect_update_depth_exceeded`);
    throw e.name = "Svelte error", e;
  } else
    throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function Er(e) {
  if (b) {
    const t = new Error(`props_invalid_value
Cannot do \`bind:${e}={undefined}\` when \`${e}\` has a fallback value
https://svelte.dev/e/props_invalid_value`);
    throw t.name = "Svelte error", t;
  } else
    throw new Error("https://svelte.dev/e/props_invalid_value");
}
function mr(e) {
  if (b) {
    const t = new Error(`rune_outside_svelte
The \`${e}\` rune is only available inside \`.svelte\` and \`.svelte.js/ts\` files
https://svelte.dev/e/rune_outside_svelte`);
    throw t.name = "Svelte error", t;
  } else
    throw new Error("https://svelte.dev/e/rune_outside_svelte");
}
function yr() {
  if (b) {
    const e = new Error("state_descriptors_fixed\nProperty descriptors defined on `$state` objects must contain `value` and always be `enumerable`, `configurable` and `writable`.\nhttps://svelte.dev/e/state_descriptors_fixed");
    throw e.name = "Svelte error", e;
  } else
    throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function Sr() {
  if (b) {
    const e = new Error("state_prototype_fixed\nCannot set prototype of `$state` object\nhttps://svelte.dev/e/state_prototype_fixed");
    throw e.name = "Svelte error", e;
  } else
    throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function kr() {
  if (b) {
    const e = new Error("state_unsafe_mutation\nUpdating state inside `$derived(...)`, `$inspect(...)` or a template expression is forbidden. If the value should not be reactive, declare it without `$state`\nhttps://svelte.dev/e/state_unsafe_mutation");
    throw e.name = "Svelte error", e;
  } else
    throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
var fn = "font-weight: bold", ln = "font-weight: normal";
function Ar(e) {
  b ? console.warn(`%c[svelte] await_reactivity_loss
%cDetected reactivity loss when reading \`${e}\`. This happens when state is read in an async function after an earlier \`await\`
https://svelte.dev/e/await_reactivity_loss`, fn, ln) : console.warn("https://svelte.dev/e/await_reactivity_loss");
}
function Tr() {
  b ? console.warn("%c[svelte] select_multiple_invalid_value\n%cThe `value` property of a `<select multiple>` element should be an array, but it received a non-array value. The selection will be kept as is.\nhttps://svelte.dev/e/select_multiple_invalid_value", fn, ln) : console.warn("https://svelte.dev/e/select_multiple_invalid_value");
}
function sn(e) {
  return e === this.v;
}
function Or(e, t) {
  return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function";
}
function xr(e) {
  return !Or(e, this.v);
}
let Pr = !1;
function un(e) {
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
    const s = i[l], u = s.replaceAll("\\", "/");
    if (s !== "Error") {
      if (s.includes("validate_each_keys"))
        return null;
      u.includes("svelte/src/internal") || u.includes("node_modules/.vite") || f.push(s);
    }
  }
  return f.length === 1 ? null : (de(n, "stack", {
    value: f.join(`
`)
  }), de(n, "name", {
    // 'Error' suffix is required for stack traces to be rendered properly
    value: `${e}Error`
  }), /** @type {Error & { stack: string }} */
  n);
}
function $(e, t) {
  return e.label = t, an(e.v, t), e;
}
function an(e, t) {
  var n;
  return (n = e == null ? void 0 : e[rn]) == null || n.call(e, t), e;
}
let D = null;
function Ze(e) {
  D = e;
}
let je = null;
function Xe(e) {
  je = e;
}
let Be = null;
function Dt(e) {
  Be = e;
}
function Nr(e, t = !1, n) {
  D = {
    p: D,
    c: null,
    e: null,
    s: e,
    x: null,
    l: null
  }, b && (D.function = n, Be = n);
}
function Cr(e) {
  var t = (
    /** @type {ComponentContext} */
    D
  ), n = t.e;
  if (n !== null) {
    t.e = null;
    for (var r of n)
      An(r);
  }
  return e !== void 0 && (t.x = e), D = t.p, b && (Be = (D == null ? void 0 : D.function) ?? null), e ?? /** @type {T} */
  {};
}
function on() {
  return !0;
}
let se = [];
function cn() {
  var e = se;
  se = [], ar(e);
}
function rt(e) {
  if (se.length === 0 && !Me) {
    var t = se;
    queueMicrotask(() => {
      t === se && cn();
    });
  }
  se.push(e);
}
function Lr() {
  for (; se.length > 0; )
    cn();
}
const _t = /* @__PURE__ */ new WeakMap();
function Ir(e) {
  var t = y;
  if (t === null)
    return m.f |= ae, e;
  if (b && e instanceof Error && !_t.has(e) && _t.set(e, Rr(e, t)), (t.f & Ot) === 0) {
    if ((t.f & Tt) === 0)
      throw !t.parent && e instanceof Error && vn(e), e;
    t.b.error(e);
  } else
    Je(e, t);
}
function Je(e, t) {
  for (; t !== null; ) {
    if ((t.f & Tt) !== 0)
      try {
        t.b.error(e);
        return;
      } catch (n) {
        e = n;
      }
    t = t.parent;
  }
  throw e instanceof Error && vn(e), e;
}
function Rr(e, t) {
  var l, s, u;
  const n = Re(e, "message");
  if (!(n && !n.configurable)) {
    for (var r = "	", i = `
${r}in ${((l = t.fn) == null ? void 0 : l.name) || "<unknown>"}`, f = t.ctx; f !== null; )
      i += `
${r}in ${(s = f.function) == null ? void 0 : s[nr].split("/").pop()}`, f = f.p;
    return {
      message: e.message + `
${i}
`,
      stack: (u = e.stack) == null ? void 0 : u.split(`
`).filter((o) => !o.includes("svelte/src/internal")).join(`
`)
    };
  }
}
function vn(e) {
  const t = _t.get(e);
  t && (de(e, "message", {
    value: t.message
  }), de(e, "stack", {
    value: t.stack
  }));
}
const qe = /* @__PURE__ */ new Set();
let k = null, He = null, O = null, jt = /* @__PURE__ */ new Set(), W = [], it = null, ht = !1, Me = !1;
var Se, ke, Ae, ue, Ve, Te, Oe, x, wt, le, bt, dn;
const et = class et {
  constructor() {
    K(this, x);
    ge(this, "committed", !1);
    /**
     * The current values of any sources that are updated in this batch
     * They keys of this map are identical to `this.#previous`
     * @type {Map<Source, any>}
     */
    ge(this, "current", /* @__PURE__ */ new Map());
    /**
     * The values of any sources that are updated in this batch _before_ those updates took place.
     * They keys of this map are identical to `this.#current`
     * @type {Map<Source, any>}
     */
    K(this, Se, /* @__PURE__ */ new Map());
    /**
     * When the batch is committed (and the DOM is updated), we need to remove old branches
     * and append new ones by calling the functions added inside (if/each/key/etc) blocks
     * @type {Set<() => void>}
     */
    K(this, ke, /* @__PURE__ */ new Set());
    /**
     * The number of async effects that are currently in flight
     */
    K(this, Ae, 0);
    /**
     * The number of async effects that are currently in flight, _not_ inside a pending boundary
     */
    K(this, ue, 0);
    /**
     * A deferred that resolves when the batch is committed, used with `settled()`
     * TODO replace with Promise.withResolvers once supported widely enough
     * @type {{ promise: Promise<void>, resolve: (value?: any) => void, reject: (reason: unknown) => void } | null}
     */
    K(this, Ve, null);
    /**
     * Deferred effects (which run after async work has completed) that are DIRTY
     * @type {Effect[]}
     */
    K(this, Te, []);
    /**
     * Deferred effects that are MAYBE_DIRTY
     * @type {Effect[]}
     */
    K(this, Oe, []);
    /**
     * A set of branches that still exist, but will be destroyed when this batch
     * is committed — we skip over these during `process`
     * @type {Set<Effect>}
     */
    ge(this, "skipped_effects", /* @__PURE__ */ new Set());
  }
  /**
   *
   * @param {Effect[]} root_effects
   */
  process(t) {
    W = [], He = null, this.apply();
    var n = {
      parent: null,
      effect: null,
      effects: [],
      render_effects: [],
      block_effects: []
    };
    for (const r of t)
      U(this, x, wt).call(this, r, n);
    U(this, x, bt).call(this), A(this, ue) > 0 ? (U(this, x, le).call(this, n.effects), U(this, x, le).call(this, n.render_effects), U(this, x, le).call(this, n.block_effects)) : (He = this, k = null, Ft(n.render_effects), Ft(n.effects), He = null), O = null;
  }
  /**
   * Associate a change to a given source with the current
   * batch, noting its previous and current values
   * @param {Source} source
   * @param {any} value
   */
  capture(t, n) {
    A(this, Se).has(t) || A(this, Se).set(t, n), this.current.set(t, t.v), O == null || O.set(t, t.v);
  }
  activate() {
    k = this;
  }
  deactivate() {
    k = null, O = null;
  }
  flush() {
    if (W.length > 0) {
      if (this.activate(), _n(), k !== null && k !== this)
        return;
    } else
      U(this, x, bt).call(this);
    this.deactivate();
    for (const t of jt)
      if (jt.delete(t), t(), k !== null)
        break;
  }
  /**
   *
   * @param {boolean} blocking
   */
  increment(t) {
    Q(this, Ae, A(this, Ae) + 1), t && Q(this, ue, A(this, ue) + 1);
  }
  /**
   *
   * @param {boolean} blocking
   */
  decrement(t) {
    Q(this, Ae, A(this, Ae) - 1), t && Q(this, ue, A(this, ue) - 1);
    for (const n of A(this, Te))
      M(n, F), xe(n);
    for (const n of A(this, Oe))
      M(n, J), xe(n);
    Q(this, Te, []), Q(this, Oe, []), this.flush();
  }
  /** @param {() => void} fn */
  add_callback(t) {
    A(this, ke).add(t);
  }
  settled() {
    return (A(this, Ve) ?? Q(this, Ve, nn())).promise;
  }
  static ensure() {
    if (k === null) {
      const t = k = new et();
      qe.add(k), Me || et.enqueue(() => {
        k === t && t.flush();
      });
    }
    return k;
  }
  /** @param {() => void} task */
  static enqueue(t) {
    rt(t);
  }
  apply() {
  }
};
Se = new WeakMap(), ke = new WeakMap(), Ae = new WeakMap(), ue = new WeakMap(), Ve = new WeakMap(), Te = new WeakMap(), Oe = new WeakMap(), x = new WeakSet(), /**
 * Traverse the effect tree, executing effects or stashing
 * them for later execution as appropriate
 * @param {Effect} root
 * @param {EffectTarget} target
 */
wt = function(t, n) {
  var v;
  t.f ^= I;
  for (var r = t.first; r !== null; ) {
    var i = r.f, f = (i & (we | Ne)) !== 0, l = f && (i & I) !== 0, s = l || (i & me) !== 0 || this.skipped_effects.has(r);
    if ((r.f & Tt) !== 0 && ((v = r.b) != null && v.is_pending()) && (n = {
      parent: n,
      effect: r,
      effects: [],
      render_effects: [],
      block_effects: []
    }), !s && r.fn !== null) {
      f ? r.f ^= I : (i & kt) !== 0 ? n.effects.push(r) : Ye(r) && ((r.f & he) !== 0 && n.block_effects.push(r), Ue(r));
      var u = r.first;
      if (u !== null) {
        r = u;
        continue;
      }
    }
    var o = r.parent;
    for (r = r.next; r === null && o !== null; )
      o === n.effect && (U(this, x, le).call(this, n.effects), U(this, x, le).call(this, n.render_effects), U(this, x, le).call(this, n.block_effects), n = /** @type {EffectTarget} */
      n.parent), r = o.next, o = o.parent;
  }
}, /**
 * @param {Effect[]} effects
 */
le = function(t) {
  for (const n of t)
    ((n.f & F) !== 0 ? A(this, Te) : A(this, Oe)).push(n), M(n, I);
}, bt = function() {
  if (A(this, ue) === 0) {
    for (const t of A(this, ke)) t();
    A(this, ke).clear();
  }
  A(this, Ae) === 0 && U(this, x, dn).call(this);
}, dn = function() {
  var i, f;
  if (qe.size > 1) {
    A(this, Se).clear();
    var t = O, n = !0, r = {
      parent: null,
      effect: null,
      effects: [],
      render_effects: [],
      block_effects: []
    };
    for (const l of qe) {
      if (l === this) {
        n = !1;
        continue;
      }
      const s = [];
      for (const [o, v] of this.current) {
        if (l.current.has(o))
          if (n && v !== l.current.get(o))
            l.current.set(o, v);
          else
            continue;
        s.push(o);
      }
      if (s.length === 0)
        continue;
      const u = [...l.current.keys()].filter((o) => !this.current.has(o));
      if (u.length > 0) {
        const o = /* @__PURE__ */ new Set(), v = /* @__PURE__ */ new Map();
        for (const a of s)
          hn(a, u, o, v);
        if (W.length > 0) {
          k = l, l.apply();
          for (const a of W)
            U(i = l, x, wt).call(i, a, r);
          W = [], l.deactivate();
        }
      }
    }
    k = null, O = t;
  }
  this.committed = !0, qe.delete(this), (f = A(this, Ve)) == null || f.resolve();
};
let Qe = et;
function Mr(e) {
  var t = Me;
  Me = !0;
  try {
    for (var n; ; ) {
      if (Lr(), W.length === 0 && (k == null || k.flush(), W.length === 0))
        return it = null, /** @type {T} */
        n;
      _n();
    }
  } finally {
    Me = t;
  }
}
function _n() {
  var e = ye;
  ht = !0;
  try {
    var t = 0;
    for (Yt(!0); W.length > 0; ) {
      var n = Qe.ensure();
      if (t++ > 1e3) {
        if (b) {
          var r = /* @__PURE__ */ new Map();
          for (const f of n.current.keys())
            for (const [l, s] of f.updated ?? []) {
              var i = r.get(l);
              i || (i = { error: s.error, count: 0 }, r.set(l, i)), i.count += s.count;
            }
          for (const f of r.values())
            console.error(f.error);
        }
        Dr();
      }
      n.process(W), re.clear();
    }
  } finally {
    ht = !1, Yt(e), it = null;
  }
}
function Dr() {
  try {
    pr();
  } catch (e) {
    b && de(e, "stack", { value: "" }), Je(e, it);
  }
}
let Y = null;
function Ft(e) {
  var t = e.length;
  if (t !== 0) {
    for (var n = 0; n < t; ) {
      var r = e[n++];
      if ((r.f & (Z | me)) === 0 && Ye(r) && (Y = /* @__PURE__ */ new Set(), Ue(r), r.deps === null && r.first === null && r.nodes_start === null && (r.teardown === null && r.ac === null ? Cn(r) : r.fn = null), (Y == null ? void 0 : Y.size) > 0)) {
        re.clear();
        for (const i of Y) {
          if ((i.f & (Z | me)) !== 0) continue;
          const f = [i];
          let l = i.parent;
          for (; l !== null; )
            Y.has(l) && (Y.delete(l), f.push(l)), l = l.parent;
          for (let s = f.length - 1; s >= 0; s--) {
            const u = f[s];
            (u.f & (Z | me)) === 0 && Ue(u);
          }
        }
        Y.clear();
      }
    }
    Y = null;
  }
}
function hn(e, t, n, r) {
  if (!n.has(e) && (n.add(e), e.reactions !== null))
    for (const i of e.reactions) {
      const f = i.f;
      (f & N) !== 0 ? hn(
        /** @type {Derived} */
        i,
        t,
        n,
        r
      ) : (f & (nt | he)) !== 0 && (f & F) === 0 && // we may have scheduled this one already
      wn(i, t, r) && (M(i, F), xe(
        /** @type {Effect} */
        i
      ));
    }
}
function wn(e, t, n) {
  const r = n.get(e);
  if (r !== void 0) return r;
  if (e.deps !== null)
    for (const i of e.deps) {
      if (t.includes(i))
        return !0;
      if ((i.f & N) !== 0 && wn(
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
function xe(e) {
  for (var t = it = e; t.parent !== null; ) {
    t = t.parent;
    var n = t.f;
    if (ht && t === y && (n & he) !== 0)
      return;
    if ((n & (Ne | we)) !== 0) {
      if ((n & I) === 0) return;
      t.f ^= I;
    }
  }
  W.push(t);
}
function bn(e, t, n) {
  const r = xt;
  if (t.length === 0) {
    n(e.map(r));
    return;
  }
  var i = k, f = (
    /** @type {Effect} */
    y
  ), l = jr();
  Promise.all(t.map((s) => /* @__PURE__ */ Ur(s))).then((s) => {
    l();
    try {
      n([...e.map(r), ...s]);
    } catch (u) {
      (f.f & Z) === 0 && Je(u, f);
    }
    i == null || i.deactivate(), gt();
  }).catch((s) => {
    Je(s, f);
  });
}
function jr() {
  var e = y, t = m, n = D, r = k;
  if (b)
    var i = je;
  return function() {
    X(e), H(t), Ze(n), r == null || r.activate(), b && (gn(null), Xe(i));
  };
}
function gt() {
  X(null), H(null), Ze(null), b && (gn(null), Xe(null));
}
let ce = null;
function gn(e) {
  ce = e;
}
const Fr = /* @__PURE__ */ new Set();
// @__NO_SIDE_EFFECTS__
function xt(e) {
  var t = N | F, n = m !== null && (m.f & N) !== 0 ? (
    /** @type {Derived} */
    m
  ) : null;
  return y === null || n !== null && (n.f & B) !== 0 ? t |= B : y.f |= tt, {
    ctx: D,
    deps: null,
    effects: null,
    equals: sn,
    f: t,
    fn: e,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      T
    ),
    wv: 0,
    parent: n ?? y,
    ac: null
  };
}
// @__NO_SIDE_EFFECTS__
function Ur(e, t) {
  let n = (
    /** @type {Effect | null} */
    y
  );
  n === null && _r();
  var r = (
    /** @type {Boundary} */
    n.b
  ), i = (
    /** @type {Promise<V>} */
    /** @type {unknown} */
    void 0
  ), f = En(
    /** @type {V} */
    T
  ), l = !m, s = /* @__PURE__ */ new Map();
  return ni(() => {
    var c;
    b && (ce = y);
    var u = nn();
    i = u.promise;
    try {
      Promise.resolve(e()).then(u.resolve, u.reject).then(() => {
        o === k && o.committed && o.deactivate(), gt();
      });
    } catch (_) {
      u.reject(_), gt();
    }
    b && (ce = null);
    var o = (
      /** @type {Batch} */
      k
    );
    if (l) {
      var v = !r.is_pending();
      r.update_pending_count(1), o.increment(v), (c = s.get(o)) == null || c.reject(pe), s.delete(o), s.set(o, u);
    }
    const a = (_, w = void 0) => {
      if (ce = null, o.activate(), w)
        w !== pe && (f.f |= ae, Et(f, w));
      else {
        (f.f & ae) !== 0 && (f.f ^= ae), Et(f, _);
        for (const [E, d] of s) {
          if (s.delete(E), E === o) break;
          d.reject(pe);
        }
      }
      l && (r.update_pending_count(-1), o.decrement(v));
    };
    u.promise.then(a, (_) => a(null, _ || "unknown"));
  }), kn(() => {
    for (const u of s.values())
      u.reject(pe);
  }), b && (f.f |= nt), new Promise((u) => {
    function o(v) {
      function a() {
        v === i ? u(f) : o(i);
      }
      v.then(a, a);
    }
    o(i);
  });
}
// @__NO_SIDE_EFFECTS__
function Vr(e) {
  const t = /* @__PURE__ */ xt(e);
  return t.equals = xr, t;
}
function pt(e) {
  var t = e.effects;
  if (t !== null) {
    e.effects = null;
    for (var n = 0; n < t.length; n += 1)
      _e(
        /** @type {Effect} */
        t[n]
      );
  }
}
let st = [];
function Br(e) {
  for (var t = e.parent; t !== null; ) {
    if ((t.f & N) === 0)
      return (
        /** @type {Effect} */
        t
      );
    t = t.parent;
  }
  return null;
}
function Pt(e) {
  var t, n = y;
  if (X(Br(e)), b) {
    let r = Pe;
    Ut(/* @__PURE__ */ new Set());
    try {
      st.includes(e) && hr(), st.push(e), e.f &= ~De, pt(e), t = mt(e);
    } finally {
      X(n), Ut(r), st.pop();
    }
  } else
    try {
      e.f &= ~De, pt(e), t = mt(e);
    } finally {
      X(n);
    }
  return t;
}
function pn(e) {
  var t = Pt(e);
  if (e.equals(t) || (e.v = t, e.wv = In()), !be)
    if (O !== null)
      O.set(e, e.v);
    else {
      var n = (ne || (e.f & B) !== 0) && e.deps !== null ? J : I;
      M(e, n);
    }
}
let Pe = /* @__PURE__ */ new Set();
const re = /* @__PURE__ */ new Map();
function Ut(e) {
  Pe = e;
}
let Nt = !1;
function Yr() {
  Nt = !0;
}
function En(e, t) {
  var n = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: e,
    reactions: null,
    equals: sn,
    rv: 0,
    wv: 0
  };
  return n;
}
// @__NO_SIDE_EFFECTS__
function ee(e, t) {
  const n = En(e);
  return li(n), n;
}
function te(e, t, n = !1) {
  m !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
  // to ensure we error if state is set inside an inspect effect
  (!q || (m.f & ze) !== 0) && on() && (m.f & (N | he | nt | ze)) !== 0 && !(R != null && R.includes(e)) && kr();
  let r = n ? Ee(t) : t;
  return b && an(
    r,
    /** @type {string} */
    e.label
  ), Et(e, r);
}
function Et(e, t) {
  if (!e.equals(t)) {
    var n = e.v;
    be ? re.set(e, t) : re.set(e, n), e.v = t;
    var r = Qe.ensure();
    if (r.capture(e, n), b) {
      if (y !== null) {
        const i = un("UpdatedAt");
        if (i !== null) {
          e.updated ?? (e.updated = /* @__PURE__ */ new Map());
          let f = e.updated.get(i.stack);
          f || (f = { error: i, count: 0 }, e.updated.set(i.stack, f)), f.count++;
        }
      }
      y !== null && (e.set_during_effect = !0);
    }
    (e.f & N) !== 0 && ((e.f & F) !== 0 && Pt(
      /** @type {Derived} */
      e
    ), M(e, (e.f & B) === 0 ? I : J)), e.wv = In(), yn(e, F), y !== null && (y.f & I) !== 0 && (y.f & (we | Ne)) === 0 && (V === null ? si([e]) : V.push(e)), b && Pe.size > 0 && !Nt && mn();
  }
  return t;
}
function mn() {
  Nt = !1;
  const e = Array.from(Pe);
  for (const t of e)
    (t.f & I) !== 0 && M(t, J), Ye(t) && Ue(t);
  Pe.clear();
}
function ut(e) {
  te(e, e.v + 1);
}
function yn(e, t) {
  var n = e.reactions;
  if (n !== null)
    for (var r = n.length, i = 0; i < r; i++) {
      var f = n[i], l = f.f;
      if (b && (l & ze) !== 0) {
        Pe.add(f);
        continue;
      }
      var s = (l & F) === 0;
      s && M(f, t), (l & N) !== 0 ? (l & De) === 0 && (f.f |= De, yn(
        /** @type {Derived} */
        f,
        J
      )) : s && ((l & he) !== 0 && Y !== null && Y.add(
        /** @type {Effect} */
        f
      ), xe(
        /** @type {Effect} */
        f
      ));
    }
}
const qr = /^[a-zA-Z_$][a-zA-Z_$0-9]*$/;
function Ee(e) {
  if (typeof e != "object" || e === null || oe in e)
    return e;
  const t = tn(e);
  if (t !== sr && t !== ur)
    return e;
  var n = /* @__PURE__ */ new Map(), r = St(e), i = /* @__PURE__ */ ee(0), f = ve, l = (v) => {
    if (ve === f)
      return v();
    var a = m, c = ve;
    H(null), Wt(f);
    var _ = v();
    return H(a), Wt(c), _;
  };
  r && (n.set("length", /* @__PURE__ */ ee(
    /** @type {any[]} */
    e.length
  )), b && (e = /** @type {any} */
  zr(
    /** @type {any[]} */
    e
  )));
  var s = "";
  let u = !1;
  function o(v) {
    if (!u) {
      u = !0, s = v, $(i, `${s} version`);
      for (const [a, c] of n)
        $(c, fe(s, a));
      u = !1;
    }
  }
  return new Proxy(
    /** @type {any} */
    e,
    {
      defineProperty(v, a, c) {
        (!("value" in c) || c.configurable === !1 || c.enumerable === !1 || c.writable === !1) && yr();
        var _ = n.get(a);
        return _ === void 0 ? _ = l(() => {
          var w = /* @__PURE__ */ ee(c.value);
          return n.set(a, w), b && typeof a == "string" && $(w, fe(s, a)), w;
        }) : te(_, c.value, !0), !0;
      },
      deleteProperty(v, a) {
        var c = n.get(a);
        if (c === void 0) {
          if (a in v) {
            const _ = l(() => /* @__PURE__ */ ee(T));
            n.set(a, _), ut(i), b && $(_, fe(s, a));
          }
        } else
          te(c, T), ut(i);
        return !0;
      },
      get(v, a, c) {
        var d;
        if (a === oe)
          return e;
        if (b && a === rn)
          return o;
        var _ = n.get(a), w = a in v;
        if (_ === void 0 && (!w || (d = Re(v, a)) != null && d.writable) && (_ = l(() => {
          var p = Ee(w ? v[a] : T), P = /* @__PURE__ */ ee(p);
          return b && $(P, fe(s, a)), P;
        }), n.set(a, _)), _ !== void 0) {
          var E = G(_);
          return E === T ? void 0 : E;
        }
        return Reflect.get(v, a, c);
      },
      getOwnPropertyDescriptor(v, a) {
        var c = Reflect.getOwnPropertyDescriptor(v, a);
        if (c && "value" in c) {
          var _ = n.get(a);
          _ && (c.value = G(_));
        } else if (c === void 0) {
          var w = n.get(a), E = w == null ? void 0 : w.v;
          if (w !== void 0 && E !== T)
            return {
              enumerable: !0,
              configurable: !0,
              value: E,
              writable: !0
            };
        }
        return c;
      },
      has(v, a) {
        var E;
        if (a === oe)
          return !0;
        var c = n.get(a), _ = c !== void 0 && c.v !== T || Reflect.has(v, a);
        if (c !== void 0 || y !== null && (!_ || (E = Re(v, a)) != null && E.writable)) {
          c === void 0 && (c = l(() => {
            var d = _ ? Ee(v[a]) : T, p = /* @__PURE__ */ ee(d);
            return b && $(p, fe(s, a)), p;
          }), n.set(a, c));
          var w = G(c);
          if (w === T)
            return !1;
        }
        return _;
      },
      set(v, a, c, _) {
        var z;
        var w = n.get(a), E = a in v;
        if (r && a === "length")
          for (var d = c; d < /** @type {Source<number>} */
          w.v; d += 1) {
            var p = n.get(d + "");
            p !== void 0 ? te(p, T) : d in v && (p = l(() => /* @__PURE__ */ ee(T)), n.set(d + "", p), b && $(p, fe(s, d)));
          }
        if (w === void 0)
          (!E || (z = Re(v, a)) != null && z.writable) && (w = l(() => /* @__PURE__ */ ee(void 0)), b && $(w, fe(s, a)), te(w, Ee(c)), n.set(a, w));
        else {
          E = w.v !== T;
          var P = l(() => Ee(c));
          te(w, P);
        }
        var g = Reflect.getOwnPropertyDescriptor(v, a);
        if (g != null && g.set && g.set.call(_, c), !E) {
          if (r && typeof a == "string") {
            var h = (
              /** @type {Source<number>} */
              n.get("length")
            ), S = Number(a);
            Number.isInteger(S) && S >= h.v && te(h, S + 1);
          }
          ut(i);
        }
        return !0;
      },
      ownKeys(v) {
        G(i);
        var a = Reflect.ownKeys(v).filter((w) => {
          var E = n.get(w);
          return E === void 0 || E.v !== T;
        });
        for (var [c, _] of n)
          _.v !== T && !(c in v) && a.push(c);
        return a;
      },
      setPrototypeOf() {
        Sr();
      }
    }
  );
}
function fe(e, t) {
  return typeof t == "symbol" ? `${e}[Symbol(${t.description ?? ""})]` : qr.test(t) ? `${e}.${t}` : /^\d+$/.test(t) ? `${e}[${t}]` : `${e}['${t}']`;
}
function Vt(e) {
  try {
    if (e !== null && typeof e == "object" && oe in e)
      return e[oe];
  } catch {
  }
  return e;
}
function Wr(e, t) {
  return Object.is(Vt(e), Vt(t));
}
const Hr = /* @__PURE__ */ new Set([
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
function zr(e) {
  return new Proxy(e, {
    get(t, n, r) {
      var i = Reflect.get(t, n, r);
      return Hr.has(
        /** @type {string} */
        n
      ) ? function(...f) {
        Yr();
        var l = i.apply(this, f);
        return mn(), l;
      } : i;
    }
  });
}
var Kr, Gr;
// @__NO_SIDE_EFFECTS__
function Sn(e) {
  return Kr.call(e);
}
// @__NO_SIDE_EFFECTS__
function Zr(e) {
  return Gr.call(e);
}
function Xr(e, t) {
  return /* @__PURE__ */ Sn(e);
}
function Jr(e, t) {
  if (t) {
    const n = document.body;
    e.autofocus = !0, rt(() => {
      document.activeElement === n && e.focus();
    });
  }
}
let Bt = !1;
function Qr() {
  Bt || (Bt = !0, document.addEventListener(
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
function ft(e) {
  var t = m, n = y;
  H(null), X(null);
  try {
    return e();
  } finally {
    H(t), X(n);
  }
}
function $r(e, t, n, r = n) {
  e.addEventListener(t, () => ft(n));
  const i = e.__on_r;
  i ? e.__on_r = () => {
    i(), r(!0);
  } : e.__on_r = () => r(!0), Qr();
}
function ei(e) {
  y === null && m === null && gr(e), m !== null && (m.f & B) !== 0 && y === null && br(), be && wr(e);
}
function ti(e, t) {
  var n = t.last;
  n === null ? t.last = t.first = e : (n.next = e, e.prev = n, t.last = e);
}
function ie(e, t, n, r = !0) {
  var i = y;
  if (b)
    for (; i !== null && (i.f & ze) !== 0; )
      i = i.parent;
  i !== null && (i.f & me) !== 0 && (e |= me);
  var f = {
    ctx: D,
    deps: null,
    nodes_start: null,
    nodes_end: null,
    f: e | F,
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
  if (b && (f.component_function = Be), n)
    try {
      Ue(f), f.f |= Ot;
    } catch (u) {
      throw _e(f), u;
    }
  else t !== null && xe(f);
  if (r) {
    var l = f;
    if (n && l.deps === null && l.teardown === null && l.nodes_start === null && l.first === l.last && // either `null`, or a singular child
    (l.f & tt) === 0 && (l = l.first), l !== null && (l.parent = i, i !== null && ti(l, i), m !== null && (m.f & N) !== 0 && (e & Ne) === 0)) {
      var s = (
        /** @type {Derived} */
        m
      );
      (s.effects ?? (s.effects = [])).push(l);
    }
  }
  return f;
}
function kn(e) {
  const t = ie(At, null, !1);
  return M(t, I), t.teardown = e, t;
}
function at(e) {
  ei("$effect"), b && de(e, "name", {
    value: "$effect"
  });
  var t = (
    /** @type {Effect} */
    y.f
  ), n = !m && (t & we) !== 0 && (t & Ot) === 0;
  if (n) {
    var r = (
      /** @type {ComponentContext} */
      D
    );
    (r.e ?? (r.e = [])).push(e);
  } else
    return An(e);
}
function An(e) {
  return ie(kt | cr, e, !1);
}
function Ct(e) {
  return ie(kt, e, !1);
}
function ni(e) {
  return ie(nt | tt, e, !0);
}
function Tn(e, t = 0) {
  return ie(At | t, e, !0);
}
function ri(e, t = [], n = []) {
  bn(t, n, (r) => {
    ie(At, () => e(...r.map(G)), !0);
  });
}
function On(e, t = 0) {
  var n = ie(he | t, e, !0);
  return b && (n.dev_stack = je), n;
}
function xn(e, t = !0) {
  return ie(we | tt, e, !0, t);
}
function Pn(e) {
  var t = e.teardown;
  if (t !== null) {
    const n = be, r = m;
    qt(!0), H(null);
    try {
      t.call(null);
    } finally {
      qt(n), H(r);
    }
  }
}
function Nn(e, t = !1) {
  var n = e.first;
  for (e.first = e.last = null; n !== null; ) {
    const i = n.ac;
    i !== null && ft(() => {
      i.abort(pe);
    });
    var r = n.next;
    (n.f & Ne) !== 0 ? n.parent = null : _e(n, t), n = r;
  }
}
function ii(e) {
  for (var t = e.first; t !== null; ) {
    var n = t.next;
    (t.f & we) === 0 && _e(t), t = n;
  }
}
function _e(e, t = !0) {
  var n = !1;
  (t || (e.f & or) !== 0) && e.nodes_start !== null && e.nodes_end !== null && (fi(
    e.nodes_start,
    /** @type {TemplateNode} */
    e.nodes_end
  ), n = !0), Nn(e, t && !n), $e(e, 0), M(e, Z);
  var r = e.transitions;
  if (r !== null)
    for (const f of r)
      f.stop();
  Pn(e);
  var i = e.parent;
  i !== null && i.first !== null && Cn(e), b && (e.component_function = null), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes_start = e.nodes_end = e.ac = null;
}
function fi(e, t) {
  for (; e !== null; ) {
    var n = e === t ? null : (
      /** @type {TemplateNode} */
      /* @__PURE__ */ Zr(e)
    );
    e.remove(), e = n;
  }
}
function Cn(e) {
  var t = e.parent, n = e.prev, r = e.next;
  n !== null && (n.next = r), r !== null && (r.prev = n), t !== null && (t.first === e && (t.first = r), t.last === e && (t.last = n));
}
let ye = !1;
function Yt(e) {
  ye = e;
}
let be = !1;
function qt(e) {
  be = e;
}
let m = null, q = !1;
function H(e) {
  m = e;
}
let y = null;
function X(e) {
  y = e;
}
let R = null;
function li(e) {
  m !== null && (R === null ? R = [e] : R.push(e));
}
let L = null, j = 0, V = null;
function si(e) {
  V = e;
}
let Ln = 1, Fe = 0, ve = Fe;
function Wt(e) {
  ve = e;
}
let ne = !1;
function In() {
  return ++Ln;
}
function Ye(e) {
  var a;
  var t = e.f;
  if ((t & F) !== 0)
    return !0;
  if ((t & J) !== 0) {
    var n = e.deps, r = (t & B) !== 0;
    if (t & N && (e.f &= ~De), n !== null) {
      var i, f, l = (t & Ke) !== 0, s = r && y !== null && !ne, u = n.length;
      if ((l || s) && (y === null || (y.f & Z) === 0)) {
        var o = (
          /** @type {Derived} */
          e
        ), v = o.parent;
        for (i = 0; i < u; i++)
          f = n[i], (l || !((a = f == null ? void 0 : f.reactions) != null && a.includes(o))) && (f.reactions ?? (f.reactions = [])).push(o);
        l && (o.f ^= Ke), s && v !== null && (v.f & B) === 0 && (o.f ^= B);
      }
      for (i = 0; i < u; i++)
        if (f = n[i], Ye(
          /** @type {Derived} */
          f
        ) && pn(
          /** @type {Derived} */
          f
        ), f.wv > e.wv)
          return !0;
    }
    (!r || y !== null && !ne) && M(e, I);
  }
  return !1;
}
function Rn(e, t, n = !0) {
  var r = e.reactions;
  if (r !== null && !(R != null && R.includes(e)))
    for (var i = 0; i < r.length; i++) {
      var f = r[i];
      (f.f & N) !== 0 ? Rn(
        /** @type {Derived} */
        f,
        t,
        !1
      ) : t === f && (n ? M(f, F) : (f.f & I) !== 0 && M(f, J), xe(
        /** @type {Effect} */
        f
      ));
    }
}
function mt(e) {
  var E;
  var t = L, n = j, r = V, i = m, f = ne, l = R, s = D, u = q, o = ve, v = e.f;
  L = /** @type {null | Value[]} */
  null, j = 0, V = null, ne = (v & B) !== 0 && (q || !ye || m === null), m = (v & (we | Ne)) === 0 ? e : null, R = null, Ze(e.ctx), q = !1, ve = ++Fe, e.ac !== null && (ft(() => {
    e.ac.abort(pe);
  }), e.ac = null);
  try {
    e.f |= Ge;
    var a = (
      /** @type {Function} */
      e.fn
    ), c = a(), _ = e.deps;
    if (L !== null) {
      var w;
      if ($e(e, j), _ !== null && j > 0)
        for (_.length = j + L.length, w = 0; w < L.length; w++)
          _[j + w] = L[w];
      else
        e.deps = _ = L;
      if (!ne || // Deriveds that already have reactions can cleanup, so we still add them as reactions
      (v & N) !== 0 && /** @type {import('#client').Derived} */
      e.reactions !== null)
        for (w = j; w < _.length; w++)
          ((E = _[w]).reactions ?? (E.reactions = [])).push(e);
    } else _ !== null && j < _.length && ($e(e, j), _.length = j);
    if (on() && V !== null && !q && _ !== null && (e.f & (N | J | F)) === 0)
      for (w = 0; w < /** @type {Source[]} */
      V.length; w++)
        Rn(
          V[w],
          /** @type {Effect} */
          e
        );
    return i !== null && i !== e && (Fe++, V !== null && (r === null ? r = V : r.push(.../** @type {Source[]} */
    V))), (e.f & ae) !== 0 && (e.f ^= ae), c;
  } catch (d) {
    return Ir(d);
  } finally {
    e.f ^= Ge, L = t, j = n, V = r, m = i, ne = f, R = l, Ze(s), q = u, ve = o;
  }
}
function ui(e, t) {
  let n = t.reactions;
  if (n !== null) {
    var r = fr.call(n, e);
    if (r !== -1) {
      var i = n.length - 1;
      i === 0 ? n = t.reactions = null : (n[r] = n[i], n.pop());
    }
  }
  n === null && (t.f & N) !== 0 && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (L === null || !L.includes(t)) && (M(t, J), (t.f & (B | Ke)) === 0 && (t.f ^= Ke), pt(
    /** @type {Derived} **/
    t
  ), $e(
    /** @type {Derived} **/
    t,
    0
  ));
}
function $e(e, t) {
  var n = e.deps;
  if (n !== null)
    for (var r = t; r < n.length; r++)
      ui(e, n[r]);
}
function Ue(e) {
  var t = e.f;
  if ((t & Z) === 0) {
    M(e, I);
    var n = y, r = ye;
    if (y = e, ye = !0, b) {
      var i = Be;
      Dt(e.component_function);
      var f = (
        /** @type {any} */
        je
      );
      Xe(e.dev_stack ?? je);
    }
    try {
      (t & he) !== 0 ? ii(e) : Nn(e), Pn(e);
      var l = mt(e);
      e.teardown = typeof l == "function" ? l : null, e.wv = Ln;
      var s;
      b && Pr && (e.f & F) !== 0 && e.deps;
    } finally {
      ye = r, y = n, b && (Dt(i), Xe(f));
    }
  }
}
async function ai() {
  await Promise.resolve(), Mr();
}
function G(e) {
  var c;
  var t = e.f, n = (t & N) !== 0;
  if (m !== null && !q) {
    var r = y !== null && (y.f & Z) !== 0;
    if (!r && !(R != null && R.includes(e))) {
      var i = m.deps;
      if ((m.f & Ge) !== 0)
        e.rv < Fe && (e.rv = Fe, L === null && i !== null && i[j] === e ? j++ : L === null ? L = [e] : (!ne || !L.includes(e)) && L.push(e));
      else {
        (m.deps ?? (m.deps = [])).push(e);
        var f = e.reactions;
        f === null ? e.reactions = [m] : f.includes(m) || f.push(m);
      }
    }
  } else if (n && /** @type {Derived} */
  e.deps === null && /** @type {Derived} */
  e.effects === null) {
    var l = (
      /** @type {Derived} */
      e
    ), s = l.parent;
    s !== null && (s.f & B) === 0 && (l.f ^= B);
  }
  if (b) {
    if (ce) {
      var u = (ce.f & Ge) !== 0, o = (c = ce.deps) == null ? void 0 : c.includes(e);
      if (!u && !q && !o) {
        Ar(
          /** @type {string} */
          e.label
        );
        var v = un("TracedAt");
        v && console.warn(v);
      }
    }
    Fr.delete(e);
  }
  if (be) {
    if (re.has(e))
      return re.get(e);
    if (n) {
      l = /** @type {Derived} */
      e;
      var a = l.v;
      return ((l.f & I) === 0 && l.reactions !== null || Mn(l)) && (a = Pt(l)), re.set(l, a), a;
    }
  } else if (n) {
    if (l = /** @type {Derived} */
    e, O != null && O.has(l))
      return O.get(l);
    Ye(l) && pn(l);
  }
  if (O != null && O.has(e))
    return O.get(e);
  if ((e.f & ae) !== 0)
    throw e.v;
  return e.v;
}
function Mn(e) {
  if (e.v === T) return !0;
  if (e.deps === null) return !1;
  for (const t of e.deps)
    if (re.has(t) || (t.f & N) !== 0 && Mn(
      /** @type {Derived} */
      t
    ))
      return !0;
  return !1;
}
function Lt(e) {
  var t = q;
  try {
    return q = !0, e();
  } finally {
    q = t;
  }
}
const oi = -7169;
function M(e, t) {
  e.f = e.f & oi | t;
}
const ci = /* @__PURE__ */ new Set(), vi = /* @__PURE__ */ new Set();
function di(e, t, n, r = {}) {
  function i(f) {
    if (r.capture || hi.call(t, f), !f.cancelBubble)
      return ft(() => n == null ? void 0 : n.call(this, f));
  }
  return e.startsWith("pointer") || e.startsWith("touch") || e === "wheel" ? rt(() => {
    t.addEventListener(e, i, r);
  }) : t.addEventListener(e, i, r), i;
}
function _i(e) {
  for (var t = 0; t < e.length; t++)
    ci.add(e[t]);
  for (var n of vi)
    n(e);
}
let Ht = null;
function hi(e) {
  var P;
  var t = this, n = (
    /** @type {Node} */
    t.ownerDocument
  ), r = e.type, i = ((P = e.composedPath) == null ? void 0 : P.call(e)) || [], f = (
    /** @type {null | Element} */
    i[0] || e.target
  );
  Ht = e;
  var l = 0, s = Ht === e && e.__root;
  if (s) {
    var u = i.indexOf(s);
    if (u !== -1 && (t === document || t === /** @type {any} */
    window)) {
      e.__root = t;
      return;
    }
    var o = i.indexOf(t);
    if (o === -1)
      return;
    u <= o && (l = u);
  }
  if (f = /** @type {Element} */
  i[l] || e.target, f !== t) {
    de(e, "currentTarget", {
      configurable: !0,
      get() {
        return f || n;
      }
    });
    var v = m, a = y;
    H(null), X(null);
    try {
      for (var c, _ = []; f !== null; ) {
        var w = f.assignedSlot || f.parentNode || /** @type {any} */
        f.host || null;
        try {
          var E = f["__" + r];
          if (E != null && (!/** @type {any} */
          f.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          e.target === f))
            if (St(E)) {
              var [d, ...p] = E;
              d.apply(f, [e, ...p]);
            } else
              E.call(f, e);
        } catch (g) {
          c ? _.push(g) : c = g;
        }
        if (e.cancelBubble || w === t || w === null)
          break;
        f = w;
      }
      if (c) {
        for (let g of _)
          queueMicrotask(() => {
            throw g;
          });
        throw c;
      }
    } finally {
      e.__root = t, delete e.currentTarget, H(v), X(a);
    }
  }
}
function wi(e) {
  var t = document.createElement("template");
  return t.innerHTML = e.replaceAll("<!>", "<!---->"), t.content;
}
function bi(e, t) {
  var n = (
    /** @type {Effect} */
    y
  );
  n.nodes_start === null && (n.nodes_start = e, n.nodes_end = t);
}
// @__NO_SIDE_EFFECTS__
function gi(e, t) {
  var n, r = !e.startsWith("<!>");
  return () => {
    n === void 0 && (n = wi(r ? e : "<!>" + e), n = /** @type {Node} */
    /* @__PURE__ */ Sn(n));
    var i = (
      /** @type {TemplateNode} */
      n.cloneNode(!0)
    );
    return bi(i, i), i;
  };
}
function pi(e, t) {
  e !== null && e.before(
    /** @type {Node} */
    t
  );
}
function Ei(e) {
  return e.endsWith("capture") && e !== "gotpointercapture" && e !== "lostpointercapture";
}
const mi = [
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
function yi(e) {
  return mi.includes(e);
}
const Si = {
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
function ki(e) {
  return e = e.toLowerCase(), Si[e] ?? e;
}
if (b) {
  let e = function(t) {
    if (!(t in globalThis)) {
      let n;
      Object.defineProperty(globalThis, t, {
        configurable: !0,
        // eslint-disable-next-line getter-return
        get: () => {
          if (n !== void 0)
            return n;
          mr(t);
        },
        set: (r) => {
          n = r;
        }
      });
    }
  };
  e("$state"), e("$effect"), e("$derived"), e("$inspect"), e("$props"), e("$bindable");
}
function Ai(e, t) {
  var n = void 0, r;
  On(() => {
    n !== (n = t()) && (r && (_e(r), r = null), n && (r = xn(() => {
      Ct(() => (
        /** @type {(node: Element) => void} */
        n(e)
      ));
    })));
  });
}
function Dn(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var i = e.length;
    for (t = 0; t < i; t++) e[t] && (n = Dn(e[t])) && (r && (r += " "), r += n);
  } else for (n in e) e[n] && (r && (r += " "), r += n);
  return r;
}
function Ti() {
  for (var e, t, n = 0, r = "", i = arguments.length; n < i; n++) (e = arguments[n]) && (t = Dn(e)) && (r && (r += " "), r += t);
  return r;
}
function jn(e) {
  return typeof e == "object" ? Ti(e) : e ?? "";
}
const zt = [...` 	
\r\f \v\uFEFF`];
function Oi(e, t, n) {
  var r = e == null ? "" : "" + e;
  if (n) {
    for (var i in n)
      if (n[i])
        r = r ? r + " " + i : i;
      else if (r.length)
        for (var f = i.length, l = 0; (l = r.indexOf(i, l)) >= 0; ) {
          var s = l + f;
          (l === 0 || zt.includes(r[l - 1])) && (s === r.length || zt.includes(r[s])) ? r = (l === 0 ? "" : r.substring(0, l)) + r.substring(s + 1) : l = s;
        }
  }
  return r === "" ? null : r;
}
function Kt(e, t = !1) {
  var n = t ? " !important;" : ";", r = "";
  for (var i in e) {
    var f = e[i];
    f != null && f !== "" && (r += " " + i + ": " + f + n);
  }
  return r;
}
function ot(e) {
  return e[0] !== "-" || e[1] !== "-" ? e.toLowerCase() : e;
}
function xi(e, t) {
  if (t) {
    var n = "", r, i;
    if (Array.isArray(t) ? (r = t[0], i = t[1]) : r = t, e) {
      e = String(e).replaceAll(/\s*\/\*.*?\*\/\s*/g, "").trim();
      var f = !1, l = 0, s = !1, u = [];
      r && u.push(...Object.keys(r).map(ot)), i && u.push(...Object.keys(i).map(ot));
      var o = 0, v = -1;
      const E = e.length;
      for (var a = 0; a < E; a++) {
        var c = e[a];
        if (s ? c === "/" && e[a - 1] === "*" && (s = !1) : f ? f === c && (f = !1) : c === "/" && e[a + 1] === "*" ? s = !0 : c === '"' || c === "'" ? f = c : c === "(" ? l++ : c === ")" && l--, !s && f === !1 && l === 0) {
          if (c === ":" && v === -1)
            v = a;
          else if (c === ";" || a === E - 1) {
            if (v !== -1) {
              var _ = ot(e.substring(o, v).trim());
              if (!u.includes(_)) {
                c !== ";" && a++;
                var w = e.substring(o, a).trim();
                n += " " + w + ";";
              }
            }
            o = a + 1, v = -1;
          }
        }
      }
    }
    return r && (n += Kt(r)), i && (n += Kt(i, !0)), n = n.trim(), n === "" ? null : n;
  }
  return e == null ? null : String(e);
}
function Fn(e, t, n, r, i, f) {
  var l = e.__className;
  if (l !== n || l === void 0) {
    var s = Oi(n, r, f);
    s == null ? e.removeAttribute("class") : t ? e.className = s : e.setAttribute("class", s), e.__className = n;
  } else if (f && i !== f)
    for (var u in f) {
      var o = !!f[u];
      (i == null || o !== !!i[u]) && e.classList.toggle(u, o);
    }
  return f;
}
function ct(e, t = {}, n, r) {
  for (var i in n) {
    var f = n[i];
    t[i] !== f && (n[i] == null ? e.style.removeProperty(i) : e.style.setProperty(i, f, r));
  }
}
function Pi(e, t, n, r) {
  var i = e.__style;
  if (i !== t) {
    var f = xi(t, r);
    f == null ? e.removeAttribute("style") : e.style.cssText = f, e.__style = t;
  } else r && (Array.isArray(r) ? (ct(e, n == null ? void 0 : n[0], r[0]), ct(e, n == null ? void 0 : n[1], r[1], "important")) : ct(e, n, r));
  return r;
}
function yt(e, t, n = !1) {
  if (e.multiple) {
    if (t == null)
      return;
    if (!St(t))
      return Tr();
    for (var r of e.options)
      r.selected = t.includes(Gt(r));
    return;
  }
  for (r of e.options) {
    var i = Gt(r);
    if (Wr(i, t)) {
      r.selected = !0;
      return;
    }
  }
  (!n || t !== void 0) && (e.selectedIndex = -1);
}
function Ni(e) {
  var t = new MutationObserver(() => {
    yt(e, e.__value);
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
  }), kn(() => {
    t.disconnect();
  });
}
function Gt(e) {
  return "__value" in e ? e.__value : e.value;
}
const Ce = Symbol("class"), Le = Symbol("style"), Un = Symbol("is custom element"), Vn = Symbol("is html");
function Ci(e, t) {
  t ? e.hasAttribute("selected") || e.setAttribute("selected", "") : e.removeAttribute("selected");
}
function Zt(e, t, n, r) {
  var i = Bn(e);
  i[t] !== (i[t] = n) && (t === "loading" && (e[dr] = n), n == null ? e.removeAttribute(t) : typeof n != "string" && Yn(e).includes(t) ? e[t] = n : e.setAttribute(t, n));
}
function Li(e, t, n, r, i = !1, f = !1) {
  var l = Bn(e), s = l[Un], u = !l[Vn], o = t || {}, v = e.tagName === "OPTION";
  for (var a in t)
    a in n || (n[a] = null);
  n.class ? n.class = jn(n.class) : n[Ce] && (n.class = null), n[Le] && (n.style ?? (n.style = null));
  var c = Yn(e);
  for (const g in n) {
    let h = n[g];
    if (v && g === "value" && h == null) {
      e.value = e.__value = "", o[g] = h;
      continue;
    }
    if (g === "class") {
      var _ = e.namespaceURI === "http://www.w3.org/1999/xhtml";
      Fn(e, _, h, r, t == null ? void 0 : t[Ce], n[Ce]), o[g] = h, o[Ce] = n[Ce];
      continue;
    }
    if (g === "style") {
      Pi(e, h, t == null ? void 0 : t[Le], n[Le]), o[g] = h, o[Le] = n[Le];
      continue;
    }
    var w = o[g];
    if (!(h === w && !(h === void 0 && e.hasAttribute(g)))) {
      o[g] = h;
      var E = g[0] + g[1];
      if (E !== "$$")
        if (E === "on") {
          const S = {}, z = "$$" + g;
          let C = g.slice(2);
          var d = yi(C);
          if (Ei(C) && (C = C.slice(0, -7), S.capture = !0), !d && w) {
            if (h != null) continue;
            e.removeEventListener(C, o[z], S), o[z] = null;
          }
          if (h != null)
            if (d)
              e[`__${C}`] = h, _i([C]);
            else {
              let qn = function(Wn) {
                o[g].call(this, Wn);
              };
              o[z] = di(C, e, qn, S);
            }
          else d && (e[`__${C}`] = void 0);
        } else if (g === "style")
          Zt(e, g, h);
        else if (g === "autofocus")
          Jr(
            /** @type {HTMLElement} */
            e,
            !!h
          );
        else if (!s && (g === "__value" || g === "value" && h != null))
          e.value = e.__value = h;
        else if (g === "selected" && v)
          Ci(
            /** @type {HTMLOptionElement} */
            e,
            h
          );
        else {
          var p = g;
          u || (p = ki(p));
          var P = p === "defaultValue" || p === "defaultChecked";
          if (h == null && !s && !P)
            if (l[g] = null, p === "value" || p === "checked") {
              let S = (
                /** @type {HTMLInputElement} */
                e
              );
              const z = t === void 0;
              if (p === "value") {
                let C = S.defaultValue;
                S.removeAttribute(p), S.defaultValue = C, S.value = S.__value = z ? C : null;
              } else {
                let C = S.defaultChecked;
                S.removeAttribute(p), S.defaultChecked = C, S.checked = z ? C : !1;
              }
            } else
              e.removeAttribute(g);
          else P || c.includes(p) && (s || typeof h != "string") ? (e[p] = h, p in l && (l[p] = T)) : typeof h != "function" && Zt(e, p, h);
        }
    }
  }
  return o;
}
function Ii(e, t, n = [], r = [], i, f = !1, l = !1) {
  bn(n, r, (s) => {
    var u = void 0, o = {}, v = e.nodeName === "SELECT", a = !1;
    if (On(() => {
      var _ = t(...s.map(G)), w = Li(
        e,
        u,
        _,
        i,
        f,
        l
      );
      a && v && "value" in _ && yt(
        /** @type {HTMLSelectElement} */
        e,
        _.value
      );
      for (let d of Object.getOwnPropertySymbols(o))
        _[d] || _e(o[d]);
      for (let d of Object.getOwnPropertySymbols(_)) {
        var E = _[d];
        d.description === ir && (!u || E !== u[d]) && (o[d] && _e(o[d]), o[d] = xn(() => Ai(e, () => E))), w[d] = E;
      }
      u = w;
    }), v) {
      var c = (
        /** @type {HTMLSelectElement} */
        e
      );
      Ct(() => {
        yt(
          c,
          /** @type {Record<string | symbol, any>} */
          u.value,
          !0
        ), Ni(c);
      });
    }
    a = !0;
  });
}
function Bn(e) {
  return (
    /** @type {Record<string | symbol, unknown>} **/
    // @ts-expect-error
    e.__attributes ?? (e.__attributes = {
      [Un]: e.nodeName.includes("-"),
      [Vn]: e.namespaceURI === rr
    })
  );
}
var Xt = /* @__PURE__ */ new Map();
function Yn(e) {
  var t = e.getAttribute("is") || e.nodeName, n = Xt.get(t);
  if (n) return n;
  Xt.set(t, n = []);
  for (var r, i = e, f = Element.prototype; f !== i; ) {
    r = lr(i);
    for (var l in r)
      r[l].set && n.push(l);
    i = tn(i);
  }
  return n;
}
function Ri(e, t, n = t) {
  var r = /* @__PURE__ */ new WeakSet();
  $r(e, "input", async (i) => {
    b && e.type === "checkbox" && Mt();
    var f = i ? e.defaultValue : e.value;
    if (f = vt(e) ? dt(f) : f, n(f), k !== null && r.add(k), await ai(), f !== (f = t())) {
      var l = e.selectionStart, s = e.selectionEnd, u = e.value.length;
      if (e.value = f ?? "", s !== null) {
        var o = e.value.length;
        l === s && s === u && o > u ? (e.selectionStart = o, e.selectionEnd = o) : (e.selectionStart = l, e.selectionEnd = Math.min(s, o));
      }
    }
  }), // If we are hydrating and the value has since changed,
  // then use the updated value from the input instead.
  // If defaultValue is set, then value == defaultValue
  // TODO Svelte 6: remove input.value check and set to empty string?
  Lt(t) == null && e.value && (n(vt(e) ? dt(e.value) : e.value), k !== null && r.add(k)), Tn(() => {
    b && e.type === "checkbox" && Mt();
    var i = t();
    if (e === document.activeElement) {
      var f = (
        /** @type {Batch} */
        He ?? k
      );
      if (r.has(f))
        return;
    }
    vt(e) && i === dt(e.value) || e.type === "date" && !i && !e.value || i !== e.value && (e.value = i ?? "");
  });
}
function vt(e) {
  var t = e.type;
  return t === "number" || t === "range";
}
function dt(e) {
  return e === "" ? null : +e;
}
function Jt(e, t) {
  return e === t || (e == null ? void 0 : e[oe]) === t;
}
function Mi(e = {}, t, n, r) {
  return Ct(() => {
    var i, f;
    return Tn(() => {
      i = f, f = [], Lt(() => {
        e !== n(...f) && (t(e, ...f), i && Jt(n(...i), e) && t(null, ...i));
      });
    }), () => {
      rt(() => {
        f && Jt(n(...f), e) && t(null, ...f);
      });
    };
  }), e;
}
let We = !1;
function Di(e) {
  var t = We;
  try {
    return We = !1, [e(), We];
  } finally {
    We = t;
  }
}
function Ie(e, t, n, r) {
  var P;
  var i = (n & er) !== 0, f = (n & tr) !== 0, l = (
    /** @type {V} */
    r
  ), s = !0, u = () => (s && (s = !1, l = f ? Lt(
    /** @type {() => V} */
    r
  ) : (
    /** @type {V} */
    r
  )), l), o;
  if (i) {
    var v = oe in e || vr in e;
    o = ((P = Re(e, t)) == null ? void 0 : P.set) ?? (v && t in e ? (g) => e[t] = g : void 0);
  }
  var a, c = !1;
  i ? [a, c] = Di(() => (
    /** @type {V} */
    e[t]
  )) : a = /** @type {V} */
  e[t], a === void 0 && r !== void 0 && (a = u(), o && (Er(t), o(a)));
  var _;
  if (_ = () => {
    var g = (
      /** @type {V} */
      e[t]
    );
    return g === void 0 ? u() : (s = !0, g);
  }, (n & $n) === 0)
    return _;
  if (o) {
    var w = e.$$legacy;
    return (
      /** @type {() => V} */
      (function(g, h) {
        return arguments.length > 0 ? ((!h || w || c) && o(h ? _() : g), g) : _();
      })
    );
  }
  var E = !1, d = ((n & Qn) !== 0 ? xt : Vr)(() => (E = !1, _()));
  b && (d.label = t), i && G(d);
  var p = (
    /** @type {Effect} */
    y
  );
  return (
    /** @type {() => V} */
    (function(g, h) {
      if (arguments.length > 0) {
        const S = h ? G(d) : i ? Ee(g) : g;
        return te(d, S), E = !0, l !== void 0 && (l = S), g;
      }
      return be && E || (p.f & Z) !== 0 ? d.v : G(d);
    })
  );
}
var ji = /* @__PURE__ */ gi("<div><input/></div>");
function qi(e, t) {
  Nr(t, !0);
  let n = Ie(t, "value", 15, 0), r = Ie(t, "defaultValue", 3, 0), i = Ie(t, "disabled", 3, !1), f = Ie(t, "readOnly", 3, !1), l = Ie(t, "inputProps", 19, () => ({})), s, u = null, o = null;
  Kn(async () => {
    if (!s) return;
    const d = s;
    d.value = String(n() ?? r() ?? 0);
    const p = { renderer: Xn };
    t.min !== void 0 && (p.min = t.min), t.max !== void 0 && (p.max = t.max), t.step !== void 0 && (p.step = t.step), t.decimals !== void 0 && (p.decimals = t.decimals), t.prefix !== void 0 && (p.prefix = t.prefix), t.suffix !== void 0 && (p.postfix = t.suffix), t.coreOptions && Object.assign(p, t.coreOptions), u = Zn(d, p);
    const P = () => {
      var S;
      const h = Number(d.value);
      n(h), (S = t.onChange) == null || S.call(t, { value: h, meta: { source: "user", action: "input" } });
    };
    d.addEventListener("change", P);
    const g = [
      {
        event: "touchspin.on.min",
        handler: () => {
          var h;
          return (h = t.onOnMin) == null ? void 0 : h.call(t);
        }
      },
      {
        event: "touchspin.on.max",
        handler: () => {
          var h;
          return (h = t.onOnMax) == null ? void 0 : h.call(t);
        }
      },
      {
        event: "touchspin.on.startspin",
        handler: () => {
          var h;
          return (h = t.onOnStartSpin) == null ? void 0 : h.call(t);
        }
      },
      {
        event: "touchspin.on.stopspin",
        handler: () => {
          var h;
          return (h = t.onOnStopSpin) == null ? void 0 : h.call(t);
        }
      },
      {
        event: "touchspin.on.startupspin",
        handler: () => {
          var h;
          return (h = t.onOnStartUpSpin) == null ? void 0 : h.call(t);
        }
      },
      {
        event: "touchspin.on.startdownspin",
        handler: () => {
          var h;
          return (h = t.onOnStartDownSpin) == null ? void 0 : h.call(t);
        }
      },
      {
        event: "touchspin.on.stopupspin",
        handler: () => {
          var h;
          return (h = t.onOnStopUpSpin) == null ? void 0 : h.call(t);
        }
      },
      {
        event: "touchspin.on.stopdownspin",
        handler: () => {
          var h;
          return (h = t.onOnStopDownSpin) == null ? void 0 : h.call(t);
        }
      },
      {
        event: "touchspin.on.speedchange",
        handler: () => {
          var h;
          return (h = t.onOnSpeedChange) == null ? void 0 : h.call(t);
        }
      }
    ];
    g.forEach(({ event: h, handler: S }) => {
      d.addEventListener(h, S);
    }), o = () => {
      d.removeEventListener("change", P), g.forEach(({ event: h, handler: S }) => {
        d.removeEventListener(h, S);
      }), u == null || u.destroy(), u = null;
    };
  }), Gn(() => {
    o && o();
  }), at(() => {
    u && n() !== void 0 && u.setValue(n());
  }), at(() => {
    if (!u) return;
    const d = {};
    t.min !== void 0 && (d.min = t.min), t.max !== void 0 && (d.max = t.max), t.step !== void 0 && (d.step = t.step), t.decimals !== void 0 && (d.decimals = t.decimals), t.prefix !== void 0 && (d.prefix = t.prefix), t.suffix !== void 0 && (d.postfix = t.suffix), u.updateSettings(d);
  }), at(() => {
    s && (i() !== void 0 && (s.disabled = i()), f() !== void 0 && (s.readOnly = f()));
  });
  var a = { handle: {
    focus: () => s == null ? void 0 : s.focus(),
    blur: () => s == null ? void 0 : s.blur(),
    increment: () => u == null ? void 0 : u.upOnce(),
    decrement: () => u == null ? void 0 : u.downOnce(),
    getValue: () => (u == null ? void 0 : u.getValue()) ?? 0,
    setValue: (d) => {
      var p;
      n(d), u == null || u.setValue(d), (p = t.onChange) == null || p.call(t, { value: d, meta: { source: "api", action: "setValue" } });
    },
    startUpSpin: () => u == null ? void 0 : u.startUpSpin(),
    startDownSpin: () => u == null ? void 0 : u.startDownSpin(),
    stopSpin: () => u == null ? void 0 : u.stopSpin(),
    updateSettings: (d) => u == null ? void 0 : u.updateSettings(d)
  } }, c = ji(), _ = Xr(c), w = (
    // Export the handle for imperative API
    (d) => {
      var p;
      return (p = t.onBlur) == null ? void 0 : p.call(t, d);
    }
  ), E = (d) => {
    var p;
    return (p = t.onFocus) == null ? void 0 : p.call(t, d);
  };
  return Ii(
    _,
    () => ({
      class: t.inputClass,
      name: t.name,
      id: t.id,
      disabled: i(),
      readonly: f(),
      "data-testid": t.dataTestid ? `${t.dataTestid}-input` : void 0,
      onblur: w,
      onfocus: E,
      ...l()
    }),
    void 0,
    void 0,
    void 0,
    !0
  ), Mi(_, (d) => s = d, () => s), ri(() => Fn(c, 1, jn(t.class))), Ri(_, n), pi(e, c), Cr(a);
}
export {
  qi as default
};
