## 기능 구현

- [x] 할 일을 등록할 수 있다.
  - [x] 엔터를 누르면 등록이 된다.
- [x] 할 일을 나열할 수 있다.
  - [x] 할 일의 전체 현황을 나타낼 수 있다.
  - [x] 진행중인 할 일만 나열할 수 있다.
    - [x] location pathname 활용하기.
    - [x] local storage 저장하기.
  - [x] 완료된 할 일만 나열할 수 있다.
- [x] 할 일을 삭제할 수 있다.
- [x] 할 일을 수정할 수 있다.
- [x] 할 일을 완료할 수 있다.
- [x] toggleAll checkbox
  - [x] 할 일을 일괄 완료 할 수 있다.
  - [x] 할 일을 일괄적으로 진행중으로 할 수 있다.
- [x] 완료한 일을 일괄 삭제 할 수 있다.
- [x] 남은 할일을 계산할 수 있다. (items left)
  - [x] 단수와 복수를 구분할 수 있다. (items, item)

## 개선할 점

- [x] react-router-dom 적용해서, gh-pages 경로 에러 수정
- [x] increasedId 캐쉬가 초기화될때, index 0 이 겹치는 문제.
- [x] `toggle-all` input을 누를 때, `All`, `Active`, `Completed`에 있는 요소만 toggle 되어야한다.
- [x] `Enter` 입력시 수정중인 input이 완료된다.
- [x] 한글 입력 시 `event.code`가 두번 발생해서, 마지막 글자 한번거 todo item으로 등록되는 현상

  - `keyCode`로 해결 (하지만 deprecated되긴함)
  - isComposing

    - https://github.com/facebook/react/issues/13104

    ```js
      useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const target = e.target as HTMLInputElement;

      if (!target.classList.contains('new-todo')) {
        return;
      }

      if (e.code === 'Enter' && e.isComposing) {
        addContent(content);
        setContent('');
      }
    };

    window.addEventListener('keydown', handler, false);
    return () => window.removeEventListener('keydown', handler, false);
    }, []);
    ```

  ```

  ```
