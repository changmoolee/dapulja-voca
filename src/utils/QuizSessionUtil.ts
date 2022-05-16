// 배열 내의 요소들을 무작위로 섞습니다.
export const shuffle = (array: number[]) => {
  array.sort(() => Math.random() - 0.5)
}
// (배열)길이 내의 무작위 수를 반환합니다.
export const randomize = (length: number) => Math.floor(Math.random() * length)
