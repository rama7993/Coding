# Write your MySQL query statement below

SELECT DISTINCT(l1.Num) AS ConsecutiveNums
FROM Logs l1,Logs l2,Logs l3
WHERE l1.Id = l2.Id - 1 AND l2.Id = l3.Id - 1 AND l1.Num = l2.Num AND l2.Num = l3.Num ;

/*select distinct(l.num) as ConsecutiveNums #distinct to filter repeating more than 3 consecutives
from Logs l
where ( (l.id+1,l.num) in (select id,num  from Logs) and (l.id+2,l.num) in (select id,num  from Logs) );
*/