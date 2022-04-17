# Write your MySQL query statement below
select d.name as 'Department',e.name as 'Employee',e.salary  as "Salary"
from Department d, Employee e
where e.departmentId=d.id and (select count(distinct e1.salary) from Employee e1 where e.departmentId=e1.departmentId and e1.salary>e.salary )<3;
#no more than 3 salary bigger than itself