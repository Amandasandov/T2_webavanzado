(async () => {
  (function() {
    const n = document.createElement("link").relList;
    if (n && n.supports && n.supports("modulepreload")) return;
    for (const i of document.querySelectorAll('link[rel="modulepreload"]')) r(i);
    new MutationObserver((i) => {
      for (const s of i) if (s.type === "childList") for (const c of s.addedNodes) c.tagName === "LINK" && c.rel === "modulepreload" && r(c);
    }).observe(document, {
      childList: true,
      subtree: true
    });
    function t(i) {
      const s = {};
      return i.integrity && (s.integrity = i.integrity), i.referrerPolicy && (s.referrerPolicy = i.referrerPolicy), i.crossOrigin === "use-credentials" ? s.credentials = "include" : i.crossOrigin === "anonymous" ? s.credentials = "omit" : s.credentials = "same-origin", s;
    }
    function r(i) {
      if (i.ep) return;
      i.ep = true;
      const s = t(i);
      fetch(i.href, s);
    }
  })();
  let o, g = null;
  function O() {
    return (g === null || g.byteLength === 0) && (g = new Uint8Array(o.memory.buffer)), g;
  }
  let d = 0;
  function l(e, n) {
    const t = n(e.length * 1, 1) >>> 0;
    return O().set(e, t / 1), d = e.length, t;
  }
  function y(e, n) {
    return e = e >>> 0, O().subarray(e / 1, e / 1 + n);
  }
  function j(e) {
    const n = l(e, o.__wbindgen_malloc), t = d, r = o.grayscale(n, t);
    var i = y(r[0], r[1]).slice();
    return o.__wbindgen_free(r[0], r[1] * 1, 1), i;
  }
  function T(e, n) {
    const t = l(e, o.__wbindgen_malloc), r = d, i = o.blur(t, r, n);
    var s = y(i[0], i[1]).slice();
    return o.__wbindgen_free(i[0], i[1] * 1, 1), s;
  }
  function U(e) {
    const n = l(e, o.__wbindgen_malloc), t = d, r = o.invert(n, t);
    var i = y(r[0], r[1]).slice();
    return o.__wbindgen_free(r[0], r[1] * 1, 1), i;
  }
  function F(e, n) {
    const t = l(e, o.__wbindgen_malloc), r = d, i = o.brighten(t, r, n);
    var s = y(i[0], i[1]).slice();
    return o.__wbindgen_free(i[0], i[1] * 1, 1), s;
  }
  function V(e) {
    const n = l(e, o.__wbindgen_malloc), t = d, r = o.flip(n, t);
    var i = y(r[0], r[1]).slice();
    return o.__wbindgen_free(r[0], r[1] * 1, 1), i;
  }
  function K(e) {
    const n = l(e, o.__wbindgen_malloc), t = d, r = o.rotate(n, t);
    var i = y(r[0], r[1]).slice();
    return o.__wbindgen_free(r[0], r[1] * 1, 1), i;
  }
  async function k(e, n) {
    if (typeof Response == "function" && e instanceof Response) {
      if (typeof WebAssembly.instantiateStreaming == "function") try {
        return await WebAssembly.instantiateStreaming(e, n);
      } catch (r) {
        if (e.headers.get("Content-Type") != "application/wasm") console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", r);
        else throw r;
      }
      const t = await e.arrayBuffer();
      return await WebAssembly.instantiate(t, n);
    } else {
      const t = await WebAssembly.instantiate(e, n);
      return t instanceof WebAssembly.Instance ? {
        instance: t,
        module: e
      } : t;
    }
  }
  function q() {
    const e = {};
    return e.wbg = {}, e.wbg.__wbindgen_init_externref_table = function() {
      const n = o.__wbindgen_export_0, t = n.grow(4);
      n.set(0, void 0), n.set(t + 0, void 0), n.set(t + 1, null), n.set(t + 2, true), n.set(t + 3, false);
    }, e;
  }
  function z(e, n) {
    return o = e.exports, W.__wbindgen_wasm_module = n, g = null, o.__wbindgen_start(), o;
  }
  async function W(e) {
    if (o !== void 0) return o;
    typeof e < "u" && (Object.getPrototypeOf(e) === Object.prototype ? { module_or_path: e } = e : console.warn("using deprecated parameters for the initialization function; pass a single object instead")), typeof e > "u" && (e = new URL("/assets/wasm_img_filters_bg-D7uvn5b7.wasm", import.meta.url));
    const n = q();
    (typeof e == "string" || typeof Request == "function" && e instanceof Request || typeof URL == "function" && e instanceof URL) && (e = fetch(e));
    const { instance: t, module: r } = await k(await e, n);
    return z(t, r);
  }
  const _ = (e, n) => n.some((t) => e instanceof t);
  let L, E;
  function $() {
    return L || (L = [
      IDBDatabase,
      IDBObjectStore,
      IDBIndex,
      IDBCursor,
      IDBTransaction
    ]);
  }
  function G() {
    return E || (E = [
      IDBCursor.prototype.advance,
      IDBCursor.prototype.continue,
      IDBCursor.prototype.continuePrimaryKey
    ]);
  }
  const I = /* @__PURE__ */ new WeakMap(), p = /* @__PURE__ */ new WeakMap(), m = /* @__PURE__ */ new WeakMap();
  function H(e) {
    const n = new Promise((t, r) => {
      const i = () => {
        e.removeEventListener("success", s), e.removeEventListener("error", c);
      }, s = () => {
        t(u(e.result)), i();
      }, c = () => {
        r(e.error), i();
      };
      e.addEventListener("success", s), e.addEventListener("error", c);
    });
    return m.set(n, e), n;
  }
  function J(e) {
    if (I.has(e)) return;
    const n = new Promise((t, r) => {
      const i = () => {
        e.removeEventListener("complete", s), e.removeEventListener("error", c), e.removeEventListener("abort", c);
      }, s = () => {
        t(), i();
      }, c = () => {
        r(e.error || new DOMException("AbortError", "AbortError")), i();
      };
      e.addEventListener("complete", s), e.addEventListener("error", c), e.addEventListener("abort", c);
    });
    I.set(e, n);
  }
  let B = {
    get(e, n, t) {
      if (e instanceof IDBTransaction) {
        if (n === "done") return I.get(e);
        if (n === "store") return t.objectStoreNames[1] ? void 0 : t.objectStore(t.objectStoreNames[0]);
      }
      return u(e[n]);
    },
    set(e, n, t) {
      return e[n] = t, true;
    },
    has(e, n) {
      return e instanceof IDBTransaction && (n === "done" || n === "store") ? true : n in e;
    }
  };
  function C(e) {
    B = e(B);
  }
  function Q(e) {
    return G().includes(e) ? function(...n) {
      return e.apply(D(this), n), u(this.request);
    } : function(...n) {
      return u(e.apply(D(this), n));
    };
  }
  function X(e) {
    return typeof e == "function" ? Q(e) : (e instanceof IDBTransaction && J(e), _(e, $()) ? new Proxy(e, B) : e);
  }
  function u(e) {
    if (e instanceof IDBRequest) return H(e);
    if (p.has(e)) return p.get(e);
    const n = X(e);
    return n !== e && (p.set(e, n), m.set(n, e)), n;
  }
  const D = (e) => m.get(e);
  function Y(e, n, { blocked: t, upgrade: r, blocking: i, terminated: s } = {}) {
    const c = indexedDB.open(e, n), b = u(c);
    return r && c.addEventListener("upgradeneeded", (a) => {
      r(u(c.result), a.oldVersion, a.newVersion, u(c.transaction), a);
    }), t && c.addEventListener("blocked", (a) => t(a.oldVersion, a.newVersion, a)), b.then((a) => {
      s && a.addEventListener("close", () => s()), i && a.addEventListener("versionchange", (f) => i(f.oldVersion, f.newVersion, f));
    }).catch(() => {
    }), b;
  }
  const Z = [
    "get",
    "getKey",
    "getAll",
    "getAllKeys",
    "count"
  ], ee = [
    "put",
    "add",
    "delete",
    "clear"
  ], h = /* @__PURE__ */ new Map();
  function P(e, n) {
    if (!(e instanceof IDBDatabase && !(n in e) && typeof n == "string")) return;
    if (h.get(n)) return h.get(n);
    const t = n.replace(/FromIndex$/, ""), r = n !== t, i = ee.includes(t);
    if (!(t in (r ? IDBIndex : IDBObjectStore).prototype) || !(i || Z.includes(t))) return;
    const s = async function(c, ...b) {
      const a = this.transaction(c, i ? "readwrite" : "readonly");
      let f = a.store;
      return r && (f = f.index(b.shift())), (await Promise.all([
        f[t](...b),
        i && a.done
      ]))[0];
    };
    return h.set(n, s), s;
  }
  C((e) => ({
    ...e,
    get: (n, t, r) => P(n, t) || e.get(n, t, r),
    has: (n, t) => !!P(n, t) || e.has(n, t)
  }));
  const ne = [
    "continue",
    "continuePrimaryKey",
    "advance"
  ], A = {}, v = /* @__PURE__ */ new WeakMap(), x = /* @__PURE__ */ new WeakMap(), te = {
    get(e, n) {
      if (!ne.includes(n)) return e[n];
      let t = A[n];
      return t || (t = A[n] = function(...r) {
        v.set(this, x.get(this)[n](...r));
      }), t;
    }
  };
  async function* re(...e) {
    let n = this;
    if (n instanceof IDBCursor || (n = await n.openCursor(...e)), !n) return;
    n = n;
    const t = new Proxy(n, te);
    for (x.set(t, n), m.set(t, D(n)); n; ) yield t, n = await (v.get(t) || n.continue()), v.delete(t);
  }
  function M(e, n) {
    return n === Symbol.asyncIterator && _(e, [
      IDBIndex,
      IDBObjectStore,
      IDBCursor
    ]) || n === "iterate" && _(e, [
      IDBIndex,
      IDBObjectStore
    ]);
  }
  C((e) => ({
    ...e,
    get(n, t, r) {
      return M(n, t) ? re : e.get(n, t, r);
    },
    has(n, t) {
      return M(n, t) || e.has(n, t);
    }
  }));
  await W();
  const ie = document.getElementById("upload"), S = document.getElementById("preview"), se = document.getElementById("download"), oe = await Y("img-db", 1, {
    upgrade(e) {
      e.createObjectStore("images");
    }
  });
  function N() {
    var _a;
    const e = (_a = ie.files) == null ? void 0 : _a[0];
    return e ? e.arrayBuffer().then((n) => new Uint8Array(n)) : Promise.resolve(null);
  }
  function R(e) {
    const n = new Blob([
      e
    ], {
      type: "image/png"
    }), t = URL.createObjectURL(n);
    S.src = t;
  }
  function ce(e) {
    Notification.permission === "granted" && new Notification(e);
  }
  function w(e, n) {
    var _a;
    (_a = document.getElementById(e)) == null ? void 0 : _a.addEventListener("click", async () => {
      const t = await N();
      if (!t) return;
      const r = n(t);
      R(r);
    });
  }
  function ae(e, n, t) {
    var _a;
    (_a = document.getElementById(e)) == null ? void 0 : _a.addEventListener("click", async () => {
      const r = await N();
      if (!r) return;
      const i = n(r, t);
      R(i);
    });
  }
  w("grayscale", j);
  w("blur", (e) => T(e, 3.5));
  w("invert", U);
  ae("brighten", F, 30);
  w("flip", V);
  w("rotate", K);
  se.addEventListener("click", async () => {
    const n = await (await fetch(S.src).then((t) => t.blob())).arrayBuffer();
    await oe.put("images", n, "lastImage"), ce("Imagen guardada en IndexedDB");
  });
  "Notification" in window && Notification.permission !== "granted" && Notification.requestPermission();
})();
