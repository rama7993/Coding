select max(e.salary) as SecondHighestSalary 
from  Employee e
where e.salary < (select max(salary) from Employee) ;
