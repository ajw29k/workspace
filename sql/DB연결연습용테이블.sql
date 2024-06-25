
-- DB 연결 연습용 테이블
CREATE TABLE TEST_MEMBER(
	MEM_NUM INT PRIMARY KEY
	, MEM_NAME VARCHAR(50) 
	, MEM_AGE INT
	, MEM_ADDR VARCHAR(50)
);

SELECT * FROM test_member;

-- 데이터 삽입
INSERT INTO test_member VALUES (1, '정명훈', 20, '서울시');
INSERT INTO test_member VALUES (2, '홍구', 39, '대전시');
INSERT INTO test_member VALUES (3, '흑운장', 40, '대구시');
INSERT INTO test_member VALUES (4, '이제동', 29, '부산시');
INSERT INTO test_member VALUES (5, '이영호', 30, '울산시');
COMMIT;
