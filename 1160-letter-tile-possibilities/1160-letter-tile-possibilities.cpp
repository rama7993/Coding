#define NO_SAN __attribute__((no_sanitize("undefined", "address", "coverage", "thread")))
#define INL __attribute__((always_inline))
#define HOT __attribute__((hot))
#define BMI2 __attribute__((__target__("bmi2")))
#define INL_ATTR noexcept INL /*NO_SAN*/ HOT
#define OUTL_ATTR noexcept /*NO_SAN*/ HOT
#define LAM_ATTR INL /*NO_SAN*/ HOT noexcept

#include <immintrin.h>

template <class K, size_t max_size, unsigned char bucket_bits, class KeyHash = std::hash<K>, class KeyEq = std::equal_to<K>>
class static_flat_hash_set {
public:
    typedef K value_type;
    typedef value_type *iterator;

    static constexpr K ZERO_VAL = sizeof(K) == 8
        ? (__builtin_constant_p((K)LONG_MIN) ? (K)LONG_MIN : (K)LONG_MIN)
        : sizeof(K) == 4
            ? (__builtin_constant_p((K)INT_MIN) ? (K)INT_MIN : (K)INT_MIN)
            : (__builtin_constant_p((K)SHRT_MIN) ? (K)SHRT_MIN : (K)SHRT_MIN);
    static constexpr K RM_VAL = __builtin_constant_p((K)0xdeadbeefdeadbeefull) ? (K)0xdeadbeefdeadbeefull : (K)0xdeadbeefdeadbeefull;

    static K unmask(K km) INL {
        return km == ZERO_VAL ? 0 : km;
    }

    static bool equal(K km, K ku) INL {
        return km && KeyEq()(unmask(km), ku);
    }

    static bool equal_or_free(K km, K ku) INL {
        return !km || KeyEq()(unmask(km), ku);
    }

    static bool valid(K km) INL {
        return km && km != RM_VAL;
    }

    static constexpr size_t min_cap = 16u;

    static constexpr size_t getcap(size_t size) INL {
        return size <= min_cap ? min_cap : 1ull << (64u - __builtin_clzll(size - 1u));
    }

    static constexpr size_t cap = getcap(max_size);

private:
    value_type storage[cap];
    size_t limit;

    static size_t hash(K k) INL {
        return KeyHash()(k);
    }

    value_type *locate(K k) NO_SAN {
        const size_t h = (hash(k) << bucket_bits) & (limit - 1);
        size_t i = h;
        while (i < limit && !equal_or_free(storage[i], k)) i++;
        if (i >= limit) {
            i = 0;
            while (i < h && !equal_or_free(storage[i], k)) i++;
        }
        return storage + i;
    }

public:

    static_flat_hash_set() INL: limit(cap) {}

    value_type *locate_ins(K k) NO_SAN {
        const size_t h = (hash(k) << bucket_bits) & (limit - 1);
        size_t i = h;
        size_t f = h;
        while (i < limit && !equal_or_free(storage[i], k)) {
            if (f == h && storage[i] == RM_VAL) f = i;
            i++;
        }
        if (i >= limit) i = 0;
        while (i < h && !equal_or_free(storage[i], k)) {
            if (f == h && storage[i] == RM_VAL) f = i;
            i++;
        }
        return storage + (f == h ? i : f);
    }

    bool contains(K k) INL {
        value_type *p = locate(k);
        return equal(*p, k);
    }

    iterator find(K k) INL {
        value_type *p = locate(k);
        return p;
    }

    iterator insert(iterator p, const value_type &v) INL {
        *p = v ? v : ZERO_VAL;
        return p;
    }

    iterator insert(const value_type &v) INL {
        auto p = locate_ins(v);
        return insert(p, v);
    }

    bool erase(iterator p) INL {
        auto n = p + 1 < storage + limit ? p + 1 : storage;
        *p = *n ? RM_VAL : 0;
        return true;
    }

    bool erase(K k) INL {
        auto p = locate(k);
        return equal(*p, k) ? erase(p) : false;
    }

    void clear() INL {
        fill(storage, storage + limit, 0);
    }

    void setlimit(const size_t l) INL {
        limit = getcap(l);
    }

    size_t getlimit() const INL {
        return limit;
    }

    const value_type *data() INL {
        return storage;
    }
};

class Solution {
private:
    typedef uint64_t packed_t;

    struct shift_hash {
        static size_t operator() (const packed_t p) INL_ATTR {
            return p ^ (p >> 11) ^ (p >> 23);
        }
    };

    static constexpr uint SCAP = 256;
    typedef static_flat_hash_set<packed_t, SCAP, 1, shift_hash> set_t;

    static constexpr uint16_t fact[] = { 1, 1, 2, 6, 24, 120, 720, 5040 };

    static set_t visited;

    static packed_t pack(const string &s) INL_ATTR BMI2 {
        const char *sc = s.c_str();
        uint8_t l = s.length(), sh = 0;
        packed_t r = 0;
        if (l >= 4) {
            r = _pext_u32(*(uint32_t*)sc, 0x1F1F1F1Fu);
            sc += 4;
            sh = 20;
            l -= 4;
        }
        if (l >= 2) {
            r += _pext_u32(*(uint16_t*)sc, 0x1F1Fu) << sh;
            sc += 2;
            sh += 10;
            l -= 2;
        }
        if (l)
            r += packed_t(*sc & 0x1Fu) << sh;
        return r;
    }

    static uint perms(const string &s) INL_ATTR {
        uint8_t freqs[26] = {}; // could be compressed further to 3 bits/char
        for (const char c : s)
            freqs[c-'A']++;
        return fact[s.length()] / transform_reduce(freqs, freqs + 26, 1u, multiplies(), [](const uint8_t f) __attribute__((always_inline, hot)) noexcept { return fact[f]; });
    }

    static uint dfs(const string &s, string &seq, const uint8_t p) OUTL_ATTR BMI2 {
        return p >= s.length()
            ? ({
                const auto q = pack(seq);
                const auto it = visited.locate_ins(q);
                set_t::equal(*it, q) ? 0
                    : ({
                        visited.insert(it, q);
                        perms(seq);
                    });
            })
            : ({
                const auto d = dfs(s, seq, p + 1u);
                seq.push_back(s[p]);
                const auto t = dfs(s, seq, p + 1u);
                seq.pop_back();
                d + t;
            });
    }

public:
    static int numTilePossibilities(string &tiles) OUTL_ATTR {
        sort(tiles.begin(), tiles.end());
        const uint8_t n = tiles.length();
        visited.setlimit(2u << n);
        string seq;
        seq.reserve(n);
        const auto r = dfs(tiles, seq, 0) - 1;
        visited.clear();
        return r;
    }
};

Solution::set_t Solution::visited;

auto init = []() noexcept {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);
    cout.tie(nullptr);
    return 'c';
}();