# Write your MySQL query statement below
select  jt.employee_id 
from ( select employee_id from Employees where employee_id not in( select employee_id from Salaries)
 union
 select employee_id from Salaries where employee_id not in( select employee_id from Employees)
) jt #join_table

order by  jt.employee_id;