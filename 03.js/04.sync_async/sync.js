// synchronous:동기적인
// 함수가 호출된 순서대로 순차적으로 실행-동기 방식

// 1.순차실행
const firstFunc = () => console.log("첫번쨰 함수가 호출됨.");

const someLongWork = () => {
  console.log("---------------");
  console.log("특정 작업처리중.. 시간이 오래 걸림");
  console.log("---------------");
};
const secondFunc = () => console.log("두 번쨰 함수가 호출됨.");

firstFunc();
someLongWork();
secondFunc();

// 한 번에 하나의 작업(Task)만 처리하기 때문에 특정 작업(ex 특정 함수)someLongWork이 길어질 경우
// secondFunc()는 someLongWork()가 처리될 때 까지 작업이 중단(Blocking, 블로킹)됨
console.log("시간 지연중...");
// 일덩한 작업시간이 경과한 이후에 함수가 호출되도록 시간을 지연하는 sleep함수
function sleep(callbackFn, delay) {
  console.log("시간 지연중..");
  const delayedTimed = Date.now() + delay;
  while (Date.now() < delayedTimed);

  callbackFn();
}
function firstWork() {
  console.log("첫 번째 작업 수행");
}
function secondWork() {
  console.log("두 번째 작업 수행");
}
//secondWork()는 sleep의 실행이 종료된 이후 호출됨, 3초 이상 블로킹
sleep(firstWork, 3 * 1000);

secondWork();
// 이처럼 현재 실행 중인 작업(Task)이 종료할 때까지 다음에 실행될 작업이 대기하는 방식을 동기(synchronous)처리라고 함.
// 동기 처리 방식은 작업을 순서대로 하나씩 처리, 실행 순서가 보장되는 장점
// 단점: 앞선 작업이 종료할 때까지 이후 작업들이 블로킹됨
