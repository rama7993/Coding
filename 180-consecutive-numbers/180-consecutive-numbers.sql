# Write your MySQL query statement below
select distinct(l.num) as ConsecutiveNums #distinct to filter repeating more than 3 consecutives
from Logs l
where ( (l.id+1,l.num) in (select id,num  from Logs) and (l.id+2,l.num) in (select id,num  from Logs) );
