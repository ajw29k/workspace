
-- 서브쿼리 : 하나의 쿼리 안에 또 다른 쿼리가 존재하는 문법
-- 서브쿼리는 반드시 () 소괄호 안에 작성한다
-- 사원 이름이 김사랑인 사원이 소속된 부서명을 조회
SELECT DNAME
FROM dept
WHERE DEPTNO = (SELECT DEPTNO
					FROM emp
					WHERE ENAME = '김사랑');


-- 조인
SELECT * FROM emp;
SELECT * from dept;
SELECT DNAME 
FROM dept ,emp
WHERE ename = '김사랑' 
AND dept.DEPTNO = emp.DEPTNO;

-- 모든 사원의 평균 급여보다 더 많은 급여를 갖는 사원의 사번,이름,급여 조회
SELECT EMPNO,ENAME,SAL
FROM emp
WHERE SAL > (SELECT AVG(SAL) FROM emp);

-- 인사부에 소속된 지원 중 하반기에 입사한 사원들의 사번, 이름, 입사일 조회
-- 입사일은 '2024년 08월 07일' 형태로 조회
-- 하반기 : 7월부터 12월 중 입사한 사원을 조회
SELECT EMPNO, ENAME, DATE_FORMAT(HIREDATE,'%Y년 %m월 %d일') AS HIREDATE
FROM emp
WHERE DEPTNO = (SELECT DEPTNO    
					FROM dept 
					WHERE DNAME = '인사부')
AND 7 < MONTH(HIREDATE);

-- 사번, 사원명, 부서번호, 부서명 조회
SELECT EMPNO, ENAME, DEPTNO, (SELECT DNAME FROM DEPT WHERE DEPTNO =emp.DEPTNO)
FROM emp;

SELECT * FROM board;
SELECT * FROM board_member;

-- 글 번호가 10번 이하인 게시글의 글 번호, 제목,
-- 작성자 ID 작성작 이름, 작성자 권한을 조회
SELECT BOARD_NUM
				, TITLE
				, MEM_ID
				, (SELECT MEM_NAME FROM board_member WHERE MEM_ID = board.MEM_ID) AS MEM_NAME
				, (SELECT MEM_ROLE FROM board_member WHERE MEM_ID = board.MEM_ID) AS MEM_ROLE
FROM board
WHERE BOARD_NUM <= 30;

SELECT BOARD_NUM, TITLE, BOARD.MEM_ID ,MEM_NAME
FROM board, board_member
WHERE BOARD_NUM <= 10
AND board.MEM_ID = board_member.MEM_ID;


