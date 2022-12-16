import { Link } from 'react-router-dom'
const HomeLink = () => {


    //로그인 유무를 확인하기 위한 변수를 만들어 준다
    const login = false;

    return (
        <div className='Home_Link'>

            {
                //삼항연산자 넣어줄때 div안에 넣어줄것
                login ?
                    (<div>
                        {/* *로그인했을때 보이는 화면 
                      * *단, 관리자 페이지는 홈페이지 주인만 보기 */}
                        <Link>포스트</Link>
                        <Link>방명록</Link>
                        <Link>관리자 페이지</Link>
                        <Link>마이페이지</Link>
                        <Link>로그아웃</Link>
                    </div>)
                    :
                    (<div>
                        {/**로그인되어있지 않을때 보여지는 링크 */}
                        <Link>포스트</Link>
                        <Link to='/gest'>방명록</Link>
                        <Link to='/loginForm'>로그인</Link>
                    </div>)

            }









        </div>
    );
}

export default HomeLink;