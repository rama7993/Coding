# Write your MySQL query statement below
select e.name as " Employee"
from Employee e
where e.salary >(select e1.salary
from Employee e1 where e1.id=e.managerId);

