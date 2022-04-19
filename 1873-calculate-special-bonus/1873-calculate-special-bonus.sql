# Write your MySQL query statement below
select employee_id, if(name like 'M%' or employee_id%2=0,0,salary) as bonus 
from Employees e
order by employee_id;

#mod(employee_id,2)=0 for even