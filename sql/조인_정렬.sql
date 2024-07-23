
-- 여러 테이블의 내용을 동시에 조회하기(조인,JOIN)
SELECT * FROM emp;
SELECT * FROM dept;

-- 사원번호, 사원명, 부서명
-- EMP 테이블에서 DEPTNO 확인 -> 20
-- DEPT 테이블에서 DEPTNO가 20인 데이터 확인

-- 조인 조건 : 두 테이블이 공통으로 지니는 컬럼의 값이 같은 데이터만 조회
SELECT emp.EMPNO , emp.ENAME , dept.DNAME
FROM emp, dept
WHERE emp.DEPTNO = dept.DEPTNO;

-- 조인 + 별칠
SELECT EMPNO AS 사원번호
		,ENAME 사원명
		,사원.SAL
FROM emp 사원;

-- 직급이 사원인
-- 사원번호, 사원명,직급, 부서번호, 부서명,부서의 지역
SELECT EMPNO, ENAME, JOB, DNAME, LOC, E.DEPTNO, D.DEPTNO
FROM emp E, dept D
WHERE E.DEPTNO = D.DEPTNO;
AND job = '사원';

-- 조회 시 데이터를 정렬하여 조회하기
SELECT * FROM emp;

-- 사번, 사원명, 급여를 조회, 급여 기준 정렬
-- 오름차순 ASC 생략가능
-- 내림차순 DESC
SELECT empno, ename, sal
FROM emp
ORDER BY sal ASC;
SELECT empno, ename, sal
FROM emp
ORDER BY sal DESC;

-- 부서번호가 30번 아닌 사원들의
-- 사원명, 부서번호를 조회하되, 사원명 기준 내림차순으로 정렬
SELECT ename, DEPTNO 
FROM emp
WHERE DEPTNO !=30
ORDER BY ename DESC;

-- 부서명이 인사부가 아닌면서 급여가 300 이상인 사원들의
-- 사번, 사원명, 부서번호, 부서명, 급여를 조회하되,
-- 부서번호 기준 오름차순으로 정렬
SELECT EMPNO, ENAME, EMP.DEPTNO, DNAME, SAL
FROM emp,dept
WHERE SAL >= 300 AND emp.DEPTNO = dept.DEPTNO AND emp.DEPTNO != 20
ORDER BY DEPTNO;

SELECT EMPNO, ENAME, JOB, SAL
FROM emp
ORDER BY JOB ASC,SAL ASC;
