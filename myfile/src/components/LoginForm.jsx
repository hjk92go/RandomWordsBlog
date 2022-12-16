import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { initializeApp } from "firebase/app";
//파이어베이스 로그인 비밀번호 인증 임포트 그대로 가져와서 사용
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
//구글 로그인 하기
import { signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";



//폼은 항상 새로고침이 일어나기 때문에 새로고침을 막아야한다.
const LoginForm = () => {
//페이지 이동하기위한 navigate();를 받아오도록하자
    const navigate = useNavigate();


    //이메일과 비밀번호의 값을 가져올 state
    const [email, setEmail] = useState();
    const [password , setPassword] = useState();


    //이메일로 회원가입하기위한 함수를 만들어준다
    //아래의 함수는 firebase홈페이지 비밀번호 인증란에서 가져옴
    const emailCreate = () => {
    //getAuth는 파이어베이스앱에서 인증 부분을 받아오는 함수
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 회원가입성공
        const user = userCredential.user;
        console.log(user)
        navigate('/');
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode)
        if ( errorCode == "auth/email-already-in-use") {
          alert("이미 사용하고 있는 이메일입니다")
        }
        else if ( errorCode=="auth/weak-password") {
          alert("비밀번호를 6자리 이상으로 작성하세요");
        }
    });
    }


  // 이메일과 비밀번호로 로그인하기
  const emailLogin = () => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log(user)
        navigate('/');
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode,errorMessage)
        if (errorCode =="auth/wrong-password" ) {
          alert("잘못된 비밀번호입니다")
        } else if (errorCode == "auth/user-not-found" ) {
          alert("없는 이메일입니다")
        }
      });
  }

  //Form의 onSubmit에 연결할 함수
  // Form의 경우에는 새로고침으로 값이 사라질 수 있어
  // preventDefault()를 통해서 막아주어야한다
  const onsubmit = (e) => {
    e.preventDefault();
    emailLogin();
  }
    
  // 구글로 로그인하기 (팝업)
  const googleLogin = () => {
    const provider = new GoogleAuthProvider();

    const auth = getAuth();
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        console.log(user)
        navigate('/');

      }).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        console.log(errorCode,errorMessage)
      });
  }



  return (
    <div>
      <Form onSubmit={onsubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>이메일</Form.Label>
          <Form.Control type="email" placeholder="Enter email" onChange={(e)=>{setEmail(e.target.value)}}/>
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>비밀번호</Form.Label>
          <Form.Control type="password" placeholder="Password" onChange={(e)=>{setPassword(e.target.value)}} />
        </Form.Group>
        <Button variant="primary" type="submit">
          로그인
        </Button>
      </Form>
      <Button onClick={emailCreate}>위 이메일과 비밀번호로 회원가입</Button>
      <Button onClick={googleLogin}>구글로 로그인</Button>
    </div>
  );
};

export default LoginForm;