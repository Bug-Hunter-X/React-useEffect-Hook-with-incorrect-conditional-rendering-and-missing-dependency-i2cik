```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Correct condition for conditional rendering
    if (count > 0) {
      console.log('Count is greater than 0');
    } else if (count === 0) {
      console.log('Count is 0');
    }
  }, [count]);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```