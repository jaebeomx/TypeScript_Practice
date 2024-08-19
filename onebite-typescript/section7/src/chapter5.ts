/**
 * 프로미스
 */

const promise = new Promise<number>((resolve, reject) => {
  setTimeout(() => {
    resolve(20);
    // reject("~~때문에 실패");
  }, 2000);
});

promise.then((response) => {
  console.log(response);
});

promise.catch((error) => {
  console.log(error);
});

/**
 * 그런데 우리가 보통 프로미스는 실제 프로덕션을 만들 때 <number>
 * 이렇게 쓰기보다는 어떤 데이터를 불러오는 함수의 반환값으로 자주 쓴다.
 * 따라서 프로미스를 반환하는 함수의 타입을 정의해보자
 *  */

// 서버로부터 하나의 게시글의 데이터를 불러오는 함수를 만들어야한다고 가정
// 1. 인터페이스로 게시글의 타입부터 정의
interface Post {
  id: number;
  title: string;
  content: string;
}

function fetchPost(): Promise<Post> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        id: 1,
        title: "게시글 제목",
        content: "게시글 컨텐츠",
      });
    }, 3000);
  });
}

const postRequest = fetchPost();
postRequest.then((post) => {
  console.log(post.id);
});
