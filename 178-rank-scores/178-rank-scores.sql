# Write your MySQL query statement below

select s1.score,count(s2.score) as 'rank'
from (select distinct score from Scores) s2, Scores s1
where s2.score >= s1.score
group by s1.id
order by s1.score desc;

/*SELECT S1.Score, (
    SELECT COUNT(DISTINCT Score) FROM Scores WHERE Score >= S1.Score) AS 'rank'
FROM Scores S1
ORDER BY S1.Score DESC;*/
