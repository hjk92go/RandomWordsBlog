import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import { userLogout } from '../modules/currentUser';

const HomeLink = () => {


    //로그인 유무를 확인하기 위한 변수를 만들어 준다
    const login = false;
    // 리덕스의 state값을 가져와서 확인
    const user = useSelector((state)=>(state.currentUser));
    const dispatch = useDispatch();
    return (
        <div className='Home_Link'>

            {
                //삼항연산자 넣어줄때 div안에 넣어줄것
                user ? 
                    (<div>
                        {/* *로그인했을때 보이는 화면 
                      * *단, 관리자 페이지는 홈페이지 주인만 보기 */}
                        <Link>포스트</Link>
                        <Link>방명록</Link>
                        <Link>관리자 페이지</Link>
                        <Link>마이페이지</Link>
                        <Link onClick={()=>{ dispatch(userLogout()) }}>로그아웃</Link>
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