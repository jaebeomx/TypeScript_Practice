/**
 * Pick<T,K>
 * -> 뽑다, 고르다
 * -> 객체 탕비으로부터 특정 프로퍼티만 고르기
 */

interface Post {
  title: string;
  tags: string[];
  content: string;
  thumbnailURL?: string;
}

type Pick<T, K extends keyof T> = {
  // K extends "title" | "tags" | "content" | "thumbnailURL"
  [key in K]: T[key];
};

const legacyPost: Pick<Post, "title" | "content"> = {
  title: "옛널 글",
  content: "옛날 컨텐츠",
};

/**
 * Omit<T,K>
 * -> 생략하다, 빼다
 * -> 객체 타입으로부터 특정 프로퍼티를 제거하는 타입
 */

type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

const notitlePost: Omit<Post, "title"> = {
  content: "",
  tags: [],
  thumbnailURL: "",
};

/**
 * Record<K, V> (실무에서 굉장히 자주 쓰임)
 * -> 객체 타입을 새롭게 정의할 때 자주 사용
 *
 */

type Record<K extends keyof any, V> = {
  [key in K]: V;
};

type Thumbnail = Record<"large" | "medium" | "small", { url: string }>;
