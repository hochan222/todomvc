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
- [ ] 할 일을 수정할 수 있다.
- [x] 할 일을 완료할 수 있다.
- [x] toggleAll checkbox
  - [x] 할 일을 일괄 완료 할 수 있다.
  - [x] 할 일을 일괄적으로 진행중으로 할 수 있다.
- [x] 완료한 일을 일괄 삭제 할 수 있다.
- [x] 남은 할일을 계산할 수 있다. (items left)
  - [x] 단수와 복수를 구분할 수 있다. (items, item)

## 개선할 점

- [x] increasedId 캐쉬가 초기화될때, index 0 이 겹치는 문제.
- [ ] `toggle-all` input을 누를 때, `All`, `Active`, `Completed`에 있는 요소만 toggle 되어야한다.
