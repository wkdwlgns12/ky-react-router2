import React from "react";
import { Link } from "react-router-dom";

const About = () => {
    const infoList = [
        { id: 1, label: "회사명", desc: "React 센터" },
        { id: 2, label: "위치", desc: "남양주시 오남" },
        { id: 3, label: "설립연도", desc: "2020년" },
        { id: 4, label: "주요 서비스", desc: "웹 개발 교육, 프로젝트" },
        { id: 5, label: "연락처", desc: "abc123@naver.com" },
        { id: 6, label: "대표자", desc: "홍길동" }, // 새 데이터 추가
    ];
    return (
        <section>
            <h1>About 페이지</h1>
            <ul className="list">
                {infoList.map((i) => (
                    <li key={i.id}>
                        <Link to={`/about/${i.id}`}>
                            {i.id} - {i.desc}
                        </Link>
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default About