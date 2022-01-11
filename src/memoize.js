const isPrimitive = v => typeof v !== "object" || v === null;

const createCacheObject = () => ({
  primitives: new Map(),
  objects: new WeakMap()
});

export default function memoize(fn) {
  const cache = createCacheObject();
  return (...args) => {
    const finalCacheEntry = args.reduce((currentCache, arg) => {
      const nextCache = isPrimitive(arg)
        ? currentCache.primitives
        : currentCache.objects;

      if (!nextCache.has(arg)) {
        nextCache.set(arg, createCacheObject());
      }

      return nextCache.get(arg);
    }, cache);

    if (!("result" in finalCacheEntry)) {
      finalCacheEntry.result = fn(...args);
    }

    return finalCacheEntry.result;
  };
}
