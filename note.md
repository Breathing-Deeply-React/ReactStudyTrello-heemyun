# useEffect

1. 렌더링 될 때 마다 실행
```javascript
useEffect( () => {
  // todo..
})
```

2. 화면에 첫 렌더링 될 때 실행, value값이 바뀔 때 실행
```javascript
useEffect( () => {
  // todo..
}, [value])
```

3. 화면에 첫 렌더링 될 때 실행
```javascript
useEffect( () => {
  // todo..
}, [])
```



## clean up - 정리
- 언마운트
- 다음 렌더링시 불릴 useEffect가 실행되기 전

```javascript
useEffect( () => {
  // 구독
  return (
    // 구독 취소
  )
})
```


### clean up - 예제
```javascript
import React, { useState, useEffect } from 'react';

function App() {
  const [count, setCount] = useState(1);
  const [name, setName] = useState('');

  const handleCountUpdate = () => {
    setCount(count + 1);
  };

  const handleInputChange = () => {
    setName(e.target.value);
  };

  useEffect(() => {
    console.log('첫 마운팅 때에만 (=첫 실행) 실행');
  }, []);

  useEffect(() => {
    console.log('렌더링마다 매번 실행 됨. ');
  });
  
  useEffect(() => {
    console.log('마운팅 + count가 변할 때 마다');
  }, [count]);

  useEffect(() => {
    console.log('마운팅 + name이 변할 때 마다');
  }, [name]);

  return (
    <div>
      <button onClick={handleCountUpdate}>Update</button> 
      <span>Count: {count}</span>
      <input type="text" value={name} onChange={handleInputChange}/>
      <span>name: {name}</span>
    </div>
  )
}
```



# web storage
## sessionStorage : 브라우저 닫으면 지워짐.
## localStorage : 브라우저 닫았다 열어도 데이터 남아있음.

JSON.stringify : 직렬화, 문자열로 압축
JSON.parse : 역직렬화