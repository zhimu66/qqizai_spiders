window ={}
function ep(publickey,pwd_lt) {
    function e(t, e, i) {
        null != t && ("number" == typeof t ? this.fromNumber(t, e, i) : null == e && "string" != typeof t ? this.fromString(t, 256) : this.fromString(t, e))
    }

    function i() {
        return new e(null)
    }

    function n(t) {
        return N.charAt(t)
    }

    function r(t, e) {
        var i = M[t.charCodeAt(e)];
        return null == i ? -1 : i
    }

    function o(t) {
        var e = i();
        return e.fromInt(t),
            e
    }

    function a(t) {
        var e, i = 1;
        return 0 != (e = t >>> 16) && (t = e,
            i += 16),
        0 != (e = t >> 8) && (t = e,
            i += 8),
        0 != (e = t >> 4) && (t = e,
            i += 4),
        0 != (e = t >> 2) && (t = e,
            i += 2),
        0 != (e = t >> 1) && (t = e,
            i += 1),
            i
    }

    function h(t) {
        this.m = t
    }

    function u(t) {
        this.m = t,
            this.mp = t.invDigit(),
            this.mpl = 32767 & this.mp,
            this.mph = this.mp >> 15,
            this.um = (1 << t.DB - 15) - 1,
            this.mt2 = 2 * t.t
    }

    function c(t, e) {
        return t & e
    }

    function l(t, e) {
        return t | e
    }

    function p(t, e) {
        return t ^ e
    }

    function f(t, e) {
        return t & ~e
    }

    function d(t) {
        if (0 == t)
            return -1;
        var e = 0;
        return 0 == (65535 & t) && (t >>= 16,
            e += 16),
        0 == (255 & t) && (t >>= 8,
            e += 8),
        0 == (15 & t) && (t >>= 4,
            e += 4),
        0 == (3 & t) && (t >>= 2,
            e += 2),
        0 == (1 & t) && ++e,
            e
    }

    function g(t) {
        for (var e = 0; 0 != t;)
            t &= t - 1,
                ++e;
        return e
    }

    function m() {
    }

    function y(t) {
        return t
    }

    function b(t) {
        this.r2 = i(),
            this.q3 = i(),
            e.ONE.dlShiftTo(2 * t.t, this.r2),
            this.mu = this.r2.divide(t),
            this.m = t
    }

    function T() {
        this.i = 0,
            this.j = 0,
            this.S = new Array
    }

    function w() {
        if (null == C) {
            for (C = new T; P < _;) {
                var t = Math.floor(65536 * Math.random());
                I[P++] = 255 & t
            }
            for (C.init(I),
                     P = 0; P < I.length; ++P)
                I[P] = 0;
            P = 0
        }
        return C.next()
    }

    function S() {
    }

    function E(t, i) {
        return new e(t, i)
    }

    function x() {
        this.n = null,
            this.e = 0,
            this.d = null,
            this.p = null,
            this.q = null,
            this.dmp1 = null,
            this.dmq1 = null,
            this.coeff = null
    }

    function D(t) {
        var e, i, n = "";
        for (e = 0; e + 3 <= t.length; e += 3)
            i = parseInt(t.substring(e, e + 3), 16),
                n += k.charAt(i >> 6) + k.charAt(63 & i);
        for (e + 1 == t.length ? (i = parseInt(t.substring(e, e + 1), 16),
            n += k.charAt(i << 2)) : e + 2 == t.length && (i = parseInt(t.substring(e, e + 2), 16),
            n += k.charAt(i >> 2) + k.charAt((3 & i) << 4)); (3 & n.length) > 0;)
            n += F;
        return n
    }

    function O(t) {
        var e, i, r = "", o = 0;
        for (e = 0; e < t.length && t.charAt(e) != F; ++e)
            v = k.indexOf(t.charAt(e)),
            v < 0 || (0 == o ? (r += n(v >> 2),
                i = 3 & v,
                o = 1) : 1 == o ? (r += n(i << 2 | v >> 4),
                i = 15 & v,
                o = 2) : 2 == o ? (r += n(i),
                r += n(v >> 2),
                i = 3 & v,
                o = 3) : (r += n(i << 2 | v >> 4),
                r += n(15 & v),
                o = 0));
        return 1 == o && (r += n(i << 2)),
            r
    }

    var A;
    (e.prototype.am = function (t, e, i, n, r, o) {
        for (var s = 16383 & e, a = e >> 14; --o >= 0;) {
            var h = 16383 & this[t]
                , u = this[t++] >> 14
                , c = a * h + u * s;
            h = s * h + ((16383 & c) << 14) + i[n] + r,
                r = (h >> 28) + (c >> 14) + a * u,
                i[n++] = 268435455 & h
        }
        return r
    }, A = 28),
        e.prototype.DB = A,
        e.prototype.DM = (1 << A) - 1,
        e.prototype.DV = 1 << A,
        e.prototype.FV = Math.pow(2, 52),
        e.prototype.F1 = 52 - A,
        e.prototype.F2 = 2 * A - 52;
    var B, R, N = "0123456789abcdefghijklmnopqrstuvwxyz", M = new Array;
    for (B = "0".charCodeAt(0),
             R = 0; R <= 9; ++R)
        M[B++] = R;
    for (B = "a".charCodeAt(0),
             R = 10; R < 36; ++R)
        M[B++] = R;
    for (B = "A".charCodeAt(0),
             R = 10; R < 36; ++R)
        M[B++] = R;
    h.prototype.convert = function (t) {
        return t.s < 0 || t.compareTo(this.m) >= 0 ? t.mod(this.m) : t
    }
        ,
        h.prototype.revert = function (t) {
            return t
        }
        ,
        h.prototype.reduce = function (t) {
            t.divRemTo(this.m, null, t)
        }
        ,
        h.prototype.mulTo = function (t, e, i) {
            t.multiplyTo(e, i),
                this.reduce(i)
        }
        ,
        h.prototype.sqrTo = function (t, e) {
            t.squareTo(e),
                this.reduce(e)
        }
        ,
        u.prototype.convert = function (t) {
            var n = i();
            return t.abs().dlShiftTo(this.m.t, n),
                n.divRemTo(this.m, null, n),
            t.s < 0 && n.compareTo(e.ZERO) > 0 && this.m.subTo(n, n),
                n
        }
        ,
        u.prototype.revert = function (t) {
            var e = i();
            return t.copyTo(e),
                this.reduce(e),
                e
        }
        ,
        u.prototype.reduce = function (t) {
            for (; t.t <= this.mt2;)
                t[t.t++] = 0;
            for (var e = 0; e < this.m.t; ++e) {
                var i = 32767 & t[e]
                    , n = i * this.mpl + ((i * this.mph + (t[e] >> 15) * this.mpl & this.um) << 15) & t.DM;
                for (i = e + this.m.t,
                         t[i] += this.m.am(0, n, t, e, 0, this.m.t); t[i] >= t.DV;)
                    t[i] -= t.DV,
                        t[++i]++
            }
            t.clamp(),
                t.drShiftTo(this.m.t, t),
            t.compareTo(this.m) >= 0 && t.subTo(this.m, t)
        }
        ,
        u.prototype.mulTo = function (t, e, i) {
            t.multiplyTo(e, i),
                this.reduce(i)
        }
        ,
        u.prototype.sqrTo = function (t, e) {
            t.squareTo(e),
                this.reduce(e)
        }
        ,
        e.prototype.copyTo = function (t) {
            for (var e = this.t - 1; e >= 0; --e)
                t[e] = this[e];
            t.t = this.t,
                t.s = this.s
        }
        ,
        e.prototype.fromInt = function (t) {
            this.t = 1,
                this.s = t < 0 ? -1 : 0,
                t > 0 ? this[0] = t : t < -1 ? this[0] = t + this.DV : this.t = 0
        }
        ,
        e.prototype.fromString = function (t, i) {
            var n;
            if (16 == i)
                n = 4;
            else if (8 == i)
                n = 3;
            else if (256 == i)
                n = 8;
            else if (2 == i)
                n = 1;
            else if (32 == i)
                n = 5;
            else {
                if (4 != i)
                    return void this.fromRadix(t, i);
                n = 2
            }
            this.t = 0,
                this.s = 0;
            for (var o = t.length, s = !1, a = 0; --o >= 0;) {
                var h = 8 == n ? 255 & t[o] : r(t, o);
                h < 0 ? "-" == t.charAt(o) && (s = !0) : (s = !1,
                    0 == a ? this[this.t++] = h : a + n > this.DB ? (this[this.t - 1] |= (h & (1 << this.DB - a) - 1) << a,
                        this[this.t++] = h >> this.DB - a) : this[this.t - 1] |= h << a,
                (a += n) >= this.DB && (a -= this.DB))
            }
            8 == n && 0 != (128 & t[0]) && (this.s = -1,
            a > 0 && (this[this.t - 1] |= (1 << this.DB - a) - 1 << a)),
                this.clamp(),
            s && e.ZERO.subTo(this, this)
        }
        ,
        e.prototype.clamp = function () {
            for (var t = this.s & this.DM; this.t > 0 && this[this.t - 1] == t;)
                --this.t
        }
        ,
        e.prototype.dlShiftTo = function (t, e) {
            var i;
            for (i = this.t - 1; i >= 0; --i)
                e[i + t] = this[i];
            for (i = t - 1; i >= 0; --i)
                e[i] = 0;
            e.t = this.t + t,
                e.s = this.s
        }
        ,
        e.prototype.drShiftTo = function (t, e) {
            for (var i = t; i < this.t; ++i)
                e[i - t] = this[i];
            e.t = Math.max(this.t - t, 0),
                e.s = this.s
        }
        ,
        e.prototype.lShiftTo = function (t, e) {
            var i, n = t % this.DB, r = this.DB - n, o = (1 << r) - 1, s = Math.floor(t / this.DB),
                a = this.s << n & this.DM;
            for (i = this.t - 1; i >= 0; --i)
                e[i + s + 1] = this[i] >> r | a,
                    a = (this[i] & o) << n;
            for (i = s - 1; i >= 0; --i)
                e[i] = 0;
            e[s] = a,
                e.t = this.t + s + 1,
                e.s = this.s,
                e.clamp()
        }
        ,
        e.prototype.rShiftTo = function (t, e) {
            e.s = this.s;
            var i = Math.floor(t / this.DB);
            if (i >= this.t)
                e.t = 0;
            else {
                var n = t % this.DB
                    , r = this.DB - n
                    , o = (1 << n) - 1;
                e[0] = this[i] >> n;
                for (var s = i + 1; s < this.t; ++s)
                    e[s - i - 1] |= (this[s] & o) << r,
                        e[s - i] = this[s] >> n;
                n > 0 && (e[this.t - i - 1] |= (this.s & o) << r),
                    e.t = this.t - i,
                    e.clamp()
            }
        }
        ,
        e.prototype.subTo = function (t, e) {
            for (var i = 0, n = 0, r = Math.min(t.t, this.t); i < r;)
                n += this[i] - t[i],
                    e[i++] = n & this.DM,
                    n >>= this.DB;
            if (t.t < this.t) {
                for (n -= t.s; i < this.t;)
                    n += this[i],
                        e[i++] = n & this.DM,
                        n >>= this.DB;
                n += this.s
            } else {
                for (n += this.s; i < t.t;)
                    n -= t[i],
                        e[i++] = n & this.DM,
                        n >>= this.DB;
                n -= t.s
            }
            e.s = n < 0 ? -1 : 0,
                n < -1 ? e[i++] = this.DV + n : n > 0 && (e[i++] = n),
                e.t = i,
                e.clamp()
        }
        ,
        e.prototype.multiplyTo = function (t, i) {
            var n = this.abs()
                , r = t.abs()
                , o = n.t;
            for (i.t = o + r.t; --o >= 0;)
                i[o] = 0;
            for (o = 0; o < r.t; ++o)
                i[o + n.t] = n.am(0, r[o], i, o, 0, n.t);
            i.s = 0,
                i.clamp(),
            this.s != t.s && e.ZERO.subTo(i, i)
        }
        ,
        e.prototype.squareTo = function (t) {
            for (var e = this.abs(), i = t.t = 2 * e.t; --i >= 0;)
                t[i] = 0;
            for (i = 0; i < e.t - 1; ++i) {
                var n = e.am(i, e[i], t, 2 * i, 0, 1);
                (t[i + e.t] += e.am(i + 1, 2 * e[i], t, 2 * i + 1, n, e.t - i - 1)) >= e.DV && (t[i + e.t] -= e.DV,
                    t[i + e.t + 1] = 1)
            }
            t.t > 0 && (t[t.t - 1] += e.am(i, e[i], t, 2 * i, 0, 1)),
                t.s = 0,
                t.clamp()
        }
        ,
        e.prototype.divRemTo = function (t, n, r) {
            var o = t.abs();
            if (!(o.t <= 0)) {
                var s = this.abs();
                if (s.t < o.t)
                    return null != n && n.fromInt(0),
                        void (null != r && this.copyTo(r));
                null == r && (r = i());
                var h = i()
                    , u = this.s
                    , c = t.s
                    , l = this.DB - a(o[o.t - 1]);
                l > 0 ? (o.lShiftTo(l, h),
                    s.lShiftTo(l, r)) : (o.copyTo(h),
                    s.copyTo(r));
                var p = h.t
                    , f = h[p - 1];
                if (0 != f) {
                    var d = f * (1 << this.F1) + (p > 1 ? h[p - 2] >> this.F2 : 0)
                        , g = this.FV / d
                        , m = (1 << this.F1) / d
                        , v = 1 << this.F2
                        , y = r.t
                        , b = y - p
                        , T = null == n ? i() : n;
                    for (h.dlShiftTo(b, T),
                         r.compareTo(T) >= 0 && (r[r.t++] = 1,
                             r.subTo(T, r)),
                             e.ONE.dlShiftTo(p, T),
                             T.subTo(h, h); h.t < p;)
                        h[h.t++] = 0;
                    for (; --b >= 0;) {
                        var w = r[--y] == f ? this.DM : Math.floor(r[y] * g + (r[y - 1] + v) * m);
                        if ((r[y] += h.am(0, w, r, b, 0, p)) < w)
                            for (h.dlShiftTo(b, T),
                                     r.subTo(T, r); r[y] < --w;)
                                r.subTo(T, r)
                    }
                    null != n && (r.drShiftTo(p, n),
                    u != c && e.ZERO.subTo(n, n)),
                        r.t = p,
                        r.clamp(),
                    l > 0 && r.rShiftTo(l, r),
                    u < 0 && e.ZERO.subTo(r, r)
                }
            }
        }
        ,
        e.prototype.invDigit = function () {
            if (this.t < 1)
                return 0;
            var t = this[0];
            if (0 == (1 & t))
                return 0;
            var e = 3 & t;
            return (e = (e = (e = (e = e * (2 - (15 & t) * e) & 15) * (2 - (255 & t) * e) & 255) * (2 - ((65535 & t) * e & 65535)) & 65535) * (2 - t * e % this.DV) % this.DV) > 0 ? this.DV - e : -e
        }
        ,
        e.prototype.isEven = function () {
            return 0 == (this.t > 0 ? 1 & this[0] : this.s)
        }
        ,
        e.prototype.exp = function (t, n) {
            if (t > 4294967295 || t < 1)
                return e.ONE;
            var r = i()
                , o = i()
                , s = n.convert(this)
                , h = a(t) - 1;
            for (s.copyTo(r); --h >= 0;)
                if (n.sqrTo(r, o),
                (t & 1 << h) > 0)
                    n.mulTo(o, s, r);
                else {
                    var u = r;
                    r = o,
                        o = u
                }
            return n.revert(r)
        }
        ,
        e.prototype.toString = function (t) {
            if (this.s < 0)
                return "-" + this.negate().toString(t);
            var e;
            if (16 == t)
                e = 4;
            else if (8 == t)
                e = 3;
            else if (2 == t)
                e = 1;
            else if (32 == t)
                e = 5;
            else {
                if (4 != t)
                    return this.toRadix(t);
                e = 2
            }
            var i, r = (1 << e) - 1, o = !1, s = "", a = this.t, h = this.DB - a * this.DB % e;
            if (a-- > 0)
                for (h < this.DB && (i = this[a] >> h) > 0 && (o = !0,
                    s = n(i)); a >= 0;)
                    h < e ? (i = (this[a] & (1 << h) - 1) << e - h,
                        i |= this[--a] >> (h += this.DB - e)) : (i = this[a] >> (h -= e) & r,
                    h <= 0 && (h += this.DB,
                        --a)),
                    i > 0 && (o = !0),
                    o && (s += n(i));
            return o ? s : "0"
        }
        ,
        e.prototype.negate = function () {
            var t = i();
            return e.ZERO.subTo(this, t),
                t
        }
        ,
        e.prototype.abs = function () {
            return this.s < 0 ? this.negate() : this
        }
        ,
        e.prototype.compareTo = function (t) {
            var e = this.s - t.s;
            if (0 != e)
                return e;
            var i = this.t;
            if (0 != (e = i - t.t))
                return this.s < 0 ? -e : e;
            for (; --i >= 0;)
                if (0 != (e = this[i] - t[i]))
                    return e;
            return 0
        }
        ,
        e.prototype.bitLength = function () {
            return this.t <= 0 ? 0 : this.DB * (this.t - 1) + a(this[this.t - 1] ^ this.s & this.DM)
        }
        ,
        e.prototype.mod = function (t) {
            var n = i();
            return this.abs().divRemTo(t, null, n),
            this.s < 0 && n.compareTo(e.ZERO) > 0 && t.subTo(n, n),
                n
        }
        ,
        e.prototype.modPowInt = function (t, e) {
            var i;
            return i = t < 256 || e.isEven() ? new h(e) : new u(e),
                this.exp(t, i)
        }
        ,
        e.ZERO = o(0),
        e.ONE = o(1),
        m.prototype.convert = y,
        m.prototype.revert = y,
        m.prototype.mulTo = function (t, e, i) {
            t.multiplyTo(e, i)
        }
        ,
        m.prototype.sqrTo = function (t, e) {
            t.squareTo(e)
        }
        ,
        b.prototype.convert = function (t) {
            if (t.s < 0 || t.t > 2 * this.m.t)
                return t.mod(this.m);
            if (t.compareTo(this.m) < 0)
                return t;
            var e = i();
            return t.copyTo(e),
                this.reduce(e),
                e
        }
        ,
        b.prototype.revert = function (t) {
            return t
        }
        ,
        b.prototype.reduce = function (t) {
            for (t.drShiftTo(this.m.t - 1, this.r2),
                 t.t > this.m.t + 1 && (t.t = this.m.t + 1,
                     t.clamp()),
                     this.mu.multiplyUpperTo(this.r2, this.m.t + 1, this.q3),
                     this.m.multiplyLowerTo(this.q3, this.m.t + 1, this.r2); t.compareTo(this.r2) < 0;)
                t.dAddOffset(1, this.m.t + 1);
            for (t.subTo(this.r2, t); t.compareTo(this.m) >= 0;)
                t.subTo(this.m, t)
        }
        ,
        b.prototype.mulTo = function (t, e, i) {
            t.multiplyTo(e, i),
                this.reduce(i)
        }
        ,
        b.prototype.sqrTo = function (t, e) {
            t.squareTo(e),
                this.reduce(e)
        }
    ;
    var L = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199, 211, 223, 227, 229, 233, 239, 241, 251, 257, 263, 269, 271, 277, 281, 283, 293, 307, 311, 313, 317, 331, 337, 347, 349, 353, 359, 367, 373, 379, 383, 389, 397, 401, 409, 419, 421, 431, 433, 439, 443, 449, 457, 461, 463, 467, 479, 487, 491, 499, 503, 509, 521, 523, 541, 547, 557, 563, 569, 571, 577, 587, 593, 599, 601, 607, 613, 617, 619, 631, 641, 643, 647, 653, 659, 661, 673, 677, 683, 691, 701, 709, 719, 727, 733, 739, 743, 751, 757, 761, 769, 773, 787, 797, 809, 811, 821, 823, 827, 829, 839, 853, 857, 859, 863, 877, 881, 883, 887, 907, 911, 919, 929, 937, 941, 947, 953, 967, 971, 977, 983, 991, 997]
        , V = (1 << 26) / L[L.length - 1];
    e.prototype.chunkSize = function (t) {
        return Math.floor(Math.LN2 * this.DB / Math.log(t))
    }
        ,
        e.prototype.toRadix = function (t) {
            if (null == t && (t = 10),
            0 == this.signum() || t < 2 || t > 36)
                return "0";
            var e = this.chunkSize(t)
                , n = Math.pow(t, e)
                , r = o(n)
                , s = i()
                , a = i()
                , h = "";
            for (this.divRemTo(r, s, a); s.signum() > 0;)
                h = (n + a.intValue()).toString(t).substr(1) + h,
                    s.divRemTo(r, s, a);
            return a.intValue().toString(t) + h
        }
        ,
        e.prototype.fromRadix = function (t, i) {
            this.fromInt(0),
            null == i && (i = 10);
            for (var n = this.chunkSize(i), o = Math.pow(i, n), s = !1, a = 0, h = 0, u = 0; u < t.length; ++u) {
                var c = r(t, u);
                c < 0 ? "-" == t.charAt(u) && 0 == this.signum() && (s = !0) : (h = i * h + c,
                ++a >= n && (this.dMultiply(o),
                    this.dAddOffset(h, 0),
                    a = 0,
                    h = 0))
            }
            a > 0 && (this.dMultiply(Math.pow(i, a)),
                this.dAddOffset(h, 0)),
            s && e.ZERO.subTo(this, this)
        }
        ,
        e.prototype.fromNumber = function (t, i, n) {
            if ("number" == typeof i)
                if (t < 2)
                    this.fromInt(1);
                else
                    for (this.fromNumber(t, n),
                         this.testBit(t - 1) || this.bitwiseTo(e.ONE.shiftLeft(t - 1), l, this),
                         this.isEven() && this.dAddOffset(1, 0); !this.isProbablePrime(i);)
                        this.dAddOffset(2, 0),
                        this.bitLength() > t && this.subTo(e.ONE.shiftLeft(t - 1), this);
            else {
                var r = new Array
                    , o = 7 & t;
                r.length = 1 + (t >> 3),
                    i.nextBytes(r),
                    o > 0 ? r[0] &= (1 << o) - 1 : r[0] = 0,
                    this.fromString(r, 256)
            }
        }
        ,
        e.prototype.bitwiseTo = function (t, e, i) {
            var n, r, o = Math.min(t.t, this.t);
            for (n = 0; n < o; ++n)
                i[n] = e(this[n], t[n]);
            if (t.t < this.t) {
                for (r = t.s & this.DM,
                         n = o; n < this.t; ++n)
                    i[n] = e(this[n], r);
                i.t = this.t
            } else {
                for (r = this.s & this.DM,
                         n = o; n < t.t; ++n)
                    i[n] = e(r, t[n]);
                i.t = t.t
            }
            i.s = e(this.s, t.s),
                i.clamp()
        }
        ,
        e.prototype.changeBit = function (t, i) {
            var n = e.ONE.shiftLeft(t);
            return this.bitwiseTo(n, i, n),
                n
        }
        ,
        e.prototype.addTo = function (t, e) {
            for (var i = 0, n = 0, r = Math.min(t.t, this.t); i < r;)
                n += this[i] + t[i],
                    e[i++] = n & this.DM,
                    n >>= this.DB;
            if (t.t < this.t) {
                for (n += t.s; i < this.t;)
                    n += this[i],
                        e[i++] = n & this.DM,
                        n >>= this.DB;
                n += this.s
            } else {
                for (n += this.s; i < t.t;)
                    n += t[i],
                        e[i++] = n & this.DM,
                        n >>= this.DB;
                n += t.s
            }
            e.s = n < 0 ? -1 : 0,
                n > 0 ? e[i++] = n : n < -1 && (e[i++] = this.DV + n),
                e.t = i,
                e.clamp()
        }
        ,
        e.prototype.dMultiply = function (t) {
            this[this.t] = this.am(0, t - 1, this, 0, 0, this.t),
                ++this.t,
                this.clamp()
        }
        ,
        e.prototype.dAddOffset = function (t, e) {
            if (0 != t) {
                for (; this.t <= e;)
                    this[this.t++] = 0;
                for (this[e] += t; this[e] >= this.DV;)
                    this[e] -= this.DV,
                    ++e >= this.t && (this[this.t++] = 0),
                        ++this[e]
            }
        }
        ,
        e.prototype.multiplyLowerTo = function (t, e, i) {
            var n, r = Math.min(this.t + t.t, e);
            for (i.s = 0,
                     i.t = r; r > 0;)
                i[--r] = 0;
            for (n = i.t - this.t; r < n; ++r)
                i[r + this.t] = this.am(0, t[r], i, r, 0, this.t);
            for (n = Math.min(t.t, e); r < n; ++r)
                this.am(0, t[r], i, r, 0, e - r);
            i.clamp()
        }
        ,
        e.prototype.multiplyUpperTo = function (t, e, i) {
            --e;
            var n = i.t = this.t + t.t - e;
            for (i.s = 0; --n >= 0;)
                i[n] = 0;
            for (n = Math.max(e - this.t, 0); n < t.t; ++n)
                i[this.t + n - e] = this.am(e - n, t[n], i, 0, 0, this.t + n - e);
            i.clamp(),
                i.drShiftTo(1, i)
        }
        ,
        e.prototype.modInt = function (t) {
            if (t <= 0)
                return 0;
            var e = this.DV % t
                , i = this.s < 0 ? t - 1 : 0;
            if (this.t > 0)
                if (0 == e)
                    i = this[0] % t;
                else
                    for (var n = this.t - 1; n >= 0; --n)
                        i = (e * i + this[n]) % t;
            return i
        }
        ,
        e.prototype.millerRabin = function (t) {
            var n = this.subtract(e.ONE)
                , r = n.getLowestSetBit();
            if (r <= 0)
                return !1;
            var o = n.shiftRight(r);
            (t = t + 1 >> 1) > L.length && (t = L.length);
            for (var s = i(), a = 0; a < t; ++a) {
                s.fromInt(L[Math.floor(Math.random() * L.length)]);
                var h = s.modPow(o, this);
                if (0 != h.compareTo(e.ONE) && 0 != h.compareTo(n)) {
                    for (var u = 1; u++ < r && 0 != h.compareTo(n);)
                        if (0 == (h = h.modPowInt(2, this)).compareTo(e.ONE))
                            return !1;
                    if (0 != h.compareTo(n))
                        return !1
                }
            }
            return !0
        }
        ,
        e.prototype.clone = function () {
            var t = i();
            return this.copyTo(t),
                t
        }
        ,
        e.prototype.intValue = function () {
            if (this.s < 0) {
                if (1 == this.t)
                    return this[0] - this.DV;
                if (0 == this.t)
                    return -1
            } else {
                if (1 == this.t)
                    return this[0];
                if (0 == this.t)
                    return 0
            }
            return (this[1] & (1 << 32 - this.DB) - 1) << this.DB | this[0]
        }
        ,
        e.prototype.byteValue = function () {
            return 0 == this.t ? this.s : this[0] << 24 >> 24
        }
        ,
        e.prototype.shortValue = function () {
            return 0 == this.t ? this.s : this[0] << 16 >> 16
        }
        ,
        e.prototype.signum = function () {
            return this.s < 0 ? -1 : this.t <= 0 || 1 == this.t && this[0] <= 0 ? 0 : 1
        }
        ,
        e.prototype.toByteArray = function () {
            var t = this.t
                , e = new Array;
            e[0] = this.s;
            var i, n = this.DB - t * this.DB % 8, r = 0;
            if (t-- > 0)
                for (n < this.DB && (i = this[t] >> n) != (this.s & this.DM) >> n && (e[r++] = i | this.s << this.DB - n); t >= 0;)
                    n < 8 ? (i = (this[t] & (1 << n) - 1) << 8 - n,
                        i |= this[--t] >> (n += this.DB - 8)) : (i = this[t] >> (n -= 8) & 255,
                    n <= 0 && (n += this.DB,
                        --t)),
                    0 != (128 & i) && (i |= -256),
                    0 == r && (128 & this.s) != (128 & i) && ++r,
                    (r > 0 || i != this.s) && (e[r++] = i);
            return e
        }
        ,
        e.prototype.equals = function (t) {
            return 0 == this.compareTo(t)
        }
        ,
        e.prototype.min = function (t) {
            return this.compareTo(t) < 0 ? this : t
        }
        ,
        e.prototype.max = function (t) {
            return this.compareTo(t) > 0 ? this : t
        }
        ,
        e.prototype.and = function (t) {
            var e = i();
            return this.bitwiseTo(t, c, e),
                e
        }
        ,
        e.prototype.or = function (t) {
            var e = i();
            return this.bitwiseTo(t, l, e),
                e
        }
        ,
        e.prototype.xor = function (t) {
            var e = i();
            return this.bitwiseTo(t, p, e),
                e
        }
        ,
        e.prototype.andNot = function (t) {
            var e = i();
            return this.bitwiseTo(t, f, e),
                e
        }
        ,
        e.prototype.not = function () {
            for (var t = i(), e = 0; e < this.t; ++e)
                t[e] = this.DM & ~this[e];
            return t.t = this.t,
                t.s = ~this.s,
                t
        }
        ,
        e.prototype.shiftLeft = function (t) {
            var e = i();
            return t < 0 ? this.rShiftTo(-t, e) : this.lShiftTo(t, e),
                e
        }
        ,
        e.prototype.shiftRight = function (t) {
            var e = i();
            return t < 0 ? this.lShiftTo(-t, e) : this.rShiftTo(t, e),
                e
        }
        ,
        e.prototype.getLowestSetBit = function () {
            for (var t = 0; t < this.t; ++t)
                if (0 != this[t])
                    return t * this.DB + d(this[t]);
            return this.s < 0 ? this.t * this.DB : -1
        }
        ,
        e.prototype.bitCount = function () {
            for (var t = 0, e = this.s & this.DM, i = 0; i < this.t; ++i)
                t += g(this[i] ^ e);
            return t
        }
        ,
        e.prototype.testBit = function (t) {
            var e = Math.floor(t / this.DB);
            return e >= this.t ? 0 != this.s : 0 != (this[e] & 1 << t % this.DB)
        }
        ,
        e.prototype.setBit = function (t) {
            return this.changeBit(t, l)
        }
        ,
        e.prototype.clearBit = function (t) {
            return this.changeBit(t, f)
        }
        ,
        e.prototype.flipBit = function (t) {
            return this.changeBit(t, p)
        }
        ,
        e.prototype.add = function (t) {
            var e = i();
            return this.addTo(t, e),
                e
        }
        ,
        e.prototype.subtract = function (t) {
            var e = i();
            return this.subTo(t, e),
                e
        }
        ,
        e.prototype.multiply = function (t) {
            var e = i();
            return this.multiplyTo(t, e),
                e
        }
        ,
        e.prototype.divide = function (t) {
            var e = i();
            return this.divRemTo(t, e, null),
                e
        }
        ,
        e.prototype.remainder = function (t) {
            var e = i();
            return this.divRemTo(t, null, e),
                e
        }
        ,
        e.prototype.divideAndRemainder = function (t) {
            var e = i()
                , n = i();
            return this.divRemTo(t, e, n),
                new Array(e, n)
        }
        ,
        e.prototype.modPow = function (t, e) {
            var n, r, s = t.bitLength(), c = o(1);
            if (s <= 0)
                return c;
            n = s < 18 ? 1 : s < 48 ? 3 : s < 144 ? 4 : s < 768 ? 5 : 6,
                r = s < 8 ? new h(e) : e.isEven() ? new b(e) : new u(e);
            var l = new Array
                , p = 3
                , f = n - 1
                , d = (1 << n) - 1;
            if (l[1] = r.convert(this),
            n > 1) {
                var g = i();
                for (r.sqrTo(l[1], g); p <= d;)
                    l[p] = i(),
                        r.mulTo(g, l[p - 2], l[p]),
                        p += 2
            }
            var m, v, y = t.t - 1, T = !0, w = i();
            for (s = a(t[y]) - 1; y >= 0;) {
                for (s >= f ? m = t[y] >> s - f & d : (m = (t[y] & (1 << s + 1) - 1) << f - s,
                y > 0 && (m |= t[y - 1] >> this.DB + s - f)),
                         p = n; 0 == (1 & m);)
                    m >>= 1,
                        --p;
                if ((s -= p) < 0 && (s += this.DB,
                    --y),
                    T)
                    l[m].copyTo(c),
                        T = !1;
                else {
                    for (; p > 1;)
                        r.sqrTo(c, w),
                            r.sqrTo(w, c),
                            p -= 2;
                    p > 0 ? r.sqrTo(c, w) : (v = c,
                        c = w,
                        w = v),
                        r.mulTo(w, l[m], c)
                }
                for (; y >= 0 && 0 == (t[y] & 1 << s);)
                    r.sqrTo(c, w),
                        v = c,
                        c = w,
                        w = v,
                    --s < 0 && (s = this.DB - 1,
                        --y)
            }
            return r.revert(c)
        }
        ,
        e.prototype.modInverse = function (t) {
            var i = t.isEven();
            if (this.isEven() && i || 0 == t.signum())
                return e.ZERO;
            for (var n = t.clone(), r = this.clone(), s = o(1), a = o(0), h = o(0), u = o(1); 0 != n.signum();) {
                for (; n.isEven();)
                    n.rShiftTo(1, n),
                        i ? (s.isEven() && a.isEven() || (s.addTo(this, s),
                            a.subTo(t, a)),
                            s.rShiftTo(1, s)) : a.isEven() || a.subTo(t, a),
                        a.rShiftTo(1, a);
                for (; r.isEven();)
                    r.rShiftTo(1, r),
                        i ? (h.isEven() && u.isEven() || (h.addTo(this, h),
                            u.subTo(t, u)),
                            h.rShiftTo(1, h)) : u.isEven() || u.subTo(t, u),
                        u.rShiftTo(1, u);
                n.compareTo(r) >= 0 ? (n.subTo(r, n),
                i && s.subTo(h, s),
                    a.subTo(u, a)) : (r.subTo(n, r),
                i && h.subTo(s, h),
                    u.subTo(a, u))
            }
            return 0 != r.compareTo(e.ONE) ? e.ZERO : u.compareTo(t) >= 0 ? u.subtract(t) : u.signum() < 0 ? (u.addTo(t, u),
                u.signum() < 0 ? u.add(t) : u) : u
        }
        ,
        e.prototype.pow = function (t) {
            return this.exp(t, new m)
        }
        ,
        e.prototype.gcd = function (t) {
            var e = this.s < 0 ? this.negate() : this.clone()
                , i = t.s < 0 ? t.negate() : t.clone();
            if (e.compareTo(i) < 0) {
                var n = e;
                e = i,
                    i = n
            }
            var r = e.getLowestSetBit()
                , o = i.getLowestSetBit();
            if (o < 0)
                return e;
            for (r < o && (o = r),
                 o > 0 && (e.rShiftTo(o, e),
                     i.rShiftTo(o, i)); e.signum() > 0;)
                (r = e.getLowestSetBit()) > 0 && e.rShiftTo(r, e),
                (r = i.getLowestSetBit()) > 0 && i.rShiftTo(r, i),
                    e.compareTo(i) >= 0 ? (e.subTo(i, e),
                        e.rShiftTo(1, e)) : (i.subTo(e, i),
                        i.rShiftTo(1, i));
            return o > 0 && i.lShiftTo(o, i),
                i
        }
        ,
        e.prototype.isProbablePrime = function (t) {
            var e, i = this.abs();
            if (1 == i.t && i[0] <= L[L.length - 1]) {
                for (e = 0; e < L.length; ++e)
                    if (i[0] == L[e])
                        return !0;
                return !1
            }
            if (i.isEven())
                return !1;
            for (e = 1; e < L.length;) {
                for (var n = L[e], r = e + 1; r < L.length && n < V;)
                    n *= L[r++];
                for (n = i.modInt(n); e < r;)
                    if (n % L[e++] == 0)
                        return !1
            }
            return i.millerRabin(t)
        }
        ,
        e.prototype.square = function () {
            var t = i();
            return this.squareTo(t),
                t
        }
        ,
        T.prototype.init = function (t) {
            var e, i, n;
            for (e = 0; e < 256; ++e)
                this.S[e] = e;
            for (i = 0,
                     e = 0; e < 256; ++e)
                i = i + this.S[e] + t[e % t.length] & 255,
                    n = this.S[e],
                    this.S[e] = this.S[i],
                    this.S[i] = n;
            this.i = 0,
                this.j = 0
        }
        ,
        T.prototype.next = function () {
            var t;
            return this.i = this.i + 1 & 255,
                this.j = this.j + this.S[this.i] & 255,
                t = this.S[this.i],
                this.S[this.i] = this.S[this.j],
                this.S[this.j] = t,
                this.S[t + this.S[this.i] & 255]
        }
    ;
    var C, I, P, _ = 256;
    if (null == I) {
        var q;
        if (I = new Array,
            P = 0) {
            for (var j = [3884100794, 1119071750, 909562595, 2665516889, 22079223, 2102404664, 660643227, 2884524220, 1802664912, 3436540339, 3353245056, 199979366, 3391210239, 496702373, 3873358982, 3313361651, 366547387, 3765530888, 193974459, 4205982190, 3234990682, 2281636793, 2498765418, 2993253352, 3264784064, 2119592419, 107082072, 3780223934, 1124220021, 3826975124, 2812677016, 2196908890, 1521338512, 1259544928, 3615668642, 1355230023, 3156695194, 3691428859, 548786759, 1683637682, 2390081965, 2383747502, 872144749, 529115196, 2832819063, 1324398425, 3711359543, 1056571876, 1338315365, 3046703972, 3913791319, 3930041473, 1324119076, 1664374603, 1423544068, 2432686002, 532876429, 2022101694, 3367961711, 1988073299, 1036116682, 606669096, 610954513, 4006820249, 15621759, 2012576664, 4080432770, 3467956524, 1226039144, 3204158002, 1842098178, 2703831076, 1760102935, 2085453699, 2453882496, 3837916074, 287910269, 632467960, 3403486876, 836452208, 285423544, 3533104653, 1890808724, 1972401089, 3489275738, 2826836288, 924076240, 3948649024, 1197434409, 4155243445, 1000249535, 74434125, 1350066082, 3630314713, 1411766691, 3794304531, 1959072362, 2491270811, 1088558584, 3009379776, 1915666123, 1101720735, 4047907821, 3539323787, 86828875, 254974332, 844931788, 2512277313, 4110949984, 3456227939, 2078025583, 2854205103, 1831871606, 531589983, 1184839112, 1673094135, 2402861966, 1389491361, 4061008221, 2407540068, 446487630, 3155789823, 802503905, 1870997194, 3733033482, 915542190, 2221791757, 1228558334, 1818289513, 2838860744, 2794717640, 3426412654, 1158452212, 2419899653, 2930147578, 2909347352, 3341996844, 2528024491, 4193722885, 1099001739, 2375822573, 182405623, 1515735377, 471067798, 2292446791, 1159524821, 1692184418, 1553834994, 571584168, 1492731215, 3161075020, 250881424, 4058940147, 3374763548, 2712749082, 3783212225, 2831436818, 4285627229, 2392093250, 431533254, 1172696386, 425086136, 1621879139, 294166415, 2387135870, 1344615642, 1277616022, 849602150, 404700542, 1891810646, 1903499864, 1255943413, 2904400946, 3619328971, 1843118715, 422045401, 2605538266, 4236417954, 1065694917, 3636397747, 442297658, 947649945, 3421974422, 839820104, 2233452626, 3404505115, 1172961203, 3462721976, 1092339300, 4011491964, 1841293324, 912433592, 2348220866, 3665304472, 4274835452, 2100898384, 1441528432, 1901581593, 285461476, 3064092472, 2856611636, 1018651746, 3273615611, 1044383162, 1383138048, 2600417231, 1716372187, 3797579117, 3950897169, 3105038389, 2843968980, 509991761, 2043948263, 2831020466, 2559214634, 2697675290, 1764142649, 4069402699, 2556209499, 2754355082, 119260800, 617441457, 3326543473, 27832134, 2370077891, 3925188987, 40503092, 3994721770, 1685270379, 743951787, 3221469015, 3544253261, 1938948876, 2396900273, 3834816285, 2600375411, 3387101317, 3506835103, 2480477892, 1699476112, 4036159062, 3601651055, 3584673333, 2757189808, 1306178849, 1035219620, 732653821, 1159160729, 4230237680, 3346452331, 2480015872, 1192287062, 3061984515, 3622088521, 3002551685, 205968364],q = 0; q < j.length; ++q)
                I[P++] = 255 & j[q]
        }
        var H = function t(e) {
            if (this.count = this.count || 0,
            this.count >= 256 || P >= _){}
                // window.removeEventListener ? window.removeEventListener("mousemove", t, !1) : window.detachEvent && window.detachEvent("onmousemove", t);
            else
                try {
                    var i = e.x + e.y;
                    I[P++] = 255 & i,
                        this.count += 1
                } catch (t) {
                }
        };
    }
    S.prototype.nextBytes = function (t) {
        var e;
        for (e = 0; e < t.length; ++e)
            t[e] = w()
    }
        ,
        x.prototype.doPublic = function (t) {
            return t.modPowInt(this.e, this.n)
        }
        ,
        x.prototype.setPublic = function (t, e) {
            null != t && null != e && t.length > 0 && e.length > 0 && (this.n = E(t, 16),
                this.e = parseInt(e, 16))
        }
        ,
        x.prototype.encrypt = function (t) {
            console.log(this)
            var i = function (t, i) {
                if (i < t.length + 11)
                    return null;
                for (var n = new Array, r = t.length - 1; r >= 0 && i > 0;) {
                    var o = t.charCodeAt(r--);
                    o < 128 ? n[--i] = o : o > 127 && o < 2048 ? (n[--i] = 63 & o | 128,
                        n[--i] = o >> 6 | 192) : (n[--i] = 63 & o | 128,
                        n[--i] = o >> 6 & 63 | 128,
                        n[--i] = o >> 12 | 224)
                }
                n[--i] = 0;
                for (var s = new S, a = new Array; i > 2;) {
                    for (a[0] = 0; 0 == a[0];)
                        s.nextBytes(a);
                    n[--i] = a[0]
                }
                return n[--i] = 2,
                    n[--i] = 0,
                    new e(n)
            }(t, this.n.bitLength() + 7 >> 3);
            if (null == i)
                return null;
            var n = this.doPublic(i);
            if (null == n)
                return null;
            var r = n.toString(16);
            return 0 == (1 & r.length) ? r : "0" + r
        }
        ,
        x.prototype.doPrivate = function (t) {
            if (null == this.p || null == this.q)
                return t.modPow(this.d, this.n);
            for (var e = t.mod(this.p).modPow(this.dmp1, this.p), i = t.mod(this.q).modPow(this.dmq1, this.q); e.compareTo(i) < 0;)
                e = e.add(this.p);
            return e.subtract(i).multiply(this.coeff).mod(this.p).multiply(this.q).add(i)
        }
        ,
        x.prototype.setPrivate = function (t, e, i) {
            null != t && null != e && t.length > 0 && e.length > 0 && (this.n = E(t, 16),
                this.e = parseInt(e, 16),
                this.d = E(i, 16))
        }
        ,
        x.prototype.setPrivateEx = function (t, e, i, n, r, o, s, a) {
            null != t && null != e && t.length > 0 && e.length > 0 && (this.n = E(t, 16),
                this.e = parseInt(e, 16),
                this.d = E(i, 16),
                this.p = E(n, 16),
                this.q = E(r, 16),
                this.dmp1 = E(o, 16),
                this.dmq1 = E(s, 16),
                this.coeff = E(a, 16))
        }
        ,
        x.prototype.generate = function (t, i) {
            var n = new S
                , r = t >> 1;
            this.e = parseInt(i, 16);
            for (var o = new e(i, 16); ;) {
                for (; this.p = new e(t - r, 1, n),
                       0 != this.p.subtract(e.ONE).gcd(o).compareTo(e.ONE) || !this.p.isProbablePrime(10);)
                    ;
                for (; this.q = new e(r, 1, n),
                       0 != this.q.subtract(e.ONE).gcd(o).compareTo(e.ONE) || !this.q.isProbablePrime(10);)
                    ;
                if (this.p.compareTo(this.q) <= 0) {
                    var s = this.p;
                    this.p = this.q,
                        this.q = s
                }
                var a = this.p.subtract(e.ONE)
                    , h = this.q.subtract(e.ONE)
                    , u = a.multiply(h);
                if (0 == u.gcd(o).compareTo(e.ONE)) {
                    this.n = this.p.multiply(this.q),
                        this.d = o.modInverse(u),
                        this.dmp1 = this.d.mod(a),
                        this.dmq1 = this.d.mod(h),
                        this.coeff = this.q.modInverse(this.p);
                    break
                }
            }
        }
        ,
        x.prototype.decrypt = function (t) {
            var e = E(t, 16)
                , i = this.doPrivate(e);
            return null == i ? null : function (t, e) {
                for (var i = t.toByteArray(), n = 0; n < i.length && 0 == i[n];)
                    ++n;
                if (i.length - n != e - 1 || 2 != i[n])
                    return null;
                for (++n; 0 != i[n];)
                    if (++n >= i.length)
                        return null;
                for (var r = ""; ++n < i.length;) {
                    var o = 255 & i[n];
                    o < 128 ? r += String.fromCharCode(o) : o > 191 && o < 224 ? (r += String.fromCharCode((31 & o) << 6 | 63 & i[n + 1]),
                        ++n) : (r += String.fromCharCode((15 & o) << 12 | (63 & i[n + 1]) << 6 | 63 & i[n + 2]),
                        n += 2)
                }
                return r
            }(i, this.n.bitLength() + 7 >> 3)
        }
        ,
        x.prototype.generateAsync = function (t, n, r) {
            var o = new S
                , s = t >> 1;
            this.e = parseInt(n, 16);
            var a = new e(n, 16)
                , h = this;
            setTimeout(function n() {
                var u = function () {
                    if (h.p.compareTo(h.q) <= 0) {
                        var t = h.p;
                        h.p = h.q,
                            h.q = t
                    }
                    var i = h.p.subtract(e.ONE)
                        , o = h.q.subtract(e.ONE)
                        , s = i.multiply(o);
                    0 == s.gcd(a).compareTo(e.ONE) ? (h.n = h.p.multiply(h.q),
                        h.d = a.modInverse(s),
                        h.dmp1 = h.d.mod(i),
                        h.dmq1 = h.d.mod(o),
                        h.coeff = h.q.modInverse(h.p),
                        setTimeout(function () {
                            r()
                        }, 0)) : setTimeout(n, 0)
                }
                    , c = function t() {
                    h.q = i(),
                        h.q.fromNumberAsync(s, 1, o, function () {
                            h.q.subtract(e.ONE).gcda(a, function (i) {
                                0 == i.compareTo(e.ONE) && h.q.isProbablePrime(10) ? setTimeout(u, 0) : setTimeout(t, 0)
                            })
                        })
                };
                setTimeout(function n() {
                    h.p = i(),
                        h.p.fromNumberAsync(t - s, 1, o, function () {
                            h.p.subtract(e.ONE).gcda(a, function (t) {
                                0 == t.compareTo(e.ONE) && h.p.isProbablePrime(10) ? setTimeout(c, 0) : setTimeout(n, 0)
                            })
                        })
                }, 0)
            }, 0)
        }
        ,
        e.prototype.gcda = function (t, e) {
            var i = this.s < 0 ? this.negate() : this.clone()
                , n = t.s < 0 ? t.negate() : t.clone();
            if (i.compareTo(n) < 0) {
                var r = i;
                i = n,
                    n = r
            }
            var o = i.getLowestSetBit()
                , s = n.getLowestSetBit();
            s < 0 ? e(i) : (o < s && (s = o),
            s > 0 && (i.rShiftTo(s, i),
                n.rShiftTo(s, n)),
                setTimeout(function t() {
                    (o = i.getLowestSetBit()) > 0 && i.rShiftTo(o, i),
                    (o = n.getLowestSetBit()) > 0 && n.rShiftTo(o, n),
                        i.compareTo(n) >= 0 ? (i.subTo(n, i),
                            i.rShiftTo(1, i)) : (n.subTo(i, n),
                            n.rShiftTo(1, n)),
                        i.signum() > 0 ? setTimeout(t, 0) : (s > 0 && n.lShiftTo(s, n),
                            setTimeout(function () {
                                e(n)
                            }, 0))
                }, 10))
        }
        ,
        e.prototype.fromNumberAsync = function (t, i, n, r) {
            if ("number" == typeof i)
                if (t < 2)
                    this.fromInt(1);
                else {
                    this.fromNumber(t, n),
                    this.testBit(t - 1) || this.bitwiseTo(e.ONE.shiftLeft(t - 1), l, this),
                    this.isEven() && this.dAddOffset(1, 0);
                    var o = this;
                    setTimeout(function n() {
                        o.dAddOffset(2, 0),
                        o.bitLength() > t && o.subTo(e.ONE.shiftLeft(t - 1), o),
                            o.isProbablePrime(i) ? setTimeout(function () {
                                r()
                            }, 0) : setTimeout(n, 0)
                    }, 0)
                }
            else {
                var s = new Array
                    , a = 7 & t;
                s.length = 1 + (t >> 3),
                    i.nextBytes(s),
                    a > 0 ? s[0] &= (1 << a) - 1 : s[0] = 0,
                    this.fromString(s, 256)
            }
        }
    ;
    var k = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"
        , F = "="
        , U = U || {};
    U.env = U.env || {};
    var K = U
        , z = Object.prototype
        , G = ["toString", "valueOf"];
        U.env.ua = {"ie":0,"opera":0,"gecko":0,"webkit":537.36,"chrome":81.04044,"mobile":null,"air":0,"ipad":0,"iphone":0,"ipod":0,"ios":null,"android":0,"webos":0,"secure":true,"os":"windows"},
        U.isFunction = function (t) {
            return "function" == typeof t || "[object Function]" === z.toString.apply(t)
        }
        ,
        U._IEEnumFix = U.env.ua.ie ? function (t, e) {
                var i, n, r;
                for (i = 0; i < G.length; i += 1)
                    r = e[n = G[i]],
                    K.isFunction(r) && r != z[n] && (t[n] = r)
            }
            : function () {
            }
        ,
        U.extend = function (t, e, i) {
            if (!e || !t)
                throw new Error("extend failed, please check that all dependencies are included.");
            var n, r = function () {
            };
            if (r.prototype = e.prototype,
                t.prototype = new r,
                t.prototype.constructor = t,
                t.superclass = e.prototype,
            e.prototype.constructor == z.constructor && (e.prototype.constructor = e),
                i) {
                for (n in i)
                    K.hasOwnProperty(i, n) && (t.prototype[n] = i[n]);
                K._IEEnumFix(t.prototype, i)
            }
        }
    ;
    var Z = Z || {};
    void 0 !== Z && Z || (Z = {}),
    void 0 !== Z.asn1 && Z.asn1 || (Z.asn1 = {}),
        Z.asn1.ASN1Util = new function () {
            this.integerToByteHex = function (t) {
                var e = t.toString(16);
                return e.length % 2 == 1 && (e = "0" + e),
                    e
            }
                ,
                this.bigIntToMinTwosComplementsHex = function (t) {
                    var i = t.toString(16);
                    if ("-" != i.substr(0, 1))
                        i.length % 2 == 1 ? i = "0" + i : i.match(/^[0-7]/) || (i = "00" + i);
                    else {
                        var n = i.substr(1)
                            , r = n.length;
                        r % 2 == 1 ? r += 1 : i.match(/^[0-7]/) || (r += 2);
                        for (var o = "", s = 0; s < r; s++)
                            o += "f";
                        i = new e(o, 16).xor(t).add(e.ONE).toString(16).replace(/^-/, "")
                    }
                    return i
                }
                ,
                this.getPEMStringFromHex = function (t, e) {
                    var i = CryptoJS.enc.Hex.parse(t)
                        , n = CryptoJS.enc.Base64.stringify(i)
                        , r = n.replace(/(.{64})/g, "$1\r\n");
                    return r = r.replace(/\r\n$/, ""),
                    "-----BEGIN " + e + "-----\r\n" + r + "\r\n-----END " + e + "-----\r\n"
                }
        }
        ,
        Z.asn1.ASN1Object = function () {
            this.getLengthHexFromValue = function () {
                if (void 0 === this.hV || null == this.hV)
                    throw "this.hV is null or undefined.";
                if (this.hV.length % 2 == 1)
                    throw "value hex must be even length: n=" + "".length + ",v=" + this.hV;
                var t = this.hV.length / 2
                    , e = t.toString(16);
                if (e.length % 2 == 1 && (e = "0" + e),
                t < 128)
                    return e;
                var i = e.length / 2;
                if (i > 15)
                    throw "ASN.1 length too long to represent by 8x: n = " + t.toString(16);
                return (128 + i).toString(16) + e
            }
                ,
                this.getEncodedHex = function () {
                    return (null == this.hTLV || this.isModified) && (this.hV = this.getFreshValueHex(),
                        this.hL = this.getLengthHexFromValue(),
                        this.hTLV = this.hT + this.hL + this.hV,
                        this.isModified = !1),
                        this.hTLV
                }
                ,
                this.getValueHex = function () {
                    return this.getEncodedHex(),
                        this.hV
                }
                ,
                this.getFreshValueHex = function () {
                    return ""
                }
        }
        ,
        Z.asn1.DERAbstractString = function (t) {
            Z.asn1.DERAbstractString.superclass.constructor.call(this),
                this.getString = function () {
                    return this.s
                }
                ,
                this.setString = function (t) {
                    this.hTLV = null,
                        this.isModified = !0,
                        this.s = t,
                        this.hV = stohex(this.s)
                }
                ,
                this.setStringHex = function (t) {
                    this.hTLV = null,
                        this.isModified = !0,
                        this.s = null,
                        this.hV = t
                }
                ,
                this.getFreshValueHex = function () {
                    return this.hV
                }
                ,
            void 0 !== t && (void 0 !== t.str ? this.setString(t.str) : void 0 !== t.hex && this.setStringHex(t.hex))
        }
        ,
        U.extend(Z.asn1.DERAbstractString, Z.asn1.ASN1Object),
        Z.asn1.DERAbstractTime = function (t) {
            Z.asn1.DERAbstractTime.superclass.constructor.call(this),
                this.localDateToUTC = function (t) {
                    return utc = t.getTime() + 6e4 * t.getTimezoneOffset(),
                        new Date(utc)
                }
                ,
                this.formatDate = function (t, e) {
                    var i = this.zeroPadding
                        , n = this.localDateToUTC(t)
                        , r = String(n.getFullYear());
                    return "utc" == e && (r = r.substr(2, 2)),
                    r + i(String(n.getMonth() + 1), 2) + i(String(n.getDate()), 2) + i(String(n.getHours()), 2) + i(String(n.getMinutes()), 2) + i(String(n.getSeconds()), 2) + "Z"
                }
                ,
                this.zeroPadding = function (t, e) {
                    return t.length >= e ? t : new Array(e - t.length + 1).join("0") + t
                }
                ,
                this.getString = function () {
                    return this.s
                }
                ,
                this.setString = function (t) {
                    this.hTLV = null,
                        this.isModified = !0,
                        this.s = t,
                        this.hV = stohex(this.s)
                }
                ,
                this.setByDateValue = function (t, e, i, n, r, o) {
                    var s = new Date(Date.UTC(t, e - 1, i, n, r, o, 0));
                    this.setByDate(s)
                }
                ,
                this.getFreshValueHex = function () {
                    return this.hV
                }
        }
        ,
        U.extend(Z.asn1.DERAbstractTime, Z.asn1.ASN1Object),
        Z.asn1.DERAbstractStructured = function (t) {
            Z.asn1.DERAbstractString.superclass.constructor.call(this),
                this.setByASN1ObjectArray = function (t) {
                    this.hTLV = null,
                        this.isModified = !0,
                        this.asn1Array = t
                }
                ,
                this.appendASN1Object = function (t) {
                    this.hTLV = null,
                        this.isModified = !0,
                        this.asn1Array.push(t)
                }
                ,
                this.asn1Array = new Array,
            void 0 !== t && void 0 !== t.array && (this.asn1Array = t.array)
        }
        ,
        U.extend(Z.asn1.DERAbstractStructured, Z.asn1.ASN1Object),
        Z.asn1.DERBoolean = function () {
            Z.asn1.DERBoolean.superclass.constructor.call(this),
                this.hT = "01",
                this.hTLV = "0101ff"
        }
        ,
        U.extend(Z.asn1.DERBoolean, Z.asn1.ASN1Object),
        Z.asn1.DERInteger = function (t) {
            Z.asn1.DERInteger.superclass.constructor.call(this),
                this.hT = "02",
                this.setByBigInteger = function (t) {
                    this.hTLV = null,
                        this.isModified = !0,
                        this.hV = Z.asn1.ASN1Util.bigIntToMinTwosComplementsHex(t)
                }
                ,
                this.setByInteger = function (t) {
                    var i = new e(String(t), 10);
                    this.setByBigInteger(i)
                }
                ,
                this.setValueHex = function (t) {
                    this.hV = t
                }
                ,
                this.getFreshValueHex = function () {
                    return this.hV
                }
                ,
            void 0 !== t && (void 0 !== t.bigint ? this.setByBigInteger(t.bigint) : void 0 !== t.int ? this.setByInteger(t.int) : void 0 !== t.hex && this.setValueHex(t.hex))
        }
        ,
        U.extend(Z.asn1.DERInteger, Z.asn1.ASN1Object),
        Z.asn1.DERBitString = function (t) {
            Z.asn1.DERBitString.superclass.constructor.call(this),
                this.hT = "03",
                this.setHexValueIncludingUnusedBits = function (t) {
                    this.hTLV = null,
                        this.isModified = !0,
                        this.hV = t
                }
                ,
                this.setUnusedBitsAndHexValue = function (t, e) {
                    if (t < 0 || 7 < t)
                        throw "unused bits shall be from 0 to 7: u = " + t;
                    var i = "0" + t;
                    this.hTLV = null,
                        this.isModified = !0,
                        this.hV = i + e
                }
                ,
                this.setByBinaryString = function (t) {
                    var e = 8 - (t = t.replace(/0+$/, "")).length % 8;
                    8 == e && (e = 0);
                    for (var i = 0; i <= e; i++)
                        t += "0";
                    for (var n = "", i = 0; i < t.length - 1; i += 8) {
                        var r = t.substr(i, 8)
                            , o = parseInt(r, 2).toString(16);
                        1 == o.length && (o = "0" + o),
                            n += o
                    }
                    this.hTLV = null,
                        this.isModified = !0,
                        this.hV = "0" + e + n
                }
                ,
                this.setByBooleanArray = function (t) {
                    for (var e = "", i = 0; i < t.length; i++)
                        1 == t[i] ? e += "1" : e += "0";
                    this.setByBinaryString(e)
                }
                ,
                this.newFalseArray = function (t) {
                    for (var e = new Array(t), i = 0; i < t; i++)
                        e[i] = !1;
                    return e
                }
                ,
                this.getFreshValueHex = function () {
                    return this.hV
                }
                ,
            void 0 !== t && (void 0 !== t.hex ? this.setHexValueIncludingUnusedBits(t.hex) : void 0 !== t.bin ? this.setByBinaryString(t.bin) : void 0 !== t.array && this.setByBooleanArray(t.array))
        }
        ,
        U.extend(Z.asn1.DERBitString, Z.asn1.ASN1Object),
        Z.asn1.DEROctetString = function (t) {
            Z.asn1.DEROctetString.superclass.constructor.call(this, t),
                this.hT = "04"
        }
        ,
        U.extend(Z.asn1.DEROctetString, Z.asn1.DERAbstractString),
        Z.asn1.DERNull = function () {
            Z.asn1.DERNull.superclass.constructor.call(this),
                this.hT = "05",
                this.hTLV = "0500"
        }
        ,
        U.extend(Z.asn1.DERNull, Z.asn1.ASN1Object),
        Z.asn1.DERObjectIdentifier = function (t) {
            var i = function (t) {
                var e = t.toString(16);
                return 1 == e.length && (e = "0" + e),
                    e
            }
                , n = function (t) {
                var n = ""
                    , r = new e(t, 10)
                    , o = r.toString(2)
                    , s = 7 - o.length % 7;
                7 == s && (s = 0);
                for (var a = "", h = 0; h < s; h++)
                    a += "0";
                o = a + o;
                for (var h = 0; h < o.length - 1; h += 7) {
                    var u = o.substr(h, 7);
                    h != o.length - 7 && (u = "1" + u),
                        n += i(parseInt(u, 2))
                }
                return n
            };
            Z.asn1.DERObjectIdentifier.superclass.constructor.call(this),
                this.hT = "06",
                this.setValueHex = function (t) {
                    this.hTLV = null,
                        this.isModified = !0,
                        this.s = null,
                        this.hV = t
                }
                ,
                this.setValueOidString = function (t) {
                    if (!t.match(/^[0-9.]+$/))
                        throw "malformed oid string: " + t;
                    var e = ""
                        , r = t.split(".")
                        , o = 40 * parseInt(r[0]) + parseInt(r[1]);
                    e += i(o),
                        r.splice(0, 2);
                    for (var s = 0; s < r.length; s++)
                        e += n(r[s]);
                    this.hTLV = null,
                        this.isModified = !0,
                        this.s = null,
                        this.hV = e
                }
                ,
                this.setValueName = function (t) {
                    if (void 0 === Z.asn1.x509.OID.name2oidList[t])
                        throw "DERObjectIdentifier oidName undefined: " + t;
                    var e = Z.asn1.x509.OID.name2oidList[t];
                    this.setValueOidString(e)
                }
                ,
                this.getFreshValueHex = function () {
                    return this.hV
                }
                ,
            void 0 !== t && (void 0 !== t.oid ? this.setValueOidString(t.oid) : void 0 !== t.hex ? this.setValueHex(t.hex) : void 0 !== t.name && this.setValueName(t.name))
        }
        ,
        U.extend(Z.asn1.DERObjectIdentifier, Z.asn1.ASN1Object),
        Z.asn1.DERUTF8String = function (t) {
            Z.asn1.DERUTF8String.superclass.constructor.call(this, t),
                this.hT = "0c"
        }
        ,
        U.extend(Z.asn1.DERUTF8String, Z.asn1.DERAbstractString),
        Z.asn1.DERNumericString = function (t) {
            Z.asn1.DERNumericString.superclass.constructor.call(this, t),
                this.hT = "12"
        }
        ,
        U.extend(Z.asn1.DERNumericString, Z.asn1.DERAbstractString),
        Z.asn1.DERPrintableString = function (t) {
            Z.asn1.DERPrintableString.superclass.constructor.call(this, t),
                this.hT = "13"
        }
        ,
        U.extend(Z.asn1.DERPrintableString, Z.asn1.DERAbstractString),
        Z.asn1.DERTeletexString = function (t) {
            Z.asn1.DERTeletexString.superclass.constructor.call(this, t),
                this.hT = "14"
        }
        ,
        U.extend(Z.asn1.DERTeletexString, Z.asn1.DERAbstractString),
        Z.asn1.DERIA5String = function (t) {
            Z.asn1.DERIA5String.superclass.constructor.call(this, t),
                this.hT = "16"
        }
        ,
        U.extend(Z.asn1.DERIA5String, Z.asn1.DERAbstractString),
        Z.asn1.DERUTCTime = function (t) {
            Z.asn1.DERUTCTime.superclass.constructor.call(this, t),
                this.hT = "17",
                this.setByDate = function (t) {
                    this.hTLV = null,
                        this.isModified = !0,
                        this.date = t,
                        this.s = this.formatDate(this.date, "utc"),
                        this.hV = stohex(this.s)
                }
                ,
            void 0 !== t && (void 0 !== t.str ? this.setString(t.str) : void 0 !== t.hex ? this.setStringHex(t.hex) : void 0 !== t.date && this.setByDate(t.date))
        }
        ,
        U.extend(Z.asn1.DERUTCTime, Z.asn1.DERAbstractTime),
        Z.asn1.DERGeneralizedTime = function (t) {
            Z.asn1.DERGeneralizedTime.superclass.constructor.call(this, t),
                this.hT = "18",
                this.setByDate = function (t) {
                    this.hTLV = null,
                        this.isModified = !0,
                        this.date = t,
                        this.s = this.formatDate(this.date, "gen"),
                        this.hV = stohex(this.s)
                }
                ,
            void 0 !== t && (void 0 !== t.str ? this.setString(t.str) : void 0 !== t.hex ? this.setStringHex(t.hex) : void 0 !== t.date && this.setByDate(t.date))
        }
        ,
        U.extend(Z.asn1.DERGeneralizedTime, Z.asn1.DERAbstractTime),
        Z.asn1.DERSequence = function (t) {
            Z.asn1.DERSequence.superclass.constructor.call(this, t),
                this.hT = "30",
                this.getFreshValueHex = function () {
                    for (var t = "", e = 0; e < this.asn1Array.length; e++) {
                        t += this.asn1Array[e].getEncodedHex()
                    }
                    return this.hV = t,
                        this.hV
                }
        }
        ,
        U.extend(Z.asn1.DERSequence, Z.asn1.DERAbstractStructured),
        Z.asn1.DERSet = function (t) {
            Z.asn1.DERSet.superclass.constructor.call(this, t),
                this.hT = "31",
                this.getFreshValueHex = function () {
                    for (var t = new Array, e = 0; e < this.asn1Array.length; e++) {
                        var i = this.asn1Array[e];
                        t.push(i.getEncodedHex())
                    }
                    return t.sort(),
                        this.hV = t.join(""),
                        this.hV
                }
        }
        ,
        U.extend(Z.asn1.DERSet, Z.asn1.DERAbstractStructured),
        Z.asn1.DERTaggedObject = function (t) {
            Z.asn1.DERTaggedObject.superclass.constructor.call(this),
                this.hT = "a0",
                this.hV = "",
                this.isExplicit = !0,
                this.asn1Object = null,
                this.setASN1Object = function (t, e, i) {
                    this.hT = e,
                        this.isExplicit = t,
                        this.asn1Object = i,
                        this.isExplicit ? (this.hV = this.asn1Object.getEncodedHex(),
                            this.hTLV = null,
                            this.isModified = !0) : (this.hV = null,
                            this.hTLV = i.getEncodedHex(),
                            this.hTLV = this.hTLV.replace(/^../, e),
                            this.isModified = !1)
                }
                ,
                this.getFreshValueHex = function () {
                    return this.hV
                }
                ,
            void 0 !== t && (void 0 !== t.tag && (this.hT = t.tag),
            void 0 !== t.explicit && (this.isExplicit = t.explicit),
            void 0 !== t.obj && (this.asn1Object = t.obj,
                this.setASN1Object(this.isExplicit, this.hT, this.asn1Object)))
        }
        ,
        U.extend(Z.asn1.DERTaggedObject, Z.asn1.ASN1Object),
        function (t) {
            var e, i = {
                decode: function (t) {
                    var i;
                    if (void 0 === e) {
                        var n = "0123456789ABCDEF"
                            , r = " \f\n\r\t??\u2028\u2029";
                        for (e = [],
                                 i = 0; i < 16; ++i)
                            e[n.charAt(i)] = i;
                        for (n = n.toLowerCase(),
                                 i = 10; i < 16; ++i)
                            e[n.charAt(i)] = i;
                        for (i = 0; i < r.length; ++i)
                            e[r.charAt(i)] = -1
                    }
                    var o = []
                        , s = 0
                        , a = 0;
                    for (i = 0; i < t.length; ++i) {
                        var h = t.charAt(i);
                        if ("=" == h)
                            break;
                        if (-1 != (h = e[h])) {
                            if (void 0 === h)
                                throw "Illegal character at offset " + i;
                            s |= h,
                                ++a >= 2 ? (o[o.length] = s,
                                    s = 0,
                                    a = 0) : s <<= 4
                        }
                    }
                    if (a)
                        throw "Hex encoding incomplete: 4 bits missing";
                    return o
                }
            };
            window.Hex = i
        }(),
        function (t) {
            var e, i = {
                decode: function (t) {
                    var i;
                    if (void 0 === e) {
                        var n = "= \f\n\r\t??\u2028\u2029";
                        for (e = [],
                                 i = 0; i < 64; ++i)
                            e["ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(i)] = i;
                        for (i = 0; i < n.length; ++i)
                            e[n.charAt(i)] = -1
                    }
                    var r = []
                        , o = 0
                        , s = 0;
                    for (i = 0; i < t.length; ++i) {
                        var a = t.charAt(i);
                        if ("=" == a)
                            break;
                        if (-1 != (a = e[a])) {
                            if (void 0 === a)
                                throw "Illegal character at offset " + i;
                            o |= a,
                                ++s >= 4 ? (r[r.length] = o >> 16,
                                    r[r.length] = o >> 8 & 255,
                                    r[r.length] = 255 & o,
                                    o = 0,
                                    s = 0) : o <<= 6
                        }
                    }
                    switch (s) {
                        case 1:
                            throw "Base64 encoding incomplete: at least 2 bits missing";
                        case 2:
                            r[r.length] = o >> 10;
                            break;
                        case 3:
                            r[r.length] = o >> 16,
                                r[r.length] = o >> 8 & 255
                    }
                    return r
                },
                re: /-----BEGIN [^-]+-----([A-Za-z0-9+\/=\s]+)-----END [^-]+-----|begin-base64[^\n]+\n([A-Za-z0-9+\/=\s]+)====/,
                unarmor: function (t) {
                    var e = i.re.exec(t);
                    if (e)
                        if (e[1])
                            t = e[1];
                        else {
                            if (!e[2])
                                throw "RegExp out of sync";
                            t = e[2]
                        }
                    return i.decode(t)
                }
            };
            window.Base64 = i
        }(),
        dd = function (t) {
            function e(t, i) {
                t instanceof e ? (this.enc = t.enc,
                    this.pos = t.pos) : (this.enc = t,
                    this.pos = i)
            }

            function i(t, e, i, n, r) {
                this.stream = t,
                    this.header = e,
                    this.length = i,
                    this.tag = n,
                    this.sub = r
            }

            var n = {
                tag: function (t, e) {
                    var i = document.createElement(t);
                    return i.className = e,
                        i
                },
                text: function (t) {
                    return document.createTextNode(t)
                }
            };
            e.prototype.get = function (t) {
                if (void 0 === t && (t = this.pos++),
                t >= this.enc.length)
                    throw "Requesting byte offset " + t + " on a stream of length " + this.enc.length;
                return this.enc[t]
            }
                ,
                e.prototype.hexDigits = "0123456789ABCDEF",
                e.prototype.hexByte = function (t) {
                    return this.hexDigits.charAt(t >> 4 & 15) + this.hexDigits.charAt(15 & t)
                }
                ,
                e.prototype.hexDump = function (t, e, i) {
                    for (var n = "", r = t; r < e; ++r)
                        if (n += this.hexByte(this.get(r)),
                        !0 !== i)
                            switch (15 & r) {
                                case 7:
                                    n += "  ";
                                    break;
                                case 15:
                                    n += "\n";
                                    break;
                                default:
                                    n += " "
                            }
                    return n
                }
                ,
                e.prototype.parseStringISO = function (t, e) {
                    for (var i = "", n = t; n < e; ++n)
                        i += String.fromCharCode(this.get(n));
                    return i
                }
                ,
                e.prototype.parseStringUTF = function (t, e) {
                    for (var i = "", n = t; n < e;) {
                        var r = this.get(n++);
                        i += r < 128 ? String.fromCharCode(r) : r > 191 && r < 224 ? String.fromCharCode((31 & r) << 6 | 63 & this.get(n++)) : String.fromCharCode((15 & r) << 12 | (63 & this.get(n++)) << 6 | 63 & this.get(n++))
                    }
                    return i
                }
                ,
                e.prototype.parseStringBMP = function (t, e) {
                    for (var i = "", n = t; n < e; n += 2) {
                        var r = this.get(n)
                            , o = this.get(n + 1);
                        i += String.fromCharCode((r << 8) + o)
                    }
                    return i
                }
                ,
                e.prototype.reTime = /^((?:1[89]|2\d)?\d\d)(0[1-9]|1[0-2])(0[1-9]|[12]\d|3[01])([01]\d|2[0-3])(?:([0-5]\d)(?:([0-5]\d)(?:[.,](\d{1,3}))?)?)?(Z|[-+](?:[0]\d|1[0-2])([0-5]\d)?)?$/,
                e.prototype.parseTime = function (t, e) {
                    var i = this.parseStringISO(t, e)
                        , n = this.reTime.exec(i);
                    return n ? (i = n[1] + "-" + n[2] + "-" + n[3] + " " + n[4],
                    n[5] && (i += ":" + n[5],
                    n[6] && (i += ":" + n[6],
                    n[7] && (i += "." + n[7]))),
                    n[8] && (i += " UTC",
                    "Z" != n[8] && (i += n[8],
                    n[9] && (i += ":" + n[9]))),
                        i) : "Unrecognized time: " + i
                }
                ,
                e.prototype.parseInteger = function (t, e) {
                    var i = e - t;
                    if (i > 4) {
                        i <<= 3;
                        var n = this.get(t);
                        if (0 === n)
                            i -= 8;
                        else
                            for (; n < 128;)
                                n <<= 1,
                                    --i;
                        return "(" + i + " bit)"
                    }
                    for (var r = 0, o = t; o < e; ++o)
                        r = r << 8 | this.get(o);
                    return r
                }
                ,
                e.prototype.parseBitString = function (t, e) {
                    var i = this.get(t)
                        , n = (e - t - 1 << 3) - i
                        , r = "(" + n + " bit)";
                    if (n <= 20) {
                        var o = i;
                        r += " ";
                        for (var s = e - 1; s > t; --s) {
                            for (var a = this.get(s), h = o; h < 8; ++h)
                                r += a >> h & 1 ? "1" : "0";
                            o = 0
                        }
                    }
                    return r
                }
                ,
                e.prototype.parseOctetString = function (t, e) {
                    var i = e - t
                        , n = "(" + i + " byte) ";
                    i > 100 && (e = t + 100);
                    for (var r = t; r < e; ++r)
                        n += this.hexByte(this.get(r));
                    return i > 100 && (n += "???"),
                        n
                }
                ,
                e.prototype.parseOID = function (t, e) {
                    for (var i = "", n = 0, r = 0, o = t; o < e; ++o) {
                        var s = this.get(o);
                        if (n = n << 7 | 127 & s,
                            r += 7,
                            !(128 & s)) {
                            if ("" === i) {
                                var a = n < 80 ? n < 40 ? 0 : 1 : 2;
                                i = a + "." + (n - 40 * a)
                            } else
                                i += "." + (r >= 31 ? "bigint" : n);
                            n = r = 0
                        }
                    }
                    return i
                }
                ,
                i.prototype.typeName = function () {
                    if (void 0 === this.tag)
                        return "unknown";
                    var t = this.tag >> 6
                        , e = (this.tag,
                    31 & this.tag);
                    switch (t) {
                        case 0:
                            switch (e) {
                                case 0:
                                    return "EOC";
                                case 1:
                                    return "BOOLEAN";
                                case 2:
                                    return "INTEGER";
                                case 3:
                                    return "BIT_STRING";
                                case 4:
                                    return "OCTET_STRING";
                                case 5:
                                    return "NULL";
                                case 6:
                                    return "OBJECT_IDENTIFIER";
                                case 7:
                                    return "ObjectDescriptor";
                                case 8:
                                    return "EXTERNAL";
                                case 9:
                                    return "REAL";
                                case 10:
                                    return "ENUMERATED";
                                case 11:
                                    return "EMBEDDED_PDV";
                                case 12:
                                    return "UTF8String";
                                case 16:
                                    return "SEQUENCE";
                                case 17:
                                    return "SET";
                                case 18:
                                    return "NumericString";
                                case 19:
                                    return "PrintableString";
                                case 20:
                                    return "TeletexString";
                                case 21:
                                    return "VideotexString";
                                case 22:
                                    return "IA5String";
                                case 23:
                                    return "UTCTime";
                                case 24:
                                    return "GeneralizedTime";
                                case 25:
                                    return "GraphicString";
                                case 26:
                                    return "VisibleString";
                                case 27:
                                    return "GeneralString";
                                case 28:
                                    return "UniversalString";
                                case 30:
                                    return "BMPString";
                                default:
                                    return "Universal_" + e.toString(16)
                            }
                        case 1:
                            return "Application_" + e.toString(16);
                        case 2:
                            return "[" + e + "]";
                        case 3:
                            return "Private_" + e.toString(16)
                    }
                }
                ,
                i.prototype.reSeemsASCII = /^[ -~]+$/,
                i.prototype.content = function () {
                    if (void 0 === this.tag)
                        return null;
                    var t = this.tag >> 6
                        , e = 31 & this.tag
                        , i = this.posContent()
                        , n = Math.abs(this.length);
                    if (0 !== t) {
                        if (null !== this.sub)
                            return "(" + this.sub.length + " elem)";
                        var r = this.stream.parseStringISO(i, i + Math.min(n, 100));
                        return this.reSeemsASCII.test(r) ? r.substring(0, 200) + (r.length > 200 ? "???" : "") : this.stream.parseOctetString(i, i + n)
                    }
                    switch (e) {
                        case 1:
                            return 0 === this.stream.get(i) ? "false" : "true";
                        case 2:
                            return this.stream.parseInteger(i, i + n);
                        case 3:
                            return this.sub ? "(" + this.sub.length + " elem)" : this.stream.parseBitString(i, i + n);
                        case 4:
                            return this.sub ? "(" + this.sub.length + " elem)" : this.stream.parseOctetString(i, i + n);
                        case 6:
                            return this.stream.parseOID(i, i + n);
                        case 16:
                        case 17:
                            return "(" + this.sub.length + " elem)";
                        case 12:
                            return this.stream.parseStringUTF(i, i + n);
                        case 18:
                        case 19:
                        case 20:
                        case 21:
                        case 22:
                        case 26:
                            return this.stream.parseStringISO(i, i + n);
                        case 30:
                            return this.stream.parseStringBMP(i, i + n);
                        case 23:
                        case 24:
                            return this.stream.parseTime(i, i + n)
                    }
                    return null
                }
                ,
                i.prototype.toString = function () {
                    return this.typeName() + "@" + this.stream.pos + "[header:" + this.header + ",length:" + this.length + ",sub:" + (null === this.sub ? "null" : this.sub.length) + "]"
                }
                ,
                i.prototype.print = function (t) {
                    if (void 0 === t && (t = ""),
                        document.writeln(t + this),
                    null !== this.sub) {
                        t += "  ";
                        for (var e = 0, i = this.sub.length; e < i; ++e)
                            this.sub[e].print(t)
                    }
                }
                ,
                i.prototype.toPrettyString = function (t) {
                    void 0 === t && (t = "");
                    var e = t + this.typeName() + " @" + this.stream.pos;
                    if (this.length >= 0 && (e += "+"),
                        e += this.length,
                        32 & this.tag ? e += " (constructed)" : 3 != this.tag && 4 != this.tag || null === this.sub || (e += " (encapsulates)"),
                        e += "\n",
                    null !== this.sub) {
                        t += "  ";
                        for (var i = 0, n = this.sub.length; i < n; ++i)
                            e += this.sub[i].toPrettyString(t)
                    }
                    return e
                }
                ,
                i.prototype.toDOM = function () {
                    var t = n.tag("div", "node");
                    t.asn1 = this;
                    var e = n.tag("div", "head")
                        , i = this.typeName().replace(/_/g, " ");
                    e.innerHTML = i;
                    var r = this.content();
                    if (null !== r) {
                        r = String(r).replace(/</g, "&lt;");
                        var o = n.tag("span", "preview");
                        o.appendChild(n.text(r)),
                            e.appendChild(o)
                    }
                    t.appendChild(e),
                        this.node = t,
                        this.head = e;
                    var a = n.tag("div", "value");
                    if (i = "Offset: " + this.stream.pos + "<br/>",
                        i += "Length: " + this.header + "+",
                        this.length >= 0 ? i += this.length : i += -this.length + " (undefined)",
                        32 & this.tag ? i += "<br/>(constructed)" : 3 != this.tag && 4 != this.tag || null === this.sub || (i += "<br/>(encapsulates)"),
                    null !== r && (i += "<br/>Value:<br/><b>" + r + "</b>",
                    "object" === ("undefined" == typeof oids ? "undefined" : s(oids)) && 6 == this.tag)) {
                        var h = oids[r];
                        h && (h.d && (i += "<br/>" + h.d),
                        h.c && (i += "<br/>" + h.c),
                        h.w && (i += "<br/>(warning!)"))
                    }
                    a.innerHTML = i,
                        t.appendChild(a);
                    var u = n.tag("div", "sub");
                    if (null !== this.sub)
                        for (var c = 0, l = this.sub.length; c < l; ++c)
                            u.appendChild(this.sub[c].toDOM());
                    return t.appendChild(u),
                        e.onclick = function () {
                            t.className = "node collapsed" == t.className ? "node" : "node collapsed"
                        }
                        ,
                        t
                }
                ,
                i.prototype.posStart = function () {
                    return this.stream.pos
                }
                ,
                i.prototype.posContent = function () {
                    return this.stream.pos + this.header
                }
                ,
                i.prototype.posEnd = function () {
                    return this.stream.pos + this.header + Math.abs(this.length)
                }
                ,
                i.prototype.fakeHover = function (t) {
                    this.node.className += " hover",
                    t && (this.head.className += " hover")
                }
                ,
                i.prototype.fakeOut = function (t) {
                    var e = / ?hover/;
                    this.node.className = this.node.className.replace(e, ""),
                    t && (this.head.className = this.head.className.replace(e, ""))
                }
                ,
                i.prototype.toHexDOM_sub = function (t, e, i, r, o) {
                    if (!(r >= o)) {
                        var s = n.tag("span", e);
                        s.appendChild(n.text(i.hexDump(r, o))),
                            t.appendChild(s)
                    }
                }
                ,
                i.prototype.toHexDOM = function (t) {
                    var e = n.tag("span", "hex");
                    if (void 0 === t && (t = e),
                        this.head.hexNode = e,
                        this.head.onmouseover = function () {
                            this.hexNode.className = "hexCurrent"
                        }
                        ,
                        this.head.onmouseout = function () {
                            this.hexNode.className = "hex"
                        }
                        ,
                        e.asn1 = this,
                        e.onmouseover = function () {
                            var e = !t.selected;
                            e && (t.selected = this.asn1,
                                this.className = "hexCurrent"),
                                this.asn1.fakeHover(e)
                        }
                        ,
                        e.onmouseout = function () {
                            var e = t.selected == this.asn1;
                            this.asn1.fakeOut(e),
                            e && (t.selected = null,
                                this.className = "hex")
                        }
                        ,
                        this.toHexDOM_sub(e, "tag", this.stream, this.posStart(), this.posStart() + 1),
                        this.toHexDOM_sub(e, this.length >= 0 ? "dlen" : "ulen", this.stream, this.posStart() + 1, this.posContent()),
                    null === this.sub)
                        e.appendChild(n.text(this.stream.hexDump(this.posContent(), this.posEnd())));
                    else if (this.sub.length > 0) {
                        var i = this.sub[0]
                            , r = this.sub[this.sub.length - 1];
                        this.toHexDOM_sub(e, "intro", this.stream, this.posContent(), i.posStart());
                        for (var o = 0, s = this.sub.length; o < s; ++o)
                            e.appendChild(this.sub[o].toHexDOM(t));
                        this.toHexDOM_sub(e, "outro", this.stream, r.posEnd(), this.posEnd())
                    }
                    return e
                }
                ,
                i.prototype.toHexString = function (t) {
                    return this.stream.hexDump(this.posStart(), this.posEnd(), !0)
                }
                ,
                i.decodeLength = function (t) {
                    var e = t.get()
                        , i = 127 & e;
                    if (i == e)
                        return i;
                    if (i > 3)
                        throw "Length over 24 bits not supported at position " + (t.pos - 1);
                    if (0 === i)
                        return -1;
                    e = 0;
                    for (var n = 0; n < i; ++n)
                        e = e << 8 | t.get();
                    return e
                }
                ,
                i.hasContent = function (t, n, r) {
                    if (32 & t)
                        return !0;
                    if (t < 3 || t > 4)
                        return !1;
                    var o = new e(r);
                    if (3 == t && o.get(),
                    o.get() >> 6 & 1)
                        return !1;
                    try {
                        var s = i.decodeLength(o);
                        return o.pos - r.pos + s == n
                    } catch (t) {
                        return !1
                    }
                }
                ,
                i.decode = function (t) {
                    t instanceof e || (t = new e(t, 0));
                    var n = new e(t)
                        , r = t.get()
                        , o = i.decodeLength(t)
                        , s = t.pos - n.pos
                        , a = null;
                    if (i.hasContent(r, o, t)) {
                        var h = t.pos;
                        if (3 == r && t.get(),
                            a = [],
                        o >= 0) {
                            for (var u = h + o; t.pos < u;)
                                a[a.length] = i.decode(t);
                            if (t.pos != u)
                                throw "Content size is not correct for container starting at offset " + h
                        } else
                            try {
                                for (; ;) {
                                    var c = i.decode(t);
                                    if (0 === c.tag)
                                        break;
                                    a[a.length] = c
                                }
                                o = h - t.pos
                            } catch (t) {
                                throw "Exception while decoding undefined length content: " + t
                            }
                    } else
                        t.pos += o;
                    return new i(n, s, o, r, a)
                }
                ,
                i.test = function () {
                    for (var t = [{
                        value: [39],
                        expected: 39
                    }, {
                        value: [129, 201],
                        expected: 201
                    }, {
                        value: [131, 254, 220, 186],
                        expected: 16702650
                    }], n = 0, r = t.length; n < r; ++n) {
                        var o = new e(t[n].value, 0)
                            , s = i.decodeLength(o);
                        s != t[n].expected && document.write("In test[" + n + "] expected " + t[n].expected + " got " + s + "\n")
                    }
                }

                // window.ASN1 = i
                return i
        },
        ASN1 = dd()
        ASN1.prototype.getHexStringValue = function () {
            var t = this.toHexString()
                , e = 2 * this.header
                , i = 2 * this.length;
            return t.substr(e, i)
        }
        ,
        x.prototype.parseKey = function (t) {
            Base64 = window.Base64,Hex=window.Hex;
            try {
                var e = 0
                    , i = 0
                    , n = /^\s*(?:[0-9A-Fa-f][0-9A-Fa-f]\s*)+$/.test(t) ? Hex.decode(t) : Base64.unarmor(t)
                    , r = ASN1.decode(n);
                if (3 === r.sub.length && (r = r.sub[2].sub[0]),
                9 === r.sub.length) {
                    e = r.sub[1].getHexStringValue(),
                        this.n = E(e, 16),
                        i = r.sub[2].getHexStringValue(),
                        this.e = parseInt(i, 16);
                    var o = r.sub[3].getHexStringValue();
                    this.d = E(o, 16);
                    var s = r.sub[4].getHexStringValue();
                    this.p = E(s, 16);
                    var a = r.sub[5].getHexStringValue();
                    this.q = E(a, 16);
                    var h = r.sub[6].getHexStringValue();
                    this.dmp1 = E(h, 16);
                    var u = r.sub[7].getHexStringValue();
                    this.dmq1 = E(u, 16);
                    var c = r.sub[8].getHexStringValue();
                    this.coeff = E(c, 16)
                } else {
                    if (2 !== r.sub.length)
                        return !1;
                    var l = r.sub[1]
                        , p = l.sub[0];
                    e = p.sub[0].getHexStringValue(),
                        this.n = E(e, 16),
                        i = p.sub[1].getHexStringValue(),
                        this.e = parseInt(i, 16)
                        console.log(this.e)
                }
                return !0
            } catch (t) {
                return !1
            }
        }
        ,
        x.prototype.getPrivateBaseKey = function () {
            var t = {
                array: [new Z.asn1.DERInteger({
                    int: 0
                }), new Z.asn1.DERInteger({
                    bigint: this.n
                }), new Z.asn1.DERInteger({
                    int: this.e
                }), new Z.asn1.DERInteger({
                    bigint: this.d
                }), new Z.asn1.DERInteger({
                    bigint: this.p
                }), new Z.asn1.DERInteger({
                    bigint: this.q
                }), new Z.asn1.DERInteger({
                    bigint: this.dmp1
                }), new Z.asn1.DERInteger({
                    bigint: this.dmq1
                }), new Z.asn1.DERInteger({
                    bigint: this.coeff
                })]
            };
            return new Z.asn1.DERSequence(t).getEncodedHex()
        }
        ,
        x.prototype.getPrivateBaseKeyB64 = function () {
            return D(this.getPrivateBaseKey())
        }
        ,
        x.prototype.getPublicBaseKey = function () {
            var t = {
                array: [new Z.asn1.DERObjectIdentifier({
                    oid: "1.2.840.113549.1.1.1"
                }), new Z.asn1.DERNull]
            }
                , e = new Z.asn1.DERSequence(t);
            return t = {
                array: [new Z.asn1.DERInteger({
                    bigint: this.n
                }), new Z.asn1.DERInteger({
                    int: this.e
                })]
            },
                t = {
                    hex: "00" + new Z.asn1.DERSequence(t).getEncodedHex()
                },
                t = {
                    array: [e, new Z.asn1.DERBitString(t)]
                },
                new Z.asn1.DERSequence(t).getEncodedHex()
        }
        ,
        x.prototype.getPublicBaseKeyB64 = function () {
            return D(this.getPublicBaseKey())
        }
        ,
        x.prototype.wordwrap = function (t, e) {
            if (e = e || 64,
                !t)
                return t;
            var i = "(.{1," + e + "})( +|$\n?)|(.{1," + e + "})";
            return t.match(RegExp(i, "g")).join("\n")
        }
        ,
        x.prototype.getPrivateKey = function () {
            var t = "-----BEGIN RSA PRIVATE KEY-----\n";
            return t += this.wordwrap(this.getPrivateBaseKeyB64()) + "\n",
                t += "-----END RSA PRIVATE KEY-----"
        }
        ,
        x.prototype.getPublicKey = function () {
            var t = "-----BEGIN PUBLIC KEY-----\n";
            return t += this.wordwrap(this.getPublicBaseKeyB64()) + "\n",
                t += "-----END PUBLIC KEY-----"
        }
        ,
        x.prototype.hasPublicKeyProperty = function (t) {
            return (t = t || {}).hasOwnProperty("n") && t.hasOwnProperty("e")
        }
        ,
        x.prototype.hasPrivateKeyProperty = function (t) {
            return (t = t || {}).hasOwnProperty("n") && t.hasOwnProperty("e") && t.hasOwnProperty("d") && t.hasOwnProperty("p") && t.hasOwnProperty("q") && t.hasOwnProperty("dmp1") && t.hasOwnProperty("dmq1") && t.hasOwnProperty("coeff")
        }
        ,
        x.prototype.parsePropertiesFrom = function (t) {
            this.n = t.n,
                this.e = t.e,
            t.hasOwnProperty("d") && (this.d = t.d,
                this.p = t.p,
                this.q = t.q,
                this.dmp1 = t.dmp1,
                this.dmq1 = t.dmq1,
                this.coeff = t.coeff)
        }
    ;
    var J = function (t) {
        x.call(this),
        t && ("string" == typeof t ? this.parseKey(t) : (this.hasPrivateKeyProperty(t) || this.hasPublicKeyProperty(t)) && this.parsePropertiesFrom(t))
    };
    (J.prototype = new x).constructor = J;
    var $ = function (t) {
        t = t || {},
            this.default_key_size = parseInt(t.default_key_size) || 1024,
            this.default_public_exponent = t.default_public_exponent || "010001",
            this.log = t.log || !1,
            this.key = null
    };
    $.prototype.setKey = function (t) {
        this.log && this.key,
            this.key = new J(t)
    }
        ,
        $.prototype.setPrivateKey = function (t) {
            this.setKey(t)
        }
        ,
        $.prototype.setPublicKey = function (t) {
            this.setKey(t)
        }
        ,
        $.prototype.decrypt = function (t) {
            try {
                return this.getKey().decrypt(O(t))
            } catch (t) {
                return !1
            }
        }
        ,
        $.prototype.encrypt = function (t) {
            try {
                return D(this.getKey().encrypt(t))
            } catch (t) {
                return !1
            }
        }
        ,
        $.prototype.getKey = function (t) {
            if (!this.key) {
                if (this.key = new J,
                t && "[object Function]" === {}.toString.call(t))
                    return void this.key.generateAsync(this.default_key_size, this.default_public_exponent, t);
                this.key.generate(this.default_key_size, this.default_public_exponent)
            }
            return this.key
        }
        ,
        $.prototype.getPrivateKey = function () {
            return this.getKey().getPrivateKey()
        }
        ,
        $.prototype.getPrivateKeyB64 = function () {
            return this.getKey().getPrivateBaseKeyB64()
        }
        ,
        $.prototype.getPublicKey = function () {
            return this.getKey().getPublicKey()
        }
        ,
        $.prototype.getPublicKeyB64 = function () {
            return this.getKey().getPublicBaseKeyB64()
        }
        $.version = "2.3.1";
        var  rr = new $();
        rr.setPublicKey(publickey)
        return rr.encrypt(pwd_lt)
}
Ni = function() {
    for (var t = 1 * new Date, n = 0; t === 1 * new Date && n < 200; )
        n++;
    return t.toString(16) + n.toString(16)
}
function cuid() {
    var t = (1080 * 1920).toString(16);
    return Ni() + "-" + Math.random().toString(16).replace(".", "") + "-" + function() {
        var t = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.138 Safari/537.36"
            , n = void 0
            , e = void 0
            , i = []
            , r = 0;
        function o(t, n) {
            var e = void 0
                , r = 0;
            for (e = 0; e < n.length; e++)
                r |= i[e] << 8 * e;
            return t ^ r
        }
        for (n = 0; n < t.length; n++)
            e = t.charCodeAt(n),
                i.unshift(255 & e),
            4 <= i.length && (r = o(r, i),
                i = []);
        return 0 < i.length && (r = o(r, i)),
            r.toString(16)
    }() + "-" + t + "-" + Ni()
}
function Li() {
    return Math.floor(1 + 65535 * Math.random()).toString(16).substring(1)
}
function Vi() {
    var t = []
        , n = +new Date;
    return t.push(n.toString(16)),
        t.push(Li()),
        t.push(Li()),
        t.push(Li()),
        m = t.join("-"),
        encodeURIComponent([m,'1'].join('||'))
}
