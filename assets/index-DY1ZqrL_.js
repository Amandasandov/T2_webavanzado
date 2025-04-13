(async () => {
  (function() {
    const t = document.createElement("link").relList;
    if (t && t.supports && t.supports("modulepreload")) return;
    for (const i of document.querySelectorAll('link[rel="modulepreload"]')) r(i);
    new MutationObserver((i) => {
      for (const s of i) if (s.type === "childList") for (const c of s.addedNodes) c.tagName === "LINK" && c.rel === "modulepreload" && r(c);
    }).observe(document, {
      childList: true,
      subtree: true
    });
    function n(i) {
      const s = {};
      return i.integrity && (s.integrity = i.integrity), i.referrerPolicy && (s.referrerPolicy = i.referrerPolicy), i.crossOrigin === "use-credentials" ? s.credentials = "include" : i.crossOrigin === "anonymous" ? s.credentials = "omit" : s.credentials = "same-origin", s;
    }
    function r(i) {
      if (i.ep) return;
      i.ep = true;
      const s = n(i);
      fetch(i.href, s);
    }
  })();
  let o, g = null;
  function W() {
    return (g === null || g.byteLength === 0) && (g = new Uint8Array(o.memory.buffer)), g;
  }
  let d = 0;
  function l(e, t) {
    const n = t(e.length * 1, 1) >>> 0;
    return W().set(e, n / 1), d = e.length, n;
  }
  function y(e, t) {
    return e = e >>> 0, W().subarray(e / 1, e / 1 + t);
  }
  function j(e) {
    const t = l(e, o.__wbindgen_malloc), n = d, r = o.grayscale(t, n);
    var i = y(r[0], r[1]).slice();
    return o.__wbindgen_free(r[0], r[1] * 1, 1), i;
  }
  function T(e, t) {
    const n = l(e, o.__wbindgen_malloc), r = d, i = o.blur(n, r, t);
    var s = y(i[0], i[1]).slice();
    return o.__wbindgen_free(i[0], i[1] * 1, 1), s;
  }
  function U(e) {
    const t = l(e, o.__wbindgen_malloc), n = d, r = o.invert(t, n);
    var i = y(r[0], r[1]).slice();
    return o.__wbindgen_free(r[0], r[1] * 1, 1), i;
  }
  function F(e, t) {
    const n = l(e, o.__wbindgen_malloc), r = d, i = o.brighten(n, r, t);
    var s = y(i[0], i[1]).slice();
    return o.__wbindgen_free(i[0], i[1] * 1, 1), s;
  }
  function V(e) {
    const t = l(e, o.__wbindgen_malloc), n = d, r = o.flip(t, n);
    var i = y(r[0], r[1]).slice();
    return o.__wbindgen_free(r[0], r[1] * 1, 1), i;
  }
  function K(e) {
    const t = l(e, o.__wbindgen_malloc), n = d, r = o.rotate(t, n);
    var i = y(r[0], r[1]).slice();
    return o.__wbindgen_free(r[0], r[1] * 1, 1), i;
  }
  async function k(e, t) {
    if (typeof Response == "function" && e instanceof Response) {
      if (typeof WebAssembly.instantiateStreaming == "function") try {
        return await WebAssembly.instantiateStreaming(e, t);
      } catch (r) {
        if (e.headers.get("Content-Type") != "application/wasm") console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", r);
        else throw r;
      }
      const n = await e.arrayBuffer();
      return await WebAssembly.instantiate(n, t);
    } else {
      const n = await WebAssembly.instantiate(e, t);
      return n instanceof WebAssembly.Instance ? {
        instance: n,
        module: e
      } : n;
    }
  }
  function q() {
    const e = {};
    return e.wbg = {}, e.wbg.__wbindgen_init_externref_table = function() {
      const t = o.__wbindgen_export_0, n = t.grow(4);
      t.set(0, void 0), t.set(n + 0, void 0), t.set(n + 1, null), t.set(n + 2, true), t.set(n + 3, false);
    }, e;
  }
  function z(e, t) {
    return o = e.exports, C.__wbindgen_wasm_module = t, g = null, o.__wbindgen_start(), o;
  }
  async function C(e) {
    if (o !== void 0) return o;
    typeof e < "u" && (Object.getPrototypeOf(e) === Object.prototype ? { module_or_path: e } = e : console.warn("using deprecated parameters for the initialization function; pass a single object instead")), typeof e > "u" && (e = new URL("/assets/wasm_img_filters_bg-D7uvn5b7.wasm", import.meta.url));
    const t = q();
    (typeof e == "string" || typeof Request == "function" && e instanceof Request || typeof URL == "function" && e instanceof URL) && (e = fetch(e));
    const { instance: n, module: r } = await k(await e, t);
    return z(n, r);
  }
  const _ = (e, t) => t.some((n) => e instanceof n);
  let E, P;
  function $() {
    return E || (E = [
      IDBDatabase,
      IDBObjectStore,
      IDBIndex,
      IDBCursor,
      IDBTransaction
    ]);
  }
  function G() {
    return P || (P = [
      IDBCursor.prototype.advance,
      IDBCursor.prototype.continue,
      IDBCursor.prototype.continuePrimaryKey
    ]);
  }
  const I = /* @__PURE__ */ new WeakMap(), p = /* @__PURE__ */ new WeakMap(), w = /* @__PURE__ */ new WeakMap();
  function H(e) {
    const t = new Promise((n, r) => {
      const i = () => {
        e.removeEventListener("success", s), e.removeEventListener("error", c);
      }, s = () => {
        n(u(e.result)), i();
      }, c = () => {
        r(e.error), i();
      };
      e.addEventListener("success", s), e.addEventListener("error", c);
    });
    return w.set(t, e), t;
  }
  function J(e) {
    if (I.has(e)) return;
    const t = new Promise((n, r) => {
      const i = () => {
        e.removeEventListener("complete", s), e.removeEventListener("error", c), e.removeEventListener("abort", c);
      }, s = () => {
        n(), i();
      }, c = () => {
        r(e.error || new DOMException("AbortError", "AbortError")), i();
      };
      e.addEventListener("complete", s), e.addEventListener("error", c), e.addEventListener("abort", c);
    });
    I.set(e, t);
  }
  let B = {
    get(e, t, n) {
      if (e instanceof IDBTransaction) {
        if (t === "done") return I.get(e);
        if (t === "store") return n.objectStoreNames[1] ? void 0 : n.objectStore(n.objectStoreNames[0]);
      }
      return u(e[t]);
    },
    set(e, t, n) {
      return e[t] = n, true;
    },
    has(e, t) {
      return e instanceof IDBTransaction && (t === "done" || t === "store") ? true : t in e;
    }
  };
  function x(e) {
    B = e(B);
  }
  function Q(e) {
    return G().includes(e) ? function(...t) {
      return e.apply(D(this), t), u(this.request);
    } : function(...t) {
      return u(e.apply(D(this), t));
    };
  }
  function X(e) {
    return typeof e == "function" ? Q(e) : (e instanceof IDBTransaction && J(e), _(e, $()) ? new Proxy(e, B) : e);
  }
  function u(e) {
    if (e instanceof IDBRequest) return H(e);
    if (p.has(e)) return p.get(e);
    const t = X(e);
    return t !== e && (p.set(e, t), w.set(t, e)), t;
  }
  const D = (e) => w.get(e);
  function Y(e, t, { blocked: n, upgrade: r, blocking: i, terminated: s } = {}) {
    const c = indexedDB.open(e, t), b = u(c);
    return r && c.addEventListener("upgradeneeded", (a) => {
      r(u(c.result), a.oldVersion, a.newVersion, u(c.transaction), a);
    }), n && c.addEventListener("blocked", (a) => n(a.oldVersion, a.newVersion, a)), b.then((a) => {
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
  function M(e, t) {
    if (!(e instanceof IDBDatabase && !(t in e) && typeof t == "string")) return;
    if (h.get(t)) return h.get(t);
    const n = t.replace(/FromIndex$/, ""), r = t !== n, i = ee.includes(n);
    if (!(n in (r ? IDBIndex : IDBObjectStore).prototype) || !(i || Z.includes(n))) return;
    const s = async function(c, ...b) {
      const a = this.transaction(c, i ? "readwrite" : "readonly");
      let f = a.store;
      return r && (f = f.index(b.shift())), (await Promise.all([
        f[n](...b),
        i && a.done
      ]))[0];
    };
    return h.set(t, s), s;
  }
  x((e) => ({
    ...e,
    get: (t, n, r) => M(t, n) || e.get(t, n, r),
    has: (t, n) => !!M(t, n) || e.has(t, n)
  }));
  const te = [
    "continue",
    "continuePrimaryKey",
    "advance"
  ], A = {}, v = /* @__PURE__ */ new WeakMap(), S = /* @__PURE__ */ new WeakMap(), ne = {
    get(e, t) {
      if (!te.includes(t)) return e[t];
      let n = A[t];
      return n || (n = A[t] = function(...r) {
        v.set(this, S.get(this)[t](...r));
      }), n;
    }
  };
  async function* re(...e) {
    let t = this;
    if (t instanceof IDBCursor || (t = await t.openCursor(...e)), !t) return;
    t = t;
    const n = new Proxy(t, ne);
    for (S.set(n, t), w.set(n, D(t)); t; ) yield n, t = await (v.get(n) || t.continue()), v.delete(n);
  }
  function O(e, t) {
    return t === Symbol.asyncIterator && _(e, [
      IDBIndex,
      IDBObjectStore,
      IDBCursor
    ]) || t === "iterate" && _(e, [
      IDBIndex,
      IDBObjectStore
    ]);
  }
  x((e) => ({
    ...e,
    get(t, n, r) {
      return O(t, n) ? re : e.get(t, n, r);
    },
    has(t, n) {
      return O(t, n) || e.has(t, n);
    }
  }));
  await C();
  const ie = document.getElementById("upload"), L = document.getElementById("preview"), se = document.getElementById("download"), oe = await Y("img-db", 1, {
    upgrade(e) {
      e.createObjectStore("images");
    }
  });
  function N() {
    var _a;
    const e = (_a = ie.files) == null ? void 0 : _a[0];
    return e ? e.arrayBuffer().then((t) => new Uint8Array(t)) : Promise.resolve(null);
  }
  function R(e) {
    const t = new Blob([
      e
    ], {
      type: "image/png"
    }), n = URL.createObjectURL(t);
    L.src = n;
  }
  function ce(e) {
    Notification.permission === "granted" && new Notification(e);
  }
  function m(e, t) {
    var _a;
    (_a = document.getElementById(e)) == null ? void 0 : _a.addEventListener("click", async () => {
      const n = await N();
      if (!n) return;
      const r = t(n);
      R(r);
    });
  }
  function ae(e, t, n) {
    var _a;
    (_a = document.getElementById(e)) == null ? void 0 : _a.addEventListener("click", async () => {
      const r = await N();
      if (!r) return;
      const i = t(r, n);
      R(i);
    });
  }
  m("grayscale", j);
  m("blur", (e) => T(e, 3.5));
  m("invert", U);
  ae("brighten", F, 30);
  m("flip", V);
  m("rotate", K);
  se.addEventListener("click", async () => {
    const t = await (await fetch(L.src).then((n) => n.blob())).arrayBuffer();
    await oe.put("images", t, "lastImage"), ce("Imagen guardada en IndexedDB");
  });
  "Notification" in window && Notification.permission !== "granted" && Notification.requestPermission();
  document.addEventListener("DOMContentLoaded", () => {
    const e = new Image();
    e.src = "https://placekitten.com/300/300", e.onload = () => {
      L.src = e.src;
    };
  });
})();
