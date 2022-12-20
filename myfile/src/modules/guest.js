//방명록 리스트 저장
//초기값_미리 값을 넣어주려고함
// => 미리 값을 넣기 위해서
const initalState = [
    {
        guestId : 1,
        name : "green",
        text:"블로그 잘봤습니다.",
    },
    {
        guestId : 2,
        name : "익명",
        text:"들렸다가요.",
    },
]

//값을 구분하기 위한 id
let guestId = 3;
  




//리듀서
function guest(state = initalState,action) {
    switch (action.type) {
        case "addGuest" :
            //방명록을 리스트에 추가하는 형식
            //방명록으로 작성한 값을 가져와서 리스트에 추가하는 형태
            //가져올 방명록의 값 : name, text
            //guestId값 추가
            const newGuest = {...action.payload, guestId : guestId}
            guestId++;


            //만들어진 방명록 객체를 배열에 추가 : 새로 배열을 만들어서 추가한다
            //concat을 통해 사용한다.
            const newGuestArray = state.concat(newGuest)   
            return newGuestArray;
        default :                           //switch는 항상 디폴트값을 넣어줘야한다.
            return state;
    }
}




//액션함수
export const addGuest = (guest) =>({type:"addGuest", payload:guest})
export default guest;