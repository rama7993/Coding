# Write your MySQL query statement below
select d.name as 'Department' ,e.name as 'Employee',e.salary
from Employee e, Department d
where e.departmentId=d.id and e.salary= (select max(e1.salary) from Employee e1 where e1.departmentId=e.departmentId); #department wise max salary
