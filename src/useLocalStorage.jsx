export function useLocalStorage(key, defaultValue) {
  const [value, setValue] = useState(() => {
    if (typeof window !== "undefined") {
      const savedItem = window.localStorage.getItem(key);
      const parsedItem =
        savedItem !== null ? JSON.parse(savedItem) : defaultValue;
      return parsedItem;
    }

    return defaultValue;
  });

  useEffect(() => {
    try {
      const item = window.localStorage.getItem(key);
      setValue(item ? JSON.parse(item) : defaultValue);
    } catch (error) {
      setValue(defaultValue);
    }
  }, [key, defaultValue]);

  useEffect(
    () => window.localStorage.setItem(key, JSON.stringify(value)),
    [key, value]
  );

  return [value, setValue];
}
