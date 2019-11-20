import { useState, useEffect } from "react";

const userData = [
  {
    id: 1111,
    title: "공부하기",
    status: "todo"
  },
  {
    id: 2222,
    title: "스터디준비",
    status: "todo"
  },
  {
    id: 3333,
    title: "알고리즘공부",
    status: "todo"
  },
  {
    id: 4444,
    title: "컴퓨터게임",
    status: "todo"
  }
];

const useFetch = (callback) => {
  const [loading, setLoading] = useState();

  const fetchInitialData = () => {
    setLoading(true);
    callback(userData);
    setLoading(false);
  };
  
  // 배열 초기값 설정시 한번만 실행 즉, 로딩시 한번만 실행
  useEffect(() => {
    fetchInitialData();
  }, []);

  return loading;
};

export default useFetch;
